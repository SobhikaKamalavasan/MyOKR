
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, Building, TrendingUp } from "lucide-react";

const TeamView = () => {
  const organization = {
    name: "TechCorp Solutions",
    departments: [
      {
        id: 1,
        name: "Product",
        teams: [
          {
            id: 1,
            name: "Product Strategy",
            members: [
              { id: 1, name: "Sarah Chen", role: "Product Manager", progress: 85 },
              { id: 2, name: "Mike Johnson", role: "Senior Designer", progress: 92 },
            ],
            activeOKRs: 3,
            avgProgress: 88,
          },
          {
            id: 2,
            name: "User Experience",
            members: [
              { id: 3, name: "Emily Davis", role: "UX Lead", progress: 78 },
              { id: 4, name: "Alex Wong", role: "UI Designer", progress: 67 },
            ],
            activeOKRs: 2,
            avgProgress: 72,
          },
        ],
      },
      {
        id: 2,
        name: "Engineering",
        teams: [
          {
            id: 3,
            name: "Frontend",
            members: [
              { id: 5, name: "David Kim", role: "Senior Developer", progress: 95 },
              { id: 6, name: "Lisa Zhang", role: "React Developer", progress: 82 },
            ],
            activeOKRs: 4,
            avgProgress: 88,
          },
          {
            id: 4,
            name: "Backend",
            members: [
              { id: 7, name: "John Smith", role: "Backend Lead", progress: 73 },
              { id: 8, name: "Maria Garcia", role: "DevOps Engineer", progress: 91 },
            ],
            activeOKRs: 3,
            avgProgress: 82,
          },
        ],
      },
    ],
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "text-green-600 bg-green-100";
    if (progress >= 60) return "text-yellow-600 bg-yellow-100";
    return "text-red-600 bg-red-100";
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Teams</h1>
          <p className="text-gray-600 mt-1">Organization structure and team performance</p>
        </div>
        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
          <Building className="w-4 h-4 mr-1" />
          {organization.name}
        </Badge>
      </div>

      <div className="space-y-8">
        {organization.departments.map((department) => (
          <div key={department.id}>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-2 h-6 bg-blue-600 rounded-full"></div>
              {department.name} Department
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {department.teams.map((team) => (
                <Card key={team.id} className="hover:shadow-lg transition-shadow duration-200">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-600" />
                        {team.name}
                      </div>
                      <Badge
                        variant="outline"
                        className={`${getProgressColor(team.avgProgress)} border-0`}
                      >
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {team.avgProgress}%
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Active OKRs</span>
                        <span className="font-medium">{team.activeOKRs}</span>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-medium text-gray-900 text-sm">Team Members:</h4>
                        {team.members.map((member) => (
                          <div key={member.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-3">
                              <Avatar className="w-8 h-8">
                                <AvatarFallback className="text-xs bg-blue-100 text-blue-700">
                                  {getInitials(member.name)}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium text-gray-900 text-sm">{member.name}</p>
                                <p className="text-xs text-gray-600">{member.role}</p>
                              </div>
                            </div>
                            <Badge
                              variant="outline"
                              className={`${getProgressColor(member.progress)} border-0 text-xs`}
                            >
                              {member.progress}%
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamView;
