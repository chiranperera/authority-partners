import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/cfb28038c370315c4c6a3ee1bea3e9809d2fb215?width=2880" 
            alt="Collaborative workspace" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between px-4 md:px-8 lg:px-28 py-8">
          <div className="flex items-center gap-4">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/e8369879437df38850537df7fe43a7b18089492b?width=106" 
              alt="Authority Partners Logo" 
              className="w-12 h-7"
            />
            <span className="text-white font-quantico font-bold text-base tracking-wide">
              AUTHORITY PARTNERS
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-white font-inter font-bold text-sm hover:text-authority-lime transition-colors">Services</a>
            <a href="#" className="text-white font-inter font-bold text-sm hover:text-authority-lime transition-colors">Insights</a>
            <a href="#" className="text-white font-inter font-bold text-sm hover:text-authority-lime transition-colors">Stories</a>
            <a href="#" className="text-white font-inter font-bold text-sm hover:text-authority-lime transition-colors">Careers</a>
            <a href="#" className="text-white font-inter font-bold text-sm hover:text-authority-lime transition-colors">About Us</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block px-6 py-2 border border-gray-300 rounded-full text-white font-inter font-bold text-sm hover:bg-white hover:text-black transition-all">
              Let's Talk
            </button>
            <div className="w-0.5 h-8 bg-gray-300 hidden md:block"></div>
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/c467654e92910288144a5118c8658fdcc9b7e2bf?width=40" 
              alt="Search" 
              className="w-5 h-5"
            />
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/86e1602a88fa1a40e64b8d4a1551c2e182d3e5e0?width=40" 
              alt="Menu" 
              className="w-5 h-5"
            />
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 px-4 md:px-8 lg:px-28 mt-16 md:mt-24">
          <h1 className="text-authority-cream font-arvo font-bold text-5xl md:text-7xl lg:text-8xl xl:text-[98px] leading-tight mb-8">
            We Don't<br />Build Alone
          </h1>
          
          <p className="text-authority-cream font-inter font-bold text-xl md:text-2xl lg:text-[26px] mb-8 max-w-md">
            Together We Engineer What's Next
          </p>
          
          <p className="text-authority-light-text font-inter text-base max-w-lg mb-12 leading-relaxed">
            From AI-powered automation to legacy modernization, we align every
            solution to your goals, workflows, and teams because real
            transformation happens when we build it together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button className="px-8 py-3 bg-authority-lime rounded-full text-authority-lime-text font-inter font-bold text-sm hover:bg-authority-lime-dark transition-colors">
              Start Building Smarter
            </button>
            <button className="px-8 py-3 border border-white rounded-full text-white font-inter font-bold text-sm hover:bg-white hover:text-black transition-all">
              Let's Talk
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="hidden lg:flex absolute bottom-24 right-28 space-x-2">
            <div className="w-20 h-2 bg-authority-lime rounded-full"></div>
            <div className="w-20 h-2 bg-white/30 rounded-full"></div>
            <div className="w-20 h-2 bg-white/30 rounded-full"></div>
            <div className="w-20 h-2 bg-white/30 rounded-full"></div>
          </div>
          
          <p className="hidden lg:block absolute bottom-16 right-28 text-authority-lime font-inter text-xs">
            Engineering whats next.
          </p>
        </div>
      </div>

      {/* Engineered Your Way Section */}
      <div className="relative bg-gray-50 py-16 md:py-24">
        <div className="px-4 md:px-8 lg:px-28">
          <h2 className="font-helvetica text-4xl md:text-5xl lg:text-[61px] text-authority-dark-green mb-6">
            <span className="font-normal">Engineered </span>
            <span className="font-arvo font-bold">Your Way.</span>
          </h2>
          
          <p className="font-helvetica text-base text-authority-dark-green max-w-5xl mb-16 leading-relaxed">
            From innovation strategy to product delivery, legacy modernisation, and scaling your teams, we partner with you to engineer intelligent, future-ready
            systems that drive measurable business outcomes.
          </p>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Innovation & Transformation Card */}
            <div className="bg-authority-lime border border-authority-lime-dark rounded-3xl p-8 h-72">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/45c073cec09197a5800132efd305fe8a2b0a4c18?width=128" 
                alt="Innovation" 
                className="w-16 h-16 mb-6"
              />
              <h3 className="font-inter font-bold text-2xl text-authority-dark-green mb-8 leading-tight">
                Innovation &<br />Transformation
              </h3>
              <button className="px-6 py-3 bg-authority-lime border border-green-700 rounded-full text-authority-lime-text font-inter font-bold text-sm hover:bg-authority-lime-dark transition-colors">
                Inquire Now
              </button>
            </div>

            {/* Work Hand-in-Hand Card (Image) */}
            <div className="relative rounded-3xl overflow-hidden h-72">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/67d5fe59282649f06056fb3b169c899f9362444c?width=584" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-inter text-base leading-tight">
                  Work hand-in-hand with our<br />
                  teams to design and build<br />
                  software products that drive real,<br />
                  measurable business outcomes.
                </p>
              </div>
            </div>

            {/* Tech Refresh Card */}
            <div className="bg-authority-lime border border-authority-lime-dark rounded-3xl p-8 h-72">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/d7b5810d0f9de371476c40c36d84ecee7db41101?width=126" 
                alt="Tech Refresh" 
                className="w-16 h-16 mb-6"
              />
              <h3 className="font-inter font-bold text-2xl text-authority-dark-green mb-8 leading-tight">
                Tech<br />Refresh
              </h3>
              <button className="px-6 py-3 bg-authority-lime border border-green-700 rounded-full text-authority-lime-text font-inter font-bold text-sm hover:bg-authority-lime-dark transition-colors">
                Inquire Now
              </button>
            </div>

            {/* Capacity Acceleration Card */}
            <div className="bg-authority-lime border border-authority-lime-dark rounded-3xl p-8 h-72">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/fd698916ef039e6695f64652a62641520ca60514?width=128" 
                alt="Capacity Acceleration" 
                className="w-16 h-16 mb-6"
              />
              <h3 className="font-inter font-bold text-2xl text-authority-dark-green mb-8 leading-tight">
                Capacity<br />Acceleration
              </h3>
              <button className="px-6 py-3 bg-authority-lime border border-green-700 rounded-full text-authority-lime-text font-inter font-bold text-sm hover:bg-authority-lime-dark transition-colors">
                Inquire Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tailored Software Section */}
      <div className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        {/* Background Images */}
        <div className="absolute inset-0">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/dcd8ec4dedaf4273f575a5c7ba91f8c6d188e2bb?width=2880" 
            alt="Background" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="relative z-10 px-4 md:px-8 lg:px-28">
          <h2 className="font-helvetica text-4xl md:text-5xl lg:text-[63px] text-authority-dark-green mb-16 leading-tight">
            <span className="font-normal">Tailored Software.</span>
            <span className="font-arvo font-bold"> Real Results.</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="bg-authority-lime rounded-3xl p-8 md:p-12">
              <h3 className="font-inter text-2xl md:text-3xl text-authority-dark-green mb-8 leading-tight">
                Faster innovation. Smarter<br />
                operations. Measurable<br />
                outcomes.
              </h3>
              
              <p className="font-helvetica text-base text-authority-dark-green mb-8 leading-relaxed">
                Whether you're modernizing legacy systems, building from the
                ground up, or accelerating cloud adoption, we work side-by-side
                with your teams to engineer solutions that move your business
                forward.
              </p>

              {/* Features List */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/ceb67c24b46350bca56d11d0aef53efc993b4981?width=50" 
                    alt="Productivity" 
                    className="w-6 h-6 mt-0.5"
                  />
                  <div>
                    <span className="font-inter font-bold text-sm text-authority-dark-green">Boost productivity </span>
                    <span className="font-inter text-sm text-authority-dark-green">with software designed around how you actually work</span>
                  </div>
                </div>
                
                <div className="w-full h-px bg-gray-300"></div>
                
                <div className="flex items-start gap-4">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/33e2da2060d8c7ad4f1c0560389b105b3282cabb?width=52" 
                    alt="Scale" 
                    className="w-6 h-6 mt-0.5"
                  />
                  <div>
                    <span className="font-inter font-bold text-sm text-authority-dark-green">Scale confidently </span>
                    <span className="font-inter text-sm text-authority-dark-green">with systems that evolve alongside your business</span>
                  </div>
                </div>
                
                <div className="w-full h-px bg-gray-300"></div>
                
                <div className="flex items-start gap-4">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/8b75ef48594b0fd8f8370efc8e686b53a3e52d06?width=38" 
                    alt="Speed" 
                    className="w-6 h-6 mt-0.5"
                  />
                  <div>
                    <span className="font-inter font-bold text-sm text-authority-dark-green">Move faster </span>
                    <span className="font-inter text-sm text-authority-dark-green">with the agility and expertise to handle complex tech challenges</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative rounded-3xl overflow-hidden h-96 lg:h-[535px]">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/c5c475c46f225c6708ee2629e39fc92e14ddf940?width=1202" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8">
                <button className="px-8 py-3 bg-authority-lime border border-authority-lime-dark rounded-full text-authority-dark-green font-inter font-bold text-sm hover:bg-authority-lime-dark transition-colors">
                  Let's Build What Works for You
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
