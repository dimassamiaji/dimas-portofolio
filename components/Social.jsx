import Link from "next/link";
import { FaGithub, FaGoogle, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiGmail, SiWhatsapp } from "react-icons/si";

const socials = [
  {
    icon: <SiGmail />,
    path: "mailto:dimassamji@gmail.com",
  },
  {
    icon: <SiWhatsapp />,
    path: "https://wa.me/628111670079",
  },
  { icon: <FaGithub />, path: "https://github.com/dimassamiaji" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/dimas-samiaji-bb557b137/",
  },
];

function Social({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}
export default Social;
