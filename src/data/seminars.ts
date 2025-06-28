export interface Seminar {
  id: string;
  title: string;
  date: string;
  time: string;
  participant: string;
  location: string;
  description: string;
  preparation?: string[];
  references?: string[];
  status: 'upcoming' | 'completed' | 'ongoing';
}

export const seminars: Seminar[] = [
  {
    id: '2',
    title: 'Vulrule库API安全规则挖掘方法讨论',
    date: '2025-07-02',
    time: '14:00 - 18:00',
    participant: 'LLM&SE全员',
    location: '337会议室',
    description: '了解Vulrule中安全规则的类型，讨论Vulrule库中API安全规则的自动化挖掘方法。',
    preparation: [
      '阅读Vulrule库官方文档和API说明',
      '了解基本的静态分析技术原理',
      '准备相关的代码示例和测试用例',
      '熟悉常见的API安全漏洞类型',
      '安装并配置Vulrule库开发环境'
    ],
    references: [
      'API Security Rule Mining in Large-Scale Software Systems',
      'Static Analysis Techniques for Vulnerability Detection',
      'Machine Learning Approaches to Code Security Assessment',
      'Automated Security Rule Discovery in Software Libraries',
      'Program Analysis for API Misuse Detection'
    ],
    status: 'upcoming'
  },
  {
    id: '1',
    title: '仓库级代码单元测试方法生成方法讨论',
    date: '2025-06-25',
    time: '14:00 - 18:00',
    participant: 'LLM&SE全员',
    location: '337会议室',
    description: '探讨基于LLM的仓库级代码单元测试方法生成方法，包括基于Prompt的方法和基于模型的方法。',
    status: 'completed'
  },
];