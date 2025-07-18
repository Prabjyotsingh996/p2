import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  return (
    <Button
      variant="outline"
      size="icon"
      className="w-10 h-10 cursor-default"
      disabled
    >
      <div className="h-4 w-4" />
      <span className="sr-only">Theme toggle disabled</span>
    </Button>
  );
};

export default ThemeToggle;
