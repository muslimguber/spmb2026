
export interface Question {
  id: number;
  question: string;
  options: { id: string; text: string }[];
  correctId: string;
}

export interface QuizModuleConfig {
  title: string;
  formId: string;
  entryMapping?: {
    name: string;
    userClass: string;
    quizName: string;
    score: string;
    date?: string;
  };
  questions: Question[];
}

export const QUIZ_MODULE_CONFIGS: Record<number, QuizModuleConfig> = {
  1: {
    title: "Pentingnya Berkebun",
    formId: '1FAIpQLScPEq4lH7-oyl_HypqoWOmOK_8cnynrzXcouHuTwI29u8es2A', 
    questions: [
      {
        id: 1,
        question: "Istilah untuk perjalanan makanan dari awal hingga ke konsumen adalah...",
        options: [
          { id: 'A', text: "Distribusi" },
          { id: 'B', text: "Rantai pangan" },
          { id: 'C', text: "Produksi" },
          { id: 'D', text: "Konsumsi" }
        ],
        correctId: 'B'
      },
      {
        id: 2,
        question: "Rantai pangan dimulai dari...",
        options: [
          { id: 'A', text: "Konsumen" },
          { id: 'B', text: "Pedagang" },
          { id: 'C', text: "Petani" },
          { id: 'D', text: "Distributor" }
        ],
        correctId: 'C'
      },
      {
        id: 3,
        question: "Rantai pangan disebut rapuh karena...",
        options: [
          { id: 'A', text: "Mudah rusak" },
          { id: 'B', text: "Bergantung pada banyak faktor dan bisa terganggu" },
          { id: 'C', text: "Makanannya sedikit" },
          { id: 'D', text: "Harganya mahal" }
        ],
        correctId: 'B'
      },
      {
        id: 4,
        question: "Contoh gangguan rantai pangan adalah...",
        options: [
          { id: 'A', text: "Panen berhasil" },
          { id: 'B', text: "Banjir menghambat distribusi" },
          { id: 'C', text: "Harga stabil" },
          { id: 'D', text: "Pasar ramai" }
        ],
        correctId: 'B'
      },
      {
        id: 5,
        question: "Dampak utama gangguan rantai pangan adalah...",
        options: [
          { id: 'A', text: "Makanan berlebih" },
          { id: 'B', text: "Makanan sulit didapat" },
          { id: 'C', text: "Harga murah" },
          { id: 'D', text: "Distribusi cepat" }
        ],
        correctId: 'B'
      },
      {
        id: 6,
        question: "Ketahanan pangan keluarga berarti...",
        options: [
          { id: 'A', text: "Menyimpan makanan" },
          { id: 'B', text: "Membeli makanan" },
          { id: 'C', text: "Mampu memenuhi kebutuhan pangan sendiri" },
          { id: 'D', text: "Menjual makanan" }
        ],
        correctId: 'C'
      },
      {
        id: 7,
        question: "Peristiwa yang menunjukkan pentingnya ketahanan pangan adalah...",
        options: [
          { id: 'A', text: "Liburan" },
          { id: 'B', text: "Pandemi COVID-19" },
          { id: 'C', text: "Panen raya" },
          { id: 'D', text: "Diskon pasar" }
        ],
        correctId: 'B'
      },
      {
        id: 8,
        question: "Keluarga yang memiliki kebun sendiri saat krisis akan...",
        options: [
          { id: 'A', text: "Panik" },
          { id: 'B', text: "Bergantung pada bantuan" },
          { id: 'C', text: "Lebih tenang" },
          { id: 'D', text: "Tidak makan" }
        ],
        correctId: 'C'
      },
      {
        id: 9,
        question: "Menanam di rumah melatih...",
        options: [
          { id: 'A', text: "Konsumsi" },
          { id: 'B', text: "Kemandirian pangan" },
          { id: 'C', text: "Perdagangan" },
          { id: 'D', text: "Transportasi" }
        ],
        correctId: 'B'
      },
      {
        id: 10,
        question: "Dalam Islam, menanam tanaman bernilai...",
        options: [
          { id: 'A', text: "Hiburan" },
          { id: 'B', text: "Sedekah" },
          { id: 'C', text: "Kewajiban mutlak" },
          { id: 'D', text: "Permainan" }
        ],
        correctId: 'B'
      },
      {
        id: 11,
        question: "Jika tanaman dimakan makhluk lain, maka...",
        options: [
          { id: 'A', text: "Rugi" },
          { id: 'B', text: "Tidak berpengaruh" },
          { id: 'C', text: "Mendapat pahala" },
          { id: 'D', text: "Dosa" }
        ],
        correctId: 'C'
      },
      {
        id: 12,
        question: "“Hidup dari alam” dalam budaya Melayu berarti...",
        options: [
          { id: 'A', text: "Tinggal di alam" },
          { id: 'B', text: "Bergantung pada alam untuk kebutuhan hidup" },
          { id: 'C', text: "Bermain di alam" },
          { id: 'D', text: "Menghindari kota" }
        ],
        correctId: 'B'
      },
      {
        id: 13,
        question: "Menanam dua tanaman dalam satu pot disebut...",
        options: [
          { id: 'A', text: "Rotasi tanaman" },
          { id: 'B', text: "Hidroponik" },
          { id: 'C', text: "Tumpang sari" },
          { id: 'D', text: "Monokultur" }
        ],
        correctId: 'C'
      },
      {
        id: 14,
        question: "Sawi dipilih karena...",
        options: [
          { id: 'A', text: "Mahal" },
          { id: 'B', text: "Cepat panen" },
          { id: 'C', text: "Sulit dirawat" },
          { id: 'D', text: "Tidak butuh air" }
        ],
        correctId: 'B'
      },
      {
        id: 15,
        question: "Cabai dipilih karena...",
        options: [
          { id: 'A', text: "Cepat panen" },
          { id: 'B', text: "Tidak perlu dirawat" },
          { id: 'C', text: "Berbuah dalam jangka panjang" },
          { id: 'D', text: "Murah" }
        ],
        correctId: 'C'
      },
      {
        id: 16,
        question: "Dalam satu pot, posisi cabai sebaiknya di...",
        options: [
          { id: 'A', text: "Pinggir" },
          { id: 'B', text: "Tengah pot" },
          { id: 'C', text: "Luar pot" },
          { id: 'D', text: "Atas tanah" }
        ],
        correctId: 'B'
      },
      {
        id: 17,
        question: "Posisi sawi dalam pot adalah...",
        options: [
          { id: 'A', text: "Tengah" },
          { id: 'B', text: "Pinggir pot" },
          { id: 'C', text: "Di luar" },
          { id: 'D', text: "Di bawah" }
        ],
        correctId: 'B'
      },
      {
        id: 18,
        question: "Tujuan utama tumpang sari sawi dan cabai adalah...",
        options: [
          { id: 'A', text: "Menghemat pot" },
          { id: 'B', text: "Hasil cepat dan jangka panjang sekaligus" },
          { id: 'C', text: "Mengurangi air" },
          { id: 'D', text: "Memperindah pot" }
        ],
        correctId: 'B'
      },
      {
        id: 19,
        question: "Jika rantai pangan terputus, solusi paling tepat adalah...",
        options: [
          { id: 'A', text: "Menunggu bantuan" },
          { id: 'B', text: "Membeli lebih banyak" },
          { id: 'C', text: "Menanam sendiri sebagian kebutuhan pangan" },
          { id: 'D', text: "Tidak makan" }
        ],
        correctId: 'C'
      },
      {
        id: 20,
        question: "Manfaat utama dari proyek menanam ini adalah...",
        options: [
          { id: 'A', text: "Nilai sekolah" },
          { id: 'B', text: "Hiburan" },
          { id: 'C', text: "Keterampilan hidup mandiri" },
          { id: 'D', text: "Popularitas" }
        ],
        correctId: 'C'
      }
    ]
  },
  // Placeholders for modules 2-8
  2: { 
    title: "Ayo Berkebun di Bengkalis", 
    formId: '1FAIpQLScCGTABZ1WEovtAL87d8VUFFOEXSj4WAANqannrJlIc_CXXrw', 
    entryMapping: {
      name: 'entry.111012139',
      userClass: 'entry.1530135141',
      quizName: 'entry.283943708',
      score: 'entry.1757966967'
    },
    questions: [
      {
        id: 1,
        question: "Mengapa kenaikan harga BBM dapat menyebabkan harga bahan makanan di Bengkalis ikut meningkat?",
        options: [
          { id: 'A', text: "Karena sebagian besar kebutuhan pangan Bengkalis dikirim melalui jalur laut yang bergantung pada biaya bahan bakar" },
          { id: 'B', text: "Karena masyarakat Bengkalis lebih banyak membeli makanan dari luar negeri" },
          { id: 'C', text: "Karena tanaman di Bengkalis hanya dapat tumbuh saat harga BBM stabil" },
          { id: 'D', text: "Karena kapal pengangkut bahan pangan tidak memerlukan biaya operasional lain" }
        ],
        correctId: 'A'
      },
      {
        id: 2,
        question: "Apa risiko utama jika pengiriman barang dari daratan Sumatera terhenti sementara?",
        options: [
          { id: 'A', text: "Produksi kapal di Bengkalis akan meningkat" },
          { id: 'B', text: "Persediaan kebutuhan pokok masyarakat dapat terganggu" },
          { id: 'C', text: "Semua masyarakat akan langsung beralih menjadi petani" },
          { id: 'D', text: "Harga hasil kebun otomatis turun drastis" }
        ],
        correctId: 'B'
      },
      {
        id: 3,
        question: "Mengapa nenek moyang Melayu tetap menanam tanaman pangan di sekitar rumah?",
        options: [
          { id: 'A', text: "Karena hasil kebun selalu lebih mahal daripada barang pasar" },
          { id: 'B', text: "Karena berkebun membantu menjaga ketersediaan pangan keluarga dalam berbagai keadaan" },
          { id: 'C', text: "Karena masyarakat dahulu belum mengenal perdagangan sama sekali" },
          { id: 'D', text: "Karena semua tanaman wajib ditanam di halaman rumah adat Melayu" }
        ],
        correctId: 'B'
      },
      {
        id: 4,
        question: "Makna perkataan “Tanah tidak pernah ingkar janji” adalah …",
        options: [
          { id: 'A', text: "tanah dapat menghasilkan manfaat jika dirawat dan dimanfaatkan dengan baik" },
          { id: 'B', text: "tanah selalu memberikan panen melimpah tanpa perawatan" },
          { id: 'C', text: "setiap orang wajib memiliki kebun yang luas" },
          { id: 'D', text: "hasil kebun lebih penting daripada perdagangan" }
        ],
        correctId: 'A'
      },
      {
        id: 5,
        question: "Mengapa berkebun dianggap mencerminkan kemandirian dalam budaya Melayu?",
        options: [
          { id: 'A', text: "Karena berkebun menunjukkan kemampuan seseorang memenuhi sebagian kebutuhan hidupnya sendiri" },
          { id: 'B', text: "Karena orang yang berkebun tidak membutuhkan bantuan siapa pun" },
          { id: 'C', text: "Karena semua masyarakat Melayu bekerja sebagai petani" },
          { id: 'D', text: "Karena hasil kebun selalu cukup untuk dijual setiap hari" }
        ],
        correctId: 'A'
      },
      {
        id: 6,
        question: "Pepatah “Alam terkembang jadi guru” mengajarkan bahwa …",
        options: [
          { id: 'A', text: "alam harus dimanfaatkan sebanyak mungkin tanpa batas" },
          { id: 'B', text: "manusia dapat memperoleh pelajaran hidup melalui pengamatan terhadap alam" },
          { id: 'C', text: "semua ilmu pengetahuan berasal dari pekerjaan berkebun" },
          { id: 'D', text: "alam hanya berguna bagi masyarakat desa" }
        ],
        correctId: 'B'
      },
      {
        id: 7,
        question: "Singkong dianggap penting sebagai cadangan pangan karena …",
        options: [
          { id: 'A', text: "umbinya dapat tumbuh tanpa air sama sekali" },
          { id: 'B', text: "tanaman ini mampu bertahan pada kondisi panas maupun genangan air" },
          { id: 'C', text: "singkong hanya cocok ditanam di wilayah rawa" },
          { id: 'D', text: "seluruh bagian tanaman singkong tidak dapat dimanfaatkan" }
        ],
        correctId: 'B'
      },
      {
        id: 8,
        question: "Mengapa kangkung dan bayam sering dipilih untuk kebun rumah?",
        options: [
          { id: 'A', text: "Karena masa tumbuhnya relatif cepat dan dapat dipanen lebih dari sekali" },
          { id: 'B', text: "Karena membutuhkan pupuk kimia dalam jumlah besar" },
          { id: 'C', text: "Karena hanya cocok tumbuh di lahan luas" },
          { id: 'D', text: "Karena tidak membutuhkan sinar matahari" }
        ],
        correctId: 'A'
      },
      {
        id: 9,
        question: "Apa persamaan manfaat kunyit, jahe, lengkuas, dan serai bagi masyarakat Melayu?",
        options: [
          { id: 'A', text: "Semuanya hanya digunakan sebagai tanaman hias" },
          { id: 'B', text: "Digunakan sebagai rempah masakan sekaligus bahan pengobatan tradisional" },
          { id: 'C', text: "Hanya dapat tumbuh di dataran tinggi" },
          { id: 'D', text: "Seluruhnya dipanen setiap minggu" }
        ],
        correctId: 'B'
      },
      {
        id: 10,
        question: "Mengapa ubi jalar cocok dijadikan cadangan makanan keluarga?",
        options: [
          { id: 'A', text: "Karena seluruh bagian tanaman harus segera dimakan" },
          { id: 'B', text: "Karena umbinya dapat disimpan cukup lama setelah dipanen" },
          { id: 'C', text: "Karena hanya tumbuh pada musim tertentu" },
          { id: 'D', text: "Karena membutuhkan lahan sawah yang luas" }
        ],
        correctId: 'B'
      },
      {
        id: 11,
        question: "Apa kelebihan utama tanaman pepaya dibanding beberapa tanaman buah lain?",
        options: [
          { id: 'A', text: "Dapat tumbuh tanpa tanah" },
          { id: 'B', text: "Relatif cepat berbuah dan mampu menghasilkan dalam waktu lama" },
          { id: 'C', text: "Hanya cocok ditanam di tanah berpasir" },
          { id: 'D', text: "Tidak memerlukan air hujan" }
        ],
        correctId: 'B'
      },
      {
        id: 12,
        question: "Mengapa hasil kebun sendiri dianggap lebih sehat?",
        options: [
          { id: 'A', text: "Karena ukuran hasil panennya selalu lebih besar" },
          { id: 'B', text: "Karena penggunaan bahan pengawet dan pestisida berbahaya dapat dikurangi" },
          { id: 'C', text: "Karena seluruh hasil kebun bebas dari serangga" },
          { id: 'D', text: "Karena tidak memerlukan proses pencucian sebelum dimakan" }
        ],
        correctId: 'B'
      },
      {
        id: 13,
        question: "Apa yang menunjukkan bahwa berkebun tidak selalu membutuhkan lahan luas?",
        options: [
          { id: 'A', text: "Semua tanaman dapat tumbuh di dalam rumah tanpa cahaya" },
          { id: 'B', text: "Polybag dan media tanam memungkinkan tanaman ditanam di tempat terbatas" },
          { id: 'C', text: "Tanaman sayur hanya dapat hidup di balkon rumah" },
          { id: 'D', text: "Berkebun modern tidak lagi memerlukan tanah" }
        ],
        correctId: 'B'
      },
      {
        id: 14,
        question: "Mengapa sayuran daun disebut tanaman panen cepat?",
        options: [
          { id: 'A', text: "Karena sebagian besar dapat dipanen dalam waktu sekitar 2–4 minggu" },
          { id: 'B', text: "Karena harus dipanen sebelum tumbuh besar" },
          { id: 'C', text: "Karena hanya hidup beberapa hari" },
          { id: 'D', text: "Karena membutuhkan banyak air setiap jam" }
        ],
        correctId: 'A'
      },
      {
        id: 15,
        question: "Fungsi bambu pada budidaya kacang panjang adalah …",
        options: [
          { id: 'A', text: "menjaga tanah tetap lembap" },
          { id: 'B', text: "menjadi tempat rambatan tanaman agar tumbuh lebih baik" },
          { id: 'C', text: "menggantikan fungsi pupuk kandang" },
          { id: 'D', text: "mempercepat perubahan warna daun" }
        ],
        correctId: 'B'
      },
      {
        id: 16,
        question: "Mengapa kacang tanah cocok ditanam di lahan tertentu di Bengkalis?",
        options: [
          { id: 'A', text: "Karena tanaman ini tumbuh baik pada tanah berpasir dan relatif kering" },
          { id: 'B', text: "Karena hanya dapat hidup di tanah rawa" },
          { id: 'C', text: "Karena membutuhkan suhu dingin sepanjang tahun" },
          { id: 'D', text: "Karena akar tanaman harus selalu terendam air" }
        ],
        correctId: 'A'
      },
      {
        id: 17,
        question: "Apa manfaat tambahan tanaman kacang-kacangan selain sebagai sumber pangan?",
        options: [
          { id: 'A', text: "Membantu memperbaiki kesuburan tanah di sekitarnya" },
          { id: 'B', text: "Mengurangi kemampuan tanah menyimpan air" },
          { id: 'C', text: "Membuat tanaman lain sulit tumbuh" },
          { id: 'D', text: "Menghilangkan seluruh unsur hara tanah" }
        ],
        correctId: 'A'
      },
      {
        id: 18,
        question: "Mengapa cabai rawit cocok ditanam di pekarangan rumah atau polybag?",
        options: [
          { id: 'A', text: "Karena tanaman ini memerlukan tempat yang sempit dan tahan cuaca panas" },
          { id: 'B', text: "Karena cabai rawit hanya dapat hidup di pot kecil" },
          { id: 'C', text: "Karena tanaman ini tidak memerlukan perawatan sama sekali" },
          { id: 'D', text: "Karena akar cabai tidak membutuhkan tanah" }
        ],
        correctId: 'A'
      },
      {
        id: 19,
        question: "Selain sebagai bumbu masakan, serai juga dimanfaatkan untuk …",
        options: [
          { id: 'A', text: "mempercepat pertumbuhan pohon besar" },
          { id: 'B', text: "membantu mengurangi keberadaan nyamuk di sekitar rumah" },
          { id: 'C', text: "menggantikan fungsi pupuk tanaman" },
          { id: 'D', text: "meningkatkan kadar garam dalam tanah" }
        ],
        correctId: 'B'
      },
      {
        id: 20,
        question: "Mengapa berkebun dapat melatih rasa tanggung jawab?",
        options: [
          { id: 'A', text: "Karena tanaman harus dirawat secara teratur agar dapat tumbuh dan menghasilkan" },
          { id: 'B', text: "Karena semua tanaman dapat tumbuh tanpa perhatian" },
          { id: 'C', text: "Karena berkebun hanya dilakukan saat musim panen" },
          { id: 'D', text: "Karena hasil panen selalu berhasil tanpa perawatan" }
        ],
        correctId: 'A'
      },
      {
        id: 21,
        question: "Apa faktor utama yang membuat Bengkalis cocok untuk berbagai jenis tanaman?",
        options: [
          { id: 'A', text: "Curah hujan cukup tinggi dan tanahnya relatif subur" },
          { id: 'B', text: "Seluruh wilayah Bengkalis berupa tanah pegunungan" },
          { id: 'C', text: "Suhu Bengkalis selalu dingin sepanjang tahun" },
          { id: 'D', text: "Semua tanaman mendapatkan pupuk alami dari laut" }
        ],
        correctId: 'A'
      },
      {
        id: 22,
        question: "Mengapa masyarakat Melayu dahulu hampir selalu memiliki kebun kecil di rumah?",
        options: [
          { id: 'A', text: "Untuk menjaga ketersediaan kebutuhan pangan harian keluarga" },
          { id: 'B', text: "Untuk menggantikan seluruh fungsi pasar tradisional" },
          { id: 'C', text: "Untuk memenuhi aturan adat tertentu" },
          { id: 'D', text: "Untuk menyimpan hasil tangkapan laut" }
        ],
        correctId: 'A'
      },
      {
        id: 23,
        question: "Mengapa singkong dijuluki tanaman “asuransi”?",
        options: [
          { id: 'A', text: "Karena dapat tetap tumbuh dalam berbagai kondisi dan dipanen saat diperlukan" },
          { id: 'B', text: "Karena membutuhkan biaya penanaman yang sangat mahal" },
          { id: 'C', text: "Karena hanya tumbuh pada musim hujan" },
          { id: 'D', text: "Karena seluruh hasil panennya harus dijual" }
        ],
        correctId: 'A'
      },
      {
        id: 24,
        question: "Apa manfaat daun pisang dalam kehidupan masyarakat Melayu?",
        options: [
          { id: 'A', text: "Digunakan sebagai bahan pembungkus makanan tradisional" },
          { id: 'B', text: "Dijadikan pengganti pupuk kandang" },
          { id: 'C', text: "Digunakan untuk mempercepat pertumbuhan tanaman lain" },
          { id: 'D', text: "Menjadi bahan utama membuat perahu" }
        ],
        correctId: 'A'
      },
      {
        id: 25,
        question: "Pelajaran penting yang dipahami Daus setelah pergi ke toko pertanian adalah …",
        options: [
          { id: 'A', text: "Berkebun hanya cocok dilakukan oleh masyarakat desa" },
          { id: 'B', text: "Berkebun tetap dapat dilakukan meskipun memiliki lahan terbatas" },
          { id: 'C', text: "Semua tanaman harus ditanam langsung di tanah luas" },
          { id: 'D', text: "Berkebun modern tidak lagi membutuhkan perawatan" }
        ],
        correctId: 'B'
      }
    ] 
  },
  3: { 
    title: "Persiapan Sebelum Berkebun", 
    formId: '1FAIpQLScCGTABZ1WEovtAL87d8VUFFOEXSj4WAANqannrJlIc_CXXrw', 
    entryMapping: {
      name: 'entry.111012139',
      userClass: 'entry.1530135141',
      quizName: 'entry.283943708',
      score: 'entry.1757966967'
    },
    questions: [
      {
        id: 1,
        question: "Mengapa persiapan perlu dilakukan sebelum mulai berkebun?",
        options: [
          { id: 'A', text: "Agar tanaman dapat tumbuh tanpa tanah" },
          { id: 'B', text: "Karena persiapan membantu tanaman tumbuh lebih sehat dan mudah dirawat" },
          { id: 'C', text: "Agar tanaman tidak membutuhkan cahaya matahari" },
          { id: 'D', text: "Karena semua tanaman harus dipanen lebih cepat" }
        ],
        correctId: 'B'
      },
      {
        id: 2,
        question: "Apa tujuan utama menggemburkan tanah sebelum menanam?",
        options: [
          { id: 'A', text: "Membuat tanah menjadi lebih keras" },
          { id: 'B', text: "Membantu akar tanaman tumbuh dan menyerap air lebih baik" },
          { id: 'C', text: "Mengurangi kebutuhan pupuk sepenuhnya" },
          { id: 'D', text: "Membuat tanah berubah warna" }
        ],
        correctId: 'B'
      },
      {
        id: 3,
        question: "Mengapa tanah perlu dicampur dengan kompos atau pupuk kandang?",
        options: [
          { id: 'A', text: "Agar tanah memiliki tambahan unsur hara untuk tanaman" },
          { id: 'B', text: "Agar tanah tidak terkena hujan" },
          { id: 'C', text: "Agar tanaman tumbuh tanpa air" },
          { id: 'D', text: "Agar akar tanaman tidak berkembang" }
        ],
        correctId: 'A'
      },
      {
        id: 4,
        question: "Apa manfaat mendiamkan tanah beberapa hari setelah dicampur pupuk?",
        options: [
          { id: 'A', text: "Agar tanah menjadi lebih kering sepenuhnya" },
          { id: 'B', text: "Agar unsur hara pada tanah dan pupuk dapat menyatu lebih baik" },
          { id: 'C', text: "Agar tanah berubah menjadi pasir" },
          { id: 'D', text: "Agar pupuk kehilangan manfaatnya" }
        ],
        correctId: 'B'
      },
      {
        id: 5,
        question: "Bahan berikut yang paling tepat digunakan untuk membuat kompos adalah …",
        options: [
          { id: 'A', text: "Plastik bekas dan kaca" },
          { id: 'B', text: "Sisa sayuran dan daun kering" },
          { id: 'C', text: "Kaleng bekas dan logam" },
          { id: 'D', text: "Minyak goreng bekas dan sabun" }
        ],
        correctId: 'B'
      },
      {
        id: 6,
        question: "Mengapa air cucian beras dapat digunakan untuk tanaman?",
        options: [
          { id: 'A', text: "Karena membantu menambah nutrisi alami bagi tanaman" },
          { id: 'B', text: "Karena menggantikan fungsi pupuk sepenuhnya" },
          { id: 'C', text: "Karena membuat tanah menjadi keras" },
          { id: 'D', text: "Karena menghilangkan kebutuhan cahaya matahari" }
        ],
        correctId: 'A'
      },
      {
        id: 7,
        question: "Apa fungsi utama sekam pada media tanam?",
        options: [
          { id: 'A', text: "Membuat tanah lebih padat" },
          { id: 'B', text: "Membantu tanah menjadi lebih gembur dan menyimpan air" },
          { id: 'C', text: "Menggantikan fungsi pupuk kandang" },
          { id: 'D', text: "Membuat tanaman tidak perlu disiram" }
        ],
        correctId: 'B'
      },
      {
        id: 8,
        question: "Mengapa pupuk kandang yang digunakan sebaiknya sudah matang?",
        options: [
          { id: 'A', text: "Agar warnanya lebih cerah" },
          { id: 'B', text: "Agar tidak merusak akar dan tanaman" },
          { id: 'C', text: "Agar tanah menjadi lebih keras" },
          { id: 'D', text: "Agar tanaman tidak memerlukan pupuk lain" }
        ],
        correctId: 'B'
      },
      {
        id: 9,
        question: "Apa fungsi polybag dalam kegiatan berkebun?",
        options: [
          { id: 'A', text: "Tempat menyimpan alat berkebun" },
          { id: 'B', text: "Wadah untuk menanam dan menampung media tanam" },
          { id: 'C', text: "Tempat mencampur pupuk cair" },
          { id: 'D', text: "Alat untuk menggemburkan tanah" }
        ],
        correctId: 'B'
      },
      {
        id: 10,
        question: "Mengapa penyiraman tanaman perlu dilakukan secara teratur?",
        options: [
          { id: 'A', text: "Agar tanaman memperoleh air yang dibutuhkan untuk tumbuh" },
          { id: 'B', text: "Agar tanah selalu tergenang" },
          { id: 'C', text: "Agar pupuk cepat hilang dari tanah" },
          { id: 'D', text: "Agar tanaman tidak terkena matahari" }
        ],
        correctId: 'A'
      },
      {
        id: 11,
        question: "Mengapa bayam cocok dijadikan tanaman latihan bagi pemula?",
        options: [
          { id: 'A', text: "Karena bayam membutuhkan lahan luas" },
          { id: 'B', text: "Karena bayam mudah ditanam dan cepat dipanen" },
          { id: 'C', text: "Karena bayam hanya dapat tumbuh di sawah" },
          { id: 'D', text: "Karena bayam tidak memerlukan perawatan" }
        ],
        correctId: 'B'
      },
      {
        id: 12,
        question: "Campuran media tanam yang baik untuk bayam adalah …",
        options: [
          { id: 'A', text: "Tanah, pasir, dan batu kecil" },
          { id: 'B', text: "Tanah, sekam, and kompos atau pupuk kandang" },
          { id: 'C', text: "Tanah liat dan air saja" },
          { id: 'D', text: "Pasir dan pupuk cair saja" }
        ],
        correctId: 'B'
      },
      {
        id: 13,
        question: "Mengapa benih yang dipilih sebaiknya masih baru?",
        options: [
          { id: 'A', text: "Agar peluang tumbuhnya lebih baik" },
          { id: 'B', text: "Agar warna benih lebih menarik" },
          { id: 'C', text: "Agar tanaman tidak membutuhkan pupuk" },
          { id: 'D', text: "Agar tanah tidak cepat kering" }
        ],
        correctId: 'A'
      },
      {
        id: 14,
        question: "Mengapa benih bayam perlu ditutup tipis dengan tanah?",
        options: [
          { id: 'A', text: "Agar benih tidak terkena udara sama sekali" },
          { id: 'B', text: "Agar benih terlindungi dan dapat tumbuh dengan baik" },
          { id: 'C', text: "Agar tanah menjadi lebih keras" },
          { id: 'D', text: "Agar benih cepat membusuk" }
        ],
        correctId: 'B'
      },
      {
        id: 15,
        question: "Apa akibatnya jika tanaman bayam disiram terlalu banyak?",
        options: [
          { id: 'A', text: "Daun menjadi lebih tebal" },
          { id: 'B', text: "Akar tanaman dapat membusuk" },
          { id: 'C', text: "Tanah menjadi lebih subur" },
          { id: 'D', text: "Tanaman tumbuh lebih cepat tanpa batas" }
        ],
        correctId: 'B'
      },
      {
        id: 16,
        question: "Mengapa rumput liar di sekitar tanaman perlu dibersihkan?",
        options: [
          { id: 'A', text: "Karena dapat mengganggu pertumbuhan tanaman utama" },
          { id: 'B', text: "Karena rumput liar membuat tanah terlalu subur" },
          { id: 'C', text: "Karena semua rumput liar beracun" },
          { id: 'D', text: "Karena rumput liar membuat tanah berubah warna" }
        ],
        correctId: 'A'
      },
      {
        id: 17,
        question: "Apa manfaat utama pupuk dari kulit pisang?",
        options: [
          { id: 'A', text: "Membantu pertumbuhan bunga dan buah" },
          { id: 'B', text: "Membuat tanah menjadi kering" },
          { id: 'C', text: "Menggantikan fungsi air pada tanaman" },
          { id: 'D', text: "Mengurangi kebutuhan cahaya matahari" }
        ],
        correctId: 'A'
      },
      {
        id: 18,
        question: "Mengapa kulit telur dapat dimanfaatkan sebagai pupuk alami?",
        options: [
          { id: 'A', text: "Karena mengandung kalsium yang baik untuk tanaman" },
          { id: 'B', text: "Karena membuat tanaman tidak perlu pupuk lain" },
          { id: 'C', text: "Karena mengubah tanah menjadi pasir" },
          { id: 'D', text: "Karena dapat menggantikan fungsi air" }
        ],
        correctId: 'A'
      },
      {
        id: 19,
        question: "Apa keuntungan menggunakan pupuk alami dari limbah rumah tangga?",
        options: [
          { id: 'A', text: "Mengurangi sampah sekaligus membantu menyuburkan tanah" },
          { id: 'B', text: "Membuat tanaman tidak perlu dirawat" },
          { id: 'C', text: "Menghilangkan kebutuhan penyiraman" },
          { id: 'D', text: "Membuat tanah tidak membutuhkan cahaya matahari" }
        ],
        correctId: 'A'
      },
      {
        id: 20,
        question: "Pelajaran penting yang dapat dipetik dari kegiatan berkebun adalah …",
        options: [
          { id: 'A', text: "Tanaman dapat tumbuh tanpa perhatian" },
          { id: 'B', text: "Kesabaran dan tanggung jawab dalam merawat sesuatu" },
          { id: 'C', text: "Berkebun hanya cocok dilakukan di desa" },
          { id: 'D', text: "Semua tanaman dapat hidup tanpa pupuk dan air" }
        ],
        correctId: 'B'
      }
    ] 
  },
  4: { title: "Modul 4", formId: 'PLACEHOLDER_FORM_ID_4', questions: [] },
  5: { title: "Modul 5", formId: 'PLACEHOLDER_FORM_ID_5', questions: [] },
  6: { title: "Modul 6", formId: 'PLACEHOLDER_FORM_ID_6', questions: [] },
  7: { title: "Modul 7", formId: 'PLACEHOLDER_FORM_ID_7', questions: [] },
  8: { title: "Modul 8", formId: 'PLACEHOLDER_FORM_ID_8', questions: [] },
};
