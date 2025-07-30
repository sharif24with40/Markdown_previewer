import { useEffect, useState } from "react";
import useCopyToClipboard from "./CopyToClipboard";
import { marked } from "marked";
import DOMPurify from "dompurify";
import './Editor.css'

type PreviewProps = {
  markdown: string;
};

function Preview({ markdown }: PreviewProps) {
  const [html, setHtml] = useState("");
  const [copied, copyToClipboard] = useCopyToClipboard();

  useEffect(() => {
    const convertMarkdown = async () => {
      const rawHtml = await marked(markdown);
      const cleanHtml = DOMPurify.sanitize(rawHtml);
      setHtml(cleanHtml);
    };

    convertMarkdown();
  }, [markdown]);

  return (
  <div className="preview-section">
    <div
      className="preview-output"
      dangerouslySetInnerHTML={{ __html: html }}
    />

    <div className="copy-container">
      <button
        className="copy-button"
        onClick={() => copyToClipboard(markdown)}
      >
        Copy Markdown
      </button>
      {copied && <span className="copy-success">Copied!</span>}
    </div>
  </div>
);
}

export default Preview;
