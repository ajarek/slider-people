import { fetchPerson } from "./fetchPerson.js";
export const people = [
    {
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959121/person-1_aufeoq.jpg",
        name: "peter doe",
        job: "product manager",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis? `,
    },
    {
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959131/person-2_ipcjws.jpg",
        name: "susan doe",
        job: "developer",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
    },
    {
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959131/person-3_rxtqvi.jpg",
        name: "emma doe",
        job: "designer",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
    },
    {
        img: "https://randomuser.me/api/portraits/women/76.jpg",
        name: "jennie nichols",
        job: "designer",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
    },
    {
        img: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "john rusell",
        job: "designer",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
    },
];
fetchPerson()
    .then(data => {
    people.push(...data);
})
    .catch(err => {
    console.log(err);
});
