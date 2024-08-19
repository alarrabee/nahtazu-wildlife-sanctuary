Nahtazu Wildlife Sanctuary 🦁
# Nahtazu Wildlife Sanctuary

Welcome to the Nahtazu Wildlife Sanctuary! This web application provides an interactive experience where users can virtually explore various animals and learn more about them. Additionally, the application integrates live streaming functionality that allows users to watch real-time footage of selected animals directly from their natural habitats via YouTube streams. The application also integrates Stripe for handling donations and uses Ant Design for a sleek and customizable UI.

![home-page-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/0aeb434e-9a70-41ec-bf6e-3ac25d7dcf42)


## Table of Contents
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Deployed Application](#deployed-application)
- [Installation Instructions](#installation-instructions)
- [Project Structure](#project-structure)
- [Streaming Integration Details](#streaming-integration-details)
- [Stripe Integration](#stripe-integration)
- [Leaflet.js Integration](#leafletjs-integration)
- [Ant Design Integration](#ant-design-integration)
- [License](#license)
- [Contact](#contact)

## Features
- Animal List: A comprehensive list of animals presented on the homepage.
- Animal Details: Clicking on any animal takes you to a dedicated page where you can learn more about the animal, including interesting facts and additional information.
- Live Stream: Each animal's dedicated page features a live stream from YouTube, allowing users to observe the animal in its habitat in real-time.
- StreamWeasles Integration: The live streams are powered by StreamWeasles, which dynamically grabs YouTube channel IDs and stream IDs to display the correct video feed.
- Donations via Stripe: Users can make donations through Stripe, which is integrated into the application to securely handle transactions.
- Interactive Maps via Leaflet.js: Users can view the natural habitats of animals on an interactive map powered by Leaflet.js.
- Customizable UI with Ant Design: The user interface is built with Ant Design, offering a modern, sleek, and easily customizable experience.

## Technology Stack
Front-End: React, JavaScript, TypeScript, HTML, CSS
Back-End: Node.js, Express.js, Apollo Server
Database: MongoDB (via Mongoose)
Streaming Service: YouTube (integrated via StreamWeasles)
Payment Processing: Stripe
Mapping Service: Leaflet.js
UI Library: Ant Design

## Deployed Application
[Nahtazu Wildlife Sanctuary](https://nahtazu-wildlife-sanctuary.onrender.com)

## Installation Instructions
Follow these steps to set up the application locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/alarrabee/nahtazu-wildlife-sanctuary.git 
    cd nahtazu-wildlife-sanctuary
    ```

2. Install dependencies:
    Navigate to the root directory and run:
    ```bash
    npm install
    ```
    This will install the dependencies for both the client and server.

3. Seed the Database (if applicable):
    Navigate to the server directory and run:
    ```bash
    npm run seed
    ```
    This command will populate the MongoDB database with initial data.

4. Start the development server:
    Run the following command from the root directory to start both the client and server in development mode:
    ```bash
    npm run develop
    ```

5. Access the Application:
    Once the development server is running, open your browser and navigate to:
    ```
    http://localhost:3000
    ```
    You will be presented with a list of animals to explore.

## Project Structure
```
├── client                  # React front-end code
│   ├── node_modules        # Node.js modules for front-end
│   ├── public              # Static files
│   │   └── vite.svg        # Vite logo
│   ├── src                 # Source files for React
│   ├── .eslintrc.cjs       # ESLint configuration
│   ├── .gitignore          # Git ignore file
│   ├── index.html          # Main HTML file
│   ├── package-lock.json   # Lockfile for node modules
│   ├── package.json        # Project dependencies and scripts
│   ├── README.md           # Documentation file
│   ├── tsconfig.json       # TypeScript configuration
│   ├── tsconfig.node.json  # TypeScript configuration for node
│   └── vite.config.ts      # Vite configuration
│
├── server                  # Express server code
│   ├── config              # Configuration files (e.g., environment variables)
│   ├── models              # Mongoose models for the database
│   ├── node_modules        # Node.js modules for back-end
│   ├── schemas             # GraphQL schemas
│   ├── seeders             # Database seed files
│   ├── utils               # Utility functions and middleware
│   ├── package-lock.json   # Lockfile for node modules
│   ├── package.json        # Project dependencies and scripts
│   ├── README.md           # Documentation file
│   └── server.js
│   ├── .gitignore          # Git ignore file
│   ├── LICENSE             # License file
│   ├── package-lock.json   # Lockfile for node modules
│   ├── package.json        # Project dependencies and scripts
│   └── README.md           # Documentation file           # Main server file
```

## Leaflet.js Integration
Leaflet.js is an open-source JavaScript library used for integrating mobile-friendly interactive maps into the Nahtazu Wildlife Sanctuary application. This library allows us to display maps that are both lightweight and performant across all devices.

### Usage in the Application
- Animal Habitat Visualization: Leaflet.js is used to visualize the natural habitats of animals directly on a map. When users view specific animal pages, they can see where these animals are typically found in the wild, adding an extra layer of educational content to the site.
- Custom Map Markers: Custom markers can be placed on the map to highlight significant points of interest or the precise locations where live streams are captured.

Leaflet.js provides an easy-to-use API and a rich ecosystem of plugins, making it a perfect choice for integrating interactive maps into our application.

## Streaming Integration Details
Each animal page fetches and displays a live stream from YouTube based on the following StreamWeasles configuration:

```javascript
'coral': {
     channelId: 'UC-2KSeUU5SMCX6XLRD-AEvw',
     streamId: 'DHUnz4dyb54'
},
'elephant': {
     channelId: 'UC3DWrk_z1sH3ix1QNQTFr7w',
     streamId: 'VUJbDTIYlM4'
},
...
```

The live streams are embedded using YouTube's iframe API, dynamically loading the stream based on the selected animal.

![animals-search-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/1766081d-9123-441f-a6f3-4b0705e802b9)


## Stripe Integration
This application uses Stripe to securely handle payments and donations. When users choose to support the sanctuary by making a donation, Stripe processes the payment, ensuring that all transactions are handled securely and efficiently.

<img width="1279" alt="signup" src="https://github.com/user-attachments/assets/5baf90e2-f0fd-4ebe-b406-62540b699856">


## Ant Design Integration
Ant Design is a comprehensive and customizable UI library for building user interfaces with a clean and modern look.

### Usage in the Application
- Theme Customization: Ant Design allows us to customize the theme of the application, enabling us to adjust the primary color, layout, and other design elements to match the branding and aesthetic goals of Nahtazu Wildlife Sanctuary.
- UI Components: The application leverages Ant Design’s ready-made components such as buttons, forms, modals, and more to create a cohesive and user-friendly interface. These components are designed with accessibility and responsiveness in mind, ensuring a seamless user experience across devices.

## License
This project is licensed under the MIT License.

## Contact
For any inquiries or feedback, feel free to reach out to any of the contributors:

Alexandra Larrabee: [GitHub Profile](https://github.com/alarrabee)
Austin L.: [GitHub Profile](https://github.com/austinl)
Jaci Obeidzinski: [GitHub Profile](https://github.com/jaci23)
Ben Parks: [GitHub Profile](https://github.com/benparks87)
Elijah Ward: [GitHub Profile](https://github.com/eliward)
