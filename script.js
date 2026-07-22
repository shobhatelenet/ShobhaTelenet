/*=====================================
   PRELOADER
=====================================*/

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if (preloader) {
        preloader.style.opacity = "0";

        setTimeout(() => {
            preloader.style.display = "none";
        }, 500);
    }

});


/*=====================================
   SCROLL PROGRESS BAR
=====================================*/

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percent = (scrollTop / scrollHeight) * 100;

    if (progressBar) {
        progressBar.style.width = percent + "%";
    }

});


/*=====================================
   MOBILE MENU
=====================================*/

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
    

document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });
});

}


/*=====================================
   DARK MODE
=====================================*/

const themeBtn = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    if (themeBtn) {
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

}

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");

            themeBtn.innerHTML =
                '<i class="fa-solid fa-sun"></i>';

        } else {

            localStorage.setItem("theme", "light");

            themeBtn.innerHTML =
                '<i class="fa-solid fa-moon"></i>';

        }

    });

}


/*=====================================
   ACTIVE NAVIGATION
=====================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#navMenu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=====================================
   SCRIPT PART 1 LOADED
=====================================*/

console.log("✅ Script Part 1 Loaded Successfully");
/*=====================================
   COUNTER ANIMATION
=====================================*/

const counters = document.querySelectorAll(".counter");

function startCounter(counter) {

    const target = Number(counter.dataset.target);
    const speed = target / 120;

    let count = 0;

    function updateCounter() {

        if (count < target) {

            count += speed;

            counter.innerText = Math.ceil(count);

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = target + "+";

        }

    }

    updateCounter();

}

const statsSection = document.querySelector(".stats");

if (statsSection) {

    const counterObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                counters.forEach(counter => {

                    startCounter(counter);

                });

                counterObserver.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.4
    });

    counterObserver.observe(statsSection);

}


/*=====================================
   SERVICE SEARCH
=====================================*/


const searchInput = document.getElementById("serviceSearch");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchValue = this.value.toLowerCase().trim();

        const cards = document.querySelectorAll(".service-container .card");

        cards.forEach(card => {

            const title = card.querySelector("h3").textContent.toLowerCase();
            const desc = card.querySelector("p").textContent.toLowerCase();

            if (title.includes(searchValue) || desc.includes(searchValue)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}


/*=====================================
   FAQ ACCORDION
=====================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if (faq !== item) {

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});


/*=====================================
   SCROLL REVEAL
=====================================*/

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if (top < windowHeight - 120) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);


/*=====================================
   SCRIPT PART 2 LOADED
=====================================*/

console.log("✅ Script Part 2 Loaded Successfully");
/*=====================================
   TESTIMONIAL AUTO SLIDER
=====================================*/

const reviews = document.querySelectorAll(".review");

let reviewIndex = 0;

if (reviews.length > 0) {

    reviews[0].classList.add("active");

    setInterval(() => {

        reviews[reviewIndex].classList.remove("active");

        reviewIndex++;

        if (reviewIndex >= reviews.length) {
            reviewIndex = 0;
        }

        reviews[reviewIndex].classList.add("active");

    }, 4000);

}


/*=====================================
   GALLERY LIGHTBOX
=====================================*/

const galleryImages = document.querySelectorAll(".gallery-item img");

if (galleryImages.length > 0) {

    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";

    lightbox.innerHTML = `
        <span>&times;</span>
        <img src="" alt="Gallery Image">
    `;

    document.body.appendChild(lightbox);

    const lightImg = lightbox.querySelector("img");
    const closeBtn = lightbox.querySelector("span");

    galleryImages.forEach(img => {

        img.addEventListener("click", () => {

            lightbox.style.display = "flex";
            lightImg.src = img.src;

        });

    });

    closeBtn.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }

    });

}


/*=====================================
   BACK TO TOP BUTTON
=====================================*/

const topButton = document.querySelector(".top");

if (topButton) {

    topButton.style.display = "none";

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topButton.style.display = "flex";

        } else {

            topButton.style.display = "none";

        }

    });

}


/*=====================================
   LIVE DIGITAL CLOCK
=====================================*/

const clock = document.createElement("div");

clock.id = "liveClock";

document.body.appendChild(clock);

function updateClock() {

    const now = new Date();

    clock.innerHTML = now.toLocaleTimeString("en-IN", {

        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"

    });

}

updateClock();

setInterval(updateClock, 1000);


/*=====================================
   SCRIPT PART 3 LOADED
=====================================*/

console.log("✅ Script Part 3 Loaded Successfully");
/*=====================================
   TYPING EFFECT
=====================================*/

const heroTitle = document.querySelector(".hero-content h2");

if (heroTitle) {

    const text = heroTitle.textContent;
    heroTitle.textContent = "";

    let index = 0;

    function typeWriter() {

        if (index < text.length) {

            heroTitle.textContent += text.charAt(index);

            index++;

            setTimeout(typeWriter, 70);

        }

    }

    window.addEventListener("load", typeWriter);

}


/*=====================================
   CURSOR GLOW
=====================================*/

const cursorGlow = document.createElement("div");

cursorGlow.id = "cursorGlow";

document.body.appendChild(cursorGlow);

document.addEventListener("mousemove", (e) => {

    cursorGlow.style.left = e.pageX + "px";
    cursorGlow.style.top = e.pageY + "px";

});


/*=====================================
   WELCOME MESSAGE
=====================================*/

window.addEventListener("load", () => {

    setTimeout(() => {

        console.log("🙏 Welcome to Shobha Telenet");

    }, 1000);

});


/*=====================================
   SMOOTH SCROLL FOR INTERNAL LINKS
=====================================*/

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/*=====================================
   DISABLE RIGHT CLICK (OPTIONAL)
=====================================*/

// Remove the comments below if you want to disable right-click.

/*
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
});
*/


/*=====================================
   DISABLE IMAGE DRAG (OPTIONAL)
=====================================*/

document.querySelectorAll("img").forEach(img => {

    img.setAttribute("draggable", "false");

});


/*=====================================
   CONSOLE BRANDING
=====================================*/

console.log(
    "%cShobha Telenet",
    "color:#FF9800;font-size:28px;font-weight:bold;"
);

console.log(
    "%cProfessional Cyber Cafe Website",
    "color:#0D6EFD;font-size:16px;"
);

console.log(
    "%cDeveloped Successfully ✔",
    "color:green;font-size:15px;font-weight:bold;"
);


/*=====================================
   PERFORMANCE OPTIMIZATION
=====================================*/

// Lazy load images

document.querySelectorAll("img").forEach(img => {

    if (!img.hasAttribute("loading")) {

        img.setAttribute("loading", "lazy");

    }

});


/*=====================================
   WEBSITE READY
=====================================*/

window.addEventListener("load", () => {

    console.log("🚀 All Scripts Loaded Successfully");

});
console.log("Search JS Loaded");
/* SERVICE POPUP */

/*================ SERVICE DETAILS ================*/

const serviceData = {

"Online Form Fill-up":{
icon:"fa-file-lines",
price:"₹50+",
desc:"Government & Private Online Form Fill-up Service.",
docs:["Aadhaar Card","Mobile Number","Passport Photo"]
},

"PAN Card":{
icon:"fa-id-card",
price:"₹110+",
desc:"New PAN Card & PAN Correction.",
docs:["Aadhaar Card","Mobile Number","Passport Photo"]
},

"Aadhaar Service":{
icon:"fa-address-card",
price:"As Per Work",
desc:"Aadhaar Update & Related Services.",
docs:["Aadhaar Card","Mobile Number"]
},

"Print & Xerox":{
icon:"fa-print",
price:"₹2",
desc:"Colour & Black Print, Xerox.",
docs:["PDF / Document"]
},

"Passport Photo":{
icon:"fa-camera",
price:"₹50",
desc:"Instant Passport Size Photo.",
docs:["No Documents Needed"]
},

"Ticket Booking":{
icon:"fa-train",
price:"Service Charge Extra",
desc:"Train, Bus & Flight Ticket Booking.",
docs:["Aadhaar Card","Mobile Number"]
},

"Recharge":{
icon:"fa-mobile-screen-button",
price:"Instant",
desc:"Mobile Recharge & Electricity Bill.",
docs:["Mobile Number"]
},

"PVC Card":{
icon:"fa-credit-card",
price:"₹150",
desc:"Premium PVC Aadhaar & PAN Card.",
docs:["Aadhaar / PAN Copy"]
},

"Resume":{
icon:"fa-file-word",
price:"₹100",
desc:"Professional Resume & Biodata.",
docs:["Educational Details","Photo"]
},

"Visiting Card":{
icon:"fa-address-book",
price:"₹200+",
desc:"Visiting Card Design & Print.",
docs:["Logo","Name","Phone Number"]
},

"CSC Services":{
icon:"fa-laptop",
price:"Depends",
desc:"All Government Online Services.",
docs:["Required Documents"]
},

"Document Work":{
icon:"fa-file-signature",
price:"₹20+",
desc:"Typing, Scan, Email, Lamination.",
docs:["Document Copy"]
}

};

const modal=document.getElementById("serviceModal");
const closeModal=document.querySelector(".close-service");

document.querySelectorAll(".service-container .card").forEach(card=>{

card.addEventListener("click",()=>{

const title=card.querySelector("h3").innerText;

const data=serviceData[title];

if(!data) return;

document.getElementById("serviceTitle").innerText=title;

document.getElementById("serviceDesc").innerText=data.desc;

document.getElementById("servicePrice").innerText=data.price;

document.getElementById("serviceIcon").className="fa-solid "+data.icon;

const docs=document.getElementById("serviceDocs");

docs.innerHTML="";

data.docs.forEach(doc=>{

docs.innerHTML+=`<li>${doc}</li>`;

});

modal.classList.add("show");

});

});

closeModal.onclick=()=>{

modal.classList.remove("show");

};

window.addEventListener("click", (e) => {

    if (e.target === modal) {
        modal.classList.remove("show");
    }

});
document.getElementById("orderForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let service = document.getElementById("service").value;
    let message = document.getElementById("message").value;

    let text =
`*NEW ONLINE ORDER*

👤 Name : ${name}
📱 Mobile : ${mobile}
🛒 Service : ${service}

📝 Details :
${message}`;

    window.open(
        "https://wa.me/917384312121?text=" + encodeURIComponent(text),
        "_blank"
    );

});
menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});
function copyUPI() {
    const upi = document.getElementById("upiText").innerText;
    navigator.clipboard.writeText(upi);
    alert("UPI ID Copied Successfully");
}
/*================ SMART SEARCH =================*/

const services = [

{
title:"New PAN Card",
keywords:["pan","new pan","প্যান","pan card"],
documents:[
"Aadhaar Card",
"Mobile Number",
"Email ID",
"Passport Photo"
],
time:"3-7 Days",
charge:"Contact Office"
},

{
title:"PAN Correction",
keywords:["pan correction","correction","প্যান সংশোধন"],
documents:[
"PAN Card",
"Aadhaar Card"
],
time:"2-5 Days",
charge:"Contact Office"
},

{
title:"Aadhaar Update",
keywords:["aadhaar","adhar","আধার","aadhaar update"],
documents:[
"Aadhaar Card",
"Mobile Number"
],
time:"Same Day",
charge:"Contact Office"
},

{
title:"PVC Card",
keywords:["pvc","pvc card","পিভিসি"],
documents:[
"Aadhaar / PAN / Voter"
],
time:"15 Minutes",
charge:"Contact Office"
},

{
title:"Voter Card",
keywords:["voter","epic","ভোটার"],
documents:[
"Aadhaar Card",
"Passport Photo"
],
time:"As Per Govt.",
charge:"Contact Office"
},

{
title:"Passport",
keywords:["passport","পাসপোর্ট"],
documents:[
"Aadhaar Card",
"PAN Card",
"Photo"
],
time:"Contact Office",
charge:"Contact Office"
},

{
title:"Train Ticket",
keywords:["train","rail","ticket","ট্রেন"],
documents:[
"Aadhaar Card"
],
time:"Instant",
charge:"IRCTC Charge"
},

{
title:"Print Out",
keywords:["print","print out","প্রিন্ট"],
documents:[
"PDF / Image"
],
time:"Instant",
charge:"Per Page"
},

{
title:"Xerox",
keywords:["xerox","copy","জেরক্স"],
documents:[
"Original Document"
],
time:"Instant",
charge:"Per Page"
},

{
    title:"Birth Certificate",
    keywords:["birth","birth certificate","জন্ম সনদ"],
    documents:[
        "Aadhaar Card",
        "Hospital Record (if available)",
        "Mobile Number"
    ],
    charge:"Contact Office",
    time:"3-7 Days"
},

{
    title:"Income Certificate",
    keywords:["income","income certificate","আয় শংসাপত্র"],
    documents:[
        "Aadhaar Card",
        "Ration Card",
        "Income Proof"
    ],
    charge:"Contact Office",
    time:"7-15 Days"
},

{
    title:"Caste Certificate",
    keywords:["caste","caste certificate","জাতি শংসাপত্র"],
    documents:[
        "Aadhaar Card",
        "Ration Card",
        "Supporting Documents"
    ],
    charge:"Contact Office",
    time:"7-15 Days"
},

{
    title:"Ration Card",
    keywords:["ration","ration card","রেশন কার্ড"],
    documents:[
        "Aadhaar Card",
        "Family Details",
        "Mobile Number"
    ],
    charge:"Contact Office",
    time:"7-15 Days"
},

{
    title:"Ayushman Card",
    keywords:["ayushman","ayushman card","আয়ুষ্মান"],
    documents:[
        "Aadhaar Card",
        "Mobile Number"
    ],
    charge:"Contact Office",
    time:"Instant"
},

{
    title:"e-Shram Card",
    keywords:["e-shram","eshram","ই-শ্রম"],
    documents:[
        "Aadhaar Card",
        "Mobile Number",
        "Bank Passbook"
    ],
    charge:"Contact Office",
    time:"Instant"
},

{
    title:"PM Kisan",
    keywords:["pm kisan","kisan","পিএম কিষান"],
    documents:[
        "Aadhaar Card",
        "Bank Passbook",
        "Land Documents"
    ],
    charge:"Contact Office",
    time:"Contact Office"
},

{
    title:"Flight Ticket",
    keywords:["flight","flight ticket","plane","বিমান টিকিট"],
    documents:[
        "Passenger Name",
        "Mobile Number",
        "ID Proof"
    ],
    charge:"As Per Fare"
    ,
    time:"Instant"
},

{
    title:"Print Out",
    keywords:["print","print out","প্রিন্ট"],
    documents:[
        "PDF / Image / Document"
    ],
    charge:"Per Page"
    ,
    time:"Instant"
},

{
    title:"Xerox",
    keywords:["xerox","photocopy","জেরক্স"],
    documents:[
        "Original Document"
    ],
    charge:"Per Page"
    ,
    time:"Instant"
},

{
    title:"Lamination",
    keywords:["lamination","লামিনেশন"],
    documents:[
        "Document"
    ],
    charge:"Contact Office",
    time:"5 Minutes"
},

{
    title:"Aadhaar Update",
    keywords:["aadhaar","aadhaar update","আধার"],
    documents:[
        "Aadhaar Card",
        "Mobile Number"
    ],
    charge:"As Per UIDAI"
    ,
    time:"Instant"
},

{
    title:"Voter Card",
    keywords:["voter","voter card","ভোটার"],
    documents:[
        "Aadhaar Card",
        "Passport Photo",
        "Mobile Number"
    ],
    charge:"Contact Office",
    time:"7-15 Days"
},

{
    title:"Driving Licence",
    keywords:["driving","licence","dl","ড্রাইভিং লাইসেন্স"],
    documents:[
        "Aadhaar Card",
        "Passport Photo",
        "Mobile Number"
    ],
    charge:"Contact Office",
    time:"As Per RTO"
},

{
    title:"Electricity Bill Payment",
    keywords:["electricity","bill","বিদ্যুৎ বিল"],
    documents:[
        "Consumer Number"
    ],
    charge:"As Per Bill"
    ,
    time:"Instant"
},

{
    title:"Mobile Recharge",
    keywords:["mobile","recharge","রিচার্জ"],
    documents:[
        "Mobile Number"
    ],
    charge:"As Per Recharge"
    ,
    time:"Instant"
}

];

const input=document.getElementById("serviceSearch");
const box=document.getElementById("searchSuggestions");
const clearBtn=document.getElementById("clearSearch");

input.addEventListener("input", function () {

    const value = input.value.trim().toLowerCase();

    box.innerHTML = "";

    if (value === "") {
        box.style.display = "none";
        return;
    }

    const result = services.filter(service =>
        service.title.toLowerCase().includes(value) ||
        service.keywords.some(k => k.toLowerCase().includes(value))
    );

    if (result.length === 0) {
        box.innerHTML = '<div class="item">No Service Found</div>';
        box.style.display = "block";
        return;
    }

    result.forEach(service => {

        const div = document.createElement("div");
        div.className = "item";

        div.innerHTML = `
            <strong>${service.title}</strong><br>
            <small>Click to View Details</small>
        `;

        div.onclick = function () {

            box.style.display = "none";

            document.getElementById("popupTitle").innerText = service.title;

            document.getElementById("popupContent").innerHTML = `
                <h3>📑 Required Documents</h3>
                <ul>
                    ${service.documents.map(doc => `<li>${doc}</li>`).join("")}
                </ul>

                <p><strong>⏱ Time:</strong> ${service.time}</p>
                <p><strong>💰 Charge:</strong> ${service.charge}</p>
            `;

            document.getElementById("servicePopup").style.display = "flex";

        };

        box.appendChild(div);

    });

    box.style.display = "block";

});

function closePopup() {
    document.getElementById("servicePopup").style.display = "none";
}
/* Popular Search Buttons */

document.querySelectorAll(".tag").forEach(tag => {

    tag.addEventListener("click", function () {

        const input = document.getElementById("serviceSearch");

        input.value = this.innerText;

        input.dispatchEvent(new Event("input"));

        input.focus();

        setTimeout(() => {

            const firstItem = document.querySelector("#searchSuggestions .item");

            if (firstItem) {
                firstItem.click();
            }

        }, 100);

    });

});