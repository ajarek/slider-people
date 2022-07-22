export class Slider {
    constructor(img, name, job, text) {
        this.img = img;
        this.name = name;
        this.job = job;
        this.text = text;
        this.img = img;
        this.name = name;
        this.job = job;
        this.text = text;
    }
    render() {
        const container = document.createElement('div');
        container.classList.add('container');
        const btnLeft = document.createElement('button');
        btnLeft.classList.add('btn-left');
        btnLeft.innerHTML = `<span class="material-symbols-outlined">arrow_back_ios</span>`;
        const btnRight = document.createElement('button');
        btnRight.innerHTML = `<span class="material-symbols-outlined">arrow_forward_ios</span>`;
        btnRight.classList.add('btn-right');
        const title = document.createElement('h2');
        title.innerHTML = `<span>/</span> Reviews`;
        const img = document.createElement('img');
        img.src = this.img;
        const name = document.createElement('h3');
        name.classList.add('name');
        name.innerHTML = this.name;
        const job = document.createElement('h4');
        job.classList.add('job');
        job.innerHTML = this.job;
        const text = document.createElement('p');
        text.classList.add('text');
        text.innerHTML = this.text;
        const quote = document.createElement('div');
        quote.classList.add('quote');
        quote.innerHTML = `<span>&#835;</span><span>&#835;</span>`;
        container.append(btnLeft, title, img, name, job, text, btnRight, quote);
        return container;
    }
}
export default Slider;
