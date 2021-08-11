# Reaktor Junior Developer Pre-assignment (Fall 2021) by Matias Kari

## Intro:

This is a web app created as the pre-assignment for Reaktor's Junior Developer application for fall 2021.
The assignment instructions can be found here: https://www.reaktor.com/junior-dev-assignment-2021/ 

## Technologies:

The frontend is made entirely with React.
Fetching the rules data from Wizards of the Coast is done with the help of the Axios library and done through my own instance of a cors-anywhere proxy.
You can find the official cors-anywhere page here: https://www.npmjs.com/package/cors-anywhere

## How it works:

The web app fetches the text data, turns it into a text array and parses it based mostly on the numbers at the start of each array element.
By default the app will show all rules but clicking the titles on the left will limit the view to only a specific chapter.

## URL:

https://reaktorfall21.herokuapp.com/ 

## Author:

Matias Kari