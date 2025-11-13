import { FileText, QrCode, ScanLine, BarChart3 } from "lucide-react";

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
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          "Empat Langkah Sederhana, Absensi Jadi Otomatis."
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-start">
                <div className="mb-4">
                  <Icon className="w-16 h-16 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
