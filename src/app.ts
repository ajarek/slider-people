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
    
}


renderSlider(people);
