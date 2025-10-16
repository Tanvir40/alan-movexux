// hooks/useFormHandler.ts
import { useState, useCallback } from "react";

interface FormState<T = Record<string, any>> {
  values: T;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  isSubmitting: boolean;
  isValid: boolean;
}

interface UseFormHandlerProps<T> {
  initialValues: T;
  validationRules?: Record<string, (value: any) => string | null>;
  onSubmit?: (values: T) => Promise<void> | void;
}

export const useFormHandler = <T extends Record<string, any>>({
  initialValues,
  validationRules = {},
  onSubmit
}: UseFormHandlerProps<T>) => {
  const [formState, setFormState] = useState<FormState<T>>({
    values: initialValues,
    errors: {},
    touched: {},
    isSubmitting: false,
    isValid: false
  });

  // Validera ett specifikt fält
  const validateField = useCallback((name: string, value: any): string | null => {
    const validator = validationRules[name];
    return validator ? validator(value) : null;
  }, [validationRules]);

  // Validera hela formuläret
  const validateForm = useCallback((values: T): Record<string, string> => {
    const errors: Record<string, string> = {};
    
    Object.keys(validationRules).forEach(key => {
      const error = validateField(key, values[key]);
      if (error) {
        errors[key] = error;
      }
    });
    
    return errors;
  }, [validateField, validationRules]);

  // Uppdatera fältvärde
  const setFieldValue = useCallback((name: string, value: any) => {
    setFormState(prev => {
      const newValues = { ...prev.values, [name]: value };
      const newErrors = { ...prev.errors };
      const newTouched = { ...prev.touched, [name]: true };
      
      // Validera fältet när det uppdateras
      const error = validateField(name, value);
      if (error) {
        newErrors[name] = error;
      } else {
        delete newErrors[name];
      }
      
      // Validera hela formuläret
      const formErrors = validateForm(newValues);
      const isValid = Object.keys(formErrors).length === 0;
      
      return {
        ...prev,
        values: newValues,
        errors: newErrors,
        touched: newTouched,
        isValid
      };
    });
  }, [validateField, validateForm]);

  // Markera fält som touched
  const setFieldTouched = useCallback((name: string) => {
    setFormState(prev => ({
      ...prev,
      touched: { ...prev.touched, [name]: true }
    }));
  }, []);

  // Hantera formulär submission
  const handleSubmit = useCallback(async (e?: React.FormEvent) => {
    e?.preventDefault();
    
    // Markera alla fält som touched för att visa errors
    const allTouched = Object.keys(formState.values).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {} as Record<string, boolean>);
    
    const errors = validateForm(formState.values);
    const isValid = Object.keys(errors).length === 0;
    
    setFormState(prev => ({
      ...prev,
      touched: allTouched,
      errors,
      isValid
    }));
    
    if (!isValid || !onSubmit) return;
    
    setFormState(prev => ({ ...prev, isSubmitting: true }));
    
    try {
      await onSubmit(formState.values);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setFormState(prev => ({ ...prev, isSubmitting: false }));
    }
  }, [formState.values, onSubmit, validateForm]);

  // Reset formulär
  const resetForm = useCallback(() => {
    setFormState({
      values: initialValues,
      errors: {},
      touched: {},
      isSubmitting: false,
      isValid: false
    });
  }, [initialValues]);

  return {
    // State
    values: formState.values,
    errors: formState.errors,
    touched: formState.touched,
    isSubmitting: formState.isSubmitting,
    isValid: formState.isValid,
    
    // Actions
    setFieldValue,
    setFieldTouched,
    handleSubmit,
    resetForm,
    
    // Helpers
    getFieldProps: (name: string) => ({
      value: formState.values[name] || '',
      onChange: (value: any) => setFieldValue(name, value),
      onBlur: () => setFieldTouched(name),
      error: formState.touched[name] ? formState.errors[name] : undefined
    })
  };
};