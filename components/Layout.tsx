import React from 'react';
import Footer from './Footer';
import Header from './Header';

// Floating widget for right side
function FloatingWidget() {
    return (
        <>
            {/* Top Right Group: Đặt Bàn & Cart */}
            <div className="fixed right-0 top-1/2 -translate-y-[100%] flex flex-col items-end z-50">
                <div className="flex flex-col bg-vintage-yellow border-t-4 border-l-4 border-b-4 border-vintage-brown shadow-[-4px_4px_0_rgba(0,0,0,0.1)]">
                    <button className="pt-6 pb-4 px-3 hover:bg-yellow-400 transition flex items-center justify-center relative shadow-inner">
                        <span 
                            className="font-bold text-vintage-brown tracking-widest text-sm whitespace-nowrap" 
                            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                        >
                            ĐẶT BÀN NHÀ SHEN
                        </span>
                    </button>
                        <div className="absolute top-3/4 -translate-y-1/2 -left-3 w-5 h-5 bg-accent-red border-[3px] border-vintage-brown rounded-full flex items-center justify-center z-10 shadow-sm">
                            <div className="w-1.5 h-1.5 bg-vintage-yellow rounded-full"></div>
                        </div>
                </div>
            </div>

            {/* Bottom Right Group: Phone & Messenger */}
            <div className="fixed right-4 bottom-6 flex flex-col gap-4 z-50">
                {/* Phone */}
                <button className="w-14 h-14 rounded-full bg-vintage-yellow border-[3px] border-vintage-brown flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.3)] hover:scale-110 transition-transform relative group">
                    <div className="absolute inset-0 rounded-full border border-vintage-brown/40 m-[2px] pointer-events-none"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:animate-bounce text-vintage-brown fill-current group-hover:animate-shake" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                </button>
                {/* Messenger */}
                <button className="w-14 h-14 rounded-full bg-vintage-yellow border-[3px] border-vintage-brown flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.3)] hover:scale-110 transition-transform relative group">
                    <div className="absolute inset-0 rounded-full border border-vintage-brown/40 m-[2px] pointer-events-none"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:animate-bounce text-vintage-brown fill-current group-hover:animate-shake" viewBox="0 0 512 512">
                    <path
                      d="M256.55 8C116.52 8 2.5 117.84 2.5 253.51c0 75.79 35.5 142.92 90.23 186.82V504l69.75-38.64c30.12 8.36 62.33 12.85 95.83 12.85 140.03 0 253.55-109.84 253.55-245.51S396.58 8 256.55 8z"
                    />
                  </svg>
                </button>
            </div>
        </>
    );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen text-vintage-brown font-body relative flex flex-col items-center overflow-x-hidden">
      <div className="w-full max-w-6xl px-4 md:px-8 flex flex-col relative border-x-2 border-vintage-brown/20 bg-white/10 min-h-screen shadow-2xl">
        <Header />
        <main className="flex-1 w-full my-8">
            {children}
        </main>
        <Footer />
      </div>
      <FloatingWidget />
      
      {/* Decorative dirty edges for the page */}
      <div className="fixed inset-0 pointer-events-none border-[12px] border-vintage-brown/5 z-40 mix-blend-multiply"></div>
      
      {/* Absolute Bottom bar (Full width of screen) */}
      <div className="absolute bottom-0 left-0 w-full h-[30px] md:h-[40px] bg-[#3e2723] flex items-center justify-between px-4 md:px-8 z-[60]">
        <div className="max-w-6xl w-full mx-auto flex justify-between items-center px-4 md:px-8">
            <span className="text-[#d4c2a5] font-mono text-[10px] sm:text-xs">
              Copyright © 2018 Dauhomemade.com. All right reserved
            </span>
            <span className="text-[#d4c2a5] font-mono text-[10px] sm:text-xs text-right">
              Website by Comma
            </span>
        </div>
      </div>
    </div>
  );
}
