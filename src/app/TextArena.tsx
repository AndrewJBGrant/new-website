"use client";

import React, { useState, useEffect, useRef } from "react";

const TextEditor: React.FC = () => {
  const [content, setContent] = useState<string>("Start typing here...");
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hoping to keep the cursor in place
    if (editorRef.current) {
      console.log(editorRef.current);

      const range = document.createRange();
      const selection = window.getSelection();
      range.selectNodeContents(editorRef.current);
      range.collapse(false);
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  }, [content]);

  const parseMarkdown = (text: string) => {
    // Replace Markdown-like syntax with HTML tags
    const html = text
      .replace(/^#\s(.*)$/gm, "<h1>$1</h1>") // Convert '# ' at the beginning of a line to <h1>
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Convert '**text**' to <strong>
      .replace(/__(.*?)__/g, "<em>$1</em>"); // Convert '__text__' to <em>

    return { __html: html };
  };

  const handleChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    const text = e.target.textContent || "";
    setContent(text);
  };

  return (
    <div>
      <div
        ref={editorRef}
        contentEditable={true}
        onInput={handleChange}
        dangerouslySetInnerHTML={parseMarkdown(content)}
        suppressContentEditableWarning={true}
      />
    </div>
  );
};

export default TextEditor;



//  <div id="editor" contentEditable={true} suppressContentEditableWarning={true} onChange={() => parseMarkdown()} className="p-4
//   selection:bg-fuchsia-300 selection:text-fuchsia-900">
// Hello there type!!!
//   </div>
