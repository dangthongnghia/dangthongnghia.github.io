document.addEventListener('DOMContentLoaded', () => {
    const typingElements = document.querySelectorAll('.typing');

    // Hàm thực hiện hiệu ứng typing cho một phần tử
    function typeText(element, text, speed = 80) {
        let i = 0;
        element.textContent = ''; // Xóa nội dung ban đầu

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }

        type();
    }

    // Áp dụng hiệu ứng typing cho từng phần tử theo thứ tự
    let delay = 0;
    typingElements.forEach((element, index) => {
        const text = element.getAttribute('data-text');
        setTimeout(() => {
            typeText(element, text, 80); // 80ms mỗi ký tự
        }, delay);
        delay += text.length * 80 + 1000; // Độ trễ dựa trên độ dài chuỗi + 1s giữa các dòng
    });

    // Hiệu ứng hover cho các khối
    const blocks = document.querySelectorAll('.code-block');
    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            block.style.transform = 'translateY(-5px)';
        });
        block.addEventListener('mouseout', () => {
            block.style.transform = 'translateY(0)';
        });
    });

    // Điều khiển nhạc nền
    const audio = document.getElementById('background-music');
    audio.volume = 0.5; // Đặt âm lượng ban đầu

    const playButton = document.getElementById('play-button');
    const pauseButton = document.getElementById('pause-button');
    const volumeControl = document.getElementById('volume-control');

    playButton.addEventListener('click', () => {
        audio.play();
    });

    pauseButton.addEventListener('click', () => {
        audio.pause();
    });

    volumeControl.addEventListener('input', (event) => {
        audio.volume = event.target.value;
    });
});