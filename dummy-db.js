const EventsList = [
  {
    title: "Event One",
    address: "event one adress",
    date: "12/12/1222",
    id: 1,
  },

  {
    title: "Event two",
    address: "event tow adress",
    date: "12/12/1222",
    id: 2,
  },
];

export const getFeaturedEvents = () => {
  return EventsList;
};

export const getEventDetailsByid = (id) => {
  return EventsList.find((e) => e.id == id);
};

const QuestionPaper = [
 
  
  {
    questionId:1,
    question:
      "Government which year human rights act as commissioners in census? ",
    hint: "No hint",
    options: [
      { optionsId: 1, title: "1998" },
      { optionsId: 2, title: "4582" },
      { optionsId: 3, title: "7548" },
      { optionsId: 4, title: "9658" },
    ],
    mark: 1,
    isNegative: false,
  },
  {
    questionId:2,
    question:
      "Government which year human rights act as commissioners in census? ",
    hint: "No hint",
    options: [
      { optionsId: 1, title: "1998" },
      { optionsId: 2, title: "4582" },
      { optionsId: 3, title: "7548" },
      { optionsId: 4, title: "9658" },
    ],
    mark: 1,
    isNegative: false,
  },
];
export const getQuestionPaper = () => {
  return QuestionPaper;
};
