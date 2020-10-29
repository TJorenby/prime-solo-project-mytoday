# myToday

## Description

Duration: Ten Days

myToday is a mobile-optimized app designed to allow users to take photos via their webcam or upload them from their computer, provide a caption, and store them in a date-sorted archive. It's perfect for those looking to capture moments of their lives using a familiar "social media app" format; but without the obligation to curate a post for the public to see. Authentication allows multiple users to 

In building this app, I leveraged skills for full stack integration, connecting a React-powered front-end through a node server to a SQL database. This app features also features authentication and new users will be required to register prior to gaining access. 

## Built With

This app features...
    - React
    - Node
    - Express
    - Redux-Saga
    - React-Redux
    - PostgreSQL

Components were styled using...
    - SCSS
    - React-Icons (Box Icons)
    - Material UI
    

## Prerequisites 

To run this app, you will need:
    -Node.js
    -Postgres
    
## Install

To run this application:

    - Create a database using the provided .sql file
    - Run `npm install` from the project root directory
    - Run `npm run server` to run the node server
    - Run `npm run client` to launch the React app. 
    

## Usage

1. New Users should register themselves as a myToday user. 
2. Registered users can login using their usernames and passwords
3. Upon logging in, users will be directed to the "Home" screen, which displays the events that they've captured so far that day. Users can then navigate to the "New Event" (camera icon) to capture a new photo, or upload a photo from their device. 
4. Once a photo has been chosen for the "event", users can choose to provide a caption, or simply "Add" the event to their daily timeline. The event is also stored in the "Archive" where it will remain until the user chooses to delete it. 
5. Clicking on the event will display the photo, time it was captured, and the caption. Edit and Delete options are also present. 

## Acknowledgement

A very special thanks to the instructors and staff at Prime Digital Academy, my cohort-mates, and my ever-supportive wife. 

## Demo

![demo](https://www.youtube.com/watch?v=RtXdq-n7Qh0)
