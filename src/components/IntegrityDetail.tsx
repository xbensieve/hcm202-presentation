// ContemporaryValueDetail.tsx (component cho trang chi tiết)
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

// Import ảnh hero (sử dụng URL công khai từ Wikimedia)
const HERO_IMAGES = {
  "1": "https://lyluanchinhtri-statics.melisoft.vn/2024/01/18/1.dd__pl_1705552797697.jpg",
  "2": "https://a.tcnn.vn/uploads/resources/hoainga/images/hchiminh.jpg",
};

interface Content {
  title: string;
  image: string;
  videoUrl?: string;
  content: JSX.Element;
}

const IntegrityDetail = () => {
  const { section } = useParams<{ section: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!section) {
      navigate("/contemporary-value", { replace: true });
    }
  }, [section, navigate]);

  const contentMap: Record<string, Content> = {
    "1": {
      title: "Nhà nước trong sạch, vững mạnh",
      image: HERO_IMAGES["1"],
      videoUrl: "https://www.youtube.com/embed/1QdbAYyS0QQ",
      content: (
        <>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Nhà nước trong sạch, vững mạnh theo tư tưởng Hồ Chí Minh đòi hỏi:
          </p>
          <ul className="space-y-4 list-disc pl-6">
            <li className="text-lg font-semibold text-vietnam-red">
              Kiểm soát quyền lực nhà nước
            </li>
            <li className="text-lg font-semibold text-vietnam-red">
              Phòng, chống tiêu cực trong Nhà nước
            </li>
            <li className="text-lg font-semibold text-vietnam-red">
              Chống tham nhũng
            </li>
            <li className="text-lg font-semibold text-vietnam-red">
              Chống quan liêu
            </li>
            <li className="text-lg font-semibold text-vietnam-red">
              Chống đặc quyền, đặc lợi
            </li>
          </ul>
          <p className="text-muted-foreground my-6 leading-relaxed">
            Hồ Chí Minh nhấn mạnh: để Nhà nước thực sự của dân, do dân và vì
            dân, điều cốt lõi là phải trong sạch và vững mạnh. Cần có cơ chế
            kiểm soát quyền lực, tránh tình trạng quyền lực bị lạm dụng, bị tha
            hóa.
          </p>
          <p className="text-muted-foreground my-6 leading-relaxed">
            Đồng thời, phải kiên quyết phòng chống tiêu cực trong bộ máy Nhà
            nước: tham nhũng, quan liêu, đặc quyền đặc lợi. Đây là những nguy cơ
            lớn đe dọa uy tín của Đảng và sự tồn vong của chế độ.
          </p>
        </>
      ),
    },
    "2": {
      title: "Vận dụng tư tưởng Hồ Chí Minh",
      image: HERO_IMAGES["2"],
      videoUrl: "https://www.youtube.com/embed/Yp5Wc4JwlXs",
      content: (
        <>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Vận dụng tư tưởng Hồ Chí Minh trong xây dựng Đảng và Nhà nước:
          </p>
          <h3 className="text-xl font-semibold text-vietnam-red mb-4">
            Xây dựng Đảng:
          </h3>
          <ul className="space-y-4 list-disc pl-6">
            <li className="text-lg font-semibold text-vietnam-red">
              Trong sạch, vững mạnh
            </li>
            <li className="text-lg font-semibold text-vietnam-red">
              Tự chỉnh đốn, nâng cao năng lực lãnh đạo
            </li>
            <li className="text-lg font-semibold text-vietnam-red">
              Gắn bó mật thiết với nhân dân
            </li>
          </ul>
          <h3 className="text-xl font-semibold text-vietnam-red my-4">
            Xây dựng Nhà nước:
          </h3>
          <ul className="space-y-4 list-disc pl-6">
            <li className="text-lg font-semibold text-vietnam-red">
              Nhà nước trong sạch, vững mạnh
            </li>
            <li className="text-lg font-semibold text-vietnam-red">
              Đổi mới, tăng cường sự lãnh đạo của Đảng đối với Nhà nước
            </li>
            <li className="text-lg font-semibold text-vietnam-red">
              Nâng cao hiệu lực, hiệu quả quản lý
            </li>
          </ul>
          <p className="text-muted-foreground my-6 leading-relaxed">
            Tất cả nhằm thực hiện lời dạy của Bác: “Đảng ta là đạo đức, là văn
            minh; Nhà nước ta là của dân, do dân và vì dân.”
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

export default IntegrityDetail;
