import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const HERO_IMAGES = {
  "1": "https://mediafile.qdnd.vn//images/2024/1/27/cover3.jpg",
  "2": "https://hvlq.vn/upload/61311/fck/tuanhvlq/2022_11_03_08_40_191.jpg",
  "3": "https://smot.bvhttdl.gov.vn/wp-content/uploads/2022/02/bac.jpg",
};

interface Content {
  title: string;
  image: string;
  videoUrl?: string;
  content: JSX.Element;
}

const StatePhilosophyDetail = () => {
  const { section } = useParams<{ section: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!section) {
      navigate("/state-philosophy", { replace: true });
    }
  }, [section, navigate]);

  const contentMap: Record<string, Content> = {
    "1": {
      title: "Đảng là đạo đức, là văn minh",
      image: HERO_IMAGES["1"],
      videoUrl: "https://www.youtube.com/embed/K1QOWIO9P8k",
      content: (
        <ol className="space-y-6 list-decimal pl-6">
          <li className="text-lg font-semibold text-vietnam-red">
            Đảng là đạo đức, là văn minh
          </li>
          <p className="text-muted-foreground ml-6 leading-relaxed">
            Hồ Chí Minh khẳng định: “Đảng ta là đạo đức, là văn minh.”
            <br />
            Mục đích hoạt động của Đảng: lãnh đạo đấu tranh giải phóng dân tộc,
            xã hội, giai cấp và con người.
          </p>
          <p className="text-muted-foreground ml-6 leading-relaxed">
            Để đạt mục tiêu đó, Đảng phải:
          </p>
          <ul className="ml-12 space-y-2 list-disc text-sm">
            <li>Thấm nhuần đạo đức cách mạng.</li>
            <li>
              Đội ngũ đảng viên gương mẫu, tiên phong trong công tác và đời
              sống.
            </li>
            <li>Có quan hệ quốc tế trong sáng, vì hòa bình và phát triển.</li>
          </ul>
          <p className="text-muted-foreground ml-6 leading-relaxed mt-4">
            Đảng văn minh là tổ chức tiêu biểu cho lương tâm, trí tuệ và danh dự
            của dân tộc, không đứng trên dân tộc, hoạt động trong khuôn khổ Hiến
            pháp và pháp luật.
          </p>
        </ol>
      ),
    },
    "2": {
      title: "Đảng cách mạng chân chính",
      image: HERO_IMAGES["2"],
      videoUrl: "https://www.youtube.com/embed/JpWmCLk-LFE",
      content: (
        <>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Một Đảng cách mạng chân chính phải thể hiện ở các nguyên tắc:
          </p>
          <ul className="space-y-4 list-disc pl-6">
            <li className="text-lg font-semibold text-vietnam-red">
              Tập trung dân chủ – dân chủ đi đôi với tập trung; tránh độc đoán
              chuyên quyền hoặc ỷ lại tập thể.
            </li>
            <li className="text-lg font-semibold text-vietnam-red">
              Tự phê bình và phê bình – coi như việc rửa mặt hằng ngày; phải
              trung thực, kiên quyết, đúng người, đúng việc, có văn hóa.
            </li>
            <li className="text-lg font-semibold text-vietnam-red">
              Kỷ luật nghiêm minh, tự giác – tư tưởng và hành động nhất trí,
              “muôn người như một”.
            </li>
            <li className="text-lg font-semibold text-vietnam-red">
              Thường xuyên tự chỉnh đốn – nhiệm vụ quan trọng để giữ vững sức
              chiến đấu, đặc biệt khi đứng trước thử thách.
            </li>
            <li className="text-lg font-semibold text-vietnam-red">
              Đoàn kết, thống nhất trong Đảng – trước hết ở cấp ủy, cán bộ lãnh
              đạo chủ chốt; dựa trên chủ nghĩa Mác – Lênin và đường lối Đảng.
            </li>
            <li className="text-lg font-semibold text-vietnam-red">
              Liên hệ mật thiết với nhân dân – gắn bó máu thịt với dân, vì Đảng
              là một bộ phận của dân tộc Việt Nam.
            </li>
            <li className="text-lg font-semibold text-vietnam-red">
              Đoàn kết quốc tế – giữ mối quan hệ trong sáng với phong trào cách
              mạng thế giới, thể hiện bản chất quốc tế của giai cấp công nhân.
            </li>
          </ul>
        </>
      ),
    },
    "3": {
      title: "Xây dựng đội ngũ cán bộ, đảng viên",
      image: HERO_IMAGES["3"],
      videoUrl: "https://www.youtube.com/embed/968FdvsIh6k",
      content: (
        <ul className="space-y-6 list-disc pl-6">
          <li className="text-lg font-semibold text-vietnam-red">
            Tuyệt đối trung thành với Đảng.
          </li>
          <li className="text-lg font-semibold text-vietnam-red">
            Thường xuyên tu dưỡng, rèn luyện, nâng cao đạo đức cách mạng.
          </li>
          <li className="text-lg font-semibold text-vietnam-red">
            Học tập, nâng cao trình độ về mọi mặt.
          </li>
          <li className="text-lg font-semibold text-vietnam-red">
            Có mối liên hệ mật thiết với nhân dân.
          </li>
          <li className="text-lg font-semibold text-vietnam-red">
            Năng động, sáng tạo, chịu trách nhiệm.
          </li>
          <li className="text-lg font-semibold text-vietnam-red">
            Luôn phòng chống tiêu cực.
          </li>
          <li className="text-lg font-semibold text-vietnam-red">
            Thực hiện nghiêm cương lĩnh, đường lối, nghị quyết của Đảng.
          </li>
        </ul>
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
          <Button onClick={() => navigate("/state-philosophy")}>
            Quay lại
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/20 via-background to-cultural-gradient">
      <div className="container mx-auto px-4 py-20">
        <Button
          variant="outline"
          onClick={() => navigate(-1)}
          className="mb-8 hover:bg-vietnam-red hover:text-white transition-colors"
        >
          Quay lại
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
          <Card className="max-w-4xl order-2 lg:order-1 shadow-lg border-0 rounded-none">
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
              <Card className="shadow-lg border-0 rounded-none">
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

export default StatePhilosophyDetail;
