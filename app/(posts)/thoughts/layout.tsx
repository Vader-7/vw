import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/Navbar";

interface ThoughtsLayoutProps {
  children: React.ReactNode;
}

export default function ThoughtsLayout({ children }: ThoughtsLayoutProps) {
  return (
    <div className="container py-[3rem]">
      <NavBar />
      <div className="py-[3rem]">
        {children}
      </div>
      <Footer />
    </div>
  );
}
