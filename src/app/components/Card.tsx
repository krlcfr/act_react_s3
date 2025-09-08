// components/Card.tsx
import React from "react";

interface CardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function Card({ title, description, children }: CardProps) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
}
