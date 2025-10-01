import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router";

// Mock UI components with TypeScript interfaces
interface CardProps {
  className?: string;
  children: React.ReactNode;
}
const Card: React.FC<CardProps> = ({ className, children }) => (
  <div className={`p-4 rounded-lg shadow-md bg-white ${className}`}>
    {children}
  </div>
);

const CardHeader: React.FC<CardProps> = ({ children }) => (
  <div className="border-b pb-2">{children}</div>
);

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
}
const CardTitle: React.FC<CardTitleProps> = ({ className, children }) => (
  <h2 className={`text-2xl font-bold ${className}`}>{children}</h2>
);

const CardContent: React.FC<CardProps> = ({ className, children }) => (
  <div className={`pt-4 ${className}`}>{children}</div>
);

interface ButtonProps {
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "outline";
}
const Button: React.FC<ButtonProps> = ({
  className,
  disabled,
  onClick,
  children,
  variant,
}) => (
  <button
    className={`px-4 py-2 rounded ${
      disabled
        ? "bg-gray-400 cursor-not-allowed"
        : variant === "outline"
        ? "border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white"
        : "bg-red-600 hover:bg-red-700 text-white"
    } ${className}`}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

interface RadioGroupProps {
  value?: string;
  onValueChange: (value: string) => void;
  disabled?: boolean;
  children: React.ReactNode;
}
const RadioGroup: React.FC<RadioGroupProps> = ({
  value,
  onValueChange,
  disabled,
  children,
}) => (
  <div
    className="space-y-2"
    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
      !disabled && onValueChange(e.target.value)
    }
  >
    {children}
  </div>
);

interface RadioGroupItemProps {
  value: string;
  id: string;
  disabled?: boolean;
}
const RadioGroupItem: React.FC<RadioGroupItemProps> = ({
  value,
  id,
  disabled,
}) => (
  <input
    type="radio"
    value={value}
    id={id}
    name={id.split("-")[0]}
    disabled={disabled}
  />
);

interface LabelProps {
  htmlFor: string;
  className?: string;
  children: React.ReactNode;
}
const Label: React.FC<LabelProps> = ({ htmlFor, className, children }) => (
  <label htmlFor={htmlFor} className={`ml-2 ${className}`}>
    {children}
  </label>
);

interface AlertProps {
  className?: string;
  variant?: "default" | "destructive";
  children: React.ReactNode;
}
const Alert: React.FC<AlertProps> = ({ className, variant, children }) => (
  <div
    className={`p-4 rounded ${
      variant === "destructive"
        ? "bg-red-100 text-red-800"
        : "bg-green-100 text-green-800"
    } ${className}`}
  >
    {children}
  </div>
);

const AlertTitle: React.FC<CardProps> = ({ children }) => (
  <h3 className="font-semibold">{children}</h3>
);
const AlertDescription: React.FC<CardProps> = ({ children }) => (
  <p>{children}</p>
);

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDfCpnZjjqL0qqbjwLX-2XR5pnOBaXPAvc";

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

interface Question {
  question: string;
  options: string[];
  correct: string;
}

interface QuizQuestionProps {
  question: Question;
  index: number;
  userAnswer?: string;
  isSubmitted: boolean;
  onAnswerChange: (index: number, answer: string) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  index,
  userAnswer,
  isSubmitted,
  onAnswerChange,
}) => (
  <div className="mb-8">
    <h3 className="font-inter text-lg font-semibold mb-4">{`${index + 1}. ${
      question.question
    }`}</h3>
    <RadioGroup
      value={userAnswer}
      onValueChange={(value) => onAnswerChange(index, value)}
      disabled={isSubmitted}
    >
      {question.options.map((option, optIndex) => {
        const [letter, text] = option.split(": ");
        const isCorrect = letter === question.correct;
        const isUserAnswer = letter === userAnswer;
        return (
          <div key={optIndex} className="flex items-center space-x-2 mb-2">
            <RadioGroupItem
              value={letter}
              id={`q${index}-opt${optIndex}`}
              disabled={isSubmitted}
            />
            <Label
              htmlFor={`q${index}-opt${optIndex}`}
              className={
                isSubmitted
                  ? isCorrect
                    ? "text-green-600 font-semibold"
                    : isUserAnswer
                    ? "text-red-600"
                    : ""
                  : ""
              }
            >
              {option}
              {isSubmitted && isCorrect && " (Đúng)"}
              {isSubmitted && isUserAnswer && !isCorrect && " (Sai)"}
            </Label>
          </div>
        );
      })}
    </RadioGroup>
  </div>
);

interface QuizResultProps {
  score: number | null;
}
const QuizResult: React.FC<QuizResultProps> = ({ score }) =>
  score !== null ? (
    <Alert className="mt-6" variant={score >= 7 ? "default" : "destructive"}>
      <AlertTitle>Kết Quả</AlertTitle>
      <AlertDescription>
        Bạn đúng {score}/10 câu. {score >= 7 ? "Xuất sắc!" : "Cố gắng hơn nhé!"}
      </AlertDescription>
    </Alert>
  ) : null;

interface QuizActionsProps {
  questions: Question[];
  userAnswers: { [key: number]: string };
  isSubmitted: boolean;
  onSubmit: () => void;
  onReset: () => void;
}
const QuizActions: React.FC<QuizActionsProps> = ({
  questions,
  userAnswers,
  isSubmitted,
  onSubmit,
  onReset,
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between mt-8">
      <Button
        onClick={onSubmit}
        disabled={
          Object.keys(userAnswers).length < questions.length || isSubmitted
        }
      >
        Nộp Bài
      </Button>
      <div className="flex gap-4">
        <Button variant="outline" onClick={onReset}>
          Làm Quiz Mới
        </Button>
        <Button variant="outline" onClick={() => navigate("/")}>
          Về Trang Chủ
        </Button>
      </div>
    </div>
  );
};

const QuizPage: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [score, setScore] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const fetchQuestions = async () => {
    setLoading(true);
    setError(null);
    setScore(null);
    setUserAnswers({});
    setQuestions([]);
    setIsSubmitted(false);

    const userPrompt = `Tạo 10 câu hỏi trắc nghiệm về nội dung từ Session 13 đến 17. Mỗi câu hỏi có 4 đáp án (A, B, C, D), chỉ một đáp án đúng. Định dạng output JSON: 
    [
      {
        "question": "Câu hỏi",
        "options": ["A: Đáp án A", "B: Đáp án B", "C: Đáp án C", "D: Đáp án D"],
        "correct": "A"
      },
      ...
    ]`;

    try {
      const response = await fetch(GEMINI_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: systemPrompt + "\n\n" + userPrompt }] }],
        }),
      });

      if (!response.ok) throw new Error("Failed to fetch from Gemini API");

      const data = await response.json();
      const generatedText = data.candidates[0].content.parts[0].text;
      const cleanedText = generatedText.replace(/```json|```/g, "").trim();
      const parsedQuestions: Question[] = JSON.parse(cleanedText);

      setQuestions(parsedQuestions);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Đã xảy ra lỗi không xác định.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleAnswerChange = (questionIndex: number, answer: string) => {
    if (!isSubmitted) {
      setUserAnswers((prev) => ({ ...prev, [questionIndex]: answer }));
    }
  };

  const submitQuiz = () => {
    let calculatedScore = 0;
    questions.forEach((q, index) => {
      if (userAnswers[index] === q.correct) calculatedScore++;
    });
    setScore(calculatedScore);
    setIsSubmitted(true);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-red-100/10 via-white to-yellow-100/10 min-h-screen">
      <div className="container mx-auto px-6">
        <Card className="rounded-none max-w-4xl mx-auto border-none bg-white/95 shadow-lg">
          <CardHeader>
            <CardTitle className="font-inter text-center">
              Quiz Ôn Tập Tư Tưởng Hồ Chí Minh
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex justify-center items-center h-40">
                <Loader2 className="w-8 h-8 animate-spin text-red-600" />
              </div>
            ) : error ? (
              <Alert variant="destructive">
                <AlertTitle>Lỗi</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            ) : (
              <>
                {questions.map((question, index) => (
                  <QuizQuestion
                    key={index}
                    question={question}
                    index={index}
                    userAnswer={userAnswers[index]}
                    isSubmitted={isSubmitted}
                    onAnswerChange={handleAnswerChange}
                  />
                ))}
                {questions.length > 0 && (
                  <QuizActions
                    questions={questions}
                    userAnswers={userAnswers}
                    isSubmitted={isSubmitted}
                    onSubmit={submitQuiz}
                    onReset={fetchQuestions}
                  />
                )}
                <QuizResult score={score} />
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuizPage;
