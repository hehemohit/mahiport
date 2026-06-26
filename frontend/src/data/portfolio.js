export const PROFILE = {
    name: "Mahi Vinod Soni",
    title: "Data Scientist | AI Engineer | Generative AI Enthusiast",
    tagline: "From Numbers to Narratives",
    intro: "I am a Data Science postgraduate specializing in Machine Learning, Generative AI, Forecasting, and Advanced Analytics. I enjoy building end-to-end AI solutions that transform complex data into actionable business insights.",
    about: [
        "I am currently pursuing an MSc in Data Science at NMIMS, Mumbai, with a strong academic background in Computational Mathematics and Statistics. My passion lies at the intersection of AI, machine learning, and business analytics.",
        "I have built forecasting systems, generative AI applications, and cloud-based machine learning pipelines that solve real-world business problems.",
        "I believe in turning data into stories and insights into decisions.",
    ],
    headshot: "https://customer-assets.emergentagent.com/placeholder/headshot.svg",
    resumeUrl: "#",
    socials: {
        linkedin: "https://www.linkedin.com/",
        github: "https://github.com/",
        email: "mailto:mahisoni@example.com",
        emailAddress: "mahisoni@example.com",
    },
    stats: [
        { value: 9.32, suffix: "/10", label: "MSc CGPA" },
        { value: 95, suffix: "%", label: "Eval Time Reduced" },
        { value: 87, suffix: "%", label: "Grading Accuracy" },
        { value: 3, suffix: "+", label: "Years of Building" },
    ],
};

export const EDUCATION = [
    {
        school: "NMIMS, Mumbai",
        degree: "Master of Science in Data Science",
        period: "2024 – 2026",
        score: "CGPA: 9.32 / 10",
    },
    {
        school: "MIT World Peace University, Pune",
        degree: "Bachelor of Science in Computational Mathematics and Statistics",
        period: "2021 – 2024",
        score: "CGPA: 9.87 / 10",
    },
];

export const EXPERIENCE = [
    {
        role: "Data Science & AI Intern",
        company: "Pfizer",
        period: "Jan 2025 – Present",
        bullets: [
            "Built brick-level sales forecasting solutions using LightGBM and CatBoost.",
            "Generated 12-month forecasts from historical sales data.",
            "Reduced forecasting runtime by 50%.",
            "Developed scalable forecasting frameworks and leadership-facing analytical tools.",
        ],
    },
    {
        role: "Generative AI Intern",
        company: "SYBGEN",
        period: "Jun 2025 – Aug 2025",
        bullets: [
            "Built AI-driven grading systems using OCR and Gemini.",
            "Achieved 87% evaluation accuracy.",
            "Reduced evaluation time by 95%.",
            "Developed multilingual assessment capabilities.",
        ],
    },
    {
        role: "Junior Intern",
        company: "ACSE Solutions",
        period: "Feb 2024 – May 2024",
        bullets: [
            "Worked with Oracle PL/SQL and RICE components.",
            "Collaborated with cross-functional teams.",
            "Improved coding efficiency and business understanding.",
        ],
    },
];

export const PROJECTS = [
    {
        id: "pharmacortex",
        title: "PharmaCortex",
        subtitle: "AI-Powered Cognitive Analytics Platform",
        description:
            "Conversational analytics platform for pharmaceutical leadership — supporting multiple KPIs across business domains with sub-second semantic search.",
        tech: ["Python", "Streamlit", "FAISS", "Gemini", "DuckDB"],
        highlights: [
            "Built conversational analytics platform.",
            "Supported multiple KPIs and business domains.",
            "Enabled semantic search in under 1 second.",
        ],
        image: "https://images.pexels.com/photos/17485706/pexels-photo-17485706.png",
        category: "GenAI",
        accent: "Featured",
    },
    {
        id: "aws-mlops",
        title: "AWS MLOps Financial Risk Prediction",
        subtitle: "Serverless MLOps Pipeline",
        description:
            "End-to-end serverless MLOps pipeline that automates training & deployment of XGBoost models for financial risk prediction.",
        tech: ["AWS", "SageMaker", "Lambda", "S3", "Docker", "Flask", "XGBoost"],
        highlights: [
            "Built serverless MLOps pipeline.",
            "Automated training and deployment.",
            "Achieved F1 Score of 0.78.",
        ],
        image: "https://images.pexels.com/photos/7567223/pexels-photo-7567223.jpeg",
        category: "MLOps",
    },
    {
        id: "inter-stock",
        title: "Structural Analysis of Inter-Stock Dynamics",
        subtitle: "Econometric Modelling of INFY × TCS",
        description:
            "Long-term equilibrium analysis between Infosys and TCS — modelling volatility clustering, cointegration, and relative value strategies.",
        tech: ["Python", "Statsmodels", "GARCH", "Econometrics"],
        highlights: [
            "Analyzed long-term equilibrium between Infosys and TCS.",
            "Modeled volatility clustering and cointegration.",
            "Explored relative value trading strategies.",
        ],
        image: "https://images.pexels.com/photos/6203470/pexels-photo-6203470.jpeg",
        category: "Analytics",
    },
];

export const SKILLS = [
    {
        group: "Programming",
        items: ["Python", "SQL", "PL/SQL"],
    },
    {
        group: "Machine Learning & AI",
        items: [
            "Machine Learning",
            "Predictive Modeling",
            "NLP",
            "RAG",
            "LangChain",
            "LangGraph",
            "Statistical Analysis",
        ],
    },
    {
        group: "Libraries",
        items: ["Pandas", "NumPy", "Scikit-Learn", "Statsmodels"],
    },
    {
        group: "Tools & Platforms",
        items: ["AWS", "Snowflake", "Dataiku", "Power BI", "Tableau", "Git", "MySQL"],
    },
];

export const ACHIEVEMENTS = [
    {
        title: "First Runner-up — Hack-A-Stat 2025",
        meta: "National Statistics Hackathon",
        icon: "trophy",
    },
    {
        title: "Medal of Excellence — 3rd Rank, B.Sc. Computational Mathematics & Statistics",
        meta: "MIT-WPU, Pune",
        icon: "medal",
    },
];

export const LEADERSHIP = {
    role: "Operations Manager",
    org: "NLC Bharat",
    bullets: [
        "Improved productivity by 25%.",
        "Led cross-functional teams of 5–7 members.",
        "Managed projects using agile planning and resource optimization.",
    ],
};

export const CERTIFICATIONS = [
    {
        title: "The Data Science Course: Complete Data Science Bootcamp 2024",
        issuer: "Udemy",
    },
];
