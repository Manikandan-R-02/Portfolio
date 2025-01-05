let menuIcon = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Fully loaded");

    // Toggle navbar menu
    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("fa-x");
        navbar.classList.toggle("active");
    });

    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("header nav a");

    // Highlight active section link and sticky header
    window.onscroll = () => {
        let top = window.scrollY;

        sections.forEach((sec) => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute("id");

            if (top >= offset && top < offset + height) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    document.querySelector(`header nav a[href*="${id}"]`).classList.add("active");
                });
            }
        });

        // Sticky header
        let header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 100);

        // Close menu on scroll
        menuIcon.classList.remove("fa-x");
        navbar.classList.remove("active");
    };

    // ScrollReveal animations
    ScrollReveal({
        distance: "80px",
        duration: 2000,
        delay: 200,
    });

    ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
    ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact form", { origin: "bottom" });
    ScrollReveal().reveal(".home-contact h1, .about-img", { origin: "left" });
    ScrollReveal().reveal(".home-contact p, .about-content", { origin: "right" });

    const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'Web Designer'],
        typeSpeed: 100, // Faster typing
        backSpeed: 50,  // Slower backspacing
        backDelay: 1500, // Longer delay before retyping
        loop: true, // Infinite loop
    });

    // WhatsApp form functionality
    const sendMsgButton = document.getElementById("Whatsapp");

    if (sendMsgButton) {
        sendMsgButton.addEventListener("click", function(event) {
            console.log("Button clicked!");  // This will confirm the button is clicked
            event.preventDefault();  // Prevent form submission
            sendWhatsApp();  // Call the sendWhatsApp function
        });
    } else {
        console.log("Button not found!");
    }

    function sendWhatsApp() {
        console.log("function working");

        const phoneNumber = "919150424515";

        // Safely retrieve form values
        const name = document.getElementById("name")?.value?.trim() || "N/A";
        console.log("Name:", name);
        const email = document.getElementById("email")?.value?.trim() || "N/A";
        const contact = document.getElementById("contact")?.value?.trim() || "N/A";
        const subject = document.getElementById("subject")?.value?.trim() || "N/A";
        const message = document.getElementById("message")?.value?.trim() || "N/A";

        
        console.log("Email:", email);
        console.log("Contact:", contact);
        console.log("Subject:", subject);
        console.log("Message:", message);

        const url = `https://wa.me/${phoneNumber}?text=` +
            `*Name:* ${encodeURIComponent(name)}%0a` +
            `*Email:* ${encodeURIComponent(email)}%0a` +
            `*Contact:* ${encodeURIComponent(contact)}%0a` +
            `*Subject:* ${encodeURIComponent(subject)}%0a` +
            `*Message:* ${encodeURIComponent(message)}%0a` +
            `Thank you! I will reply to you as soon as possible.`;

        console.log("Generated URL:", url);

        // Redirect to WhatsApp
        window.location.href = url;  // Use location.href to redirect
    }

});
