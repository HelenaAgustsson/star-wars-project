# Star Wars Film Explorer

A small React and TypeScript application for exploring Star Wars films using the SWAPI API.

## What I prioritised

I focused on the core user journey: being able to browse the available films, quickly see useful information about each film, and open an individual film to explore it in more detail.

The film overview uses a responsive card layout, with a separate route for each film. I also prioritised clear loading and error states and making the application work well across desktop, tablet and mobile.

Given the time constraint, I deliberately kept the scope small rather than adding a large number of features.

## Technical and product decisions

### Keeping API logic separate from presentation

I separated API requests, page-level state and presentational components. The page components handle fetching, loading and error states, while components such as `FilmCard` and `FilmDetails` are responsible for displaying the data.

This keeps the components relatively small and makes the data flow easier to follow.

### Film routes use the API resource ID

SWAPI provides both an `episode_id` and a URL identifying the film resource. I use the resource ID from the URL for routing, for example `/films/1`, while `episode_id` is treated as information about the film itself.

This means the route maps naturally to the corresponding SWAPI endpoint.

## Use of AI and other tools

I used ChatGPT during development as a sounding board and pair-programming tool. I used it to review parts of my implementation, generate parts of the code, troubleshoot TypeScript and React issues, and discuss UI decisions.

I largely wrote and tested the application myself and made the final implementation and product decisions. When AI suggested code or approaches, I reviewed them and adapted them to the application rather than using them without understanding them.

I also used browser developer tools to inspect the application, test responsive layouts and debug styling.

## What I would improve with more time

The next feature I would add is more exploration of related SWAPI resources. For example, a film could display the starships that appear in it, with useful information about each one.

I would also spend more time on accessibility testing, automated tests and improve the UI.

## Running locally

Install dependencies:

`npm install`

Start the development server:

`npm run dev`
