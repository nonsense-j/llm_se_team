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
    id: "2",
    title: "IRIS: LLM-Assisted Static Analysis for Detecting Security Vulnerabilities",
    authors: ["Ziyang Li", "Salkat Dutta", "Mayur Naik"],
    institute: "University of Pennsylvania, Cornell University",
    abstract: "This paper addresses the challenge of detecting security vulnerabilities in software using static analysis tools, which often suffer from limited effectiveness due to their reliance on human-labeled specifications. The authors propose IRIS, a neuro-symbolic approach that combines Large Language Models (LLMs) with static analysis to perform whole-repository reasoning for vulnerability detection. IRIS leverages LLMs to infer taint specifications and perform contextual analysis, eliminating the need for manual specifications. Evaluated on CWE-Bench-Java, a new dataset of 120 manually validated security vulnerabilities in real-world Java projects, IRIS with GPT-4 detects 55 vulnerabilities (+28 over CodeQL) and reduces CodeQL's false discovery rate by 5%. Additionally, IRIS identifies 4 previously unknown vulnerabilities missed by existing tools.",
    keywords: ["Neuro-Symbolic", "Program Analysis", "Security Vulnerability", "LLM"],
    year: 2025,
    categories: ["Security", "Analysis"],
    citations: 4, 
    url: "https://openreview.net/forum?id=9LdJDU7E91",
    artifactUrl: "https://github.com/iris-sast/iris",
    publication: "ICLR", 
    ccfRank: "CCF-A"
  },
  {
    id: '1',
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
  {
    id: '1',
    title: "Generating API Parameter Security Rules with LLM for API Misuse Detection",
    authors: ["Jinghua Liu", "Yi Yang", "Kai Chen", "Miaoqian Lin"],
    institute: "Institute of Information Engineering, Chinese Academy of Sciences, China",
    abstract: "This paper addresses the challenge of automatically generating API Parameter Security Rules (APSRs) to detect API misuse, which can lead to severe security issues like null pointer dereference and memory corruption. Existing methods suffer from missing information and limited heuristics. The authors propose GPTAid, a framework leveraging Large Language Models (LLMs) to analyze API source code and generate APSRs. GPTAid employs execution feedback-checking to validate generated APSRs by dynamically executing violation code and filtering incorrect rules. It further refines APSRs through code differential analysis to ensure precision. Evaluated on 200 APIs from eight popular libraries, GPTAid achieves 92.3% precision and generates 6 times more APSRs than state-of-the-art detectors. Additionally, it discovered 210 unknown security bugs in 47 applications, with 150 confirmed by developers.",
    keywords: ["API Misuse", "API Parameter Security Rules", "Large Language Models"],
    year: 2025, // Assuming current year based on submission context
    categories: ["Security", "Analysis"],
    citations: 0, // Placeholder, actual citations unknown
    url: "https://www.ndss-symposium.org/ndss-paper/generating-api-parameter-security-rules-with-llm-for-api-misuse-detection/",
    artifactUrl: "https://github.com/icy17/GPTAid/", // No artifact URL provided
    publication: "NDSS", 
    ccfRank: "CCF-A"
  }
];