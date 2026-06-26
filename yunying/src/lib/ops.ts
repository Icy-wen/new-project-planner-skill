import type { BrandProfile, ContentDraft, ContentMetric, Platform, Retrospective, TrendCluster } from "@/types";

const platformCopy: Record<Platform, {
  title: string;
  hook: string;
  body: string;
  hashtags: string[];
}> = {
  xiaohongshu: {
    title: "这次不是硬撑，下午补能可以更轻一点",
    hook: "下午三点开始走神的人，真的不是少数。",
    body: "把热点里的疲惫感改成一个可执行的小场景：会议前、通勤后、久坐一下午。先补水，再给自己一个低糖、轻负担的补给选择。重点不是制造焦虑，而是帮用户把节奏拿回来。",
    hashtags: ["办公室日常", "低糖饮品", "下午补给", "精力管理"]
  },
  wechat: {
    title: "从一个热议话题，看懂白领下午补能的新需求",
    hook: "热点背后往往不是单点情绪，而是高频生活场景的变化。",
    body: "建议文章结构：热点观察、用户痛点、品牌观点、轻负担补给方法、产品场景化 CTA。语气保持专业克制，强调选择建议而不是功效承诺。",
    hashtags: ["品牌观察", "低糖生活", "内容运营"]
  },
  douyin: {
    title: "下午三点的你，是不是也这样？",
    hook: "前三秒：镜头切到电脑前的人突然失焦，字幕：15:07，又开始降频。",
    body: "脚本：1. 快速演出精力断崖；2. 点出别急着用高负担方式硬扛；3. 展示抽屉里的青岚；4. 结尾提示：下午补能，轻一点也够用。",
    hashtags: ["打工人日常", "办公室好物", "低糖饮品"]
  },
  bilibili: {
    title: "我试着把下午三点的低效率，拆成了 4 个可调整的小变量",
    hook: "这不是鸡血视频，我们只聊普通工作日里能做的小调整。",
    body: "视频大纲：开场共鸣、午后状态拆解、饮食和补水变量、补给选择、品牌露出、总结。适合 3-5 分钟中视频，用理性语气降低广告感。",
    hashtags: ["工作效率", "生活方式", "健康饮品"]
  }
};

export function createDraftPackage(
  trend: TrendCluster,
  brand: BrandProfile,
  existingCount: number
): ContentDraft[] {
  const platforms: Platform[] = ["xiaohongshu", "wechat", "douyin", "bilibili"];

  return platforms.map((platform, index) => {
    const copy = platformCopy[platform];

    return {
      id: `draft-${trend.id}-${Date.now()}-${index + existingCount}`,
      trendId: trend.id,
      platform,
      status: "needs_review",
      title: `${copy.title}：${trend.topic}版`,
      hook: copy.hook,
      body: `${copy.body}\n\n品牌化处理：围绕「${brand.offer}」表达，不夸大效果，保留热点「${trend.title}」的用户情绪入口。`,
      hashtags: copy.hashtags,
      rationale: `该草稿把「${trend.title}」改写成 ${brand.name} 可使用的 ${trend.format}，品牌契合度 ${trend.brandFit}。`,
      riskNotes: trend.risk > 30 ? ["话题有价值观表达风险，发布前需要复核措辞"] : ["常规人工复核即可"]
    };
  });
}

export function buildRetrospective(metrics: ContentMetric[]): Retrospective {
  const sorted = [...metrics].sort((a, b) => engagementRate(b) - engagementRate(a));
  const top = sorted[0];
  const bottom = sorted[sorted.length - 1];
  const totalViews = metrics.reduce((sum, item) => sum + item.views, 0);
  const totalFollows = metrics.reduce((sum, item) => sum + item.follows, 0);

  return {
    headline: `昨日 ${metrics.length} 条内容合计 ${formatNumber(totalViews)} 次曝光，新增关注 ${totalFollows}，建议明天继续押注「${top.topic}」。`,
    wins: [
      `「${top.title}」互动率最高，说明 ${top.topic} 仍然有明确用户共鸣。`,
      `收藏和分享集中在方法型内容，明天可以继续使用清单、拆解、避坑格式。`
    ],
    misses: [
      `「${bottom.title}」相对弱，建议减少纯观点表达，增加具体生活场景。`,
      "样本量仍偏小，暂不做绝对结论，只调整 24 小时内的选题权重。"
    ],
    tomorrow: [
      `优先生成 8 条「${top.topic}」相关草稿，覆盖小红书和抖音。`,
      "公众号保留一条深度解释型内容，承接低糖/补给的品牌可信度。",
      "B 站脚本增加真实工作日变量，降低广告感，提高完播动机。"
    ],
    confidence: metrics.length >= 3 ? "medium" : "low"
  };
}

export function engagementRate(metric: ContentMetric) {
  if (metric.views === 0) return 0;
  return (metric.likes + metric.comments * 2 + metric.saves * 1.5 + metric.shares * 2) / metric.views;
}

export function formatNumber(value: number) {
  if (value >= 10000) {
    return `${(value / 10000).toFixed(1)}万`;
  }

  return String(value);
}
