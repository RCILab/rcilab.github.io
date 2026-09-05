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
  venue?: string;
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
  filed?: string;
  registered?: string;
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
    videoId: "nkt-hxeWGN4",
    image: "/research-prmppi.png",
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
    date: "2026.09",
    category: "Lab",
    title: "RCI Lab has been selected for Anthropic's Claude for Scientists program.",
    detail: "Through the program, all lab members receive premium (Max) Claude access for research, coding, and writing.",
  },
  {
    date: "2026.09",
    category: "Grant",
    title: "RCI Lab won a grant from Mobinn.",
    detail: "ê³¼ì ëª: ìë®¬ë ì´ì ì ëª¨ë°ì¼ ë¡ë´ íì¬ ë§¤ëí°ë ì´í° ëª¨ì ë° ì ì´ ê°ë° Â· ê³¼ì íí: ì°ííë ¥ Â· ì§ìê¸°ê´: ëª¨ë¹ Â· ìíê¸°ê°: 2026",
  },
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
    category: "Publication",
    title: "Our paper by Thanh Nguyen Truong has been accepted to Information Sciences.",
    detail: "Thanh Nguyen Truong, Sanghyun Kimâ , âHigh-Performance Fixed-Time Active Fault-Tolerant Control of Robotic Manipulators via Sparse Physics-Informed Dynamics Learning,â Information Sciences, 2026.",
  },
  {
    date: "2026.07",
    category: "Grant",
    title: "RCI Lab won a grant from PIE Robotics.",
    detail: "ê³¼ì ëª: ìì¨ ê³µì ì ìí ëª¨ì íëë ê¸°ì  ê°ë° Â· ê³¼ì íí: ì°ííë ¥ Â· ì§ìê¸°ê´: PIE Robotics Â· ìíê¸°ê°: 2026",
  },
  {
    date: "2026.07",
    category: "Grant",
    title: "RCI Lab won a grant from KailosLab.",
    detail: "ê³¼ì ëª: íí ì¤í ìëíë¥¼ ìí VLM ê¸°ë° ì ì´ ê¸°ì  ê°ë° Â· ê³¼ì íí: ì°ííë ¥ Â· ì§ìê¸°ê´: ì¹´ì´ë¡ì¤ë© Â· ìíê¸°ê°: 2026",
  },
  {
    date: "2026.07",
    category: "Grant",
    title: "RCI Lab won a grant from ENOZ.",
    detail: "ê³¼ì ëª: í´ë¨¸ë¸ì´ë êµì¡ ìë¬¸ ì©ì­ Â· ê³¼ì íí: ì°ííë ¥ Â· ì§ìê¸°ê´: ì´ì¤ì¤ì¦ Â· ìíê¸°ê°: 2026",
  },
  {
    date: "2026.07",
    category: "Grant",
    title: "RCI Lab won a grant from Roboe Technologies.",
    detail: "ê³¼ì ëª: íë¬¼íì­ììì ìí ëª¨ìíëë ìê³ ë¦¬ì¦ì ê°ë° Â· ê³¼ì íí: ì°ííë ¥ Â· ì§ìê¸°ê´: ë¡ë³´ì íí¬ëë¡ì§ Â· ìíê¸°ê°: 2026",
  },
  {
    date: "2026.07",
    category: "Publication",
    title: "Our paper by Jiho Hong and Eunae Kang has been accepted to Engineering Applications of Artificial Intelligence.",
    detail: "Jiho Hong*, Eunae Kang*, Sanghyun Kimâ , Young-Sik Shinâ , âInstance-Enriched Semantic Maps for Visual Language Navigation,â Engineering Applications of Artificial Intelligence, 2026.",
    href: "https://rcilab.github.io/iesm_vln/",
  },
  {
    date: "2026.07",
    category: "Award",
    title: "Our paper by Daum Park and Bohyeong Pak received the Best Paper Award from the Dynamics, Control and Robotics Division of the Korean Society of Mechanical Engineers.",
    detail: "ë°ë¤ì, ë°ë³´í, ê¹ìíâ , âìê° ê³ì¸µ êµ¬ì¡°ì DAG ìµì í ê¸°ë²ì ì´ì©í ì ë°©í¥ ê³µì¤ ìì ë¡ë´ì ë ì¹ ê°ì© ì ì  ê²½ë¡ ê³í,â ëíê¸°ê³íí 2026ë ì¶ê³íì ëí, 2026.",
  },
  {
    date: "2026.07",
    category: "Grant",
    title: "RCI Lab won a grant from the Korea Institute of Machinery & Materials.",
    detail: "ê³¼ì ëª: ì´ëí í´ë¨¸ë¸ì´ë ëìì ì´ SW Â· ê³¼ì íí: ì°êµ¬ì©ì­ Â· ì§ìê¸°ê´: íêµ­ê¸°ê³ì°êµ¬ì Â· ìíê¸°ê°: 2026",
  },
  {
    date: "2026.06",
    category: "Grant",
    title: "RCI Lab won a government grant from the Korea Technology and Information Promotion Agency for SMEs.",
    detail: "ê³¼ì ëª: ê³ íì¤ ë¬¼ì²´ ì´ì¡ì ìí ì¸ë¯¸ í´ë¨¸ë¸ì´ë ìíë¡ë´ì ì ì  ì ì´ê¸°ì  Â· ê³¼ì íí: ì ë¶ê³¼ì (ì¤ì¼ì¼ì íì¤ R&D) Â· ì§ìê¸°ê´: ì¤ìê¸°ìê¸°ì ì ë³´ì§í¥ì Â· ìíê¸°ê°: 2026â2029",
  },
  {
    date: "2026.06",
    category: "Grant",
    title: "RCI Lab won a grant from MetaMotionX.",
    detail: "ê³¼ì ëª: ìì¨ì£¼í ê²½ë¡ìì± ìíí¸ì¨ì´ ê°ë° Â· ê³¼ì íí: ì°ííë ¥ Â· ì§ìê¸°ê´: ë©íëª¨ììì¤ Â· ìíê¸°ê°: 2026",
  },
  {
    date: "2026.05",
    category: "Grant",
    title: "RCI Lab won a grant from the Korea Research Institute of Ships and Ocean Engineering.",
    detail: "ê³¼ì ëª: í¼ì§ì»¬ AI ê¸°ë° í´ì ë¤ìì ë ë¡ë´ì íµí© ì ì´ ê¸°ë² ì°êµ¬ Â· ê³¼ì íí: ì ë¶Â·ì°êµ¬ìê³¼ì (íì°ê³µëì°êµ¬ì¬ì) Â· ì§ìê¸°ê´: ì ë°í´ìíëí¸ì°êµ¬ì Â· ìíê¸°ê°: 2026",
  },
  {
    date: "2026.05",
    category: "Publication",
    title: "One paper has been accepted to the Journal of Korea Robotics Society.",
    detail: "ì´ì¬ì°¬, ê¹ìíâ , âVAE-MPPI: ìí ë¡ë´ ì¡°ìì ìí íì ì°ì ì ì½ ê¶¤ì  ìµì í,â ë¡ë´íí ë¼ë¬¸ì§, 2026.",
  },
  {
    date: "2026.05",
    category: "Grant",
    title: "RCI Lab won a grant from the Gyeonggi RISE Center.",
    detail: "ê³¼ì ëª: Behavior Tree ê¸°ë° ê³ ì¥ ëìí ì¼ì§ ìì¨ì£¼í SW ê°ë° Â· ê³¼ì íí: ì ë¶ê³¼ì (ê²½ê¸° RISE ì§ì°í íë ¥ ê¸°ì ê°ë°ê³¼ì ) Â· ì§ìê¸°ê´: ê²½ê¸° RISE ì¼í° Â· ìíê¸°ê°: 2026",
  },
  {
    date: "2026.04",
    category: "Grant",
    title: "RCI Lab entered into a technology-transfer agreement with PIT-IN.",
    detail: "ê³¼ì ëª: ë¼ì´ë¤ ê¸°ë° ëª¨ë°ì¼ ë¡ë´ì ëí¹ ìì¤í ë° ëí¹ë°©ë² Â· ê³¼ì íí: ê¸°ì ì´ì (íµìí¹íê¶) Â· ì§ìê¸°ê´: í¼í¸ì¸ Â· ìíê¸°ê°: 2026",
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
    detail: "ê³¼ì ëª: ìì±í ì ì±ê³¼ ëª¨ë¸ ìì¸¡ ì ì´ì íì´ë¸ë¦¬ë Physical AI íë ììí¬: ë§¤ëí°ë ì´í°ì ëª¨ì ì ì´ìì í´ë¨¸ë¸ì´ëì ì ì  ì ì´ê¹ì§ Â· ê³¼ì íí: ì ë¶ê³¼ì (ì°ìì°êµ¬âì ì§ì°êµ¬ ì íB) Â· ì§ìê¸°ê´: íêµ­ì°êµ¬ì¬ë¨ Â· ìíê¸°ê°: 2026â2030",
  },
  {
    date: "2026.03",
    category: "Grant",
    title: "RCI Lab won a government grant from the Rural Development Administration.",
    detail: "ê³¼ì ëª: ê³¼ì ëìì íëí¹ì± ëª¨ë°© íìµí ì ì´ê¸°ì  ê°ë° ë° ëìë¡ë´ ê¸°ì  íì¤í ì°êµ¬ Â· ê³¼ì íí: ì ë¶ê³¼ì (ì§ë¥íëìë¡ë´íµì¬ê¸°ë°ê¸°ì ê°ë° R&D) Â· ì§ìê¸°ê´: ëì´ì§í¥ì²­ Â· ìíê¸°ê°: 2026â2030",
  },
  {
    date: "2026.02",
    category: "Grant",
    title: "RCI Lab participates in the BK21 FOUR Program.",
    detail: "ê³¼ì ëª: ì´ê³ ë ¹ì¬í íë«í¼ ê¸°ë° ì¬ëì¤ì¬ì ê³ ë ¹ìë¹ì¤-íí¬ ë¬¸ì í´ê²°í íì ì¸ì¬ ìì±ì¬ì Â· ê³¼ì íí: ì ë¶ê³¼ì (4ë¨ê³ BK21 ì¬ì) Â· ì§ìê¸°ê´: êµì¡ë¶ Â· ìíê¸°ê°: 2026â2027",
  },
  {
    date: "2026.02",
    category: "Patent",
    title: "RCI Lab registered a domestic patent.",
    detail: "ê¹ìí, ìì¤ì´, ê°ë¯¼í, âë¼ì´ë¤ ê¸°ë° ëª¨ë°ì¼ ë¡ë´ì ëí¹ ìì¤í ë° ëí¹ë°©ë²,â ëíë¯¼êµ­ í¹í 10-2924819, 2026.02.04.",
  },
  {
    date: "2026.02",
    category: "Grant",
    title: "RCI Lab won a grant from PonyLink.",
    detail: "ê³¼ì ëª: 4ì¡±ë³´íë¡ë´ì ìì¨ì£¼í ìì ê¸°ì  ê°ë° (2ì°¨) Â· ê³¼ì íí: ì°ííë ¥ Â· ì§ìê¸°ê´: í¬ëë§í¬ Â· ìíê¸°ê°: 2026",
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
    detail: "ê³¼ì ëª: ì¤ë§í¸í ìí ìëí ë¡ë´ì© ë§¤ëí°ë ì´í°ì ëìê³¼ ìµì  ê²½ë¡ ìì± ë° ì ì´ Â· ê³¼ì íí: ì ë¶Â·ì°êµ¬ìê³¼ì (KIST ì£¼ìì¬ì ìíì°êµ¬ê³¼ì ) Â· ì§ìê¸°ê´: íêµ­ê³¼íê¸°ì ì°êµ¬ì Â· ìíê¸°ê°: 2026",
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
  { name: "Kangmin Lee", program: "Integrated M.S./Ph.D.", joined: "2026-1", focus: "Autonomous Mobile Robots, Optimal Control", email: "khukmin99 at khu.ac.kr", image: "/members/kangmin-lee.jpg" },
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
  { name: "Juchan Lee", program: "Research Intern", focus: "AI-based Control, Optimal Control", email: "oryise12 at khu.ac.kr", image: "/members/juchan-lee.jpg" },
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
    title: "Title Withheld (Multi-Robot Passage)",
    note: "In Preparation",
    links: [{ label: "Project", href: "https://rcilab.github.io/clear/" }],
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
    year: "2027",
    type: "International Conference",
    venue: "IEEE International Conference on Robotics and Automation",
    title: "Title Withheld (MBD)",
    note: "Under Review",
  },
  {
    year: "2026",
    type: "International Journal",
    venue: "Engineering Applications of Artificial Intelligence",
    title: "Amortized Trajectory Operators for Environment-Aware Manipulator Collision Avoidance",
    note: "Under Review",
  },
  {
    year: "2026",
    type: "International Journal",
    venue: "IEEE Robotics and Automation Letters",
    title: "Title Withheld (Constrained MPPI)",
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
    title: "Title Withheld (Force-Informed VLA Residual Policy)",
    note: "Under Review",
    links: [{ label: "Project", href: "https://rcilab.github.io/FIRe/" }],
  },
  {
    year: "2026",
    type: "International Journal",
    venue: "International Journal of Control, Automation, and Systems",
    title: "Linear or Bilinear: A Criterion for Koopman Rollouts in Sampling-Based Predictive Control",
    note: "Under Review",
    links: [
      { label: "Project", href: "https://rcilab.github.io/koopman-mppi/" },
      { label: "Preprint", href: "https://doi.org/10.21203/rs.3.rs-10732691/v1" },
    ],
  },
  {
    year: "2026",
    type: "International Journal",
    venue: "IEEE Robotics and Automation Letters",
    title: "Title Withheld (Diffusion-MPPI Action Generation)",
    note: "Under Review",
    links: [{ label: "Project", href: "https://rcilab.github.io/grace/" }],
  },
  {
    year: "2026",
    type: "International Journal",
    venue: "ISA Transactions",
    title: "Title Withheld (MPPI Review)",
    authors: "Leesai Park, Keunwoo Jang†, Sanghyun Kim†",
    note: "In Revision",
  },
  {
    year: "2026",
    type: "International Journal",
    venue: "IEEE Access",
    title: "LLM-Guided Tool-Aware Task and Motion Planning for Chemistry Lab Automation",
    authors: "Bohyeong Pak*, Hyunho Cho*, Sanghyun Kimâ ",
    note: "In Revision",
    links: [{ label: "Project", href: "http://rcilab.khu.ac.kr/auto_chem" }],
  },
  {
    year: "2026",
    type: "International Journal",
    venue: "Engineering Science and Technology, an International Journal",
    title: "Task-Specific Acceleration-Domain Trajectory Optimization for Smooth and Energy-Efficient Industrial Manipulator Motion",
    authors: "Dongjo Kim, Minhyeong Kang, Hojin Lee, Nakyoung Lee, Stephen Baek, Sanghyun Kimâ , Sanga Leeâ , Jeongsu Leeâ ",
    note: "In Revision",
    jcr: "12.1%",
  },
  {
    year: "2026",
    type: "International Journal",
    venue: "International Journal of Control, Automation, and Systems",
    title: "Manifold-Constrained MPPI: Real-Time Sampling-Based Control Under Hard Constraints",
    authors: "Seulchan Lee, Sanghyun Kimâ ",
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
    title: "Title Withheld (Constrained Motion Planning)",
    authors: "Minhyeong Kang, Sanghyun Kimâ ",
    note: "In Revision",
    jcr: "9.4%",
    links: [{ label: "Project", href: "https://rmrrt-anonymous.github.io/" }],
  },
  {
    year: "2026",
    type: "International Journal",
    venue: "IEEE Transactions on Automation Science and Engineering",
    title: "Title Withheld (Prescribed-Path Planning)",
    authors: "Daum Park, Sanghyun Kimâ ",
    note: "In Revision",
    jcr: "10.8%",
    links: [{ label: "Project", href: "https://rcilab.github.io/graft/" }],
  },
];

export const publications: Publication[] = [
  {
    year: "2026",
    type: "International Journal",
    venue: "Information Sciences",
    title: "High-Performance Fixed-Time Active Fault-Tolerant Control of Robotic Manipulators via Sparse Physics-Informed Dynamics Learning",
    authors: "Thanh Nguyen Truong, Sanghyun Kimâ ",
    jcr: "18.2%",
    links: [{ label: "DOI", href: "https://doi.org/10.1016/j.ins.2026.124001" }],
  },
  {
    year: "2026",
    type: "International Journal",
    venue: "Engineering Applications of Artificial Intelligence",
    title: "Instance-Enriched Semantic Maps for Visual Language Navigation",
    authors: "Jiho Hong*, Eunae Kang*, Sanghyun Kimâ , Young-Sik Shinâ ",
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
    venue: "ë¡ë´íí ë¼ë¬¸ì§",
    title: "VAE-MPPI: ìí ë¡ë´ ì¡°ìì ìí íì ì°ì ì ì½ ê¶¤ì  ìµì í",
    authors: "ì´ì¬ì°¬, ê¹ìíâ ",
  },
  {
    year: "2026",
    type: "Domestic Journal",
    venue: "ëíê¸°ê³íí ë¼ë¬¸ì§ A",
    title: "Sim-to-Real ì±ë¥ í¥ìì ìí ë¤ë¬¼ì²´ ëì­íê³¼ ë°ì´í° ê¸°ë° ë§ì°° ëª¨ë¸ì ì´ì©í ê³ ì ë° ìë®¬ë ì´ì",
    authors: "ê¹ì ì¤*, ê¹íì¤*, ìµì§íâ , ê¹ìíâ ",
    links: [{ label: "DOI", href: "https://doi.org/10.3795/ksme-a.2026.50.1.13" }],
  },
  {
    year: "2025",
    type: "International Journal",
    venue: "Mathematics",
    title: "Hybrid A*-guided Model Predictive Path Integral Control for Robust Navigation in Rough Terrains",
    authors: "Joonyeol Yang*, Minhyeong Kang*, Seulchan Lee, Sanghyun Kimâ ",
    jcr: "6.0%",
    links: [{ label: "DOI", href: "https://doi.org/10.3390/math13050810" }],
  },
  {
    year: "2025",
    type: "International Journal",
    venue: "Journal of Mechanical Science and Technology",
    title: "Enhanced Online Parameter Estimation of Unknown Objects via Sparse Identification of Unmodeled Dynamics",
    authors: "Hakjun Kim, Sanghyun Kimâ , Jinseong Parkâ ",
    links: [{ label: "DOI", href: "https://doi.org/10.1007/s12206-025-2201-2" }],
  },
  {
    year: "2025",
    type: "Domestic Journal",
    venue: "ëíê¸°ê³íí ë¼ë¬¸ì§ A",
    title: "íì§ íê²½ììì ìì¨ì£¼í ë¡ë´ ê²½ë¡ ê³í ì±ë¥ ë²¤ì¹ë§í¬ ë° ê³ ì°°",
    authors: "ìì¤ì´, ì´ê°ë¯¼, ì ìë¹, ë°©íì, ì¡°ì©ì§, ê°ì¸ì±, ê¹ìíâ ",
    links: [{ label: "DOI", href: "https://doi.org/10.3795/ksme-a.2025.49.12.1001" }],
  },
  {
    year: "2025",
    type: "Domestic Journal",
    venue: "ëíê¸°ê³íí ë¼ë¬¸ì§ A",
    title: "ëª¨ë¸ ìì¸¡ ê²½ë¡ ì ë¶ì íì©í íì´ë¸ë¦¬ë ì¼ì´ë¸ êµ¬ë ë¡ë´ì ì ì  ì ì´ê¸° ê°ë°",
    authors: "ê°ë¯¼í*, ë°ì´ì*, ì¥ê·¼ì°, ë°ë²ìâ , ê¹ìíâ ",
    links: [{ label: "DOI", href: "https://doi.org/10.3795/ksme-a.2025.49.2.089" }],
  },
  {
    year: "2024",
    type: "International Journal",
    venue: "IEEE Transactions on Automation Science and Engineering",
    title: "Object-Aware Impedance Control for Human-Robot Collaborative Task with Online Object Parameter Estimation",
    authors: "Jinseong Park, Young-Sik Shinâ , Sanghyun Kimâ ",
    jcr: "16.1%",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/TASE.2024.3477471" }],
  },
  {
    year: "2024",
    type: "International Journal",
    venue: "Nonlinear Dynamics",
    title: "Whole-body Control of Redundant Hybrid Cable-Driven Robot with Manipulator: Hierarchical Quadratic Programming Approach",
    authors: "Suhwan Park*, Leesai Park*, Seulchan Lee*, Sanghyun Kimâ ",
    jcr: "7.9%",
    links: [{ label: "DOI", href: "https://doi.org/10.1007/s11071-024-10082-3" }],
  },
  {
    year: "2024",
    type: "International Journal",
    venue: "IEEE Transactions on Robotics",
    title: "Online Multi-Contact Receding Horizon Planning via Value Function Approximation",
    authors: "Jiayi Wangâ , Sanghyun Kim, Teguh Santoso Lembono, Wenqian Du, Jaehyun Shim, Saeid Samadi, Ke Wang, Vladimir Ivan, Sylvain Calinon, Sethu Vijayakumar, Steve Tonneau",
    jcr: "9.4%",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/TRO.2024.3392154" }],
  },
  {
    year: "2024",
    type: "International Journal",
    venue: "Sensors",
    title: "Comparative Analysis of Integrated Filtering Method Using UWB Localization in Indoor Environments",
    authors: "Rahul Ranjan, Donggyu Shin, Yoonsik Jung, Sanghyun Kim, Jong-Hwan Yun, Chang-Hyun Kim, Seungjae Lee, Joongeup Kyeâ ",
    links: [{ label: "DOI", href: "https://doi.org/10.3390/s24041052" }],
  },
  {
    year: "2024",
    type: "International Journal",
    venue: "Applied Sciences",
    title: "The Development of Software to Automate the Laser Welding of a Liquefied Natural Gas Cargo Tank Using a Mobile Manipulator",
    authors: "Taeyong Choiâ , Jongwoo Park, Jeongae Bak, Dongil Park, Hyunuk Seo, Sanghyun Kim",
    links: [{ label: "DOI", href: "https://doi.org/10.3390/app14010134" }],
  },
  {
    year: "2023",
    type: "International Journal",
    venue: "IEEE Robotics and Automation Letters",
    title: "Motion Planning of Mobile Manipulator for Navigation Including Door Traversal",
    authors: "Keunwoo Jang, Sanghyun Kimâ , Jaeheung Parkâ ",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/LRA.2023.3279612" }],
  },
  {
    year: "2023",
    type: "International Journal",
    venue: "IEEE Access",
    title: "Dual-Arm Path-Planning Algorithm for Wiring Harness Assembly Using Redundantly Actuated Robotic Systems",
    authors: "Jiyoung Kim, Jin-Gyun Kim, Jongwoo Park, Byung-Kil Han, Sanghyun Kimâ , Dong Il Parkâ ",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/ACCESS.2023.3306793" }],
  },
  {
    year: "2022",
    type: "International Journal",
    venue: "Intelligent Service Robotics",
    title: "Weighted Hierarchical Quadratic Programming: Assigning Individual Joint Weights for Each Task Priority",
    authors: "Keunwoo Jang, Sanghyun Kimâ , Suhan Park, Junhyung Kim, Jaeheung Park",
    note: "Best Paper Award (2nd Place)",
    links: [{ label: "DOI", href: "https://doi.org/10.1007/s11370-022-00431-9" }],
  },
  {
    year: "2021",
    type: "International Journal",
    venue: "IEEE/ASME Transactions on Mechatronics",
    title: "Regularized Hierarchical Quadratic Program for Real-Time Whole-Body Motion Generation",
    authors: "Seongil Hong, Keunwoo Jang, Sanghyun Kim, Jaeheung Parkâ ",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/TMECH.2020.3032522" }],
  },
  {
    year: "2021",
    type: "International Journal",
    venue: "Applied Sciences",
    title: "Design of JET Humanoid Robot with Compliant Modular Actuators for Industrial and Service Applications",
    authors: "Jaehoon Sim, Seungyeon Kim, Suhan Park, Sanghyun Kim, Mingon Kim, Jaeheung Parkâ ",
    links: [{ label: "DOI", href: "https://doi.org/10.3390/app11136152" }],
  },
  {
    year: "2021",
    type: "International Journal",
    venue: "IEEE Access",
    title: "A Whole-Body Control Framework Based on the Operational Space Formulation Under Inequality Constraints via Task-Oriented Optimisation",
    authors: "Yisoo Lee, Sanghyun Kim, Jaeheung Park, Nikos Tsagarakis, Jinoh Leeâ ",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/ACCESS.2021.3064151" }],
  },
  {
    year: "2021",
    type: "International Journal",
    venue: "Sensors",
    title: "Reactive Self-Collision Avoidance for a Differentially Driven Mobile Manipulator",
    authors: "Keunwoo Jang, Sanghyun Kim, Jaeheung Parkâ ",
    links: [{ label: "DOI", href: "https://doi.org/10.3390/s21030890" }],
  },
  {
    year: "2019",
    type: "International Journal",
    venue: "Journal of Bionic Engineering",
    title: "Grasping Force Estimation by sEMG Signals and Arm Posture: Tensor Decomposition Approach",
    authors: "Sanghyun Kim, Joowan Kim, Mingon Kim, Seungyeon Kim, Jaeheung Parkâ ",
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
    title: "Team SNUâs Control Strategies to Enhance Robot Capability: Lessons from the DARPA Robotics Challenge Finals 2015",
    authors: "Sanghyun Kim, Mingon Kim, Jimin Lee, Soonwook Hwang, Joonbo Chae, Beomyeong Park, Hyunbum Cho, Jaehoon Sim, Jaesug Jung, Hosang Lee, Seho Shin, Minsung Kim, Wonje Choi, Yisoo Lee, Sumin Park, Jiyong Oh, Yongjin Lee, Sangkuk Lee, Myunggi Lee, Sangyup Yi, Kyong-Sok K. C. Chang, Nojun Kwak, Jaeheung Parkâ ",
    links: [{ label: "DOI", href: "https://doi.org/10.1007/978-3-319-74666-1_10" }],
  },
  {
    year: "2018",
    type: "Domestic Journal",
    venue: "ë¡ë´íí ë¼ë¬¸ì§",
    title: "ìì ì ì´ ìê³ ë¦¬ì¦ì ì´ì©í ë¡ë´ì ëì ì ì½ ê·¹ë³µì ìí íµí© íë ììí¬",
    authors: "ì¥ê·¼ì°, ê¹ìí, ë°ìí, ë°ì¬í¥â ",
    note: "Best Journal Paper Award",
    links: [{ label: "DOI", href: "https://doi.org/10.7746/jkros.2018.13.2.129" }],
  },
  {
    year: "2017",
    type: "International Journal",
    venue: "Journal of Field Robotics",
    title: "Team SNUâs Control Strategies to Enhance Robot Capability: Lessons from the 2015 DARPA Robotics Challenge Finals",
    authors: "Sanghyun Kim, Mingon Kim, Jimin Lee, Soonwook Hwang, Joonbo Chae, Beomyeong Park, Hyunbum Cho, Jaehoon Sim, Jaesug Jung, Hosang Lee, Seho Shin, Minsung Kim, Wonje Choi, Yisoo Lee, Sumin Park, Jiyong Oh, Yongjin Lee, Sangkuk Lee, Myunggi Lee, Sangyup Yi, Kyong-Sok K. C. Chang, Nojun Kwak, Jaeheung Parkâ ",
    links: [{ label: "DOI", href: "https://doi.org/10.1002/rob.21678" }],
  },
  {
    year: "2017",
    type: "Domestic Journal",
    venue: "ë¡ë´ê³¼ ì¸ê°",
    title: "HRI ì°êµ¬ ëí¥ - ìì ìíì ìí ë¡ë´ ì¬ì©ì ì¸í°íì´ì¤ë¥¼ ì¤ì¬ì¼ë¡",
    authors: "ê¹ì¤í, ê¹ìí, ë°ì¬í¥â ",
  },
  {
    year: "2017",
    type: "Domestic Journal",
    venue: "ë¡ë´íí ë¼ë¬¸ì§",
    title: "ë¡ë´ ë©ëí°ë ì´í°ì ì ì´ë¥¼ ìí í¹ì´ì  íí¼ ìê³ ë¦¬ì¦ì ë¹êµ ì°êµ¬",
    authors: "ê¹ìí, ë°ì¬í¥â ",
    links: [{ label: "DOI", href: "https://doi.org/10.7746/jkros.2017.12.1.042" }],
  },
  {
    year: "2016",
    type: "Domestic Journal",
    venue: "ì ì´Â·ë¡ë´Â·ìì¤ííí ë¼ë¬¸ì§",
    title: "í´ë¨¸ë¸ì´ë ë¡ë´ ì£¼íì ìí ìê²© ì¡°ì¢ ì¸í°íì´ì¤ ë° ìì ì ì¸ ì£¼í ì ëµ ê°ë°",
    authors: "ì ì¸í¸, ê¹ë¯¼ì±, ìì¤ì°, ê¹ìí, ë°ì¬í¥â ",
    links: [{ label: "DOI", href: "https://doi.org/10.5302/J.ICROS.2016.16.0153" }],
  },
  {
    year: "2015",
    type: "International Journal",
    venue: "Experimental Robotics",
    title: "Robot Hand Synergy Mapping Using Multi-Factor Model and EMG Signal",
    authors: "Sanghyun Kim, Mingon Kim, Jimin Lee, Jaeheung Parkâ ",
    links: [{ label: "DOI", href: "https://doi.org/10.1007/978-3-319-23778-7_44" }],
  },
  {
    year: "2015",
    type: "Domestic Journal",
    venue: "ë¡ë´ê³¼ ì¸ê°",
    title: "DRC Finals 2015 - ì°¸ê°íë¤ì ê²°ê³¼ë¶ì",
    authors: "ê¹ìí, ë°ë²ì, ë°ì¬í¥â ",
  },
  {
    year: "2011",
    type: "Domestic Journal",
    venue: "ëíê¸°ê³íí ë¼ë¬¸ì§ A",
    title: "íí± ë³µê°ê²½ ìì  ìë®¬ë ì´í°ììì ê·¼ì¬ì  ë§ì°° ë° ì¤ë ¥ ë³´ì",
    authors: "ê¹ìí, ì´ì°½ê·, ê¹ì§ì, ë¥ì íâ ",
    links: [{ label: "DOI", href: "https://doi.org/10.3795/ksme-a.2011.35.8.883" }],
  },

  {
    year: "2026",
    type: "International Conference",
    venue: "IEEE International Symposium on Safety, Security, and Rescue Robotics",
    title: "Seek, Donât Avoid: Radiation-Guided Exploration for Early Contamination Discovery",
    authors: "Miryeong Park, Taehyun Jung, Sanghyun Kimâ , Younggun Choâ ",
  },
  {
    year: "2026",
    type: "International Conference",
    venue: "26th International Conference on Control, Automation, and Systems",
    title: "Manifold-Constrained MPPI: Real-Time Sampling-Based Control Under Hard Equality Constraints",
    authors: "Seulchan Lee, Sanghyun Kimâ ",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2605.24813" }],
  },
  {
    year: "2026",
    type: "International Conference",
    venue: "IEEE 22nd International Conference on Automation Science and Engineering",
    title: "GRACE: Gradient-Free Robot Action Generation via Combined Diffusion-MPPI Posterior Estimation",
    authors: "Leesai Park, Jiho Hong, Sanghyun Kimâ ",
    note: "Work in Progress",
  },
  {
    year: "2026",
    type: "International Conference",
    venue: "IEEE International Conference on Robotics and Automation",
    title: "Wrench-Feasible Whole-Body Planning via Time-Layered DAG Optimization for Omnidirectional Aerial Manipulation",
    authors: "Daum Park, Bohyeong Pak, Sanghyun Kimâ ",
    note: "Late-Breaking Result",
  },
  {
    year: "2026",
    type: "Domestic Conference",
    venue: "ëíê¸°ê³íí 2026ë ì¢í©íì ëí",
    title: "ì ì´ ë°ì§ ì¡°ìì ìí ë¹ì -ì¸ì´-íë ëª¨ë¸ ê¸°ë° í ì¸ì§ ìì°¨ ì ì±",
    authors: "ë°ë³´í, ì¡°íí¸, ì´í´ì±, ê¹ìíâ ",
  },
  {
    year: "2026",
    type: "Domestic Conference",
    venue: "ëíê¸°ê³íí 2026ë ì¢í©íì ëí",
    title: "ë±ì ì ì½ ë¤ìì²´ìì ë¶ë±ì ì ì½ ì¸ì§í íìì ìí ë¦¬ë§ ë°°ë¦¬ì´ ë©í¸ë¦­ RRT",
    authors: "ê°ë¯¼í, ê¹ìíâ ",
  },
  {
    year: "2026",
    type: "Domestic Conference",
    venue: "ì ì´ë¡ë´ìì¤ííí íì ëí",
    title: "Nav2 ì ë°©í¥ ì£¼í ì ì´ê¸°ì ë¯¸ì¸ ìë ´ íê³ ë¶ìê³¼ ê¸°êµ¬í ê¸°ë° ìë ´ ì ì´ê¸°ì ì±ë¥ ê²ì¦",
    authors: "ìì¬ë½, ì¬ì¬í, ê¹ìíâ ",
  },
  {
    year: "2026",
    type: "Domestic Conference",
    venue: "ëíê¸°ê³íí 2026ë ì¶ê³íì ëí",
    title: "íë¬¼ ì¹´í¸ ê²°í©í ì ë°©í¥ ë¡ë´ì ê¸°êµ¬íì  ì ë ¬ ë° íµí© ì ì´ê¸° ì¤ê³",
    authors: "ìì¬ë½, ê¹ìíâ , ì¬ì¬íâ ",
  },
  {
    year: "2026",
    type: "Domestic Conference",
    venue: "ëíê¸°ê³íí 2026ë ì¶ê³íì ëí",
    title: "Quad Drive ê¸°ë° AGVì ë°°ì¹ êµ¬ì¡°ë³ ì­ê¸°êµ¬í í´ì ë° ì£¼í ì ì´ ë¡ì§ êµ¬í",
    authors: "ì¡°ë¯¼ì¬, ë°ë¤ì, ê¹ìíâ ",
  },
  {
    year: "2026",
    type: "Domestic Conference",
    venue: "ëíê¸°ê³íí 2026ë ì¶ê³íì ëí",
    title: "ìê° ê³ì¸µ êµ¬ì¡°ì DAG ìµì í ê¸°ë²ì ì´ì©í ì ë°©í¥ ê³µì¤ ìì ë¡ë´ì ë ì¹ ê°ì© ì ì  ê²½ë¡ ê³í",
    authors: "ë°ë¤ì, ë°ë³´í, ê¹ìíâ ",
    note: "Best Paper Award",
  },
  {
    year: "2026",
    type: "Domestic Conference",
    venue: "ëíê¸°ê³íí 2026ë ì¶ê³íì ëí",
    title: "íë¼ë¯¸í° ì¸ì§ ì ê²½ë§ì ì´ì©í ë¡ë´ ë§ë¨ ë¶ì°© ê°ì²´ì ìì¤í ìë³",
    authors: "ë°ìí, ê¹ìíâ ",
  },
  {
    year: "2026",
    type: "Domestic Conference",
    venue: "ëíê¸°ê³íí 2026ë ì¶ê³íì ëí",
    title: "4ì¡± ë³´í ë¡ë´ ê¸°ë° íê´ì° ê³ í´ìë ìê¸°ì¥ ë§µí íë ììí¬",
    authors: "ì¤ì§ì, ê°ìâ , ê¹ìíâ ",
  },
  {
    year: "2026",
    type: "Domestic Conference",
    venue: "ì 21í íêµ­ë¡ë´ì¢í©íì ëí",
    title: "ëª¨ë¸ ìì¸¡ ê²½ë¡ì ë¶ë²ì íì©í GPU ë³ë ¬ ë¬¼ë¦¬ ìë®¬ë ì´ì ê¸°ë° ì¤ìê° ë¬¼ì²´-íê²½ ìí¸ìì© ì ì´",
    authors: "ë°ì´ì, ê¹ìíâ ",
  },
  {
    year: "2025",
    type: "International Conference",
    venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems",
    title: "CSC-MPPI: A Novel Constrained MPPI Framework with DBSCAN for Reliable Obstacle Avoidance",
    authors: "Leesai Park, Keunwoo Jangâ , Sanghyun Kimâ ",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/IROS60139.2025.11246839" }],
  },
  {
    year: "2025",
    type: "International Conference",
    venue: "3rd Emerging Technologies in Mechanical Engineering",
    title: "Tool-Aware Task and Motion Planning with Dynamic Tool Changing for Automated Chemistry",
    authors: "Hyunho Cho*, Bohyeong Pak*, Sanghyun Kimâ ",
  },
  {
    year: "2025",
    type: "International Conference",
    venue: "International Conference on Space Robotics",
    title: "CUTE-Planner: Confidence-Aware Uneven Terrain Exploration Planner",
    authors: "Miryeong Park, Dongjin Cho, Sanghyun Kim, Younggun Choâ ",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/iSpaRo66239.2025.11436759" }],
  },
  {
    year: "2025",
    type: "Domestic Conference",
    venue: "ì ì´ë¡ë´ìì¤ííí íì ëí",
    title: "ìí¸ìì©í ìê²© ë¡ë´ ì¡°ìì ìí ë¶í  ê¸°ë° VR ì¸í°íì´ì¤",
    authors: "ë°ì°¬ì§, ì¡°íí¸, ì´ê°ë¯¼, ê°ìì â , ê¹ìíâ ",
  },
  {
    year: "2025",
    type: "Domestic Conference",
    venue: "ëíê¸°ê³íí 2025ë ì¶ê³íì ëí",
    title: "íë í¸ë¦¬ ë° ì¸ê³µì§ë¥ ëª¨ë¸ ì°ê³ë¥¼ íµí ìì¨ ìì ìíì¤ êµ¬í",
    authors: "ì´ì¹í, ê¹ìíâ ",
  },
  {
    year: "2025",
    type: "Domestic Conference",
    venue: "ëíê¸°ê³íí 2025ë ì¶ê³íì ëí",
    title: "ë¬¼ë¦¬ ì ë³´ íìµ ë° í¬ì íê· ë°©ë²ì ì´ì©í ë§¤ëí°ë ì´í° ë§ì°° ëª¨ë¸ ìë³",
    authors: "ê¹íì¤, ë°ì§ì±â , ê¹ìíâ ",
  },
  {
    year: "2025",
    type: "Domestic Conference",
    venue: "íêµ­í­ê³µì°ì£¼íí 2025ë ì¶ê³íì ëí",
    title: "ê±°ì¹ ì§í ê°ì¸í ì£¼íì ìí Hybrid A* ê¸°ë° ëª¨ë¸ ìì¸¡ ê²½ë¡ ì ë¶ ì ì´",
    authors: "ê°ë¯¼í*, ì´ì¬ì°¬*, ìì¤ì´, ê¹ìíâ ",
  },
  {
    year: "2025",
    type: "Domestic Conference",
    venue: "ì 20í íêµ­ë¡ë´ì¢í©íì ëí",
    title: "ê°ë°©ì´í ìë¯¸ë¡ ì  ë§¤íì íµí ìº¡ì íì© ë´ë¹ê²ì´ì",
    authors: "ê°ìì , íì§í¸, ê¹ìíâ , ì ììâ ",
  },
  {
    year: "2025",
    type: "Domestic Conference",
    venue: "ì 20í íêµ­ë¡ë´ì¢í©íì ëí",
    title: "ì¦ê°íì¤ ê¸°ê¸°ë¥¼ ì´ì©í ìì± ëªë ¹ ê¸°ë° ì¤ìê° ê°ì²´ ì¸ê·¸ë©íì´ì",
    authors: "ê°ìì , ì ìì, ê¹ìíâ ",
  },
  {
    year: "2024",
    type: "International Conference",
    venue: "11th Asian Conference on Multibody Dynamics",
    title: "Inverse Kinematics Solution to Mobile Manipulator Considering Stability Constraint and Force Manipulability",
    authors: "Seulchan Lee, Sanghyun Kimâ , Keunwoo Jangâ ",
  },
  {
    year: "2024",
    type: "International Conference",
    venue: "11th Asian Conference on Multibody Dynamics",
    title: "Enhanced Online Parameter Estimation of Unknown Objects via Sparse Identification of Unmodeled Dynamics",
    authors: "Hakjun Kim, Sanghyun Kimâ , Jinseong Parkâ ",
    note: "Best Poster Award",
  },
  {
    year: "2024",
    type: "International Conference",
    venue: "21st International Conference on Ubiquitous Robots",
    title: "Nonlinear Identification of Unknown Object Dynamics for Human-Robot Collaborative Tasks",
    authors: "Hakjun Kim, Sanghyun Kimâ , Jinseong Parkâ ",
  },
  {
    year: "2024",
    type: "Domestic Conference",
    venue: "ëíê¸°ê³íí 2024ë ì¶ê³íì ëí",
    title: "ìê°-ì¸ì´ ë´ë¹ê²ì´ìì ìí ê°ë°© ì´í ê¸°ë°ì ìë¯¸ë¡ ì  ë§µí",
    authors: "íì§í¸*, ê°ìì *, ê¹ìíâ , ì ììâ ",
  },
  {
    year: "2024",
    type: "Domestic Conference",
    venue: "ëíê¸°ê³íí 2024ë ì¶ê³íì ëí",
    title: "ëª¨ë¸ ìì¸¡ ê²½ë¡ ì ë¶ì íì©í íì´ë¸ë¦¬ë ì¼ì´ë¸ êµ¬ë ë¡ë´ì ì ì  ì ì´ê¸° ê°ë°",
    authors: "ê°ë¯¼í*, ë°ì´ì*, ì¥ê·¼ì°, ë°ë²ìâ , ê¹ìíâ ",
  },
  {
    year: "2024",
    type: "Domestic Conference",
    venue: "ì ì´ë¡ë´ìì¤ííí íì ëí",
    title: "ë¬ íì¬ ìë®¬ë ì´ìììì Model Predictive Path Integral ê¸°ë° ëª¨ë°ì¼ ë¡ë´ 2.5D ìì¨ ì£¼í ì ì´",
    authors: "ìì¤ì´, ê¹ìíâ ",
  },
  {
    year: "2024",
    type: "Domestic Conference",
    venue: "ëíê¸°ê³íí ëì­í ì ì´ ë¡ë´ ë¶ë¬¸ 2024ë ì¶ê³íì ëí",
    title: "ëª¨ë°ì¼ ë§¤ëí°ë ì´í°ì AR ëì¤íë ì´ ì¸í°íì´ì¤ ì¤ê³",
    authors: "ì¡°íí¸, ê¹ìíâ ",
  },
  {
    year: "2024",
    type: "Domestic Conference",
    venue: "ëíê¸°ê³íí ëì­í ì ì´ ë¡ë´ ë¶ë¬¸ 2024ë ì¶ê³íì ëí",
    title: "ICP ìê³ ë¦¬ì¦ì íì©í QR ë§ì»¤ ê¸°ë° ëí¹ ìì¤í í¥ì",
    authors: "ê°ë¯¼í, ìì¤ì´, ê¹ìíâ ",
  },
  {
    year: "2024",
    type: "Domestic Conference",
    venue: "ëíê¸°ê³íí ëì­í ì ì´ ë¡ë´ ë¶ë¬¸ 2024ë ì¶ê³íì ëí",
    title: "ë¬ íì¬ ìë®¬ë ì´ì ê¸°ë° ëª¨ë°ì¼ ë¡ë´ì 2.5D ìì¨ ì£¼í ê¸°ë²",
    authors: "ìì¤ì´, ê¹ìíâ ",
  },
  {
    year: "2023",
    type: "International Conference",
    venue: "23rd International Conference on Control, Automation and Systems",
    title: "Improving Indoor Positioning Systems with UWB and Filtering Techniques: A Comparative Analysis",
    authors: "Rahul Ranjan, Yoonsik Jung, Donggyu Shin, Sanghyun Kim, Chang-Hyun Kim, Seungjae Lee, Joongeup Kyeâ ",
    links: [{ label: "DOI", href: "https://doi.org/10.23919/ICCAS59377.2023.10316857" }],
  },
  {
    year: "2023",
    type: "International Conference",
    venue: "18th International Conference on Intelligent Autonomous Systems",
    title: "Efficient Traversability Mapping Based on Single Camera and 3D LiDAR",
    authors: "Chanmin Youn, Wonkeun Youn, Sanghyun Kim, Jinseong Park, Young-Sik Shinâ ",
    links: [{ label: "DOI", href: "https://doi.org/10.1007/978-3-031-44851-5_47" }],
  },
  {
    year: "2022",
    type: "International Conference",
    venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems",
    title: "Learning to Guide Online Multi-Contact Receding Horizon Planning",
    authors: "Jiayi Wangâ , Teguh Santoso Lembono, Sanghyun Kim, Sylvain Calinon, Sethu Vijayakumar, Steve Tonneau",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/IROS47612.2022.9981234" }],
  },
  {
    year: "2021",
    type: "International Conference",
    venue: "IEEE-RAS International Conference on Humanoid Robots",
    title: "Multi-Fidelity Receding Horizon Planning for Multi-Contact Locomotion",
    authors: "Jiayi Wangâ , Sanghyun Kim, Sethu Vijayakumar, Steve Tonneau",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/HUMANOIDS47582.2021.9555778" }],
  },
  {
    year: "2020",
    type: "Domestic Conference",
    venue: "ì 15í íêµ­ë¡ë´ì¢í©íì ëí",
    title: "ëª©í ë ì¹ê° ì£¼ì´ì§ ìí©ìì ê´ì  í í¬ë¥¼ ìµìííë ì­ê¸°êµ¬í",
    authors: "ë°ìí, ì¥ê·¼ì°, ê¹ì¹ì°, ê¹ìí, ë°ì¬í¥â ",
  },
  {
    year: "2019",
    type: "International Conference",
    venue: "IEEE International Conference on Advanced Robotics and Mechatronics",
    title: "Whole-Body Control for Nonholonomic Mobile Manipulator Using Hierarchical Quadratic Programming and Continuous Task Transition",
    authors: "Sanghyun Kim, Keunwoo Jang, Suhan Park, Yisoo Lee, Sang Yup Lee, Jaeheung Parkâ ",
    note: "Best Conference Paper Award",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/ICARM.2019.8834269" }],
  },
  {
    year: "2019",
    type: "Domestic Conference",
    venue: "ì 14í íêµ­ë¡ë´ì¢í©íì ëí",
    title: "ì°ì ìì ì ì´ ìê³ ë¦¬ì¦ì ì´ì©í ë¡ë´ ë§¤ëí°ë ì´í°ì ìê¸° ì¶©ë íí¼ ìê³ ë¦¬ì¦",
    authors: "ì¥ê·¼ì°, ê¹ìí, ë°ìí, ì´ìì½, ë°ì¬í¥â ",
  },
  {
    year: "2019",
    type: "Domestic Conference",
    venue: "ì 14í íêµ­ë¡ë´ì¢í©íì ëí",
    title: "íë£¨í ì­ê¸°êµ¬í ìê³ ë¦¬ì¦ì ì´ì©í ì¶ì¢ ì ì´ì ë¹êµ ì°êµ¬",
    authors: "ì´ìì½, ë°ìí, ì¥ê·¼ì°, ê¹ìí, ê¹ì¹ì°, ë°ì¬í¥â ",
  },
  {
    year: "2018",
    type: "International Conference",
    venue: "15th International Conference on Ubiquitous Robots",
    title: "Real-Time Inverse Kinematics Technique for Controlling Redundant Avatar Arm",
    authors: "Sanghyun Kim, Jeeseop Kim, Jaeheung Parkâ ",
  },
  {
    year: "2018",
    type: "International Conference",
    venue: "IEEE International Conference on Robotics and Automation",
    title: "Disturbance Observer-Based Linear Feedback Controller for Compliant Motion of Humanoid Robot",
    authors: "Mingon Kim, Jung Hoon Kim, Sanghyun Kim, Jaehoon Sim, Jaeheung Parkâ ",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/ICRA.2018.8460618" }],
  },
  {
    year: "2017",
    type: "International Conference",
    venue: "International Symposium on Experimental Robotics",
    title: "Application of Robot Manipulator for Cardiopulmonary Resuscitation",
    authors: "Jaesug Jung, Jeeseop Kim, Sanghyun Kim, Woon Yong Kwon, Sang Hoon Na, Kyoung Su Kim, Gil Joon Suh, Byeong Wook Yoo, Jin Woo Choi, Jung Chan Lee, Jaeheung Parkâ ",
    links: [{ label: "DOI", href: "https://doi.org/10.1007/978-3-319-50115-4_24" }],
  },
  {
    year: "2017",
    type: "Domestic Conference",
    venue: "íêµ­ì ë°ê³µíí 2017ë ì¶ê³íì ëí",
    title: "ì¼ë°íë ìì¬ì­íë ¬ì ê°ì¤ íë ¬ì ì´ì©í ë¹íë¡ë¸ë¯¹ ëª¨ë°ì¼ ë§¤ëí°ë ì´í°ì ê´ì  íê³ íí¼",
    authors: "ì¥ê·¼ì°, ê¹ìí, ë°ìí, ë°ì¬í¥â ",
  },
  {
    year: "2016",
    type: "International Conference",
    venue: "13th International Conference on Ubiquitous Robots and Ambient Intelligence",
    title: "Human Motion Imitation for Humanoid by Recurrent Neural Network",
    authors: "Mingon Kim, Sanghyun Kim, Jaeheung Parkâ ",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/URAI.2016.7625768" }],
  },
  {
    year: "2015",
    type: "International Conference",
    venue: "IEEE-RAS International Conference on Humanoid Robots",
    title: "Approach of Team SNU to the DARPA Robotics Challenge Finals",
    authors: "Sanghyun Kim, Mingon Kim, Jimin Lee, Soonwook Hwang, Joonbo Chae, Beomyeong Park, Hyunbum Cho, Jaehoon Sim, Jaesug Jung, Hosang Lee, Seho Shin, Minsung Kim, Nojun Kwak, Yongjin Lee, Sangkuk Lee, Myunggi Lee, Sangyup Yi, Kyong-Sok K. C. Chang, Jaeheung Parkâ ",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/HUMANOIDS.2015.7363458" }],
  },
  {
    year: "2015",
    type: "Domestic Conference",
    venue: "ì ë³´ ë° ì ì´ íì ëí",
    title: "ìµì ê°ìì ë§ì»¤ ê¸°ë° ìê³µê° ì¬ìì ì´ì©í ìë°í ëì ìì±",
    authors: "ê¹ë¯¼ê³¤, Romain Destenay, ê¹ìí, ê¶ì í , ì¼ê¸°ì, ë°ì¬í¥, ì ë²ì¬â ",
  },
  {
    year: "2014",
    type: "International Conference",
    venue: "IEEE-RAS International Conference on Humanoid Robots",
    title: "Aesthetic Design and Development of Humanoid Legged Robot",
    authors: "Mathew Schwartz, Soonwook Hwang, Yisoo Lee, Jongseok Won, Sanghyun Kim, Jaeheung Parkâ ",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/HUMANOIDS.2014.7041311" }],
  },
  {
    year: "2014",
    type: "Domestic Conference",
    venue: "ì 9í íêµ­ë¡ë´ì¢í©íì ëí",
    title: "íì§ ë¶ë¥ ì²´ê³ë¥¼ ì´ì©í ìì¸ ìëì§ ì¶ì¶",
    authors: "ê¹ìí, ê¹ë¯¼ê³¤, ë°ì¬í¥â ",
  },
  {
    year: "2014",
    type: "Domestic Conference",
    venue: "ì 9í íêµ­ë¡ë´ì¢í©íì ëí",
    title: "íë©´ ê·¼ì ëë¥¼ ì´ì©í ì ìì¸ ë° íì§ë ¥ ì¶ì ",
    authors: "ì´ì§ë¯¼, ê¹ë¯¼ê³¤, ê¹ìí, ë°ì¬í¥â ",
  },
  {
    year: "2010",
    type: "International Conference",
    venue: "6th Asian Conference on Computer Aided Surgery",
    title: "Data-Driven Haptic Rendering of Friction Between Surgical Device and Trocar for Laparoscopic Surgery Simulator",
    authors: "Sanghyun Kim, Chang-Gyu Lee, Jeha Ryuâ ",
  },
  {
    year: "2010",
    type: "Domestic Conference",
    venue: "ëíê¸°ê³íí íì ëí",
    title: "ë§ì°° ë° ì¤ë ¥ ë³´ìì ìí í¸ë¡ì¹´ ë§ì°° ëª¨ë¸ë§",
    authors: "ê¹ìí, ì´ì°½ê·, ê¹ì§ì, ë¥ì íâ ",
  },
  {
    year: "2010",
    type: "Domestic Conference",
    venue: "ëíê¸°ê³íí íì ëí",
    title: "íí± ë³µê°ê²½ ìì  ìë®¬ë ì´í°ììì ë§ì°° ë° ì¤ë ¥ ë³´ì",
    authors: "ê¹ìí, ì´ì°½ê·, ê¹ì§ì, ë¥ì íâ ",
  },
];

export const patents: Patent[] = [
  { year: "2026", status: "Application", inventors: "ê¹ìí, ë°ë¤ì", title: "íì´ë° ë¶ë³ ì ì½ì ì ì  ì ë³ê³¼ ê²½ë¡ ê°ìë íêµ¬ê° ì¶ì½ì ì´ì©í ì´ì¢ ë¦¬ëëí¸ ë§¤ëí°ë ì´í°ì íµí© ê·ì ê²½ë¡ ê³í ë° ì¤íë¼ì¸ ì¤íê°ë¥ì± íì  ë°©ë² ë° ê·¸ ìì¤í", number: "10-2026-0155819", filed: "2026.08.19" },
  { year: "2026", status: "Application", inventors: "ê¹ìí, ì´ì¬ì°¬", title: "ì ì½ ì¡°ê±´ ë³´ì ì ì´ì©í ë¡ë´ ìì¤í ì ì´ ì¥ì¹ ë° ë°©ë²", number: "10-2026-0132773", filed: "2026.07.20" },
  { year: "2026", status: "Application", inventors: "ê¹ìí, ê°ë¯¼í", title: "ë¦¬ë§ ë°°ë¦¬ì´ ë©í¸ë¦­ ê¸°ë° ëª¨ì íëë ìì¤í ë° ë°©ë²", number: "10-2026-0113538", filed: "2026.06.22" },
  { year: "2026", status: "Application", inventors: "ê¹ìí, ê°ìì , íì§í¸, ì ìì", title: "ì¸ì¤í´ì¤ ìì¤ ìë§¨í± ë§µ ê¸°ë° ìì°ì´ ë´ë¹ê²ì´ì ì¥ì¹ ë° ë°©ë²", number: "10-2026-0075610", filed: "2026.04.27" },
  { year: "2026", status: "Application", inventors: "ê¹ìí, ì¡°íí¸, ë°ë³´í", title: "íí ì¤í ìì¨ ìí ì¥ì¹ ë° ë°©ë²", number: "10-2026-0025745", filed: "2026.02.09" },
  { year: "2026", status: "Registration", inventors: "ê¹ìí, ìì¤ì´, ê°ë¯¼í", title: "ë¼ì´ë¤ ê¸°ë° ëª¨ë°ì¼ ë¡ë´ì ëí¹ ìì¤í ë° ëí¹ ë°©ë²", number: "10-2924819", jurisdiction: "Korea", filed: "2024.02.14", registered: "2026.02.04" },
  { year: "2025", status: "Program", inventors: "ê¹ìí, ì íí, ì¡ìí, ì¤ì°ì§, ììë¹, ì´ì¹ì¤", title: "ë°©ì¬ë¥ ì§ë ìì±ì ìí ìì¨ ì£¼í ìë®¬ë ì´ì íë¡ê·¸ë¨", number: "C-2025-041666", registered: "2025.10.15" },
  { year: "2025", status: "Application", inventors: "ê¹ìí, ê¹ì ì¤, ê¹íì¤", title: "ë°ì´í° ê¸°ë° ë§ì°° ëª¨ë¸ì ì´ì©í ëì§í¸ í¸ì ìë®¬ë ì´ì ì í©í¥ììì¤í ë° ì í©í¥ìë°©ë²", number: "10-2025-0180382", filed: "2025.11.25" },
  { year: "2025", status: "Application", inventors: "ê¹ìí, ì¥ê·¼ì°, ë°ì´ì", title: "ìí ë³´ì  ë° ë°ëê¸°ë° í´ë¬ì¤í°ë§ì íì©í ì¥ì ë¬¼ íí¼ ê²½ë¡ ìì± ì¥ì¹ ë° ë°©ë²", number: "10-2025-0119564", filed: "2025.08.26" },
  { year: "2024", status: "Application", inventors: "ê¹ìí, ì´ì¬ì°¬, ë°ì´ì, ë°ìí", title: "ë§¤ëí°ë ì´í°ë¥¼ ê²°í©í íì´ë¸ë¦¬ë ì¼ì´ë¸ êµ¬ë ë¡ë´ì ì ì  ì ì´ìì¤í ë° ì ì´ë°©ë²", number: "10-2024-0090023", filed: "2024.07.05" },
  { year: "2024", status: "Program", inventors: "ê¹ìí, ìì¤ì´", title: "ë¬ íì¬ì© ìì¨ ì£¼í ìë®¬ë ì´ì íë¡ê·¸ë¨", number: "C-2024-026248", registered: "2024.07.29" },
  { year: "2023", status: "Registration", inventors: "ê³ ëì´, ì ìì, ê¹ì°½í, ê¹ì ì¤, ì´ì¢ë¯¼, ííì, ë°ëì, ìì¬ì, íì°½ì, ë°ì§ì±, ìë³í, ì ì±í¸, ê¹ìí, ê¹ìë¦°", title: "ì´ëë¡ë´ì© ê¶¤ëë¥ ë° ì´ë¥¼ í¬í¨íë ì´ëë¡ë´", number: "10-2603028", jurisdiction: "Korea", filed: "2022.11.16", registered: "2023.11.13" },
  { year: "2022", status: "Registration", inventors: "ê³ ëì´, ê¹ì ì¤, ë°ì§ì±, ì ìì, ê¹ìí, ì´ì¢ë¯¼, ííì, ë°ëì, ê¹ì°½í, ìì¬ì, íì°½ì, ìë³í, ì ì±í¸", title: "ëª¨ë ë¡ë´ ë° ëª¨ë ë¡ë´ì ì ì´ ë°©ë²", number: "10-2459965", jurisdiction: "Korea", filed: "2022.08.29", registered: "2022.10.24" },
  { year: "2019", status: "Registration", inventors: "ìê¸¸ì¤, ê¶ì´ì©, ê¹ê²½ì, ëìí, ë°ì¬í¥, ì´ì ì°¬, ì ì¤ì , ì ê²½ë¯¼, ë°ë¯¼ì§, ê¹íê· , ê³ ì ì¸, ê¹ì§ì­, ì ì¬ì, ê¹ìí, ì ë³ì±, ì´ë³í, ì¡°ì°ì, ìµì§ì°", title: "ìë ì¬íìì ì¥ì¹ ë° ì ì´ ë°©ë²", number: "US 11071686B2 Â· CN 108697572B Â· EP 3409258B1", jurisdiction: "United States Â· China Â· European Union", filed: "2017.01.26", registered: "US 2021.07.27 Â· CN 2020.06.19 Â· EP 2020.12.23" },
  { year: "2016", status: "Registration", inventors: "ìê¸¸ì¤, ê¶ì´ì©, ê¹ê²½ì, ëìí, ë°ì¬í¥, ì´ì ì°¬, ì ì¤ì , ì ê²½ë¯¼, ë°ë¯¼ì§, ê¹íê· , ê³ ì ì¸, ê¹ì§ì­, ì ì¬ì, ê¹ìí, ì ë³ì±, ì´ë³í, ì¡°ì°ì, ìµì§ì°", title: "ìë ì¬íìì ì¥ì¹ ë° ì ì´ ë°©ë²", number: "10-1956776", jurisdiction: "Korea", filed: "2016.12.16", registered: "2019.03.11" },
  { year: "2016", status: "Registration", inventors: "ê¹ìí, ë°ì¬í¥, ê¹ë¯¼ê³¤, ì´ì§ë¯¼, ê¶ì í , ì ë²ì¬", title: "íì§ìì¸ ë° íì§ë ¥ì ì¶ì íë ì¥ì¹", number: "10-1654294", jurisdiction: "Korea", filed: "2014.12.19", registered: "2016.09.06" },
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
    title: "ì°ìë¼ë¬¸ì",
    org: "ëíê¸°ê³íí 2026ë ì¶ê³íì ëí",
    detail: "ìê° ê³ì¸µ êµ¬ì¡°ì DAG ìµì í ê¸°ë²ì ì´ì©í ì ë°©í¥ ê³µì¤ ìì ë¡ë´ì ë ì¹ ê°ì© ì ì  ê²½ë¡ ê³í (ë°ë¤ì, ë°ë³´í, ê¹ìíâ )",
  },
  {
    year: "2026",
    title: "ì°ìì",
    org: "í´ë¨¸ë¸ì´ë ì¤ì¦ ì±ë¦°ì§ (íêµ­ë¡ë´ì°ìì§í¥ì)",
  },
  {
    year: "2025",
    title: "ì°ìíµìììë¶ ì¥ê´ì",
    org: "2025 ì°í íë¡ì í¸ ì±ë¦°ì§",
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
    title: "ëíë¯¼êµ­ ê³¼í ë¶ì¼ ì°ìì±ê³¼ 100ì ",
    org: "ê³¼íê¸°ì ì ë³´íµì ë¶",
  },
  {
    year: "2019",
    title: "Best Conference Paper Award",
    org: "IEEE International Conference on Advanced Robotics and Mechatronics",
  },
  {
    year: "2018",
    title: "Best Journal Paper Award",
    org: "ë¡ë´íí ë¼ë¬¸ì§",
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
