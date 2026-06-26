"use client";

import {
  AlertTriangle,
  BarChart3,
  CalendarClock,
  Check,
  ClipboardList,
  Download,
  Gauge,
  LayoutDashboard,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  WandSparkles,
  X
} from "lucide-react";
import { useMemo, useState } from "react";
import { brandProfile, dailyMetrics, platformLabels, seedDrafts, trendClusters } from "@/data/fixtures";
import { buildRetrospective, createDraftPackage, formatNumber } from "@/lib/ops";
import type { ContentDraft, DraftStatus, TrendCluster } from "@/types";

const navItems = [
  { label: "指挥台", icon: LayoutDashboard, active: true },
  { label: "趋势雷达", icon: TrendingUp, active: false },
  { label: "审批队列", icon: ClipboardList, active: false },
  { label: "内容日历", icon: CalendarClock, active: false },
  { label: "复盘报告", icon: BarChart3, active: false }
];

const statusLabels: Record<DraftStatus, string> = {
  needs_review: "待审批",
  approved: "已批准",
  scheduled: "已排期",
  rejected: "已拒绝"
};

function statusClass(status: DraftStatus) {
  if (status === "approved" || status === "scheduled") return "badge teal";
  if (status === "rejected") return "badge amber";
  return "badge";
}

export default function Home() {
  const [selectedTrendId, setSelectedTrendId] = useState(trendClusters[0].id);
  const [drafts, setDrafts] = useState<ContentDraft[]>(seedDrafts);
  const [lastRun, setLastRun] = useState("09:30");

  const selectedTrend = useMemo(
    () => trendClusters.find((trend) => trend.id === selectedTrendId) ?? trendClusters[0],
    [selectedTrendId]
  );

  const retrospective = useMemo(() => buildRetrospective(dailyMetrics), []);
  const approvedCount = drafts.filter((draft) => draft.status === "approved" || draft.status === "scheduled").length;
  const scheduledDrafts = drafts.filter((draft) => draft.status === "scheduled");

  function generateDrafts(trend: TrendCluster) {
    setDrafts((current) => [...createDraftPackage(trend, brandProfile, current.length), ...current]);
    setLastRun(new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" }));
  }

  function updateStatus(id: string, status: DraftStatus) {
    setDrafts((current) =>
      current.map((draft) => {
        if (draft.id !== id) return draft;

        return {
          ...draft,
          status,
          scheduledFor: status === "scheduled" ? "明天 10:30" : draft.scheduledFor
        };
      })
    );
  }

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand-mark">
          <div className="brand-icon" aria-hidden="true">
            <Sparkles size={18} />
          </div>
          <div className="brand-copy">
            <p className="brand-title">AutoOps</p>
            <p className="brand-subtitle">内容运营智能体</p>
          </div>
        </div>

        <nav className="nav-list" aria-label="主导航">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button className={`nav-item ${item.active ? "active" : ""}`} key={item.label} type="button">
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <strong>{brandProfile.name}</strong>
          <span>{brandProfile.category}</span>
          <span>人工审批后发布</span>
        </div>
      </aside>

      <section className="main">
        <header className="topbar">
          <div>
            <h1>内容运营指挥台</h1>
            <p>趋势发现、品牌改写、审批排期和每日复盘集中处理</p>
          </div>
          <div className="topbar-actions">
            <button className="btn" type="button" title="刷新趋势">
              <RefreshCw size={16} />
              刷新趋势
            </button>
            <button className="btn primary" type="button" onClick={() => generateDrafts(selectedTrend)}>
              <WandSparkles size={16} />
              生成四平台草稿
            </button>
          </div>
        </header>

        <div className="content">
          <section className="metric-grid" aria-label="今日运营概览">
            <Metric icon={<TrendingUp size={18} />} label="趋势候选" value={trendClusters.length} detail="4 个平台输入" />
            <Metric icon={<ClipboardList size={18} />} label="草稿队列" value={drafts.length} detail={`${approvedCount} 条已通过`} />
            <Metric icon={<Gauge size={18} />} label="预估节省" value="2.4h" detail="按今日草稿量估算" />
            <Metric icon={<BarChart3 size={18} />} label="昨日曝光" value={formatNumber(dailyMetrics.reduce((sum, item) => sum + item.views, 0))} detail={`复盘置信度：${retrospective.confidence}`} />
          </section>

          <section className="workspace-grid">
            <div className="stack">
              <section className="section">
                <div className="section-header">
                  <div>
                    <h2>趋势雷达</h2>
                    <p>选择一个热点，智能体会改写成品牌可用内容包</p>
                  </div>
                  <span className="badge teal">上次运行 {lastRun}</span>
                </div>
                <div className="section-body">
                  <table className="trend-table">
                    <thead>
                      <tr>
                        <th>热点</th>
                        <th>平台</th>
                        <th>契合</th>
                        <th>风险</th>
                        <th>动作</th>
                      </tr>
                    </thead>
                    <tbody>
                      {trendClusters.map((trend) => (
                        <tr className={`trend-row ${trend.id === selectedTrendId ? "selected" : ""}`} key={trend.id}>
                          <td>
                            <div className="trend-title">{trend.title}</div>
                            <div className="trend-summary">{trend.summary}</div>
                          </td>
                          <td>
                            <div className="platforms">
                              {trend.platforms.map((platform) => (
                                <span className="badge" key={platform}>
                                  {platformLabels[platform]}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td>
                            <span className="score good">{trend.brandFit}</span>
                          </td>
                          <td>
                            <span className={`score ${trend.risk > 30 ? "warn" : "risk"}`}>{trend.risk}</span>
                          </td>
                          <td>
                            <button className="btn icon" type="button" title="选择热点" onClick={() => setSelectedTrendId(trend.id)}>
                              <Target size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="section">
                <div className="section-header">
                  <div>
                    <h2>审批队列</h2>
                    <p>AI 生成只进入待审批状态，发布前保留人工确认</p>
                  </div>
                  <span className="badge">{drafts.filter((draft) => draft.status === "needs_review").length} 待处理</span>
                </div>
                <div className="section-body">
                  <div className="draft-list">
                    {drafts.slice(0, 5).map((draft) => (
                      <article className="draft" key={draft.id}>
                        <div className="draft-head">
                          <div>
                            <span className="badge">{platformLabels[draft.platform]}</span>
                            <span className={statusClass(draft.status)}>{statusLabels[draft.status]}</span>
                          </div>
                          {draft.riskNotes.length > 0 ? (
                            <span className="score warn" title={draft.riskNotes.join("；")}>
                              <AlertTriangle size={14} />
                            </span>
                          ) : null}
                        </div>
                        <h3>{draft.title}</h3>
                        <p>{draft.hook}</p>
                        <p>{draft.body}</p>
                        <div className="draft-actions">
                          <button className="btn primary" type="button" onClick={() => updateStatus(draft.id, "approved")}>
                            <Check size={16} />
                            批准
                          </button>
                          <button className="btn" type="button" onClick={() => updateStatus(draft.id, "scheduled")}>
                            <CalendarClock size={16} />
                            排期
                          </button>
                          <button className="btn danger" type="button" onClick={() => updateStatus(draft.id, "rejected")}>
                            <X size={16} />
                            拒绝
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            <div className="stack">
              <section className="section">
                <div className="section-header">
                  <div>
                    <h2>品牌脑</h2>
                    <p>生成、评分和复盘都引用这一组品牌约束</p>
                  </div>
                  <ShieldCheck size={20} color="var(--teal)" />
                </div>
                <div className="section-body split">
                  <div className="brief">
                    <h3>{brandProfile.name}</h3>
                    <p>{brandProfile.audience}</p>
                    <p>{brandProfile.tone}</p>
                  </div>
                  <div className="brief">
                    <h3>发布护栏</h3>
                    <ul>
                      {brandProfile.guardrails.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section className="section">
                <div className="section-header">
                  <div>
                    <h2>内容日历</h2>
                    <p>已排期内容会进入明日执行视图</p>
                  </div>
                  <button className="btn icon" type="button" title="导出排期">
                    <Download size={16} />
                  </button>
                </div>
                <div className="section-body">
                  {scheduledDrafts.length > 0 ? (
                    <div className="calendar-list">
                      {scheduledDrafts.map((draft) => (
                        <div className="calendar-item" key={draft.id}>
                          <div className="date-chip">{draft.scheduledFor}</div>
                          <div>
                            <span className="badge">{platformLabels[draft.platform]}</span>
                            <div className="trend-title">{draft.title}</div>
                            <div className="trend-summary">{draft.hook}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="empty">还没有排期内容。批准草稿后点击排期，就会出现在这里。</div>
                  )}
                </div>
              </section>

              <section className="section">
                <div className="section-header">
                  <div>
                    <h2>每日复盘</h2>
                    <p>根据昨日数据调整明日选题和平台权重</p>
                  </div>
                  <span className="badge amber">样本中等</span>
                </div>
                <div className="section-body retrospective">
                  <div className="retrospective-lead">{retrospective.headline}</div>
                  <InsightGroup title="有效信号" icon={<Check size={15} />} items={retrospective.wins} />
                  <InsightGroup title="需要修正" icon={<AlertTriangle size={15} />} items={retrospective.misses} />
                  <InsightGroup title="明日策略" icon={<Sparkles size={15} />} items={retrospective.tomorrow} />
                </div>
              </section>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

function Metric({
  icon,
  label,
  value,
  detail
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  detail: string;
}) {
  return (
    <div className="metric">
      <div className="metric-top">
        <span>{label}</span>
        {icon}
      </div>
      <strong>{value}</strong>
      <span>{detail}</span>
    </div>
  );
}

function InsightGroup({
  title,
  icon,
  items
}: {
  title: string;
  icon: React.ReactNode;
  items: string[];
}) {
  return (
    <div>
      <span className="badge teal">{title}</span>
      <div className="insight-list" style={{ marginTop: 8 }}>
        {items.map((item) => (
          <div className="insight" key={item}>
            {icon}
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
