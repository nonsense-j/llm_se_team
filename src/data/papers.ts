export interface Paper {
  id: string;
  title: string;
  authors: string[];
  institute: string;
  abstract: string;
  keywords: string[];
  year: number;
  categories: string[];
  citations: number;
  url?: string;
  artifactUrl?: string;
  publication: string; // conference, journal or arxiv
  ccfRank: 'CCF-A' | 'CCF-B' | 'CCF-C' | 'CCF-N'; // CCF ranking
}

// Predefined categories for papers
export const PAPER_CATEGORIES = ["Code Generation", "Testing", "Security", "Analysis", "Maintenance", "Survey"];

export const papers: Paper[] = [
  {
    id: '1',
    title: 'Large Language Models for Code Generation: A Comprehensive Survey',
    authors: ['Zhang Wei', 'Li Ming', 'Wang Lei'],
    institute: 'Tsinghua University',
    abstract: 'This paper presents a comprehensive survey of large language models used for automatic code generation. We examine the current state-of-the-art models, their architectures, training methodologies, and performance metrics across various programming tasks.',
    keywords: ['LLM', 'Code Generation', 'Software Engineering', 'Neural Networks'],
    year: 2024,
    categories: ['Code Generation', 'Analysis'],
    citations: 234,
    url: 'https://example.com/papers/llm-code-generation-survey',
    artifactUrl: 'https://github.com/example/llm-code-survey',
    publication: 'TSE',
    ccfRank: 'CCF-A'
  },
  {
    id: '2',
    title: 'Automated Vulnerability Detection in Open Source Software',
    authors: ['Chen Yu', 'Liu Jian'],
    institute: 'Peking University',
    abstract: 'We propose a novel approach for automated vulnerability detection in open source software using deep learning techniques. Our method combines static analysis with machine learning to identify potential security flaws.',
    keywords: ['Vulnerability Detection', 'Security', 'Machine Learning', 'Static Analysis'],
    year: 2024,
    categories: ['Security', 'Analysis'],
    citations: 156,
    url: 'https://example.com/papers/vulnerability-detection',
    artifactUrl: 'https://github.com/example/vulnerability-detection-tool',
    publication: 'CCS',
    ccfRank: 'CCF-A'
  },
  {
    id: '3',
    title: 'Intelligent Test Case Generation Using Reinforcement Learning',
    authors: ['Wang Lei', 'Zhou Hui', 'Zhao Min'],
    institute: 'Shanghai Jiao Tong University',
    abstract: 'This research introduces a reinforcement learning-based approach for intelligent test case generation. Our method learns from historical test data to generate more effective test cases with higher coverage.',
    keywords: ['Test Generation', 'Reinforcement Learning', 'Software Testing', 'AI'],
    year: 2023,
    categories: ['Testing', 'Code Generation'],
    citations: 189,
    url: 'https://example.com/papers/test-case-generation-rl',
    artifactUrl: undefined,
    publication: 'ICSE',
    ccfRank: 'CCF-A'
  },
  {
    id: '4',
    title: 'Code Review Automation with Natural Language Processing',
    authors: ['Li Ming', 'Zhang Wei'],
    institute: 'Beijing Institute of Technology',
    abstract: 'We present an automated code review system that leverages natural language processing to provide meaningful feedback on code quality, style, and potential issues.',
    keywords: ['Code Review', 'NLP', 'Automation', 'Code Quality'],
    year: 2023,
    categories: ['Survey', 'Analysis'],
    citations: 98,
    url: 'https://example.com/papers/code-review-nlp',
    artifactUrl: 'https://github.com/example/code-review-nlp',
    publication: 'ASE',
    ccfRank: 'CCF-B'
  },
  {
    id: '5',
    title: 'Program Synthesis with Large Language Models',
    authors: ['Liu Jian', 'Wang Lei', 'Chen Yu'],
    institute: 'Fudan University',
    abstract: 'This paper explores the application of large language models in program synthesis, focusing on their ability to generate correct and efficient code from natural language specifications.',
    keywords: ['Program Synthesis', 'LLM', 'Natural Language', 'Code Generation'],
    year: 2024,
    categories: ['Code Generation', 'Analysis'],
    citations: 267,
    url: 'https://example.com/papers/program-synthesis-llm',
    artifactUrl: 'https://github.com/example/program-synthesis',
    publication: 'arxiv',
    ccfRank: 'CCF-N'
  },
  {
    id: '6',
    title: 'Machine Learning for Software Maintenance Prediction',
    authors: ['Zhou Hui', 'Zhao Min'],
    institute: 'Xi\'an Jiaotong University',
    abstract: 'We develop a machine learning framework for predicting software maintenance needs, helping development teams allocate resources more effectively and prevent potential issues.',
    keywords: ['Software Maintenance', 'Prediction', 'Machine Learning', 'Resource Allocation'],
    year: 2023,
    categories: ['Maintenance', 'Analysis'],
    citations: 145,
    url: 'https://example.com/papers/ml-maintenance-prediction',
    artifactUrl: undefined,
    publication: 'ICSME',
    ccfRank: 'CCF-C'
  }
];