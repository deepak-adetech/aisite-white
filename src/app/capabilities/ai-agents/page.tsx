"use client";
import { Bot, Brain, MessageSquare, Plug } from "lucide-react";
import SolutionPage from "@/components/SolutionPage";

export default function AIAgents() {
  return (
    <SolutionPage
      tag="AI Agents"
      title="Autonomous digital workers that"
      titleGradient="think, decide, and act"
      subtitle="Not chatbots. Not rule-based bots. Real AI agents that understand context, reason through complexity, take actions in your systems, and learn from outcomes."
      pains={[
        { title: "Chatbots that can't actually help", description: "Your current bot answers FAQs but can't resolve tickets, process returns, or take any real action in your systems." },
        { title: "Tasks requiring judgment", description: "Some work needs a human because it requires understanding context, making decisions, and handling exceptions. Until now." },
        { title: "Scaling expertise is impossible", description: "Your best people's knowledge is locked in their heads. You can't clone them, and training new hires takes months." },
        { title: "24/7 coverage costs a fortune", description: "Customer support, monitoring, and operations don't stop at 5pm. But staffing around the clock breaks the budget." },
        { title: "Inconsistent quality", description: "Different people handle the same process differently. Output quality varies wildly depending on who's working." },
        { title: "Knowledge silos", description: "Critical information lives in emails, docs, and people's heads. No one has the full picture." },
      ]}
      solutions={[
        { icon: Bot, title: "Custom AI Agents", description: "Purpose-built agents that handle specific roles in your organization. They access your tools, follow your processes, and escalate intelligently." },
        { icon: Brain, title: "Reasoning & Decision Making", description: "Agents that don't just follow scripts — they understand context, weigh options, and make judgments. Powered by the latest LLMs, tuned for your domain." },
        { icon: MessageSquare, title: "Multi-Channel Deployment", description: "Deploy agents across email, chat, Slack, phone, and internal tools. Same intelligence, every channel your team and customers use." },
        { icon: Plug, title: "Deep System Integration", description: "Agents that don't just talk — they act. Process orders, update CRMs, file tickets, send invoices. Connected to your entire tool stack." },
      ]}
      workflows={[
        { label: "Customer support resolution", before: "45 min avg response", after: "Under 2 minutes" },
        { label: "Lead qualification", before: "6 hours to respond", after: "90 seconds, personalized" },
        { label: "Document review", before: "2 days per batch", after: "Minutes with 99% accuracy" },
        { label: "Knowledge retrieval", before: "Search + ask 3 people", after: "Instant, contextual answers" },
      ]}
      results={[
        { value: "80%", label: "Issues auto-resolved" },
        { value: "24/7", label: "Availability" },
        { value: "99%", label: "Consistency" },
        { value: "$12K", label: "Saved per month (avg)" },
      ]}
    />
  );
}
