"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function DemoReportAnIssue() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    await fetch("/api/report-issue", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setIsSubmitting(false);
    event.currentTarget.reset();
  };

  return (
    <form
      className="grid place-items-center min-h-screen"
      onSubmit={handleSubmit}
    >
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Report an issue</CardTitle>
          <CardDescription>
            What area are you having problems with?
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="area">Area</Label>
              <Select name="area" defaultValue="billing">
                <SelectTrigger id="area">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="team">Team</SelectItem>
                  <SelectItem value="billing">Billing</SelectItem>
                  <SelectItem value="account">Account</SelectItem>
                  <SelectItem value="deployments">Deployments</SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="security-level">Security Level</Label>
              <Select name="security-level" defaultValue="2">
                <SelectTrigger id="security-level" className="truncate">
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Severity 1 (Highest)</SelectItem>
                  <SelectItem value="2">Severity 2</SelectItem>
                  <SelectItem value="3">Severity 3</SelectItem>
                  <SelectItem value="4">Severity 4 (Lowest)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              name="subject"
              id="subject"
              placeholder="I need help with..."
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              name="description"
              id="description"
              placeholder="Please include all information relevant to your issue."
            />
          </div>
        </CardContent>
        <CardFooter className="justify-between space-x-2">
          <Button type="button" variant="ghost">
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
