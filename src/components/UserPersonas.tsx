import { Button } from "@/components/ui/button";
import parentImage from "@/assets/parent-persona.jpg";
import teacherImage from "@/assets/teacher-persona.jpg";
import studentImage from "@/assets/student-persona.jpg";

const UserPersonas = () => {
  const personas = [
    {
      id: "parent",
      title: "Untuk Orang Tua",
      image: parentImage,
      descriptions: [
        "Bayangkan setiap pagi, Anda bisa tahu anak sudah sampai di sekolah — tanpa perlu menunggu laporan dari guru.",
        "Tidak perlu repot tanya atau menunggu rapor, semua informasi hadir otomatis dan real time di genggaman."
      ]
    },
    {
      id: "teacher",
      title: "Untuk Guru",
      image: teacherImage,
      descriptions: [
        "Begitu siswa memindai QR Code di gerbang, data langsung masuk otomatis ke sistem.",
        "Hubsensi membantu guru menghemat waktu, bukan menambah pekerjaan."
      ]
    },
    {
      id: "student",
      title: "Untuk Siswa",
      image: studentImage,
      descriptions: [
        "Cukup pindai QR Code saat datang ke sekolah — tidak perlu antre panjang.",
        "Prosesnya cepat, praktis, dan bikin terbiasa datang tepat waktu."
      ]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-0">
          {personas.map((persona) => (
            <div
              key={persona.id}
              className="relative min-h-[600px] overflow-hidden group"
            >
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${persona.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-center items-center text-center px-8 py-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  {persona.title}
                </h3>

                <div className="space-y-6 mb-12">
                  {persona.descriptions.map((desc, index) => (
                    <p key={index} className="text-base md:text-lg text-white/90 leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition-all duration-300"
                >
                  daftar demo gratis
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserPersonas;
