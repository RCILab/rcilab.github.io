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
    title: "VAE-MPPI: Closed-Chain Constrained Trajectory Optimization for Dual-Arm Robot Manipulation",
    authors: "Seulchan Lee, Sanghyun Kim",
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
    type: "International Conference",
    venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems",
    title: "CSC-MPPI: A Novel Constrained MPPI Framework with DBSCAN for Reliable Obstacle Avoidance",
    authors: "Leesai Park, Keunwoo Jang*, Sanghyun Kim*",
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
    authors: "Suhwan Park, Leesai Park, Seulchan Lee, Sanghyun Kim",
  },
  {
    year: "2023",
    type: "International Journal",
    venue: "IEEE Robotics and Automation Letters",
    title: "Motion Planning of Mobile Manipulator for Navigation Including Door Traversal",
    authors: "Keunwoo Jang, Sanghyun Kim*, Jaeheung Park*",
  },
  {
    year: "2023",
    type: "International Journal",
    venue: "IEEE Access",
    title: "Dual-Arm Path-Planning Algorithm for Wiring Harness Assembly Using Redundantly Actuated Robotic Systems",
    authors: "J. Kim, J-G Kim, J. Park, B-K Han, Sanghyun Kim*, D. Park*",
  },
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
