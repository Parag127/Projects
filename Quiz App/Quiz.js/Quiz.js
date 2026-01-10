document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const submitBtn = document.getElementById("submit"); 
  const scoreDisplay = document.getElementById("score");
  const divDisplayScore = document.getElementById("display-score")
  const restartBtn = document.getElementById("Restart-btn");
  const hiddenContent = document.getElementById("hidden-container");
  const question = document.getElementById("question");
  const option1 = document.getElementById("option-1");
  const option2 = document.getElementById("option-2");
  const option3 = document.getElementById("option-3");
  const option4 = document.getElementById("option-4");
  const heading = document.querySelector("h1");
  const selectOption = document.getElementById("options")
  
  let i = 0;
  const QuesAns = [
    {
      questions: "Which is the largest mammal on Earth?",
      options: ["Megalodon", "Elephant", "Blue Whale", "Giraffe"],
      answer: "Blue Whale",
    },
    {
      questions: "In which sport is the term 'love' used?",
      options: ["Baseball", "Soccer", "Tennis", "Badminton"],
      answer: "Tennis",
    },
    {
      questions: "Which country is known as the Land of the Rising Sun?",
      options: ["Amsterdam", "China", "Japan", "New Zealand"],
      answer: "Japan",
    },
    {
      questions: "What is the freezing point of water?",
      options: ["-5°C or 32°F", "0°C or 32°F", "0°C or 36°F", "-5°C or 36°F"],
      answer: "0°C or 32°F",
    },
  ];
  console.log(QuesAns.length);

  const data = [];

  startBtn.addEventListener("click", () => {
    renderAll();
    storeQuesAns();
    displayQuesAns();
  });

  submitBtn.addEventListener('click', () => {
    displayScore();
    updateScore();
  })

  selectOption.addEventListener('click', (e) => {
    let clicked = e.target
      if (clicked.tagName === "P"){
        checkAns(clicked);
      }

      // if (clickedContent === data[0].)
    })

  function checkAns (clicked) {
    if (clicked.textContent === QuesAns[i].answer){
      console.log(parseInt(scoreDisplay.innerHTML += 1));
      i++;
    }
  }
  
  function storeQuesAns() {
    QuesAns.forEach((ques) => {
      ques.questions;
      ques.options;
      ques.answer;
      data.push(ques);
    });
    // console.log(QuesAns[0].questions)

    question.innerHTML = `${QuesAns[i].questions}`;
    option1.innerHTML = `${QuesAns[i].options[0]}`;
    option2.innerHTML = `${QuesAns[i].options[1]}`;
    option3.innerHTML = `${QuesAns[i].options[2]}`;
    option4.innerHTML = `${QuesAns[i].options[3]}`;
  }

  function displayQuesAns() {

    nextBtn.addEventListener("click", () => {
      question.innerHTML = `${data[i].questions}`;
      option1.innerHTML = `${data[i].options[0]}`;
      option2.innerHTML = `${data[i].options[1]}`;
      option3.innerHTML = `${data[i].options[2]}`;
      option4.innerHTML = `${data[i].options[3]}`;
      i++;

      if (i >= 4) {
      submitBtn.classList.remove("hidden")
      nextBtn.classList.add('hidden')
    }
    });
  }

  function displayScore () {
    divDisplayScore.classList.remove('hidden');
    hiddenContent.classList.add('hidden');
    }

    function updateScore () {

    }

  function renderAll() {
    startBtn.classList.add("hidden");
    heading.classList.add("hidden");
    hiddenContent.classList.remove("hidden");
    submitBtn.classList.add('hidden');

  }
});
