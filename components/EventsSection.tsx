import React from 'react';

export default function EventsSection() {
    return (
        <section className="w-full border-8 border-double border-vintage-brown/80 mt-6 relative bg-transparent rounded-3xl">
            {/* Inner Border container */}
            <div className="border-[3px] border-vintage-brown/80 p-6 pt-10 pb-8 bg-transparent relative rounded-2xl">
                
                {/* Header */}
                <div className="flex flex-col items-center mb-10 relative ">
                    <span className="text-[#c62828] font-bold uppercase tracking-[0.2em] text-sm md:text-lg mb-1 drop-shadow-sm font-sans text-center">
                        SỰ KIỆN MỚI TỪ
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-[0.1em] text-center drop-shadow-sm" style={{ fontFamily: 'var(--font-heading)' }}>
                        NHÀ SHEN
                    </h2>
                    {/* Decorative line below title */}
                    <div className="flex items-center w-48 justify-center mt-4">
                        <div className="h-[3px] bg-vintage-green flex-1 rounded-full"></div>
                        <div className="w-4 h-4 bg-vintage-green transform rotate-45 border border-[#dfd3b8] shadow-sm rounded-sm"></div>
                        <div className="h-[3px] bg-vintage-green flex-1 rounded-full"></div>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="flex flex-col gap-3">
                        <div className="w-full aspect-[4/3] bg-black/10 border-2 border-vintage-brown/40 relative shadow-sm overflow-hidden flex items-center justify-center rounded-2xl">
                           <span className="text-xs tracking-widest text-vintage-brown/60 uppercase font-mono font-bold">Hình ảnh 1</span>
                        </div>
                        <div className="text-sm font-bold text-vintage-brown/80 tracking-widest uppercase mt-2 font-mono">
                            10 GIỜ 03 PHÚT - 13 THÁNG 03 2026
                        </div>
                        <h3 className="text-xl font-bold uppercase leading-tight font-sans" >
                            ĐỔI VOUCHER HOA - TRÚNG QUÀ CỰC ĐÃ
                        </h3>
                        <p className="font-sans text-[15px] leading-relaxed font-medium">
                            Tháng 3 này, Nhà Shen cùng các đối tác dành trọn yêu thương đến những...
                        </p>
                        <a href="#" className="font-extrabold uppercase text-sm mt-auto hover:text-accent-red transition-colors flex items-center tracking-wider text-vintage-brown font-sans">
                            ĐỌC TIẾP
                        </a>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col gap-3">
                        <div className="w-full aspect-[4/3] bg-black/10 border-2 border-vintage-brown/40 relative shadow-sm overflow-hidden flex items-center justify-center rounded-2xl">
                           <span className="text-xs tracking-widest text-vintage-brown/60 uppercase font-mono font-bold">Hình ảnh Lẩu Cá</span>
                        </div>
                        <div className="text-sm font-bold text-vintage-brown/80 tracking-widest uppercase mt-2 font-mono">
                            17 GIỜ 03 PHÚT - 10 THÁNG 03 2026
                        </div>
                        <h3 className="text-xl font-bold uppercase leading-tight font-sans" >
                            LẨU CÁ CHÉP GIÒN NHÚNG MẺ - MÓN ĂN SIGNATURE NHẤT ĐỊNH BẠN PHẢI THỬ KHI ĐẾN
                        </h3>
                        <p className="font-sans text-[15px] leading-relaxed font-medium">
                            Lẩu cá chép giòn nhúng mẻ là một trong những món ăn mang đậm...
                        </p>
                        <a href="#" className="font-extrabold uppercase text-sm mt-auto hover:text-accent-red transition-colors flex items-center tracking-wider text-vintage-brown font-sans">
                            ĐỌC TIẾP
                        </a>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col gap-3">
                        <div className="w-full aspect-[4/3] bg-black/10 border-2 border-vintage-brown/40 relative shadow-sm overflow-hidden flex items-center justify-center rounded-2xl">
                           <span className="text-xs tracking-widest text-vintage-brown/60 uppercase font-mono font-bold">Hình ảnh Voucher 8/3</span>
                        </div>
                        <div className="text-sm font-bold text-vintage-brown/80 tracking-widest uppercase mt-2 font-mono">
                            10 GIỜ 03 PHÚT - 06 THÁNG 03 2026
                        </div>
                        <h3 className="text-xl font-bold uppercase leading-tight font-sans" >
                            MÙNG NGÀY 8.3: NHẬN VOUCHER XINH - BỐC THĂM RINH QUÀ XỊN
                        </h3>
                        <p className="font-sans text-[15px] leading-relaxed font-medium">
                            Mừng tháng của Nàng Đến Nhà Shen Nhận Voucher Xinh - Bốc Thăm Rinh Quà Xịn ...
                        </p>
                        <a href="#" className="font-extrabold uppercase text-sm mt-auto hover:text-accent-red transition-colors flex items-center tracking-wider text-vintage-brown font-sans">
                            ĐỌC TIẾP
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
