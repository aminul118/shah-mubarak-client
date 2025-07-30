"use client";
import React, { useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import "../../styles/styles.css";

interface QuilJsProps {
  value: string;
  onChange: (value: string) => void;
  height?: number;
}

const QuilJs: React.FC<QuilJsProps> = ({ value, onChange, height = 700 }) => {
  const { quill, quillRef } = useQuill();

  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(value); // Set initial value
      quill.on("text-change", () => {
        onChange(quill.root.innerHTML); // Send changes to parent
      });
    }
  }, [quill]);

  return (
    <div
      ref={quillRef}
      className="bg-slate-700"
      style={{ height, color: "white", border: "none" }}
    />
  );
};

export default QuilJs;
