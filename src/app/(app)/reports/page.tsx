"use client";

import { FileText, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { studentReports, entriesByClassroom } from "@/data/mock-data";

const maxClassroomEntries = Math.max(
  ...entriesByClassroom.map((c) => c.entries)
);

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Reports</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Export and review student literacy data
        </p>
      </div>

      {/* Export Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="cursor-pointer hover:-translate-y-0.5 hover:shadow-md hover:border-primary/30 transition-all duration-200">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-medium">Export PDF Report</p>
              <p className="text-sm text-muted-foreground">
                Generate a formatted literacy progress report
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:-translate-y-0.5 hover:shadow-md hover:border-primary/30 transition-all duration-200">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Download className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-medium">Export CSV Data</p>
              <p className="text-sm text-muted-foreground">
                Download raw feedback data as a spreadsheet
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Student Summary Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Student Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>Reading Level</TableHead>
                <TableHead className="text-center">Total Entries</TableHead>
                <TableHead>Top Skill</TableHead>
                <TableHead>Top Bloom&apos;s Level</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {studentReports.map((report) => (
                <TableRow key={report.studentId}>
                  <TableCell className="font-medium">
                    {report.studentName}
                  </TableCell>
                  <TableCell>{report.grade}</TableCell>
                  <TableCell>{report.readingLevel}</TableCell>
                  <TableCell className="text-center">
                    {report.entryCount}
                  </TableCell>
                  <TableCell>
                    <Badge variant="default">{report.topSkill}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{report.topBloomsLevel}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Classroom Summary */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Classroom Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {entriesByClassroom.map((item) => (
            <Card
              key={item.classroom}
              className="hover:-translate-y-0.5 hover:shadow-md hover:border-primary/30 transition-all duration-200"
            >
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-sm">{item.classroom}</p>
                  <Badge variant="outline">
                    {item.studentCount} students
                  </Badge>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm mb-1.5">
                    <span className="text-muted-foreground">Entries</span>
                    <span className="font-semibold">{item.entries}</span>
                  </div>
                  <Progress
                    value={(item.entries / maxClassroomEntries) * 100}
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  {(item.entries / item.studentCount).toFixed(1)} entries per
                  student
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
