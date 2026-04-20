import React from 'react';

export default function Header() {
  return (
    <header className="w-full bg-[#111] border-b border-accent-gold-dark/30 py-3 px-4 md:px-8 relative z-50">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        
        {/* Logo Placeholder */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
          <div className="w-12 h-10 md:w-[60px] md:h-[50px] bg-accent-gold-dark/40 rounded-md flex items-center justify-center relative overfow-hidden">
             {/* Crown shape placeholder */}
             <div className="absolute w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[20px] border-accent-gold animate-pulse"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs md:text-sm text-foreground/70 font-semibold tracking-wider">รอยัล คาสิโน ออนไลน์</span>
            <span className="text-base md:text-xl text-accent-gold font-bold uppercase tracking-widest drop-shadow-md">Royal Online</span>
          </div>
        </div>

        {/* Login Area */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 text-sm w-full md:w-auto">
          {/* Username Input */}
          <input 
            type="text" 
            placeholder="กรุณาใส่ยูสเซอร์" 
            className="bg-black border border-accent-gold-dark/50 text-foreground px-3 py-1.5 rounded-md focus:outline-none focus:border-accent-gold w-[140px] md:w-[160px] placeholder:text-foreground/40"
          />
          
          {/* Password Input */}
          <div className="flex items-center bg-black border border-accent-gold-dark/50 rounded-md w-[140px] md:w-[160px]">
            <input 
              type="password" 
              placeholder="กรุณาใส่รหัสผ่าน" 
              className="bg-transparent text-foreground px-3 py-1.5 w-full focus:outline-none placeholder:text-foreground/40"
            />
            <span className="text-foreground/50 border-l border-accent-gold-dark/50 px-2 cursor-pointer hover:text-accent-gold transition-colors">?</span>
          </div>

          <button className="bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end text-black font-semibold px-4 py-1.5 rounded-md hover:brightness-110 transition-all shadow-[0_0_10px_rgba(212,175,55,0.3)]">
            ล็อกอิน
          </button>

          {/* Language Selector */}
          <div className="flex items-center gap-1 cursor-pointer ml-2 hover:opacity-80 transition-opacity">
            <div className="w-5 h-5 bg-blue-700 rounded-full flex items-center justify-center overflow-hidden border border-white/20">
               <div className="w-full h-1/3 bg-red-600"></div>
               <div className="w-full h-1/3 bg-white"></div>
               <div className="w-full h-1/3 bg-red-600"></div>
            </div>
            <span className="text-foreground text-xs md:text-sm">ภาษาไทย</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground"><path d="m6 9 6 6 6-6"/></svg>
          </div>
        </div>
      </div>
    </header>
  );
}
