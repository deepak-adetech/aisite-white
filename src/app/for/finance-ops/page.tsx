"use client";
import { FileText, Calculator, ShieldCheck, BarChart3 } from "lucide-react";
import SolutionPage from "@/components/SolutionPage";

export default function FinanceOps() {
  return (
    <SolutionPage
      tag="Finance & Accounting"
      title="Stop your finance team from"
      titleGradient="drowning in spreadsheets"
      subtitle="Invoice processing, reconciliation, expense reports, compliance checks — your finance team spends 70% of their week on work AI handles in minutes. We fix that."
      pains={[
        { title: "Manual invoice entry", description: "Your AP team copies data from PDFs into the ERP line by line. It takes days per batch and errors slip through." },
        { title: "Reconciliation nightmares", description: "Matching bank statements to transactions takes hours of cross-referencing across multiple systems." },
        { title: "Expense report bottleneck", description: "Employees submit expenses, managers approve weeks later, finance processes them months later." },
        { title: "Compliance anxiety", description: "Regulatory requirements change constantly and manual checks can't keep up with the volume." },
        { title: "Month-end close marathon", description: "The close process takes 10+ days because every step depends on manual data gathering." },
        { title: "Reporting takes forever", description: "Pulling numbers from multiple systems into a single report is a multi-day manual effort." },
      ]}
      solutions={[
        { icon: FileText, title: "Invoice AI Pipeline", description: "Extracts data from any invoice format (PDF, scan, email), validates against POs, flags discrepancies, and posts to your ERP automatically. 99.4% accuracy." },
        { icon: Calculator, title: "Automated Reconciliation", description: "AI matches transactions across bank feeds, payment platforms, and your GL in real-time. Flags exceptions for human review only." },
        { icon: ShieldCheck, title: "Compliance Automation", description: "Continuous monitoring against regulatory rules. Automatically flags violations, generates audit trails, and produces compliance reports." },
        { icon: BarChart3, title: "Financial Reporting Agent", description: "Pulls data from all your systems, builds standardized reports, and delivers them on schedule. Custom dashboards with real-time data." },
      ]}
      workflows={[
        { label: "Invoice processing", before: "4 days per batch", after: "12 minutes" },
        { label: "Month-end close", before: "10–12 days", after: "3 days" },
        { label: "Expense reports", before: "3 weeks end-to-end", after: "48 hours" },
        { label: "Bank reconciliation", before: "Full day monthly", after: "15 minutes daily" },
      ]}
      results={[
        { value: "80%", label: "Cost reduction" },
        { value: "99.4%", label: "Accuracy rate" },
        { value: "12min", label: "Invoice processing" },
        { value: "3 days", label: "Month-end close" },
      ]}
    />
  );
}
