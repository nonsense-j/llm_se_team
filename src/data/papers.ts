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
  starred?: boolean; // Important paper that will be specifically presented
  seminar?: string; // Seminar ID that this paper is connected to
}

// Predefined categories for papers
export const PAPER_CATEGORIES = ["Code Generation", "Testing", "Security", "Analysis", "Maintenance", "Survey"];

export const papers: Paper[] = [
  {
    id: '1';
    title: "Generating API Parameter Security Rules with LLM for API Misuse Detection";
    authors: ["Jinghua Liu", "Yi Yang", "Kai Chen", "Miaoqian Lin"];
    institute: "Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China";
    abstract: "This paper addresses the challenge of automatically generating API Parameter Security Rules (APSRs) to detect API misuse, which can lead to severe security issues like null pointer dereference and memory corruption. Existing methods suffer from missing information and limited heuristics. The authors propose GPTAid, a framework leveraging Large Language Models (LLMs) to analyze API source code and generate APSRs. GPTAid employs execution feedback-checking to validate generated APSRs by dynamically executing violation code and filtering incorrect rules. It further refines APSRs through code differential analysis to ensure precision. Evaluated on 200 APIs from eight popular libraries, GPTAid achieves 92.3% precision and generates 6 times more APSRs than state-of-the-art detectors. Additionally, it discovered 210 unknown security bugs in 47 applications, with 150 confirmed by developers.";
    keywords: ["API misuse", "Security rules", "Large Language Models", "Dynamic execution", "Code differential analysis"];
    year: 2025; // Assuming current year based on submission context
    categories: ["Security", "Analysis"];
    citations: 0; // Placeholder, actual citations unknown
    url: undefined; // No URL provided
    artifactUrl: undefined; // No artifact URL provided
    publication: "conference"; // Likely a conference paper based on structure
    ccfRank: "CCF-B"; // Estimated based on security/software engineering venue
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
    ccfRank: 'CCF-A',
    seminar: '2' // Connected to seminar about vulnerability detection
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
    ccfRank: 'CCF-A',
    starred: true
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
    ccfRank: 'CCF-N',
    seminar: '1' // Also connected to LLM code generation seminar
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
  },
  {
    id: '7',
    title: 'Deep Learning Approaches for Bug Localization',
    authors: ['Yang Chen', 'Wu Xiaoli'],
    institute: 'Zhejiang University',
    abstract: 'This study presents novel deep learning approaches for automated bug localization in large codebases, significantly reducing debugging time and improving software quality.',
    keywords: ['Bug Localization', 'Deep Learning', 'Debugging', 'Software Quality'],
    year: 2022,
    categories: ['Analysis', 'Testing'],
    citations: 178,
    url: 'https://example.com/papers/bug-localization-dl',
    artifactUrl: 'https://github.com/example/bug-localization',
    publication: 'FSE',
    ccfRank: 'CCF-A',
    starred: true
  },
  {
    id: '8',
    title: 'Automated API Documentation Generation',
    authors: ['Huang Mei', 'Xu Gang'],
    institute: 'Nanjing University',
    abstract: 'We propose an automated system for generating comprehensive API documentation using natural language processing and code analysis techniques.',
    keywords: ['API Documentation', 'Automation', 'NLP', 'Code Analysis'],
    year: 2022,
    categories: ['Maintenance', 'Analysis'],
    citations: 89,
    url: 'https://example.com/papers/api-doc-generation',
    artifactUrl: undefined,
    publication: 'SANER',
    ccfRank: 'CCF-B'
  }
];