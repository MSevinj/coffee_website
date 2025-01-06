This project showcases a responsive website layout with a smooth navigation experience and a swiper carousel for testimonials. It includes a fixed header, mobile-friendly menu toggle, and an elegant interface built with HTML, CSS, and JavaScript.

Features
Responsive Layout: The layout adapts to different screen sizes, ensuring a seamless experience on both desktop and mobile devices.
Mobile Navigation: The menu can be toggled on mobile devices with smooth sliding animations.
Swiper Slider: A responsive swiper carousel for testimonials with pagination and navigation controls.
CSS Animations: Smooth hover effects and transitions are used throughout the website to improve user interaction.
Customizable Design: The design is based on a set of predefined CSS variables, making it easy to adjust the theme.
Technologies Used
HTML5
CSS3 (with custom variables and responsive media queries)
JavaScript (for mobile menu toggle and Swiper slider functionality)
Swiper.js (for creating the testimonial slider)
File Structure
bash
Copy code
/project-folder
│
├── /assets
│   ├── images/        # Image assets
│   └── fonts/         # Custom fonts (if any)
│
├── index.html         # Main HTML file
├── style.css          # Styles for the website (includes mobile-responsive rules)
└── script.js          # JavaScript for interactive elements (menu toggle, swiper)
Installation
To get started with this project:

Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/yourusername/website-project.git
Navigate to the project directory:

bash
Copy code
cd website-project
Open index.html in your preferred browser.

Alternatively, you can set up a local server using a tool like Live Server if you're using Visual Studio Code.

Usage
Mobile Menu Toggle
The mobile menu can be toggled by clicking the "menu" button.
On mobile devices, the menu slides in from the left when the button is clicked.
Clicking any menu item will close the mobile menu and allow navigation.
Swiper Slider
Testimonials are displayed in a slider, which can be navigated using the pagination bullets or previous/next buttons.
The slider adjusts its layout based on the screen size, showing one slide on smaller screens and more on larger screens.
Customization
Changing the Theme
You can easily modify the theme by adjusting the CSS variables defined in the :root section of the style.css file:

css
Copy code
:root {
    --primary-color: #3b141c;        /* Main brand color */
    --secondary-color: #f3961c;      /* Accent color */
    --light-pink-color: #faf4f5;     /* Light background color */
    --dark-color: #252525;           /* Dark text color */
    --font-size-xl: 2rem;            /* Font size for large text */
    --font-size-l: 1.15rem;          /* Font size for smaller text */
}
Modifying Swiper Settings
You can adjust the number of visible slides and other settings by modifying the Swiper configuration in the script.js file:

javascript
Copy code
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});
Modifying the Menu
The mobile menu can be customized by adjusting the styles in the style.css file. The structure of the menu is controlled by the .nav-menu class and related elements.

Browser Support
This project is designed to work on modern browsers such as:

Fork the repository.
Create your branch (git checkout -b feature-branch).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.
