import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-8 p-10 rounded-xl shadow-xl border-2">
      {/* 카드 컨테이너 안에 제목, 내용 등 컴파운드 컴포넌트 적용 */}
      {children}
    </div>
  );
}

function Title({ children }: { children: ReactNode }) {
  return (
    <div className="font-bold text-2xl">
      {/* 제목 */}
      {children}
    </div>
  );
}

function Author({ children }: { children: ReactNode }) {
  return (
    <div className="font-thin text-gray-400">
      {/* 저자 */}
      {children}
    </div>
  );
}

function Content({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* 내용 */}
      {children}
    </div>
  );
}

Card.Title = Title;
Card.Author = Author;
Card.Content = Content;
