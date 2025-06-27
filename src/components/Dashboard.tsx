
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Users, CheckCircle } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Active OKRs",
      value: "24",
      change: "+12%",
      icon: Target,
      color: "text-blue-600",
    },
    {
      title: "Team Progress",
      value: "67%",
      change: "+5%",
      icon: TrendingUp,
      color: "text-green-600",
    },
    {
      title: "Team Members",
      value: "18",
      change: "+2",
      icon: Users,
      color: "text-purple-600",
    },
    {
      title: "Completed",
      value: "12",
      change: "+8",
      icon: CheckCircle,
      color: "text-emerald-600",
    },
  ];

  const recentOKRs = [
    {
      id: 1,
      title: "Increase Monthly Active Users",
      progress: 75,
      status: "On Track",
      dueDate: "Dec 31, 2024",
      owner: "Product Team",
    },
    {
      id: 2,
      title: "Reduce Customer Churn Rate",
      progress: 60,
      status: "At Risk",
      dueDate: "Dec 31, 2024",
      owner: "Customer Success",
    },
    {
      id: 3,
      title: "Launch Mobile App",
      progress: 90,
      status: "On Track",
      dueDate: "Nov 15, 2024",
      owner: "Engineering",
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Track your organization's objectives and key results</p>
        </div>
        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
          Q4 2024
        </Badge>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-green-600 font-medium">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-full bg-gray-50 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent OKRs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600" />
              Active OKRs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOKRs.map((okr) => (
                <div key={okr.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{okr.title}</h3>
                      <p className="text-sm text-gray-600">Owner: {okr.owner}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={okr.status === "On Track" ? "default" : "destructive"}
                        className={okr.status === "On Track" ? "bg-green-100 text-green-800" : ""}
                      >
                        {okr.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium">{okr.progress}%</span>
                    </div>
                    <Progress value={okr.progress} className="h-2" />
                  </div>
                  <p className="text-sm text-gray-500">Due: {okr.dueDate}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
