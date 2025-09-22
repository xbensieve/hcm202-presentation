import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import partySymbol from '@/assets/party-symbol.jpg';

const PartyThoughtSection = () => {
  const partyRoles = [
    {
      title: "Đội tiên phong của giai cấp công nhân",
      description: "Đảng đại diện cho lợi ích cao nhất của giai cấp công nhân, dẫn dắt đấu tranh giải phóng và xây dựng xã hội."
    },
    {
      title: "Đại biểu trung thành cho lợi ích nhân dân",
      description: "Đảng luôn đặt lợi ích của nhân dân lao động và dân tộc lên trên hết, phục vụ nhân dân hết lòng."
    },
    {
      title: "Người lãnh đạo duy nhất của cách mạng",
      description: "Đảng là lực lượng chính trị duy nhất có khả năng lãnh đạo cách mạng Việt Nam đi đến thắng lợi."
    }
  ];

  const principles = [
    {
      icon: "📚",
      title: "Kiên định chủ nghĩa Mác – Lênin",
      description: "Nền tảng tư tưởng vững chắc cho sự lãnh đạo của Đảng"
    },
    {
      icon: "❤️",
      title: "Gắn bó mật thiết với nhân dân",
      description: "Đảng sinh ra từ nhân dân, vì nhân dân mà phục vụ"
    },
    {
      icon: "🔄",
      title: "Tự đổi mới, tự chỉnh đốn",
      description: "Không ngừng hoàn thiện để trong sạch, vững mạnh"
    }
  ];

  return (
    <section id="party-thought" className="py-20 bg-gradient-to-br from-background via-accent/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-vietnam-red rounded-full animate-pulse" />
            <Badge variant="outline" className="text-vietnam-red border-vietnam-red">
              Chương I
            </Badge>
            <div className="w-3 h-3 bg-vietnam-red rounded-full animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6 scroll-fade">
            Tư tưởng Hồ Chí Minh
          </h2>
          <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-vietnam-red mb-8 scroll-fade">
            về Đảng Cộng sản Việt Nam
          </h3>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16 scroll-fade">
          <Card className="cultural-shadow border-none bg-gradient-to-r from-white to-accent/20">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/3">
                  <img 
                    src={partySymbol} 
                    alt="Communist Party Symbol"
                    className="w-full h-48 object-cover rounded-lg cultural-shadow"
                  />
                </div>
                <div className="lg:w-2/3">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-vietnam-red">Đảng Cộng sản Việt Nam</span> ra đời là kết quả tất yếu của sự kết hợp giữa 
                    <span className="font-medium"> chủ nghĩa Mác – Lênin</span>, 
                    <span className="font-medium"> phong trào công nhân</span> và 
                    <span className="font-medium"> phong trào yêu nước Việt Nam</span>.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Party Roles */}
        <div className="mb-16">
          <h4 className="text-2xl md:text-3xl font-playfair font-bold text-center mb-12 text-foreground scroll-fade">
            Vai trò của Đảng
          </h4>
          <div className="grid md:grid-cols-3 gap-6">
            {partyRoles.map((role, index) => (
              <Card key={index} className="scroll-fade elegant-shadow border-l-4 border-l-vietnam-red hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-vietnam-red rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <CardTitle className="text-lg font-playfair text-foreground">
                      {role.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {role.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Building Principles */}
        <div>
          <h4 className="text-2xl md:text-3xl font-playfair font-bold text-center mb-12 text-foreground scroll-fade">
            Nguyên tắc xây dựng Đảng
          </h4>
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="text-center scroll-fade group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-vietnam-red to-vietnam-gold rounded-full text-4xl mb-6 cultural-shadow group-hover:scale-110 transition-transform duration-300">
                  {principle.icon}
                </div>
                <h5 className="text-xl font-playfair font-semibold text-foreground mb-4 group-hover:text-vietnam-red transition-colors">
                  {principle.title}
                </h5>
                <p className="text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Visual */}
        <div className="mt-20 max-w-3xl mx-auto scroll-fade">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-vietnam-red to-vietnam-gold rounded-full" />
            <div className="space-y-12">
              {[
                { year: "1930", event: "Thành lập Đảng Cộng sản Việt Nam" },
                { year: "1945", event: "Cách mạng Tháng Tám thành công" },
                { year: "1975", event: "Thống nhất đất nước" },
                { year: "1986", event: "Đổi mới toàn diện" }
              ].map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-4 rounded-lg cultural-shadow">
                      <div className="text-vietnam-red font-bold text-lg">{milestone.year}</div>
                      <div className="text-sm text-muted-foreground">{milestone.event}</div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-vietnam-gold rounded-full border-4 border-white cultural-shadow" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartyThoughtSection;