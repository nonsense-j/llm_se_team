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
    id: '2',
    title: 'Vulrule库API安全规则挖掘方法讨论',
    date: '2025-07-02',
    time: '14:00 - 18:00',
    participant: 'LLM&SE全员',
    location: '337会议室',
    description: '了解Vulrule中安全规则的类型以及使用场景，讨论Vulrule库中API安全规则的自动化挖掘工具和方法。',
    preparation: [
      '网站了解（全体成员）：熟悉了解VulRule网站内容和用处，了解安全规则使用场景',
      '论文摘要了解（全体成员）：了解论文摘要，便于讨论',
      '论文分享分工：APlSpecGen-刘珺；ChatDetector-李知霖；GPTAid-孙天天；AURC-计理强'
    ],
    references: [
      'API Security Rule Mining in Large-Scale Software Systems',
      'Static Analysis Techniques for Vulnerability Detection',
      'Machine Learning Approaches to Code Security Assessment',
      'Automated Security Rule Discovery in Software Libraries',
      'Program Analysis for API Misuse Detection'
    ],
    additionalNotes: addNotes
  },
  {
    id: '1',
    title: 'Large Language Models在代码生成中的应用与挑战',
    date: '2025-07-02',
    time: '14:00-18:00',
    participant: 'LLM&SE全体成员',
    location: '会议室337',
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
    additionalNotes: addNotes
  }
];