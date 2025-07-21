import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

const CitationSection = () => {
  const [copied, setCopied] = useState(false);

  const bibtex = `@article{ashraf2025titan,
  title={TITAN: Query-Token based Domain Adaptive Adversarial Learning},
  author={Ashraf, Tajamul and Bashir, Janibul},
  journal={arXiv preprint arXiv:2506.21484},
  year={2025}
}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section className="bg-background py-16 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 sm:px-4 xs:px-2">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          BibTeX
        </h2>
        
        <div className="relative">
          <pre className="bg-muted/50 border border-border rounded-lg p-6 text-sm overflow-x-auto">
            <code className="text-foreground">
              {bibtex}
            </code>
          </pre>
          
          <Button
            variant="outline"
            size="sm"
            onClick={copyToClipboard}
            className="absolute top-4 right-4"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CitationSection;