# Firebase Demo IoT Application

## What is This?

This project was produced for students of MDC 5210 at Monash University, Caulfield, VIC, Australia, studying a Masters of Interaction Design.

The project demonstrates how to get a web site going as part of an overall Internet-Of-Things project that involves:
- physical devices (the class uses Arduinos)
- take sensor readings and store them in a cloud service
- make a web application to access that sensor data
- understand enough of the real-world technical issues of doing this.

## Development Steps

To make the subject matter more accessible, the development of the project is broken
into steps.

1. Get a simple page working with authentication and host it.
2. Store and retrieve data in the Firebase database.

Each step of development will be tracked as a different release in the GitHub project.

## Firebase

The chosen cloud service for this class is Google's Firebase.
It's not really the use-case that Firebase is targeted for but it works well enough.

## What's Needed?

The following items are needed:
- A computer you have reasonable control over that you can install NodeJS
- A Google Account - say a personal GMail account.
- Time and patience.

# Getting this Going

1. Install NodeJS
2. Download or clone this code locally (there are tagged releases for different stages of development)
3. Install firebase-tools globally or locally in the project (global shown)
   ```sh
   npm install -g firebase-tools
   ```
4. Login to firebase
   ```sh
   firebase login
   ```
5. Initialise firebase but avoid overwriting web/index.html
   (be careful to move the web/index.html file first and move it back later)
   ```sh
   firebase init
   ```
   - it's possible to choose a project you created in the web console or you can create a new project at this stage.
   - choose database and hosting services
   - use the default database rules file
   - choose 'web' as the hosting directory (instead of 'public')
   - choose single page app.
6. Test the project
   ```sh
   firebase serve
   ```
7. Deploy the project
   ```sh
   firebase deploy -m "baby steps #1"
   ```

