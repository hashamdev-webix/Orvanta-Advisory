import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, FileText, DollarSign, Calendar, Plane, TrendingUp, Scale, Users } from "lucide-react";

const Overview = () => {
  // Get user data from localStorage
  const userName = localStorage.getItem("userName") || "User";
  const userCompany = localStorage.getItem("userCompany") || "Your Company";
  const userEmail = localStorage.getItem("userEmail") || "";
  
  const memberSince = new Date().toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
  });

  const services = [
    {
      icon: Plane,
      title: "Immigration Services",
      description: "Visa services, PR applications, work permits",
      link: "/services/immigration/visa"
    },
    {
      icon: TrendingUp,
      title: "Investment Services",
      description: "Real estate, stocks, tax planning",
      link: "/services/investments/real-estate"
    },
    {
      icon: Users,
      title: "Consultation Services",
      description: "Global market guidance, expansion support",
      link: "/services/consultation/global-market"
    },
    {
      icon: Scale,
      title: "Legal Services",
      description: "Documentation, risk management, dispute prevention",
      link: "/services/legal/documentation"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-primary-foreground">
        <h1 className="text-3xl font-heading font-bold mb-2">
          Welcome back, {userName}!
        </h1>
        <p className="text-primary-foreground/90 text-lg">
          {userCompany} • {userEmail}
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Services
            </CardTitle>
            <Building2 className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground mt-1">Immigration, Investment, Consultation, Legal</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Invoices
            </CardTitle>
            <FileText className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground mt-1">Membership payment</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Spent
            </CardTitle>
            <DollarSign className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$999</div>
            <p className="text-xs text-muted-foreground mt-1">Annual membership</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Member Since
            </CardTitle>
            <Calendar className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{memberSince}</div>
            <p className="text-xs text-muted-foreground mt-1">B2B membership</p>
          </CardContent>
        </Card>
      </div>

      {/* Available Services */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Available Services</CardTitle>
          <p className="text-sm text-muted-foreground">Access all our B2B services for your business needs</p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <Link key={index} to={service.link}>
                <div className="p-6 border border-border rounded-xl hover:shadow-lg hover:border-secondary transition-all duration-200 cursor-pointer group">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                      <service.icon className="text-secondary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-secondary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/dashboard/profile">
              <Button variant="outline" className="w-full h-auto py-4 flex flex-col items-center gap-2">
                <Users size={24} />
                <span>View Profile</span>
              </Button>
            </Link>
            <Link to="/dashboard/invoices">
              <Button variant="outline" className="w-full h-auto py-4 flex flex-col items-center gap-2">
                <FileText size={24} />
                <span>View Invoices</span>
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="w-full h-auto py-4 flex flex-col items-center gap-2">
                <Building2 size={24} />
                <span>Contact Support</span>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Overview;
