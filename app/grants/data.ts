export type GrantCategory = "Government" | "Industry" | "Technology Transfer";

export type Grant = {
  year: string; // start year, used for grouping
  period: string;
  category: GrantCategory;
  agency: string;
  title: string;
  program?: string;
  ongoing?: boolean;
};

export const grants: Grant[] = [
  // Government / research-institute projects
  { year: "2026", period: "2026–2029", category: "Government", agency: "중소기업기술정보진흥원", title: "고하중 물체 이송을 위한 세미 휴머노이드 양팔로봇의 전신 제어기술", program: "스케일업 팁스 R&D · 위탁연구", ongoing: true },
  { year: "2026", period: "2026", category: "Government", agency: "경기 RISE 센터", title: "Behavior Tree 기반 고장 대응형 야지 자율주행 SW 개발", program: "지산학 협업 연구개발 · 연구책임자", ongoing: true },
  { year: "2026", period: "2026", category: "Government", agency: "선박해양플랜트연구소", title: "피지컬 AI 기반 해양 다자유도 로봇의 통합 제어 기법 연구", program: "학연공동연구사업", ongoing: true },
  { year: "2026", period: "2026", category: "Government", agency: "한국과학기술연구원", title: "스마트팜 수확 자동화 로봇용 매니퓰레이터의 동작과 최적 경로 생성 및 제어", program: "KIST 주요사업 위탁연구과제", ongoing: true },
  { year: "2026", period: "2026", category: "Government", agency: "한국기계연구원", title: "이동형 휴머노이드 동작제어 SW", program: "연구용역", ongoing: true },
  { year: "2026", period: "2026–2030", category: "Government", agency: "농촌진흥청", title: "과수 농작업 행동특성 모방 학습형 제어기술 개발 및 농업로봇 기술 표준화 연구", program: "지능형농업로봇핵심기반기술개발 R&D · 공동연구책임자", ongoing: true },
  { year: "2026", period: "2026–2030", category: "Government", agency: "한국연구재단", title: "생성형 정책과 모델 예측 제어의 하이브리드 Physical AI 프레임워크: 매니퓰레이터의 모션 제어에서 휴머노이드의 전신 제어까지", program: "우수연구–신진연구(유형B) · 연구책임자", ongoing: true },
  { year: "2026", period: "2026–2027", category: "Government", agency: "한국연구재단", title: "초고령사회 플랫폼 기반 사람중심의 고령서비스-테크 문제해결형 혁신인재 양성사업", program: "4단계 BK21 사업 · 참여연구자", ongoing: true },
  { year: "2025", period: "2025–2026", category: "Government", agency: "경기 RISE 센터", title: "자율 주행 차량의 야지 주행 알고리즘의 SW 개발", program: "지산학 협업 연구개발 · 연구책임자" },
  { year: "2025", period: "2025–2028", category: "Government", agency: "산업통상자원부", title: "초소형 근접 3차원 측정 센서를 장착한 고정밀 조작 작업용 고자유도 경량 휴머노이드 로봇 손 개발", program: "로봇핵심기술개발 · 공동연구책임자", ongoing: true },
  { year: "2025", period: "2025", category: "Government", agency: "한국로봇산업진흥원", title: "AI 이족 보행 휴머노이드의 초기 실증 및 상용화 가능성 연구", program: "휴머노이드로봇 실증 지원사업" },
  { year: "2025", period: "2025", category: "Government", agency: "경희대학교", title: "RGB 센서와 LiDAR 센서 융합을 통한 2.5D 자율주행 알고리즘 개발", program: "대학 보유 기술 실용화개발지원사업 · 연구책임자" },
  { year: "2025", period: "2025–2030", category: "Government", agency: "과학기술정보통신부", title: "자율성장 AI 휴머노이드 전략연구단", program: "글로벌TOP전략연구단 · 위탁연구책임자", ongoing: true },
  { year: "2025", period: "2025–2028", category: "Government", agency: "산업통상자원부", title: "디지털트윈용 가상화기기 실증기술", program: "국가로봇테스트필드사업 · 공동연구자", ongoing: true },
  { year: "2025", period: "2025", category: "Government", agency: "한국여성과학기술인육성재단", title: "신체적 제약 조건의 사용자를 위한 AI 기반 다감각 인터페이스를 활용한 로봇 원격 조작 기술 연구", program: "여대학원생 공학연구팀제 지원사업 · 지도교수(연구책임자: 강은애)" },
  { year: "2025", period: "2025–2026", category: "Government", agency: "한국기초과학지원연구원", title: "휴머노이드 로봇 기반 초격차 연구 환경 조성: 인간 중심의 미래 기술 탐구", program: "신진연구자 인프라 지원 사업 · 연구책임자", ongoing: true },
  { year: "2025", period: "2025", category: "Government", agency: "한국건설기술연구원", title: "교량 하면 점검용 로봇위치제어 시스템 연산기 시뮬레이터 개발", program: "연구용역" },
  { year: "2025", period: "2025", category: "Government", agency: "한국기계연구원", title: "복합 보행이 가능한 휴머노이드 시뮬레이션", program: "연구용역" },
  { year: "2024", period: "2024–2027", category: "Government", agency: "중소기업기술정보진흥원", title: "차세대 소재 혁신을 위한 자율적 소재 발굴 시스템 인공지능 기술 개발", program: "전략기술 테마별 프로젝트(DCP) · 위탁연구", ongoing: true },
  { year: "2024", period: "2024–2028", category: "Government", agency: "한국연구재단", title: "인간 수준의 다중감각 센싱 시스템과 정밀 조작 원격 인터페이스를 갖춘 인간형 아바타 로봇 개발", program: "STEAM 글로벌융합연구지원 · 공동연구책임자", ongoing: true },
  { year: "2024", period: "2024–2026", category: "Government", agency: "한국연구재단", title: "초고령 사회 일자리 혁신: 노인 맞춤형 다중감각 인터페이스를 통한 로봇 공유제어 기술", program: "글로벌 기초연구실 · 공동연구책임자", ongoing: true },
  { year: "2024", period: "2024", category: "Government", agency: "한국로봇산업협회", title: "2.5차원 자율주행 기술 개발", program: "AI로봇기반 인간기계협업기술 전문인력양성사업" },
  { year: "2024", period: "2024", category: "Government", agency: "경희대학교", title: "영업용 전기자동차 배터리 교체형 구독 서비스 실증을 위한 배터리 교체용 AGV의 SW 개발", program: "연구책임자" },
  { year: "2024", period: "2024–2027", category: "Government", agency: "산업통상자원부", title: "정밀 조립작업 대상 실환경 파라미터가 반영된 로봇용 가상환경 플랫폼 개발", program: "로봇산업핵심기술개발 · 공동연구자", ongoing: true },
  { year: "2024", period: "2024", category: "Government", agency: "한국연구재단", title: "인간 수준의 다중감각 센싱 시스템과 정밀 조작 원격 인터페이스를 갖춘 인간형 아바타 로봇 개발 (선기획)", program: "STEAM 글로벌융합연구지원 · 공동연구책임자" },
  { year: "2024", period: "2024–2025", category: "Government", agency: "중소벤처기업부", title: "영업용 전기자동차 배터리 교체형 구독서비스 실증을 위한 배터리 교체용 자율주행로봇(AMR) 개발", program: "창업성장기술개발사업(디딤돌) · 위탁연구책임자" },
  { year: "2024", period: "2024", category: "Government", agency: "경희대학교", title: "MPPI를 활용한 HCDR 제어기 개발", program: "대학혁신지원사업 · 해외 유수대학 연구소 탐방 및 공동연구" },
  { year: "2024", period: "2024", category: "Government", agency: "한국기계연구원", title: "로봇을 활용한 지능 기반의 커넥터 체결/해체 작업 기술 개발을 위한 로봇의 토크제어 모델링", program: "연구용역" },
  { year: "2024", period: "2024", category: "Government", agency: "한국건설기술연구원", title: "교량 하면 점검용 로봇위치제어 시스템 연산기 수정 및 모듈화 용역", program: "연구용역" },
  { year: "2023", period: "2023", category: "Government", agency: "국가청정생산지원센터", title: "배터리 교체 기술을 활용한 재제조 배터리 구독서비스 실증사업", program: "순환경제신사업모델 개발 및 실증화 지원 · 공동연구책임자" },
  { year: "2023", period: "2023", category: "Government", agency: "경희대학교", title: "다물체 파지가 가능한 인간형 로봇 그리퍼", program: "LINC 3.0 시제품 제작지원 사업 · 연구책임자" },
  { year: "2023", period: "2023–2025", category: "Government", agency: "한국연구재단", title: "Planet-ex: 행성의 지속적 자율탐사를 위한 자가성장형 이종 군집로봇 융합연구", program: "STEAM 미래유망융합기술파이오니어 · 공동연구책임자" },
  { year: "2023", period: "2023–2025", category: "Government", agency: "한국연구재단", title: "다양한 크기의 물체 운송을 위한 로봇/로봇, 사람/로봇 협업 기술 개발", program: "연구책임자" },
  { year: "2023", period: "2023", category: "Government", agency: "한국철도기술연구원", title: "철도 연계를 위한 모바일 로봇의 핵심기술 도출", program: "연구용역" },
  { year: "2023", period: "2023", category: "Government", agency: "한국기계연구원", title: "LNG화물창 토폴로지기반 작업순서 생성 SW", program: "연구용역" },
  { year: "2023", period: "2023", category: "Government", agency: "한국기계연구원", title: "HRI기술 기반 안전충돌소프트웨어 개발", program: "연구용역" },
  { year: "2023", period: "2023", category: "Government", agency: "한국기계연구원", title: "유연케이블 시스템의 ROS 연동을 위한 마스터 제어기 구축", program: "연구용역" },
  { year: "2022", period: "2022–2023", category: "Government", agency: "중소기업기술정보진흥원", title: "1억개의 음료 레시피 제조가 가능한 무인 로봇 카페 솔루션 개발", program: "산학연플랫폼사업 · 연구책임자" },
  { year: "2022", period: "2022–2023", category: "Government", agency: "산업통상자원부", title: "다품종 EV 폐배터리팩의 재활용을 위한 인간-로봇 협업 해체 작업 기술 개발", program: "로봇핵심기술개발사업 · 연구책임자" },

  // Industry collaboration and commissioned projects
  { year: "2026", period: "2026", category: "Industry", agency: "모빈", title: "이동형 양팔 로봇의 제어시스템 개발", program: "산학협력", ongoing: true },
  { year: "2026", period: "2026", category: "Industry", agency: "PIE 로보틱스", title: "자율 공정을 위한 모션 플래닝 기술 개발", program: "산학협력", ongoing: true },
  { year: "2026", period: "2026", category: "Industry", agency: "로보에 테크놀로지", title: "화물하역작업을 위한 모션플래닝 알고리즘의 개발", program: "산학협력", ongoing: true },
  { year: "2026", period: "2026", category: "Industry", agency: "카이로스랩", title: "화학 실험 자동화를 위한 VLM 기반 제어 기술 개발", program: "산학협력", ongoing: true },
  { year: "2026", period: "2026", category: "Industry", agency: "이앤오즈", title: "휴머노이드 교육 자문 용역", program: "산학협력" },
  { year: "2026", period: "2026", category: "Industry", agency: "메타모션엑스", title: "자율주행 경로생성 소프트웨어 개발", program: "산학협력", ongoing: true },
  { year: "2026", period: "2026", category: "Industry", agency: "포니링크", title: "4족보행로봇의 자율주행 요소 기술 개발 (2차)", program: "산학협력" },
  { year: "2025", period: "2025–2026", category: "Industry", agency: "티로보틱스", title: "Dual Steering AGV 자율 제어 SW 개발", program: "연구용역" },
  { year: "2025", period: "2025", category: "Industry", agency: "포니링크", title: "4족보행로봇의 자율주행 요소 기술 개발 (1차)", program: "산학협력" },
  { year: "2025", period: "2025–2026", category: "Industry", agency: "티로보틱스", title: "모바일 기반 휴머노이드의 제어 기능 개발", program: "산학협력" },
  { year: "2025", period: "2025", category: "Industry", agency: "카이로스랩", title: "LLM 기반 자율 실험을 위한 작업 생성기 개발", program: "산학협력" },
  { year: "2025", period: "2025", category: "Industry", agency: "펑션베이", title: "자율주행 경로생성 소프트웨어 개발", program: "산학협력" },
  { year: "2024", period: "2024–2027", category: "Industry", agency: "한국수력원자력", title: "원전 로봇의 내방사선 및 내열 기능 설계 및 비상 상황 대응 기술 개발", program: "포스텍–한국수력원자력 로봇연구센터 원전로봇 기술개발 세부과제", ongoing: true },
  { year: "2024", period: "2024", category: "Industry", agency: "HL만도", title: "실외용 이동로봇의 Local Path Planning 기능개발", program: "산학협력" },
  { year: "2024", period: "2024", category: "Industry", agency: "HL만도", title: "실외용 순찰로봇의 Traversability Estimation 기능개발", program: "산학협력" },
  { year: "2024", period: "2024", category: "Industry", agency: "한화에어로스페이스", title: "과제명 미공개", program: "산학협력" },

  // Technology transfer
  { year: "2026", period: "2026", category: "Technology Transfer", agency: "피트인", title: "라이다 기반 모바일 로봇의 도킹 시스템 및 방법" },
  { year: "2025", period: "2025", category: "Technology Transfer", agency: "메타모션엑스", title: "야지 주행을 위한 MPPI, RPP 자율주행 알고리즘 SW 개발" },
  { year: "2025", period: "2025", category: "Technology Transfer", agency: "메타모션엑스", title: "RGB–LiDAR를 활용한 세그멘테이션 알고리즘 SW" },
  { year: "2024", period: "2024", category: "Technology Transfer", agency: "피트인", title: "ROS2 기반 Traversability Estimation 및 자율주행기술" },
  { year: "2023", period: "2023–2024", category: "Technology Transfer", agency: "로브로스", title: "심층 강화학습 기반의 인간형 로봇 그리퍼의 물체 조작 기술" },
  { year: "2023", period: "2023", category: "Technology Transfer", agency: "원익로보틱스", title: "ROS1 기반 자동 정밀 주차 알고리즘의 개발" },
  { year: "2023", period: "2023–2024", category: "Technology Transfer", agency: "로탈", title: "ROS2 기반 자율 주행 로봇의 운용 기술" },
  { year: "2023", period: "2023", category: "Technology Transfer", agency: "원익로보틱스", title: "ROS1 기반 메카넘휠 모바일 로봇의 자율 주행 기술" },
  { year: "2022", period: "2022", category: "Technology Transfer", agency: "로아스", title: "모바일 매니퓰레이션 기반 제조 공정 솔루션 개발" },
];
