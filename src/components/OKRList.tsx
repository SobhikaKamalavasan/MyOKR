
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Plus, Edit, Trash, Target } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const OKRList = () => {
  const { toast } = useToast();
  const [okrs, setOkrs] = useState([
    {
      id: 1,
      objective: "Increase Monthly Active Users",
      keyResults: [
        { id: 1, description: "Reach 50,000 MAU", progress: 75, target: 50000, current: 37500 },
        { id: 2, description: "Improve user retention to 85%", progress: 60, target: 85, current: 51 },
        { id: 3, description: "Launch 3 new user engagement features", progress: 100, target: 3, current: 3 },
      ],
      status: "On Track",
      dueDate: "Dec 31, 2024",
      owner: "Product Team",
      department: "Product",
    },
    {
      id: 2,
      objective: "Reduce Customer Churn Rate",
      keyResults: [
        { id: 4, description: "Reduce monthly churn to below 5%", progress: 40, target: 5, current: 7 },
        { id: 5, description: "Implement proactive support system", progress: 80, target: 100, current: 80 },
      ],
      status: "At Risk",
      dueDate: "Dec 31, 2024",
      owner: "Customer Success",
      department: "Customer Success",
    },
  ]);

  const calculateOKRProgress = (keyResults: any[]) => {
    const totalProgress = keyResults.reduce((sum, kr) => sum + kr.progress, 0);
    return Math.round(totalProgress / keyResults.length);
  };

  const handleCreateOKR = () => {
    toast({
      title: "Create New OKR",
      description: "Feature coming soon! You'll be able to create new OKRs here.",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">OKRs</h1>
          <p className="text-gray-600 mt-1">Manage your objectives and key results</p>
        </div>
        <Button onClick={handleCreateOKR} className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          New OKR
        </Button>
      </div>

      <div className="space-y-6">
        {okrs.map((okr) => (
          <Card key={okr.id} className="shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Target className="w-5 h-5 text-blue-600" />
                    {okr.objective}
                  </CardTitle>
                  <div className="flex items-center gap-4 mt-2">
                    <Badge variant="outline" className="text-xs">
                      {okr.department}
                    </Badge>
                    <span className="text-sm text-gray-600">Owner: {okr.owner}</span>
                    <span className="text-sm text-gray-600">Due: {okr.dueDate}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={okr.status === "On Track" ? "default" : "destructive"}
                    className={okr.status === "On Track" ? "bg-green-100 text-green-800" : ""}
                  >
                    {okr.status}
                  </Badge>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="font-medium text-gray-700">Overall Progress</span>
                  <span className="font-bold text-gray-900">{calculateOKRProgress(okr.keyResults)}%</span>
                </div>
                <Progress value={calculateOKRProgress(okr.keyResults)} className="h-3" />
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-gray-900 text-sm">Key Results:</h4>
                {okr.keyResults.map((kr) => (
                  <div key={kr.id} className="pl-4 border-l-2 border-gray-200">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm text-gray-700">{kr.description}</p>
                      <span className="text-xs font-medium text-gray-600">{kr.progress}%</span>
                    </div>
                    <Progress value={kr.progress} className="h-2 mb-1" />
                    <p className="text-xs text-gray-500">
                      {kr.current.toLocaleString()} / {kr.target.toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OKRList;
