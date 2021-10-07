# Hearth Frontend/Full-Stack Challenge

## Features

**Zillow?**: search by address to filter through 350 homes in the San Francisco area (if you make a search without any text, 10 homes will be provided for you). Click on any given home to access more details on that location, as well as the ability to navigate to the actual listing.

## Start-Up Guide

Clone both the [frontend](https://github.com/hm-factor/hearth_challenge_frontend) and [backend](https://github.com/hm-factor/hearth_challenge_backend) repositories into a folder.

Navigate into the frontend folder and `npm install`.

Navigate into the backend folder and `bundle install`.

Run `rails db:seed` to fill the database with csv info.

Start the backend first with **rails s** and then start the frontend witth **npm start** where you will be prompted to run the frontend on a different port (enter y).

## Notes

I would like to point out that I made a small edit to the URL column header in the csv because it was massive and had a url in it -- didn't want that to mess with my import.

The next features I want to implement are auto-completed search results/dropdown for top current hits (debounce API calls). 

I would also want to create a random query, kind of like the 'im feeling lucky' option on Google.

There are some various aesthetic transitions I would like to create as well -- would be cool to have the more details tab slide out from behind the main search bar.
