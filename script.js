
// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    menuToggle.textContent =
        navMenu.classList.contains("active") ? "✕" : "☰";
});

// CLOSE MOBILE MENU AFTER CLICK

document.querySelectorAll("#navMenu a").forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});

// EXPLORE MORE DROPDOWN

const exploreBtn = document.getElementById("exploreBtn");
const exploreDropdown = document.getElementById("exploreDropdown");

exploreBtn.addEventListener("click", function () {
    exploreDropdown.classList.toggle("show");
});

document.addEventListener("click", function (event) {
    if (!event.target.closest(".explore")) {
        exploreDropdown.classList.remove("show");
    }
});

// CONSULTATION FORM

const quoteForm = document.getElementById("quoteForm");

quoteForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const property = document.getElementById("property").value;
    const scope = document.getElementById("scope").value;
    const locality = document.getElementById("locality").value.trim();

    if (!/^[6-9][0-9]{9}$/.test(phone)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    const message =
        `Hello Jain Signature Studio!

I want a free interior design consultation.

Name: ${name}
Phone: ${phone}
Property Type: ${property}
Scope: ${scope || "Not specified"}
Location: ${locality || "Not specified"}`;

    const whatsappURL =
        "https://wa.me/919643431551?text=" +
        encodeURIComponent(message);

    document.getElementById("formMessage").textContent =
        "Opening WhatsApp...";

    window.open(whatsappURL, "_blank");

});


// ACTIVE NAVBAR SECTION ON SCROLL

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("#navMenu a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// -----------service --------------------

const serviceData = {

    kitchen: {
        category: "MODULAR",
        title: "Modular Kitchen",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000",

        heading: "Modern kitchens designed around your lifestyle",

        description: "Beautiful and functional modular kitchens designed to make everyday cooking comfortable. We provide customised layouts, premium finishes and smart storage solutions.",

        included: [
            "L-shaped, U-shaped and parallel kitchens",
            "Premium modular cabinets and shutters",
            "Soft-close drawers and fittings",
            "Smart storage and pantry units",
            "Premium countertops and backsplash"
        ],

        why: [
            "Customised kitchen layouts",
            "Quality materials and hardware",
            "Smart space utilisation",
            "Professional installation"
        ],

        gallery: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"
        ]
    },

    living: {
        category: "RESIDENTIAL",
        title: "Living Room Interiors",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000",

        heading: "Beautiful living spaces that feel like home",

        description: "Transform your living room into a stylish and welcoming space. Our designs combine elegant furniture, lighting, textures and thoughtful layouts.",

        included: [
            "Designer TV units and wall panels",
            "False ceiling and decorative lighting",
            "Custom furniture and sofa layouts",
            "Wallpaper and wall decoration",
            "Curtains and furnishing"
        ],

        why: [
            "Personalised interior concepts",
            "Premium material selection",
            "Perfect balance of style and comfort",
            "Complete design and execution"
        ],

        gallery: [
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800"
        ]
    },

    bedroom: {
        category: "LUXURY",
        title: "Bedroom Interiors",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1000",

        heading: "Create your perfect personal retreat",

        description: "We create comfortable and elegant bedrooms with beautiful furniture, customised wardrobes, premium finishes and intelligent storage solutions.",

        included: [
            "Customised beds and headboards",
            "Sliding and hinged wardrobes",
            "Bedside tables and storage",
            "False ceiling and ambient lighting",
            "Wall panels and premium finishes"
        ],

        why: [
            "Designs based on your preferences",
            "Maximum storage utilisation",
            "Premium quality materials",
            "End-to-end project execution"
        ],

        gallery: [
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800",
            "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
            "https://images.unsplash.com/photo-1617104678098-de229db51175?w=800",
            "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=800"
        ]
    }

};


const drawer = document.getElementById("serviceDrawer");
const overlay = document.getElementById("serviceOverlay");
const drawerContent = document.getElementById("drawerContent");

let currentService = null;


// OPEN SIDEBAR

document.querySelectorAll(".explore-btn").forEach(button => {

    button.addEventListener("click", function () {

        currentService = this.dataset.service;

        const service = serviceData[currentService];

        document.getElementById("drawerCategory").textContent =
            service.category;

        document.getElementById("drawerTitle").textContent =
            service.title;

        drawer.classList.add("open");
        overlay.classList.add("show");

        document.body.style.overflow = "hidden";

        showTab("about");

    });

});


// CLOSE SIDEBAR

function closeDrawer() {

    drawer.classList.remove("open");
    overlay.classList.remove("show");

    document.body.style.overflow = "";

}

document.getElementById("drawerClose").addEventListener("click", closeDrawer);

overlay.addEventListener("click", closeDrawer);

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {
        closeDrawer();
    }

});


// TAB CLICK

document.querySelectorAll(".drawer-tab").forEach(tab => {

    tab.addEventListener("click", function () {

        showTab(this.dataset.tab);

    });

});


// SHOW TAB CONTENT

function showTab(tabName) {

    const service = serviceData[currentService];

    document.querySelectorAll(".drawer-tab").forEach(tab => {

        tab.classList.toggle(
            "active",
            tab.dataset.tab === tabName
        );

    });


    let content = "";


    // ABOUT TAB

    if (tabName === "about") {

        content = `
            <img src="${service.image}" class="drawer-hero">

            <span class="drawer-label">ABOUT THIS SERVICE</span>

            <h3>${service.heading}</h3>

            <p>${service.description}</p>

            <h4>What is included</h4>

            <ul class="drawer-list">
                ${service.included.map(item => `<li>${item}</li>`).join("")}
            </ul>

            <h4>Popular add-ons</h4>

            <p>Custom furniture, premium finishes, decorative lighting
            and personalised design solutions.</p>

            <a href="#contact" class="drawer-cta">
                Get a Free Quote →
            </a>
        `;

    }


    // WHY US TAB

    else if (tabName === "why") {

        content = `
            <span class="drawer-label">WHY CHOOSE US</span>

            <h3>Design, Quality & Execution Under One Roof</h3>

            <p>We focus on delivering beautiful spaces with quality
            materials, expert planning and professional execution.</p>

            <ul class="drawer-list">
                ${service.why.map(item => `<li>${item}</li>`).join("")}
            </ul>

            <h4>What you get in writing</h4>

            <ul class="drawer-list">
                <li>Detailed project quotation</li>
                <li>Material and finish specifications</li>
                <li>Design and layout approval</li>
                <li>Project execution plan</li>
            </ul>

            <a href="#contact" class="drawer-cta">
                Talk to Our Designer →
            </a>
        `;

    }


    // GALLERY TAB

    else if (tabName === "gallery") {

        content = `
            <span class="drawer-label">OUR WORK</span>

            <h3>Explore Our Design Collection</h3>

            <p>Get inspired by our interior design ideas
            and beautifully designed spaces.</p>

            <div class="drawer-gallery">

                ${service.gallery.map(img => `
                    <img src="${img}" alt="${service.title}"
                    loading="lazy">
                `).join("")}

            </div>

            <a href="#contact" class="drawer-cta">
                Get a Similar Design →
            </a>
        `;

    }


    // PROCESS TAB

    else if (tabName === "process") {

        const steps = [
            ["01", "Free Consultation", "Discuss your requirements, preferences and budget."],
            ["02", "Design & Planning", "Create layouts and visualise your space before execution."],
            ["03", "Material Selection", "Choose suitable materials, colours and finishes."],
            ["04", "Production & Installation", "Our team manages production and on-site installation."],
            ["05", "Final Handover", "Inspect the completed project and receive your finished space."]
        ];

        content = `
            <span class="drawer-label">OUR PROCESS</span>

            <h3>From First Discussion to Final Handover</h3>

            <p>Our structured process ensures a smooth
            and organised interior design experience.</p>

            ${steps.map(step => `
                <div class="process-step">

                    <div class="process-number">${step[0]}</div>

                    <div>
                        <h4>${step[1]}</h4>
                        <p>${step[2]}</p>
                    </div>

                </div>
            `).join("")}

            <a href="#contact" class="drawer-cta">
                Start Your Project →
            </a>
        `;

    }

// enquery tab

else if (tabName === "enquiry") {

    content = `
        <span class="drawer-label">GET IN TOUCH</span>

        <h3>Let's Discuss Your Project</h3>

        <p>Share a few details about your requirements.
        Our team will get in touch with you shortly.</p>

        <form id="serviceEnquiryForm" class="service-enquiry-form">

            <div class="enquiry-field">
                <label for="serviceName">Your Name *</label>
                <input type="text" id="serviceName"
                    placeholder="Enter your full name" required>
            </div>

            <div class="enquiry-field">
                <label for="servicePhone">Phone Number *</label>
                <input type="tel" id="servicePhone"
                    placeholder="Enter 10-digit mobile number"
                    maxlength="10" pattern="[6-9][0-9]{9}" required>
            </div>

            <div class="enquiry-field">
                <label for="serviceProperty">Property Type *</label>
                <select id="serviceProperty" required>
                    <option value="">Select property type</option>
                    <option>Apartment</option>
                    <option>Independent House</option>
                    <option>Villa</option>
                    <option>Office</option>
                    <option>Commercial Space</option>
                    <option>Other</option>
                </select>
            </div>

            <div class="enquiry-field">
                <label for="serviceLocation">Project Location</label>
                <input type="text" id="serviceLocation"
                    placeholder="Enter your city or locality">
            </div>

            <div class="enquiry-field">
                <label for="serviceRequirement">Your Requirements</label>
                <textarea id="serviceRequirement"
                    rows="4"
                    placeholder="Tell us about your interior design requirements..."></textarea>
            </div>

            <button type="submit" class="drawer-cta enquiry-submit">
                Submit Enquiry →
            </button>

        </form>
    `;

}

    drawerContent.innerHTML = content;

    drawerContent.scrollTop = 0;

}

/*review scroll reveal */

const reviewObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            reviewObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll("#reviews .reveal").forEach(element => {
    reviewObserver.observe(element);
});



//service enquery 

document.addEventListener("submit", function (event) {

    if (event.target.id !== "serviceEnquiryForm") return;

    event.preventDefault();

    const name = document.getElementById("serviceName").value.trim();
    const phone = document.getElementById("servicePhone").value.trim();
    const property = document.getElementById("serviceProperty").value;
    const location = document.getElementById("serviceLocation").value.trim();
    const requirement = document.getElementById("serviceRequirement").value.trim();

    if (!/^[6-9][0-9]{9}$/.test(phone)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    const service = serviceData[currentService];

    const message =
        `Hello Jain Signature Studio!

I am interested in your ${service.title} service.

Name: ${name}
Phone: ${phone}
Property Type: ${property}
Location: ${location || "Not specified"}
Requirements: ${requirement || "Not specified"}`;

    const whatsappURL =
        "https://wa.me/919643431551?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

});



document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(
        ".service-grid, .projects-section, .process-section, .why-section, .review-section, .faq-section, .main-footer"
    );

    sections.forEach(section => {
        section.classList.add("scroll-reveal");
    });

    const cards = document.querySelectorAll(
        ".service-card, .portfolio-card, .why-item, .review-card"
    );

    cards.forEach(card => {
        card.classList.add("reveal-item");
    });

   
    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");
                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    cards.forEach((card, index) => {

        card.style.transitionDelay = `${(index % 3) * 0.15}s`;

        observer.observe(card);

    });

});

