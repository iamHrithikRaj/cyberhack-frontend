const data = [
  {
    id: '6239c7ed3e27a3af50eed73d',
    title: 'Frontend Wizard',
    question: 'Who created Javascript?',
    hint: 'The person who created brave browser',
    points: '100',
  },
  {
    id: '6239cd173e27a3af50eed754',
    title: 'Are you a potter head?',
    question: 'Severus Snape belongs to which house?',
    hint: 'Nagini',
    points: '100',
  },
  {
    id: '6239ccb13e27a3af50eed752',
    title: 'Big Bang',
    question: '___________________________ is referred to as the Unix epoch',
    hint: 'The start of time',
    points: '100',
  },
];

const startTime = new Date('March 22 2022 22:46').getTime();
const questionTime = 5;
const numberOfQuestions = 3;

export default data;
export { startTime, questionTime, numberOfQuestions };
