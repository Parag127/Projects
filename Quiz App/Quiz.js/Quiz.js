document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const scoreDisplay = document.getElementById("score");
  const restartBtn = document.getElementById("Restart-btn");
  const hiddenContent = document.getElementById("hidden-container");
  const question = document.getElementById("question");

  let Questions = [
    {
      Question1: "Which is the largest mammal on Earth?",
      options1: {
        option1: "Megalodon",
        option2: "Elephant",
        option3: "Blue Whale",
        option4: "Giraffe",
      },
    },
    {
      Question2: "In which sport is the term 'love' used?",
      options2: {
        option1: "Baseball",
        option2: "Soccer",
        option3: "Tennis",
        option4: "Badminton",
      },
    },
    {
      Question3: "Which country is known as the ‘Land of the Rising Sun’?",
      options3: {
        option1: "Amsterdam",
        option2: "China",
        option3: "Japan",
        option4: "New Zealand",
      },
    },
    {
      Question4: "What is the freezing point of water?",
      options4: {
        option1: "-5°C or 32°F",
        option2: "0°C or 32°F",
        option3: "0°C or 36°F",
        option4: "-5°C or 36°F",
      },
    },
  ];
  const answers = [
    {
    Answer1 : Questions.options1.option3,
    Answer2 : Questions.options2.option3,
    Answer3 : Questions.options3.option3,
    Answer4 : Questions.options4.option2,
    }
  ]

  startBtn.addEventListener('click', () => {
    renderOptions();
  })

  function renderOptions () {
    hiddenContent.classList.remove('hidden')  
  }
});
