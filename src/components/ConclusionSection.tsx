import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ConclusionSection = () => {
  const commitments = [
    {
      icon: "🎓",
      title: "Học tập",
      description: "Không ngừng học tập tư tưởng, đạo đức Hồ Chí Minh"
    },
    {
      icon: "💪",
      title: "Thực hành", 
      description: "Ứng dụng tư tưởng vào thực tiễn đời sống và công việc"
    },
    {
      icon: "🤝",
      title: "Đoàn kết",
      description: "Xây dựng khối đại đoàn kết toàn dân tộc"
    },
    {
      icon: "🚀",
      title: "Đổi mới",
      description: "Tiên phong trong đổi mới sáng tạo và phát triển"
    }
  ];

  const futureGoals = [
    "Xây dựng Đảng trong sạch, vững mạnh",
    "Củng cố Nhà nước pháp quyền xã hội chủ nghĩa",
    "Phát triển đất nước giàu mạnh, dân chủ, công bằng, văn minh",
    "Đưa Việt Nam thành nước phát triển, thu nhập cao"
  ];

  return (
    <section id="conclusion" className="py-20 bg-gradient-to-br from-vietnam-red/5 via-background to-vietnam-gold/5 star-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-vietnam-red rounded-full animate-pulse" />
            <Badge variant="outline" className="text-vietnam-red border-vietnam-red">
              Kết luận
            </Badge>
            <div className="w-3 h-3 bg-vietnam-red rounded-full animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-8 scroll-fade">
            Tiếp tục con đường
          </h2>
          <div className="max-w-4xl mx-auto scroll-fade">
            <p className="text-xl md:text-2xl font-playfair italic text-vietnam-red mb-6">
              "Tiếp tục học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh"
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Đây là nhiệm vụ lâu dài, góp phần xây dựng Đảng trong sạch, Nhà nước vững mạnh, đất nước phồn vinh, nhân dân hạnh phúc.
            </p>
          </div>
        </div>

        {/* Call to Action Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-20">
          {commitments.map((commitment, index) => (
            <Card key={index} className="scroll-fade hover:scale-105 transition-all duration-300 cultural-shadow border-none group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-vietnam-red to-vietnam-gold rounded-full flex items-center justify-center text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {commitment.icon}
                </div>
                <h3 className="font-playfair font-bold text-xl text-foreground mb-4 group-hover:text-vietnam-red transition-colors">
                  {commitment.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {commitment.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Future Vision */}
        <div className="max-w-4xl mx-auto mb-16 scroll-fade">
          <Card className="cultural-shadow border-none bg-gradient-to-r from-white to-accent/20 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-vietnam-red via-vietnam-gold to-vietnam-red" />
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-center text-foreground mb-8">
                Mục tiêu phấn đấu
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {futureGoals.map((goal, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white/50 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-to-br from-vietnam-red to-vietnam-gold rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-foreground font-medium leading-relaxed">
                      {goal}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final Message */}
        <div className="text-center scroll-fade">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-vietnam-red/10 to-vietnam-gold/10 p-8 md:p-12 rounded-2xl cultural-shadow mb-12">
            <div className="text-6xl mb-6">🇻🇳</div>
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-6">
              Việt Nam - Dân tộc - Xã hội chủ nghĩa
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Cùng nhau xây dựng một Việt Nam hùng cường, theo tư tưởng và con đường mà Chủ tịch Hồ Chí Minh đã chỉ ra.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-vietnam-red hover:bg-vietnam-red/90 text-white font-semibold px-8 py-3 rounded-full"
                onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Về đầu trang
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-vietnam-gold text-vietnam-gold hover:bg-vietnam-gold hover:text-white font-semibold px-8 py-3 rounded-full"
                onClick={() => window.print()}
              >
                In tài liệu
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-vietnam-red rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">★</span>
                </div>
                <span>Tư tưởng Hồ Chí Minh - Ánh sáng dẫn đường</span>
              </div>
              <div className="text-center">
                © 2024 - Để học tập và nghiên cứu
              </div>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-vietnam-red">
                  Chia sẻ
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-vietnam-red">
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