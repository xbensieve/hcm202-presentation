import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import peopleUnity from '@/assets/people-unity.jpg';

const StatePhilosophySection = () => {
  const stateAspects = [
    {
      title: "Của dân",
      subtitle: "Nhà nước thuộc quyền sở hữu của nhân dân",
      description: "Mọi quyền lực đều xuất phát từ nhân dân. Nhà nước là công cụ để nhân dân thực hiện quyền lực của mình.",
      icon: "👥",
      color: "from-vietnam-red to-vietnam-red/80"
    },
    {
      title: "Do dân",
      subtitle: "Nhân dân lập nên thông qua bầu cử dân chủ",
      description: "Nhân dân trực tiếp hoặc thông qua đại biểu được bầu cử tham gia quản lý nhà nước và xã hội.",
      icon: "🗳️",
      color: "from-vietnam-gold to-vietnam-gold/80"
    },
    {
      title: "Vì dân",
      subtitle: "Nhà nước phục vụ lợi ích nhân dân",
      description: "Mọi hoạt động của Nhà nước đều hướng tới mục tiêu chăm lo đời sống và mang lại hạnh phúc cho nhân dân.",
      icon: "❤️",
      color: "from-lotus-pink to-vietnam-red/60"
    }
  ];

  const principles = [
    "Dân là gốc: nhân dân là chủ thể của quyền lực",
    "Dân là nền tảng: cơ sở vững chắc của đất nước", 
    "Dân là động lực: nguồn sức mạnh của dân tộc",
    "Dân là mục tiêu: hướng tới hạnh phúc của nhân dân"
  ];

  return (
    <section id="state-philosophy" className="py-20 bg-gradient-to-br from-accent/20 via-background to-cultural-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-vietnam-gold rounded-full animate-pulse" />
            <Badge variant="outline" className="text-vietnam-gold border-vietnam-gold">
              Chương II
            </Badge>
            <div className="w-3 h-3 bg-vietnam-gold rounded-full animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6 scroll-fade">
            Nhà nước của dân, do dân, vì dân
          </h2>
          <div className="max-w-3xl mx-auto scroll-fade">
            <blockquote className="text-xl md:text-2xl font-playfair italic text-vietnam-red mb-4">
              "Dân là gốc"
            </blockquote>
            <p className="text-lg text-muted-foreground">
              Nhân dân là chủ thể của quyền lực, là nền tảng của đất nước
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="max-w-4xl mx-auto mb-16 scroll-fade">
          <div className="relative rounded-2xl overflow-hidden cultural-shadow">
            <img 
              src={peopleUnity} 
              alt="Vietnamese People Unity"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-2">
                Sức mạnh đoàn kết của nhân dân
              </h3>
              <p className="text-lg opacity-90">
                Nhân dân Việt Nam đoàn kết một lòng xây dựng đất nước
              </p>
            </div>
          </div>
        </div>

        {/* Three Aspects */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {stateAspects.map((aspect, index) => (
            <Card key={index} className="scroll-fade hover:scale-105 transition-transform duration-300 border-none overflow-hidden cultural-shadow">
              <div className={`h-2 bg-gradient-to-r ${aspect.color}`} />
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-accent/50 rounded-full text-3xl mb-4">
                    {aspect.icon}
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">
                    {aspect.title}
                  </h3>
                  <p className="text-vietnam-red font-semibold mb-4">
                    {aspect.subtitle}
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed text-center">
                  {aspect.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Principles */}
        <div className="max-w-4xl mx-auto">
          <h4 className="text-2xl md:text-3xl font-playfair font-bold text-center mb-12 text-foreground scroll-fade">
            Nguyên lý "Dân là gốc"
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <div key={index} className="flex items-center gap-4 p-6 bg-white rounded-lg cultural-shadow scroll-fade hover:shadow-lg transition-shadow duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-vietnam-red to-vietnam-gold rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-foreground font-medium leading-relaxed">
                    {principle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-20 text-center scroll-fade">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-vietnam-red/10 to-vietnam-gold/10 p-8 md:p-12 rounded-2xl cultural-shadow">
            <div className="text-6xl text-vietnam-gold mb-6">"</div>
            <blockquote className="text-xl md:text-2xl font-playfair italic text-foreground mb-6 leading-relaxed">
              Nhà nước ta là Nhà nước của dân, do dân và vì dân. Mọi quyền lực của Nhà nước đều do dân làm chủ.
            </blockquote>
            <cite className="text-vietnam-red font-semibold text-lg">
              — Hiến pháp nước Cộng hòa xã hội chủ nghĩa Việt Nam
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatePhilosophySection;