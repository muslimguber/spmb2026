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
3. **Fasilitas**: Laboratorium IPA, Komputer, Perpustakaan,.
4. **Program Ekstrakurikuler Variatif**: Tari, Silat, Marching Band, Pramuka, PMR, PiK-R, dan Pembinaan Olimpiade.
5. **Prestasi Gemilang**: Di tingkat Kabupaten, Provinsi. hingga Nasional
`
      }
    ]
  })
};
