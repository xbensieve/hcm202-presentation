import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ConclusionSection = () => {
  const commitments = [
    {
      icon: "🎓",
      title: "Học tập",
      description: "Không ngừng học tập tư tưởng, đạo đức Hồ Chí Minh",
    },
    {
      icon: "💪",
      title: "Thực hành",
      description: "Ứng dụng tư tưởng vào thực tiễn đời sống và công việc",
    },
    {
      icon: "🤝",
      title: "Đoàn kết",
      description: "Xây dựng khối đại đoàn kết toàn dân tộc",
    },
    {
      icon: "🚀",
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

  const groupMembers = [
    "Nguyễn Hữu Nhật Triều",
    "Nguyễn Sỹ Ben",
    "Đào Đặng Hoàng Kim",
    "Nguyễn Tuấn Anh",
  ];

  return (
    <section
      id="conclusion"
      className="py-16 bg-gradient-to-br from-vietnam-red/10 via-background to-vietnam-gold/10"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Badge
              variant="outline"
              className="text-vietnam-red border-vietnam-red px-4 py-1 text-sm font-semibold"
            >
              Kết luận
            </Badge>
          </div>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Tiếp tục con đường
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl font-playfair italic text-vietnam-red mb-4">
              "Tiếp tục học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí
              Minh"
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Đây là nhiệm vụ lâu dài, góp phần xây dựng Đảng trong sạch, Nhà
              nước vững mạnh, đất nước phồn vinh, nhân dân hạnh phúc.
            </p>
          </div>
        </div>

        {/* Call to Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {commitments.map((commitment, index) => (
            <Card
              key={index}
              className="rounded-none hover:shadow-lg transition-shadow duration-300 border-none bg-white/90"
            >
              <CardContent className="p-6 text-center">
                <div className="rounded-full w-12 h-12 bg-gradient-to-br from-vietnam-red to-vietnam-gold flex items-center justify-center text-xl mb-4 mx-auto">
                  {commitment.icon}
                </div>
                <h3 className="font-playfair font-semibold text-lg text-foreground mb-3">
                  {commitment.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {commitment.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Future Vision */}
        <div className="max-w-3xl mx-auto mb-12">
          <Card className="border-none shadow-none bg-transparent">
            <div className="h-1  from-vietnam-red to-vietnam-gold" />
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-playfair font-semibold text-center text-foreground mb-6">
                Mục tiêu phấn đấu
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {futureGoals.map((goal, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 ">
                    <div className="w-6 h-6 bg-gradient-to-br from-vietnam-red to-vietnam-gold flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-foreground text-sm leading-relaxed">
                      {goal}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final Message */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto p-6 md:p-8 mb-8">
            <h3 className="text-xl md:text-2xl font-playfair font-semibold text-foreground mb-4">
              Việt Nam - Dân tộc - Xã hội chủ nghĩa
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Cùng nhau xây dựng một Việt Nam hùng cường, theo tư tưởng và con
              đường mà Chủ tịch Hồ Chí Minh đã chỉ ra.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-vietnam-red hover:bg-vietnam-red/90 text-white font-semibold px-6 py-2"
                onClick={() =>
                  document
                    .getElementById("hero")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Về đầu trang
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </Button>
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span>Tư tưởng Hồ Chí Minh - Ánh sáng dẫn đường</span>
              </div>
              <div className="text-center">
                © 2025 - Để học tập và nghiên cứu
                <br />
                Nhóm 2: {groupMembers.join(", ")}
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-vietnam-red"
                >
                  Chia sẻ
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-vietnam-red"
                >
                  Phản hồi
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;
