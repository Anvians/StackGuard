# StackGuard

## StackGuard Frontend Task

This project is a React application built for the StackGuard frontend assessment. It implements a complete user authentication and configuration flow, from sign-up to a protected dashboard, following the provided design specifications.

### Features

This application implements a three-stage user flow:

1. **Page 1: Authentication (Public Route)**

    * A single, unified page at the root (`/`).

    * Users can toggle between **Sign-In** and **Sign-Up** forms.

    * Includes robust client-side validation for all fields (e.g., email format, password length, matching passwords) with clear error messages to enhance user experience.

2. **Page 2: Configuration (Protected Route)**

    * Accessible only after a successful sign-in or sign-up.

    * Requires the user to enter a configuration key.

    * The key is validated to be between 100 and 1000 characters long.

    * Users cannot proceed to the dashboard until a valid key is submitted.

3. **Page 3: Dashboard (Protected Route)**

    * Accessible only after both authentication and configuration are complete.

    * Displays a simple "Hello user" welcome message as per the design.

    * Includes a "Sign Out" button to reset the flow.

### Technical Implementation

This project was built with a focus on clean code, scalability, and modern React practices.

* **Framework: React** (using function components and hooks).

* **Styling: Inline Styling / CSS-in-JS Objects**. No external CSS frameworks like Tailwind or Bootstrap are used. All styles are managed as JavaScript objects applied directly to the components.

* **State Management:** Local component state is managed using React Hooks (`useState`, `useReducer`, or custom hooks like `useForm`).

* **Routing**: A conditional rendering logic in `App.jsx` acts as a simple router, managing the application's state (`isAuthenticated`, `isConfigured`) to display the correct page.

* **Code Structure:** The project follows a logical and scalable file structure:

    * `src/components`: Contains reusable, dumb components (e.g., `Button.jsx`, `Input.jsx`, `AuthLayout.jsx`).

    * `src/pages`: Contains smart, top-level components for each "page" (e.g., `AuthPage.jsx`, `ConfigPage.jsx`, `DashboardPage.jsx`).

    * `src/hooks`: Contains custom hooks to encapsulate logic (e.g., `useForm.jsx` for handling form state and validation).

    * `App.jsx`: The main application component that holds the core state and routing logic.

### How to Run This Project

1. **Clone the repository:**


        git clone [your-repository-url]
        cd [repository-name]


2. **Install dependencies:**

        npm install


3. **Start the development server:**

        npm start


    The application will be available at `http://localhost:3000`.

**Bonus Points Addressed**

* **Component Library Integration**: While no external library like `shadcn/ui` was used, a set of reusable, design-system-like components (`Input`, `Button`) were built from scratch in the `src/components/ui/` directory.

* **Code Refactoring and Component Structure**: The code is split into logical, single-responsibility files (components, pages, hooks) to demonstrate a clean and maintainable architecture.

* **Enhanced User Experience (UX):**

    * Real-time form validation with clear, specific error messages.

    * Loading/disabled states on buttons during form submission.

    * A protected-route flow that securely guides the user.