# ⚛️ React Testing Mastery Project

This project serves as the final, completed repository for the **"React Testing for Beginners"** course by Mosh Hamedani. It has been transformed into a personal portfolio showcase of my practical expertise in writing robust and maintainable React tests.

## 🏆 Key Testing Accomplishments

The primary goal of this repository is to demonstrate mastery in implementing high-quality tests that verify application behavior.

* **Focus on Behavior (RTL Principles):** Successfully implemented user-centric testing using **React Testing Library (RTL)** and **User-Event** to ensure tests accurately reflect how a user interacts with the application.
* **Comprehensive Component Testing:** Implemented tests for critical components covering various scenarios, including:
    * **Conditional Rendering:** Verified components like `Greet` and `UserAccount` render correctly based on props (e.g., checking for an admin user or a provided name).
    * **User Interactions/State:** Tested complex user flows in components like `TermsAndConditions` (checkbox/button logic) and `ExpandableText` (show/hide functionality).
    * **List Rendering & Edge Cases:** Ensured list components (`UserList`, `ProductImageGallery`) handle both data display and empty states correctly.
* **Test Infrastructure:** Configured **Vitest** with the **JSDOM** environment to accurately simulate the browser DOM during testing.
* **Test Refactoring:** Employed test helper functions and logical grouping to ensure a clean, readable, and highly maintainable test suite.

---

## 🛠️ Tech Stack & Setup

This application uses the following technologies as provided by the course:

* **Framework:** React 18 with TypeScript
* **Testing:** Vitest, React Testing Library, User-Event
* **UI/Styling:** Tailwind CSS, Radix UI
* **Routing:** React Router DOM
* **State:** Redux Toolkit, React Query
* **Auth:** Auth0

### Running the Project Locally

1.  **Install Dependencies:**
    ```bash
    npm install
    ```
2.  **Configure Auth0:** Follow the instructions in the original course to set up Auth0 and update your `.env.local` file with your domain and client ID.
3.  **Start Application & Server:**
    ```bash
    npm start
    ```

### Running the Tests

To verify the complete test suite:

```bash
# Run all tests once
npm test

# Run tests in watch mode with the UI (Recommended during development)
npm run test:ui
