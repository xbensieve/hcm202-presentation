import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById("party-thought");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient opacity-80" />
      <div className="absolute inset-0 bg-black/30" />

      {/* Cultural Pattern Overlay */}
      <div className="absolute inset-0 star-pattern opacity-20" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-inter font-bold text-white mb-6 leading-tight">
            Tư tưởng Hồ Chí Minh
          </h1>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-inter font-semibold text-vietnam-gold mb-8 leading-relaxed">
            về Đảng Cộng sản Việt Nam và
            <br className="hidden md:block" />
            Nhà nước của dân, do dân, vì dân
          </h2>
        </div>

        <div className="slide-in-right max-w-4xl mx-auto mb-12">
          <blockquote className="text-lg md:text-xl lg:text-2xl text-white/90 font-light italic mb-4 leading-relaxed">
            "Dễ trăm lần không dân cũng chịu, khó vạn lần dân liệu cũng xong."
          </blockquote>
          <cite className="text-vietnam-gold font-semibold text-lg md:text-xl">
            – Hồ Chí Minh
          </cite>
        </div>

        <div className="bounce-in max-w-3xl mx-auto mb-16">
          <p className="text-lg md:text-xl text-white/85 leading-relaxed">
            Tư tưởng Hồ Chí Minh soi sáng con đường cách mạng Việt Nam, khẳng
            định vai trò của Đảng và Nhà nước trong sự nghiệp giải phóng dân
            tộc, xây dựng đất nước.
          </p>
        </div>

        <div className="fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={scrollToNext}
            size="lg"
            className="bg-white text-vietnam-red hover:bg-white/90 font-semibold text-lg px-8 py-3 rounded-full cultural-shadow"
          >
            Khám phá tư tưởng
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
