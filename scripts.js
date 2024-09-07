// Function to start the quiz
function startQuiz() {
    alert("Welcome to the Smart Assessment! Let's find out your strengths and interests.");
    // Here you can redirect to a quiz page or initialize a quiz modal
    window.location.href = "assessment.html"; // Replace 'quiz.html' with the actual quiz page URL
  }
  
  // Function to join the virtual conference
  function joinConference() {
    alert("Redirecting to the virtual conference...");
    // Redirect to the virtual conference URL or open a registration modal
    window.open("https://virtualconference.com", "_blank"); // Replace with your actual conference URL
  }
  
  // Add more JavaScript functions as needed for additional interactivity





  
  // Function to calculate the quiz score
function calculateScore(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    let score = 0;
    const totalQuestions = 3; // Total number of questions
    const userAnswers = {
      q1: document.querySelector('input[name="q1"]:checked'),
      q2: document.querySelector('input[name="q2"]:checked'),
      q3: document.querySelector('input[name="q3"]:checked'),
    };
  
    // Calculate score based on user answers
    for (let answer in userAnswers) {
      if (userAnswers[answer] && userAnswers[answer].value) {
        score++;
      }
    }
  
    // Display the result
    const result = document.getElementById("quiz-result");
    if (score === totalQuestions) {
      result.innerHTML = "<h3>Great Job! You got all answers right. 🎉</h3>";
    } else {
      result.innerHTML = `<h3>You scored ${score} out of ${totalQuestions}. Keep learning! 🧠</h3>`;
    }
  }
  




  // Function to handle conference registration
function registerForConference(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const session = document.getElementById('session').value;
  
    // Basic validation (you can expand this as needed)
    if (name && email && session) {
      // Display a success message
      document.getElementById('registration-result').innerHTML = `<h3>Thank you, ${name}! You have successfully registered for the ${session} session. We will send further details to ${email}.</h3>`;
      
      // Clear the form fields
      document.getElementById('conference-form').reset();
    } else {
      // Display an error message
      document.getElementById('registration-result').innerHTML = `<h3>Please fill out all fields to register.</h3>`;
    }
  }
  