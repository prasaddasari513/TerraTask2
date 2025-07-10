import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useIsMobile } from "@/hooks/use-mobile";

type Section = "overview" | "definitions" | "terraform-code" | "instructions" | "screenshots";

interface HeaderProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

export default function Header({ activeSection, onSectionChange }: HeaderProps) {
  const isMobile = useIsMobile();

  const sections = [
    { id: "overview" as const, label: "Overview" },
    { id: "definitions" as const, label: "Definitions" },
    { id: "terraform-code" as const, label: "Terraform Code" },
    { id: "instructions" as const, label: "Instructions" },
    { id: "screenshots" as const, label: "Screenshots" },
  ];

  return (
    <>
      <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-slate-900">
                  AWS EC2 + Terraform Tutorial
                </h1>
              </div>
              {!isMobile && (
                <nav className="hidden md:flex space-x-8">
                  {sections.map((section) => (
                    <Button
                      key={section.id}
                      variant="ghost"
                      className={`pb-4 ${
                        activeSection === section.id
                          ? "text-blue-600 border-b-2 border-blue-600 font-medium"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                      onClick={() => onSectionChange(section.id)}
                    >
                      {section.label}
                    </Button>
                  ))}
                </nav>
              )}
            </div>
            <div className="flex items-center space-x-4">
              <Input
                type="text"
                placeholder="Search..."
                className="hidden sm:block w-64"
              />
            </div>
          </div>
        </div>
      </header>

      {isMobile && (
        <div className="md:hidden bg-white border-b border-slate-200 p-4">
          <Select value={activeSection} onValueChange={(value) => onSectionChange(value as Section)}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {sections.map((section) => (
                <SelectItem key={section.id} value={section.id}>
                  {section.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </>
  );
}
