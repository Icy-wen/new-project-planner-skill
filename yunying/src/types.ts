export type Platform = "xiaohongshu" | "wechat" | "douyin" | "bilibili";

export type DraftStatus =
  | "needs_review"
  | "approved"
  | "scheduled"
  | "rejected";

export interface BrandProfile {
  name: string;
  category: string;
  audience: string;
  tone: string;
  offer: string;
  bannedTerms: string[];
  guardrails: string[];
}

export interface TrendCluster {
  id: string;
  title: string;
  platforms: Platform[];
  summary: string;
  topic: string;
  format: string;
  freshness: number;
  brandFit: number;
  risk: number;
  examples: string[];
}

export interface ContentDraft {
  id: string;
  trendId: string;
  platform: Platform;
  status: DraftStatus;
  title: string;
  hook: string;
  body: string;
  hashtags: string[];
  rationale: string;
  riskNotes: string[];
  scheduledFor?: string;
}

export interface ContentMetric {
  platform: Platform;
  title: string;
  views: number;
  likes: number;
  comments: number;
  saves: number;
  shares: number;
  follows: number;
  topic: string;
}

export interface Retrospective {
  headline: string;
  wins: string[];
  misses: string[];
  tomorrow: string[];
  confidence: "low" | "medium" | "high";
}
