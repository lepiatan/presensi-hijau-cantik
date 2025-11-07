import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const packages = [
    {
      id: "monthly",
      name: "Paket Bulanan",
      price: "Rp. 280.000",
      features: [
        "Akses Fitur Penuh.",
        "Update Otomatis & Gratis.",
        "Dukungan Via WhatsApp & E-Mail.",
        "Bisa Dibatalkan Kapan Saja"
      ],
      highlighted: false
    },
    {
      id: "yearly",
      name: "Paket Tahunan",
      price: "Rp. 2.700.000",
      badge: "Paling Hemat",
      features: [
        "Semua Fitur Di Paket Bulanan.",
        "Akses Penuh Selama 1 Tahun.",
        "Hemat Hingga 20% Dibanding Bulanan.",
        "Dukungan Prioritas."
      ],
      highlighted: true
    },
    {
      id: "quarterly",
      name: "Paket 3 Bulan",
      price: "Rp. 750.000",
      features: [
        "Semua Fitur Di Paket Bulanan.",
        "Akses Penuh Selama 90 Hari.",
        "Hemat Hingga 10%"
      ],
      highlighted: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Paket Layanan
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Pilih paket yang paling sesuai dengan kebutuhan dan skala sekolah Anda.
            <br />
            Harga yang tercantum adalah harga dasar (dapat berubah sesuai S&K)
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className={`relative ${
                pkg.highlighted
                  ? "border-2 border-primary shadow-lg scale-105"
                  : "border-border"
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                    {pkg.badge}
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl text-primary mb-4">
                  {pkg.name}
                </CardTitle>
                <div className="text-4xl font-bold text-primary">
                  {pkg.price}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={pkg.highlighted ? "default" : "outline"}
                  size="lg"
                >
                  Pilih Paket
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
