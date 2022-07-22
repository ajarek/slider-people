import Slider from "./slider-class.js";
import { people } from "./data.js";
const root = document.querySelector("#root");
let index = 0;
function renderSlider(people) {
    const slider = new Slider(people[index].img, people[index].name, people[index].job, people[index].text);
    root.append(slider.render());
}
renderSlider(people);
