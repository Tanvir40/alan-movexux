// scripts/backupSanity.ts
import fs from "fs";
import path from "path";

export const backupSanity = async () => {
  try {
    // Placeholder: här kan du lägga in Sanity backup-logik
    const backupFile = path.join(process.cwd(), "sanity-backup.json");
    fs.writeFileSync(backupFile, JSON.stringify({ message: "This is a placeholder backup" }));
    console.log("Sanity backup created at", backupFile);
  } catch (err) {
    console.error("Error creating Sanity backup:", err);
  }
};

// Kör scriptet direkt om det körs med node
if (require.main === module) {
  backupSanity();
}
