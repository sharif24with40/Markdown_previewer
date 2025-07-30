type EditorProps = {
  markdown: string;
  onChange: (text: string) => void;
};

function Editor({ markdown, onChange }: EditorProps) {
  return (
    <textarea
      value={markdown}
      onChange={(e) => onChange(e.target.value)}
      
    />
  );
}

export default Editor;
