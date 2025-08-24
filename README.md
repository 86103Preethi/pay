# React + Vite

# Pay app

## 1. GitHub Repository

This repository contains the complete source code for the project.

### README.md Includes:

1. **Setup Instructions**  
   To run the project locally, follow these steps:  
   ```bash
   # Install dependencies
   npm install

2.   ## Dependencies
    This project uses the following dependencies:
    | Package           | Version   | Purpose |
    |------------------|-----------|---------|
    | `react`           | ^19.1.1   | Core library for building UI |
    | `react-dom`       | ^19.1.1   | DOM rendering for React |
    | `react-router-dom`| ^7.8.2    | Routing and navigation |
    | `axios`           | ^1.11.0   | HTTP client for API calls |
    | `react-icons`     | ^5.5.0    | Icons library for React |
    | `flowbite`        | ^3.1.2    | Tailwind CSS component library |
    | `flowbite-react`  | ^0.12.7   | React components for Flowbite |

   # Start the development server
   npm run dev

3.   #Notes on Architecture / Approach:
    Frontend Framework: React 19.1.1 used for building the UI components.
    Styling & Components: Tailwind CSS + Flowbite + Flowbite React for responsive UI and pre-built components.
    Routing: React Router v7.8.2 manages navigation across pages.
    API Calls: Axios used for interacting with backend APIs.
    State Management: Local component state and props were used; no external state library was implemented.
    Component Structure:
    Pages organized under /pages
    Reusable UI components under /components
    Assets (images/icons) under /assets
    Responsive Design: Mobile-first approach with Tailwind CSS breakpoints.

4.  #Time Spent & Known Limitations
    Time Spent: Approximately 1.5 days.
    Known Limitations:
    Some components may not fully adapt to very small screen widths.
    API integration was done using Axios, but due to CORS errors, static data with pagination was implemented along with error handling.


