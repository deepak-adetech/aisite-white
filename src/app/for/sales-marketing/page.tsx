"use client";
import { Zap, MessageSquare, BarChart3, Target } from "lucide-react";
import SolutionPage from "@/components/SolutionPage";

export default function SalesMarketing() {
  return (
    <SolutionPage
      tag="Sales & Marketing"
      title="Turn your pipeline into a"
      titleGradient="revenue machine"
      subtitle="Lead response times, personalization at scale, CRM hygiene, campaign analysis — the busywork that keeps your sales and marketing teams from actually selling."
      pains={[
        { title: "Slow lead response", description: "Inbound leads wait 6+ hours for a reply. By then they've already talked to your competitor." },
        { title: "CRM data decay", description: "Your CRM is 40% outdated. Reps don't update it because it takes too long, so forecasts are fiction." },
        { title: "Generic outreach", description: "Every prospect gets the same templated email because personalizing at scale is impossible manually." },
        { title: "Campaign analysis paralysis", description: "You're running 15 campaigns but can't tell which ones actually drive pipeline because the data lives in 6 tools." },
        { title: "Lead qualification guesswork", description: "Reps waste time on unqualified leads while hot prospects go cold in the queue." },
        { title: "Content creation bottleneck", description: "Marketing needs 50 pieces of content per month but the team can only produce 15 without burning out." },
      ]}
      solutions={[
        { icon: Zap, title: "Instant Lead Response System", description: "Every inbound lead gets scored, enriched, routed, and responded to within 90 seconds — with personalized messaging based on their company and behavior." },
        { icon: MessageSquare, title: "AI Sales Assistant", description: "An agent that enriches CRM records, drafts follow-ups, prepares meeting briefs, and keeps your pipeline data fresh. Reps sell, AI handles the admin." },
        { icon: BarChart3, title: "Unified Campaign Analytics", description: "Pull data from every marketing platform into one dashboard. See which campaigns drive pipeline, not just clicks. Attribution that actually works." },
        { icon: Target, title: "Intelligent Lead Scoring", description: "AI that learns your ideal customer profile and scores leads based on fit, intent, and behavior — not just form fills. Your reps only talk to qualified prospects." },
      ]}
      workflows={[
        { label: "Lead response time", before: "6+ hours", after: "90 seconds" },
        { label: "CRM data accuracy", before: "~60%", after: "95%+" },
        { label: "Personalized outreach", before: "10 emails/day manual", after: "500/day automated" },
        { label: "Campaign reporting", before: "2 days to compile", after: "Real-time dashboard" },
      ]}
      results={[
        { value: "3.2x", label: "More meetings booked" },
        { value: "90s", label: "Lead response time" },
        { value: "47%", label: "Pipeline increase" },
        { value: "$0", label: "New headcount needed" },
      ]}
    />
  );
}
