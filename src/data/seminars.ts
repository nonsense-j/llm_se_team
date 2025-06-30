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

export const seminars: Seminar[] = [
  {
    id: '1',
    title: 'Large Language Models在代码生成中的应用与挑战',
    date: '2024-12-20',
    time: '14:00-16:00',
    participant: '张伟, 李明, 王磊',
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
    date: '2024-12-18',
    time: '10:00-12:00',
    participant: '陈宇, 刘建',
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
  },
  {
    id: '3',
    title: '智能测试用例生成方法探索',
    date: '2024-12-15',
    time: '15:30-17:30',
    participant: '王磊, 周慧, 赵敏',
    location: '会议室B',
    description: '研究基于强化学习的智能测试用例生成方法，探讨如何利用历史测试数据提高测试覆盖率，分析不同生成策略的效果和适用场景。',
    preparation: [
      '阅读论文：《Intelligent Test Case Generation Using Reinforcement Learning》',
      '复习强化学习基础概念',
      '准备分享：测试用例生成的实践经验'
    ],
    references: [
      'Intelligent Test Case Generation Using Reinforcement Learning',
      'Automated Test Generation: A Survey',
      'Reinforcement Learning in Software Testing'
    ],
    additionalNotes: [
      '理论基础：建议复习强化学习的基本概念，特别是Q-learning和策略梯度方法',
      '实践准备：如果有相关的测试框架使用经验，可以准备分享',
      '讨论重点：重点讨论如何评估测试用例的质量和有效性'
    ]
  },
  {
    id: '4',
    title: '代码审查自动化技术发展',
    date: '2024-12-12',
    time: '09:00-11:00',
    participant: '李明, 张伟',
    location: '会议室A',
    description: '探讨自然语言处理在代码审查中的应用，分析自动化代码审查系统的设计原理，讨论如何提供有意义的代码质量反馈。',
    preparation: [
      '阅读论文：《Code Review Automation with Natural Language Processing》',
      '了解主流代码审查工具',
      '思考：理想的自动化代码审查系统应该具备哪些功能？'
    ],
    references: [
      'Code Review Automation with Natural Language Processing',
      'Automated Code Review: A Systematic Literature Review',
      'GitHub Pull Request Analysis Report'
    ],
    additionalNotes: [
      '工具体验：建议提前体验一些自动化代码审查工具，如CodeClimate、DeepCode等',
      '案例收集：收集一些代码审查中常见的问题类型和解决方案',
      '技术对比：准备对比不同NLP技术在代码理解方面的优劣'
    ]
  },
  {
    id: '5',
    title: '程序合成与大语言模型结合研究',
    date: '2024-12-10',
    time: '14:00-16:00',
    participant: '刘建, 王磊, 陈宇',
    location: '在线会议',
    description: '研究大语言模型在程序合成中的应用，探讨从自然语言规范生成正确高效代码的方法，分析当前技术的优势和局限性。',
    preparation: [
      '阅读论文：《Program Synthesis with Large Language Models》',
      '了解程序合成的基本概念',
      '准备讨论：LLM在程序合成中的独特优势'
    ],
    references: [
      'Program Synthesis with Large Language Models',
      'Neural Program Synthesis: A Survey',
      'OpenAI Codex Technical Report'
    ],
    additionalNotes: [
      '概念理解：重点理解程序合成与代码生成的区别和联系',
      '技术分析：分析不同LLM架构对程序合成效果的影响',
      '应用场景：讨论程序合成在实际软件开发中的应用前景'
    ]
  },
  {
    id: '6',
    title: '软件维护预测的机器学习方法',
    date: '2024-12-08',
    time: '10:30-12:30',
    participant: '周慧, 赵敏',
    location: '会议室B',
    description: '开发基于机器学习的软件维护需求预测框架，帮助开发团队更有效地分配资源，预防潜在问题的发生。',
    preparation: [
      '阅读论文：《Machine Learning for Software Maintenance Prediction》',
      '了解软件维护的类型和特点',
      '准备案例：软件维护中的实际问题'
    ],
    references: [
      'Machine Learning for Software Maintenance Prediction',
      'Predictive Models in Software Engineering',
      'Software Maintenance Cost Estimation'
    ],
    additionalNotes: [
      '数据准备：了解软件维护预测需要哪些类型的数据',
      '模型选择：讨论不同机器学习模型在维护预测中的适用性',
      '评估指标：学习如何评估维护预测模型的效果'
    ]
  },
  {
    id: '7',
    title: '深度学习在缺陷定位中的应用',
    date: '2024-12-05',
    time: '15:00-17:00',
    participant: '杨晨, 吴晓丽',
    location: '会议室A',
    description: '研究深度学习在自动化缺陷定位中的新方法，显著减少调试时间，提高软件质量。',
    preparation: [
      '阅读论文：《Deep Learning Approaches for Bug Localization》',
      '了解传统缺陷定位方法',
      '思考：深度学习相比传统方法的优势在哪里？'
    ],
    references: [
      'Deep Learning Approaches for Bug Localization',
      'Fault Localization: A Survey',
      'Automated Debugging Techniques'
    ],
    additionalNotes: [
      '技术对比：准备对比深度学习与传统缺陷定位方法的优缺点',
      '实验设计：理解论文中的实验设计和评估方法',
      '工具实践：如果可能，尝试使用相关的缺陷定位工具'
    ]
  },
  {
    id: '8',
    title: 'API文档自动生成技术研究',
    date: '2024-12-03',
    time: '09:30-11:30',
    participant: '黄梅, 徐刚',
    location: '在线会议',
    description: '提出使用自然语言处理和代码分析技术自动生成全面API文档的系统。',
    preparation: [
      '阅读论文：《Automated API Documentation Generation》',
      '了解API文档的重要性和现状',
      '准备讨论：好的API文档应该包含哪些内容？'
    ],
    references: [
      'Automated API Documentation Generation',
      'API Documentation Best Practices',
      'Natural Language Processing for Code Documentation'
    ],
    additionalNotes: [
      '文档标准：了解业界API文档的标准和最佳实践',
      '工具调研：调研现有的API文档生成工具及其特点',
      '质量评估：讨论如何评估自动生成文档的质量'
    ]
  },
  {
    id: '9',
    title: '代码克隆检测与重构建议',
    date: '2024-11-30',
    time: '14:30-16:30',
    participant: '李强, 王芳',
    location: '会议室B',
    description: '研究先进的代码克隆检测算法，并提供智能重构建议，提高代码质量和可维护性。',
    preparation: [
      '了解代码克隆的类型和危害',
      '调研现有的代码克隆检测工具',
      '思考：如何平衡检测精度和性能？'
    ],
    references: [
      'Code Clone Detection: A Survey',
      'Automated Refactoring Techniques',
      'Software Quality Metrics'
    ],
    additionalNotes: [
      '分类理解：深入理解不同类型代码克隆的特点和检测难度',
      '工具比较：比较不同代码克隆检测工具的优缺点',
      '重构策略：讨论针对不同类型克隆的重构策略'
    ]
  },
  {
    id: '10',
    title: '软件架构演化分析方法',
    date: '2024-11-28',
    time: '10:00-12:00',
    participant: '张华, 刘洋',
    location: '会议室A',
    description: '分析软件架构随时间的演化模式，识别架构腐化的早期信号，为架构重构提供指导。',
    preparation: [
      '了解软件架构演化的概念',
      '学习架构质量评估方法',
      '准备案例：实际项目的架构演化经历'
    ],
    references: [
      'Software Architecture Evolution Analysis',
      'Architecture Decay Detection',
      'Refactoring at Scale'
    ],
    additionalNotes: [
      '理论基础：理解软件架构演化的理论基础和驱动因素',
      '度量方法：学习架构质量的度量方法和指标',
      '实践经验：分享或收集架构演化的实际案例'
    ]
  }
];