import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import peopleUnity from "@/assets/people-unity.jpg";

const CARD_IMAGES = {
  "1": "https://mediafile.qdnd.vn//images/2024/1/27/cover3.jpg",
  "2": "https://hvlq.vn/upload/61311/fck/tuanhvlq/2022_11_03_08_40_191.jpg",
  "3": "https://smot.bvhttdl.gov.vn/wp-content/uploads/2022/02/bac.jpg",
};

const StatePhilosophySection = () => {
  const navigate = useNavigate();

  const navigateToDetail = (section: string) => {
    navigate(`/state-philosophy-detail/${section}`);
  };

  const sections = [
    {
      id: "1",
      title: "Đảng là đạo đức, là văn minh",
      description:
        "Đảng ta là đạo đức, là văn minh, thấm nhuần đạo đức cách mạng và hoạt động trong khuôn khổ pháp luật.",
      image: CARD_IMAGES["1"],
    },
    {
      id: "2",
      title: "Đảng cách mạng chân chính",
      description:
        "Thể hiện qua các nguyên tắc tập trung dân chủ, tự phê bình, kỷ luật nghiêm minh và liên hệ mật thiết với nhân dân.",
      image: CARD_IMAGES["2"],
    },
    {
      id: "3",
      title: "Xây dựng đội ngũ cán bộ, đảng viên",
      description:
        "Cán bộ phải trung thành, tu dưỡng đạo đức, nâng cao trình độ và gắn bó với nhân dân.",
      image: CARD_IMAGES["3"],
    },
  ];

  return (
    <section
      id="state-philosophy"
      className="py-20 bg-gradient-to-br from-accent/20 via-background to-cultural-gradient"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative overflow-hidden">
          <img
            src={peopleUnity}
            alt="Đoàn kết nhân dân"
            className="mx-auto rounded-full w-24 h-24 md:w-32 md:h-32 shadow-lg mb-6 border-2 border-vietnam-red/20"
          />
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Đảng phải trong sạch, vững mạnh
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Xây dựng Đảng trong sạch, vững mạnh theo tư tưởng Hồ Chí Minh, đảm
            bảo vai trò lãnh đạo cách mạng.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section) => (
            <Card
              key={section.id}
              className="cursor-pointer rounded-none hover:shadow-xl transition-all duration-300 border-0 group overflow-hidden"
              onClick={() => navigateToDetail(section.id)}
            >
              <div className=" relative overflow-hidden h-48 md:h-56 bg-muted">
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

export default StatePhilosophySection;
