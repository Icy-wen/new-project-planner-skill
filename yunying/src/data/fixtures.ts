import type { BrandProfile, ContentDraft, ContentMetric, Platform, TrendCluster } from "@/types";

export const platformLabels: Record<Platform, string> = {
  xiaohongshu: "小红书",
  wechat: "公众号",
  douyin: "抖音",
  bilibili: "B 站"
};

export const brandProfile: BrandProfile = {
  name: "青岚补给站",
  category: "新消费健康饮品",
  audience: "25-35 岁城市白领，关注精力管理、低糖饮食和高效生活方式",
  tone: "专业、克制、可信，像一位懂营养也懂工作节奏的运营顾问",
  offer: "低糖植物基能量饮，主打下午低负担补能",
  bannedTerms: ["治愈", "保证瘦", "医学疗效", "替代正餐"],
  guardrails: [
    "避免医疗功效承诺",
    "保留原始热点来源和改写理由",
    "所有内容发布前必须人工审批",
    "不使用夸张或恐吓式健康表达"
  ]
};

export const trendClusters: TrendCluster[] = [
  {
    id: "trend-1",
    title: "下午三点精力断崖",
    platforms: ["xiaohongshu", "douyin", "bilibili"],
    summary: "白领用短视频和笔记吐槽下午三点犯困、咖啡依赖和低效率复工。",
    topic: "精力管理",
    format: "痛点共鸣 + 轻方法清单",
    freshness: 92,
    brandFit: 95,
    risk: 18,
    examples: ["三点半办公室集体静音", "咖啡续命失败的一天", "低糖补能不心慌"]
  },
  {
    id: "trend-2",
    title: "低糖饮食不是苦修",
    platforms: ["xiaohongshu", "wechat"],
    summary: "用户开始讨论低糖替代、配料表识别和不牺牲口感的健康选择。",
    topic: "低糖生活",
    format: "科普解释 + 选择指南",
    freshness: 86,
    brandFit: 91,
    risk: 26,
    examples: ["配料表 3 秒看懂", "不想戒甜但想控糖", "低糖饮料怎么选"]
  },
  {
    id: "trend-3",
    title: "通勤包里的应急补给",
    platforms: ["xiaohongshu", "bilibili"],
    summary: "城市通勤用户分享包内常备物，强调轻量、体面、临时救场。",
    topic: "通勤场景",
    format: "清单种草 + 使用场景",
    freshness: 78,
    brandFit: 84,
    risk: 12,
    examples: ["我的通勤包只有 5 件东西", "开会前 10 分钟救场", "轻负担办公室补给"]
  },
  {
    id: "trend-4",
    title: "反效率焦虑的一天",
    platforms: ["wechat", "bilibili"],
    summary: "内容创作者用长图文和中视频反思过度效率管理，提倡稳定节奏。",
    topic: "生活方式",
    format: "观点表达 + 品牌态度",
    freshness: 71,
    brandFit: 74,
    risk: 35,
    examples: ["不把自己榨干的效率", "补能不是压榨自己", "慢一点也能完成"]
  }
];

export const seedDrafts: ContentDraft[] = [
  {
    id: "draft-seed-1",
    trendId: "trend-1",
    platform: "xiaohongshu",
    status: "needs_review",
    title: "下午三点犯困，不一定是你不自律",
    hook: "如果你每天 15:00 都像被系统自动降频，先别急着再灌一杯咖啡。",
    body: "办公室精力断崖往往来自午餐负担、久坐和补水不足。今天的轻方案：先站起来走 3 分钟，再补水，最后选择低糖、轻负担的下午补给。青岚更适合放在抽屉里，帮你把下午节奏稳回来。",
    hashtags: ["下午三点", "低糖饮品", "办公室补给", "精力管理"],
    rationale: "热点与品牌下午补能定位高度一致，适合小红书痛点共鸣格式。",
    riskNotes: ["避免暗示产品解决医学疲劳问题"]
  },
  {
    id: "draft-seed-2",
    trendId: "trend-2",
    platform: "wechat",
    status: "approved",
    title: "低糖饮食不是苦修：普通人也能坚持的 4 个选择",
    hook: "控糖不等于和所有甜味告别，真正重要的是看懂选择。",
    body: "文章结构：1. 为什么低糖不该被理解成极端戒断；2. 配料表里优先看什么；3. 下午补给如何降低负担；4. 青岚如何用清爽口感服务高频工作场景。",
    hashtags: ["低糖生活", "配料表", "健康饮品"],
    rationale: "公众号适合承接更完整的科普和品牌解释。",
    riskNotes: ["需避免绝对化营养结论"]
  }
];

export const dailyMetrics: ContentMetric[] = [
  {
    platform: "xiaohongshu",
    title: "下午三点犯困，不一定是你不自律",
    views: 18200,
    likes: 1420,
    comments: 238,
    saves: 610,
    shares: 186,
    follows: 74,
    topic: "精力管理"
  },
  {
    platform: "wechat",
    title: "低糖饮食不是苦修：普通人也能坚持的 4 个选择",
    views: 8600,
    likes: 390,
    comments: 45,
    saves: 210,
    shares: 92,
    follows: 33,
    topic: "低糖生活"
  },
  {
    platform: "bilibili",
    title: "通勤包里的 5 件应急补给",
    views: 12600,
    likes: 730,
    comments: 98,
    saves: 284,
    shares: 66,
    follows: 41,
    topic: "通勤场景"
  }
];
