import BookingSection from '../components/BookingSection';
import EventsSection from '../components/EventsSection';
import HeroLayout from '../components/HeroLayout';

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pt-4">
       <HeroLayout />
       
       <EventsSection />

       {/* MENU Section preview */}
       <section className="w-full border-4 border-vintage-brown p-8 relative mt-8 bg-white/20 rounded-xl">
          <div className="rounded-sm absolute -top-6 left-1/2 -translate-x-1/2 bg-vintage-yellow px-4 font-bold text-3xl uppercase text-vintage-brown tracking-widest" style={{ fontFamily: 'var(--font-heading)' }}>
             MENU
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
             {/* Item 1 */}
             <div className="flex border-b border-dashed border-vintage-brown pb-4">
                <div className="w-24 h-24 bg-black/10 flex-shrink-0 border-2 border-vintage-brown rounded-xl"></div>
                <div className="pl-4 flex flex-col justify-center w-full">
                   <div className="flex justify-between items-end border-b border-dotted border-vintage-brown pb-1">
                      <h4 className="font-bold text-lg font-sans">Bún Nhỏ Đậu Sứa</h4>
                      <span className="font-bold text-accent-red font-mono">59.000đ</span>
                   </div>
                   <p className="text-sm font-sans mt-1 italic text-vintage-brown/80">Bún lá, đậu hũ chiên giòn, sứa biển</p>
                </div>
             </div>
             
             {/* Item 2 */}
             <div className="flex border-b border-dashed border-vintage-brown pb-4">
                <div className="w-24 h-24 bg-black/10 flex-shrink-0 border-2 border-vintage-brown rounded-xl"></div>
                <div className="pl-4 flex flex-col justify-center w-full">
                   <div className="flex justify-between items-end border-b border-dotted border-vintage-brown pb-1">
                      <h4 className="font-bold text-lg font-sans">Bún Đậu Tá Lả</h4>
                      <span className="font-bold text-accent-red font-mono">119.000đ</span>
                   </div>
                   <p className="text-sm font-sans mt-1 italic text-vintage-brown/80">Bún, đậu, thịt luộc, chả cốm, nem rán, phèo chiên</p>
                </div>
             </div>
          </div>
          
          <div className="flex justify-center mt-8">
             <button className="bg-vintage-yellow text-vintage-brown border-2 border-vintage-brown px-8 py-3 font-bold tracking-widest uppercase hover:bg-yellow-400 transition-colors shadow-[4px_4px_0_rgba(62,39,35,1)] rounded-full">
                XEM TOÀN BỘ THỰC ĐƠN
             </button>
          </div>
       </section>

       <BookingSection />
    </div>
  );
}

