import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const HERO_IMAGES = {
  "1": "https://a.tcnn.vn//Upload/Images/Normal/2025/8/ba03fea5c8550945b3040a42c8910eee-20250819_1103_Nen-tang-Nganh-Noi-vu_simple_compose_01k307t5x1ecjrgsfvq0wwnkry-01.jpg",
  "2": "https://tuyenquang.dcs.vn/Image/Large/2023710102723_144605.jpg",
};

interface Content {
  title: string;
  image: string;
  videoUrl?: string;
  content: JSX.Element;
}

const ContemporaryValueDetail = () => {
  const { section } = useParams<{ section: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!section) {
      navigate("/contemporary-value", { replace: true });
    }
  }, [section, navigate]);

  const contentMap: Record<string, Content> = {
    "1": {
      title: "Nhà nước dân chủ",
      image: HERO_IMAGES["1"],
      videoUrl: "https://www.youtube.com/embed/Tduv552AWLE",
      content: (
        <>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Nhà nước dân chủ theo tư tưởng Hồ Chí Minh mang các đặc điểm sau:
          </p>
          <ul className="space-y-4 list-disc pl-6">
            <li className="text-lg font-semibold text-vietnam-red">
              Bản chất giai cấp công nhân
            </li>
            <li className="text-lg font-semibold text-vietnam-red">
              Đảng Cộng sản lãnh đạo
            </li>
            <li className="text-lg font-semibold text-vietnam-red">
              Nguyên tắc tập trung dân chủ
            </li>
            <li className="text-lg font-semibold text-vietnam-red">
              Định hướng xã hội chủ nghĩa
            </li>
            <li className="text-lg font-semibold text-vietnam-red">
              Sự thống nhất: bản chất giai cấp – tính nhân dân – tính dân tộc
            </li>
          </ul>
          <p className="text-muted-foreground my-6 leading-relaxed">
            <strong>Nhà nước của nhân dân:</strong> Quyền lực nhà nước là “thừa
            ủy quyền” của nhân dân. Nhân dân có quyền kiểm soát, bãi miễn, giải
            tán. Luật pháp là công cụ quyền lực của nhân dân.
          </p>
          <p className="text-muted-foreground my-6 leading-relaxed">
            <strong>Nhà nước do nhân dân:</strong> Do nhân dân lập nên, dân là
            chủ và làm chủ. Nhà nước hoàn toàn trong sạch, không đặc quyền đặc
            lợi.
          </p>
          <p className="text-muted-foreground my-6 leading-relaxed">
            <strong>Nhà nước vì nhân dân:</strong> Chính sách nhằm mang lại
            quyền lợi cho nhân dân. Hồ Chí Minh: “Phải làm cho dân có ăn, có
            mặc, có ở, có học.” Tinh thần: “Lấy dân làm gốc”.
          </p>
        </>
      ),
    },
    "2": {
      title: "Nhà nước pháp quyền",
      image: HERO_IMAGES["2"],
      videoUrl: "https://www.youtube.com/embed/dnMCD3MGGFo",
      content: (
        <>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Nhà nước Việt Nam Dân chủ Cộng hòa ra đời (2/9/1945), đánh dấu bước
            ngoặt lịch sử.
          </p>
          <ul className="space-y-4 list-disc pl-6">
            <li className="text-lg font-semibold text-vietnam-red">
              Tổng tuyển cử (6/1/1946) bầu Quốc hội – cơ quan quyền lực của nhân
              dân.
            </li>
            <li className="text-lg font-semibold text-vietnam-red">
              Phiên họp Quốc hội đầu tiên (2–3/1946) thành lập bộ máy Nhà nước.
            </li>
          </ul>
          <p className="text-muted-foreground my-6 leading-relaxed">
            <strong>Đặc điểm:</strong>
          </p>
          <ul className="space-y-4 list-disc pl-6">
            <li className="text-lg font-semibold text-vietnam-red">
              Hợp hiến, hợp pháp
            </li>
            <li className="text-lg font-semibold text-vietnam-red">
              Thượng tôn pháp luật
            </li>
            <li className="text-lg font-semibold text-vietnam-red">
              Pháp quyền nhân nghĩa
            </li>
          </ul>
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
        <div className=" rounded-none relative mb-12 overflow-hidden shadow-xl">
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

export default ContemporaryValueDetail;
