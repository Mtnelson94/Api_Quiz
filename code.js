// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// YOUR CODE HERE!
// Fetching the clues from the website
let randomCategory = Math.floor(Math.random() * 40950)
let answerData = []
let scoreSheet = 0
let inputData = ""
let next_question = 0
let message = document.getElementById("message")
function fetcher() {  
          const url1 = `https://jservice.kenzie.academy/api/clues?category=${randomCategory}`
            fetch(url1) 
                .then((response) => response.json())
                    .then((data) => {
                         console.log(data);
                            answerData = data.clues;
                                // scoreSheet = data.clues.value;
                                    inputData = data.clues.answer
                                    addElement()
          })
}
fetcher()

function addElement() {
    const currentDiv = document.getElementById("question");
        const currenth2 = document.getElementById("category")
            const currentH4 = document.getElementById("scoreSheet")
               const currenth5 = document.getElementById("message") 
    currentDiv.innerHTML = `Question: ${answerData[next_question].question}`
        currenth2.innerHTML = `Category: ${answerData[next_question].category.title}`
            currentform.innerHtML = `Answer1: ${answerData[next_question].answer}`
                currentH4.innerHTML = `Score Sheet: ${scoreSheet}`
                   currenth5.innerHtML = `Message: ${message}`
                   if (currentform.value.toLowerCase() === answerData[next_question].answer.toLowerCase()) {
                       message.innerHTML = "You are correct"
                   } else {
                       message.innerHTML = "You lose"
                   }
    }
    const currentform = document.getElementById("Answer1")  
    let formElement = document.getElementById("answer")
        // InputEvent = formElement
            formElement.addEventListener('submit', event => {
                event.preventDefault()
                console.log(currentform.value)
                    if (currentform.value.toLowerCase() === answerData[next_question].answer.toLowerCase()) {
                        console.log('Correct')
                            scoreSheet += 1
                                console.log(scoreSheet)
                               
                                  
                                    addElement()
                    } else { 
                        console.log('Incorrect')
                                 scoreSheet = 0 
                                   
                                    
                                    addElement()                                        
            }
            
        })
    
    let formElement1 = document.getElementById("nextquestion")
        formElement1.addEventListener('click', event => {
            next_question += 1
        
                console.log(next_question)
                    addElement()
        })
    let retry1 = document.getElementById("retry")
        retry1.addEventListener('click', event => {
            location.reload()
                    addElement()
})
    
   

    




