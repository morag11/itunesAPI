# iTunes API Project
This is a basic fullstack app using the iTunes search API. It has search and favouriting functionality.

## HOW TO USE 📒

This app allows users to search the itunes library for a variety of media and save their favourites to view later. The interface is styled in a retro fashion that is simple to use and navigate.

First, enter what you want to search for in the seearch bar and then select which type of media you would like. if you're not sure, you can select 'all'. You can choose how many results you'd like to see by clicking on the arrows that appear next to the 'limit' number.
![Screenshot 2023-05-18 at 10 59 08](https://github.com/morag11/itunesAPI/assets/97947878/b1487d43-8b62-41a0-b75e-0f4c301de8d0)

Results will be displayed below. You can click the heart to add something to your favourites, which appears alongside the results list. To remove a favourite, simply click on the heart again.
![Screenshot 2023-05-18 at 11 10 18](https://github.com/morag11/itunesAPI/assets/97947878/504d10b9-ac92-4626-ab09-68a42784ac83)

## INSTALL / RUN / TEST 💾

### Installation
After cloning/downloading the repository navigate to the frontend and backend folders respectively. As concurrently has been installed, all required packages will install when you enter `npm start`. Ensure that you run `npm start` in both the front and backend folders.
The frontend will be available to see in [http://localhost:3000].
The server will run on [http://localhost:3001].
You must start both for the application to work.

### Test
There are both frontend and backend tests. You can run `npm test -- <file-to-test>` in your terminal front the folder the test is currently in. For example, in the frontend you can run `npm test -- App.test.js` in the frontend folder your terminal.

## SECURITY 🔐

This app has been secured by using `Helmet`. Helmet sets HTTP headers appropriately so that applications are less vulnerable. For example in this app, it is preventing cross-site scripting attacks and enforcing secure connections to the server. This API doesn't have any keys, but if it did they would be stored securely in the back end.


### Deployment 🛫

This website has been deployed and can be viewed here: https://itunes-api-web-app-2023.onrender.com
