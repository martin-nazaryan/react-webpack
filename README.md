
# React + Webpack

This project is a React application bundled with Webpack and powered by JSON-Server as a mock API. Below you'll find instructions on how to set up, run, and configure the application.

## Notes

### styled-components and tailwind.css
I initially used styled-components as required by the task specifications, and you can find several components utilizing styled-components in the components/shared folder. However, due to time constraints, I transitioned to Tailwind CSS for faster development.

### Search by user
The search functionality currently only works when you type the whole `firstName` (e.g., "John") and is case-sensitive. This limitation exists because the app uses the beta version of JSON-Server as the backend, which does not yet support partial matches or `LIKE` queries.

### Missing Functionalities
Due to time constraints, the following features are currently not implemented:

1. A back button for easier navigation.
2. Animations and transitions between pages.
3. A theme switcher for light and dark mode.

### Potential Improvements
If there was time, I would improve the following:

1. Refactor Code by reviewing and refining the existing codebase to improve maintainability, readability, and performance.

2. Expand and Standardize UI Components by adding more reusable UI elements to the shared folder and utilizing them consistently across the project for a more cohesive design.

3. Separate Components with Long Tailwind Classes by breaking down components that have extensive Tailwind CSS classes into smaller, more manageable pieces, enhancing readability and reusability.

4. Implement React.lazy() and Suspense to optimize the loading of components, enabling code-splitting and improving the application's performance.

## Getting Started

Follow these instructions to set up and run the project locally.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/martin-nazaryan/react-webpack.git
   cd your-repo-name
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

   Adjust the environment variables in the `.env` file according to your local setup.

## Running the Application

You need to start both the React app and the JSON-Server with the following scripts.

### Start the React App

To start the React application in development mode:

```bash
npm start
```

This will run the app in development mode, and you can access it in your browser at `http://localhost:3000`.

### Start the JSON-Server

To start the JSON-Server:

```bash
npm run start:api
```

This will run the JSON-Server, which can be accessed at `http://localhost:8000`.
