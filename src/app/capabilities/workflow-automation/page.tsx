"use client";
import { Workflow, Zap, RefreshCw, Shield } from "lucide-react";
import SolutionPage from "@/components/SolutionPage";

export default function WorkflowAutomation() {
  return (
    <SolutionPage
      tag="Workflow Automation"
      title="Replace manual processes with"
      titleGradient="intelligent pipelines"
      subtitle="We don't just connect tools with Zapier. We build end-to-end AI-powered workflows that reason, decide, and act — handling the complexity your current automation can't."
      pains={[
        { title: "Too many manual steps", description: "Every process has 10 steps that require a human to copy-paste, check, approve, or forward. It shouldn't be this hard." },
        { title: "Broken integrations", description: "Your tools don't talk to each other natively. Data lives in silos and someone has to manually bridge the gaps." },
        { title: "Simple automation isn't enough", description: "You've tried Zapier/Make but hit their limits. Your workflows need conditional logic, AI decisions, and multi-step reasoning." },
        { title: "Error-prone handoffs", description: "Every time data passes between a human and a system (or system to system), errors creep in." },
        { title: "No visibility into bottlenecks", description: "You can't see where work gets stuck because the process isn't instrumented." },
        { title: "Scaling means hiring", description: "Every time volume increases, you need more people. The process doesn't scale without headcount." },
      ]}
      solutions={[
        { icon: Workflow, title: "Process Mapping & Design", description: "We map your current workflow step-by-step, identify every manual touchpoint, and design an optimized AI-powered version." },
        { icon: Zap, title: "Intelligent Orchestration", description: "Multi-step workflows with conditional branching, AI decision points, error handling, and retry logic. Not simple triggers — real orchestration." },
        { icon: RefreshCw, title: "Continuous Optimization", description: "We monitor workflow performance, identify new bottlenecks, and continuously improve throughput and accuracy." },
        { icon: Shield, title: "Reliability & Monitoring", description: "Built-in alerting, audit trails, and fallback logic. When something unexpected happens, the system handles it gracefully." },
      ]}
      workflows={[
        { label: "Document processing pipeline", before: "3 days manual", after: "15 minutes automated" },
        { label: "Multi-system data sync", before: "Daily manual exports", after: "Real-time sync" },
        { label: "Approval workflows", before: "5 emails + 2 days", after: "Instant routing + Slack" },
        { label: "Report generation", before: "Half day per report", after: "Auto-generated daily" },
      ]}
      results={[
        { value: "90%", label: "Manual steps eliminated" },
        { value: "14 days", label: "Average time to live" },
        { value: "99.5%", label: "Uptime reliability" },
        { value: "12x", label: "Average ROI" },
      ]}
    />
  );
}
