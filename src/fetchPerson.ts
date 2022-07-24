export async function fetchPerson() {
   type Person = {
    img: string;
    name: string;
    job: string;
    text: string;
    }
    const arrJobs:string[] = ["product manager", "product manager", "developer", "designer","Computer systems manager","Network architect", "Systems analyst","IT coordinator", "Network administrator","Network engineer","Service desk analyst"]
    const arrayPeople = []
    const response = await fetch("https://randomuser.me/api/?results=50");
    const data = await response.json();
    for(let i = 0; i < data.results.length; i++) {
    const person:Person ={
        img:data.results[i].picture.large,
        name:data.results[i].name.first + " " + data.results[i].name.last,
        job:arrJobs[Math.floor(Math.random() * arrJobs.length)],
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?'
    }
     arrayPeople.push(person);
    
    
}
return arrayPeople
}
