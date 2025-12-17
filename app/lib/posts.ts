export type Post = {
slug: string;
title: string;
excerpt: string;
content: string;
date: string;
tags?: string[];
};

export const posts: Post[] = [
 {
 slug: 'hello-nextjs',
 title: 'Hello Next.js!',
excerpt: 'เริ่มต้นทำเว็บ...',
content: '...\n- App Router\n- Dynamic Routes',
date: '2025-12-16',
tags: ['nextjs','webdev'],
 },
 {
  slug: 'react-hooks-guide',
  title: 'คู่มือ React Hooks',
  excerpt: 'เรียนรู้การใช้ Hooks ใน React สำหรับจัดการ state และ lifecycle',
  content: 'React Hooks เป็นฟีเจอร์ที่ช่วยให้คุณใช้ state และ lifecycle ใน functional components...\n\n- useState\n- useEffect\n- useContext',
  date: '2025-12-15',
  tags: ['react', 'hooks']
 },
 {
  slug: 'typescript-basics',
  title: 'พื้นฐาน TypeScript',
  excerpt: 'แนะนำการใช้ TypeScript เพื่อเพิ่มความปลอดภัยให้โค้ด',
  content: 'TypeScript เป็น superset ของ JavaScript ที่เพิ่ม type system...\n\n- Types\n- Interfaces\n- Generics',
  date: '2025-12-14',
  tags: ['typescript', 'javascript']
 },
 {
  slug: 'nextjs-routing',
  title: 'ระบบ Routing ใน Next.js',
  excerpt: 'เข้าใจการทำงานของ App Router และ Dynamic Routes',
  content: 'Next.js App Router ใช้ folder structure เพื่อกำหนด routes...\n\n- Static Routes\n- Dynamic Routes\n- Nested Routes',
  date: '2025-12-13',
  tags: ['nextjs', 'routing']
 },
 {
  slug: 'css-modules',
  title: 'การใช้ CSS Modules',
  excerpt: 'จัดการ CSS แบบ modular เพื่อหลีกเลี่ยง conflict',
  content: 'CSS Modules ช่วยให้คุณเขียน CSS แบบ scoped...\n\n- Scoped styles\n- Class names\n- Global styles',
  date: '2025-12-12',
  tags: ['css', 'styling']
 },
 {
  slug: 'api-routes-nextjs',
  title: 'สร้าง API Routes ใน Next.js',
  excerpt: 'เรียนรู้การสร้าง API endpoints ใน Next.js App Router',
  content: 'API Routes ใน Next.js ช่วยให้สร้าง backend logic...\n\n- Route handlers\n- HTTP methods\n- Database integration',
  date: '2025-12-11',
  tags: ['nextjs', 'api']
 }
];

export function getPostBySlug(slug: string) {
  return posts.find(post => post.slug === slug);
}

export function getAllPosts() {
  return posts;
}