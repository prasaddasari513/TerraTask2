import { Button } from "@/components/ui/button";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { Copy } from "lucide-react";

interface CodeBlockProps {
  title: string;
  code: string;
  language: string;
  description?: string;
}

export default function CodeBlock({ title, code, language, description }: CodeBlockProps) {
  const { copy } = useCopyToClipboard();

  return (
    <div className="bg-slate-50 rounded-lg border border-slate-200">
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => copy(code)}
          className="text-slate-500 hover:text-slate-700"
        >
          <Copy className="w-4 h-4" />
        </Button>
      </div>
      <div className="p-4">
        <pre className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
          <code className="text-green-400 text-sm">{code}</code>
        </pre>
        {description && (
          <p className="text-sm text-slate-600 mt-3">
            <strong>Note:</strong> {description}
          </p>
        )}
      </div>
    </div>
  );
}
