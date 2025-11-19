// app/contact/page.tsx

import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Personal Web",
};

export default function ContactPage() {
  return (
    <section className="container">
      <h1>Contact Me</h1>
      <p>
        หากต้องการติดต่อหรือสอบถามเพิ่มเติม
        สามารถติดต่อฉันได้ผ่านช่องทางด้านล่างนี้ครับ/ค่ะ 💬
      </p>

      {/* ✅ เพิ่มรูปภาพโปรไฟล์ */}
      <div style={{ textAlign: "center", margin: "2rem 0" }}>
        <Image
          src="/images/profile.jpg" // 🔹 ใส่ path รูปภาพ (เก็บใน public/images/)
          alt="My profile picture"
          width={200}
          height={200}
          style={{ borderRadius: "50%" }}
        />
        <p>— นี่คือฉันเอง 😄 —</p>
      </div>

      <div className="card">
        <h2>Contact Info</h2>
        <ul>
          <li>
            📧 Email: <a href="mailto:example@email.com">example@email.com</a>
          </li>
          <li>
            💼 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/yourprofile
            </a>
          </li>
          <li>
            🐙 GitHub:{" "}
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/yourgithub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
