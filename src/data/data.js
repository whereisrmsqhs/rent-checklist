export const questions = [
  { id: 0, content: "test" },
  { id: 1, content: "생각하고 있는 월세 가격대는 얼만큼 되나요?" },
  { id: 2, content: "보증금은 얼만큼 예상하고 있나요?" },
  { id: 3, content: "회사는 집에서 어떻게 갈 예정인가요? (첫 출근 기준)" },
  { id: 4, content: "차량을 구매할 계획인가요?" },
  { id: 5, content: "새로 미국 면허 시험을 봐야하나요?" },
  { id: 6, content: "다른 사람과 방을 사용할 예정인가요?" },
  {
    id: 7,
    content: "혹시 가족이나 친구가 잠시 렌트방에 거주할 예정이 있나요?",
  },
  { id: 8, content: "같은 집에 다른 성별의 하숙인이 있는것이 괜찮은가요?" },
  { id: 9, content: "화장실 하나를 여러명과 쉐어할 수 있나요?" },
  { id: 10, content: "몇명까지 같이 쉐어 할 수 있나요? (본인 포함)" },
  { id: 11, content: "다른 성별과도 사용가능한가요?" },
  { id: 12, content: "화장실의 수압이 중요한가요?" },
  { id: 13, content: "요리를 자주 하시나요?" },
  { id: 14, content: "식수 수급처?" },
  { id: 15, content: "빨래를 자주 하시나요?" },
  { id: 16, content: "방 온도에 대해서 예민한 편인가요?" },
  {
    id: 17,
    content: "내가 만족할만한 인터넷 속도는?",
  },
  {
    id: 18,
    content: "방에서 고양이나 강아지와 같은 애견동물을 키울 계획이 있다.",
  },
  { id: 19, content: "동네 주변 걸어다닐 마트가 있어야 하나요?" },
  { id: 20, content: "동네 주변 가까운 한인마트가 있어야 하나요?" },
  { id: 21, content: "집 주인이 한국어를 하는게 중요하나요?" },
  { id: 22, content: "옆방에 사는 사람이 신경쓰일것 같다." },
  { id: 23, content: "나는 추후에 방을 옮길 수 있는 여지를 남기고 싶다." },
  { id: 24, content: "나는 보증금을 돌려받지 못할 것 같아 걱정이 된다." },
];

export const answers = [
  {
    id: 0,
    q_id: 0,
    answer: [{ id: 1, content: "test", return_question: -1 }],
  },
  {
    id: 1,
    q_id: 1,
    answer: [
      { id: 1, content: "$500 ~ $700", return_question: -1 },
      { id: 2, content: "$700 ~ $900", return_question: -1 },
      { id: 3, content: "$900 ~ $1200", return_question: -1 },
      { id: 4, content: "$1200 ~ ", return_question: -1 },
    ],
  },
  {
    id: 2,
    q_id: 2,
    answer: [
      { id: 1, content: "월세의 50%", return_question: -1 },
      { id: 2, content: "월세와 동일", return_question: -1 },
      { id: 3, content: "상관없음", return_question: -1 },
    ],
  },
  {
    id: 3,
    q_id: 3,
    answer: [
      { id: 1, content: "자차", return_question: 5 },
      { id: 2, content: "대중교통 사용", return_question: -1 },
      { id: 3, content: "자전거 또는 걸어서", return_question: -1 },
      { id: 4, content: "라이드", return_question: -1 },
    ],
  },
  {
    id: 4,
    q_id: 4,
    answer: [
      { id: 1, content: "네", return_question: -1 },
      { id: 2, content: "아니요", return_question: -1 },
    ],
  },
  {
    id: 5,
    q_id: 5,
    answer: [
      { id: 1, content: "네", return_question: -1 },
      { id: 2, content: "아니요", return_question: -1 },
    ],
  },
  {
    id: 6,
    q_id: 6,
    answer: [
      { id: 1, content: "네", return_question: -1 },
      { id: 2, content: "아니요", return_question: -1 },
    ],
  },
  {
    id: 7,
    q_id: 7,
    answer: [
      { id: 1, content: "네", return_question: -1 },
      { id: 2, content: "아니요", return_question: -1 },
    ],
  },
  {
    id: 8,
    q_id: 8,
    answer: [
      { id: 1, content: "상관 있음", return_question: -1 },
      { id: 2, content: "상관 없음", return_question: -1 },
    ],
  },
  {
    id: 9,
    q_id: 9,
    answer: [
      { id: 1, content: "네", return_question: -1 },
      { id: 2, content: "아니요", return_question: 12 },
    ],
  },
  {
    id: 10,
    q_id: 10,
    answer: [
      { id: 1, content: "2명 이하", return_question: -1 },
      { id: 2, content: "3명 이하", return_question: -1 },
      { id: 3, content: "4명 이하", return_question: -1 },
      { id: 4, content: "상관 없음", return_question: -1 },
    ],
  },
  {
    id: 11,
    q_id: 11,
    answer: [
      { id: 1, content: "네", return_question: -1 },
      { id: 2, content: "아니요", return_question: -1 },
    ],
  },
  {
    id: 12,
    q_id: 12,
    answer: [
      { id: 1, content: "네", return_question: -1 },
      { id: 2, content: "아니요", return_question: -1 },
    ],
  },
  {
    id: 13,
    q_id: 13,
    answer: [
      { id: 1, content: "자주합니다", return_question: -1 },
      {
        id: 2,
        content: "전자레인지 정도만 있으면 충분하다",
        return_question: -1,
      },
      { id: 3, content: "거의 안한다.", return_question: -1 },
    ],
  },
  {
    id: 14,
    q_id: 14,
    answer: [
      { id: 1, content: "정수기를 사용한다", return_question: -1 },
      { id: 2, content: "사마신다", return_question: -1 },
    ],
  },
  {
    id: 15,
    q_id: 15,
    answer: [
      { id: 1, content: "일주일에 1~2회정도 한다", return_question: -1 },
      { id: 2, content: "2주에 한번씩 한다", return_question: -1 },
    ],
  },
  {
    id: 16,
    q_id: 16,
    answer: [
      { id: 1, content: "남들보다 예민한 편이다", return_question: -1 },
      { id: 2, content: "별로 온도에 예민하지 않다.", return_question: -1 },
    ],
  },
  {
    id: 17,
    q_id: 17,
    answer: [
      {
        id: 1,
        content: "실시간 온라인 게임을 즐기는데 끊김이 없어야 한다.",
        return_question: -1,
      },
      {
        id: 2,
        content: "1080p 유튜브가 끊김이 없어야 한다",
        return_question: -1,
      },
      {
        id: 3,
        content: "화질은 상관없고 유튜브 시청중 끊김이 없어야 한다.",
        return_question: -1,
      },
      {
        id: 4,
        content: "인터넷이 되기만하면 속도는 상관없다.",
        return_question: -1,
      },
    ],
  },
  {
    id: 18,
    q_id: 18,
    answer: [
      { id: 1, content: "네", return_question: -1 },
      { id: 2, content: "아니요", return_question: -1 },
    ],
  },
  {
    id: 19,
    q_id: 19,
    answer: [
      { id: 1, content: "네", return_question: -1 },
      { id: 2, content: "아니요", return_question: -1 },
    ],
  },
  {
    id: 20,
    q_id: 20,
    answer: [
      { id: 1, content: "네", return_question: -1 },
      { id: 2, content: "아니요", return_question: -1 },
    ],
  },
  {
    id: 21,
    q_id: 21,
    answer: [
      { id: 1, content: "네", return_question: -1 },
      { id: 2, content: "아니요", return_question: -1 },
    ],
  },
  {
    id: 22,
    q_id: 22,
    answer: [
      { id: 1, content: "네", return_question: -1 },
      { id: 2, content: "아니요", return_question: -1 },
    ],
  },
  {
    id: 23,
    q_id: 23,
    answer: [
      { id: 1, content: "네", return_question: -1 },
      { id: 2, content: "아니요", return_question: -1 },
    ],
  },
  {
    id: 24,
    q_id: 24,
    answer: [
      { id: 1, content: "네", return_question: -1 },
      { id: 2, content: "아니요", return_question: -1 },
    ],
  },
];
