import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[400px] md:min-h-[600px] bg-black overflow-hidden flex items-center justify-center">
      {/* Background Graphic Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0a0a] z-10 w-full h-full pointer-events-none"></div>
      
      {/* Fallback image background / Pattern */}
      <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
         {/* This is a placeholder for the actual impressive background image you will provide */}
         <div className="w-full h-full bg-gradient-to-r from-purple-900/30 to-accent-gold-dark/20 animate-pulse"></div>
      </div>

      <div className="relative z-20 flex flex-col md:flex-row items-center justify-center w-full max-w-[1400px] mx-auto px-4 h-full">
        
        {/* Left Side: Character Image Placeholder */}
        <div className="hidden md:flex flex-1 justify-center relative h-full items-end pb-0">
          <div className="w-[350px] h-[450px] lg:w-[450px] lg:h-[550px] bg-white/5 border border-white/10 rounded-t-full relative flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.05)] backdrop-blur-sm mt-20">
            <span className="text-white/30 text-center font-semibold">User Character Image Placeholder</span>
          </div>
        </div>

        {/* Center: Content & CTA */}
        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 pt-12 md:pt-0">
          
          {/* Logo Main */}
          <div className="relative w-64 md:w-80 h-24 mb-4">
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-accent-gold to-yellow-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] filter">
                Royal G-Club
              </h1>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-widest drop-shadow-lg">
            เข้าสู่โลกบล็อกเชน<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-400">สุดเซ็กซี่ขั้นสุด</span>
          </h2>

          <p className="text-foreground/80 text-sm md:text-base max-w-lg mb-8 drop-shadow-md">
            ทุกการเดิมพันเป็นไปด้วยความเร่าร้อน ปลดล็อกช่วงเวลาที่เขินอายของสาวน้อย
          </p>

          <button className="group relative px-10 py-3 md:px-14 md:py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full font-bold text-white text-lg md:text-xl shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:shadow-[0_0_30px_rgba(147,51,234,0.8)] transition-all hover:-translate-y-1 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              เล่นเลย
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-white group-hover:translate-x-1 transition-transform"><path d="M5 3l14 9-14 9z"/></svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>

        {/* Right Side: Floating Polaroids Placeholder */}
        <div className="hidden lg:flex flex-1 justify-center relative items-center h-full">
           <div className="w-48 h-64 bg-white/10 border border-white/20 rounded-xl transform rotate-12 absolute right-20 top-20 flex items-center justify-center p-2 pt-2 pb-8 shadow-2xl backdrop-blur-sm">
             <div className="w-full h-full bg-black/50 rounded-md"></div>
           </div>
           <div className="w-56 h-72 bg-white/10 border border-white/20 rounded-xl transform -rotate-6 absolute right-32 bottom-20 flex items-center justify-center p-2 pt-2 pb-8 shadow-2xl backdrop-blur-sm z-10">
             <div className="w-full h-full bg-black/50 rounded-md"></div>
           </div>
        </div>

      </div>
    </section>
  );
}
