import React, { useState, useEffect } from "react";

// Using placeholder images - replace with actual asset URLs when available
const imgImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"; // Hero background
const imgImage1 = "data:image/svg+xml,%3csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='white' d='M10 2l8 18h-16z'/%3e%3c/svg%3e"; // Social icon
const imgImage2 = "data:image/svg+xml,%3csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='10' cy='10' r='8' fill='white'/%3e%3c/svg%3e"; // Social icon
const imgImage3 = "data:image/svg+xml,%3csvg width='53' height='31' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='53' height='31' fill='%23c0d72e'/%3e%3ctext x='26.5' y='20' font-family='Arial' font-size='12' fill='white' text-anchor='middle'%3eAP%3c/text%3e%3c/svg%3e"; // Logo
const imgImage4 = "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80"; // CTA image
const imgBackground = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"; // Feature background
const imgImage5 = "data:image/svg+xml,%3csvg width='19' height='24' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='%23c0d72e' d='M9.5 2l7 10h-14z'/%3e%3c/svg%3e"; // Feature icon
const imgBackground1 = "data:image/svg+xml,%3csvg width='541' height='9' xmlns='http://www.w3.org/2000/svg'%3e%3cline x1='0' y1='4.5' x2='541' y2='4.5' stroke='%23c0d72e' stroke-width='1'/%3e%3c/svg%3e"; // Divider
const imgImage6 = "data:image/svg+xml,%3csvg width='26' height='27' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='13' cy='13.5' r='10' fill='%23c0d72e'/%3e%3c/svg%3e"; // Feature icon
const imgBackground2 = "data:image/svg+xml,%3csvg width='541' height='9' xmlns='http://www.w3.org/2000/svg'%3e%3cline x1='0' y1='4.5' x2='541' y2='4.5' stroke='%23c0d72e' stroke-width='1'/%3e%3c/svg%3e"; // Divider
const imgImage7 = "data:image/svg+xml,%3csvg width='25' height='22' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='25' height='22' fill='%23c0d72e' rx='3'/%3e%3c/svg%3e"; // Feature icon
const imgImage8 = "data:image/svg+xml,%3csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='40' cy='40' r='35' fill='%23414622'/%3e%3ctext x='40' y='48' font-family='Arial' font-size='24' fill='%23c0d72e' text-anchor='middle'%3e⚡%3c/text%3e%3c/svg%3e"; // Service icon
const imgImage9 = "data:image/svg+xml,%3csvg width='63' height='63' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='31.5' cy='31.5' r='28' fill='%23393c21'/%3e%3ctext x='31.5' y='40' font-family='Arial' font-size='20' fill='%23c0d72e' text-anchor='middle'%3e🔄%3c/text%3e%3c/svg%3e"; // Service icon
const imgImage10 = "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=800&q=80"; // Service background
const imgImage11 = "data:image/svg+xml,%3csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='40' cy='40' r='35' fill='%23363921'/%3e%3ctext x='40' y='48' font-family='Arial' font-size='24' fill='%23c0d72e' text-anchor='middle'%3e💡%3c/text%3e%3c/svg%3e"; // Service icon
const imgBackground3 = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80"; // Section background
const imgBackground4 = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80"; // Section background
const imgImage12 = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80"; // Section image

function Button() {
  const handleClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };
  
  return (
    <button 
      onClick={handleClick}
      className="group relative bg-transparent border border-white border-solid rounded-[22.5px] px-6 py-3 text-[#dbdad3] font-bold text-sm hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
    >
      Let's Talk
    </button>
  );
}

function Button1() {
  const handleClick = () => {
    const engineeredSection = document.getElementById('engineered-section');
    if (engineeredSection) {
      engineeredSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <button
      onClick={handleClick}
      className="group bg-[#c0d72e] hover:bg-[#a8be26] text-[#656f25] hover:text-[#4a5a1c] font-bold px-8 py-3 rounded-[22.5px] transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#c0d72e] focus:ring-offset-2 focus:ring-offset-transparent shadow-lg hover:shadow-xl"
    >
      Start Building Smarter
    </button>
  );
}

function Button2() {
  const handleClick = () => {
    window.open('mailto:contact@authoritypartners.com', '_blank');
  };
  
  return (
    <button
      onClick={handleClick}
      className="group bg-transparent border border-[#dcdcdc] border-solid rounded-[15.5px] px-4 py-2 text-[#d5d8d3] font-bold text-sm hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
    >
      Let's Talk
    </button>
  );
}

function Root() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const totalSlides = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev: number) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${imgImage}')` 
        }}
      />
      
      {/* Navigation Header */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-6 lg:p-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div
              className="w-12 h-8 bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url('${imgImage3}')` }}
            />
            <h1 className="font-['Quantico:Bold',_sans-serif] text-white text-lg font-bold">
              AUTHORITY PARTNERS
            </h1>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#services" className="text-white font-bold hover:text-[#c0d72e] transition-colors duration-300 cursor-pointer">Services</a>
            <a href="#insights" className="text-white font-bold hover:text-[#c0d72e] transition-colors duration-300 cursor-pointer">Insights</a>
            <a href="#stories" className="text-white font-bold hover:text-[#c0d72e] transition-colors duration-300 cursor-pointer">Stories</a>
            <a href="#careers" className="text-white font-bold hover:text-[#c0d72e] transition-colors duration-300 cursor-pointer">Careers</a>
            <a href="#about" className="text-white font-bold hover:text-[#c0d72e] transition-colors duration-300 cursor-pointer">About</a>
          </div>
          
          {/* Social Icons & CTA */}
          <div className="flex items-center space-x-4">
            <div
              className="w-5 h-5 bg-center bg-cover bg-no-repeat cursor-pointer hover:scale-110 transition-transform duration-300"
              style={{ backgroundImage: `url('${imgImage2}')` }}
            />
            <div
              className="w-5 h-5 bg-center bg-cover bg-no-repeat cursor-pointer hover:scale-110 transition-transform duration-300"
              style={{ backgroundImage: `url('${imgImage1}')` }}
            />
            <div className="h-8 w-px bg-gray-300 mx-4" />
            <Button2 />
          </div>
        </div>
      </nav>
      
      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Main Headline */}
            <h1 className="font-['Arvo:Bold',_sans-serif] text-6xl lg:text-8xl text-[#f4f4e8] leading-tight mb-6 animate-fade-in">
              <span className="block">We Don't</span>
              <span className="block">Build Alone</span>
            </h1>
            
            {/* Subheading */}
            <h2 className="font-['Inter:Bold',_sans-serif] text-2xl lg:text-3xl text-[#dbd8cf] font-bold mb-8 animate-fade-in-delay">
              Together We Engineer What's Next
            </h2>
            
            {/* Description */}
            <p className="text-[#cccbc4] text-lg leading-relaxed mb-8 max-w-2xl animate-fade-in-delay-2">
              From AI-powered automation to legacy modernization, we align every 
              solution to your goals, workflows, and teams because real 
              transformation happens when we build it together.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-delay-3">
              <Button1 />
              <Button />
            </div>
            
            {/* Tagline */}
            <p className="text-[#d3dc93] text-sm font-normal">
              Engineering what's next.
            </p>
          </div>
        </div>
      </div>
      
      {/* Carousel Indicators */}
      <div className="absolute bottom-8 right-8 flex space-x-2 z-20">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-20 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-[#c0d72f]' : 'bg-white'
            } hover:scale-110`}
          />
        ))}
      </div>
    </div>
  );
}

function Button3() {
  const handleClick = () => {
    window.open('mailto:contact@authoritypartners.com?subject=Let\'s Build Together', '_blank');
  };
  
  return (
    <button
      onClick={handleClick}
      className="bg-[#c1d82f] hover:bg-[#a8be26] text-[#3a3a3a] font-extrabold px-8 py-3 rounded-[21px] transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#c1d82f] focus:ring-offset-2 shadow-lg hover:shadow-xl whitespace-nowrap"
    >
      Let's Build What Works for You
    </button>
  );
}

function Groups() {
  return (
    <div className="relative h-full w-full lg:w-1/2 group">
      <div
        className="relative bg-center bg-cover bg-no-repeat h-full rounded-[23px] overflow-hidden transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url('${imgImage4}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8">
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function Groups1() {
  return (
    <div className="relative h-full w-full lg:w-1/2 group">
      <div
        className="relative bg-center bg-cover bg-no-repeat h-full rounded-[23px] p-8 transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url('${imgBackground}')` }}
      >
        <div className="h-full flex flex-col justify-between">
          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-center space-y-8">
            <h3 className="text-[#3c4021] text-3xl lg:text-4xl font-normal leading-tight">
              <span className="block">Faster innovation. Smarter</span>
              <span className="block">operations. Measurable</span>
              <span className="block">outcomes.</span>
            </h3>
            
            <p className="text-[#3a3a3a] text-base leading-relaxed max-w-md">
              Whether you're modernizing legacy systems, building from the 
              ground up, or accelerating cloud adoption, we work side-by-side 
              with your teams to engineer solutions that move your business forward.
            </p>
          </div>
          
          {/* Benefits List */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div
                className="w-6 h-6 bg-center bg-cover bg-no-repeat flex-shrink-0 mt-1"
                style={{ backgroundImage: `url('${imgImage7}')` }}
              />
              <div>
                <span className="font-bold text-[#3a3a3a]">Boost productivity</span>
                <span className="text-[#3a3a3a] ml-1">with software designed around how you actually work</span>
              </div>
            </div>
            
            <div className="w-full h-px" style={{ backgroundImage: `url('${imgBackground2}')` }} />
            
            <div className="flex items-start space-x-4">
              <div
                className="w-7 h-7 bg-center bg-cover bg-no-repeat flex-shrink-0"
                style={{ backgroundImage: `url('${imgImage6}')` }}
              />
              <div>
                <span className="font-bold text-[#3a3a3a]">Scale confidently</span>
                <span className="text-[#3a3a3a] ml-1">with systems that evolve alongside your business</span>
              </div>
            </div>
            
            <div className="w-full h-px" style={{ backgroundImage: `url('${imgBackground1}')` }} />
            
            <div className="flex items-start space-x-4">
              <div
                className="w-5 h-6 bg-center bg-cover bg-no-repeat flex-shrink-0 mt-1"
                style={{ backgroundImage: `url('${imgImage5}')` }}
              />
              <div>
                <span className="font-bold text-[#3a3a3a]">Move faster</span>
                <span className="text-[#3a3a3a] ml-1">with the agility and expertise to handle complex tech challenges</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Groups2() {
  return (
    <section id="tailored-section" className="relative py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-['Arvo:Bold',_sans-serif] text-4xl lg:text-6xl text-[#3a3a3a] leading-tight">
            <span className="font-['Helvetica_Neue:Regular',_sans-serif] font-normal">Tailored Software.</span>
            <span className="font-bold"> Real Results.</span>
          </h2>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 min-h-[600px]">
          <Groups1 />
          <Groups />
        </div>
      </div>
    </section>
  );
}

function Groups3() {
  return (
    <div className="relative">
      <Groups2 />
    </div>
  );
}

function Button4() {
  const handleClick = () => {
    window.open('mailto:contact@authoritypartners.com?subject=Capacity%20Acceleration%20Inquiry', '_blank');
  };
  
  return (
    <button
      onClick={handleClick}
      className="w-full bg-[#808e28] hover:bg-[#6d7a22] text-white font-bold py-2 px-4 rounded-[4px] transition-all duration-300 text-sm"
    >
      Inquire Now
    </button>
  );
}

function Groups4() {
  return (
    <div className="group bg-[#c0d72f] hover:bg-[#a8be26] rounded-[8px] aspect-square flex flex-col justify-between p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer">
      <div className="flex-1 flex flex-col justify-center items-center text-center space-y-4">
        <div
          className="w-12 h-12 bg-center bg-cover bg-no-repeat transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundImage: `url('${imgImage8}')` }}
        />
        
        <h3 className="text-[#414622] text-lg font-bold leading-tight">
          <span className="block">Capacity</span>
          <span className="block">Acceleration</span>
        </h3>
      </div>
      
      <div className="mt-4">
        <Button4 />
      </div>
    </div>
  );
}

function Button5() {
  const handleClick = () => {
    window.open('mailto:contact@authoritypartners.com?subject=Tech%20Refresh%20Inquiry', '_blank');
  };
  
  return (
    <button
      onClick={handleClick}
      className="w-full bg-[#727e27] hover:bg-[#626d20] text-white font-bold py-2 px-4 rounded-[4px] transition-all duration-300 text-sm"
    >
      Inquire Now
    </button>
  );
}

function Groups5() {
  return (
    <div className="group bg-[#c0d72e] hover:bg-[#a8be26] rounded-[8px] aspect-square flex flex-col justify-between p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer">
      <div className="flex-1 flex flex-col justify-center items-center text-center space-y-4">
        <div
          className="w-12 h-12 bg-center bg-cover bg-no-repeat transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundImage: `url('${imgImage9}')` }}
        />
        
        <h3 className="text-[#393c21] text-lg font-bold leading-tight">
          <span className="block">Tech</span>
          <span className="block">Refresh</span>
        </h3>
      </div>
      
      <div className="mt-4">
        <Button5 />
      </div>
    </div>
  );
}

function Groups6() {
  const handleClick = () => {
    const tailoredSection = document.getElementById('tailored-section');
    if (tailoredSection) {
      tailoredSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div 
      onClick={handleClick}
      className="group relative bg-center bg-cover bg-no-repeat rounded-[22px] p-8 h-full flex flex-col justify-end transition-all duration-500 transform hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden"
      style={{ backgroundImage: `url('${imgImage10}')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300" />
      
      <div className="relative z-10">
        <p className="text-white text-base leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
          Work hand-in-hand with our teams to design and build software products that drive real, measurable business outcomes.
        </p>
        
        <div className="mt-4 flex items-center text-white group-hover:text-[#c0d72e] transition-colors duration-300">
          <span className="text-sm font-medium">Learn More</span>
          <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  const handleClick = () => {
    window.open('mailto:contact@authoritypartners.com?subject=Innovation%20%26%20Transformation%20Inquiry', '_blank');
  };
  
  return (
    <button
      onClick={handleClick}
      className="w-full bg-[#758127] hover:bg-[#646e20] text-white font-bold py-2 px-4 rounded-[4px] transition-all duration-300 text-sm"
    >
      Inquire Now
    </button>
  );
}

function Groups7() {
  return (
    <div className="group bg-[#c1d82f] hover:bg-[#a8be26] rounded-[8px] aspect-square flex flex-col justify-between p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer">
      <div className="flex-1 flex flex-col justify-center items-center text-center space-y-4">
        <div
          className="w-12 h-12 bg-center bg-cover bg-no-repeat transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundImage: `url('${imgImage11}')` }}
        />
        
        <h3 className="text-[#363921] text-lg font-bold leading-tight">
          <span className="block">Innovation &</span>
          <span className="block">Transformation</span>
        </h3>
      </div>
      
      <div className="mt-4">
        <Button6 />
      </div>
    </div>
  );
}

function Groups8() {
  return (
    <section id="engineered-section" className="relative py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-['Arvo:Bold',_sans-serif] text-4xl lg:text-6xl text-[#3c3c3b] leading-tight mb-6">
            <span className="font-['Helvetica_Neue:Regular',_sans-serif] font-normal">Engineered</span>
            <span className="font-bold"> Your Way.</span>
          </h2>
          
          <p className="text-[#1b1b1b] text-base lg:text-lg leading-relaxed max-w-5xl mx-auto">
            From innovation strategy to product delivery, legacy modernisation, and scaling your teams, 
            we partner with you to engineer intelligent, future-ready systems that drive measurable business outcomes.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <Groups7 />
          <Groups6 />
          <Groups5 />
          <Groups4 />
        </div>
      </div>
    </section>
  );
}

function Root1() {
  return (
    <div className="relative">
      {/* Background Layers */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-10"
          style={{ backgroundImage: `url('${imgBackground3}')` }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-3/4 bg-center bg-cover bg-no-repeat opacity-5"
          style={{ backgroundImage: `url('${imgBackground4}')` }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-2/3 bg-center bg-cover bg-no-repeat opacity-5"
          style={{ backgroundImage: `url('${imgImage12}')` }}
        />
      </div>
      
      <Groups8 />
      <Groups3 />
    </div>
  );
}

export default function AuthorityPartner() {
  return (
    <div className="bg-white relative min-h-screen overflow-x-hidden" data-name="Authority-Partner">
      <Root />
      <Root1 />
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.2s both;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.4s both;
        }
        .animate-fade-in-delay-3 {
          animation: fade-in 1s ease-out 0.6s both;
        }
        .smooth-scroll {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}