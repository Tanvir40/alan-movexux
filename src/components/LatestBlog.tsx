// src/components/LatestBlog.tsx
"use client";
import Image from "next/image";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category?: string;
  date?: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The perfect summer sweater that you can wear!",
    excerpt: "Learn how to style your summer wardrobe with ease and comfort for any occasion.",
    category: "Fashion",
    date: "Aug 18",
    image: "/images/blog1.jpeg",
    slug: "summer-sweater"
  },
  {
    id: "2",
    title: "Moving Tips: How to Plan Your Relocation Smoothly",
    excerpt: "A complete guide to make your move stress-free and efficient.",
    category: "Moving Tips",
    date: "Sep 05",
    image: "/images/blog2.jpeg",
    slug: "moving-tips"
  },
  {
    id: "3",
    title: "Top 10 Packing Hacks for a Faster Move",
    excerpt: "Save time and protect your belongings with these proven packing strategies.",
    category: "Moving Hacks",
    date: "Sep 12",
    image: "/images/blog3.jpeg",
    slug: "packing-hacks"
  },
];

export default function LatestBlog() {
  return (
    <section>
      <div className="container py-12 mx-auto">
        <div className="flex flex-col sm:flex-row gap-3 justify-between pb-12 items-start sm:items-center">
            <h6 className="!text-3xl !font-bold mb-4 sm:mb-0">Our Latest Blog Posts</h6>
            <a href="#" className="inline-flex items-center text-base font-medium text-primary hover:text-[var(--primary-800)]">See All Blog Posts<svg className="w-4 h-4 ml-1 hover:text-[var(--primary-800)] transition cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 13"><path d="M0.90909 7.27799H16.8909L12.9909 11.178C12.9057 11.2625 12.8381 11.363 12.7919 11.4738C12.7458 11.5846 12.722 11.7034 12.722 11.8234C12.722 11.9435 12.7458 12.0623 12.7919 12.1731C12.8381 12.2838 12.9057 12.3844 12.9909 12.4689C13.0754 12.5541 13.176 12.6217 13.2867 12.6679C13.3975 12.714 13.5163 12.7378 13.6364 12.7378C13.7564 12.7378 13.8752 12.714 13.986 12.6679C14.0967 12.6217 14.1973 12.5541 14.2818 12.4689L19.7363 7.01436C19.8206 6.92941 19.8873 6.82867 19.9325 6.71791C19.9777 6.60715 20.0007 6.48855 20 6.3689C19.9995 6.24862 19.9751 6.12964 19.9283 6.01884C19.8815 5.90805 19.8132 5.80764 19.7273 5.72345C19.6362 5.63518 19.5277 5.56693 19.4087 5.5231C19.2897 5.47926 19.1629 5.4608 19.0363 5.4689H0.90909C0.667985 5.4689 0.436754 5.56468 0.266266 5.73517C0.0957788 5.90566 0 6.13689 0 6.37799C0 6.6191 0.0957788 6.85033 0.266266 7.02082C0.436754 7.1913 0.667985 7.28708 0.90909 7.28708V7.27799ZM12.9909 0.268907C12.9057 0.353419 12.8381 0.453965 12.7919 0.564746C12.7458 0.675527 12.722 0.794351 12.722 0.914361C12.722 1.03437 12.7458 1.1532 12.7919 1.26398C12.8381 1.37476 12.9057 1.4753 12.9909 1.55982L15.7182 4.28709C15.8027 4.37229 15.9032 4.43992 16.014 4.48608C16.1248 4.53223 16.2436 4.55599 16.3636 4.55599C16.4836 4.55599 16.6025 4.53223 16.7132 4.48608C16.824 4.43992 16.9246 4.37229 17.0091 4.28709C17.0943 4.20257 17.1619 4.10203 17.2081 3.99125C17.2542 3.88047 17.278 3.76164 17.278 3.64163C17.278 3.52162 17.2542 3.4028 17.2081 3.29202C17.1619 3.18124 17.0943 3.08069 17.0091 2.99618L14.2818 0.268907C14.1973 0.1837 14.0967 0.116069 13.986 0.0699155C13.8752 0.0237622 13.7564 0 13.6364 0C13.5163 0 13.3975 0.0237622 13.2867 0.0699155C13.176 0.116069 13.0754 0.1837 12.9909 0.268907Z" fill="currentColor"></path></svg></a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <a href={`/blog/${post.slug}`} className="block relative h-56 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </a>

              <div className="p-5 flex flex-col justify-between flex-1">
                {post.category && (
                  <span className="text-xs text-indigo-600 uppercase font-medium mb-2">{post.category}</span>
                )}
                <a
                  href={`/blog/${post.slug}`}
                  className="text-lg font-bold text-gray-900 hover:text-indigo-600 transition duration-300 mb-2"
                >
                  {post.title}
                </a>
                <p className="text-gray-700 text-sm mb-4">{post.excerpt}</p>
                {post.date && <span className="text-xs text-gray-500">{post.date}</span>}
              </div>
            </div>
          
          ))}
        </div>
      </div>
    </section>
  );
}