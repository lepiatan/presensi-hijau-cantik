import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import heroImage from "@/assets/hero-attendance.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-background py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Sistem Absensi Sekolah yang Modern & Efisien
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Kelola kehadiran siswa dan guru dengan mudah menggunakan teknologi digital yang terintegrasi dan real-time.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Check size={16} className="text-primary-foreground" />
                </div>
                <span className="text-foreground">Absensi real-time dengan notifikasi otomatis</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Check size={16} className="text-primary-foreground" />
                </div>
                <span className="text-foreground">Laporan kehadiran lengkap dan akurat</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Check size={16} className="text-primary-foreground" />
                </div>
                <span className="text-foreground">Integrasi dengan sistem akademik sekolah</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-base">
                Coba Gratis
              </Button>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <img 
              src={heroImage} 
              alt="Sistem Absensi Sekolah" 
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
