import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, CheckCircle } from "lucide-react";

const Invoices = () => {
  const userName = localStorage.getItem("userName") || "User";
  const userEmail = localStorage.getItem("userEmail") || "";
  const userCompany = localStorage.getItem("userCompany") || "Your Company";
  
  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const invoice = {
    id: "INV-2024-001",
    date: currentDate,
    amount: "$999.00",
    status: "Paid",
    description: "B2B Annual Membership",
    paymentMethod: "Credit Card"
  };

  const handleDownload = () => {
    alert("Invoice download feature will be available soon!");
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-heading font-bold mb-2">Payment History</h1>
        <p className="text-muted-foreground">View and download your invoices</p>
      </div>

      {/* Invoice List */}
      <Card>
        <CardHeader>
          <CardTitle>Invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border border-border rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10">
                    <FileText className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-1">
                      {invoice.description}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Invoice #{invoice.id} • {invoice.date}
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                  <CheckCircle size={14} />
                  {invoice.status}
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-4 p-4 bg-muted/50 rounded-lg">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Amount</p>
                  <p className="font-semibold text-lg">{invoice.amount}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Payment Method</p>
                  <p className="font-semibold">{invoice.paymentMethod}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Billing To</p>
                  <p className="font-semibold">{userCompany}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="text-sm text-muted-foreground">{userName}</p>
                  <p className="text-sm text-muted-foreground">{userEmail}</p>
                </div>
                <Button
                  onClick={handleDownload}
                  variant="outline"
                  className="gap-2"
                >
                  <Download size={16} />
                  Download PDF
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary Card */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Paid
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$999.00</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Invoices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Next Payment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toLocaleDateString("en-GB", {
                month: "short",
                year: "numeric",
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Invoices;
