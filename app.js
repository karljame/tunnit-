const shortcuts = {
    "data": [
        {
            "question": "kommenteeri",
            "answer": [75, 67],
            "hasCtrl": true,
            "answerText": "ctrl + k + c"
        },
        {
            "question": "kopeeri",
            "answer": [67],
            "hasCtrl": true,
            "answerText": "ctrl + c"
        },
        {
            "question": "dubleeri",
            "answer": [40],
            "hasAlt": true,
            "hasShift": true,
            "answerText": "ctrl + alla nool"
        },
        {
            "question": "kleebi",
            "answer": [86],
            "hasCtrl": true,
            "answerText": "ctrl + V"
        }

    ],
    "meta": {
        "question": "Mis klahvikombinatsiooni on vaja vajutada, et *",
        "answers": 5,
        "title": "Kiirklahvid",
        "type": "shortcuts"
    }

}

const inputField = document.querySelector("#input-field")
const questionDiv = document.querySelector("#question")
const titleDiv = document.querySelector("#title")
const correctAnswerDiv = document.querySelector("#correct-answer")
const correctCountDiv = document.querySelector("#correct-count")
const incorrectCountDiv = document.querySelector("#incorrect-count")

let correctCount = 0
let incorrectCount = 0
let keyDownHistory = []
let keyDownHistoryText = []
let randomIndex  

titleDiv.innerText = shortcuts.meta.question
correctCountDiv.innerText = correctCount
incorrectCountDiv.innerText = incorrectCount

showQuestion()

inputField.addEventListener("keydown", event => {
    console.log(event)
    event.preventDefault()
    if ( event.keyCode == 13){

        if ( shortcuts.data[randomIndex].answer.toString() == keyDownHistory.toString() ) {
            console.log('success')
            correctCount++
            correctCountDiv.innerText = correctCount
        } else {
            incorrectCount++
            incorrectCountDiv.innerText = incorrectCount
        }
        correctAnswerDiv.innerText = "õige vastus: " + shortcuts.data[randomIndex].answerText
        showQuestion()
        
        keyDownHistory = []
        keyDownHistoryText = []
    } else {
        keyDownHistoryText.push(event.key)
        if ( event.keyCode != 17 && event.ctrlKey == shortcuts.data[randomIndex].hasCtrl ) {
            keyDownHistory.push(event.keyCode)
        }
    }
    inputField.value = keyDownHistoryText.join('+')

    console.log(keyDownHistory)

    
})

function showQuestion() {
    randomIndex = Math.floor(Math.random() * shortcuts.data.length)
    questionDiv.innerText = shortcuts.data[randomIndex].question
    
}
