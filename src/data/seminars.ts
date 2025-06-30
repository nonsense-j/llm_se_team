export interface Seminar {
  id: string;
  title: string;
  date: string; // ISO date string
  time: string;
  participant: string;
  location: string;
  description: string;
  preparation?: string[];
  references?: string[];
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
    title: 'Large Language Models在代码生成中的应用与挑战',
    date: '2025-07-02',
    time: '14:00-17:00',
    participant: 'LLM&SE全体成员',
    location: '会议室A',
    description: '本次研讨会将深入探讨大语言模型在自动代码生成领域的最新进展，包括模型架构优化、训练策略改进以及在实际软件开发中的应用案例。我们将分析当前技术的局限性，讨论未来的发展方向，并探索如何提高代码生成的准确性和实用性。',
    preparation: [
      '阅读论文：《Large Language Models for Code Generation: A Comprehensive Survey》',
      '准备分享：每人准备一个代码生成的实际案例',
      '思考问题：当前LLM代码生成面临的主要挑战是什么？'
    ],
    references: [
      'Large Language Models for Code Generation: A Comprehensive Survey',
      'CodeT5: Identifier-aware Unified Pre-trained Encoder-Decoder Models',
      'GitHub Copilot技术报告'
    ],
    additionalNotes: [
      '论文阅读说明：研讨会论文只需要通读，重点在于理解论文处理什么任务，用了什么特别的方法',
      '论文分享要求：围绕动机、任务、方法总览、重点实验结果大致介绍。分享形式不限，可以自己制作精简PPT、使用论文PPT、直接使用论文或者阅读笔记文档',
      '讨论参与：鼓励大家积极提问和分享自己的见解，营造良好的学术讨论氛围',
      '时间安排：每人分享时间控制在15-20分钟，留出充足时间进行讨论'
    ]
  },
  {
    id: '2',
    title: '软件漏洞自动检测技术研究进展',
    date: '2025-06-25',
    time: '12:00-17:00',
    participant: 'LLM&SE全体成员',
    location: '在线会议',
    description: '探讨基于机器学习和深度学习的软件漏洞自动检测技术，分析静态分析与动态分析的结合方法，讨论如何提高漏洞检测的准确率和覆盖率。',
    preparation: [
      '阅读论文：《Automated Vulnerability Detection in Open Source Software》',
      '了解常见的软件漏洞类型',
      '准备讨论：现有检测工具的优缺点分析'
    ],
    references: [
      'Automated Vulnerability Detection in Open Source Software',
      'Deep Learning for Vulnerability Detection: A Survey',
      'Static Analysis Tools Comparison Report'
    ],
    additionalNotes: [
      '论文阅读说明：重点关注论文中提到的检测方法和实验设计',
      '技术准备：建议提前了解相关的静态分析工具，如SonarQube、Checkmarx等',
      '案例分析：准备1-2个实际的漏洞检测案例进行讨论'
    ]
  }
];