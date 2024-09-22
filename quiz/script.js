const quizData = [
    {
        question: "What is the brain of a computer?",
        answers: {
            a: "Monitor",
            b: "Motherboard",
            c: "CPU",
            d: "RAM"
        },
        correctAnswer: "c"
    },
    {
        question: "Which of the following is an example of an input device?",
        answers: {
            a: "Printer",
            b: "Keyboard",
            c: "Monitor",
            d: "Speaker"
        },
        correctAnswer: "b"
    },
    {
        question: "What does RAM stand for?",
        answers: {
            a: "Random Access Memory",
            b: "Readily Available Memory",
            c: "Read Access Memory",
            d: "Run Access Memory"
        },
        correctAnswer: "a"
    },
    {
        question: "Which company developed the Windows operating system?",
        answers: {
            a: "Apple",
            b: "IBM",
            c: "Microsoft",
            d: "Google"
        },
        correctAnswer: "c"
    },
    {
        question: "What does the acronym 'USB' stand for?",
        answers: {
            a: "Universal Serial Bus",
            b: "Universal System Bus",
            c: "Universal Software Bus",
            d: "Universal Service Bus"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of the following is a type of non-volatile memory?",
        answers: {
            a: "RAM",
            b: "Cache",
            c: "ROM",
            d: "Registers"
        },
        correctAnswer: "c"
    },
    {
        question: "Which is the most common language used for web development?",
        answers: {
            a: "Python",
            b: "JavaScript",
            c: "C++",
            d: "Java"
        },
        correctAnswer: "b"
    },
    {
        question: "Which of the following is an example of an operating system?",
        answers: {
            a: "Microsoft Word",
            b: "Adobe Photoshop",
            c: "Windows 10",
            d: "Google Chrome"
        },
        correctAnswer: "c"
    },
    {
        question: "What is a GPU primarily used for?",
        answers: {
            a: "Running applications",
            b: "Rendering graphics",
            c: "Storing data",
            d: "Managing memory"
        },
        correctAnswer: "b"
    },
    {
        question: "Which key combination is used to copy selected text or files?",
        answers: {
            a: "Ctrl + P",
            b: "Ctrl + C",
            c: "Ctrl + X",
            d: "Ctrl + V"
        },
        correctAnswer: "b"
    }
  ];

let currentQuestionIndex = 0;
let score = 0;

function buildQuiz() {
  const quizContainer = document.getElementById('quiz');
  const currentQuestion = quizData[currentQuestionIndex];
  
  const answers = [];
  for (let letter in currentQuestion.answers) {
      answers.push(
          `<li class="answer" data-answer="${letter}">
              ${letter}: ${currentQuestion.answers[letter]}
           </li>`
      );
  }

  quizContainer.innerHTML = `
      <div class="question">${currentQuestion.question}</div>
      <ul class="answers">${answers.join('')}</ul>
  `;
}

function handleAnswerClick(event) {
  const selectedAnswer = event.target;
  const currentQuestion = quizData[currentQuestionIndex];
  const isCorrect = selectedAnswer.dataset.answer === currentQuestion.correctAnswer;
  
  if (isCorrect) {
      selectedAnswer.classList.add('correct');
      score++;
  } else {
      selectedAnswer.classList.add('incorrect');
      document.querySelector(`[data-answer="${currentQuestion.correctAnswer}"]`).classList.add('correct');
  }

  setTimeout(() => {
      currentQuestionIndex++;
      if (currentQuestionIndex < quizData.length) {
          buildQuiz();
      } else {
          showResults();
      }
  }, 1000);
}

function showResults() {
  const quizContainer = document.getElementById('quiz');
  quizContainer.innerHTML = `You got ${score} out of ${quizData.length} correct!`;
}

document.addEventListener('DOMContentLoaded', () => {
  buildQuiz();

  document.getElementById('quiz').addEventListener('click', function(event) {
      if (event.target.classList.contains('answer')) {
          handleAnswerClick(event);
      }
  });
});