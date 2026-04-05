import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BookingSection from '../../components/BookingSection';
import ImageMagnifier from '../../components/ImageMagnifier';
import { combos } from '../../utils/data';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  // Find product by id or fallback to the first one if not found or id is missing
  const product = combos.find(c => c.id === Number(id)) || combos[0];
  
  if (!product) return null; // Avoid render errors if product mapping fails

  return (
    <div className="flex flex-col pt-8 pb-16 px-4 md:px-8 max-w-6xl mx-auto min-h-[70vh]">
      <Head>
        <title>{product.title} - Bún Đậu Chú Béo</title>
      </Head>

      {/* Breadcrumb / Back button */}
      <div className="mb-8">
        <Link href="/menu" className="text-vintage-brown hover:text-[#A9442A] font-bold text-sm tracking-widest uppercase transition-colors inline-flex items-center gap-2 border-b-2 border-transparent hover:border-[#A9442A] pb-0.5">
           <span>← Quay lại Menu</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-8 lg:gap-14 items-start">
        {/* Left Column: Image Area */}
        <div className="w-full">
           {/* Exact double border implementation: Outer thick #5e3b22, padding #dcb588, inner thick #5e3b22 */}
           <div className="border-[5px] border-[#4a2e19] p-2 bg-[#dfc39d] shadow-[4px_4px_0_rgba(62,39,35,0.15)]">
              <div className="border-[2px] border-[#4a2e19] relative aspect-[4/3] md:aspect-[5/4] w-full overflow-hidden">
                 <ImageMagnifier src={product.image} alt={product.title} zoomLevel={2.5} />
              </div>
           </div>
        </div>

        {/* Right Column: Text Details Area */}
        <div className="flex flex-col py-0">
           <h1 className="text-[26px] md:text-4xl lg:text-[40px] leading-[1.15] font-bold text-[#4a2e19] uppercase tracking-wide mb-3">
             {product.title}
           </h1>
           <div className="text-[#4a2e19] tracking-[0.2em] text-xl font-bold font-mono leading-none">
             *****
           </div>
           <p className="text-[#4a2e19]/90 font-mono text-[14px] md:text-[15px] leading-[1.65] pr-2 lg:pr-8 mb-5">
             {product.desc}
           </p>
           <div className="text-[#4a2e19] tracking-[0.2em] text-xl font-bold font-mono leading-none">
             *****
           </div>

           {/* Price and Quantity Box Row */}
           <div className="flex flex-wrap items-center gap-6 md:gap-8 mb-6">
              {/* Text: GiÁ: 269.000 đ */}
              <div className="flex items-baseline gap-2 text-[#a93c24]">
                 <span className="font-bold text-[22px] md:text-[26px] tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>Giá:</span>
                 <span className="font-bold text-[36px] md:text-[42px]" style={{ fontFamily: 'var(--font-heading)' }}>{product.price}</span>
                 <span className="font-bold text-[18px] md:text-[22px]" style={{ fontFamily: 'var(--font-heading)' }}>vnđ</span>
              </div>
           </div>

           {/* Button Row */}
           <div className="mb-8 block">
              <button className="border-[3px] border-[#4a2e19] p-[2px] group focus:outline-none block w-max bg-[#e4ccaa]">
                 <div className="border-[1px] border-[#4a2e19] bg-[#d2a325] group-hover:bg-[#b88c1b] transition-colors h-10 md:h-11 px-5 flex items-center justify-center">
                    <span className="font-bold text-[#4a2e19] uppercase tracking-wider text-[13px] whitespace-nowrap">Đặt món ngay</span>
                 </div>
              </button>
           </div>

           <div className="text-[#4a2e19]/80 font-mono text-sm border-t border-[#4a2e19]/20 pt-4 max-w-sm">
             <span className="opacity-80">Loại: </span>
             <span className="text-[#a93c24]">{product.category}</span>
           </div>
        </div>
      </div>

      <div className="mt-8">
        <BookingSection />
      </div>

    </div>
  );
}
