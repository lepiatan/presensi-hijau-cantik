import { FileText, QrCode, ScanLine, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: "Input Data Sekolah:",
      description: "Admin menambahkan data siswa, guru, dan staf ke sistem.",
    },
    {
      icon: QrCode,
      title: "Generate QR Code:",
      description: "Sistem otomatis membuat QR unik untuk setiap pengguna.",
    },
    {
      icon: ScanLine,
      title: "Absensi di Gerbang:",
      description: "Siswa dan guru cukup memindai QR untuk mencatat kehadiran.",
    },
    {
      icon: BarChart3,
      title: "Data Real Time:",
      description: "Sekolah dan orang tua langsung dapat laporan kehadiran secara instan.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 md:mb-16 text-foreground">
          "Empat Langkah Sederhana, Absensi Jadi Otomatis."
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="pt-8 pb-6 px-6 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
