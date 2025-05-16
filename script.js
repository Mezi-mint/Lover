const playButton = document.getElementById('play-button');
const blackOverlay = document.getElementById('black-overlay');
const corner = document.getElementById('corner');
const heartContainer = document.getElementById('heart-container');
const messageBox = document.getElementById('messageBox');

playButton.addEventListener('click', () => {
    blackOverlay.classList.add('fall');
    corner.classList.add('fall-corner');

    // Đợi nền đen rơi xong, rồi tạo trái tim
    setTimeout(() => {
        startHearts();
    }, 1500); // 1.5 giây sau khi bấm
});

function startHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        const wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");

        const core = document.createElement("div");
        core.classList.add("core");
        const left = document.createElement("div");
        left.classList.add("left");
        const right = document.createElement("div");
        right.classList.add("right");

        wrapper.appendChild(core);
        wrapper.appendChild(left);
        wrapper.appendChild(right);
        heart.appendChild(wrapper);

        // Vị trí và kích thước ngẫu nhiên
        const size = 4 + Math.random() * 14;
        const duration = 2 + Math.random() * 3;

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = `${duration}s`; // gán duration cho floatUp
        heart.style.opacity = 0.4 + Math.random() * 0.6;

        wrapper.style.width = `${size}px`;
        wrapper.style.height = `${size}px`;
        core.style.width = `${size}px`;
        core.style.height = `${size}px`;

        left.style.width = `${size}px`;
        left.style.height = `${size}px`;
        left.style.top = `${-size / 2}px`;
        left.style.left = "0px";

        right.style.width = `${size}px`;
        right.style.height = `${size}px`;
        right.style.top = "0px";
        right.style.left = `${-size / 2}px`;

        // Xoay và nghiêng cho wrapper
        const animations = [];
        if (Math.random() < 0.5) animations.push(`rotateSelf ${duration}s linear forwards`);
        if (Math.random() < 0.5) animations.push(`tilt ${duration}s ease-in-out forwards`);

        wrapper.style.animation = animations.length > 0 ? animations.join(", ") : "none";

        document.getElementById("heart-container").appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }, 150);
}

playButton.addEventListener('click', () => {
    blackOverlay.classList.add('fall');
    corner.classList.add('fall-corner');

    // Đợi nền đen rơi xong, rồi tạo trái tim
    setTimeout(() => {
        startHearts();
    }, 1500); // 1.5 giây sau khi bấm

    // Sau 3 giây hiện khung chữ
    setTimeout(() => {
        messageBox.style.display = 'flex';
        messageBox.style.animation = 'popIn 0.6s ease-out';
    }, 3000);

    setTimeout(() => {
        const admin = document.querySelector('.admin');
        admin.style.display = 'block';
        admin.style.animation = 'fadeUp 1s ease-out forwards';
    }, 5000); // hiện sau 2 giây sau messageBox
});