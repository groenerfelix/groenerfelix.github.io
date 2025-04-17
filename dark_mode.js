// Create the button element dynamically
const themeToggle = document.createElement('button');
themeToggle.id = 'theme-toggle';
themeToggle.className = 'theme-toggle size-[3vh] rounded-full font-medium fixed top-4 right-4 z-50';

// Add icons to the button
const darkModeIcon = document.createElement('i');
darkModeIcon.className = 'fa-solid fa-moon';
darkModeIcon.id = 'dark-mode-icon';

const lightModeIcon = document.createElement('i');
lightModeIcon.className = 'fa-solid fa-sun';
lightModeIcon.id = 'light-mode-icon';

themeToggle.appendChild(darkModeIcon);
themeToggle.appendChild(lightModeIcon);

// Append the button to the document body
document.body.appendChild(themeToggle);
const htmlElement = document.documentElement;

// Variable to keep track of dark mode state
let isDarkMode = false;

// Function to set the theme
function setTheme(isDark) {
isDarkMode = isDark;

if (isDark) {
    htmlElement.classList.add('dark');
    // themeToggle.textContent = 'Light Mode';
} else {
    htmlElement.classList.remove('dark');
    // themeToggle.textContent = 'Dark Mode';
}
}

// Check system preference for initial state
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(prefersDarkMode);

// Listen for button clicks
themeToggle.addEventListener('click', () => {
    setTheme(!isDarkMode);
});

// Listen for system preference changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    setTheme(e.matches);
});

