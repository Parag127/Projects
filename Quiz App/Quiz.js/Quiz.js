document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const scoreDisplay = document.getElementById("score");
  const restartBtn = document.getElementById("Restart-btn");
  const hiddenContent = document.getElementById("hidden-container");
  const question = document.getElementById("question");
  const optionS = document.getElementById("option");
  const heading = document.querySelector("h1");

  const QuesAns = [
    {
    questions: "Which is the largest mammal on Earth?",
    options: ["Megalodon", "Elephant", "Blue Whale", "Giraffe"],
    answer: "Blue Whale"
  },
  {
    questions: "In which sport is the term 'love' used?",
    options: ["Baseball", "Soccer", "Tennis", "Badminton"],
    answer: "Tennis"
  },
  {
    questions: "Which country is known as the Land of the Rising Sun?",
    options: ["Amsterdam", "China", "Japan", "New Zealand"],
    answer: "Japan"
  },
  {
    questions: "What is the freezing point of water?",
    options: ["-5°C or 32°F", "0°C or 32°F", "0°C or 36°F", "-5°C or 36°F"],
    answer: "0°C or 32°F"
  }
];

  const data = [];

  startBtn.addEventListener("click", () => {
    renderOptions();
    displayQuesAns();
  });

  function displayQuesAns() {
    QuesAns.forEach(ques => {
      ques.questions;
      ques.options;
      ques.answer;
    })

    

    data.push(QuesAns)
  }

  function renderOptions() {
    startBtn.classList.add("hidden");
    heading.classList.add("hidden");
    hiddenContent.classList.remove("hidden");
  }
  console.log(data)
});
