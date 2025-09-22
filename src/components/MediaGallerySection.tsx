import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const MediaGallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Tất cả', count: 12 },
    { id: 'historical', label: 'Lịch sử', count: 4 },
    { id: 'people', label: 'Nhân dân', count: 4 },
    { id: 'modern', label: 'Hiện đại', count: 4 }
  ];

  const mediaItems = [
    {
      id: 1,
      title: "Chủ tịch Hồ Chí Minh với nhân dân",
      description: "Bác Hồ luôn gần gũi với nhân dân trong mọi hoạt động",
      category: 'historical',
      image: "/placeholder.svg",
      type: 'image'
    },
    {
      id: 2,
      title: "Đại hội Đảng toàn quốc",
      description: "Những quyết định quan trọng định hướng tương lai",
      category: 'historical',
      image: "/placeholder.svg",
      type: 'image'
    },
    {
      id: 3,
      title: "Nhân dân đoàn kết xây dựng",
      description: "Sức mạnh đoàn kết của cả dân tộc",
      category: 'people',
      image: "/placeholder.svg",
      type: 'image'
    },
    {
      id: 4,
      title: "Thanh niên học tập tư tưởng Bác Hồ",
      description: "Thế hệ trẻ kế thừa và phát triển tư tưởng",
      category: 'people',
      image: "/placeholder.svg",
      type: 'image'
    },
    {
      id: 5,
      title: "Việt Nam hiện đại",
      description: "Đất nước phát triển theo tư tưởng Hồ Chí Minh",
      category: 'modern',
      image: "/placeholder.svg",
      type: 'image'
    },
    {
      id: 6,
      title: "Công nghệ và đổi mới",
      description: "Ứng dụng tư tưởng trong thời đại số",
      category: 'modern',
      image: "/placeholder.svg",
      type: 'image'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === selectedCategory);

  const quotes = [
    {
      text: "Không có gì quý hơn độc lập, tự do",
      author: "Hồ Chí Minh",
      context: "Di chúc của Chủ tịch Hồ Chí Minh"
    },
    {
      text: "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công",
      author: "Hồ Chí Minh", 
      context: "Lời kêu gọi đoàn kết dân tộc"
    },
    {
      text: "Học, học nữa, học mãi",
      author: "Hồ Chí Minh",
      context: "Tư tưởng về giáo dục và học tập"
    }
  ];

  return (
    <section id="media-gallery" className="py-20 bg-gradient-to-br from-accent/10 to-background lotus-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-lotus-pink rounded-full animate-pulse" />
            <Badge variant="outline" className="text-lotus-pink border-lotus-pink">
              Thư viện
            </Badge>
            <div className="w-3 h-3 bg-lotus-pink rounded-full animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6 scroll-fade">
            Hình ảnh & Trích dẫn
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto scroll-fade">
            Khám phá những hình ảnh và câu nói bất hủ thể hiện tư tưởng Hồ Chí Minh
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 scroll-fade">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-vietnam-red text-white hover:bg-vietnam-red/90'
                  : 'border-vietnam-red text-vietnam-red hover:bg-vietnam-red hover:text-white'
              }`}
            >
              {category.label}
              <Badge 
                variant="secondary" 
                className={`ml-2 ${
                  selectedCategory === category.id 
                    ? 'bg-white/20 text-white' 
                    : 'bg-vietnam-red/10 text-vietnam-red'
                }`}
              >
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredItems.map((item, index) => (
            <Card key={item.id} className="scroll-fade hover:scale-105 transition-all duration-300 overflow-hidden cultural-shadow group border-none">
              <div className="relative h-48 bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center">
                {/* Placeholder for actual images */}
                <div className="text-6xl opacity-30">📷</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-sm font-medium">{item.type === 'image' ? 'Hình ảnh' : 'Video'}</div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-playfair font-bold text-lg text-foreground mb-2 group-hover:text-vietnam-red transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-4">
                  <Badge variant="secondary" className="text-xs">
                    {categories.find(cat => cat.id === item.category)?.label}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Famous Quotes */}
        <div className="scroll-fade">
          <h3 className="text-3xl font-playfair font-bold text-center mb-12 text-foreground">
            Lời dạy bất hủ
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {quotes.map((quote, index) => (
              <Card key={index} className="cultural-shadow hover:shadow-xl transition-shadow duration-300 border-none bg-gradient-to-br from-white to-accent/20">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl text-vietnam-gold mb-6">"</div>
                  <blockquote className="text-lg font-playfair italic text-foreground mb-6 leading-relaxed">
                    {quote.text}
                  </blockquote>
                  <div className="border-t border-border pt-4">
                    <cite className="text-vietnam-red font-semibold block mb-1">
                      — {quote.author}
                    </cite>
                    <p className="text-xs text-muted-foreground">
                      {quote.context}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Interactive Timeline */}
        <div className="mt-20 scroll-fade">
          <h3 className="text-3xl font-playfair font-bold text-center mb-12 text-foreground">
            Dòng thời gian tư tưởng
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-vietnam-red via-vietnam-gold to-lotus-pink rounded-full" />
              {[
                { year: "1890", event: "Sinh ra tại làng Sen", thought: "Hình thành ý chí yêu nước" },
                { year: "1911", event: "Ra đi tìm đường cứu nước", thought: "Khát vọng độc lập dân tộc" },
                { year: "1920", event: "Tham gia Đảng Cộng sản Pháp", thought: "Tiếp cận chủ nghĩa Mác-Lênin" },
                { year: "1930", event: "Thành lập Đảng Cộng sản Việt Nam", thought: "Xây dựng tổ chức cách mạng" },
                { year: "1945", event: "Tuyên ngôn độc lập", thought: "Thực hiện lý tưởng tự do" }
              ].map((milestone, index) => (
                <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="cultural-shadow border-none">
                      <CardContent className="p-6">
                        <div className="text-vietnam-red font-bold text-xl mb-2">{milestone.year}</div>
                        <h4 className="font-playfair font-semibold text-foreground mb-2">{milestone.event}</h4>
                        <p className="text-sm text-muted-foreground italic">{milestone.thought}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-vietnam-gold rounded-full border-4 border-white cultural-shadow z-10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaGallerySection;