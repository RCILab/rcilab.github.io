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
  category: "Publication" | "Award" | "Grant" | "Service" | "Lab" | "Media" | "Patent";
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
  jcr?: string;
  links?: { label: string; href: string }[];
};

export type Patent = {
  year: string;
  status: "Application" | "Registration" | "Program";
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
    title: "Sanghyun Kim has been appointed to the organizing committee for IEEE ICRA 2027.",
  },
  {
    date: "2026.08",
    category: "Service",
    title: "Sanghyun Kim will serve as an Associate Editor for IEEE-RAS Humanoids 2026.",
  },
  {
    date: "2026.08",
    category: "Grant",
    title: "RCI Lab won a grant from Mobinn.",
    detail: "과제명: 이동형 양팔 로봇의 제어시스템 개발 · 과제형태: 산학협력 · 지원기관: 모빈 · 수행기간: 2026",
  },
  {
    date: "2026.08",
    category: "Publication",
    title: "Our paper by Thanh Nguyen Truong has been accepted to Information Sciences.",
    detail: "Thanh Nguyen Truong, Sanghyun Kim, “High-Performance Fixed-Time Active Fault-Tolerant Control of Robotic Manipulators via Sparse Physics-Informed Dynamics Learning,” Information Sciences, 2026.",
  },
  {
    date: "2026.07",
    category: "Grant",
    title: "RCI Lab won a grant from PIE Robotics.",
    detail: "과제명: 자율 공정을 위한 모션 플래닝 기술 개발 · 과제형태: 산학협력 · 지원기관: PIE Robotics · 수행기간: 2026",
  },
  {
    date: "2026.07",
    category: "Grant",
    title: "RCI Lab won a grant from KailosLab.",
    detail: "과제명: 화학 실험 자동화를 위한 VLM 기반 제어 기술 개발 · 과제형태: 산학협력 · 지원기관: 카이로스랩 · 수행기간: 2026",
  },
  {
    date: "2026.07",
    category: "Grant",
    title: "RCI Lab won a grant from ENOZ.",
    detail: "과제명: 휴머노이드 교육 자문 용역 · 과제형태: 산학협력 · 지원기관: 이앤오즈 · 수행기간: 2026",
  },
  {
    date: "2026.07",
    category: "Grant",
    title: "RCI Lab won a grant from Roboe Technologies.",
    detail: "과제명: 화물하역작업을 위한 모션플래닝 알고리즘의 개발 · 과제형태: 산학협력 · 지원기관: 로보에 테크놀로지 · 수행기간: 2026",
  },
  {
    date: "2026.07",
    category: "Publication",
    title: "Our paper by Jiho Hong and Eunae Kang has been accepted to Engineering Applications of Artificial Intelligence.",
    detail: "Jiho Hong*, Eunae Kang*, Sanghyun Kim†, Young-Sik Shin†, “Instance-Enriched Semantic Maps for Visual Language Navigation,” Engineering Applications of Artificial Intelligence, 2026.",
    href: "https://rcilab.github.io/iesm_vln/",
  },
  {
    date: "2026.07",
    category: "Award",
    title: "Our paper by Daum Park and Bohyeong Pak received the Best Paper Award from the Dynamics, Control and Robotics Division of the Korean Society of Mechanical Engineers.",
    detail: "박다움, 박보형, 김상현, “시간 계층 구조의 DAG 최적화 기법을 이용한 전방향 공중 작업 로봇의 렌치 가용 전신 경로 계획,” 대한기계학회 2026년 춘계학술대회, 2026.",
  },
  {
    date: "2026.07",
    category: "Grant",
    title: "RCI Lab won a grant from the Korea Institute of Machinery & Materials.",
    detail: "과제명: 이동형 휴머노이드 동작제어 SW · 과제형태: 연구용역 · 지원기관: 한국기계연구원 · 수행기간: 2026",
  },
  {
    date: "2026.06",
    category: "Grant",
    title: "RCI Lab won a government grant from the Korea Technology and Information Promotion Agency for SMEs.",
    detail: "과제명: 고하중 물체 이송을 위한 세미 휴머노이드 양팔로봇의 전신 제어기술 · 과제형태: 정부과제(스케일업 팁스 R&D) · 지원기관: 중소기업기술정보진흥원 · 수행기간: 2026–2029",
  },
  {
    date: "2026.06",
    category: "Grant",
    title: "RCI Lab won a grant from MetaMotionX.",
    detail: "과제명: 자율주행 경로생성 소프트웨어 개발 · 과제형태: 산학협력 · 지원기관: 메타모션엑스 · 수행기간: 2026",
  },
  {
    date: "2026.05",
    category: "Grant",
    title: "RCI Lab won a grant from the Korea Research Institute of Ships and Ocean Engineering.",
    detail: "과제명: 피지컬 AI 기반 해양 다자유도 로봇의 통합 제어 기법 연구 · 과제형태: 정부·연구소과제(학연공동연구사업) · 지원기관: 선박해양플랜트연구소 · 수행기간: 2026",
  },
  {
    date: "2026.05",
    category: "Publication",
    title: "One paper has been accepted to the Journal of Korea Robotics Society.",
    detail: "이슬찬, 김상현, “VAE-MPPI: 양팔 로봇 조작을 위한 폐쇄 연쇄 제약 궤적 최적화,” 로봇학회 논문지, 2026.",
  },
  {
    date: "2026.05",
    category: "Grant",
    title: "RCI Lab won a grant from the Gyeonggi RISE Center.",
    detail: "과제명: Behavior Tree 기반 고장 대응형 야지 자율주행 SW 개발 · 과제형태: 정부과제(경기 RISE 지산학 협력 기술개발과제) · 지원기관: 경기 RISE 센터 · 수행기간: 2026",
  },
  {
    date: "2026.04",
    category: "Grant",
    title: "RCI Lab entered into a technology-transfer agreement with PIT-IN.",
    detail: "과제명: 라이다 기반 모바일 로봇의 도킹 시스템 및 도킹방법 · 과제형태: 기술이전(통상특허권) · 지원기관: 피트인 · 수행기간: 2026",
  },
  {
    date: "2026.04",
    category: "Award",
    title: "RCI Lab won the Merit Award at the Humanoid Real-World Challenge hosted by the Korea Institute of Robotics Industry Advancement.",
  },
  {
    date: "2026.03",
    category: "Media",
    title: "Sanghyun Kim was interviewed by MBC about the rapid advancement of humanoid robotics technology.",
  },
  {
    date: "2026.03",
    category: "Grant",
    title: "RCI Lab won a government grant from the National Research Foundation of Korea.",
    detail: "과제명: 생성형 정책과 모델 예측 제어의 하이브리드 Physical AI 프레임워크: 매니퓰레이터의 모션 제어에서 휴머노이드의 전신 제어까지 · 과제형태: 정부과제(우수연구–신진연구 유형B) · 지원기관: 한국연구재단 · 수행기간: 2026–2030",
  },
  {
    date: "2026.03",
    category: "Grant",
    title: "RCI Lab won a government grant from the Rural Development Administration.",
    detail: "과제명: 과수 농작업 행동특성 모방 학습형 제어기술 개발 및 농업로봇 기술 표준화 연구 · 과제형태: 정부과제(지능형농업로봇핵심기반기술개발 R&D) · 지원기관: 농촌진흥청 · 수행기간: 2026–2030",
  },
  {
    date: "2026.02",
    category: "Grant",
    title: "RCI Lab participates in the BK21 FOUR Program.",
    detail: "과제명: 초고령사회 플랫폼 기반 사람중심의 고령서비스-테크 문제해결형 혁신인재 양성사업 · 과제형태: 정부과제(4단계 BK21 사업) · 지원기관: 교육부 · 수행기간: 2026–2027",
  },
  {
    date: "2026.02",
    category: "Patent",
    title: "RCI Lab registered a domestic patent.",
    detail: "김상현, 양준열, 강민형, “라이다 기반 모바일 로봇의 도킹 시스템 및 도킹방법,” 대한민국 특허 10-2924819, 2026.02.04.",
  },
  {
    date: "2026.02",
    category: "Grant",
    title: "RCI Lab won a grant from PonyLink.",
    detail: "과제명: 4족보행로봇의 자율주행 요소 기술 개발 (2차) · 과제형태: 산학협력 · 지원기관: 포니링크 · 수행기간: 2026",
  },
  {
    date: "2026.01",
    category: "Media",
    title: "Sanghyun Kim was interviewed by the YouTube channel KLAB about the rapid advancement of humanoid robotics technology.",
  },
  {
    date: "2026.01",
    category: "Grant",
    title: "RCI Lab won a grant from the Korea Institute of Science and Technology.",
    detail: "과제명: 스마트팜 수확 자동화 로봇용 매니퓰레이터의 동작과 최적 경로 생성 및 제어 · 과제형태: 정부·연구소과제(KIST 주요사업 위탁연구과제) · 지원기관: 한국과학기술연구원 · 수행기간: 2026",
  },
  {
    date: "2026.01",
    category: "Service",
    title: "Sanghyun Kim will serve as an Associate Editor for IEEE/RSJ IROS 2026.",
  },
  {
    date: "2026.01",
    category: "Service",
    title: "Sanghyun Kim has been appointed as an Editorial Board Member for the Institute of Control, Robotics and Systems magazine.",
  },
  {
    date: "2026.01",
    category: "Lab",
    title: "RCI Lab gathered to celebrate the end of 2025.",
    href: "/picture/",
  },
  {
    date: "2026.01",
    category: "Lab",
    title: "RCI Lab published its 2025 achievements summary.",
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
  { name: "Seunghyun Lee", degree: "M.S.", joined: "2023-2", affiliation: "FunctionBay" },
  { name: "Hakjun Kim", degree: "M.S.", joined: "2023-2", affiliation: "Doosan Robotics" },
  { name: "Joonyeol Yang", degree: "M.S.", joined: "2023-2", affiliation: "HL Robotics" },
  { name: "Jiwon Yoon", degree: "M.S.", joined: "2024-2", affiliation: "Magenta Robotics" },
  { name: "Eunae Kang", degree: "M.S.", joined: "2024-2", affiliation: "Blue Robin" },
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
    links: [{ label: "Project", href: "https://rcilab.github.io/graft/" }],
  },
  {
    year: "2026",
    type: "International Journal",
    venue: "ISA Transactions",
    title: "Title Withheld (MPPI Review)",
    note: "Under Review",
  },
  {
    year: "2026",
    type: "International Journal",
    venue: "Engineering Science and Technology, an International Journal",
    title: "Task-Specific Acceleration-Domain Trajectory Optimization for Smooth and Energy-Efficient Industrial Manipulator Motion",
    note: "In Revision",
    jcr: "12.1%",
  },
  {
    year: "2026",
    type: "International Journal",
    venue: "International Journal of Control, Automation, and Systems",
    title: "Manifold-Constrained MPPI: Real-Time Sampling-Based Control Under Hard Constraints",
    note: "In Revision",
    links: [
      { label: "Project", href: "https://rcilab.github.io/mcmppi/" },
      { label: "arXiv", href: "https://arxiv.org/abs/2605.24813" },
    ],
  },
  {
    year: "2026",
    type: "International Journal",
    venue: "IEEE Transactions on Robotics",
    title: "RMRRT: Riemannian Barrier Metric RRT for Inequality-Aware Steering on Equality Manifolds",
    note: "In Revision",
    jcr: "9.4%",
    links: [{ label: "Project", href: "https://rmrrt-anonymous.github.io/" }],
  },
];

export const publications: Publication[] = [
  {
    year: "2026",
    type: "International Journal",
    venue: "Information Sciences",
    title: "High-Performance Fixed-Time Active Fault-Tolerant Control of Robotic Manipulators via Sparse Physics-Informed Dynamics Learning",
    authors: "Thanh Nguyen Truong, Sanghyun Kim†",
    jcr: "18.2%",
    links: [{ label: "DOI", href: "https://doi.org/10.1016/j.ins.2026.124001" }],
  },
  {
    year: "2026",
    type: "International Journal",
    venue: "Engineering Applications of Artificial Intelligence",
    title: "Instance-Enriched Semantic Maps for Visual Language Navigation",
    authors: "Jiho Hong*, Eunae Kang*, Sanghyun Kim†, Young-Sik Shin†",
    jcr: "3.1%",
    links: [
      { label: "DOI", href: "https://doi.org/10.1016/j.engappai.2026.115676" },
      { label: "Project", href: "https://rcilab.github.io/iesm_vln/" },
      { label: "arXiv", href: "https://arxiv.org/abs/2607.12630" },
    ],
  },
  {
    year: "2026",
    type: "Domestic Journal",
    venue: "로봇학회 논문지",
    title: "VAE-MPPI: 양팔 로봇 조작을 위한 폐쇄 연쇄 제약 궤적 최적화",
    authors: "이슬찬, 김상현",
  },
  {
    year: "2026",
    type: "Domestic Journal",
    venue: "대한기계학회 논문집 A",
    title: "Sim-to-Real 성능 향상을 위한 다물체 동역학과 데이터 기반 마찰 모델을 이용한 고정밀 시뮬레이션",
    authors: "김정윤*, 김학준*, 최진환†, 김상현†",
    links: [{ label: "DOI", href: "https://doi.org/10.3795/ksme-a.2026.50.1.13" }],
  },
  {
    year: "2025",
    type: "International Journal",
    venue: "Mathematics",
    title: "Hybrid A*-guided Model Predictive Path Integral Control for Robust Navigation in Rough Terrains",
    authors: "Joonyeol Yang*, Minhyeong Kang*, Seulchan Lee, Sanghyun Kim†",
    jcr: "6.0%",
    links: [{ label: "DOI", href: "https://doi.org/10.3390/math13050810" }],
  },
  {
    year: "2025",
    type: "International Journal",
    venue: "Journal of Mechanical Science and Technology",
    title: "Enhanced Online Parameter Estimation of Unknown Objects via Sparse Identification of Unmodeled Dynamics",
    authors: "Hakjun Kim, Sanghyun Kim†, Jinseong Park†",
    links: [{ label: "DOI", href: "https://doi.org/10.1007/s12206-025-2201-2" }],
  },
  {
    year: "2025",
    type: "Domestic Journal",
    venue: "대한기계학회 논문집 A",
    title: "험지 환경에서의 자율주행 로봇 경로 계획 성능 벤치마크 및 고찰",
    authors: "양준열, 이강민, 정은빈, 방혜원, 조용진, 강인성, 김상현†",
    links: [{ label: "DOI", href: "https://doi.org/10.3795/ksme-a.2025.49.12.1001" }],
  },
  {
    year: "2025",
    type: "Domestic Journal",
    venue: "대한기계학회 논문집 A",
    title: "모델 예측 경로 적분을 활용한 하이브리드 케이블 구동 로봇의 전신 제어기 개발",
    authors: "강민형*, 박이새*, 장근우, 박범영†, 김상현†",
    links: [{ label: "DOI", href: "https://doi.org/10.3795/ksme-a.2025.49.2.089" }],
  },
  {
    year: "2024",
    type: "International Journal",
    venue: "IEEE Transactions on Automation Science and Engineering",
    title: "Object-Aware Impedance Control for Human-Robot Collaborative Task with Online Object Parameter Estimation",
    authors: "Jinseong Park, Yong-Sik Shin†, Sanghyun Kim†",
    jcr: "16.1%",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/TASE.2024.3477471" }],
  },
  {
    year: "2024",
    type: "International Journal",
    venue: "Nonlinear Dynamics",
    title: "Whole-body Control of Redundant Hybrid Cable-Driven Robot with Manipulator: Hierarchical Quadratic Programming Approach",
    authors: "Suhwan Park*, Leesai Park*, Seulchan Lee*, Sanghyun Kim†",
    jcr: "7.9%",
    links: [{ label: "DOI", href: "https://doi.org/10.1007/s11071-024-10082-3" }],
  },
  {
    year: "2024",
    type: "International Journal",
    venue: "IEEE Transactions on Robotics",
    title: "Online Multi-Contact Receding Horizon Planning via Value Function Approximation",
    authors: "Jiayi Wang†, Sanghyun Kim, Teguh Santoso Lembono, Wenqian Du, Jaehyun Shim, Saeid Samadi, Ke Wang, Vladimir Ivan, Sylvain Calinon, Sethu Vijayakumar, Steve Tonneau",
    jcr: "9.4%",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/TRO.2024.3392154" }],
  },
  {
    year: "2024",
    type: "International Journal",
    venue: "Sensors",
    title: "Comparative Analysis of Integrated Filtering Method Using UWB Localization in Indoor Environments",
    authors: "Rahul Ranjan, Donggyu Shin, Yoonsik Jung, Sanghyun Kim, Jong-Hwan Yun, Chang-Hyun Kim, Seungjae Lee, Joongeup Kye†",
    links: [{ label: "DOI", href: "https://doi.org/10.3390/s24041052" }],
  },
  {
    year: "2024",
    type: "International Journal",
    venue: "Applied Sciences",
    title: "The Development of Software to Automate the Laser Welding of a Liquefied Natural Gas Cargo Tank Using a Mobile Manipulator",
    authors: "Taeyong Choi†, Jongwoo Park, Jeongae Bak, Dongil Park, Hyunuk Seo, Sanghyun Kim",
    links: [{ label: "DOI", href: "https://doi.org/10.3390/app14010134" }],
  },
  {
    year: "2023",
    type: "International Journal",
    venue: "IEEE Robotics and Automation Letters",
    title: "Motion Planning of Mobile Manipulator for Navigation Including Door Traversal",
    authors: "Keunwoo Jang, Sanghyun Kim†, Jaeheung Park†",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/LRA.2023.3279612" }],
  },
  {
    year: "2023",
    type: "International Journal",
    venue: "IEEE Access",
    title: "Dual-Arm Path-Planning Algorithm for Wiring Harness Assembly Using Redundantly Actuated Robotic Systems",
    authors: "Jiyoung Kim, Jin-Gyun Kim, Jongwoo Park, Byung-Kil Han, Sanghyun Kim†, Dong Il Park†",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/ACCESS.2023.3306793" }],
  },
  {
    year: "2022",
    type: "International Journal",
    venue: "Intelligent Service Robotics",
    title: "Weighted Hierarchical Quadratic Programming: Assigning Individual Joint Weights for Each Task Priority",
    authors: "Keunwoo Jang, Sanghyun Kim†, Suhan Park, Junhyung Kim, Jaeheung Park",
    note: "Best Paper Award (2nd Place)",
    links: [{ label: "DOI", href: "https://doi.org/10.1007/s11370-022-00431-9" }],
  },
  {
    year: "2021",
    type: "International Journal",
    venue: "IEEE/ASME Transactions on Mechatronics",
    title: "Regularized Hierarchical Quadratic Program for Real-Time Whole-Body Motion Generation",
    authors: "Seongil Hong, Keunwoo Jang, Sanghyun Kim, Jaeheung Park†",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/TMECH.2020.3032522" }],
  },
  {
    year: "2021",
    type: "International Journal",
    venue: "Applied Sciences",
    title: "Design of JET Humanoid Robot with Compliant Modular Actuators for Industrial and Service Applications",
    authors: "Jaehoon Sim, Seungyeon Kim, Suhan Park, Sanghyun Kim, Mingon Kim, Jaeheung Park†",
    links: [{ label: "DOI", href: "https://doi.org/10.3390/app11136152" }],
  },
  {
    year: "2021",
    type: "International Journal",
    venue: "IEEE Access",
    title: "A Whole-Body Control Framework Based on the Operational Space Formulation Under Inequality Constraints via Task-Oriented Optimisation",
    authors: "Yisoo Lee, Sanghyun Kim, Jaeheung Park, Nikos Tsagarakis, Jinoh Lee†",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/ACCESS.2021.3064151" }],
  },
  {
    year: "2021",
    type: "International Journal",
    venue: "Sensors",
    title: "Reactive Self-Collision Avoidance for a Differentially Driven Mobile Manipulator",
    authors: "Keunwoo Jang, Sanghyun Kim, Jaeheung Park†",
    links: [{ label: "DOI", href: "https://doi.org/10.3390/s21030890" }],
  },
  {
    year: "2019",
    type: "International Journal",
    venue: "Journal of Bionic Engineering",
    title: "Grasping Force Estimation by sEMG Signals and Arm Posture: Tensor Decomposition Approach",
    authors: "Sanghyun Kim, Joowan Kim, Mingon Kim, Seungyeon Kim, Jaeheung Park†",
    links: [{ label: "DOI", href: "https://doi.org/10.1007/s42235-019-0037-0" }],
  },
  {
    year: "2019",
    type: "International Journal",
    venue: "IEEE Robotics and Automation Letters",
    title: "Continuous Task Transition Approach for Robot Controller Based on Hierarchical Quadratic Programming",
    authors: "Sanghyun Kim, Keunwoo Jang, Suhan Park, Yisoo Lee, Sang Yup Lee, Jaeheung Park",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/LRA.2019.2896769" }],
  },
  {
    year: "2018",
    type: "International Journal",
    venue: "The DARPA Robotics Challenge Finals: Humanoid Robots to the Rescue",
    title: "Team SNU’s Control Strategies to Enhance Robot Capability: Lessons from the DARPA Robotics Challenge Finals 2015",
    authors: "Sanghyun Kim, Mingon Kim, Jimin Lee, Soonwook Hwang, Joonbo Chae, Beomyeong Park, Hyunbum Cho, Jaehoon Sim, Jaesug Jung, Hosang Lee, Seho Shin, Minsung Kim, Wonje Choi, Yisoo Lee, Sumin Park, Jiyong Oh, Yongjin Lee, Sangkuk Lee, Myunggi Lee, Sangyup Yi, Kyong-Sok K. C. Chang, Nojun Kwak, Jaeheung Park†",
    links: [{ label: "DOI", href: "https://doi.org/10.1007/978-3-319-74666-1_10" }],
  },
  {
    year: "2018",
    type: "Domestic Journal",
    venue: "로봇학회 논문지",
    title: "작업 전이 알고리즘을 이용한 로봇의 동작 제약 극복을 위한 통합 프레임워크",
    authors: "장근우, 김상현, 박수한, 박재흥†",
    note: "Best Journal Paper Award",
    links: [{ label: "DOI", href: "https://doi.org/10.7746/jkros.2018.13.2.129" }],
  },
  {
    year: "2017",
    type: "International Journal",
    venue: "Journal of Field Robotics",
    title: "Team SNU’s Control Strategies to Enhance Robot Capability: Lessons from the 2015 DARPA Robotics Challenge Finals",
    authors: "Sanghyun Kim, Mingon Kim, Jimin Lee, Soonwook Hwang, Joonbo Chae, Beomyeong Park, Hyunbum Cho, Jaehoon Sim, Jaesug Jung, Hosang Lee, Seho Shin, Minsung Kim, Wonje Choi, Yisoo Lee, Sumin Park, Jiyong Oh, Yongjin Lee, Sangkuk Lee, Myunggi Lee, Sangyup Yi, Kyong-Sok K. C. Chang, Nojun Kwak, Jaeheung Park†",
    links: [{ label: "DOI", href: "https://doi.org/10.1002/rob.21678" }],
  },
  {
    year: "2017",
    type: "Domestic Journal",
    venue: "로봇과 인간",
    title: "HRI 연구 동향 - 작업 수행을 위한 로봇 사용자 인터페이스를 중심으로",
    authors: "김준형, 김상현, 박재흥†",
  },
  {
    year: "2017",
    type: "Domestic Journal",
    venue: "로봇학회 논문지",
    title: "로봇 메니퓰레이터의 제어를 위한 특이점 회피 알고리즘의 비교 연구",
    authors: "김상현, 박재흥†",
    links: [{ label: "DOI", href: "https://doi.org/10.7746/jkros.2017.12.1.042" }],
  },
  {
    year: "2016",
    type: "Domestic Journal",
    venue: "제어·로봇·시스템학회 논문지",
    title: "휴머노이드 로봇 주행을 위한 원격 조종 인터페이스 및 안정적인 주행 전략 개발",
    authors: "신세호, 김민성, 안준우, 김상현, 박재흥†",
    links: [{ label: "DOI", href: "https://doi.org/10.5302/J.ICROS.2016.16.0153" }],
  },
  {
    year: "2015",
    type: "International Journal",
    venue: "Experimental Robotics",
    title: "Robot Hand Synergy Mapping Using Multi-Factor Model and EMG Signal",
    authors: "Sanghyun Kim, Mingon Kim, Jimin Lee, Jaeheung Park†",
    links: [{ label: "DOI", href: "https://doi.org/10.1007/978-3-319-23778-7_44" }],
  },
  {
    year: "2015",
    type: "Domestic Journal",
    venue: "로봇과 인간",
    title: "DRC Finals 2015 - 참가팀들의 결과분석",
    authors: "김상현, 박범영, 박재흥†",
  },
  {
    year: "2011",
    type: "Domestic Journal",
    venue: "대한기계학회 논문집 A",
    title: "햅틱 복강경 수술 시뮬레이터에서의 근사적 마찰 및 중력 보상",
    authors: "김상현, 이창규, 김지숙, 류제하†",
    links: [{ label: "DOI", href: "https://doi.org/10.3795/ksme-a.2011.35.8.883" }],
  },

  {
    year: "2026",
    type: "International Conference",
    venue: "IEEE International Symposium on Safety, Security, and Rescue Robotics",
    title: "Seek, Don’t Avoid: Radiation-Guided Exploration for Early Contamination Discovery",
    authors: "Miryeong Park, Taehyung Jung, Sanghyun Kim†, Younggun Cho†",
  },
  {
    year: "2026",
    type: "International Conference",
    venue: "26th International Conference on Control, Automation, and Systems",
    title: "Manifold-Constrained MPPI: Real-Time Sampling-Based Control Under Hard Equality Constraints",
    authors: "Seulchan Lee, Sanghyun Kim†",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2605.24813" }],
  },
  {
    year: "2026",
    type: "International Conference",
    venue: "IEEE 22nd International Conference on Automation Science and Engineering",
    title: "GRACE: Gradient-Free Robot Action Generation via Combined Diffusion-MPPI Posterior Estimation",
    authors: "Leesai Park, Jiho Hong, Sanghyun Kim†",
    note: "Work in Progress",
  },
  {
    year: "2026",
    type: "International Conference",
    venue: "IEEE International Conference on Robotics and Automation",
    title: "Wrench-Feasible Whole-Body Planning via Time-Layered DAG Optimization for Omnidirectional Aerial Manipulation",
    authors: "Daum Park, Bohyeong Pak, Sanghyun Kim†",
    note: "Late-Breaking Result",
  },
  {
    year: "2026",
    type: "Domestic Conference",
    venue: "제어로봇시스템학회 학술대회",
    title: "Nav2 전방향 주행 제어기의 미세 수렴 한계 분석과 기구학 기반 수렴 제어기의 성능 검증",
    authors: "손재락, 심재훈, 김상현†",
  },
  {
    year: "2026",
    type: "Domestic Conference",
    venue: "대한기계학회 2026년 춘계학술대회",
    title: "화물 카트 결합형 전방향 로봇의 기구학적 정렬 및 통합 제어기 설계",
    authors: "손재락, 김상현†, 심재훈†",
  },
  {
    year: "2026",
    type: "Domestic Conference",
    venue: "대한기계학회 2026년 춘계학술대회",
    title: "Quad Drive 기반 AGV의 배치 구조별 역기구학 해석 및 주행 제어 로직 구현",
    authors: "조민재, 박다움, 김상현†",
  },
  {
    year: "2026",
    type: "Domestic Conference",
    venue: "대한기계학회 2026년 춘계학술대회",
    title: "시간 계층 구조의 DAG 최적화 기법을 이용한 전방향 공중 작업 로봇의 렌치 가용 전신 경로 계획",
    authors: "박다움, 박보형, 김상현†",
    note: "Best Paper Award",
  },
  {
    year: "2026",
    type: "Domestic Conference",
    venue: "대한기계학회 2026년 춘계학술대회",
    title: "파라미터 인지 신경망을 이용한 로봇 말단 부착 객체의 시스템 식별",
    authors: "박수환, 김상현†",
  },
  {
    year: "2026",
    type: "Domestic Conference",
    venue: "대한기계학회 2026년 춘계학술대회",
    title: "4족 보행 로봇 기반 폐광산 고해상도 자기장 맵핑 프레임워크",
    authors: "윤지원, 강웅†, 김상현†",
  },
  {
    year: "2026",
    type: "Domestic Conference",
    venue: "제21회 한국로봇종합학술대회",
    title: "모델 예측 경로적분법을 활용한 GPU 병렬 물리 시뮬레이션 기반 실시간 물체-환경 상호작용 제어",
    authors: "박이새, 김상현†",
  },
  {
    year: "2025",
    type: "International Conference",
    venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems",
    title: "CSC-MPPI: A Novel Constrained MPPI Framework with DBSCAN for Reliable Obstacle Avoidance",
    authors: "Leesai Park, Keunwoo Jang†, Sanghyun Kim†",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/IROS60139.2025.11246839" }],
  },
  {
    year: "2025",
    type: "International Conference",
    venue: "3rd Emerging Technologies in Mechanical Engineering",
    title: "Tool-Aware Task and Motion Planning with Dynamic Tool Changing for Automated Chemistry",
    authors: "Hyunho Cho*, Bohyeong Pak*, Sanghyun Kim†",
  },
  {
    year: "2025",
    type: "International Conference",
    venue: "International Conference on Space Robotics",
    title: "CUTE-Planner: Confidence-Aware Uneven Terrain Exploration Planner",
    authors: "Miryeong Park, Dongjin Cho, Sanghyun Kim, Younggun Cho†",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/iSpaRo66239.2025.11436759" }],
  },
  {
    year: "2025",
    type: "Domestic Conference",
    venue: "제어로봇시스템학회 학술대회",
    title: "상호작용형 원격 로봇 조작을 위한 분할 기반 VR 인터페이스",
    authors: "박찬진, 조현호, 이강민, 강은애†, 김상현†",
  },
  {
    year: "2025",
    type: "Domestic Conference",
    venue: "대한기계학회 2025년 춘계학술대회",
    title: "행동 트리 및 인공지능 모델 연계를 통한 자율 작업 시퀀스 구현",
    authors: "이승현, 김상현†",
  },
  {
    year: "2025",
    type: "Domestic Conference",
    venue: "대한기계학회 2025년 춘계학술대회",
    title: "물리 정보 학습 및 희소 회귀 방법을 이용한 매니퓰레이터 마찰 모델 식별",
    authors: "김학준, 박진성†, 김상현†",
  },
  {
    year: "2025",
    type: "Domestic Conference",
    venue: "한국항공우주학회 2025년 춘계학술대회",
    title: "거친 지형 강인한 주행을 위한 Hybrid A* 기반 모델 예측 경로 적분 제어",
    authors: "강민형*, 이슬찬*, 양준열, 김상현†",
  },
  {
    year: "2025",
    type: "Domestic Conference",
    venue: "제20회 한국로봇종합학술대회",
    title: "개방어휘 의미론적 매핑을 통한 캡션 활용 내비게이션",
    authors: "강은애, 홍지호, 김상현†, 신영식†",
  },
  {
    year: "2025",
    type: "Domestic Conference",
    venue: "제20회 한국로봇종합학술대회",
    title: "증강현실 기기를 이용한 음성 명령 기반 실시간 객체 세그멘테이션",
    authors: "강은애, 신영식, 김상현†",
  },
  {
    year: "2024",
    type: "International Conference",
    venue: "11th Asian Conference on Multibody Dynamics",
    title: "Inverse Kinematics Solution to Mobile Manipulator Considering Stability Constraint and Force Manipulability",
    authors: "Seulchan Lee, Sanghyun Kim†, Keunwoo Jang†",
  },
  {
    year: "2024",
    type: "International Conference",
    venue: "11th Asian Conference on Multibody Dynamics",
    title: "Enhanced Online Parameter Estimation of Unknown Objects via Sparse Identification of Unmodeled Dynamics",
    authors: "Hakjun Kim, Sanghyun Kim†, Jinseong Park†",
    note: "Best Poster Award",
  },
  {
    year: "2024",
    type: "International Conference",
    venue: "21st International Conference on Ubiquitous Robots",
    title: "Nonlinear Identification of Unknown Object Dynamics for Human-Robot Collaborative Tasks",
    authors: "Hakjun Kim, Sanghyun Kim†, Jinseong Park†",
  },
  {
    year: "2024",
    type: "Domestic Conference",
    venue: "대한기계학회 2024년 추계학술대회",
    title: "시각-언어 내비게이션을 위한 개방 어휘 기반의 의미론적 맵핑",
    authors: "홍지호*, 강은애*, 김상현†, 신영식†",
  },
  {
    year: "2024",
    type: "Domestic Conference",
    venue: "대한기계학회 2024년 추계학술대회",
    title: "모델 예측 경로 적분을 활용한 하이브리드 케이블 구동 로봇의 전신 제어기 개발",
    authors: "강민형*, 박이새*, 장근우, 박범영†, 김상현†",
  },
  {
    year: "2024",
    type: "Domestic Conference",
    venue: "제어로봇시스템학회 학술대회",
    title: "달 탐사 시뮬레이션에서의 Model Predictive Path Integral 기반 모바일 로봇 2.5D 자율 주행 제어",
    authors: "양준열, 김상현†",
  },
  {
    year: "2024",
    type: "Domestic Conference",
    venue: "대한기계학회 동역학 제어 로봇 부문 2024년 춘계학술대회",
    title: "모바일 매니퓰레이터의 AR 디스플레이 인터페이스 설계",
    authors: "조현호, 김상현†",
  },
  {
    year: "2024",
    type: "Domestic Conference",
    venue: "대한기계학회 동역학 제어 로봇 부문 2024년 춘계학술대회",
    title: "ICP 알고리즘을 활용한 QR 마커 기반 도킹 시스템 향상",
    authors: "강민형, 양준열, 김상현†",
  },
  {
    year: "2024",
    type: "Domestic Conference",
    venue: "대한기계학회 동역학 제어 로봇 부문 2024년 춘계학술대회",
    title: "달 탐사 시뮬레이션 기반 모바일 로봇의 2.5D 자율 주행 기법",
    authors: "양준열, 김상현†",
  },
  {
    year: "2023",
    type: "International Conference",
    venue: "23rd International Conference on Control, Automation and Systems",
    title: "Improving Indoor Positioning Systems with UWB and Filtering Techniques: A Comparative Analysis",
    authors: "Rahul Ranjan, Yoonsik Jung, Donggyu Shin, Sanghyun Kim, Chang-Hyun Kim, Seungjae Lee, Joongeup Kye†",
    links: [{ label: "DOI", href: "https://doi.org/10.23919/ICCAS59377.2023.10316857" }],
  },
  {
    year: "2023",
    type: "International Conference",
    venue: "18th International Conference on Intelligent Autonomous Systems",
    title: "Efficient Traversability Mapping Based on Single Camera and 3D LiDAR",
    authors: "Chanmin Youn, Wonkeun Youn, Sanghyun Kim, Jinseong Park, Young-Sik Shin†",
    links: [{ label: "DOI", href: "https://doi.org/10.1007/978-3-031-44851-5_47" }],
  },
  {
    year: "2022",
    type: "International Conference",
    venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems",
    title: "Learning to Guide Online Multi-Contact Receding Horizon Planning",
    authors: "Jiayi Wang†, Teguh Santoso Lembono, Sanghyun Kim, Sylvain Calinon, Sethu Vijayakumar, Steve Tonneau",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/IROS47612.2022.9981234" }],
  },
  {
    year: "2021",
    type: "International Conference",
    venue: "IEEE-RAS International Conference on Humanoid Robots",
    title: "Multi-Fidelity Receding Horizon Planning for Multi-Contact Locomotion",
    authors: "Jiayi Wang†, Sanghyun Kim, Sethu Vijayakumar, Steve Tonneau",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/HUMANOIDS47582.2021.9555778" }],
  },
  {
    year: "2020",
    type: "Domestic Conference",
    venue: "제15회 한국로봇종합학술대회",
    title: "목표 렌치가 주어진 상황에서 관절 토크를 최소화하는 역기구학",
    authors: "박수한, 장근우, 김승연, 김상현, 박재흥†",
  },
  {
    year: "2019",
    type: "International Conference",
    venue: "IEEE International Conference on Advanced Robotics and Mechatronics",
    title: "Whole-Body Control for Nonholonomic Mobile Manipulator Using Hierarchical Quadratic Programming and Continuous Task Transition",
    authors: "Sanghyun Kim, Keunwoo Jang, Suhan Park, Yisoo Lee, Sang Yup Lee, Jaeheung Park†",
    note: "Best Conference Paper Award",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/ICARM.2019.8834269" }],
  },
  {
    year: "2019",
    type: "Domestic Conference",
    venue: "제14회 한국로봇종합학술대회",
    title: "연속 작업 전이 알고리즘을 이용한 로봇 매니퓰레이터의 자기 충돌 회피 알고리즘",
    authors: "장근우, 김상현, 박수한, 이상엽, 박재흥†",
  },
  {
    year: "2019",
    type: "Domestic Conference",
    venue: "제14회 한국로봇종합학술대회",
    title: "폐루프 역기구학 알고리즘을 이용한 추종 제어의 비교 연구",
    authors: "이상엽, 박수한, 장근우, 김상현, 김승연, 박재흥†",
  },
  {
    year: "2018",
    type: "International Conference",
    venue: "15th International Conference on Ubiquitous Robots",
    title: "Real-Time Inverse Kinematics Technique for Controlling Redundant Avatar Arm",
    authors: "Sanghyun Kim, Jeeseop Kim, Jaeheung Park†",
  },
  {
    year: "2018",
    type: "International Conference",
    venue: "IEEE International Conference on Robotics and Automation",
    title: "Disturbance Observer-Based Linear Feedback Controller for Compliant Motion of Humanoid Robot",
    authors: "Mingon Kim, Jung Hoon Kim, Sanghyun Kim, Jaehoon Sim, Jaeheung Park†",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/ICRA.2018.8460618" }],
  },
  {
    year: "2017",
    type: "International Conference",
    venue: "International Symposium on Experimental Robotics",
    title: "Application of Robot Manipulator for Cardiopulmonary Resuscitation",
    authors: "Jaesug Jung, Jeeseop Kim, Sanghyun Kim, Woon Yong Kwon, Sang Hoon Na, Kyoung Su Kim, Gil Joon Suh, Byeong Wook Yoo, Jin Woo Choi, Jung Chan Lee, Jaeheung Park†",
    links: [{ label: "DOI", href: "https://doi.org/10.1007/978-3-319-50115-4_24" }],
  },
  {
    year: "2017",
    type: "Domestic Conference",
    venue: "한국정밀공학회 2017년 추계학술대회",
    title: "일반화된 의사역행렬의 가중 행렬을 이용한 비홀로노믹 모바일 매니퓰레이터의 관절 한계 회피",
    authors: "장근우, 김상현, 박수한, 박재흥†",
  },
  {
    year: "2016",
    type: "International Conference",
    venue: "13th International Conference on Ubiquitous Robots and Ambient Intelligence",
    title: "Human Motion Imitation for Humanoid by Recurrent Neural Network",
    authors: "Mingon Kim, Sanghyun Kim, Jaeheung Park†",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/URAI.2016.7625768" }],
  },
  {
    year: "2015",
    type: "International Conference",
    venue: "IEEE-RAS International Conference on Humanoid Robots",
    title: "Approach of Team SNU to the DARPA Robotics Challenge Finals",
    authors: "Sanghyun Kim, Mingon Kim, Jimin Lee, Soonwook Hwang, Joonbo Chae, Beomyeong Park, Hyunbum Cho, Jaehoon Sim, Jaesug Jung, Hosang Lee, Seho Shin, Minsung Kim, Nojun Kwak, Yongjin Lee, Sangkuk Lee, Myunggi Lee, Sangyup Yi, Kyong-Sok K. C. Chang, Jaeheung Park†",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/HUMANOIDS.2015.7363458" }],
  },
  {
    year: "2015",
    type: "Domestic Conference",
    venue: "정보 및 제어 학술대회",
    title: "최소 개수의 마커 기반 영공간 사상을 이용한 아바타 동작 생성",
    authors: "김민곤, Romain Destenay, 김상현, 권정흠, 염기원, 박재흥, 유범재†",
  },
  {
    year: "2014",
    type: "International Conference",
    venue: "IEEE-RAS International Conference on Humanoid Robots",
    title: "Aesthetic Design and Development of Humanoid Legged Robot",
    authors: "Mathew Schwartz, Soonwook Hwang, Yisoo Lee, Jongseok Won, Sanghyun Kim, Jaeheung Park†",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/HUMANOIDS.2014.7041311" }],
  },
  {
    year: "2014",
    type: "Domestic Conference",
    venue: "제9회 한국로봇종합학술대회",
    title: "파지 분류 체계를 이용한 자세 시너지 추출",
    authors: "김상현, 김민곤, 박재흥†",
  },
  {
    year: "2014",
    type: "Domestic Conference",
    venue: "제9회 한국로봇종합학술대회",
    title: "표면 근전도를 이용한 손 자세 및 파지력 추정",
    authors: "이지민, 김민곤, 김상현, 박재흥†",
  },
  {
    year: "2010",
    type: "International Conference",
    venue: "6th Asian Conference on Computer Aided Surgery",
    title: "Data-Driven Haptic Rendering of Friction Between Surgical Device and Trocar for Laparoscopic Surgery Simulator",
    authors: "Sanghyun Kim, Chang-Gyu Lee, Jeha Ryu†",
  },
  {
    year: "2010",
    type: "Domestic Conference",
    venue: "대한기계학회 학술대회",
    title: "마찰 및 중력 보상을 위한 트로카 마찰 모델링",
    authors: "김상현, 이창규, 김지숙, 류제하†",
  },
  {
    year: "2010",
    type: "Domestic Conference",
    venue: "대한기계학회 학술대회",
    title: "햅틱 복강경 수술 시뮬레이터에서의 마찰 및 중력 보상",
    authors: "김상현, 이창규, 김지숙, 류제하†",
  },
];

export const patents: Patent[] = [
  { year: "2026", status: "Application", inventors: "김상현, 이슬찬", title: "제약 조건 보정을 이용한 로봇 시스템 제어 장치 및 방법", number: "10-2026-0132773" },
  { year: "2026", status: "Application", inventors: "김상현, 강민형", title: "리만 배리어 메트릭 기반 모션 플래닝 시스템 및 방법", number: "10-2026-0113538" },
  { year: "2026", status: "Application", inventors: "김상현, 강은애, 홍지호, 신영식", title: "인스턴스 수준 시맨틱 맵 기반 자연어 내비게이션 장치 및 방법", number: "10-2026-0075610" },
  { year: "2026", status: "Application", inventors: "김상현, 조현호, 박보형", title: "화학 실험 자율 수행 장치 및 방법", number: "10-2026-0025745" },
  { year: "2026", status: "Registration", inventors: "김상현, 양준열, 강민형", title: "라이다 기반 모바일 로봇의 도킹 시스템 및 도킹 방법", number: "10-2924819", jurisdiction: "Korea" },
  { year: "2026", status: "Program", inventors: "김상현, 정태현, 송은혜, 설우진, 서영빈, 이승윤", title: "방사능 지도 작성을 위한 자율 주행 시뮬레이션 프로그램" },
  { year: "2025", status: "Application", inventors: "김상현, 김정윤, 김학준", title: "데이터 기반 마찰 모델을 이용한 디지털 트윈 시뮬레이션 정합향상시스템 및 정합향상방법", number: "10-2025-0180382" },
  { year: "2025", status: "Application", inventors: "김상현, 장근우, 박이새", title: "샘플 보정 및 밀도기반 클러스터링을 활용한 장애물 회피 경로 생성 장치 및 방법", number: "10-2025-0119564" },
  { year: "2024", status: "Application", inventors: "김상현, 이슬찬, 박이새, 박수환", title: "매니퓰레이터를 결합한 하이브리드 케이블 구동 로봇의 전신 제어시스템 및 제어방법", number: "10-2024-0090023" },
  { year: "2024", status: "Program", inventors: "김상현, 양준열", title: "달 탐사용 자율 주행 시뮬레이션 프로그램", number: "C-2024-026248" },
  { year: "2023", status: "Registration", inventors: "고두열, 신영식, 김창현, 김정중, 이종민, 한형석, 박도영, 임재원, 하창완, 박진성, 안병태, 정성호, 김상현, 김예린", title: "이동로봇용 궤도륜 및 이를 포함하는 이동로봇", number: "10-2603028", jurisdiction: "Korea" },
  { year: "2022", status: "Registration", inventors: "고두열, 김정중, 박진성, 신영식, 김상현, 이종민, 한형석, 박도영, 김창현, 임재원, 하창완, 안병태, 정성호", title: "모듈 로봇 및 모듈 로봇의 제어 방법", number: "10-2459965", jurisdiction: "Korea" },
  { year: "2019", status: "Registration", inventors: "서길준, 권운용, 김경수, 나상훈, 박재흥, 이정찬, 정윤선, 유경민, 박민지, 김태균, 고정인, 김지섭, 정재석, 김상현, 유병욱, 이병탁, 조우상, 최진우", title: "자동 심폐소생 장치 및 제어 방법", number: "US 20190029919A1 · CN 108697572A · EU 3409258A1", jurisdiction: "United States · China · European Union" },
  { year: "2016", status: "Registration", inventors: "서길준, 권운용, 김경수, 나상훈, 박재흥, 이정찬, 정윤선, 유경민, 박민지, 김태균, 고정인, 김지섭, 정재석, 김상현, 유병욱, 이병탁, 조우상, 최진우", title: "자동 심폐소생 장치 및 제어 방법", number: "10-2016-0172286", jurisdiction: "Korea" },
  { year: "2016", status: "Registration", inventors: "김상현, 박재흥, 김민곤, 이지민, 권정흠, 유범재", title: "파지자세 및 파지력을 추정하는 장치", number: "10-2016-0075150", jurisdiction: "Korea" },
];

export type Award = {
  year: string;
  title: string;
  org: string;
  detail?: string;
};

export const awards: Award[] = [
  {
    year: "2026",
    title: "우수논문상",
    org: "대한기계학회 2026년 춘계학술대회",
    detail: "시간 계층 구조의 DAG 최적화 기법을 이용한 전방향 공중 작업 로봇의 렌치 가용 전신 경로 계획 (박다움, 박보형, 김상현)",
  },
  {
    year: "2026",
    title: "우수상",
    org: "휴머노이드 실증 챌린지 (한국로봇산업진흥원)",
  },
  {
    year: "2025",
    title: "산업통상자원부 장관상",
    org: "2025 산학 프로젝트 챌린지",
  },
  {
    year: "2024",
    title: "Best Poster Award",
    org: "11th Asian Conference on Multibody Dynamics (ACMD 2024)",
  },
  {
    year: "2023",
    title: "Best Paper Award (2nd Place)",
    org: "Intelligent Service Robotics",
  },
  {
    year: "2022",
    title: "대한민국 과학 분야 우수성과 100선",
    org: "과학기술정보통신부",
  },
  {
    year: "2019",
    title: "Best Conference Paper Award",
    org: "IEEE International Conference on Advanced Robotics and Mechatronics",
  },
  {
    year: "2018",
    title: "Best Journal Paper Award",
    org: "로봇학회 논문지",
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
