import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const HERO_IMAGES = {
  "1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbF20TfZC8LKt72nW904OM4cdxmTHIjp-YQw&s",
  "2": "https://imgcdn.tapchicongthuong.vn/tcct-media/23/5/16/xay-dung-nha-nuoc-phap-quyen.jpg",
};

interface Content {
  title: string;
  image: string;
  videoUrl?: string;
  content: JSX.Element;
}

const ExecutiveDetail = () => {
  const { section } = useParams<{ section: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!section) {
      navigate("/contemporary-value", { replace: true });
    }
  }, [section, navigate]);

  const contentMap: Record<string, Content> = {
    "1": {
      title: "Xây dựng Đảng thật sự trong sạch, vững mạnh",
      image: HERO_IMAGES["1"],
      videoUrl: "https://www.youtube.com/embed/968FdvsIh6k",
      content: (
        <>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Xây dựng Đảng trong sạch, vững mạnh theo tư tưởng Hồ Chí Minh bao
            gồm:
          </p>
          <ul className="space-y-4 list-disc pl-6">
            <li className="text-lg font-semibold text-vietnam-red">
              Đường lối, chủ trương đúng đắn, phù hợp từng giai đoạn
            </li>
            <li className="text-lg font-semibold text-vietnam-red">
              Tổ chức thực hiện tốt, thể chế hóa thành hành động
            </li>
            <li className="text-lg font-semibold text-vietnam-red">
              Chỉnh đốn thường xuyên, chống suy thoái
            </li>
            <li className="text-lg font-semibold text-vietnam-red">
              Đảng viên: vừa lãnh đạo, vừa là người đầy tớ trung thành của nhân
              dân
            </li>
          </ul>
          <p className="text-muted-foreground my-6 leading-relaxed">
            <strong>Với sinh viên:</strong>
          </p>
          <ul className="space-y-4 list-disc pl-6">
            <li className="text-lg font-semibold text-vietnam-red">
              Đảng viên: gương mẫu, thực hiện tốt điều lệ, chủ trương
            </li>
            <li className="text-lg font-semibold text-vietnam-red">
              Chưa là đảng viên: học tập, phấn đấu trở thành đảng viên hoặc ủng
              hộ Đảng
            </li>
          </ul>
          <p className="text-muted-foreground my-6 leading-relaxed">
            Đường lối, chủ trương phải dựa trên chủ nghĩa Mác – Lênin và tư
            tưởng Hồ Chí Minh, đồng thời phù hợp với tình hình đất nước từng
            thời kỳ. Không chỉ dừng lại ở chủ trương, Đảng phải tổ chức thực
            hiện tốt, biến thành hành động của cả hệ thống chính trị.
          </p>
        </>
      ),
    },
    "2": {
      title: "Xây dựng Nhà nước",
      image: HERO_IMAGES["2"],
      videoUrl: "https://www.youtube.com/embed/JpWmCLk-LFE",
      content: (
        <>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Xây dựng Nhà nước theo tư tưởng Hồ Chí Minh yêu cầu:
          </p>
          <ul className="space-y-4 list-disc pl-6">
            <li className="text-lg font-semibold text-vietnam-red">
              Hoàn thiện pháp luật và tổ chức thi hành
            </li>
            <li className="text-lg font-semibold text-vietnam-red">
              Pháp luật: công cụ quản lý xã hội và bảo đảm dân làm chủ
            </li>
            <li className="text-lg font-semibold text-vietnam-red">
              Cơ chế phân công, phối hợp và kiểm soát quyền lực lập pháp – hành
              pháp – tư pháp
            </li>
            <li className="text-lg font-semibold text-vietnam-red">
              Xây dựng đội ngũ cán bộ, công chức có bản lĩnh, đạo đức, năng lực
            </li>
            <li className="text-lg font-semibold text-vietnam-red">
              Phòng chống tham nhũng, lãng phí, quan liêu, thực hành tiết kiệm
            </li>
            <li className="text-lg font-semibold text-vietnam-red">
              Đảng lãnh đạo Nhà nước bằng chủ trương, chính sách lớn; gương mẫu
              tuân thủ pháp luật
            </li>
          </ul>
          <p className="text-muted-foreground my-6 leading-relaxed">
            Sự trong sạch, vững mạnh của Đảng quyết định sự thành công của việc
            xây dựng Nhà nước. Hồ Chí Minh nhấn mạnh: Nhà nước pháp quyền xã hội
            chủ nghĩa phải thật sự trong sạch, hoạt động hiệu lực, hiệu quả, lấy
            dân làm gốc.
          </p>
        </>
      ),
    },
  };

  const currentContent = contentMap[section || ""];

  if (!currentContent) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-foreground">
            Nội dung không tồn tại
          </h1>
          <Button onClick={() => navigate("/contemporary-value")}>
            Quay lại
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      <div className="container mx-auto px-4 py-20">
        <Button
          variant="outline"
          onClick={() => navigate(-1)}
          className="mb-8 hover:bg-vietnam-red hover:text-white transition-colors"
        >
          ← Quay lại
        </Button>

        {/* Hero Section with Image */}
        <div className="relative mb-12 overflow-hidden shadow-xl">
          <img
            src={currentContent.image}
            alt={currentContent.title}
            className="w-full h-64 object-cover md:h-96 lg:h-[500px]"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4">
              {currentContent.title}
            </h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Content Column */}
          <Card className="rounded-none max-w-4xl order-2 lg:order-1 shadow-lg border-0">
            <CardHeader className="bg-vietnam-red/10">
              <CardTitle className="text-2xl font-bold text-vietnam-red">
                Nội dung chi tiết
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 prose prose-lg max-w-none">
              {currentContent.content}
            </CardContent>
          </Card>

          {/* Video Column */}
          {currentContent.videoUrl && (
            <div className="order-1 lg:order-2">
              <Card className="rounded-none shadow-lg border-0">
                <CardHeader className="bg-vietnam-red/10">
                  <CardTitle className="text-xl font-bold text-vietnam-red">
                    Video minh họa
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="aspect-video w-full">
                    <iframe
                      src={currentContent.videoUrl}
                      title="Video tư tưởng Hồ Chí Minh"
                      className="w-full h-full shadow-md"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExecutiveDetail;
