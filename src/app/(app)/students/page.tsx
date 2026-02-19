"use client";

import { useState } from "react";
import { UserPlus, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { students, classrooms, feedbackEntries } from "@/data/mock-data";

function getEntryCount(studentId: string) {
  return feedbackEntries.filter((e) => e.studentId === studentId).length;
}

function getClassroomName(classroomId: string) {
  return classrooms.find((c) => c.id === classroomId)?.name ?? "";
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function StudentsPage() {
  const [selectedClassroom, setSelectedClassroom] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = students.filter((s) => {
    const matchesClassroom =
      selectedClassroom === "all" || s.classroomId === selectedClassroom;
    const matchesSearch = s.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesClassroom && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Students</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage your student roster
          </p>
        </div>
        <Button className="gap-2">
          <UserPlus className="w-4 h-4" /> Add Student
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Select value={selectedClassroom} onValueChange={setSelectedClassroom}>
          <SelectTrigger className="w-full sm:w-[240px]">
            <SelectValue placeholder="All Classes" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Classes</SelectItem>
            {classrooms.map((c) => (
              <SelectItem key={c.id} value={c.id}>
                {c.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search students..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((student) => {
          const entryCount = getEntryCount(student.id);
          const classroomName = getClassroomName(student.classroomId);
          return (
            <Card
              key={student.id}
              className="hover:-translate-y-0.5 hover:shadow-md hover:border-primary/30 transition-all duration-200"
            >
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold shrink-0">
                    {student.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium truncate">{student.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {classroomName}
                    </p>
                    <div className="flex gap-1.5 mt-2">
                      <Badge variant="secondary">Grade {student.grade}</Badge>
                      <Badge variant="outline">Level {student.readingLevel}</Badge>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t flex items-center justify-between text-xs text-muted-foreground">
                  <span>
                    {entryCount} feedback {entryCount === 1 ? "entry" : "entries"}
                  </span>
                  <span>Enrolled {formatDate(student.enrolledDate)}</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <p className="text-sm">No students match your filters.</p>
        </div>
      )}
    </div>
  );
}
