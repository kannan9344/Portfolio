
const menuToggle = document.querySelector("header nav .fa-bars");
const ul = document.querySelector("header nav ul");
const ulActive = document.querySelector("header nav ul active");
console.log(ulActive);
const closeBtn = document.querySelector("header nav ul .fa-close");
const Body = document.querySelector("body");

menuToggle.addEventListener("click", () => {
  ul.classList.toggle("active");
});
closeBtn.addEventListener("click", () => {
  ul.classList.toggle("active");
});

window.addEventListener("click",(e)=>{
if(e.target==ul){
  ul.classList.toggle("active");
}
})
const projectData = [
  {
    id: 1,
    img: "assets/images/travel-bg.png",
    des: "Discover your next adventure with our premier travel platform. From stunning destinations to personalized itineraries, unlock the world's wonders with ease. Start planning your dream getaway today",
    date: "01 febraury 2024",
    tools:"HTML,Css,Javascript",
    text:"Travel Landing page",
  },
  {
    id: 2,
    img: "assets/images/Hotel_img.png",
    des: "Welcome to Hotel,where luxury meets sophistication in the heart of Bengalore. Book now for an unforgettable stay",
    date: "15 febraury 2024",
    tools:"HTML,Css,Javascript,Image API",
    text:"Hotel Landing page",
  },
  {
    id: 3,
    img: "assets/images/e-commerce_bg.png",
    des: "Discover fresh produce, pantry staples, and gourmet delights on our user-friendly grocery website. Browse, shop, and schedule convenient deliveries from the comfort of your home. Experience hassle-free shopping with our wide selection and efficient service.",
    date: "24 febraury 2024",
    tools:"React,Css",
    text:"Grocery E-commerce page"
  },
  {
    id: 4,
    img: "assets/images/Image_bg.png",
    des: "Explore millions of high-quality images for your projects on our comprehensive stock photography website. Whether you need photos for websites, presentations, or marketing materials, find the perfect visuals with ease. Access a diverse collection of images, illustrations, and vectors to enhance your creative endeavors.",
    date: "10 march 2024",
    tools:"React,Css,Image API",
    text:"Image Stock website",
  },
  {
    id: 5,
    img: "assets/images/netflix_bg.png",
    des: "Immerse yourself in endless entertainment with our Netflix clone. Enjoy a vast library of movies, TV shows, and documentaries on demand. Personalize your viewing experience with tailored recommendations and seamless streaming.",
    date: "15 march 2024",
    tools:"React,Css,Movies API",
    text:"Netflix",
  },
  {
    id: 6,
    img: "assets/images/resume_builder.png",
    des: "Elevate your career prospects with our intuitive resume builder application. Craft professional resumes effortlessly with customizable templates and helpful tips. Stand out to employers with polished documents that highlight your skills and experience.",
    date: "17 febraury 2024",
    tools:"HTML,Css,Javascript",
    text:"Resume Builder",
  },
];
const btns = document.querySelectorAll(
  ".project-container .container .col .btn"
);
const modal = document.querySelector(".modal");
btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    modal.classList.toggle("active");
    setModalData(index);
  });
});

function setModalData(index) {
  let data = projectData[index];
  let modalContainer = modal.querySelector(".modal-dialog");
  let item = `
    <div class="modal-content w-full h-full flex flex-col gap-y-2 p-4">
    <i class="fa fa-close w-7 h-7 text-[14px] leading-[28px] absolute right-1 top-1 text-center rounded-full text-orange-500 cursor-pointer bg-white"></i>
            <div class="image w-full h-full">
              <img src="${data.img}" alt="Hotel Website" class="w-full h-full object-contain md:object-cover rounded-md">
            </div>
            <div class="modal-body md:absolute md:top-[-400px] md:left-[50%] md:translate-x-[-50%] md:w-[600px] bg-white p-4">
            <div class="font-bold text-orange-500 text-[15px]">${data.tools}</div>
              <h1 class="font-semibold my-2">${data?.text}</h1>
              <p class="text-[13px] capitalize">${data.des}</p>
              <div class="flex flex-col gap-y-2 mt-2">
                <div class="flex items-center gap-x-2">
                  <strong class="text-[14px] font-medium">Created : <span class="font-light text-sm ml-2">${data.date}</span></strong>
                </div>
                <div class="flex items-center gap-x-2">
                  <strong class="text-[14px] font-medium">Role : <span class="font-light text-sm ml-2">Front End Developer</span></strong>
                </div>
              </div>
            </div>
          </div>`;
  modalContainer.innerHTML = "";
  modalContainer.innerHTML = item;
  const modalclosebtn = modal.querySelector(".modal-content .fa-close");
modalclosebtn.addEventListener("click", () => {
  modal.classList.toggle("active");
});
}

