const menuButton = document.querySelector("button.menu"); // Changed selector
const header = document.querySelector('header#academy-header .main');
let isOpen = false;

function handleHeader() {
    isOpen = !isOpen; // Toggle the state
    
    if (isOpen) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }

    // Update button content
    menuButton.innerHTML = isOpen ? "X" : `<svg
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

menuButton.addEventListener('click', handleHeader);

header.addEventListener('mouseleave', () => {
    if (isOpen) {
        handleHeader();
    }
});
