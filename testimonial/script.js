const testimonials = [
{
  name: "Abass Rashid",
  photoRel: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
  text: "apple makes me more productive and gets the job done in a fraction of the time. I'm glad I found apple"
},
{
  name: "Abdullahi salah",
  photoRel: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  text: "apple makes me more productive and gets the job done in a fraction of the time. I'm glad I found apple"
},
{
  name: "Jafar Ibrahim",
  photoRel: "https://plus.unsplash.com/premium_photo-1664362416440-732dd4488536?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  text: "I would recommend apple for anyone trying to get the word out about their business. It has saved me so much time!"
},
{
  name: "sammy koech",
  photoRel: "https://media.istockphoto.com/id/1443876461/photo/software-designer-speaking-to-his-client-on-the-phone-in-an-office.jpg?s=1024x1024&w=is&k=20&c=521SMO2d5jgEu2jUrIqDbsQPiZfUdSqUPorXheth-yg=",
  text: "apple has helped my team and I stay on the same page. Previously, we were all over the board. Using apple has definitely saved us time and money."
},
{
  name: "Rop Benerad",
  photoRel: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  text: "apple has made a huge difference!."
},
{
  name: "Vam Bosire",
  photoRel: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  text: "We don’t need to spend as much time in meetings now that we use apple."
},
];

const imageEl = document.querySelector("img");
const textEl = document.querySelector(".text")
const userEl = document.querySelector(".user-name")
let index = 0;

updateTestimonial()

function updateTestimonial() {
  const {name,photoRel,text} = testimonials[index];
  imageEl.src = photoRel;
  textEl.textContent = text;
  userEl.textContent = name;
  index +=1;
   if ( index === testimonials.length){
    index = 0;
   }
  setTimeout(() => {
    updateTestimonial()
  }, 10000)

}
