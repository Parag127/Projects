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

  const data = JSON.parse(localStorage.getItem("data")) || [];

  startBtn.addEventListener("click", () => {
    storeQuesAns();
    renderAll();
    displayQuesAns();
  });

  submitBtn.addEventListener('click', () => {
    displayScore();
    
  })

  restartBtn.addEventListener("click", () => {
    updateScore();
  })

  selectOption.addEventListener('click', (e) => {

    let clicked = e.target
      if (clicked.tagName === "P"){
        clicked.classList.toggle('selected');
        let clickedContent = clicked.textContent
        if (clickedContent === QuesAns[i].answer){
          nextBtn.addEventListener("click", () => {
            clicked.classList.remove("selected");
          })
          
          scoreDisplay.textContent = Number(scoreDisplay.textContent) + 1;
        }
        console.log(clickedContent)
        console.log(scoreDisplay)
      }

      // if (clickedContent === data[0].)
    })


  function storeQuesAns() {

    // console.log(QuesAns[0].questions)

    question.innerHTML = `${QuesAns[i].questions}`;
    option1.innerHTML = `${QuesAns[i].options[0]}`;
    option2.innerHTML = `${QuesAns[i].options[1]}`;
    option3.innerHTML = `${QuesAns[i].options[2]}`;
    option4.innerHTML = `${QuesAns[i].options[3]}`;
  }

  function displayQuesAns() {

    nextBtn.addEventListener("click", () => {
      i++;

      if (i >= QuesAns.length) {
      submitBtn.classList.remove("hidden")
      nextBtn.classList.add('hidden');
      return;
      }

    question.innerHTML = `${QuesAns[i].questions}`;
    option1.innerHTML = `${QuesAns[i].options[0]}`;
    option2.innerHTML = `${QuesAns[i].options[1]}`;
    option3.innerHTML = `${QuesAns[i].options[2]}`;
    option4.innerHTML = `${QuesAns[i].options[3]}`;

    });
  }

  function displayScore () {
    divDisplayScore.classList.remove('hidden');
    hiddenContent.classList.add('hidden');
    }

    function updateScore () {
      location.reload();
    }

  function renderAll() {
    startBtn.classList.add("hidden");
    heading.classList.add("hidden");
    hiddenContent.classList.remove("hidden");
    submitBtn.classList.add('hidden');

  }

  function storeLocally(data) {
    localStorage.setItem("data", JSON.stringify(data))
  }
});
