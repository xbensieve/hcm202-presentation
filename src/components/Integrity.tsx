import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import peopleUnity from "@/assets/people-unity.jpg";

const CARD_IMAGES = {
  "1": "https://lyluanchinhtri-statics.melisoft.vn/2024/01/18/1.dd__pl_1705552797697.jpg",
  "2": "https://a.tcnn.vn/uploads/resources/hoainga/images/hchiminh.jpg",
};

const IntegritySection = () => {
  const navigate = useNavigate();

  const navigateToDetail = (section: string) => {
    navigate(`/integrity-detail/${section}`);
  };

  const sections = [
    {
      id: "1",
      title: "Nhà nước trong sạch, vững mạnh",
      description:
        "Kiểm soát quyền lực, phòng chống tiêu cực, tham nhũng, quan liêu và đặc quyền đặc lợi.",
      image: CARD_IMAGES["1"],
    },
    {
      id: "2",
      title: "Vận dụng tư tưởng Hồ Chí Minh",
      description:
        "Xây dựng Đảng và Nhà nước trong sạch, vững mạnh, gắn bó với nhân dân, đảm bảo định hướng xã hội chủ nghĩa.",
      image: CARD_IMAGES["2"],
    },
  ];

  return (
    <section
      id="integrity"
      className="py-20 bg-gradient-to-br from-background to-accent/20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative overflow-hidden">
          <h2 className="font-inter text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Tư tưởng Hồ Chí Minh về Nhà nước và vận dụng
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Tư tưởng Hồ Chí Minh nhấn mạnh Nhà nước trong sạch, vững mạnh và sự
            vận dụng để xây dựng Đảng, Nhà nước pháp quyền xã hội chủ nghĩa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section) => (
            <Card
              key={section.id}
              className="rounded-none cursor-pointer hover:shadow-xl transition-all duration-300 border-0 group overflow-hidden"
              onClick={() => navigateToDetail(section.id)}
            >
              {/* Image Thumbnail */}
              <div className="relative overflow-hidden h-48 md:h-56 bg-muted">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <CardHeader className="p-6 pb-4">
                <CardTitle className="font-inter text-xl font-bold text-foreground leading-tight">
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
                  className="rounded-none w-full border-vietnam-red text-vietnam-red hover:bg-vietnam-red hover:text-white transition-colors"
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

export default IntegritySection;
