import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { X, MessageCircle } from "lucide-react";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const systemPrompt = `
Bạn là trợ lý học tập. Đây là tài liệu nền tảng, chỉ dùng để trả lời câu hỏi:

- Session 13: Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam 
  (tính tất yếu, vai trò lãnh đạo)
- Session 14: Đảng trong sạch, vững mạnh 
  (đạo đức, văn minh, nguyên tắc hoạt động)
- Session 15: Tư tưởng Hồ Chí Minh về Nhà nước của dân, do dân, vì dân 
  (bản chất giai cấp, dân chủ, pháp quyền)
- Session 16: Nhà nước trong sạch, vững mạnh 
  (kiểm soát quyền lực, chống tiêu cực, vận dụng xây dựng Đảng & Nhà nước)
- Session 17: Vận dụng tư tưởng Hồ Chí Minh 
  (thực thi: xây dựng Đảng, Nhà nước, pháp luật, cán bộ, chống tham nhũng...)

Quy tắc:
- Luôn trả lời ngắn gọn, rõ ràng, dễ hiểu.
- Nếu câu hỏi không liên quan đến Session 13–17, hãy trả lời: 
  "Xin lỗi, mình chỉ hỗ trợ nội dung trong Session 13 đến 17."
`;

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDfCpnZjjqL0qqbjwLX-2XR5pnOBaXPAvc",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              { role: "user", parts: [{ text: systemPrompt }] },
              ...newMessages.map((m) => ({
                role: m.role,
                parts: [{ text: m.content }],
              })),
            ],
          }),
        }
      );

      const data = await res.json();
      const botReply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Xin lỗi, mình chưa có câu trả lời.";

      setMessages([...newMessages, { role: "model", content: botReply }]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  return (
    <>
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 z-[9999] transition-colors duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Mở chat"
        >
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-[9998] flex justify-end items-end"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            className="w-full max-w-sm md:max-w-md h-[500px] bg-white border border-gray-200 rounded-xl shadow-2xl flex flex-col m-6 mr-20 md:mr-24"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="bg-primary text-white p-4 rounded-t-xl flex justify-between items-center">
              <span className="font-bold text-lg">💬 Hỏi đáp HCM202</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-primary/80 rounded-full transition-colors"
                aria-label="Đóng chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50/50">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  className={`p-3 rounded-lg text-sm max-w-[80%] shadow-sm ${
                    msg.role === "user"
                      ? "bg-primary text-white ml-auto"
                      : "bg-gray-100 text-gray-800 mr-auto"
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {msg.content}
                </motion.div>
              ))}
              {loading && (
                <div className="text-gray-500 text-sm flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    ⏳
                  </motion.span>
                  Đang trả lời...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="flex border-t border-gray-200 p-3 bg-white rounded-b-xl">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 px-3 py-2 text-sm outline-none border-none rounded-md bg-gray-100/50 focus:bg-gray-100 transition-colors"
                placeholder="Nhập câu hỏi..."
                aria-label="Nhập câu hỏi"
              />
              <button
                onClick={handleSend}
                className="bg-primary text-white px-4 py-2 text-sm rounded-md font-medium hover:bg-primary/90 transition-colors ml-2"
                disabled={loading}
                aria-label="Gửi câu hỏi"
              >
                Gửi
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
