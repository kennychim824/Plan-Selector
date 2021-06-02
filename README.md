### `npm install`

install all the dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### How to use the component

The input should be a valid JSON format as the following

```
{
    "A": {
        "General": true,
        "specialist": false,
        "Physiotherapy": false,
        "Price": 99
    },
    "B": {
        "General": true,
        "specialist": true,
        "Physiotherapy": false,
        "Price": 199
    }
}
```

Error message may show for the below cases:

- Not a Valid JSON format
- Syntax of JSON may not right
- the number of plan between 2 and 5
- the first depth of JSON should all Object

```
{
   "A": {
       "General": true,
       "specialist": false,
       "Physiotherapy": false,
       "Price": 99
   },
   "B": 123 // <---Not valid
}
```

- The properies of each plan should not be Object

```
{
  "A": {
      "General": true,
      "specialist": false,
      "Physiotherapy": false,
      "Discount": { // <--- should not include object in 2nd depth
          2years: false,
          3years: true
      }
  },
}
```
