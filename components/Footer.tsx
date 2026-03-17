
export default function Footer() {
  return (
    <footer 
      className="w-full relative pb-32">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 px-8 relative z-10 w-full">
        <div className="w-full lg:w-2/5">
          {/* Left Column */}
          <div className="flex-1 lg:max-w-xl z-20">
            <h2 className="text-[#4C643A] font-black font-serif text-xl sm:text-[22px] leading-snug uppercase mb-1 tracking-wider text-shadow-sm">
              Công ty trách nhiệm hữu hạn<br/>đậu homemade
            </h2>
            <div className="mb-4 text-[#2b2b2b] tracking-[0.2em] font-bold text-lg text-[#a3381a] leading-none">*****</div>
            <div className="font-mono text-[#2b2b2b] text-[15px] font-semibold">
              <p><span className="text-[#a3381a] font-bold">Địa chỉ:</span> 91 Xuân Thuỷ, phường Thảo Điền, quận 2, TP. Hồ Chí Minh</p>
              <p><span className="text-[#a3381a] font-bold">Điện thoại:</span> 0938088284</p>
              <p><span className="text-[#a3381a] font-bold">Email:</span> info@dauhomemade.com</p>
              <p><span className="text-[#a3381a] font-bold">Số chứng nhận đăng ký kinh doanh:</span> 0314520024</p>
              <p><span className="text-[#a3381a] font-bold">Ngày cấp:</span> 17/07/2017</p>
              <p><span className="text-[#a3381a] font-bold">Nơi cấp:</span> Sở kế hoạch & đầu tư TP.Hồ Chí Minh</p>
            </div>
          </div>
          {/* Right Column */}
          <div className="flex-2 lg:max-w-md xl:max-w-[500px] z-20 w-full lg:flex lg:flex-col mt-16">
            <div className="w-full">
              <h3 className="text-[#4C643A] font-black font-serif text-xl sm:text-[22px] uppercase mb-1 tracking-wider text-shadow-sm">
                Site map
              </h3>
              <div className="mb-4 text-[#2b2b2b] tracking-[0.2em] font-bold text-lg text-[#a3381a] leading-none">*****</div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-3 font-mono text-[#2b2b2b] text-[15px] font-semibold mb-8 lg:max-w-md xl:max-w-none">
                  <a href="#" className="hover:text-[#a3381a] transition-colors leading-tight">Trang chủ</a>
                  <a href="#" className="hover:text-[#a3381a] transition-colors leading-tight whitespace-nowrap">Cửa hàng</a>
                  <a href="#" className="hover:text-[#a3381a] transition-colors leading-tight">Menu</a>
                  <a href="#" className="hover:text-[#a3381a] transition-colors leading-tight whitespace-nowrap">Tuyển dụng</a>
                  <a href="#" className="hover:text-[#a3381a] transition-colors leading-tight whitespace-nowrap">Đặt bàn</a>
                  <a href="#" className="hover:text-[#a3381a] transition-colors leading-tight whitespace-nowrap"></a>
                  <a href="#" className="hover:text-[#a3381a] transition-colors leading-tight whitespace-nowrap">Tin tức & sự kiện</a>
                  <div></div>
              </div>
            </div>
          </div>

        </div>

        {/* Image Column right side */}
        <div className="w-full lg:w-3/5 flex justify-center lg:justify-end items-center mt-12 lg:mt-0 relative z-20">
          <img 
            src="/images/met-bun-dau.png" 
            alt="Mẹt bún đậu" 
            className="w-full h-auto max-w-[500px] xl:max-w-[650px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 cursor-pointer"
          />
        </div>

      </div>
    </footer>
  );
}

