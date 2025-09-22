import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ContemporaryValueSection = () => {
  const values = [
    {
      icon: "🎯",
      title: "Khẳng định vai trò lãnh đạo của Đảng",
      description: "Tư tưởng Hồ Chí Minh khẳng định sự lãnh đạo đúng đắn và hiệu quả của Đảng Cộng sản Việt Nam trong mọi lĩnh vực.",
      highlight: "Lãnh đạo toàn diện"
    },
    {
      icon: "🏛️",
      title: "Củng cố niềm tin vào chế độ",
      description: "Giúp nhân dân tin tưởng vào con đường xã hội chủ nghĩa và chế độ dân chủ nhân dân do Đảng lãnh đạo.",
      highlight: "Niềm tin vững chắc"
    },
    {
      icon: "🚀",
      title: "Định hướng đổi mới và phát triển",
      description: "Tư tưởng vẫn còn nguyên giá trị trong công cuộc đổi mới, hội nhập quốc tế và xây dựng đất nước hiện đại.",
      highlight: "Đổi mới sáng tạo"
    },
    {
      icon: "🌟",
      title: "Kim chỉ nam cho tương lai",
      description: "Là kim chỉ nam cho sự nghiệp phát triển bền vững, xây dựng đất nước giàu mạnh, dân chủ, công bằng, văn minh.",
      highlight: "Tầm nhìn tương lai"
    }
  ];

  const achievements = [
    { year: "2020", title: "Hoàn thành mục tiêu phát triển thiên niên kỷ", progress: 95 },
    { year: "2021", title: "Kiểm soát thành công đại dịch COVID-19", progress: 90 },
    { year: "2022", title: "Tăng trưởng kinh tế ấn tượng", progress: 88 },
    { year: "2023", title: "Nâng cao vị thế quốc tế", progress: 92 }
  ];

  const modernApplications = [
    {
      area: "Kinh tế số",
      description: "Ứng dụng tư tưởng trong chuyển đổi số và phát triển kinh tế số",
      color: "bg-blue-500"
    },
    {
      area: "Phát triển bền vững", 
      description: "Thực hiện mục tiêu phát triển bền vững vì một Việt Nam xanh",
      color: "bg-green-500"
    },
    {
      area: "Hội nhập quốc tế",
      description: "Mở rộng quan hệ đối ngoại và hội nhập sâu rộng",
      color: "bg-purple-500"
    },
    {
      area: "Đổi mới sáng tạo",
      description: "Xây dựng xã hội học tập và nền kinh tế tri thức",
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="contemporary-value" className="py-20 bg-gradient-to-br from-background to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-vietnam-gold rounded-full animate-pulse" />
            <Badge variant="outline" className="text-vietnam-gold border-vietnam-gold">
              Chương III
            </Badge>
            <div className="w-3 h-3 bg-vietnam-gold rounded-full animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6 scroll-fade">
            Giá trị và ý nghĩa thời đại
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto scroll-fade">
            Tư tưởng Hồ Chí Minh không chỉ là di sản quý báu mà còn là ánh sáng dẫn đường cho hiện tại và tương lai
          </p>
        </div>

        {/* Core Values */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {values.map((value, index) => (
            <Card key={index} className="scroll-fade hover:shadow-xl transition-all duration-300 border-none cultural-shadow group">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-vietnam-red to-vietnam-gold rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-2 text-xs">
                      {value.highlight}
                    </Badge>
                    <CardTitle className="font-playfair text-lg group-hover:text-vietnam-red transition-colors">
                      {value.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <h3 className="text-3xl font-playfair font-bold text-center mb-12 text-foreground scroll-fade">
            Thành tựu trong thời kỳ mới
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center scroll-fade">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-vietnam-red to-vietnam-gold opacity-20" />
                  <div 
                    className="absolute inset-2 rounded-full bg-gradient-to-r from-vietnam-red to-vietnam-gold flex items-center justify-center text-white font-bold text-lg"
                    style={{
                      background: `conic-gradient(from 0deg, hsl(var(--vietnam-red)) 0%, hsl(var(--vietnam-gold)) ${achievement.progress}%, hsl(var(--muted)) ${achievement.progress}%, hsl(var(--muted)) 100%)`
                    }}
                  >
                    {achievement.progress}%
                  </div>
                </div>
                <div className="font-bold text-vietnam-red text-lg mb-2">{achievement.year}</div>
                <p className="text-sm text-muted-foreground">{achievement.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Applications */}
        <div className="mb-16">
          <h3 className="text-3xl font-playfair font-bold text-center mb-12 text-foreground scroll-fade">
            Ứng dụng trong thời đại mới
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {modernApplications.map((app, index) => (
              <div key={index} className="flex items-center gap-4 p-6 bg-white rounded-xl cultural-shadow scroll-fade hover:scale-105 transition-transform duration-300">
                <div className={`w-4 h-16 ${app.color} rounded-full`} />
                <div className="flex-1">
                  <h4 className="font-playfair font-bold text-lg text-foreground mb-2">
                    {app.area}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {app.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div className="text-center scroll-fade">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-vietnam-red/5 via-vietnam-gold/5 to-vietnam-red/5 p-8 md:p-12 rounded-2xl cultural-shadow">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="text-4xl mb-4">🏆</div>
                <div className="font-bold text-2xl text-vietnam-red">2030</div>
                <p className="text-sm text-muted-foreground">Mục tiêu phát triển bền vững</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌟</div>
                <div className="font-bold text-2xl text-vietnam-gold">2045</div>
                <p className="text-sm text-muted-foreground">Thành công dân tộc Việt Nam</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <div className="font-bold text-2xl text-vietnam-red">Tương lai</div>
                <p className="text-sm text-muted-foreground">Việt Nam hùng cường</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContemporaryValueSection;