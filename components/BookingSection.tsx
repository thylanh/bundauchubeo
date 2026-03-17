import React from 'react';

export default function BookingSection() {
    return (
        <section className="w-full relative mt-16 mb-8">
            {/* The main dashed border container */}
            <div className="relative mx-auto border-x-2 border-b-2 border-dashed border-[#5e4d2f] pt-8 pb-16 px-6 md:px-12 mt-10">
                {/* Top border with Scissor and Title */}
                <div className="absolute top-0 left-0 w-full flex items-center justify-center -mt-[25px] sm:-mt-[34px] lg:-mt-[42px]">
                    <div className="flex-1 border-t-2 border-dashed border-[#5e4d2f] ml-6 md:ml-12"></div>
                    <div className="px-6 relative flex items-center group">
                        <h2 className="text-[#a3381a] font-black font-serif text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider text-shadow-sm whitespace-nowrap" style={{ fontFamily: 'var(--font-heading)' }}>
                            ORDER NHANH
                        </h2>
                        {/* Scissors icon */}
                        <div className="absolute -right-2 md:right-0 top-1/2 -translate-y-1/2 text-[#5e4d2f] translate-x-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform rotate-180">
                                <circle cx="6" cy="6" r="3"></circle>
                                <circle cx="6" cy="18" r="3"></circle>
                                <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
                                <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
                                <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
                            </svg>
                        </div>
                    </div>
                    <div className="flex-1 border-t-2 border-dashed border-[#5e4d2f] mr-6 md:mr-12"></div>
                </div>

                <div className="text-center mb-10">
                    <div className="w-32 h-[2px] bg-[#5e4d2f] mx-auto mb-6"></div>
                    <p className="text-[#5e4d2f] font-mono text-base md:text-lg font-semibold tracking-wide" style={{ fontFamily: 'var(--font-mono)' }}>
                        Đặt bàn ngay để nhận được sự phục vụ tốt nhất<br/>
                        đến từ Đậu Homemade
                    </p>
                </div>

                {/* Form area */}
                <form className="max-w-3xl mx-auto flex flex-col gap-5">
                    
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                        {/* HỌ VÀ TÊN */}
                        <div className="border-[2px] border-[#5e4d2f] p-1 bg-white/20">
                            <input 
                                type="text" 
                                placeholder="HỌ VÀ TÊN" 
                                className="w-full border border-[#5e4d2f] bg-transparent px-4 py-3 font-bold text-[#5e4d2f] font-mono placeholder:text-[#5e4d2f] focus:outline-none focus:bg-white/40 transition-colors"
                            />
                        </div>
                        {/* SỐ ĐIỆN THOẠI */}
                        <div className="border-[2px] border-[#5e4d2f] p-1 bg-white/20">
                            <input 
                                type="tel" 
                                placeholder="SỐ ĐIỆN THOẠI" 
                                className="w-full border border-[#5e4d2f] bg-transparent px-4 py-3 font-bold text-[#5e4d2f] font-mono placeholder:text-[#5e4d2f] focus:outline-none focus:bg-white/40 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
                        {/* CHI NHÁNH */}
                        <div className="md:col-span-2 border-[2px] border-[#5e4d2f] p-1 bg-white/20">
                            <div className="relative w-full h-full border border-[#5e4d2f]">
                                <select className="w-full h-full bg-transparent px-4 py-3 font-bold text-[#5e4d2f] font-mono appearance-none focus:outline-none focus:bg-white/40 transition-colors cursor-pointer">
                                    <option>CHI NHÁNH HOÀNG DIỆU</option>
                                    <option>CHI NHÁNH QUẬN 1</option>
                                    <option>CHI NHÁNH ĐIỆN BIÊN PHỦ</option>
                                </select>
                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#5e4d2f]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                </div>
                            </div>
                        </div>
                        {/* SỐ LƯỢNG NGƯỜI */}
                        <div className="border-[2px] border-[#5e4d2f] p-1 bg-white/20">
                            <div className="relative w-full h-full border border-[#5e4d2f]">
                                <select className="w-full h-full bg-transparent px-4 py-3 font-bold text-[#5e4d2f] font-mono appearance-none focus:outline-none focus:bg-white/40 transition-colors cursor-pointer">
                                    <option>1 NGƯỜI</option>
                                    <option>2 NGƯỜI</option>
                                    <option>3 NGƯỜI</option>
                                    <option>4+ NGƯỜI</option>
                                </select>
                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#5e4d2f]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                        {/* NGÀY */}
                        <div className="border-[2px] border-[#5e4d2f] p-1 bg-white/20">
                            <div className="relative w-full h-full border border-[#5e4d2f]">
                                <input 
                                    type="text" 
                                    placeholder="MM/DD/YYYY" 
                                    className="w-full h-full bg-transparent px-4 py-3 font-bold text-[#5e4d2f] font-mono placeholder:text-[#5e4d2f] focus:outline-none focus:bg-white/40 transition-colors cursor-pointer"
                                    onFocus={(e) => (e.target.type = "date")}
                                    onBlur={(e) => (e.target.type = e.target.value ? "date" : "text")}
                                />
                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#5e4d2f]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
                                </div>
                            </div>
                        </div>
                        {/* THỜI GIAN */}
                        <div className="border-[2px] border-[#5e4d2f] p-1 bg-white/20">
                            <input 
                                type="text"
                                placeholder="THỜI GIAN" 
                                className="w-full border border-[#5e4d2f] bg-transparent px-4 py-3 font-bold text-[#5e4d2f] font-mono placeholder:text-[#5e4d2f] focus:outline-none focus:bg-white/40 transition-colors cursor-pointer"
                                onFocus={(e) => (e.target.type = "time")}
                                onBlur={(e) => (e.target.type = e.target.value ? "time" : "text")}
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center mt-6">
                        <button type="submit" className="border-[2px] border-[#5e4d2f] p-1 group">
                            <div className="bg-vintage-yellow border border-[#5e4d2f] px-12 py-3 group-hover:bg-yellow-400 transition-colors cursor-pointer">
                                <span className="font-bold text-[#5e4d2f] font-mono tracking-widest uppercase text-lg">ĐẶT BÀN</span>
                            </div>
                        </button>
                    </div>

                </form>

            </div>
        </section>
    );
}
