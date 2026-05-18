/**
 * Service for handling Modul 2 data.
 */

export const modul2Service = {
  getIntroduction: () => ({
    title: "Modul 2: Ayo Berkebun di Bengkalis",
    pages: [
      {
        id: 0,
        title: "Informasi Belum Tersedia",
        content: "Materi untuk bagian ini sedang dalam proses penyusunan. Silakan cek kembali nanti.",
        quiz: {
          question: "Apakah Anda akan menunggu informasi selanjutnya?",
          options: [
            { id: 'A', text: "Ya, saya akan menunggu", isCorrect: true }
          ]
        }
      }
    ]
  })
};
