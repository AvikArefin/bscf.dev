# Project Overview

This project is a static website for the Bangladesh Socio-Cultural Forum (BSCF). It is built using the Eleventy static site generator and Nunjucks templating engine. The website aims to provide information about the organization, its initiatives, and events.

## Key Technologies

*   **Eleventy:** A simple static site generator.
*   **Nunjucks:** A rich and powerful templating language for JavaScript.
*   **HTML:** The standard markup language for creating web pages.
*   **CSS:** Used for styling the website.
*   **JavaScript:** Used for interactive elements.

# Building and Running

To work with this project, you need to have Node.js and npm installed.

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Run in Development Mode:**
    To start a local development server with live reloading, run:
    ```bash
    npm start
    ```
    This will make the site available at `http://localhost:8080`.

3.  **Build for Production:**
    To generate a production-ready version of the site, run:
    ```bash
    npm run build
    ```
    The output will be placed in the `site` directory.

# Development Conventions

*   **Source Code:** All source files are located in the `src` directory.
*   **Templates:** Reusable templates (layouts, partials) are stored in the `src/_includes` directory.
*   **Static Assets:** CSS, images, and other static assets are located in the `src/css` and `src/contents` directories, respectively. These are copied directly to the output directory.
*   **Content:** The main content for the pages is written in Nunjucks (`.njk`) files within the `src` directory.
