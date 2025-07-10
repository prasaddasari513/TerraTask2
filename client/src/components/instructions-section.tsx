import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export default function InstructionsSection() {
  const steps = [
    {
      number: 1,
      title: "Set Up Your Environment",
      description: "First, ensure you have the necessary tools installed and configured:",
      code: `# Check Terraform installation
terraform --version

# Check AWS CLI configuration
aws configure list

# Verify AWS credentials
aws sts get-caller-identity`,
    },
    {
      number: 2,
      title: "Create Key Pair (if needed)",
      description: "Create an EC2 Key Pair for SSH access:",
      code: `# Create a new key pair
aws ec2 create-key-pair --key-name my-ubuntu-key --query 'KeyMaterial' --output text > my-ubuntu-key.pem

# Set appropriate permissions
chmod 400 my-ubuntu-key.pem`,
    },
    {
      number: 3,
      title: "Create Project Directory",
      description: "Set up your Terraform project structure:",
      code: `# Create project directory
mkdir ubuntu-ec2-terraform
cd ubuntu-ec2-terraform

# Create main configuration file
touch main.tf

# Optional: Create variables file
touch variables.tf`,
    },
    {
      number: 4,
      title: "Configure Terraform",
      description: "Copy the Terraform configuration from the previous section into your main.tf file and update the key_name variable:",
      code: `# Edit the key_name variable in main.tf
variable "key_name" {
  description = "Name of the AWS key pair for SSH access"
  type        = string
  default     = "my-ubuntu-key" # Use your actual key pair name
}`,
    },
    {
      number: 5,
      title: "Initialize Terraform",
      description: "Initialize your Terraform working directory:",
      code: `# Initialize Terraform
terraform init

# Validate configuration
terraform validate

# Format configuration (optional)
terraform fmt`,
      note: "Expected output: Terraform will download the AWS provider and initialize the backend.",
      noteType: "success",
    },
    {
      number: 6,
      title: "Plan Deployment",
      description: "Review the planned changes before applying:",
      code: `# Create execution plan
terraform plan

# Optional: Save plan to file
terraform plan -out=tfplan`,
      note: "Review the output: Terraform will show you exactly what resources will be created, modified, or destroyed.",
      noteType: "info",
    },
    {
      number: 7,
      title: "Deploy Infrastructure",
      description: "Apply the Terraform configuration to create your EC2 instance:",
      code: `# Apply configuration
terraform apply

# Or apply with saved plan
terraform apply tfplan`,
      note: "Success! After completion, Terraform will output the public IP and DNS name of your new EC2 instance.",
      noteType: "success",
    },
    {
      number: 8,
      title: "Connect to Your Instance",
      description: "SSH into your newly created Ubuntu instance:",
      code: `# SSH into the instance (replace with your actual public IP)
ssh -i my-ubuntu-key.pem ubuntu@YOUR_INSTANCE_PUBLIC_IP

# Example:
ssh -i my-ubuntu-key.pem ubuntu@3.85.123.45`,
      note: "Note: Use the public IP address from the Terraform output. The default username for Ubuntu AMIs is \"ubuntu\".",
      noteType: "info",
    },
  ];

  return (
    <section className="content-section">
      <Card className="p-8">
        <CardContent className="p-0">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Step-by-Step Instructions</h2>

          {/* Prerequisites */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-amber-900 mb-4">Prerequisites</h3>
            <ul className="space-y-2 text-amber-800">
              <li>• AWS account with appropriate permissions</li>
              <li>• Terraform installed (version 0.14+ recommended)</li>
              <li>• AWS CLI configured with your credentials</li>
              <li>• An existing EC2 Key Pair for SSH access</li>
            </ul>
          </div>

          {/* Step-by-step Instructions */}
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="border-l-4 border-blue-500 pl-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-slate-700">{step.description}</p>
                  {step.code && (
                    <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-green-400 text-sm">
                        <code>{step.code}</code>
                      </pre>
                    </div>
                  )}
                  {step.note && (
                    <div className={`rounded-lg p-4 border ${
                      step.noteType === "success" 
                        ? "bg-emerald-50 border-emerald-200" 
                        : step.noteType === "info"
                        ? "bg-blue-50 border-blue-200"
                        : "bg-amber-50 border-amber-200"
                    }`}>
                      <p className={`text-sm ${
                        step.noteType === "success" 
                          ? "text-emerald-800" 
                          : step.noteType === "info"
                          ? "text-blue-800"
                          : "text-amber-800"
                      }`}>
                        <strong>{step.noteType === "success" ? "Expected output:" : step.noteType === "info" ? "Review the output:" : "Note:"}</strong> {step.note}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Cleanup */}
          <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-red-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-red-900 mb-4">Clean Up Resources</h3>
                <p className="text-red-800 mb-3">When you're done testing, remember to destroy the resources to avoid ongoing charges:</p>
                <div className="bg-slate-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm">
                    <code>{`# Destroy all resources
terraform destroy

# Confirm with 'yes' when prompted`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
