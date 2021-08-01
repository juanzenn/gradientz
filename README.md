# Gradientz 
Find the best, top quality gradients on the internet. Generate the code and use them in your projects.

## Brief
Gradientz is a web application developed with NextJS, focusing on user interactivity and being dynamic. It was style with TailwindCSS for a consistent UI.

The focus of this project is to make available a series of high-quality gradients for usage in applications, websites, or UI design.

It features interactivity, making the application fun to use and easy to navigate. You can select a gradient, and it pops up a modal window with all the information and the code for you to use. You can change the angle of the background and see related gradients.

## Running the project locally 

1. **Clone this repo**
```console
$ git clone https://github.com/juanzenn/gradientz
```

2. **Install dependencies**
```console
$ yarn 
```
or
```console
$ yarn install
```

3. **Run the developer server**
```console
$ yarn dev
```

## Adding more gradients

### Modify the ./public/gradients.json file

You can add your gradients by modifying the gradients.json file. Please make sure to add all the same fields (and the same format) as the ones in there. A gradient object looks like this:

```json
 {
    "title": "Mango Fun",
    "description": "Go back to the bahamas and eat son mango, dance some bachata and relax.",
    "stops": ["#ff7e07", "#ff370c"],
    "deg": "180",
    "color": ["orange"]
  }
```

## Contributions

You can open an issue if you encounter a bug. Right now, **this is a one-person project**. I will not merge any changes you do, but you can open a pull request for me to check some implementation. 

## Deploy 
You can deploy a version of this project on Vercel with a single button

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/juanzenn/gradientz)
