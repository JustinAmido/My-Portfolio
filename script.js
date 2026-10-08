/* =====================================
   CREATE ANIME STAR BACKGROUND
===================================== */

function createStars() {

    const stars = document.querySelector(".stars");

    for (let i = 0; i < 120; i++) {

        const star = document.createElement("span");

        star.classList.add("star");

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        const size =
            Math.random() * 3 + 1;

        star.style.width =
            size + "px";

        star.style.height =
            size + "px";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        stars.appendChild(star);

    }

}


/* =====================================
   MOBILE MENU
===================================== */

function toggleMenu() {

    const menu =
        document.getElementById("navLinks");

    menu.classList.toggle("show");

}


/* =====================================
   OPEN IMAGE MODAL
===================================== */

function openImage(imagePath, title) {

    const modal =
        document.getElementById("imageModal");

    const modalImage =
        document.getElementById("modalImage");

    const modalTitle =
        document.getElementById("modalTitle");

    modalImage.src = imagePath;

    modalTitle.textContent = title;

    modal.classList.add("show");

}


/* =====================================
   CLOSE IMAGE MODAL
===================================== */

function closeImage() {

    const modal =
        document.getElementById("imageModal");

    const modalImage =
        document.getElementById("modalImage");

    modal.classList.remove("show");

    modalImage.src = "";

}


/* =====================================
   CLICK QUIZ IMAGE
===================================== */

function showImage(image) {

    openImage(
        image.src,
        image.alt
    );

}


/* =====================================
   ESC KEY CLOSE MODAL
===================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeImage();

        }

    }
);


/* =====================================
   CLOSE MOBILE MENU AFTER CLICK
===================================== */

document
    .querySelectorAll(".nav-links a")
    .forEach(function(link) {

        link.addEventListener(
            "click",
            function() {

                document
                    .getElementById("navLinks")
                    .classList
                    .remove("show");

            }
        );

    });


/* =====================================
   START WEBSITE
===================================== */

createStars();