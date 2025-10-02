import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AIUsage: React.FC = () => {
  const aiData = [
    {
      name: "Lovable.dev",
      prompt:
        "Hãy xây dựng một website trình chiếu hiện đại bằng React với chủ đề: “Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam và Nhà nước của dân, do dân, vì dân”. 🎨 Phong cách & Thiết kế: - Hiện đại, bắt mắt, phong cách, truyền cảm hứng. - Màu sắc chủ đạo: đỏ, vàng, kết hợp với trắng và tông tối sang trọng. - Hiệu ứng chuyển động mượt mà, scroll tương tác, animation tinh tế. - Thiết kế responsive (desktop, tablet, mobile). - Typography rõ ràng, tiêu đề lớn mạnh mẽ, nội dung dễ đọc. - Thêm họa tiết văn hóa Việt Nam (ngôi sao, hoa sen) làm điểm nhấn trang trí. - Navigation bar với hiệu ứng cuộn mượt, trình bày như một bộ slide hiện đại. 📑 Cấu trúc nội dung: 1. **Hero Section (Trang mở đầu)** - Tiêu đề lớn: “Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam và Nhà nước của dân, do dân, vì dân”. - Trích dẫn: “Dễ trăm lần không dân cũng chịu, khó vạn lần dân liệu cũng xong.” – Hồ Chí Minh - Giới thiệu ngắn: Tư tưởng Hồ Chí Minh soi sáng con đường cách mạng Việt Nam, khẳng định vai trò của Đảng và Nhà nước trong sự nghiệp giải phóng dân tộc, xây dựng đất nước. - Hình nền toàn màn hình với hiệu ứng động/parallax. 2. **Phần: Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam** - Đảng Cộng sản Việt Nam ra đời là kết quả tất yếu của sự kết hợp giữa chủ nghĩa Mác – Lênin, phong trào công nhân và phong trào yêu nước Việt Nam. - Vai trò của Đảng: • Đội tiên phong của giai cấp công nhân. • Đại biểu trung thành cho lợi ích của nhân dân lao động và dân tộc. • Người lãnh đạo duy nhất của cách mạng Việt Nam. - Nguyên tắc xây dựng Đảng: • Kiên định chủ nghĩa Mác – Lênin. • Gắn bó mật thiết với nhân dân. • Tự đổi mới, tự chỉnh đốn để trong sạch, vững mạnh. - Layout gợi ý: timeline trực quan + bullet point. 3. **Phần: Nhà nước của dân, do dân, vì dân** - “Dân là gốc”: nhân dân là chủ thể của quyền lực, là nền tảng của đất nước. - **Của dân**: Nhà nước thuộc quyền sở hữu của nhân dân. - **Do dân**: Nhân dân lập nên thông qua bầu cử dân chủ. - **Vì dân**: Nhà nước phục vụ lợi ích nhân dân, chăm lo đời sống, đem lại hạnh phúc cho mọi người. - Minh họa bằng biểu tượng, hình ảnh người dân, sự đoàn kết, dân chủ. 4. **Phần: Giá trị và ý nghĩa thời đại** - Khẳng định vai trò lãnh đạo đúng đắn của Đảng Cộng sản Việt Nam. - Củng cố niềm tin của nhân dân vào chế độ xã hội chủ nghĩa. - Tư tưởng Hồ Chí Minh vẫn còn nguyên giá trị trong công cuộc đổi mới, hội nhập, xây dựng đất nước hiện nay. - Là kim chỉ nam cho sự nghiệp phát triển bền vững của dân tộc. - Trình bày dạng card hoặc panel sinh động. 5. **Phần: Hình ảnh & Media** - Thư viện ảnh (carousel hoặc grid) về Hồ Chí Minh, nhân dân, đất nước. - Hiệu ứng hover sinh động, slide chuyển ảnh mượt mà. 6. **Phần kết thúc** - Thông điệp: “Tiếp tục học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh.” - Ý nghĩa: Đây là nhiệm vụ lâu dài, góp phần xây dựng Đảng trong sạch, Nhà nước vững mạnh, đất nước phồn vinh, nhân dân hạnh phúc. - Footer có logo, liên kết, hoặc nút chia sẻ. ✨ Tính năng bổ sung: - Smooth scroll giữa các section. - Hiệu ứng fade-in, slide-in khi xuất hiện nội dung. - Bố cục vừa mang tính học thuật, vừa truyền cảm hứng, dễ theo dõi.",
      response:
        "Dựa trên yêu cầu của bạn, tôi đã tạo cấu trúc website React với các component chính: HeroSection với parallax background, PartySection với timeline và bullet points, StateSection với biểu tượng minh họa, ValueSection với cards, MediaSection với carousel, và ConclusionSection với thông điệp kết thúc. Tôi sử dụng Tailwind CSS cho styling, Framer Motion cho animations, và React Router cho navigation. Màu sắc chủ đạo là đỏ (#D32F2F), vàng (#FFEB3B), trắng và tối. Thêm họa tiết ngôi sao và hoa sen làm background subtle. Code bao gồm responsive design và smooth scroll sử dụng react-scroll.",
    },
    {
      name: "ChatGPT 5",
      prompt:
        "Dựa trên giáo trình của nhà trường về 'Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam và Nhà nước của dân, do dân, vì dân', hãy soạn thảo nội dung chi tiết cho các section của website, gợi ý hình ảnh và video minh họa phù hợp. Ví dụ: cho Hero Section, cung cấp tiêu đề, trích dẫn, giới thiệu; gợi ý hình nền là ảnh Hồ Chí Minh với nhân dân; video ngắn về lịch sử Đảng.",
      response:
        "Nội dung cho Hero Section: Tiêu đề: 'Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam và Nhà nước của dân, do dân, vì dân'. Trích dẫn: 'Dễ trăm lần không dân cũng chịu, khó vạn lần dân liệu cũng xong.' – Hồ Chí Minh. Giới thiệu: Tư tưởng Hồ Chí Minh là kim chỉ nam cho cách mạng Việt Nam, nhấn mạnh vai trò lãnh đạo của Đảng và bản chất dân chủ của Nhà nước. Gợi ý hình ảnh: Chân dung Hồ Chí Minh mỉm cười với nhân dân (tìm ảnh lịch sử từ 1945). Video: Đoạn clip ngắn từ phim tài liệu 'Hồ Chí Minh - Chân dung một con người' về việc thành lập Đảng. Đối với Phần Đảng: Nội dung vai trò và nguyên tắc như trong giáo trình, hình ảnh: Timeline với ảnh Đại hội Đảng, video: Phỏng vấn về đổi mới Đảng. Tương tự cho các phần khác, đảm bảo nội dung trung thực với giáo trình.",
    },
    {
      name: "Gemini 2.0",
      prompt:
        "Hãy đóng vai AI hỗ trợ học tập dựa trên giáo trình 'Tư tưởng Hồ Chí Minh'. Giải thích về vai trò của Đảng Cộng sản Việt Nam theo tư tưởng Hồ Chí Minh, và tạo 5 câu hỏi quiz trắc nghiệm để ôn tập.",
      response:
        "Giải thích: Theo Hồ Chí Minh, Đảng Cộng sản Việt Nam là đội tiên phong của giai cấp công nhân, đại biểu trung thành lợi ích dân tộc, lãnh đạo cách mạng. Đảng phải gắn bó với dân, tự chỉnh đốn để vững mạnh. Quiz: 1. Đảng Cộng sản Việt Nam ra đời từ sự kết hợp nào? A. Chủ nghĩa Mác-Lênin và phong trào yêu nước (Đúng). B. Phong trào công nhân quốc tế. C. Ảnh hưởng từ Liên Xô. 2. Vai trò chính của Đảng là? A. Lãnh đạo duy nhất cách mạng. (Đúng) ... (Tiếp tục 3 câu hỏi nữa về Nhà nước của dân, do dân, vì dân).",
    },
    {
      name: "Copilot",
      prompt:
        "Hãy hỗ trợ viết code React cho phần Hero Section của website về Tư tưởng Hồ Chí Minh, bao gồm tiêu đề, trích dẫn, giới thiệu, và hiệu ứng parallax background.",
      response:
        "Dưới đây là code cho HeroSection: import { Parallax } from 'react-parallax'; const HeroSection = () => { return ( <Parallax bgImage='/path/to/background.jpg' strength={300}> <div className='h-screen flex items-center justify-center text-center'> <h1 className='text-5xl font-bold text-vietnam-red'>Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam và Nhà nước của dân, do dân, vì dân</h1> <p className='text-xl italic text-vietnam-gold'>“Dễ trăm lần không dân cũng chịu, khó vạn lần dân liệu cũng xong.” – Hồ Chí Minh</p> <p className='text-lg text-white'>Tư tưởng Hồ Chí Minh soi sáng con đường cách mạng...</p> </div> </Parallax> ); }; export default HeroSection; Sử dụng Tailwind để viết code cho classes, thay bgImage bằng ảnh thực tế.",
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto p-4 relative">
      <div className="absolute top-4 left-4">
        <Link to="/">
          <button className="flex items-center gap-2 bg-vietnam-red hover:bg-vietnam-red/90 text-white font-semibold px-4 py-2 rounded-xl shadow-md">
            <ArrowLeft className="w-4 h-4" />
            Về trang chủ
          </button>
        </Link>
      </div>
      <h2 className="text-2xl font-bold mb-4 mt-12 text-center">
        AI Usage Overview
      </h2>
      <Accordion.Root type="single" collapsible className="w-full">
        {aiData.map((ai, index) => (
          <Accordion.Item
            key={index}
            value={`item-${index}`}
            className="border-b"
          >
            <Accordion.Trigger className="flex justify-between items-center w-full py-4 text-left text-lg font-medium hover:bg-gray-100">
              {ai.name}
              <ChevronDown className="h-5 w-5 transition-transform duration-200" />
            </Accordion.Trigger>
            <Accordion.Content className="px-4 pb-4">
              <div className="mb-2">
                <strong>Prompt used:</strong> {ai.prompt}
              </div>
              <div>
                <strong>Response:</strong> {ai.response}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
};

export default AIUsage;
