const getQuestions = async () => {
  try {
      const response = await fetch('https://the-trivia-api.com/v2/questions', {
          headers: {
              'Content-Type': 'application/json'
          }
      });

      if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
      }

      const questions = await response.json();

      const container = document.getElementById('questions-container');

      questions.forEach(question => {
          const questionDiv = document.createElement('div');
          questionDiv.className = 'question';

          const title = document.createElement('h2');
          title.textContent = `Category: ${question.category}`;
          questionDiv.appendChild(title);

          const questionText = document.createElement('p');
          questionText.textContent = `Question: ${question.question.text}`;
          questionDiv.appendChild(questionText);

          const correctAnswer = document.createElement('p');
          correctAnswer.textContent = `Correct Answer: ${question.correctAnswer}`;
          questionDiv.appendChild(correctAnswer);

          container.appendChild(questionDiv);
      });
  } catch (error) {
      console.error('Error fetching questions:', error);
  }
};


getQuestions();

