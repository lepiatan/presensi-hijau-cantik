import { ClipboardCheck, Clock, BarChart3, Users, Bell, Shield } from "lucide-react";

const features = [
  {
    icon: ClipboardCheck,
    title: "Absensi Digital",
    description: "Sistem absensi berbasis digital yang memudahkan proses pencatatan kehadiran siswa dan guru"
  },
  {
    icon: Clock,
    title: "Real-time Tracking",
    description: "Pantau kehadiran secara real-time dengan notifikasi otomatis ke orang tua dan admin"
  },
  {
    icon: BarChart3,
    title: "Laporan Lengkap",
    description: "Dashboard analytics dengan laporan kehadiran yang komprehensif dan mudah dipahami"
  },
  {
    icon: Users,
    title: "Multi-user Access",
    description: "Akses untuk guru, siswa, orang tua, dan admin dengan role yang berbeda-beda"
  },
  {
    icon: Bell,
    title: "Notifikasi Otomatis",
    description: "Pemberitahuan otomatis via email dan SMS untuk setiap aktivitas absensi"
  },
  {
    icon: Shield,
    title: "Keamanan Data",
    description: "Data tersimpan aman dengan enkripsi dan backup otomatis setiap hari"
  }
];

const Features = () => {
  return (
    <section id="keunggulan" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Kenapa Memilih Sistem Kami?
          </h2>
          <p className="text-lg text-muted-foreground">
            Kami menyediakan solusi absensi yang lengkap dan mudah digunakan untuk kebutuhan sekolah modern
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <feature.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
