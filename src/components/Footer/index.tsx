import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import FooterPageList from "./FooterPageList";

const Footer = () => {
  const footerPageGroups = [
    {
      title: "Layanan",
      pageList: ["Bantuan", "Tanya Kami", "Hubungi Kami", "Cara Berjualan"],
    },
    {
      title: "Tentang Kami",
      pageList: ["About Us", "Karir", "Blog", "Kebijakan Privasi", "Syarat dan ketentuan"],
    },
    {
      title: "Mitra",
      pageList: ["Supplier"],
    },
  ];

  return (
    <footer className="border-t border-border bg-white">
      <div className="grid grid-cols-1 px-4 pt-20 pb-28 gap-8 md:gap-16 md:grid-cols-4 lg:grid-cols-[1.6fr_repeat(3,1fr)_minmax(0px,0.4fr)] container md:px-5">
        <div className="flex justify-center items-center flex-col text-center gap-4 lg:gap-10">
          <div className="font-semibold">Logo</div>
          <p className="text-xs text-foreground/50 max-w-[262px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo in vestibulum, sed dapibus tristique nullam.</p>
          <div className="flex gap-[22px]">
            <Link href={"/"}>
              <Facebook className="text-primary fill-primary" size={20} />
            </Link>
            <Link href={"/"}>
              <Twitter className="text-primary fill-primary" size={20} />
            </Link>
            <Link href={"/"}>
              <Instagram className="text-primary" size={20} />
            </Link>
          </div>
        </div>
        {footerPageGroups.map(({ title, pageList }) => (
          <FooterPageList key={title} title={title} pageList={pageList} />
        ))}
      </div>
      <div className="w-full h-6 bg-[#E4FDFF]" />
    </footer>
  );
};

export default Footer;
