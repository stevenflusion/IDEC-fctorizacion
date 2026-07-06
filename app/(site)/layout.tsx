import MainNavSite from "@/components/ui/MainNavSite";
import FooterNew from "@/components/ui/FooterNew";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainNavSite />
      <main className="flex-grow ">{children}</main>
      <FooterNew />
    </>
  );
}

// pt-[var(--navbar-height)]
