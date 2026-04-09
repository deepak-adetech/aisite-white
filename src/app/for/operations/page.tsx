"use client";
import { Workflow, Plug, BarChart3, AlertTriangle } from "lucide-react";
import SolutionPage from "@/components/SolutionPage";

export default function Operations() {
  return (
    <SolutionPage
      tag="Operations"
      title="Run your operations on"
      titleGradient="autopilot, not adrenaline"
      subtitle="Data entry, system updates, status tracking, report generation — your ops team is the glue holding everything together. Let AI be the glue instead."
      pains={[
        { title: "Manual data transfer", description: "Your team copies data between CRM, ERP, and project management tools all day. Errors compound across systems." },
        { title: "Status update overhead", description: "Everyone spends more time updating dashboards and sending status emails than doing actual work." },
        { title: "Inconsistent processes", description: "Different team members handle the same process differently. There's no single source of truth." },
        { title: "Alert fatigue", description: "Too many notifications, too few actionable ones. Critical issues get buried in noise." },
        { title: "Onboarding bottleneck", description: "New hires take months to learn all the manual processes because nothing is documented consistently." },
        { title: "Reporting takes the whole team", description: "Every weekly report requires pulling data from 5 systems and 3 hours of manual compilation." },
      ]}
      solutions={[
        { icon: Workflow, title: "End-to-End Workflow Automation", description: "We map your entire operational flow and replace every manual handoff with intelligent automation. Data moves between systems automatically." },
        { icon: Plug, title: "System Integration Hub", description: "Connect your CRM, ERP, PM tools, and communication platforms into a unified data layer. Changes in one system propagate everywhere instantly." },
        { icon: BarChart3, title: "Automated Reporting & Dashboards", description: "Real-time dashboards that pull from all your systems. Weekly reports generated and distributed automatically. Zero manual compilation." },
        { icon: AlertTriangle, title: "Intelligent Alert System", description: "AI that understands what matters. Filters noise, escalates critical issues, and provides context with every alert so your team can act fast." },
      ]}
      workflows={[
        { label: "Data entry between systems", before: "4 hours/day", after: "Fully automated" },
        { label: "Weekly status reports", before: "3 hours to compile", after: "Auto-generated" },
        { label: "New employee onboarding", before: "2 weeks manual", after: "3 days guided" },
        { label: "Issue escalation", before: "Hours to notice", after: "Instant with context" },
      ]}
      results={[
        { value: "23h", label: "Saved per person/week" },
        { value: "3x", label: "Team throughput" },
        { value: "90%", label: "Fewer manual errors" },
        { value: "2 weeks", label: "Time to live" },
      ]}
    />
  );
}
