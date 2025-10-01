// PartyThoughtDetail.tsx (cập nhật với design đẹp, responsive, ảnh và video)
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

// Import ảnh (sử dụng URL công khai từ Wikimedia)
const HCM_IMAGE =
  "https://special.nhandan.vn/tu-tuong-HCM-ve-XD-Dang/assets/DVF7VigqEf/hcm-1-2560x1440.jpeg";
const PARTY_FLAG =
  "https://tapchilichsudang.vn/pic/AboutUs/images/638301442166132519.jpg";
const STATE_IMAGE =
  "https://nld.mediacdn.vn/zoom/600_315/291774122806476800/2023/9/2/chu-tich-ho-chi-minh-1509-16936417986221284833825.jpg";

interface Content {
  title: string;
  image: string;
  videoUrl?: string;
  content: JSX.Element;
}

const PartyThoughtDetail = () => {
  const { section } = useParams<{ section: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!section) {
      navigate("/party-thought", { replace: true });
    }
  }, [section, navigate]);

  const contentMap: Record<string, Content> = {
    "4-1": {
      title: "Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam",
      image: HCM_IMAGE,
      videoUrl: "https://www.youtube.com/embed/K1QOWIO9P8k",
      content: (
        <ol className="space-y-6 list-decimal pl-6">
          <li className="text-lg font-semibold text-vietnam-red">
            Tính tất yếu và vai trò lãnh đạo của Đảng
          </li>
          <p className="text-muted-foreground ml-6 leading-relaxed">
            Hồ Chí Minh khẳng định: lực lượng công nhân và nhân dân lao động rất
            to lớn, nhưng nếu không có Đảng lãnh đạo thì cách mạng không thể
            thành công.
            <br />
            Trong tác phẩm{" "}
            <em className="text-foreground font-medium">Đường Kách mệnh</em>,
            Người viết: “Cách mạng trước hết phải có đảng cách mệnh… Đảng có
            vững thì cách mệnh mới thành công, cũng như người cầm lái có vững
            thì thuyền mới chạy.”
            <br />
            Như vậy, sự ra đời và vai trò lãnh đạo của Đảng là tất yếu lịch sử,
            xuất phát từ yêu cầu phát triển của dân tộc Việt Nam.
          </p>

          <li className="text-lg font-semibold text-vietnam-red">
            Quan điểm của Hồ Chí Minh về sự ra đời của Đảng
          </li>
          <p className="text-muted-foreground ml-6 leading-relaxed">
            Khác với các quan điểm giáo điều, Hồ Chí Minh nhấn mạnh: Đảng Cộng
            sản Việt Nam ra đời là kết quả của sự kết hợp chủ nghĩa Mác – Lênin
            với phong trào công nhân và đặc biệt là phong trào yêu nước.
            <br />
            Người thêm yếu tố “phong trào yêu nước” vì đó là truyền thống ngàn
            đời của dân tộc, là sức mạnh lớn nhất của nhân dân Việt Nam.
          </p>
        </ol>
      ),
    },
    "4-2": {
      title: "Tư tưởng Hồ Chí Minh về Nhà nước của dân, do dân, vì dân",
      image: STATE_IMAGE,
      videoUrl: "https://www.youtube.com/embed/JpWmCLk-LFE",
      content: (
        <>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Nhà nước ta là nhà nước dân chủ, mang bản chất giai cấp công nhân,
            đồng thời có tính nhân dân và tính dân tộc sâu sắc.
          </p>
          <ul className="space-y-4 list-disc pl-6">
            <li className="text-lg font-semibold text-vietnam-red">
              <strong>“Của dân”</strong> nghĩa là mọi quyền lực đều thuộc về
              nhân dân.
            </li>
            <li className="text-lg font-semibold text-vietnam-red">
              <strong>“Do dân”</strong> nghĩa là nhân dân bầu ra, ủng hộ và tham
              gia quản lý.
            </li>
            <li className="text-lg font-semibold text-vietnam-red">
              <strong>“Vì dân”</strong> nghĩa là Nhà nước phục vụ lợi ích, hạnh
              phúc của nhân dân.
            </li>
          </ul>
        </>
      ),
    },
    "4-3": {
      title:
        "Vận dụng tư tưởng Hồ Chí Minh trong công tác xây dựng Đảng và Nhà nước hiện nay",
      image: PARTY_FLAG,
      videoUrl: "https://www.youtube.com/embed/968FdvsIh6k",
      content: (
        <ul className="space-y-6 list-disc pl-6">
          <li className="text-lg font-semibold text-vietnam-red">
            Xây dựng Đảng trong sạch, vững mạnh, gắn bó mật thiết với nhân dân.
          </li>
          <li className="text-lg font-semibold text-vietnam-red">
            Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa, quản lý xã hội bằng
            pháp luật, bảo đảm quyền làm chủ của nhân dân.
          </li>
          <li className="text-lg font-semibold text-vietnam-red">
            Cán bộ, đảng viên phải thực sự là công bộc, là người đầy tớ trung
            thành của nhân dân.
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
          <Button onClick={() => navigate("/party-thought")}>Quay lại</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/30 to-background">
      <div className="container mx-auto px-4 py-20">
        <Button
          variant="outline"
          onClick={() => navigate(-1)}
          className="mb-8 hover:bg-vietnam-red hover:text-white transition-colors"
        >
          Quay lại
        </Button>

        <div className="relative rounded-none mb-12 overflow-hidden shadow-xl">
          <img
            src={currentContent.image}
            alt={currentContent.title}
            className="w-full h-64 object-cover md:h-96 lg:h-[500px]"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="font-playfair text-4xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4">
              {currentContent.title}
            </h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Content Column */}
          <Card className="max-w-4xl order-2 lg:order-1 shadow-lg rounded-none">
            <CardHeader className="bg-vietnam-red/10">
              <CardTitle className="text-2xl font-bold text-vietnam-red">
                Nội dung chi tiết
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 prose prose-lg max-w-none">
              {currentContent.content}
            </CardContent>
          </Card>

          {currentContent.videoUrl && (
            <div className="order-1 lg:order-2">
              <Card className="shadow-lg rounded-none">
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
                      className="w-full h-full rounded-none shadow-md"
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

export default PartyThoughtDetail;
