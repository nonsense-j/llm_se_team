export interface Seminar {
  id: string;
  title: string;
  date: string; // ISO date string
  time: string;
  participant: string;
  location: string;
  description: string;
  preparation?: string[];
  references?: { name: string; url: string; }[];
  additionalNotes?: string[]; // New field for 补充说明
}

const addNotes = [
      '论文阅读说明：研讨会论文只需要通读，重点在于理解论文处理什么任务，用了什么特别的方法',
      '论文分享要求：围绕动机、任务、方法总览、重点实验结果大致介绍。分享形式不限，可以自己制作精简PPT、使用论文PPT、直接使用论文或者阅读笔记文档，每人分享时间控制在10分钟以内，留出时间进行讨论',
      '讨论参与：参会同学尽量参与讨论，有啥不懂的可以直接问'
    ]

export const seminars: Seminar[] = [
  {
    id: '1',
    title: 'Vulrule库API安全规则挖掘方法讨论',
    date: '2025-07-02',
    time: '14:00 - 18:00',
    participant: 'LLM&SE全员',
    location: '337会议室',
    description: '了解Vulrule中安全规则的类型以及使用场景，讨论Vulrule库中API安全规则的自动化挖掘工具和方法。',
    preparation: [
      '网站了解（全体成员）：熟悉了解VulRule网站内容和用处，了解安全规则使用场景',
      '论文摘要了解（全体成员）：了解论文摘要，便于讨论',
      '论文通读及分享分工：APlSpecGen-刘珺；ChatDetector-李知霖；GPTAid-孙天天；AURC-计理强'
    ],
    references: [
      { name: 'VulRule Website | https://kaichen.org/vulrule', url: 'https://kaichen.org/vulrule' },
      { name: 'APISpecGen | Uncovering the iceberg from the tip: Generating API Specifications for Bug Detection via Specification Propagation Analysis', url: 'https://www.ndss-symposium.org/ndss-paper/uncovering-the-iceberg-from-the-tip-generating-api-specifications-for-bug-detection-via-specification-propagation-analysis/' },
      { name: 'AURC | AURC: Detecting Errors in Program Code and Documentation', url: 'https://www.usenix.org/conference/usenixsecurity23/presentation/hu' },
      { name: 'ChatDetector | The Midas Touch: Triggering the Capability of LLMs for RM-API Misuse Detection', url: 'https://www.ndss-symposium.org/ndss-paper/the-midas-touch-triggering-the-capability-of-llms-for-rm-api-misuse-detection/' },
      { name: 'GPTAid | Generating API Parameter Security Rules with LLM for API Misuse Detection', url: 'https://www.ndss-symposium.org/ndss-paper/generating-api-parameter-security-rules-with-llm-for-api-misuse-detection/' }
    ],
    additionalNotes: addNotes
  },
  {
    id: '2',
    title: '华为软工专项基金指南讨论',
    date: '2025-07-09',
    time: '14:00 - 18:00',
    participant: 'LLM&SE全员',
    location: '337会议室',
    description: '围绕华为CCF-华为胡杨林基金软件工程专题2025年度申报课题展开讨论，了解工业界当前科研关注点。',
    preparation: [
      '指南了解（全体成员）：下载指南说明材料，大致过一下各类课题，了解工业界关注的软工前沿关键问题',
      '特定课题讨论（全体成员）：重点关注A2课题（智能化代码缺陷检测技术）头脑风暴，结合已有工作和文献思考我们可以做什么，方便后续讨论'
    ],
    references: [
      { name: '启动申报微信公众号推文', url: 'https://mp.weixin.qq.com/s/BgQbSCCqi12wIWxbuU_AUg' },
      { name: '启动申报CCF官网推文', url: 'https://www.ccf.org.cn/Collaboration/Enterprise_Fund/News/hw/2025-07-04/846139.shtml?sessionid='},
      { name: 'PDF - 指南说明材料下载', url: 'https://www.ccf.org.cn/ccf/contentcore/resource/download?ID=8B0EFE09E563C34477C358833AB000593D7BBB4DB837FB06E57C395E995CE836'},
      ],
    additionalNotes: addNotes
  },
  {
    id: '3',
    title: '图神经网络应用于LLM&SE相关研究讨论',
    date: '2025-07-23',
    time: '14:00 - 18:00',
    participant: 'LLM&SE全员',
    location: '337会议室',
    description: '高航师兄会简单介绍一下图神经网络在LLM&SE相关领域中的应用，主要包括：图神经网络技术，图神经网络与LLM的代码漏洞识别，基于图的LLM的推理增强。大家可以一起讨论看看能不能结合着做一些SE领域其它的任务。',
    preparation: [
      '参与讨论的同学可以先了解一下GNN的相关基础知识',
      '也可以提前看一下高航师兄GNN+LLM的相关论文'
    ],
    references: [
      { name: '高航师兄的谷歌学术主页', url: 'https://scholar.google.com/citations?hl=zh-CN&user=gkK0P_kAAAAJ&view_op=list_works&sortby=pubdate' },
    ],
    additionalNotes: addNotes
  }
];