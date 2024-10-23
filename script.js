// fake authentication system
let started = false; 

// function to start quiz when the button is pressed
function quiz_time() {
    started = true;
    document.getElementById('auth_box').style.display = 'none'; // Hide start
    document.getElementById('quiz').style.display = 'block'; // Show quiz
    progress_bar(0, 4); // sets the bar
}

document.getElementById('submit_button').onclick = function() {
    // fake error
    if (started == false) {
        alert('Press the Start button to begin the quiz.');
        return; 
    }

    let score = 0;
    let total_questions = 4;

    // Fetches selected answers
    let q1 = document.querySelector('input[name="q1"]:checked'); 
    let q2 = document.querySelector('input[name="q2"]:checked'); 
    let q3 = document.querySelector('input[name="q3"]:checked'); 
    let q4 = document.querySelector('input[name="q4"]:checked'); 

    // if the answer is right add one to score
    if (q1 && q1.value == "Natsu") {
        score++; 
    }

    if (q2 && q2.value == "Konoha") {
        score++; 
    }

    if (q3 && q3.value == "Eren") {
        score++; 
    }

    if (q4 && q4.value == "Turn his sister back into a human") {
        score++; 
    }

    // displays total score
    let result_di = document.getElementById('result'); 
    result_di.innerHTML = 'You scored ' + score + ' out of ' + total_questions; 

    // Update the bar
    progress_bar(score, total_questions);
}

function progress_bar(current, total) {
    let progress = (current / total) * 100; // Calculate percentage of result
    document.getElementById('bar').style.width = progress + '%'; // set the width of bar based on result
    // shows how many questions are answered
    document.getElementById('question_count').innerHTML = 'Completed ' + current + ' out of ' + total + ' questions';
}
