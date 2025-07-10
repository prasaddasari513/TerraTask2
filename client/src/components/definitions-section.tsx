import { Card, CardContent } from "@/components/ui/card";

export default function DefinitionsSection() {
  return (
    <section className="content-section">
      <Card className="p-8">
        <CardContent className="p-0">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Key Definitions</h2>
          
          <div className="space-y-8">
            {/* AWS EC2 Definition */}
            <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Amazon Web Services (AWS) EC2</h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                <strong>Amazon Elastic Compute Cloud (EC2)</strong> is a web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale computing easier for developers by providing complete control of computing resources.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Key Features:</h4>
                  <ul className="space-y-1 text-slate-600">
                    <li>• Virtual servers (instances) in the cloud</li>
                    <li>• Multiple instance types for different workloads</li>
                    <li>• Pay-as-you-go pricing model</li>
                    <li>• Global infrastructure availability</li>
                    <li>• Integration with other AWS services</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Common Use Cases:</h4>
                  <ul className="space-y-1 text-slate-600">
                    <li>• Web applications and APIs</li>
                    <li>• Development and testing environments</li>
                    <li>• Big data processing</li>
                    <li>• Machine learning workloads</li>
                    <li>• Backup and disaster recovery</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Terraform Definition */}
            <div className="border-l-4 border-emerald-500 pl-6 py-4 bg-emerald-50 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-emerald-900 mb-4">Terraform</h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                <strong>Terraform</strong> is an open-source Infrastructure as Code (IaC) tool created by HashiCorp. It allows you to define and provision data center infrastructure using a declarative configuration language known as HashiCorp Configuration Language (HCL).
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold text-emerald-800 mb-2">Core Concepts:</h4>
                  <ul className="space-y-1 text-slate-600">
                    <li>• <strong>Provider:</strong> Plugin for specific cloud/service</li>
                    <li>• <strong>Resource:</strong> Infrastructure component</li>
                    <li>• <strong>Data Source:</strong> Read-only information</li>
                    <li>• <strong>Variables:</strong> Input parameters</li>
                    <li>• <strong>State:</strong> Current infrastructure mapping</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-800 mb-2">Benefits:</h4>
                  <ul className="space-y-1 text-slate-600">
                    <li>• Infrastructure versioning and rollback</li>
                    <li>• Multi-cloud deployment support</li>
                    <li>• Automated resource management</li>
                    <li>• Team collaboration and consistency</li>
                    <li>• Cost optimization through automation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Additional Concepts */}
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Additional Key Concepts</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-slate-800 mb-2">VPC (Virtual Private Cloud)</h4>
                  <p className="text-sm text-slate-600">A logically isolated section of AWS cloud where you can launch AWS resources in a virtual network.</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 mb-2">AMI (Amazon Machine Image)</h4>
                  <p className="text-sm text-slate-600">A template that contains the software configuration required to launch an EC2 instance.</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 mb-2">Security Groups</h4>
                  <p className="text-sm text-slate-600">Virtual firewalls that control inbound and outbound traffic to EC2 instances.</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
