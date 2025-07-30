import useCopyToClipboard from "./CopyToClipboard";
import { marked } from "marked";
import DOMPurify from "dompurify";

type PreviewProps = {
  markdown: string;
};

function Preview({ markdown }: PreviewProps) {
  const [copied, copyToClipboard] = useCopyToClipboard();

  return (
    <div className="preview-section">
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(marked(markdown)),
        }}
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
