import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Bagaimana cara menggunakan sistem absensi ini?",
    answer: "Sistem kami sangat mudah digunakan. Guru dan siswa cukup login ke aplikasi menggunakan akun masing-masing, kemudian melakukan check-in/check-out dengan satu klik. Admin dapat memantau seluruh aktivitas melalui dashboard real-time."
  },
  {
    question: "Apakah sistem ini bisa diakses dari smartphone?",
    answer: "Ya, sistem kami fully responsive dan dapat diakses dari berbagai perangkat termasuk smartphone, tablet, dan komputer. Kami juga menyediakan aplikasi mobile khusus untuk pengalaman yang lebih optimal."
  },
  {
    question: "Bagaimana keamanan data siswa dijamin?",
    answer: "Keamanan data adalah prioritas utama kami. Semua data dienkripsi menggunakan standar industri (SSL/TLS), disimpan di server yang aman, dan dilakukan backup berkala. Sistem kami juga memiliki sertifikasi ISO 27001 untuk keamanan informasi."
  },
  {
    question: "Berapa lama waktu yang dibutuhkan untuk implementasi?",
    answer: "Waktu implementasi tergantung ukuran sekolah, namun rata-rata dapat diselesaikan dalam 1-2 minggu. Kami menyediakan tim support yang akan membantu proses setup, training, dan migrasi data dari sistem lama."
  },
  {
    question: "Apakah ada biaya tambahan untuk maintenance?",
    answer: "Tidak ada biaya tersembunyi. Paket kami sudah mencakup maintenance, update sistem, customer support 24/7, dan penyimpanan data. Anda hanya membayar biaya berlangganan bulanan atau tahunan sesuai paket yang dipilih."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold mb-2">FAQ</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-lg text-muted-foreground">
              Temukan jawaban untuk pertanyaan umum tentang sistem absensi kami
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-card"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
