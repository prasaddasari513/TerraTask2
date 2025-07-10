import { Card, CardContent } from "@/components/ui/card";
import { Info } from "lucide-react";
import T1Image from "@assets/T1_1752173946151.png";
import T2Image from "@assets/T2_1752173954578.png";
import T3Image from "@assets/T3_1752173960090.png";
import T4Image from "@assets/T4_1752173965883.png";

interface ScreenshotsProps {
  onImageClick: (image: { src: string; alt: string; title: string; description: string }) => void;
}

export default function ScreenshotsSection({ onImageClick }: ScreenshotsProps) {
  const screenshots = [
    {
      id: "terraform-validate-plan",
      title: "Terraform Validate & Plan Commands",
      description: "PowerShell terminal showing terraform validate and terraform plan commands with detailed execution plan for AWS resources including EC2 instance creation.",
      src: T1Image,
      alt: "PowerShell terminal displaying terraform validate success and terraform plan output with resource details"
    },
    {
      id: "terraform-plan-continued",
      title: "Terraform Plan Output Details", 
      description: "Continuation of terraform plan command showing the complete resource configuration and confirmation prompt with 7 resources to add.",
      src: T2Image,
      alt: "PowerShell terminal showing terraform plan completion with resource summary and apply confirmation"
    },
    {
      id: "terraform-apply-execution",
      title: "Terraform Apply Execution",
      description: "PowerShell terminal displaying terraform apply command execution with real-time resource creation progress including security groups and EC2 instance deployment.",
      src: T3Image,
      alt: "PowerShell terminal showing terraform apply in progress with resource creation status updates"
    },
    {
      id: "aws-ec2-console-dashboard",
      title: "AWS EC2 Console - Running Instance",
      description: "AWS Management Console showing the successfully deployed EC2 instance named 'EC2_Without_AMI' in running state with instance details and configuration.",
      src: T4Image,
      alt: "AWS EC2 console dashboard displaying the running Ubuntu instance with instance ID and status information"
    }
  ];

  return (
    <section className="content-section">
      <Card className="p-8">
        <CardContent className="p-0">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Implementation Screenshots</h2>
          
          {/* Implementation Success */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <Info className="w-6 h-6 text-emerald-600 mt-1" />
              <div>
                <h3 className="font-semibold text-emerald-900 mb-2">Actual Implementation Screenshots</h3>
                <p className="text-emerald-800 text-sm">The screenshots below show the real implementation of the Terraform AWS EC2 deployment, captured during the actual execution process.</p>
              </div>
            </div>
          </div>

          {/* Screenshot Gallery - 2x2 Grid for 4 Screenshots */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {screenshots.map((screenshot) => (
              <div
                key={screenshot.id}
                className="group cursor-pointer"
                onClick={() => onImageClick(screenshot)}
              >
                <div className="bg-slate-100 rounded-lg overflow-hidden border border-slate-200 hover:shadow-lg transition-all">
                  <div className="aspect-video bg-slate-200 flex items-center justify-center">
                    <img
                      src={screenshot.src}
                      alt={screenshot.alt}
                      className="w-full h-full object-contain bg-white"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZjFmNWY5Ii8+CjxwYXRoIGQ9Im0xNzUgMTMwIDUwIDQwIDUwLTQwdjQwSDE3NXoiIGZpbGw9IiM5Y2EzYWYiLz4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeD0iMTg4IiB5PSIxMzgiPgo8cGF0aCBkPSJtMTUgOSA2IDZtMC02LTYgNiIgc3Ryb2tlPSIjOWNhM2FmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4KPHR4dCB4PSIyMDAiIHk9IjE5MCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzljYTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U2NyZWVuc2hvdCBQbGFjZWhvbGRlcjwvdHh0Pgo8L3N2Zz4=";
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-slate-900 mb-2">{screenshot.title}</h3>
                    <p className="text-slate-600 text-sm">{screenshot.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Implementation Flow */}
          <div className="mt-12 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg p-6 border border-emerald-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Implementation Flow Demonstrated</h3>
            <p className="text-slate-600 mb-4">These screenshots capture the complete Terraform AWS deployment workflow:</p>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600">
              <div>
                <h4 className="font-semibold text-emerald-800 mb-2">PowerShell Command Execution:</h4>
                <ul className="space-y-1">
                  <li>• <strong>terraform validate:</strong> Configuration validation success</li>
                  <li>• <strong>terraform plan:</strong> Resource planning with 7 resources to add</li>
                  <li>• <strong>terraform apply:</strong> Live deployment with resource creation progress</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">AWS Console Verification:</h4>
                <ul className="space-y-1">
                  <li>• <strong>EC2 Instance:</strong> Successfully running 'EC2_Without_AMI'</li>
                  <li>• <strong>Instance Status:</strong> Running state with public IP assigned</li>
                  <li>• <strong>Security Configuration:</strong> Proper security groups attached</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 bg-white rounded border border-slate-200 p-4">
              <p className="text-sm text-slate-600">
                <strong>Implementation Success:</strong> This tutorial demonstrates a real, working Terraform deployment captured from an actual AWS environment setup.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
