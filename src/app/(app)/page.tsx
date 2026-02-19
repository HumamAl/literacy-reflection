"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  dashboardStats,
  skillDistribution,
  bloomsDistribution,
  entriesByMonth,
  recentEntries,
} from "@/data/mock-data";
import {
  MessageSquare,
  Users,
  TrendingUp,
  Calendar,
  Mic,
  Keyboard,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const SKILL_COLORS = [
  "#7c3aed",
  "#8b5cf6",
  "#a78bfa",
  "#6d28d9",
  "#5b21b6",
  "#c4b5fd",
];

const BLOOMS_COLORS = [
  "#7c3aed",
  "#8b5cf6",
  "#a78bfa",
  "#c4b5fd",
  "#ddd6fe",
  "#ede9fe",
];

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function truncate(str: string, maxLen: number) {
  if (str.length <= maxLen) return str;
  return str.slice(0, maxLen).trimEnd() + "...";
}

const stats = [
  {
    title: "Total Entries",
    value: dashboardStats.totalEntries,
    icon: MessageSquare,
    change: `${dashboardStats.topSkill} is the most recorded skill`,
  },
  {
    title: "Total Students",
    value: dashboardStats.totalStudents,
    icon: Users,
    change: "Across 3 classrooms",
  },
  {
    title: "Avg Entries/Student",
    value: dashboardStats.avgEntriesPerStudent,
    icon: TrendingUp,
    change: `Top level: ${dashboardStats.topBloomsLevel}`,
  },
  {
    title: "This Week",
    value: dashboardStats.thisWeekEntries,
    icon: Calendar,
    change: "New feedback entries",
  },
];

interface SkillPayload {
  skill: string;
  count: number;
}

interface BloomsPayload {
  level: string;
  count: number;
}

function SkillTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { payload: SkillPayload }[];
}) {
  if (!active || !payload?.length) return null;
  const data = payload[0].payload;
  const total = skillDistribution.reduce((s, d) => s + d.count, 0);
  const pct = ((data.count / total) * 100).toFixed(1);
  return (
    <div className="rounded-lg border bg-card px-3 py-2 shadow-md">
      <p className="text-sm font-medium">{data.skill}</p>
      <p className="text-xs text-muted-foreground">
        {data.count} entries ({pct}%)
      </p>
    </div>
  );
}

function BloomsTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { payload: BloomsPayload }[];
}) {
  if (!active || !payload?.length) return null;
  const data = payload[0].payload;
  const total = bloomsDistribution.reduce((s, d) => s + d.count, 0);
  const pct = ((data.count / total) * 100).toFixed(1);
  return (
    <div className="rounded-lg border bg-card px-3 py-2 shadow-md">
      <p className="text-sm font-medium">{data.level}</p>
      <p className="text-xs text-muted-foreground">
        {data.count} entries ({pct}%)
      </p>
    </div>
  );
}

function BarTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border bg-card px-3 py-2 shadow-md">
      <p className="text-sm font-medium">{label}</p>
      <p className="text-xs text-muted-foreground">
        {payload[0].value} entries
      </p>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Overview of student literacy feedback and progress
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card
            key={stat.title}
            className="shadow-sm border rounded-xl hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="w-4 h-4 text-primary/70" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Literacy Skill Distribution */}
        <Card className="shadow-sm border rounded-xl hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
          <CardHeader>
            <CardTitle className="text-base font-semibold">
              Literacy Skill Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={skillDistribution}
                  cx="50%"
                  cy="45%"
                  innerRadius={50}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="count"
                  nameKey="skill"
                >
                  {skillDistribution.map((_, index) => (
                    <Cell
                      key={`skill-${index}`}
                      fill={SKILL_COLORS[index % SKILL_COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip content={<SkillTooltip />} />
                <Legend
                  verticalAlign="bottom"
                  height={36}
                  formatter={(value: string) => (
                    <span className="text-xs text-foreground">{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Bloom's Taxonomy Distribution */}
        <Card className="shadow-sm border rounded-xl hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
          <CardHeader>
            <CardTitle className="text-base font-semibold">
              Bloom&apos;s Taxonomy Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={bloomsDistribution}
                  cx="50%"
                  cy="45%"
                  innerRadius={50}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="count"
                  nameKey="level"
                >
                  {bloomsDistribution.map((_, index) => (
                    <Cell
                      key={`blooms-${index}`}
                      fill={BLOOMS_COLORS[index % BLOOMS_COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip content={<BloomsTooltip />} />
                <Legend
                  verticalAlign="bottom"
                  height={36}
                  formatter={(value: string) => (
                    <span className="text-xs text-foreground">{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Entries by Month Bar Chart */}
      <Card className="shadow-sm border rounded-xl hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
        <CardHeader>
          <CardTitle className="text-base font-semibold">
            Entries by Month
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={entriesByMonth}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip content={<BarTooltip />} />
              <Bar dataKey="entries" fill="#7c3aed" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recent Feedback Entries Table */}
      <Card className="shadow-sm border rounded-xl hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
        <CardHeader>
          <CardTitle className="text-base font-semibold">
            Recent Feedback Entries
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="hidden md:table-cell">
                  Feedback
                </TableHead>
                <TableHead>Skill</TableHead>
                <TableHead>Bloom&apos;s Level</TableHead>
                <TableHead>Method</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentEntries.map((entry) => (
                <TableRow key={entry.id}>
                  <TableCell className="font-medium">
                    {entry.studentName}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {formatDate(entry.date)}
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-muted-foreground max-w-[300px]">
                    {truncate(entry.content, 80)}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary"
                    >
                      {capitalize(entry.literacySkill)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">
                      {capitalize(entry.bloomsLevel)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {entry.inputMethod === "voice" ? (
                      <Mic className="w-4 h-4 text-muted-foreground" />
                    ) : (
                      <Keyboard className="w-4 h-4 text-muted-foreground" />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
