import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { id: "hero", label: "Trang chủ" },
    { id: "party-thought", label: "Tư tưởng về Đảng" },
    { id: "state-philosophy", label: "Nhà nước vững mạnh" },
    { id: "contemporary-value", label: "Dân chủ" },
    { id: "integrity", label: "Liêm chính" },
    { id: "executive", label: "Thực thi" },
    { id: "conclusion", label: "Kết luận" },
    { id: "review", label: "Ôn tập" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems
        .filter((item) => item.id !== "review")
        .map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (itemId) => {
    if (itemId === "review") {
      navigate("/quiz");
    } else {
      const element = document.getElementById(itemId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setActiveSection(itemId);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-playfair font-bold text-2xl text-foreground">
              Tư tưởng Hồ Chí Minh
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "secondary" : "ghost"}
                onClick={() => handleNavigation(item.id)}
                className={`text-sm rounded-none font-medium ${
                  activeSection === item.id
                    ? "bg-vietnam-red text-white"
                    : "text-gray-950 hover:text-foreground"
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              if (menu) {
                menu.classList.toggle("hidden");
              }
            }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>

        {/* Mobile menu */}
        <div id="mobile-menu" className="hidden md:hidden mt-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "default" : "ghost"}
              onClick={() => {
                handleNavigation(item.id);
                document.getElementById("mobile-menu")?.classList.add("hidden");
              }}
              className={`w-full justify-start text-sm font-medium ${
                activeSection === item.id
                  ? "bg-vietnam-red text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
