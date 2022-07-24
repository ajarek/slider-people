import  Slider  from "./slider-class.js";
import { people } from "./data.js";

const root = document.querySelector("#root") as HTMLElement;
let index=0;
type Person = {
    img: string;
    name: string;
    job: string;
    text: string;
}

function renderSlider(people: Person[]) {
    const slider = new Slider(
     people[index].img,
     people[index].name,
     people[index].job,
     people[index].text
    );
    root.append(slider.render());
    eventListeners();
}

function changeSlider() {
    root.innerHTML = "";
    index++;
    if (index >= people.length) {
        index = 0;
    }
    renderSlider(people);
}

function eventListeners() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {   
        button.addEventListener("click", (e) => {
            setTimeout(() => {
                changeSlider();
            }, 300);
    });
})
}

renderSlider(people);
