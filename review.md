* line 30, var days is created but never used, one line below you loop for exactly that amount, better to use the variable days for that (also make it a constant)
* line 34, magic number is used to calculate degrees celcius, better to use a constant called Kelvin here, or better yet, get your json file in metric
* line 41 - 53, not ideal to use if when checking for the logo to use, rather get the right logo by using a string literal with the icon value from the json file
* line 60 - 66, variables dd and mm created and used only once, might be better to use them directly 
through the object today
* line 75 -91, seems like a loop can be used here as a lot of the same actions are repeated, also why fetch 2 json files?

# The weather application

## Practical Information

* Repository: `ajax-weather-api`
* Deadline: 3 days
* Delivery: Github page (published)
* Team: Solo

## Learning Objectives

* A typical AJAX flow: send asynchronous requests to a remote server and process the results;
* DOM manipulation: changing the DOM based on results of AJAX-requests.
* Learn to aggregate data fetched from an api

## Exercise

### Sprint 1

- create an account on this [platform](https://home.openweathermap.org/.)
- You are going to have to generate a key.
- create a home page where you ask the visitor to enter the city of his choice.

### Sprint 2

- Get the weather data using [axios](https://github.com/axios/axios) or another javascript AJAX enabled library.
- Optional: Use a cdn link to link axios to your project.
- Display the weather for the next 5 days.
- Apply styling to your project using media queries to make it responsive.

## Extra challenges

Use the API of https://unsplash.com/ to show a photo of the city they entered in the form.
Use a graph library like Google Graphs to show a line graph of the temperature over time.