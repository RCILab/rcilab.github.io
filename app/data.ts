export type ResearchArea = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  topics: string[];
  videoId?: string;
  href?: string;
  image: string;
};

export type NewsItem = {
  date: string;
  category: "Publication" | "Award" | "Grant" | "Service" | "Lab";
  title: string;
  detail?: string;
  href?: string;
};

export type Member = {
  name: string;
  program: string;
  joined?: string;
  focus: string;
  email: string;
  image: string;
};

export type Publication = {
  year: string;
  type: "International Journal" | "Domestic Journal" | "International Conference" | "Domestic Conference";
  venue: string;
  title: string;
  authors?: string;
  note?: string;
  links?: { label: string; href: string }[];
};

export type Patent = {
  year: string;
  status: "Application" | "Registration" | "Program Copyright";
  title: string;
  inventors: string;
  number?: string;
  jurisdiction?: string;
};

export const researchAreas: ResearchArea[] = [
  {
    number: "01",
    title: "Reactive Control",
    subtitle: "Mobile manipulators in changing environments",
    description:
      "We develop whole-body controllers that can insert, remove, and reprioritize tasks online, allowing mobile manipulators to respond smoothly to unexpected events.",
    topics: ["Hierarchical QP", "Task transition", "Collision avoidance"],
    videoId: "JkTF-9RKoDM",
    image: "/research-reactive.jpg",
  },
  {
    number: "02",
    title: "Whole-body Control",
    subtitle: "Dynamic control for legged robots",
    description:
      "Our work combines inverse dynamics, compliant control, trajectory optimization, and learned guidance for stable multi-contact locomotion and manipulation.",
    topics: ["Inverse dynamics", "Humanoids", "Legged manipulation"],
    videoId: "5Xwo2iPRB4Q",
    image: "/research-wholebody.jpg",
  },
  {
    number: "03",
    title: "Multi-Robot & HRI",
    subtitle: "Robots that collaborate with people and each other",
    description:
      "We study coordinated manipulation and intuitive interfaces for teams of robots and humans performing physically demanding tasks together.",
    topics: ["Cooperative transport", "AR interface", "Shared autonomy"],
    videoId: "ytVihlGEe8c",
    image: "/research-hri.jpg",
  },
  {
    number: "04",
    title: "AI-based Applications",
    subtitle: "Learning-enabled robotic systems",
    description:
      "We connect perception and learning with control for applications ranging from dexterous teleoperation to automated scientific experiments.",
    topics: ["Imitation learning", "VLA", "Robot learning"],
    videoId: "S46upcQuPyw",
    image: "/research-ai.jpg",
  },
  {
    number: "05",
    title: "2.5D Autonomous Navigation",
    subtitle: "Mobility beyond flat, structured spaces",
    description:
      "We combine traversability estimation, mapping, and planning so mobile robots can operate reliably in rough and unstructured environments.",
    topics: ["3D SLAM", "Traversability", "Rough terrain"],
    videoId: "DRFQBkR59KA",
    image: "/research-navigation.jpg",
  },
  {
    number: "06",
    title: "Optimal Control",
    subtitle: "Real-time decisions under constraints",
    description:
      "We investigate DDP, MPPI, and constrained sampling-based control for fast, robust motion generation across robotic platforms.",
    topics: ["MPPI", "DDP", "Trajectory optimization"],
    videoId: "NM2Q5UQGleM",
    image: "/research-optimal.jpg",
  },
  {
    number: "07",
    title: "Humanoid Control",
    subtitle: "Locomotion and loco-manipulation",
    description:
      "Our humanoid research targets whole-body behaviors that integrate balance, locomotion, manipulation, and AI-based planning.",
    topics: ["Locomotion", "Loco-manipulation", "Physical AI"],
    videoId: "E4ZXpKlxoBE",
    image: "/research-humanoid.jpg",
  },
  {
    number: "08",
    title: "Multi-Robot Control",
    subtitle: "Coordinated manipulation at scale",
    description:
      "We develop planning and control methods for dual-arm, triple-arm, and heterogeneous robot systems working in tightly coupled tasks.",
    topics: ["Dual-arm", "Multi-arm", "Coordination"],
    videoId: "VuQjmxVQWIk",
    image: "/research-multirobot.jpg",
  },
  {
    number: "09",
    title: "Constrained Motion Planning",
    subtitle: "Feasible planning on constraint manifolds",
    description:
      "We develop geometry-aware sampling-based planners that satisfy equality and inequality constraints while efficiently exploring complex feasible motion spaces.",
    topics: ["Riemannian metrics", "Constraint manifolds", "RRT"],
    videoId: "bnW1Kop4qRw",
    image: "/research-constrained-motion.jpg",
  },
  {
    number: "10",
    title: "Visual Language Action",
    subtitle: "Language-conditioned contact-rich manipulation",
    description:
      "We combine vision-language-action policies with force-informed residual learning to make contact-rich manipulation more adaptive and robust.",
    topics: ["Vision-language-action", "Residual RL", "Contact-rich manipulation"],
    videoId: "5N-yzaBzCzg",
    image: "/research-vla.jpg",
  },
  {
    number: "11",
    title: "Visual Language Navigation",
    subtitle: "Instance-enriched semantic navigation",
    description:
      "We build instance-enriched semantic maps that connect open-vocabulary perception, room understanding, and object attributes for language-guided navigation.",
    topics: ["Open-vocabulary mapping", "Semantic navigation", "Embodied AI"],
    href: "https://rcilab.github.io/iesm_vln/",
    image: "/vln.jpg",
  },
];

export const newsItems: NewsItem[] = [
  {
    date: "2026.08",
    category: "Service",
    title: "Prof. Sanghyun Kim joins the organizing committee for ICRA 2027.",
  },
  {
    date: "2026.08",
    category: "Service",
    title: "Prof. Sanghyun Kim will serve as an Associate Editor for Humanoids 2026.",
  },
  {
    date: "2026.08",
    category: "Publication",
    title: "A paper on fixed-time active fault-tolerant control was accepted to Information Sciences.",
    detail: "Thanh Nguyen Truong and Sanghyun Kim",
  },
  {
    date: "2026.07",
    category: "Publication",
    title: "Instance-Enriched Semantic Maps for Visual Language Navigation was accepted to EAAI.",
    detail: "Jiho Hong, Eunae Kang, Sanghyun Kim, and Y. Shin",
    href: "https://rcilab.github.io/iesm_vln/",
  },
  {
    date: "2026.07",
    category: "Award",
    title: "RCI Lab received the Best Paper Award from the KSME Dynamics, Control and Robotics Division.",
  },
  {
    date: "2026.06",
    category: "Grant",
    title: "RCI Lab received a Scale-up TIPS grant for whole-body control of a high-payload semi-humanoid robot.",
  },
  {
    date: "2026.05",
    category: "Publication",
    title: "VAE-MPPI for closed-chain constrained dual-arm manipulation was accepted to the Journal of Korea Robotics Society.",
  },
  {
    date: "2026.04",
    category: "Award",
    title: "RCI Lab received the Merit Award at the Humanoid Real-World Challenge hosted by KIRIA.",
  },
  {
    date: "2026.03",
    category: "Grant",
    title: "RCI Lab began new NRF and Rural Development Administration research projects in Physical AI and agricultural robotics.",
  },
  {
    date: "2026.01",
    category: "Lab",
    title: "RCI Lab opened 2026 with new research collaborations and student recruitment.",
  },
];

export const graduateStudents: Member[] = [
  { name: "Suhwan Park", program: "Integrated M.S./Ph.D.", joined: "2024-1", focus: "Optimal Control", email: "tnghks0605 at khu.ac.kr", image: "/members/suhwan-park.png" },
  { name: "Minhyeong Kang", program: "Integrated M.S./Ph.D.", joined: "2025-1", focus: "Multi-Robot Collaboration", email: "kingtyphoon at khu.ac.kr", image: "/members/minhyeong-kang.jpg" },
  { name: "Leesai Park", program: "Integrated M.S./Ph.D.", joined: "2025-1", focus: "Optimal Control", email: "leesai2000 at khu.ac.kr", image: "/members/leesai-park.png" },
  { name: "Seulchan Lee", program: "Integrated M.S./Ph.D.", joined: "2025-1", focus: "Human-Robot Interaction", email: "lee081847 at khu.ac.kr", image: "/members/seulchan-lee.jpg" },
  { name: "Daum Park", program: "Integrated M.S./Ph.D.", joined: "2025-2", focus: "Task and Motion Planning", email: "theaumpark at gmail.com", image: "/members/daum-park.png" },
  { name: "Kangmin Lee", program: "Integrated M.S./Ph.D.", joined: "2026-1", focus: "Autonomous Mobile Robots, Optimal Control", email: "khukmin99 at khu.ac.kr", image: "/members/kangmin-lee.png" },
  { name: "Jinhwan Lim", program: "Integrated M.S./Ph.D.", joined: "2026-2", focus: "Robot Manipulation", email: "limjinhwan77 at khu.ac.kr", image: "/members/jinhwan-lim.jpg" },
  { name: "Hyungjun You", program: "Integrated M.S./Ph.D.", joined: "2026-2", focus: "AI-based Control, Humanoid Robots", email: "shaun1 at khu.ac.kr", image: "/members/hyungjun-you.jpg" },
  { name: "Jiho Hong", program: "M.S.", joined: "2025-1", focus: "Imitation Learning", email: "jihojihyuk at khu.ac.kr", image: "/members/jiho-hong.png" },
  { name: "Jaerak Son", program: "M.S.", joined: "2025-1", focus: "Digital Twin, Multi-Robot Systems", email: "sjr9017 at gmail.com", image: "/members/jaerak-son.png" },
  { name: "Eunbin Jung", program: "M.S.", joined: "2025-2", focus: "Mobile Manipulators, HRI", email: "enbang0209 at gmail.com", image: "/members/eunbin-jung.png" },
  { name: "Hyunho Cho", program: "M.S.", joined: "2026-1", focus: "AI-based Control", email: "chohh7391 at gmail.com", image: "/members/hyunho-cho.jpg" },
  { name: "Bohyeong Pak", program: "M.S.", joined: "2026-1", focus: "AI-based Control", email: "bhe1004 at khu.ac.kr", image: "/members/bohyeong-pak.png" },
  { name: "Sung San Park", program: "M.S.", joined: "2026-1", focus: "Vision-Language Navigation", email: "san2642 at khu.ac.kr", image: "/members/sung-san-park.jpg" },
  { name: "Chanjin Park", program: "M.S.", joined: "2026-1", focus: "AI-based Control", email: "chanjin4099 at khu.ac.kr", image: "/members/chanjin-park.jpg" },
  { name: "Taehyun Jung", program: "M.S.", joined: "2026-1", focus: "Digital Twin-based Control", email: "jth8090 at khu.ac.kr", image: "/members/taehyun-jung.jpg" },
  { name: "Minjae Jo", program: "M.S.", joined: "2026-1", focus: "Dual-Arm Manipulation", email: "alswo0300 at khu.ac.kr", image: "/members/minjae-jo.jpg" },
];

export const researchInterns: Member[] = [
  { name: "Jiyong Park", program: "Research Intern", focus: "AI-based Control", email: "qkrwldyd0919 at khu.ac.kr", image: "/members/jiyong-park.jpg" },
  { name: "Jihwan Lee", program: "Research Intern", focus: "AI-based Control, Humanoid Robots", email: "dlwlghks02 at khu.ac.kr", image: "/members/jihwan-lee.jpg" },
];

export const alumni = [
  { name: "Seunghyun Lee", degree: "M.S., 2023-2", affiliation: "FunctionBay" },
  { name: "Hakjun Kim", degree: "M.S., 2023-2", affiliation: "Doosan Robotics" },
  { name: "Joonyeol Yang", degree: "M.S., 2023-2", affiliation: "HL Robotics" },
  { name: "Jiwon Yoon", degree: "M.S., 2024-2", affiliation: "Geobot" },
  { name: "Eunae Kang", degree: "M.S., 2024-2", affiliation: "Blue Robin" },
];

export const inProgressPublications: Publication[] = [
  {
    year: "2026",
    type: "International Journal",
    venue: "IEEE Transactions on Robotics",
    title: "CLEAR: Certified Constraint-Compatible Motion for Multi-Robot Passage",
    note: "In Preparation",
    links: [{ label: "Project", href: "https://rcilab.github.io/clear/" }],
  },
  {
    year: "2026",
    type: "International Journal",
    venue: "Robotics and Computer-Integrated Manufacturing",
    title: "Amortized Homotopy-Diverse Trajectory Operators for Environment-Aware Manipulator Collision Avoidance",
    note: "In Preparation",
  },
  {
    year: "2026",
    type: "International Journal",
    venue: "Aerospace Science and Technology",
    title: "From Orbital DEMs to Onboard Decisions: Belief-Triggered Replanning for Long-Range Lunar Rover Traverses",
    note: "In Preparation",
  },
  {
    year: "2027",
    type: "International Conference",
    venue: "IEEE International Conference on Robotics and Automation",
    title: "Title Withheld (MPPI with HQP)",
    note: "In Preparation",
  },
  {
    year: "2027",
    type: "International Conference",
    venue: "IEEE International Conference on Robotics and Automation",
    title: "Title Withheld (Vision with KIST)",
    note: "In Preparation",
  },
  {
    year: "2027",
    type: "International Conference",
    venue: "IEEE International Conference on Robotics and Automation",
    title: "Title Withheld (Radiation with Inha University)",
    note: "In Preparation",
  },
  {
    year: "2027",
    type: "International Conference",
    venue: "IEEE International Conference on Robotics and Automation",
    title: "Title Withheld (MBD)",
    note: "In Preparation",
  },
  {
    year: "2027",
    type: "International Conference",
    venue: "IEEE International Conference on Robotics and Automation",
    title: "Title Withheld (Force-Level MPPI)",
    note: "In Preparation",
  },
  {
    year: "2027",
    type: "International Conference",
    venue: "IEEE International Conference on Robotics and Automation",
    title: "Title Withheld (Force-Level UMI with UCF and Ewha University)",
    note: "In Preparation",
  },
  {
    year: "2027",
    type: "International Conference",
    venue: "IEEE International Conference on Robotics and Automation",
    title: "Title Withheld (Social Navigation)",
    note: "In Preparation",
  },
  {
    year: "2026",
    type: "International Journal",
    venue: "IEEE Robotics and Automation Letters",
    title: "Projection-Retraction MPPI: Exact Constraint-Manifold Control for Manipulators",
    note: "Under Review",
    links: [
      { label: "Project", href: "https://rcilab.github.io/prmppi/" },
      { label: "arXiv", href: "https://arxiv.org/abs/2608.07573" },
    ],
  },
  {
    year: "2026",
    type: "International Journal",
    venue: "IEEE Robotics and Automation Letters",
    title: "FIRe: Force-Informed Residual Policy for Contact-Rich Manipulation with Vision-Language-Action Models",
    note: "Under Review",
    links: [{ label: "Project", href: "https://rcilab.github.io/FIRe/" }],
  },
  {
    year: "2026",
    type: "International Journal",
    venue: "International Journal of Control, Automation, and Systems",
    title: "Linear or Bilinear: A Criterion for Koopman Rollouts in Sampling-Based Predictive Control",
    note: "Under Review",
    links: [{ label: "Project", href: "https://rcilab.github.io/koopman-mppi/" }],
  },
  {
    year: "2026",
    type: "International Journal",
    venue: "IEEE Robotics and Automation Letters",
    title: "GRACE: Gradient-Free Robot Action Generation via Combined Diffusion-MPPI Posterior Mean Estimation",
    note: "Under Review",
    links: [{ label: "Project", href: "https://rcilab.github.io/grace/" }],
  },
  {
    year: "2026",
    type: "International Journal",
    venue: "IEEE Access",
    title: "LLM-Guided Tool-Aware Task and Motion Planning for Chemistry Lab Automation",
    note: "Under Review",
    links: [{ label: "Project", href: "https://rcilab.github.io/auto_chem/" }],
  },
  {
    year: "2026",
    type: "International Journal",
    venue: "IEEE Transactions on Automation Science and Engineering",
    title: "Unified Prescribed-Path Planning and Feasibility Checking Across Redundant Manipulators",
    note: "Under Review",
    links: [{ label: "Project", href: "https://anonymous.4open.science/w/GRAFT-0B84/" }],
  },
  {
    year: "2026",
    type: "International Journal",
    venue: "ISA Transactions",
    title: "Title Withheld (MPPI Review)",
    note: "Under Review",
  },
];

export const publications: Publication[] = [
  {
    year: "2026",
    type: "International Journal",
    venue: "Information Sciences",
    title: "High-Performance Fixed-Time Active Fault-Tolerant Control of Robotic Manipulators via Sparse Physics-Informed Dynamics Learning",
    authors: "Thanh Nguyen Truong, Sanghyun Kim†",
    note: "Accepted",
  },
  {
    year: "2026",
    type: "International Journal",
    venue: "Engineering Applications of Artificial Intelligence",
    title: "Instance-Enriched Semantic Maps for Visual Language Navigation",
    authors: "Jiho Hong*, Eunae Kang*, Sanghyun Kim†, Y. Shin†",
    links: [
      { label: "Project", href: "https://rcilab.github.io/iesm_vln/" },
      { label: "arXiv", href: "https://arxiv.org/abs/2607.12630" },
    ],
  },
  {
    year: "2026",
    type: "Domestic Journal",
    venue: "Journal of Korea Robotics Society",
    title: "VAE-MPPI: 양팔 로봇 조작을 위한 폐쇄 연쇄 제약 궤적 최적화",
    authors: "이슬찬, 김상현",
  },
  {
    year: "2026",
    type: "Domestic Journal",
    venue: "Transactions of the Korean Society of Mechanical Engineers A",
    title: "Sim-to-Real 성능 향상을 위한 다물체 동역학과 데이터 기반 마찰 모델을 이용한 고정밀 시뮬레이션",
    authors: "김정윤*, 김학준*, 최진환†, 김상현†",
  },
  {
    year: "2025",
    type: "International Journal",
    venue: "Mathematics",
    title: "Hybrid A*-guided Model Predictive Path Integral Control for Robust Navigation in Rough Terrains",
    authors: "Joonyeol Yang*, Minhyeong Kang*, Seulchan Lee, Sanghyun Kim†",
  },
  {
    year: "2025",
    type: "International Journal",
    venue: "Journal of Mechanical Science and Technology",
    title: "Enhanced Online Parameter Estimation of Unknown Objects via Sparse Identification of Unmodeled Dynamics",
    authors: "Hakjun Kim, Sanghyun Kim†, J. Park†",
  },
  {
    year: "2025",
    type: "Domestic Journal",
    venue: "Transactions of the Korean Society of Mechanical Engineers A",
    title: "험지 환경에서의 자율주행 로봇 경로 계획 성능 벤치마크 및 고찰",
    authors: "양준열, 이강민, 정은빈, 방혜원, 조용진, 강인성, 김상현",
  },
  {
    year: "2025",
    type: "Domestic Journal",
    venue: "Transactions of the Korean Society of Mechanical Engineers A",
    title: "모델 예측 경로 적분을 활용한 하이브리드 케이블 구동 로봇의 전신 제어기 개발",
    authors: "강민형*, 박이새*, 장근우, 박범영†, 김상현†",
  },
  {
    year: "2025",
    type: "International Conference",
    venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems",
    title: "CSC-MPPI: A Novel Constrained MPPI Framework with DBSCAN for Reliable Obstacle Avoidance",
    authors: "Leesai Park, Keunwoo Jang†, Sanghyun Kim†",
  },
  {
    year: "2024",
    type: "International Journal",
    venue: "IEEE Transactions on Automation Science and Engineering",
    title: "Object-Aware Impedance Control for Human-Robot Collaborative Task with Online Object Parameter Estimation",
    authors: "J. Park, Y. Shin*, Sanghyun Kim*",
  },
  {
    year: "2024",
    type: "International Journal",
    venue: "Nonlinear Dynamics",
    title: "Whole-body Control of Redundant Hybrid Cable-Driven Robot with Manipulator: Hierarchical Quadratic Programming Approach",
    authors: "Suhwan Park*, Leesai Park*, Seulchan Lee*, Sanghyun Kim†",
  },
  {
    year: "2024",
    type: "International Journal",
    venue: "IEEE Transactions on Robotics",
    title: "Online Multi-Contact Receding Horizon Planning via Value Function Approximation",
    authors: "J. Wang, Sanghyun Kim, T. S. Lembono, W. Du, J. Shim, S. Samadi, K. Wang, V. Ivan, S. Calinon, S. Vijayakumar, S. Tonneau",
  },
  {
    year: "2024",
    type: "International Journal",
    venue: "Sensors",
    title: "Comparative Analysis of Integrated Filtering Method Using UWB Localization in Indoor Environments",
    authors: "R. Ranjan, D. Shin, Y. Jung, Sanghyun Kim, J.-H. Yun, C.-H. Kim, S. Lee, J. Kye",
  },
  {
    year: "2024",
    type: "International Journal",
    venue: "Applied Sciences",
    title: "The Development of Software to Automate the Laser Welding of a Liquefied Natural Gas Cargo Tank Using a Mobile Manipulator",
    authors: "T. Choi, J. Park, J. Bak, D. Park, H. Seo, Sanghyun Kim",
  },
  {
    year: "2023",
    type: "International Journal",
    venue: "IEEE Robotics and Automation Letters",
    title: "Motion Planning of Mobile Manipulator for Navigation Including Door Traversal",
    authors: "Keunwoo Jang, Sanghyun Kim†, Jaeheung Park†",
  },
  {
    year: "2023",
    type: "International Journal",
    venue: "IEEE Access",
    title: "Dual-Arm Path-Planning Algorithm for Wiring Harness Assembly Using Redundantly Actuated Robotic Systems",
    authors: "J. Kim, J-G Kim, J. Park, B-K Han, Sanghyun Kim†, D. Park†",
  },
  {
    year: "2022",
    type: "International Journal",
    venue: "Intelligent Service Robotics",
    title: "Weighted Hierarchical Quadratic Programming: Assigning Individual Joint Weights for Each Task Priority",
    authors: "Keunwoo Jang, Sanghyun Kim†, Suhwan Park, J. Kim, Jaeheung Park",
    note: "Best Paper Award (2nd Place)",
  },
  {
    year: "2021",
    type: "International Journal",
    venue: "IEEE/ASME Transactions on Mechatronics",
    title: "Regularized Hierarchical Quadratic Program for Real-Time Whole-Body Motion Generation",
    authors: "S. Hong, Keunwoo Jang, Sanghyun Kim, Jaeheung Park",
  },
  {
    year: "2021",
    type: "International Journal",
    venue: "Applied Sciences",
    title: "Design of JET Humanoid Robot with Compliant Modular Actuators for Industrial and Service Applications",
    authors: "J. Sim, S. Kim, Suhwan Park, Sanghyun Kim, Jaeheung Park",
  },
  {
    year: "2021",
    type: "International Journal",
    venue: "IEEE Access",
    title: "A Whole-Body Control Framework Based on the Operational Space Formulation Under Inequality Constraints via Task-Oriented Optimisation",
    authors: "Y. Lee, Sanghyun Kim, Jaeheung Park, N. Tsagarakis, Jinoh Lee",
  },
  {
    year: "2021",
    type: "International Journal",
    venue: "Sensors",
    title: "Reactive Self-Collision Avoidance for a Differentially Driven Mobile Manipulator",
    authors: "Keunwoo Jang, Sanghyun Kim, Jaeheung Park",
  },
  {
    year: "2019",
    type: "International Journal",
    venue: "Journal of Bionic Engineering",
    title: "Grasping Force Estimation by sEMG Signals and Arm Posture: Tensor Decomposition Approach",
    authors: "Sanghyun Kim, J. Kim, M. Kim, S. Kim, Jaeheung Park",
  },
  {
    year: "2019",
    type: "International Journal",
    venue: "IEEE Robotics and Automation Letters",
    title: "Continuous Task Transition Approach for Robot Controller Based on Hierarchical Quadratic Programming",
    authors: "Sanghyun Kim, Keunwoo Jang, Suhwan Park, Y. Lee, S. Lee, Jaeheung Park",
  },
  {
    year: "2018",
    type: "International Journal",
    venue: "The DARPA Robotics Challenge Finals: Humanoid Robots to the Rescue",
    title: "Team SNU’s Control Strategies to Enhance Robot Capability: Lessons from the DARPA Robotics Challenge Finals 2015",
    authors: "Sanghyun Kim et al.",
  },
  {
    year: "2018",
    type: "Domestic Journal",
    venue: "Journal of Korea Robotics Society",
    title: "A Unified Framework for Overcoming Motion Constraints of Robots Using Task Transition Algorithm",
    authors: "Keunwoo Jang, Sanghyun Kim, Suhwan Park, Jaeheung Park",
    note: "Best Journal Paper Award",
  },
  {
    year: "2017",
    type: "International Journal",
    venue: "Journal of Field Robotics",
    title: "Team SNU’s Control Strategies to Enhance Robot Capability: Lessons from the 2015 DARPA Robotics Challenge Finals",
    authors: "Sanghyun Kim et al.",
  },
  {
    year: "2017",
    type: "Domestic Journal",
    venue: "Robot and Human",
    title: "HRI Research Trends: Focusing on Robot User Interfaces for Task Execution",
    authors: "J. Kim, Sanghyun Kim, Jaeheung Park",
  },
  {
    year: "2017",
    type: "Domestic Journal",
    venue: "Journal of Korea Robotics Society",
    title: "Singularity Avoidance Algorithms for Controlling Robot Manipulator: A Comparative Study",
    authors: "Sanghyun Kim, Jaeheung Park",
  },
  {
    year: "2016",
    type: "Domestic Journal",
    venue: "Journal of Institute of Control, Robotics and Systems",
    title: "Development of Tele-Operation Interface and Stable Navigation Strategy for Humanoid Robot Driving",
    authors: "S. Shin, M. Kim, J. Ahn, Sanghyun Kim, Jaeheung Park",
  },
  {
    year: "2015",
    type: "International Journal",
    venue: "Experimental Robotics",
    title: "Robot Hand Synergy Mapping Using Multi-Factor Model and EMG Signal",
    authors: "Sanghyun Kim, M. Kim, J. Lee, Jaeheung Park",
  },
  {
    year: "2015",
    type: "Domestic Journal",
    venue: "Robot and Human",
    title: "DRC Finals 2015: Analysis of Participating Teams’ Results",
    authors: "Sanghyun Kim, B. Park, Jaeheung Park",
  },
  {
    year: "2010",
    type: "Domestic Journal",
    venue: "Transactions of the Korean Society of Mechanical Engineers A",
    title: "Approximate Friction and Gravity Compensation in Haptic Laparoscopic Surgery Simulator",
    authors: "Sanghyun Kim, C. Lee, J. Kim, J. Ryu",
  },

  {
    year: "2026",
    type: "International Conference",
    venue: "IEEE International Symposium on Safety, Security, and Rescue Robotics",
    title: "Seek, Don’t Avoid: Radiation-Guided Exploration for Early Contamination Discovery",
    authors: "Miryeong Park, Taehyung Jung, Sanghyun Kim, Younggun Cho",
  },
  {
    year: "2026",
    type: "International Conference",
    venue: "26th International Conference on Control, Automation, and Systems",
    title: "Manifold-Constrained MPPI: Real-Time Sampling-Based Control Under Hard Equality Constraints",
    authors: "Seulchan Lee, Sanghyun Kim",
  },
  {
    year: "2026",
    type: "International Conference",
    venue: "IEEE 22nd International Conference on Automation Science and Engineering",
    title: "GRACE: Gradient-Free Robot Action Generation via Combined Diffusion-MPPI Posterior Estimation",
    authors: "Leesai Park, Jiho Hong, Sanghyun Kim",
    note: "Work in Progress",
  },
  {
    year: "2026",
    type: "International Conference",
    venue: "IEEE International Conference on Robotics and Automation",
    title: "Wrench-Feasible Whole-Body Planning via Time-Layered DAG Optimization for Omnidirectional Aerial Manipulation",
    authors: "Daum Park, Bohyeong Pak, Sanghyun Kim",
    note: "Late-Breaking Result",
  },
  {
    year: "2026",
    type: "Domestic Conference",
    venue: "Institute of Control, Robotics and Systems Conference",
    title: "Nav2 전방향 주행 제어기의 미세 수렴 한계 분석과 기구학 기반 수렴 제어기의 성능 검증",
    authors: "손재락, 심재훈, 김상현",
  },
  {
    year: "2026",
    type: "Domestic Conference",
    venue: "Korean Society of Mechanical Engineers 2026 Spring Conference",
    title: "화물 카트 결합형 전방향 로봇의 기구학적 정렬 및 통합 제어기 설계",
    authors: "손재락, 김상현, 심재훈",
  },
  {
    year: "2026",
    type: "Domestic Conference",
    venue: "Korean Society of Mechanical Engineers 2026 Spring Conference",
    title: "Quad Drive 기반 AGV의 배치 구조별 역기구학 해석 및 주행 제어 로직 구현",
    authors: "조민재, 박다움, 김상현",
  },
  {
    year: "2026",
    type: "Domestic Conference",
    venue: "Korean Society of Mechanical Engineers 2026 Spring Conference",
    title: "시간 계층 구조의 DAG 최적화 기법을 이용한 전방향 공중 작업 로봇의 렌치 가용 전신 경로 계획",
    authors: "박다움, 박보형, 김상현",
    note: "Best Paper Award",
  },
  {
    year: "2026",
    type: "Domestic Conference",
    venue: "Korean Society of Mechanical Engineers 2026 Spring Conference",
    title: "파라미터 인지 신경망을 이용한 로봇 말단 부착 객체의 시스템 식별",
    authors: "박수환, 김상현",
  },
  {
    year: "2026",
    type: "Domestic Conference",
    venue: "Korean Society of Mechanical Engineers 2026 Spring Conference",
    title: "4족 보행 로봇 기반 폐광산 고해상도 자기장 맵핑 프레임워크",
    authors: "윤지원, 강웅†, 김상현†",
  },
  {
    year: "2026",
    type: "Domestic Conference",
    venue: "21st Korea Robotics Society Annual Conference",
    title: "모델 예측 경로적분법을 활용한 GPU 병렬 물리 시뮬레이션 기반 실시간 물체-환경 상호작용 제어",
    authors: "박이새, 김상현",
  },
  {
    year: "2025",
    type: "International Conference",
    venue: "3rd Emerging Technologies in Mechanical Engineering",
    title: "Tool-Aware Task and Motion Planning with Dynamic Tool Changing for Automated Chemistry",
    authors: "Hyunho Cho, Bohyeong Pak, Sanghyun Kim",
  },
  {
    year: "2025",
    type: "International Conference",
    venue: "International Conference on Space Robotics",
    title: "CUTE-Planner: Confidence-Aware Uneven Terrain Exploration Planner",
    authors: "Miryeong Park, Dongjin Cho, Sanghyun Kim, Younggun Cho",
  },
  {
    year: "2025",
    type: "Domestic Conference",
    venue: "Institute of Control, Robotics and Systems Conference",
    title: "상호작용형 원격 로봇 조작을 위한 분할 기반 VR 인터페이스",
    authors: "박찬진, 조현호, 이강민, 강은애†, 김상현†",
  },
  {
    year: "2025",
    type: "Domestic Conference",
    venue: "Korean Society of Mechanical Engineers 2025 Spring Conference",
    title: "행동 트리 및 인공지능 모델 연계를 통한 자율 작업 시퀀스 구현",
    authors: "이승현, 김상현",
  },
  {
    year: "2025",
    type: "Domestic Conference",
    venue: "Korean Society of Mechanical Engineers 2025 Spring Conference",
    title: "물리 정보 학습 및 희소 회귀 방법을 이용한 매니퓰레이터 마찰 모델 식별",
    authors: "김학준, 박진성†, 김상현†",
  },
  {
    year: "2025",
    type: "Domestic Conference",
    venue: "Korean Society for Aeronautical and Space Sciences 2025 Spring Conference",
    title: "거친 지형 강인한 주행을 위한 Hybrid A* 기반 모델 예측 경로 적분 제어",
    authors: "강민형*, 이슬찬*, 양준열, 김상현",
  },
  {
    year: "2025",
    type: "Domestic Conference",
    venue: "20th Korea Robotics Society Annual Conference",
    title: "개방어휘 의미론적 매핑을 통한 캡션 활용 내비게이션",
    authors: "강은애, 홍지호, 김상현†, 신영식†",
  },
  {
    year: "2025",
    type: "Domestic Conference",
    venue: "20th Korea Robotics Society Annual Conference",
    title: "증강현실 기기를 이용한 음성 명령 기반 실시간 객체 세그멘테이션",
    authors: "강은애, 신영식, 김상현",
  },
  {
    year: "2024",
    type: "International Conference",
    venue: "11th Asian Conference on Multibody Dynamics",
    title: "Inverse Kinematics Solution to Mobile Manipulator Considering Stability Constraint and Force Manipulability",
    authors: "Seulchan Lee, Sanghyun Kim, Keunwoo Jang",
  },
  {
    year: "2024",
    type: "International Conference",
    venue: "11th Asian Conference on Multibody Dynamics",
    title: "Enhanced Online Parameter Estimation of Unknown Objects via Sparse Identification of Unmodeled Dynamics",
    authors: "Hakjun Kim, Sanghyun Kim†, Jaeheung Park†",
    note: "Best Poster Award",
  },
  {
    year: "2024",
    type: "International Conference",
    venue: "21st International Conference on Ubiquitous Robots",
    title: "Nonlinear Identification of Unknown Object Dynamics for Human-Robot Collaborative Tasks",
    authors: "Hakjun Kim, Sanghyun Kim, Jaeheung Park",
  },
  {
    year: "2024",
    type: "Domestic Conference",
    venue: "Korean Society of Mechanical Engineers 2024 Fall Conference",
    title: "시각-언어 내비게이션을 위한 개방 어휘 기반의 의미론적 맵핑",
    authors: "홍지호*, 강은애*, 김상현, 신영식",
  },
  {
    year: "2024",
    type: "Domestic Conference",
    venue: "Korean Society of Mechanical Engineers 2024 Fall Conference",
    title: "모델 예측 경로 적분을 활용한 하이브리드 케이블 구동 로봇의 전신 제어기 개발",
    authors: "강민형*, 박이새*, 장근우, 박범영†, 김상현†",
  },
  {
    year: "2024",
    type: "Domestic Conference",
    venue: "Institute of Control, Robotics and Systems Conference",
    title: "달 탐사 시뮬레이션에서의 Model Predictive Path Integral 기반 모바일 로봇 2.5D 자율 주행 제어",
    authors: "양준열, 김상현",
  },
  {
    year: "2024",
    type: "Domestic Conference",
    venue: "Korean Society of Mechanical Engineers Dynamics, Control and Robotics Division 2024 Spring Conference",
    title: "모바일 매니퓰레이터의 AR 디스플레이 인터페이스 설계",
    authors: "조현호, 김상현",
  },
  {
    year: "2024",
    type: "Domestic Conference",
    venue: "Korean Society of Mechanical Engineers Dynamics, Control and Robotics Division 2024 Spring Conference",
    title: "ICP 알고리즘을 활용한 QR 마커 기반 도킹 시스템 향상",
    authors: "강민형, 양준열, 김상현",
  },
  {
    year: "2024",
    type: "Domestic Conference",
    venue: "Korean Society of Mechanical Engineers Dynamics, Control and Robotics Division 2024 Spring Conference",
    title: "달 탐사 시뮬레이션 기반 모바일 로봇의 2.5D 자율 주행 기법",
    authors: "양준열, 김상현",
  },
  {
    year: "2023",
    type: "International Conference",
    venue: "23rd International Conference on Control, Automation and Systems",
    title: "Improving Indoor Positioning Systems with UWB and Filtering Techniques: A Comparative Analysis",
    authors: "R. Rahul, Y. Jung, D. Shin, Sanghyun Kim, C.-H. Kim, S. Lee, J. Kye",
  },
  {
    year: "2023",
    type: "International Conference",
    venue: "18th International Conference on Intelligent Autonomous Systems",
    title: "Efficient Traversability Mapping Based on Single Camera and 3D LiDAR",
    authors: "C. Youn, Y. Wonkeun, Sanghyun Kim, Jaeheung Park, Y. Shin",
  },
  {
    year: "2022",
    type: "International Conference",
    venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems",
    title: "Learning to Guide Online Multi-Contact Receding Horizon Planning",
    authors: "J. Wang, T. S. Lembono, Sanghyun Kim, S. Calinon, S. Vijayakumar, S. Tonneau",
  },
  {
    year: "2021",
    type: "International Conference",
    venue: "IEEE-RAS International Conference on Humanoid Robots",
    title: "Multi-Fidelity Receding Horizon Planning for Multi-Contact Locomotion",
    authors: "J. Wang, Sanghyun Kim, S. Vijayakumar, S. Tonneau",
  },
  {
    year: "2020",
    type: "Domestic Conference",
    venue: "15th Korea Robotics Society Annual Conference",
    title: "Inverse Kinematics Minimizing Joint Torque with Given Target Wrench",
    authors: "Suhwan Park, Keunwoo Jang, S. Kim, Sanghyun Kim, Jaeheung Park",
  },
  {
    year: "2019",
    type: "International Conference",
    venue: "IEEE International Conference on Advanced Robotics and Mechatronics",
    title: "Whole-Body Control for Nonholonomic Mobile Manipulator Using Hierarchical Quadratic Programming and Continuous Task Transition",
    authors: "Sanghyun Kim, Keunwoo Jang, Suhwan Park, Y. Lee, S. Lee, Jaeheung Park",
    note: "Best Conference Paper Award",
  },
  {
    year: "2019",
    type: "Domestic Conference",
    venue: "14th Korea Robotics Society Annual Conference",
    title: "Self-Collision Avoidance Algorithm for Robot Manipulator Using Continuous Task Transition Algorithm",
    authors: "Keunwoo Jang, Sanghyun Kim, Suhwan Park, S. Y. Lee, Jaeheung Park",
  },
  {
    year: "2019",
    type: "Domestic Conference",
    venue: "14th Korea Robotics Society Annual Conference",
    title: "A Comparative Study of Tracking Control with Closed Loop Inverse Kinematics Algorithm",
    authors: "S. Y. Lee, Suhwan Park, Keunwoo Jang, Sanghyun Kim, S. Kim, Jaeheung Park",
  },
  {
    year: "2018",
    type: "International Conference",
    venue: "15th International Conference on Ubiquitous Robots",
    title: "Real-Time Inverse Kinematics Technique for Controlling Redundant Avatar Arm",
    authors: "Sanghyun Kim, J. Kim, Jaeheung Park",
  },
  {
    year: "2018",
    type: "International Conference",
    venue: "IEEE International Conference on Robotics and Automation",
    title: "Disturbance Observer-Based Linear Feedback Controller for Compliant Motion of Humanoid Robot",
    authors: "M. Kim, J.-H. Kim, Sanghyun Kim, J. Sim, Jaeheung Park",
  },
  {
    year: "2017",
    type: "International Conference",
    venue: "International Symposium on Experimental Robotics",
    title: "Application of Robot Manipulator for Cardiopulmonary Resuscitation",
    authors: "J. Jung, J. Kim, Sanghyun Kim, W. Kwon, S. Na, K. Kim, G. Suh, B. Yoo, J. Choi, J. Lee, Jaeheung Park",
  },
  {
    year: "2017",
    type: "Domestic Conference",
    venue: "Korean Society for Precision Engineering 2017 Fall Conference",
    title: "Joint Limit Avoidance of Non-Holonomic Mobile Manipulator Using Weighting Matrix in Generalized Pseudo-Inverse",
    authors: "Keunwoo Jang, Sanghyun Kim, Suhwan Park, Jaeheung Park",
  },
  {
    year: "2016",
    type: "International Conference",
    venue: "13th International Conference on Ubiquitous Robots and Ambient Intelligence",
    title: "Human Motion Imitation for Humanoid by Recurrent Neural Network",
    authors: "M. Kim, Sanghyun Kim, Jaeheung Park",
  },
  {
    year: "2015",
    type: "International Conference",
    venue: "IEEE-RAS International Conference on Humanoid Robots",
    title: "Approach of Team SNU to the DARPA Robotics Challenge Finals",
    authors: "Sanghyun Kim et al.",
  },
  {
    year: "2015",
    type: "Domestic Conference",
    venue: "Conference on Information and Control Systems",
    title: "Avatar Motion Generation by Null-Space Mapping Based on Minimum Number of Markers",
    authors: "M. Kim, R. Destenay, Sanghyun Kim, J. Kwon, K. Yeom, Jaeheung Park, B. You",
  },
  {
    year: "2014",
    type: "International Conference",
    venue: "IEEE-RAS International Conference on Humanoid Robots",
    title: "Aesthetic Design and Development of Humanoid Legged Robot",
    authors: "M. Schwartz, S. Hwang, Y. Lee, J. Won, Sanghyun Kim, Jaeheung Park",
  },
  {
    year: "2014",
    type: "Domestic Conference",
    venue: "9th Korea Robotics Society Annual Conference",
    title: "Extracting Postural Synergies Using Grasping Taxonomy",
    authors: "Sanghyun Kim, M. Kim, Jaeheung Park",
  },
  {
    year: "2014",
    type: "Domestic Conference",
    venue: "9th Korea Robotics Society Annual Conference",
    title: "Estimation of Hand Posture and Grasping Force Using Surface EMG",
    authors: "J. Lee, M. Kim, Sanghyun Kim, Jaeheung Park",
  },
  {
    year: "2010",
    type: "International Conference",
    venue: "6th Asian Conference on Computer Aided Surgery",
    title: "Data-Driven Haptic Rendering of Friction Between Surgical Device and Trocar for Laparoscopic Surgery Simulator",
    authors: "Sanghyun Kim, C. Lee, J. Ryu",
  },
  {
    year: "2010",
    type: "Domestic Conference",
    venue: "Korean Society of Mechanical Engineers Conference",
    title: "Trocar Friction Modelling for Friction and Gravity Compensation",
    authors: "Sanghyun Kim, C. Lee, J. Kim, J. Ryu",
  },
  {
    year: "2010",
    type: "Domestic Conference",
    venue: "Korean Society of Mechanical Engineers Conference",
    title: "Friction and Gravity Compensation in Haptic Laparoscopic Surgery Simulator",
    authors: "Sanghyun Kim, C. Lee, J. Kim, J. Ryu",
  },
];

export const patents: Patent[] = [
  { year: "2026", status: "Application", inventors: "김상현, 이슬찬", title: "제약 조건 보정을 이용한 로봇 시스템 제어 장치 및 방법", number: "10-2026-0132773" },
  { year: "2026", status: "Application", inventors: "김상현, 강민형", title: "리만 배리어 메트릭 기반 모션 플래닝 시스템 및 방법", number: "10-2026-0113538" },
  { year: "2026", status: "Application", inventors: "김상현, 강은애, 홍지호, 신영식", title: "인스턴스 수준 시맨틱 맵 기반 자연어 내비게이션 장치 및 방법", number: "10-2026-0075610" },
  { year: "2026", status: "Application", inventors: "김상현, 조현호, 박보형", title: "화학 실험 자율 수행 장치 및 방법", number: "10-2026-0025745" },
  { year: "2026", status: "Registration", inventors: "김상현, 양준열, 강민형", title: "라이다 기반 모바일 로봇의 도킹 시스템 및 도킹 방법", number: "10-2924819", jurisdiction: "Korea" },
  { year: "2025", status: "Application", inventors: "김상현, 김정윤, 김학준", title: "데이터 기반 마찰 모델을 이용한 디지털 트윈 시뮬레이션 정합향상시스템 및 정합향상방법", number: "10-2025-018032" },
  { year: "2025", status: "Application", inventors: "김상현, 장근우, 박이새", title: "샘플 보정 및 밀도기반 클러스터링을 활용한 장애물 회피 경로 생성 장치 및 방법", number: "10-2025-0119564" },
  { year: "2024", status: "Application", inventors: "김상현, 이슬찬, 박이새, 박수환", title: "매니퓰레이터를 결합한 하이브리드 케이블 구동 로봇의 전신 제어시스템 및 제어방법", number: "10-2024-0090023" },
  { year: "2024", status: "Program Copyright", inventors: "김상현, 양준열", title: "달 탐사용 자율 주행 시뮬레이션 프로그램", number: "C-2024-026248" },
  { year: "2023", status: "Registration", inventors: "Sanghyun Kim et al.", title: "Track Wheel for a Mobile Robot and Mobile Robot Including the Same", number: "10-2603028", jurisdiction: "Korea" },
  { year: "2022", status: "Registration", inventors: "Sanghyun Kim et al.", title: "Modular Robot and Control Method for a Modular Robot", number: "10-2459965", jurisdiction: "Korea" },
  { year: "2019", status: "Registration", inventors: "Sanghyun Kim et al.", title: "Automatic Cardiopulmonary Resuscitation Device and Control Method Therefor", number: "US 20190029919A1 · CN 108697572A · EU 3409258A1", jurisdiction: "United States · China · European Union" },
  { year: "2016", status: "Registration", inventors: "Sanghyun Kim et al.", title: "Apparatus for Automatic Cardiopulmonary Resuscitation", number: "10-2016-0172286", jurisdiction: "Korea" },
  { year: "2016", status: "Registration", inventors: "Sanghyun Kim, Jaeheung Park, Mingon Kim, Jimin Lee, Joungheum Kwon, Bumjae You", title: "Apparatus for Estimating Grasping Posture and Grasping Force", number: "10-2016-0075150", jurisdiction: "Korea" },
  { year: "2026", status: "Program Copyright", inventors: "김상현, 정태현, 송은혜, 설우진, 서영빈, 이승윤", title: "방사능 지도 작성을 위한 자율 주행 시뮬레이션 프로그램" },
];

export const facilities = [
  "Unitree H1-2 full-size humanoid",
  "Robros IGRIS-C full-size humanoid",
  "Scout mobile manipulator with Franka arm",
  "Hunter, Limo, TurtleBot 3/4 mobile robots",
  "Go2, Go2-W, and A2 quadruped robots",
  "FR5, Piper, and SO-ARM100 manipulators",
  "Nokov Pluto motion-capture system",
  "HoloLens 2, Apple Vision Pro, and Meta Quest 3",
  "A6000-class GPU servers and workstations",
];
