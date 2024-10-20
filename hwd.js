const letterFront = document.getElementById("letter-front");
const paper = document.getElementById("paper");
const flowers = document.querySelectorAll(".flower");
const women = document.querySelectorAll(".woman");
const women_container = document.getElementById("woman-container");
const outside_letter = document.getElementById("outside-letter");
var letter_opened = false;
var flowers_state = 0;

// setInterval(flowersAnimate, 100);//hoa hòe mỗi giây
// Tạo trái tim mỗi giây
setInterval(createHeart, 1000);

// Hover effect to change letter image
letterFront.addEventListener("mouseover", () => {
    if (!letter_opened) {
        letterFront.querySelector('img').src = "hover-letter.png"; // Đổi ảnh khi hover

        flowers.forEach(flower => {
            flower.src = "opening-flower0.png"; // Trổ hoa
            flower.style.transform = "scale(1.05)";
        });
    }
});

letterFront.addEventListener("mouseout", () => {
    if (!letter_opened) {
        letterFront.querySelector('img').src = "closed-letter.png"; // Quay lại ảnh gốc

        flowers.forEach(flower => {
            flower.src = "opening-flower1.png"; // Trổ hoa
            flower.style.transform = "scale(1)";
        });
    }
});

// Click effect to open letter and show message
letterFront.addEventListener("click", () => {
    setTimeout(() => {
    outside_letter.classList.remove("hidden");
    }, 500);

    letter_open_img();

    flowers_blossom();

    setTimeout(() => {
        paper.classList.remove("hidden");
        paper.style.opacity = 1;
        flowers.forEach(flower => {
            flower.src = "open-flower.png"; // Trổ hoa
        });
    }, 1000); // Delay 1 giây trước khi giấy trắng hiện ra

    setTimeout(() => {
        paper.style.transform = 'translate(-50%, -170%)'
    }, 1500); // Delay 1 giây trước khi di giấy
    
    setTimeout(() => {
        women_container.classList.remove("hidden");
        women.forEach(woman => {
            woman.style.opacity = 1; // Hiện hình phụ nữ
        });
    }, 2000); // Delay 2 giây để hiện hình phụ nữ
    letter_opened = true;
});

function letter_open_img(){
    setTimeout(() => {
        letterFront.querySelector('img').src = "open-letter1.png";
    }, 100);
    setTimeout(() => {
        letterFront.querySelector('img').src = "open-letter2.png";
    }, 200);
    setTimeout(() => {
        letterFront.querySelector('img').src = "open-letter3.png";
    }, 300);
    setTimeout(() => {
        letterFront.querySelector('img').src = "open-letter3.png";
    }, 400); // Đổi ảnh thư mở
}

function flowers_blossom(){
    setTimeout(() => {
        flowers.forEach(flower => {
            flower.src = "opening-flower2.png"; // Trổ hoa
        });
    }, 500); // Delay 1 giây trước khi giấy trắng hiện ra
    setTimeout(() => {
        flowers.forEach(flower => {
            flower.src = "opening-flower3.png"; // Trổ hoa
        });
    }, 600); // Delay 1 giây trước khi giấy trắng hiện ra
    setTimeout(() => {
        flowers.forEach(flower => {
            flower.src = "open-flower1.png"; // Trổ hoa
        });
    }, 700); // Delay 1 giây trước khi giấy trắng hiện ra
}

function flowersAnimate(){
    if (!letter_opened) return;
    switch (flowers_state){
        default: flowers.forEach(flower => {
            flower.src = "open-flower.png"; // Trổ hoa
            flowers_state = 1;
        });
        case 1: flowers.forEach(flower => {
            flower.src = "open-flower1.png"; // Trổ hoa
            flowers_state = 0;
        });
    }
        
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    
    // Vị trí ngẫu nhiên trên chiều ngang
    heart.style.left = Math.random() * 50 + "vw"; 
    heart.style.animationDelay = Math.random() * 2 + "s"; // Thay đổi thời gian bắt đầu

    document.querySelector(".hearts-container").appendChild(heart);

    // Xóa trái tim sau khi animation hoàn thành
    heart.addEventListener("animationend", () => {
        heart.remove();
    });
}


