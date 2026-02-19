import {
  User,
  CreditCard,
  Shield,
  Link2,
  FileDown,
  Trash2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Account and subscription management
        </p>
      </div>

      {/* Profile Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <User className="w-5 h-5" /> Profile
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center text-lg font-semibold">
              SJ
            </div>
            <div>
              <p className="font-medium text-lg">Sarah Johnson</p>
              <p className="text-sm text-muted-foreground">
                sarah.johnson@lincoln.edu
              </p>
              <div className="flex gap-4 mt-1 text-sm text-muted-foreground">
                <span>Lincoln Elementary School</span>
                <span>2nd Grade Teacher</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Subscription Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <CreditCard className="w-5 h-5" /> Subscription
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">LitReflect Pro</p>
              <p className="text-sm text-muted-foreground">$29/month</p>
            </div>
            <Badge className="bg-[color:var(--success)]/10 text-[color:var(--success)] hover:bg-[color:var(--success)]/20 border-0">
              Active
            </Badge>
          </div>
          <Separator />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-muted-foreground">Next billing</p>
              <p className="font-medium">March 1, 2026</p>
            </div>
            <div>
              <p className="text-muted-foreground">Payment method</p>
              <p className="font-medium">Visa ending in 4242</p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Manage Subscription
          </Button>
        </CardContent>
      </Card>

      {/* Data & Privacy Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Shield className="w-5 h-5" /> Data &amp; Privacy
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            <Badge className="bg-[color:var(--success)]/10 text-[color:var(--success)] hover:bg-[color:var(--success)]/20 border-0">
              FERPA Compliant
            </Badge>
          </div>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p>All student data is encrypted at rest and in transit.</p>
            <p>Data is stored in US-based servers.</p>
          </div>
          <Separator />
          <div className="flex gap-4">
            <Button variant="outline" size="sm" className="gap-2">
              <FileDown className="w-4 h-4" /> Export All Data
            </Button>
            <Button variant="outline" size="sm" className="gap-2 text-destructive hover:text-destructive">
              <Trash2 className="w-4 h-4" /> Delete Account
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Integrations Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Link2 className="w-5 h-5" /> Integrations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-600">
                GC
              </div>
              <span className="font-medium text-sm">Google Classroom</span>
            </div>
            <Badge className="bg-[color:var(--warning)]/10 text-[color:var(--warning)] hover:bg-[color:var(--warning)]/20 border-0">
              Coming Soon
            </Badge>
          </div>
          <Separator />
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-orange-100 flex items-center justify-center text-xs font-bold text-orange-600">
                SC
              </div>
              <span className="font-medium text-sm">Schoology</span>
            </div>
            <Badge className="bg-[color:var(--warning)]/10 text-[color:var(--warning)] hover:bg-[color:var(--warning)]/20 border-0">
              Coming Soon
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground">
            Connect your LMS to automatically sync student rosters and class
            information.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
