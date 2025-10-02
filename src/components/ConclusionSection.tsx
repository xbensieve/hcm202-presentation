import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, Cpu, BookOpen, Hammer, Users, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import QRCode from "@/assets/qr-code.png";

const ConclusionSection = () => {
  const commitments = [
    {
      icon: <BookOpen className="w-8 h-8 text-white" />,
      title: "Học tập",
      description: "Không ngừng học tập tư tưởng, đạo đức Hồ Chí Minh",
    },
    {
      icon: <Hammer className="w-8 h-8 text-white" />,
      title: "Thực hành",
      description: "Ứng dụng tư tưởng vào thực tiễn đời sống và công việc",
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Đoàn kết",
      description: "Xây dựng khối đại đoàn kết toàn dân tộc",
    },
    {
      icon: <Rocket className="w-8 h-8 text-white" />,
      title: "Đổi mới",
      description: "Tiên phong trong đổi mới sáng tạo và phát triển",
    },
  ];

  const futureGoals = [
    "Xây dựng Đảng trong sạch, vững mạnh",
    "Củng cố Nhà nước pháp quyền xã hội chủ nghĩa",
    "Phát triển đất nước giàu mạnh, dân chủ, công bằng, văn minh",
    "Đưa Việt Nam thành nước phát triển, thu nhập cao",
  ];

  return (
    <section id="conclusion" className="py-20">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="text-vietnam-red border-vietnam-red px-4 py-1 text-sm font-semibold mb-4"
          >
            Kết luận
          </Badge>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Tiếp tục con đường
          </h2>
          <p className="text-lg md:text-xl font-playfair italic text-vietnam-red mb-4 max-w-2xl mx-auto">
            "Tiếp tục học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí
            Minh"
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Đây là nhiệm vụ lâu dài, góp phần xây dựng Đảng trong sạch, Nhà nước
            vững mạnh, đất nước phồn vinh, nhân dân hạnh phúc.
          </p>
        </div>

        {/* Commitments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {commitments.map((commitment, index) => (
            <Card
              key={index}
              className="rounded-xl hover:shadow-xl transition-all duration-300 border border-border/50 bg-white/80 backdrop-blur"
            >
              <CardContent className="p-6 text-center flex flex-col items-center">
                <div className="rounded-full w-14 h-14 bg-gradient-to-br from-vietnam-red to-vietnam-gold flex items-center justify-center mb-4 shadow">
                  {commitment.icon}
                </div>
                <h3 className="font-playfair font-semibold text-lg text-foreground mb-2">
                  {commitment.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {commitment.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Future Goals */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="border-none shadow-md bg-white/90 backdrop-blur rounded-xl">
            <CardContent className="p-6 md:p-10">
              <h3 className="text-xl md:text-2xl font-playfair font-semibold text-center text-foreground mb-8">
                Mục tiêu phấn đấu
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {futureGoals.map((goal, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/40 transition"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-vietnam-red to-vietnam-gold flex items-center justify-center text-white font-bold text-sm rounded-full flex-shrink-0 shadow">
                      {index + 1}
                    </div>
                    <p className="text-foreground text-sm md:text-base leading-relaxed">
                      {goal}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final Message + Actions */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-xl md:text-2xl font-playfair font-semibold text-foreground mb-4">
            Việt Nam - Dân tộc - Xã hội chủ nghĩa
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            Cùng nhau xây dựng một Việt Nam hùng cường, theo tư tưởng và con
            đường mà Chủ tịch Hồ Chí Minh đã chỉ ra.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            {/* Scroll to top */}
            <Button
              size="lg"
              className="bg-vietnam-red hover:bg-vietnam-red/90 text-white font-semibold px-6 py-2 rounded-xl shadow-md"
              onClick={() =>
                document
                  .getElementById("hero")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Về đầu trang
              <ArrowUp className="ml-2 w-4 h-4" />
            </Button>

            {/* Redirect to AI Usage */}
            <Link to="/ai-usage">
              <Button
                size="lg"
                variant="outline"
                className="border-vietnam-red text-vietnam-red hover:bg-vietnam-red/10 font-semibold px-6 py-2 rounded-xl shadow-sm"
              >
                AI Tools Usage
                <Cpu className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* QR Code */}
          <div className="flex justify-center mb-8">
            <img
              src={QRCode}
              alt="QR Code"
              className="w-32 h-32 rounded-lg shadow-md"
            />
          </div>
          <span className="text-xs text-muted-foreground">
            Quét mã QR để truy cập nhanh
          </span>
        </div>

        {/* Footer */}
        <footer className="border-t border-border mt-20 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left text-sm">
            {/* Left */}
            <div>
              <p className="font-semibold text-foreground mb-2">
                Tư tưởng Hồ Chí Minh - Ánh sáng dẫn đường
              </p>
              <p className="text-xs text-muted-foreground">
                © 2025 - Để học tập và nghiên cứu
              </p>
            </div>

            {/* Middle - Group Members */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Nhóm 2</h4>
              <ul className="space-y-1">
                <li>
                  Nguyễn Hữu Nhật Triều{" "}
                  <span className="text-muted-foreground">(Nội dung)</span>
                </li>
                <li>
                  Nguyễn Sỹ Ben{" "}
                  <span className="text-muted-foreground">(Developer)</span>
                </li>
                <li>
                  Đào Đặng Hoàng Kim{" "}
                  <span className="text-muted-foreground">(Nội dung)</span>
                </li>
                <li>
                  Nguyễn Tuấn Anh{" "}
                  <span className="text-muted-foreground">(Nội dung)</span>
                </li>
              </ul>
            </div>

            {/* Right - AI Tools */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">
                AI Tools hỗ trợ
              </h4>
              <p className="leading-relaxed">
                Lovable.dev <br />
                ChatGPT 5 <br />
                Gemini 2.0 <br />
                Copilot
              </p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ConclusionSection;
