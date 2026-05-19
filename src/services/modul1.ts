/**
 * Service for handling introduction page data.
 */

export const modul1Service = {
  getIntroduction: () => ({
    title: "IDENTITAS",
    pages: [
      {
        id: 1,
        title: "PROFIL SMP NEGERI 1 BENGKALIS",
        bgColor: "rgba(30, 58, 138, 0.95)",
        textColor: "#ffffff",
        content: `
SMP Negeri 1 Bengkalis merupakan salah satu sekolah menengah pertama tertua dan berprestasi di Kabupaten Bengkalis. Kami berkomitmen untuk menyelenggarakan pendidikan yang berkualitas, berkarakter, dan berwawasan lingkungan.

**Visi:**
"Terwujudnya Peserta Didik yang Berakhlak Mulia, Cerdas, Terampil, Mandiri dan Berwawasan Lingkungan"

**Misi:**
1. Menumbuhkembangkan penghayatan dan pengamalan nilai-nilai keagamaan.
2. Melaksanakan pembelajaran dan bimbingan secara efektif.
3. Mendorong dan membantu setiap siswa untuk mengenali potensi dirinya.
4. Menanamkan budaya peduli lingkungan.
`
      }
    ]
  })
};
