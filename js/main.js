// Toggle Nav Bar
let toggle = document.querySelector(".toggle-menu");
let nav = document.querySelector("header nav ul");

toggle.onclick = () => {
    nav.classList.toggle("show");
};

document.addEventListener("click", (e) => { // Hide Nav When Click on Any Place
    if (!e.target.classList.contains("toggle-menu")) {
        if (nav.classList.contains("show")) {
            nav.classList.remove("show");
        }
    }
});

window.addEventListener("scroll", () => { // Change Nav Top While Scrolling
    if (window.scrollY >= 100) {
        nav.classList.add("top-0");
    } else {
        nav.classList.remove("top-0");
    }
});

// Add Scroll to Top Button
let scrollToTop = document.querySelector(".scroll-to-top");

window.onscroll = function () {
    if (window.scrollY >= 100) {
        scrollToTop.style.display = "block";
    } else {
        scrollToTop.style.display = "none";
    }
};

scrollToTop.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};

// Add Scroll Progress
let el = document.querySelector(".scroll-progress");
let pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", function () {
    let scrollTop = document.documentElement.scrollTop;
    el.style.width = `${(scrollTop / pageHeight) * 100}%`;
});

// Design + About Sections Images Animations
let designSection = document.querySelector(".design");
let aboutSection = document.querySelector(".about");
let designtImage = document.querySelector(".design img");
let aboutImage = document.querySelector(".about img");

window.addEventListener("scroll", () => {
    if (window.scrollY >= designSection.offsetTop - 250) {
        designtImage.style.left = "0";
    }
    if (window.scrollY >= aboutSection.offsetTop -250) {
        aboutImage.style.left = "0";
    }
});


// Add Increase Numbers on Scroll Animation
let statsSection = document.querySelector(".stats");
let nums = Array.from(document.getElementsByClassName("number"));
let started = false;

window.addEventListener("scroll", function () {
    if (window.scrollY >= statsSection.offsetTop - 250) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
});

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.innerHTML++;
        if (el.innerHTML === goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}

// Handle Protfolio Filter
let shuffleLis = document.querySelectorAll(".shuffle li");
let imgsContainers = document.querySelectorAll(".imgs-container .box");

shuffleLis.forEach((li) => {
    li.addEventListener("click", (e) => {
        // Remove Active Class From All Lis and Put It on Current One
        shuffleLis.forEach((li) => li.classList.remove("active"));
        e.target.classList.add("active");

        // Manage Images
        imgsContainers.forEach(img => img.style.display = "none");

        document.querySelectorAll(e.target.dataset.cat).forEach(img => {
            img.style.display = "block";
        });

        // Add Animation
        imgsContainers.forEach(box => {
            box.classList.remove("animation");
            box.classList.add("animation");
        })
    });
});

// Add Skills Progress Animation
let skillsSection = document.querySelector(".our-skills");
let progressSpans = document.querySelectorAll(".prog span");
let count = 0;
let done = false;

window.addEventListener("scroll", function () {
    if (window.scrollY >= skillsSection.offsetTop - 250) {
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.max + "%";
            if (span.style.width === span.dataset.max + "%") {
                span.style.position = "relative";
            }
            if (!done) {
                Count(span);
                count++;
            }
            if (count == 4) {
                done = true;
            }
            // progressSpans.dataset.progress += "%";
        });
    }
});

function Count(el) {
    let goal = el.dataset.max;
    let count = setInterval(() => {
        el.dataset.progress++;
        if (el.dataset.progress === goal) {
            clearInterval(count);   
        }
    }, 300 / goal);
}