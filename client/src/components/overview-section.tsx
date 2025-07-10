import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, Shield, Zap } from "lucide-react";

export default function OverviewSection() {
  return (
    <section className="content-section">
      <Card className="p-8 mb-8">
        <CardContent className="p-0">
          {/* Student Information */}
          <div className="text-center mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Student Information</h2>
              <div className="space-y-2 text-lg">
                <p><span className="font-semibold">Name:</span> [Your Name Here]</p>
                <p><span className="font-semibold">Section:</span> [Your Section Here]</p>
                <p><span className="font-semibold">Roll Number:</span> [Your Roll Number Here]</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Launch a Secure Ubuntu EC2 Instance
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Learn how to deploy a secure Ubuntu EC2 instance in AWS with SSH and HTTPS access using Terraform and the default VPC configuration.
            </p>
          </div>

          {/* Quick Start Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Infrastructure as Code</h3>
              <p className="text-blue-700">Use Terraform to define and manage your AWS infrastructure declaratively.</p>
            </div>

            <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
              <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-emerald-900 mb-2">Security Best Practices</h3>
              <p className="text-emerald-700">Configure proper security groups for SSH and HTTPS access with minimal exposure.</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Latest Ubuntu AMI</h3>
              <p className="text-purple-700">Automatically use the latest official Ubuntu 22.04 LTS AMI for optimal security.</p>
            </div>
          </div>

          {/* What You'll Learn */}
          <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6 text-center">What You'll Learn</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { text: "Setting up AWS provider in Terraform", color: "bg-blue-500 hover:bg-blue-600" },
                { text: "Configuring security groups for SSH and HTTPS", color: "bg-emerald-500 hover:bg-emerald-600" },
                { text: "Using data sources to fetch latest AMIs", color: "bg-purple-500 hover:bg-purple-600" },
                { text: "Deploying EC2 instances with public IP", color: "bg-orange-500 hover:bg-orange-600" },
                { text: "Managing infrastructure lifecycle", color: "bg-indigo-500 hover:bg-indigo-600" },
                { text: "Best practices for cloud security", color: "bg-rose-500 hover:bg-rose-600" }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`${item.color} text-white px-4 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 cursor-pointer flex items-center space-x-2 min-w-0 max-w-xs`}
                >
                  <div className="flex-shrink-0 w-5 h-5 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-medium text-center flex-1">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
