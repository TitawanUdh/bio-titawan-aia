import { AiFillTikTok } from "react-icons/ai";
import { FaInstagramSquare, FaLine } from "react-icons/fa";
import { HiPhoneArrowUpRight } from "react-icons/hi2";
import "react-phone-number-input/style.css";

const links = [
  {
    num: 1,
    title: "แอดไลน์เพื่อปรึกษาฟรี",
    link: "https://line.me/ti/p/4MkTKwVD0q",
    icon: <FaLine />,
    primary: true,
  },
  {
    num: 2,
    title: "Instagram",
    link: "https://www.instagram.com/titawan.aia?igsh=MXA2NnpneXg3bDR3aA%3D%3D&utm_source=qr",
    icon: <FaInstagramSquare />,
  },
  {
    num: 3,
    title: "TikTok",
    link: "https://www.tiktok.com/@titawan.aia?_r=1&_t=ZS-95tAVrhqKtl",
    icon: <AiFillTikTok />,
  },
  {
    num: 4,
    title: "Phone Number",
    link: "tel:0889088881",
    icon: <HiPhoneArrowUpRight />,
  },
];

export default function Directions() {
  const open = (href) => {
    if (!href) return;

    // เช็คว่าถ้า link ขึ้นต้นด้วย / ให้เปิดในหน้าเดิม
    if (href.startsWith("/")) {
      window.location.href = href;
    } else {
      // ถ้าเป็น external link ให้เปิด tab ใหม่
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };
  return (
    <div className="link-list mt-4">
      {links.map((it) => {
        const disabled = !it.link;
        return (
          <div
            key={it.num}
            className={`link-card ${it.primary ? "primary" : ""}`}
            role="button"
            tabIndex={0}
            aria-disabled={disabled}
            onClick={() => !disabled && open(it.link)}
            onKeyDown={(e) => {
              if (!disabled && (e.key === "Enter" || e.key === " ")) {
                e.preventDefault();
                open(it.link);
              }
            }}
          >
            <span className="chip">{it.icon}</span>
            <div className="link-title">{it.title}</div>
          </div>
        );
      })}
    </div>
  );
}
