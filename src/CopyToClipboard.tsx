import { useState } from "react";

type CopiedValue = string | null;
type CopyToClipboardHook = () => [CopiedValue, (text: string) => void];

const useCopyToClipboard: CopyToClipboardHook = () => {
  const [copiedValue, setCopiedValue] = useState<CopiedValue>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedValue(text);
      setTimeout(() => setCopiedValue(null), 2000);
    });
  };

  return [copiedValue, copyToClipboard];
};

export default useCopyToClipboard;
