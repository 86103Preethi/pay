# Pay App 🚀

![React](https://img.shields.io/badge/React-19.1.1-blue?logo=react) 
![Vite](https://img.shields.io/badge/Vite-6.0+-purple?logo=vite) 
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?logo=tailwind-css) 
![Flowbite](https://img.shields.io/badge/Flowbite-3.1.2-0E7490?logo=flowbite) 
![Axios](https://img.shields.io/badge/Axios-1.11.0-5A29E4?logo=axios) 
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📂 GitHub Repository

This repository contains the complete source code for the **Pay App** project.

---

## ⚡ Setup Instructions  

To run the project locally:  

```bash
# Clone the repository
git clone https://github.com/your-username/pay-app.git
cd pay-app

# Install dependencies
npm install

# Start the development server
npm run dev

# Dependencies
| Package            | Version | Purpose                        |
| ------------------ | ------- | ------------------------------ |
| `react`            | ^19.1.1 | Core library for building UI   |
| `react-dom`        | ^19.1.1 | DOM rendering for React        |
| `react-router-dom` | ^7.8.2  | Routing and navigation         |
| `axios`            | ^1.11.0 | HTTP client for API calls      |
| `react-icons`      | ^5.5.0  | Icons library for React        |
| `flowbite`         | ^3.1.2  | Tailwind CSS component library |
| `flowbite-react`   | ^0.12.7 | React components for Flowbite  |


🏗️ Notes on Architecture / Approach
Frontend Framework: React 19.1.1 for building UI components.
Styling & Components: Tailwind CSS + Flowbite + Flowbite React for responsive design.
Routing: React Router v7.8.2 for page navigation.
API Calls: Axios for backend API interaction.
State Management: Local component state and props (no Redux/Zustand used).
Component Structure:
/pages → Page-level components
/components → Reusable UI components
/assets → Images & icons
Responsive Design: Mobile-first approach with Tailwind breakpoints.


⏱️ Time Spent & Known Limitations
Time Spent: ~1.5 days.
Known Limitations:
Some components may not fully adapt to very small screen widths.
API integration was attempted with Axios, but due to CORS issues, static data with pagination was used instead with error handling.