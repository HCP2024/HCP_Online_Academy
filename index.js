const searchDiv = document.querySelector("button.menu");
const header = document.querySelector('header#academy-header .main');
let searching = false;

function handleHeader() {

    const isOpen = header.classList.contains('active');
    if (isOpen) {
        header.classList.remove('active');
        searching = header.classList.contains('active');
    } else {
        header.classList.add('active');
        searching = header.classList.contains('active');
    };

    searchDiv.innerHTML = searching ? "X" : ` <svg
            xmlns="http://www.w3.org/2000/svg"
            height="25"
            viewBox="0 -960 960 960"
            width="25"
            class="menu"
          >
            <path
              d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
            />
          </svg>`;
}

searchDiv.addEventListener('click', () => {
    handleHeader();
});

header.addEventListener('mouseleave', () => {
    if (searching) {
        handleHeader();
    }
});

// POPUP LOGIC
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup-overlay");
    const closeBtn = document.querySelector(".popup-close");

    // Show popup automatically after page load
    setTimeout(() => {
        popup.classList.add("active");
    }, 500);

    // Close popup
    closeBtn.addEventListener("click", () => {
        popup.classList.remove("active");
    });

    // Optional: close popup when clicking outside
    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.classList.remove("active");
        }
    });
});


