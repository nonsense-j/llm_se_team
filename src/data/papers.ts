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
    id: 1,
    title: "Unifying the Perspectives of NLP and Software Engineering: A Survey on Language Models for Code",
    authors: [
        "Ziyin Zhang", 
        "Chaoyu Chen", 
        "Bingchang Liu", 
        "Cong Liao", 
        "Zi Gong", 
        "Hang Yu", 
        "Jianguo Li", 
        "Rui Wang"
    ],
    institute: "Shanghai Jiao Tong University; Ant Group", 
    abstract: "This survey paper systematically reviews advancements in applying language models (LMs) to software engineering (SE), covering 70+ models, 40+ tasks, 180+ datasets, and 900+ works. It bridges SE and NLP perspectives: SE uses LMs for development automation, while NLP leverages SE tasks for LM evaluation. The authors categorize code-processing models into general-purpose (e.g., GPT) and code-specialized LMs, tracing their evolution from statistical models/RNNs to pretrained Transformers/LLMs. Beyond coding, the survey explores LLM applications in requirement engineering, testing, deployment, and operations, providing a holistic view of NLP in SE. Key challenges and future directions are identified.",
    keywords: [
        "Large Language Models", 
        "NLP4SE", 
        "SE4NLP"
    ],
    year: 2024,
    categories: ["Survey", "Code Generation", "Testing", "Security", "Analysis"],
    citations: 84,
    url: "https://openreview.net/forum?id=hkNnGqZnpa", 
    artifactUrl: "https://github.com/codefuse-ai/Awesome-Code-LLM",
    publication: "TMLR",
    ccfRank: "CCF-N"
  },
  {
    id: 2,
    title: "Software Testing with Large Language Models: Survey, Landscape, and Vision",
    authors: [
        "Junjie Wang", 
        "Yuchao Huang", 
        "Chunyang Chen", 
        "Zhe Liu", 
        "Song Wang", 
        "Qing Wang"
    ],
    institute: "Institute of Software Chinese Academy of Sciences; University of Chinese Academy of Sciences; Monash University; York University",
    abstract: "This survey paper explores the application of Large Language Models (LLMs) in software testing, analyzing 102 studies that leverage LLMs for tasks like test case preparation and program repair. The authors examine the intersection of LLMs and software testing from dual perspectives, detailing commonly used models (e.g., GPT, T5), prompt engineering techniques, and auxiliary methods. As software systems grow in complexity, traditional testing approaches face limitations in coverage and semantic understanding, which LLMs address through their scalability and NLP capabilities. The paper identifies key challenges and opportunities, serving as a roadmap for future research in LLM-driven testing innovation.",
    keywords: [
        "Pre-trained Large Language Model", 
        "Software Testing", 
        "LLM", 
        "GPT"
    ],
    year: 2024,
    categories: ["Survey", "Testing"],
    citations: 464,
    url: "https://arxiv.org/abs/2307.07221", 
    artifactUrl: "https://github.com/LLM-Testing/LLM4SoftwareTesting", // No artifact mentioned
    publication: "TSE", // Conference/journal not specified
    ccfRank: "CCF-A" // Default (update if venue is known)
  },
  {
    id: 3,
    title: "Large Language Model-Based Agents for Software Engineering: A Survey",
    authors: [
        "Junwei Liu", 
        "Kaixin Wang", 
        "Yixuan Chen", 
        "Xin Peng", 
        "Zhenpeng Chen", 
        "Lingming Zhang", 
        "Yiling Lou"
    ],
    institute: "Fudan University; Nanyang Technological University; University of Illinois Urbana-Champaign",
    abstract: "This survey explores the emerging paradigm of LLM-based agents in Software Engineering (SE), analyzing 106 papers that leverage these agents for tasks like code generation, testing, and debugging. Unlike standalone LLMs, LLM-based agents enhance versatility by integrating external tools and enabling multi-agent collaboration. The paper categorizes applications from two perspectives: (1) SE tasks (requirements engineering, code generation, testing, etc.) and (2) agent design components (planning, memory, perception). It highlights the synergy between multi-agent systems and human interaction for complex SE problems, identifies current limitations, and outlines future research directions. The work serves as the first comprehensive review of LLM-based agents in SE.",
    keywords: [
        "Large Language Model", 
        "AI Agent", 
        "Software Engineering"
    ],
    year: 2024,
    categories: ["Survey", "Code Generation", "Testing", "Security", "Maintenance", "Analysis"],
    citations: 0, // Placeholder for a newly published survey
    url: "https://arxiv.org/abs/2409.02977",
    artifactUrl: "https://github.com/FudanSELab/Agent4SE-Paper-List",
    publication: "Arxiv", // Conference/journal not specified
    ccfRank: "CCF-N" // Default (update if venue is known)
  },
  {
    id: "4",
    title: "IRIS: LLM-Assisted Static Analysis for Detecting Security Vulnerabilities",
    authors: ["Ziyang Li", "Salkat Dutta", "Mayur Naik"],
    institute: "University of Pennsylvania, Cornell University",
    abstract: "This paper addresses the challenge of detecting security vulnerabilities in software using static analysis tools, which often suffer from limited effectiveness due to their reliance on human-labeled specifications. The authors propose IRIS, a neuro-symbolic approach that combines Large Language Models (LLMs) with static analysis to perform whole-repository reasoning for vulnerability detection. IRIS leverages LLMs to infer taint specifications and perform contextual analysis, eliminating the need for manual specifications. Evaluated on CWE-Bench-Java, a new dataset of 120 manually validated security vulnerabilities in real-world Java projects, IRIS with GPT-4 detects 55 vulnerabilities (+28 over CodeQL) and reduces CodeQL's false discovery rate by 5%. Additionally, IRIS identifies 4 previously unknown vulnerabilities missed by existing tools.",
    keywords: ["Neuro-Symbolic", "Program Analysis", "Security Vulnerability", "LLM"],
    year: 2025,
    categories: ["Security"],
    citations: 4, 
    url: "https://openreview.net/forum?id=9LdJDU7E91",
    artifactUrl: "https://github.com/iris-sast/iris",
    publication: "ICLR", 
    ccfRank: "CCF-A"
  },
  {
    id: '5',
    title: "Generating API Parameter Security Rules with LLM for API Misuse Detection",
    authors: ["Jinghua Liu", "Yi Yang", "Kai Chen", "Miaoqian Lin"],
    institute: "Institute of Information Engineering, Chinese Academy of Sciences, China",
    abstract: "This paper addresses the challenge of automatically generating API Parameter Security Rules (APSRs) to detect API misuse, which can lead to severe security issues like null pointer dereference and memory corruption. Existing methods suffer from missing information and limited heuristics. The authors propose GPTAid, a framework leveraging Large Language Models (LLMs) to analyze API source code and generate APSRs. GPTAid employs execution feedback-checking to validate generated APSRs by dynamically executing violation code and filtering incorrect rules. It further refines APSRs through code differential analysis to ensure precision. Evaluated on 200 APIs from eight popular libraries, GPTAid achieves 92.3% precision and generates 6 times more APSRs than state-of-the-art detectors. Additionally, it discovered 210 unknown security bugs in 47 applications, with 150 confirmed by developers.",
    keywords: ["API Misuse", "API Parameter Security Rules", "Large Language Models"],
    year: 2025, // Assuming current year based on submission context
    categories: ["Security", "Analysis"],
    citations: 7,
    url: "https://www.ndss-symposium.org/ndss-paper/generating-api-parameter-security-rules-with-llm-for-api-misuse-detection/",
    artifactUrl: "https://github.com/icy17/GPTAid/", // No artifact URL provided
    publication: "NDSS", 
    ccfRank: "CCF-A"
  },
  
  
];