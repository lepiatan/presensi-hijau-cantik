import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-background rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-background rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
            Siap Untuk Modernisasi Sistem Absensi Sekolah Anda?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90">
            Bergabunglah dengan ratusan sekolah yang telah merasakan kemudahan mengelola kehadiran dengan sistem kami. Dapatkan demo gratis sekarang!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-base font-semibold"
            >
              Mulai Uji Coba Gratis
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base font-semibold bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Jadwalkan Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
