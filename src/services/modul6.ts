export const modul6Service = {
  getIntroduction: () => ({
    title: "BROSUR",
    pages: [
      {
        id: 1,
        title: "BROSUR PENERIMAAN SISWA BARU",
        bgColor: "rgba(15, 118, 110, 0.95)",
        textColor: "#ffffff",
        content: `
### SILAKAN DOWNLOAD ATAU LIHAT BROSUR KAMI

<div class="flex flex-col gap-4 items-center justify-center p-8 bg-white/10 rounded-3xl border border-white/20 mt-6">
  <div class="w-full max-w-sm aspect-[3/4] bg-white/20 rounded-xl flex items-center justify-center border-2 border-dashed border-white/30">
    <div class="text-center p-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-4 opacity-50"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
      <p class="font-bold">BROSUR SPMB 2026/2027</p>
      <p class="text-xs opacity-60 mt-1">Gunakan link di bawah untuk mengunduh brosur lengkap dalam format PDF atau Gambar.</p>
    </div>
  </div>
  
  <a href="#" class="w-full py-4 bg-white text-emerald-700 rounded-2xl font-black text-center shadow-lg hover:scale-[1.02] transition-all">
    DOWNLOAD BROSUR (PDF)
  </a>
</div>

*Brosur fisik juga dapat diambil langsung di sekretariat panitia SMPN 1 Bengkalis.*
`
      }
    ]
  })
};
