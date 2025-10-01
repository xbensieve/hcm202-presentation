import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import partySymbol from "@/assets/party-symbol.png";

const CARD_IMAGES = {
  "4-1":
    "https://special.nhandan.vn/tu-tuong-HCM-ve-XD-Dang/assets/DVF7VigqEf/hcm-1-2560x1440.jpeg",
  "4-2":
    "https://tapchilichsudang.vn/pic/AboutUs/images/638301442166132519.jpg",
  "4-3":
    "https://nld.mediacdn.vn/zoom/600_315/291774122806476800/2023/9/2/chu-tich-ho-chi-minh-1509-16936417986221284833825.jpg",
};

const PartyThoughtSection = () => {
  const navigate = useNavigate();

  const navigateToDetail = (section: string) => {
    navigate(`/party-thought-detail/${section}`);
  };

  const sections = [
    {
      id: "4-1",
      title: "Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam",
      description:
        "Nhấn mạnh tính tất yếu lịch sử và vai trò lãnh đạo của Đảng trong cách mạng Việt Nam.",
      image: CARD_IMAGES["4-1"],
    },
    {
      id: "4-2",
      title: "Tư tưởng Hồ Chí Minh về Nhà nước của dân, do dân, vì dân",
      description:
        "Nhà nước ta mang bản chất giai cấp công nhân, tính nhân dân và dân tộc sâu sắc.",
      image: CARD_IMAGES["4-2"],
    },
    {
      id: "4-3",
      title:
        "Vận dụng tư tưởng Hồ Chí Minh trong công tác xây dựng Đảng và Nhà nước hiện nay",
      description:
        "Xây dựng Đảng trong sạch, vững mạnh và Nhà nước pháp quyền xã hội chủ nghĩa.",
      image: CARD_IMAGES["4-3"],
    },
  ];

  return (
    <section
      id="party-thought"
      className="py-20 bg-gradient-to-br from-background via-accent/30 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative overflow-hidden">
          <img
            src={partySymbol}
            alt="Biểu tượng Đảng Cộng sản Việt Nam"
            className="mx-auto rounded-full w-24 h-24 md:w-32 md:h-32 shadow-lg mb-6 border-2 border-vietnam-red/20"
          />
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Tư tưởng của Người là kim chỉ nam cho sự nghiệp cách mạng, nhấn mạnh
            vai trò lãnh đạo của Đảng và bản chất nhân dân của Nhà nước.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section) => (
            <Card
              key={section.id}
              className="cursor-pointer rounded-none hover:shadow-xl transition-all duration-300 border-0 group overflow-hidden"
              onClick={() => navigateToDetail(section.id)}
            >
              <div className="relative overflow-hidden h-48 md:h-56 bg-muted">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader className="p-6 pb-4">
                <CardTitle className="font-sans text-xl font-bold text-foreground leading-tight">
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {section.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateToDetail(section.id);
                  }}
                  className="w-full rounded-none border-vietnam-red text-vietnam-red hover:bg-vietnam-red hover:text-white transition-colors"
                >
                  Xem chi tiết
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartyThoughtSection;
