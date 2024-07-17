import data from '../../data.json' with { type: 'json' };

const questionList = document.getElementById("list");

/*
* Helper Functions
* */
const appendElement = (item, number) => {
    const element = document.createElement("li");
    element.classList.add("list_element");
    if (number < data.length - 1) {
        element.classList.add("number");
    }

    element.innerHTML = `
    <div class="question">
          <h2>${item.question}</h2>
          <button id="button_${number}" class="toggle_button expand_button">
          </button>
        </div>
        <div id="answer_${number}" class="answer hide">
          <p>${item.answer}</p>
        </div>
    `
    questionList.appendChild(element);

}

const handleToggle = (e) => {
    e.preventDefault();

    const button = e.target;
    const number = button.id.replace("button_", "");
    const answer = document.getElementById("answer_" + number);

    button.classList.toggle("expand_button");
    button.classList.toggle("collapse_button");
    answer.classList.toggle("hide");
}

/*
* Initialize
* */
data.forEach((item, number) => {appendElement(item, number)});


/*
* Event Listeners
* */
const buttonList = document.querySelectorAll(".toggle_button");

buttonList.forEach((item) => {
    item.addEventListener('click', handleToggle);
});