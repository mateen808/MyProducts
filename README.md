🛍️ MyProducts – React Product Catalog Web App
A responsive and user-friendly product listing web application built using React.js, featuring search, price-based sorting, and dynamic product detail pages. The project demonstrates clean component architecture, reusable UI elements, and seamless navigation using React Router.

🚀 Live Features

1.🔍 Product Search
Filter products instantly by typing keywords in the search bar.

2.↕️ Sorting Functionality
Sort products based on price:
Low → High
High → Low

3.📄 Product Details Page
Each product opens a dedicated details page using dynamic routing (/productDetails/:id), displaying:
Image
Title
Description
Price
Rating

4.🧩 Reusable Components
Includes modular components like Header, Card, Home, and ProductDetails to ensure clean and scalable code.

5.🧭 Client-Side Routing
Smooth page transitions built with React Router v6.

6.📱 Responsive UI
Built using CSS and Bootstrap, optimized to work across mobile, tablet, and desktop screens.

7.🛠️ Tech Stack
React.js
React Router
JavaScript (ES6+)
HTML5 + CSS3
Bootstrap


📂 Project Structure
src/
│── Components/
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── Header.css
│   └── Pages/
│       ├── Home.jsx
│       └── ProductDetails.jsx
│
│── ReusableComponents/
│   ├── Card.jsx
│   └── Card.css
│
│── Routes/
│   └── CustomRoutes.jsx
│
│── Container/
│   └── App.jsx
│
│── data/
│   └── card.js
│
│── main.jsx
│── style.css

Screenshots:

HomePage
<img width="1920" height="1080" alt="Screenshot 2025-12-11 112956" src="https://github.com/user-attachments/assets/f847793d-89f1-4354-9b53-4a709d127d2d" />

Product Details
<img width="1920" height="1020" alt="Screenshot 2025-12-11 113105" src="https://github.com/user-attachments/assets/15689587-e271-438d-987c-57e35270d54d" />

