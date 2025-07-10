import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CodeBlock from "@/components/code-block";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { Download } from "lucide-react";

export default function TerraformCodeSection() {
  const { copy } = useCopyToClipboard();

  const providerCode = `provider "aws" {
  region = "us-east-1"
  # Configure your AWS credentials via:
  # - AWS CLI: aws configure
  # - Environment variables: AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY
  # - IAM roles (recommended for production)
}`;

  const amiCode = `data "aws_ami" "ubuntu" {
  most_recent = true

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }

  owners = ["099720109477"] # Canonical (Ubuntu) official AMIs
}`;

  const vpcCode = `# Use the default VPC
data "aws_vpc" "default" {
  default = true
}`;

  const securityGroupCode = `resource "aws_security_group" "allow_tls" {
  name        = "allow_tls"
  description = "Allow TLS inbound traffic and all outbound traffic"
  vpc_id      = data.aws_vpc.default.id

  tags = {
    Name = "allow_tls"
  }
}

# Ingress Rule for IPv4 - HTTPS traffic within the VPC
resource "aws_vpc_security_group_ingress_rule" "allow_tls_ipv4" {
  security_group_id = aws_security_group.allow_tls.id
  cidr_ipv4         = data.aws_vpc.default.cidr_block
  from_port         = 443
  ip_protocol       = "tcp"
  to_port           = 443
}

# Ingress Rule for IPv6 - HTTPS traffic within the VPC
resource "aws_vpc_security_group_ingress_rule" "allow_tls_ipv6" {
  security_group_id = aws_security_group.allow_tls.id
  cidr_ipv6         = "::/0"
  from_port         = 443
  ip_protocol       = "tcp"
  to_port           = 443
}

# Ingress Rule for SSH Access (Port 22)
resource "aws_vpc_security_group_ingress_rule" "allow_ssh_ipv4" {
  security_group_id = aws_security_group.allow_tls.id
  cidr_ipv4         = "0.0.0.0/0" # Allow SSH from anywhere (consider restricting for production)
  from_port         = 22
  ip_protocol       = "tcp"
  to_port           = 22
}

# Egress Rule - Allow all outbound IPv4 traffic
resource "aws_vpc_security_group_egress_rule" "allow_all_traffic_ipv4" {
  security_group_id = aws_security_group.allow_tls.id
  cidr_ipv4         = "0.0.0.0/0"
  ip_protocol       = "-1" # semantically equivalent to all ports
}

resource "aws_vpc_security_group_egress_rule" "allow_all_traffic_ipv6" {
  security_group_id = aws_security_group.allow_tls.id
  cidr_ipv6         = "::/0"
  ip_protocol       = "-1" # semantically equivalent to all ports
}`;

  const ec2Code = `resource "aws_instance" "Sample_demo" {
  count = 1
  ami = data.aws_ami.ubuntu.id
  instance_type = "t2.micro"
  key_name = var.key_name #this enables SSH using your key
  vpc_security_group_ids = [ aws_security_group.allow_tls.id] #attach the security group
  associate_public_ip_address = true
  tags = {
    Name = "EC2_Without_AMI"
  }
}

# Optional: Variable for Key Pair (to SSH into the EC2 instance)
variable "key_name" {
  description = "Name of the AWS key pair for SSH access"
  type        = string
  default     = "kp1" # Replace with your actual key pair name
}`;

  const allCode = `${providerCode}

${amiCode}

${vpcCode}

${securityGroupCode}

${ec2Code}`;

  const handleCopyAll = () => {
    copy(allCode);
  };

  const handleDownload = () => {
    const blob = new Blob([allCode], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'main.tf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section className="content-section">
      <Card className="p-8">
        <CardContent className="p-0">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-slate-900">Terraform Configuration</h2>
            <Button onClick={handleCopyAll} className="bg-blue-600 hover:bg-blue-700">
              Copy All Code
            </Button>
          </div>

          <div className="space-y-6">
            <CodeBlock
              title="1. AWS Provider Configuration"
              code={providerCode}
              language="hcl"
              description="Note: Never hardcode AWS credentials in your Terraform files. Use AWS CLI profiles, environment variables, or IAM roles instead."
            />

            <CodeBlock
              title="2. Latest Ubuntu AMI Data Source"
              code={amiCode}
              language="hcl"
            />

            <CodeBlock
              title="3. Default VPC Configuration"
              code={vpcCode}
              language="hcl"
            />

            <CodeBlock
              title="4. Security Group Configuration"
              code={securityGroupCode}
              language="hcl"
            />

            <CodeBlock
              title="5. EC2 Instance Configuration"
              code={ec2Code}
              language="hcl"
            />
          </div>

          {/* Download Button */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-blue-900">Complete Configuration File</h3>
                <p className="text-blue-700 text-sm">Download the complete main.tf file ready for deployment</p>
              </div>
              <Button onClick={handleDownload} className="bg-blue-600 hover:bg-blue-700">
                <Download className="w-4 h-4 mr-2" />
                Download main.tf
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
