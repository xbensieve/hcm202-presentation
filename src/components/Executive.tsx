import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CARD_IMAGES = {
  "1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbF20TfZC8LKt72nW904OM4cdxmTHIjp-YQw&s",
  "2": "https://imgcdn.tapchicongthuong.vn/tcct-media/23/5/16/xay-dung-nha-nuoc-phap-quyen.jpg",
};

const Executive = () => {
  const navigate = useNavigate();

  const navigateToDetail = (section: string) => {
    navigate(`/executive-detail/${section}`);
  };

  const sections = [
    {
      id: "1",
      title: "Xây dựng Đảng thật sự trong sạch, vững mạnh",
      description:
        "Đường lối đúng đắn, chỉnh đốn thường xuyên, đảng viên gương mẫu làm đầy tớ nhân dân.",
      image: CARD_IMAGES["1"],
    },
    {
      id: "2",
      title: "Xây dựng Nhà nước",
      description:
        "Hoàn thiện pháp luật, kiểm soát quyền lực, xây dựng đội ngũ cán bộ có đạo đức và năng lực.",
      image: CARD_IMAGES["2"],
    },
  ];

  return (
    <section
      id="executive"
      className="py-20 bg-gradient-to-br from-background to-accent/20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative overflow-hidden">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Vận dụng tư tưởng Hồ Chí Minh vào xây dựng Đảng và Nhà nước
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Xây dựng Đảng và Nhà nước trong sạch, vững mạnh, lấy dân làm gốc,
            thực hiện lời dạy của Bác Hồ.
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

export default Executive;
