/**
 * Service for handling introduction page data.
 */

export const modul1Service = {
  getIntroduction: () => ({
    title: "Mengapa Berkebun itu Penting?",
    pages: [
      {
        id: 0,
        title: "Motivasi Sebelum Belajar",
        triggerQuestion: "Semangat adalah kunci keberhasilan.",
        videoUrl: "https://www.youtube.com/embed/3MhZsABZWr0",
        content: "Sebelum kita mulai belajar tentang berkebun, mari kita saksikan video motivasi ini agar kita lebih bersemangat dalam menimba ilmu untuk masa depan kita sebagai generasi yang mandiri."
      },
      {
        id: 9,
        title: "Istirahat Sejenak: Game Memory Kebun",
        content: "Mari segarkan pikiranmu sejenak dengan bermain game memory sebelum kuis akhir!",
        isGame: true
      }
    ]
  })
};
