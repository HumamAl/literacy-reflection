"use client";

import { useState } from "react";
import { Mic, Keyboard, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { students, classrooms, feedbackEntries } from "@/data/mock-data";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

const studentsByClassroom = classrooms.map((c) => ({
  classroom: c,
  students: students.filter((s) => s.classroomId === c.id),
}));

const recentFeedback = [...feedbackEntries]
  .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  .slice(0, 15);

export default function FeedbackPage() {
  const [inputMethod, setInputMethod] = useState<"typed" | "voice">("typed");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Feedback</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Record and review literacy feedback
        </p>
      </div>

      {/* New Entry Card */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg">New Feedback Entry</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-1.5 block">Student</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a student..." />
              </SelectTrigger>
              <SelectContent>
                {studentsByClassroom.map((group) => (
                  <div key={group.classroom.id}>
                    <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                      {group.classroom.name}
                    </div>
                    {group.students.map((s) => (
                      <SelectItem key={s.id} value={s.id}>
                        {s.name}
                      </SelectItem>
                    ))}
                  </div>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block">
              Input Method
            </label>
            <div className="flex gap-2">
              <Button
                variant={inputMethod === "typed" ? "default" : "outline"}
                size="sm"
                className="gap-2"
                onClick={() => setInputMethod("typed")}
              >
                <Keyboard className="w-4 h-4" /> Typed
              </Button>
              <Button
                variant={inputMethod === "voice" ? "default" : "outline"}
                size="sm"
                className="gap-2"
                onClick={() => setInputMethod("voice")}
              >
                <Mic className="w-4 h-4" /> Voice
              </Button>
            </div>
          </div>

          {inputMethod === "typed" ? (
            <Textarea
              placeholder="Type your feedback observation..."
              rows={4}
            />
          ) : (
            <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto flex items-center justify-center">
                <Mic className="w-8 h-8 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">
                Click to start recording
              </p>
              <p className="text-xs text-muted-foreground">
                Audio will be automatically transcribed
              </p>
            </div>
          )}

          <div className="flex items-center gap-2 flex-wrap">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs text-muted-foreground">
              Auto-detected by AI
            </span>
            <Badge variant="secondary">Skill: Comprehension</Badge>
            <Badge variant="secondary">Bloom&apos;s: Understand</Badge>
          </div>

          <div className="flex justify-end">
            <Button>Save Entry</Button>
          </div>
        </CardContent>
      </Card>

      {/* Entry History */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Recent Entries</h2>
        {recentFeedback.map((entry) => (
          <Card
            key={entry.id}
            className="hover:-translate-y-0.5 hover:shadow-md hover:border-primary/30 transition-all duration-200"
          >
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{entry.studentName}</span>
                  {entry.inputMethod === "voice" ? (
                    <Mic className="w-3.5 h-3.5 text-muted-foreground" />
                  ) : (
                    <Keyboard className="w-3.5 h-3.5 text-muted-foreground" />
                  )}
                </div>
                <span className="text-xs text-muted-foreground">
                  {formatDate(entry.date)}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {entry.content}
              </p>
              <div className="flex gap-1.5 mt-3 flex-wrap">
                <Badge variant="default">{capitalize(entry.literacySkill)}</Badge>
                <Badge variant="secondary">
                  {capitalize(entry.bloomsLevel)}
                </Badge>
                {entry.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
