Task requirements

Feel free to spend all the time you want on the exercise as long as the following requirements are met.

Please complete the user story below.
Your code should compile (if necessary) and run in one step. It is ok if there is a build process.
JavaScript should be used as a platform.
Feel free to use whatever frameworks / libraries / packages you like.
Styles can be added with frameworks, libraries, preprocessors or postprocessors, be imaginative!
You must use this placeholder URL for getting the images: https://jsonplaceholder.typicode.com/photos

 

Nice to have:


The images can’t pop or flicker, they must appear smoothly on the screen.




User Story

As a user visiting the root URL
I can see a grid of images that fill the screen on load
When I scroll the browser, I see more images loaded
When I click an image It is removed from the list and disappears

Acceptance criteria

The grid should be responsive, showing 2 columns on small devices and more as the device width growths



## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Appendix

Any additional information goes here


## Authors

- [@octokatherine](https://www.github.com/octokatherine)

@sagader
## Installation



npm create vite@latest

npm install

npm i axios
npm install react-router-dom@6