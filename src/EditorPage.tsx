import { useState } from "react";
import Editor from "./Editor";
import Preview from "./Preview";
import "./Editor.css"; 

function EditorPage() {
  const [markdown, setMarkdown] = useState<string>("# Welcome!\n# I am Sharif\nType some **markdown** here.");

  return (
    <div className="editor-preview-container">
      <div className="editor-section">
        <h2>Editor</h2>
        <Editor markdown={markdown} onChange={setMarkdown} />
      </div>
      <div className="preview-section">
        <h2>Preview</h2>
        <Preview markdown={markdown} />
      </div>
    </div>
  );
}

export default EditorPage;
