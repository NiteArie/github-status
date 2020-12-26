# github-status (Github Status)

## General Info

Web apps acquire data in many ways. Through user input in web pages, through API's to backend systems, from files and databases, and sometimes by "scraping" websites. The objective of the GitHub Status app is to introduce you to one way to scrape information from another web site.

GitHub Status uses the NPM Request package to retrieve the current GitHub site status from the [GitHub Status](https://www.githubstatus.com/) web site. The Request package allows websites to be retrieved not to a browser window, but as a JSON document that can be readily accessed by your code.

Although this application specification relies heavily on Javascript, feel free to develop it using your language of choice!

## User Stories

* [X] User can see the current status for GitHub Git operations, API Requests, Operational Issues, PRs, Dashboard, & Projects, Operational Notifications, Operational Gists, and Operational GitHub Pages as a list in the main app window.
* [X] User can retrieve the most recent status from the GitHub Status web site by clicking a 'Get Status' button.

## Bonus Features

* [X] User can see any of the GitHub components that are not in 'Operational' status highlighted by a different color, background animation, or any other technique to make it stand out. Use your imagination!