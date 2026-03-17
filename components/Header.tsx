
export default function Header() {
  return (
    <header className="w-full flex justify-between items-start pt-6 pb-4 border-b-2 border-dashed border-vintage-brown">
      {/* Left section: Logo and Menu */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-32 h-32 bg-vintage-yellow flex items-center justify-center border-4 border-vintage-brown shadow-md transform -rotate-4 rounded-3xl">
          <div className="text-center font-bold text-vintage-brown flex flex-col items-center">
            <span className="text-4xl tracking-tighter leading-none" style={{ fontFamily: 'var(--font-heading)' }}>Nhà Shen</span>
            <span className="text-sm font-sans tracking-widest mt-1"></span>
          </div>
        </div>
      </div>

      {/* Center section: Title */}
      <div className="flex-1 flex flex-col items-center">
        <div className="flex gap-4 items-center mb-1 w-full max-w-lg justify-center">
           <div className="h-0.5 bg-vintage-brown flex-1 rounded-full"></div>
           <span className="text-sm font-bold text-vintage-brown uppercase tracking-widest text-center font-sans">bún đậu nhà shen ăn là phải khen</span>
           <div className="h-0.5 bg-vintage-brown flex-1 rounded-full"></div>
        </div>
        <h1 className="text-3xl font-bold tracking-widest uppercase mb-1" style={{ fontFamily: 'var(--font-heading)' }}>THÔNG BÁO</h1>
        <h2 className="text-7xl md:text-9xl font-extrabold text-vintage-brown tracking-widest stylized-outline uppercase" style={{ fontFamily: 'var(--font-heading)', textShadow: '2px 2px 0px #fbc02d, -1px -1px 0px #fff' }}>BÚN NHÀ SHEN</h2>
        <div className="mt-4 px-12 py-2 bg-vintage-brown text-[#d7ccc8] font-bold tracking-widest uppercase text-sm border-2 border-[#8d6e63] rounded-full font-sans">
          SẠCH • NGON • BỔ
        </div>
        <div className="flex gap-4 items-center mt-3 w-full max-w-lg justify-center">
           <div className="h-px bg-vintage-brown flex-1"></div>
           <span className="text-base font-bold text-vintage-brown uppercase tracking-wider text-center font-sans">Du lịch Một Vòng Cùng Bún Đậu Nhà Shen</span>
           <div className="h-px bg-vintage-brown flex-1"></div>
        </div>
      </div>

      {/* Right section: Headquarters info */}
      <div className="hidden md:flex flex-col items-end gap-2">
        <div className="relative border-4 border-vintage-brown p-4 pt-6 max-w-xs text-center bg-black/5" style={{ fontFamily: 'var(--font-mono)' }}>
          <div className="font-bold text-vintage-brown font-sans text-base mb-2">BÚN NHÀ SHEN<br/>BUN DAU MAM TOM & MORE</div>
          <div className="text-accent-red font-bold">******</div>
          <div><span className="text-accent-red font-bold">Đia chi:</span> 144a Chi lang, phuong Phuoc Thang,TP. Ho Chi Minh</div>
          <div className="text-accent-red font-bold">******</div>
          <div><span className="text-accent-red font-bold">Đien thoai:</span> 0856620789</div>
          <div className="text-accent-red font-bold">******</div>
          <div><span className="text-accent-red font-bold">Email:</span> bundaumamtomvt1@gmail.com</div>
        </div>
      </div>
    </header>
  );
}
