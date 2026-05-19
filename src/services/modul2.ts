/**
 * Service for handling Modul 2 data.
 */

export const modul2Service = {
  getIntroduction: () => ({
    title: "KEUNGGULAN",
    pages: [
      {
        id: 1,
        title: "MENGAPA MEMILIH SMPN 1 BENGKALIS?",
        bgColor: "rgba(185, 28, 28, 0.95)",
        textColor: "#ffffff",
        content: `
1. **Akreditasi A**: Menjamin kualitas pendidikan yang sesuai standar nasional.
2. **Guru Profesional**: Tenaga pendidik yang berpengalaman dan kompeten di bidangnya.
3. **Fasilitas Lengkap**: Laboratorium IPA, Komputer, Perpustakaan, dan sarana olahraga yang memadai.
4. **Program Ekstrakurikuler Variatif**: Pramuka, Seni, Olahraga, dan pembinaan olimpiade.
5. **Lingkungan Nyaman**: Sekolah yang bersih, rindang, dan kondusif untuk belajar.
6. **Prestasi Gemilang**: Baik di bidang akademik maupun non-akademik di tingkat kabupaten dan provinsi.
`
      }
    ]
  })
};
