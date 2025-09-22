# Workspace App

A modern React web application built with [Vite](https://vitejs.dev/) for showcasing co-working space features, including location autocomplete functionality using LocationIQ API. Designed responsive UI with modern animations.

## Features

- **Header**: Responsive navigation with logo, menu toggle, and action buttons.
- **Main Section**: Highlights workspace features, productivity, customer ratings, testimonials, and more.
- **Footer**: Multi-column navigation, social media links, and copyright.
- **Location Autocomplete**: 
  - Custom React hook (`useLocationAutocomplete`) for location search suggestions using LocationIQ API.
  - Debounced API requests and abortable fetch for efficient UX.

## Technologies Used

- React
- Vite (build tool)
- CSS (assumed for styling)
- LocationIQ API (for location autocomplete)
- SVG images and icons

## Getting Started

### Prerequisites

- Node.js and npm
- LocationIQ API key (set as `VITE_LOCATIONIQ_KEY` in your environment)

### Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   ```
2. Navigate to the project folder:
   ```sh
   cd workspace-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

### Environment Setup

Create a `.env` file in the root and add your LocationIQ API key:
```
VITE_LOCATIONIQ_KEY=your_locationiq_api_key
```

### Running the App

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

- Use the navigation menu to explore sections.
- Footer provides quick access to resources, help, and social media.
- Location autocomplete can be used for searching locations with instant suggestions.

## Project Structure

```
src/
  components/
    hero/
      Header.jsx
    main/
      Main.jsx
      Feature.jsx
      Form.jsx
    Footer.jsx
    Content.jsx
  useLocationAutoComplete.js
  ...
public/
  (SVG images and icons)
```

## License

Demo project for workspace showcase.