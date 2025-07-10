import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Generate placeholder screenshot images
  app.get("/api/placeholder-screenshot/:type", (req, res) => {
    const { type } = req.params;
    
    const screenshots = {
      "terraform-init": {
        title: "Terraform Init",
        content: "$ terraform init\n\nInitializing the backend...\n\nInitializing provider plugins...\n- Finding latest version of hashicorp/aws...\n- Installing hashicorp/aws v5.31.0...\n- Installed hashicorp/aws v5.31.0\n\nTerraform has been successfully initialized!"
      },
      "terraform-plan": {
        title: "Terraform Plan", 
        content: "$ terraform plan\n\nTerraform will perform the following actions:\n\n  # aws_instance.Sample_demo[0] will be created\n  + resource \"aws_instance\" \"Sample_demo\" {\n      + ami                     = \"ami-0c02fb55956c7d316\"\n      + instance_type          = \"t2.micro\"\n      + key_name               = \"kp1\"\n\nPlan: 4 to add, 0 to change, 0 to destroy."
      },
      "terraform-apply": {
        title: "Terraform Apply",
        content: "$ terraform apply\n\naws_security_group.allow_tls: Creating...\naws_security_group.allow_tls: Creation complete\naws_instance.Sample_demo[0]: Creating...\naws_instance.Sample_demo[0]: Creation complete\n\nApply complete! Resources: 4 added, 0 changed, 0 destroyed.\n\nOutputs:\ninstance_public_ip = \"3.85.123.45\""
      },
      "aws-dashboard": {
        title: "AWS EC2 Console",
        content: "EC2 Dashboard\n\nInstances (1/1)\n┌─────────────────┬─────────────┬──────────────┬─────────────┐\n│ Instance ID     │ Name        │ State        │ Public IP   │\n├─────────────────┼─────────────┼──────────────┼─────────────┤\n│ i-0123456789ab  │ EC2_Without │ Running      │ 3.85.123.45 │\n│                 │ _AMI        │              │             │\n└─────────────────┴─────────────┴──────────────┴─────────────┘"
      }
    };

    const screenshot = screenshots[type as keyof typeof screenshots];
    if (!screenshot) {
      return res.status(404).json({ error: "Screenshot not found" });
    }

    // Generate SVG placeholder with terminal-like appearance
    const svg = `
      <svg width="800" height="500" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="500" fill="#1a1a1a"/>
        <rect x="0" y="0" width="800" height="30" fill="#333"/>
        <circle cx="15" cy="15" r="6" fill="#ff5f56"/>
        <circle cx="35" cy="15" r="6" fill="#ffbd2e"/>
        <circle cx="55" cy="15" r="6" fill="#27ca3f"/>
        <text x="80" y="20" font-family="monospace" font-size="12" fill="#fff">${screenshot.title}</text>
        <text x="20" y="60" font-family="monospace" font-size="11" fill="#00ff00">
          ${screenshot.content.split('\n').map((line, i) => `<tspan x="20" dy="${i === 0 ? 0 : 16}">${line}</tspan>`).join('')}
        </text>
      </svg>
    `;

    res.setHeader('Content-Type', 'image/svg+xml');
    res.send(svg);
  });

  const httpServer = createServer(app);

  return httpServer;
}
