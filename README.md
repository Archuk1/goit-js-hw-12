# goit‑js‑hw‑12

goit‑js‑hw‑-12 is a frontend web application — a small image search app built with modern JavaScript. It’s intended as homework / practice of working with APIs, asynchronous JS, and a build setup.

📁 Project Structure & Technologies

The project is bootstrapped with a modern build tool (for example, with Vite) to bundle JavaScript/CSS/HTML. This gives you a build pipeline in src, along with config files like package.json, .prettierrc.json, etc. 

For HTTP requests, the project uses a library (e.g. Axios) instead of fetch, and operations are handled with async/await. 

The project uses clean formatting (Prettier) and ensures no console errors or warnings when the live page loads. 

🎯 Functionality

The app allows the user to search for images by a keyword (entered via a form). On form submission, it sends a request to an image API (e.g. Pixabay API or similar) to fetch images that match the query. 

Supports pagination / “load more” feature: by default returns a certain number of images per page (e.g. 15), and when the user clicks a “Load more” button — fetches the next page of results and appends them to the existing gallery. 

Manages global state for the search query and page number — so that if the user submits a new search keyword, the page number resets; otherwise successive “load more” clicks increment page and append new images. 

Handles UI visibility logic: the “Load more” button should be hidden if there are no images yet; it appears only after first results. On new search, the old gallery is cleared, button hidden, then re‑shown if there are results. 

✅ What It Demonstrates

How to build a small dynamic web app using vanilla JS (or minimal frameworks), with modern build tooling.

How to work with asynchronous HTTP requests via Axios and async/await.

How to implement dynamic UI behaviour: rendering results, handling pagination, conditional UI (e.g. show/hide button), and state management (search query + page).

Good project structure and code hygiene: source separation, formatting, consistent build & config.

📌 Potential Use & Extensions

You could use this project as a base for a more full‑featured image/gallery app — e.g.:

Add error handling and user notifications (e.g. show message if no images found, or if request fails).

Improve UI/UX — design a nicer gallery layout, add image lightbox (preview), lazy loading, etc.

Add infinite scroll instead of “Load more” button.

Extend to additional features: filtering by orientation, image type; adding tags, search history; caching results; or converting into a multi‑page SPA.
