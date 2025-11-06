import { Smartphone, FileText, Settings, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import dashboardImage from "@/assets/dashboard-mockup.png";

const featureList = [
  {
    icon: Smartphone,
    title: "Absensi via Smartphone",
    description: "Guru dan siswa dapat melakukan absensi menggunakan smartphone dengan mudah dan cepat"
  },
  {
    icon: FileText,
    title: "Laporan Otomatis",
    description: "Generate laporan kehadiran bulanan secara otomatis dengan format yang dapat disesuaikan"
  },
  {
    icon: Settings,
    title: "Kustomisasi Sistem",
    description: "Sesuaikan sistem dengan kebutuhan sekolah Anda, dari jadwal hingga metode absensi"
  },
  {
    icon: TrendingUp,
    title: "Analisis Data",
    description: "Dapatkan insight mendalam tentang pola kehadiran dengan visualisasi data yang menarik"
  }
];

const FeatureShowcase = () => {
  return (
    <section id="fitur" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Fitur Lengkap untuk Mengelola Kehadiran
              </h2>
              <p className="text-lg text-muted-foreground">
                Sistem absensi terintegrasi dengan fitur end-to-end yang memudahkan pengelolaan kehadiran di sekolah Anda
              </p>
            </div>

            <div className="space-y-4">
              {featureList.map((feature, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-4 rounded-xl hover:bg-background transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg">
                Pelajari Lebih Lanjut
              </Button>
              <Button size="lg" variant="outline">
                Lihat Demo
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <img 
              src={dashboardImage} 
              alt="Dashboard Absensi" 
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
