// app/project/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Personal Web",
};

export default function ProjectPage() {
  return (
    <section className="container">
      <h1>My Projects</h1>
      <p>
        โปรเจกต์ที่ฉันได้พัฒนาและฝึกฝนทักษะด้านการสร้าง Web Application
        ด้วยเทคโนโลยีสมัยใหม่ 🚀
      </p>

      <div className="card">
        <h2>Project List</h2>
        <ul>
          <li>
            💻 <strong>Portfolio Website</strong> — เว็บไซต์ส่วนตัวที่สร้างด้วย
            Next.js, Tailwind CSS, และ TypeScript
          </li>
          <li>
            🛒 <strong>Mini E-Commerce App</strong> — เว็บจำลองร้านค้าออนไลน์
            มีระบบตะกร้าสินค้าและ checkout
          </li>
          <li>
            📝 <strong>Note Manager</strong> — แอปจดบันทึกที่พัฒนาด้วย React และ
            Firebase สำหรับเก็บข้อมูลแบบเรียลไทม์
          </li>
        </ul>
      </div>
    </section>
  );
}
