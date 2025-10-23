import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-xl font-bold text-primary-foreground">A</span>
            </div>
            <span className="text-xl font-bold text-foreground">AbsensiSekolah</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#fitur" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Fitur
            </a>
            <a href="#keunggulan" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Keunggulan
            </a>
            <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
            <Button variant="default" className="ml-4">
              Hubungi Kami
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#fitur" className="block text-sm font-medium text-muted-foreground hover:text-foreground">
              Fitur
            </a>
            <a href="#keunggulan" className="block text-sm font-medium text-muted-foreground hover:text-foreground">
              Keunggulan
            </a>
            <a href="#faq" className="block text-sm font-medium text-muted-foreground hover:text-foreground">
              FAQ
            </a>
            <Button variant="default" className="w-full">
              Hubungi Kami
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
