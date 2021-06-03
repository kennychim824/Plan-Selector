### `npm install`

install all the dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Overview

Plan selector is a response component to show the properties of serveral customised plan
User can take a JSON format as an input to show 2-5 plan for comparsion
Warning may show if there have any error
Session storage supported in order to keep content in text area after refresh

### Requirements

-   node `^5.0.0`
-   npm `^3.0.0`

### How to use the component

### Valid Input example

The input should be a valid JSON format as the following

```
{
  "Standard": {
      "General": true,
      "Specialist": false,
      "Physiotherapy": false,
      "Room and Board": "750 / Day",
      "Specialist’s Fee": "4300 / Year",
      "Price": 99
  },
  "Flexi": {
      "General": true,
      "Specialist": true,
      "Physiotherapy": false,
      "Room and Board": "750 / Day",
      "Specialist’s Fee": "4300 / Year",
      "Price": 199
  },
  "Flexi Plus": {
      "General": true,
      "Specialist": true,
      "Physiotherapy": true,
      "Room and Board": "750 / Day",
      "Specialist’s Fee": "4300 / Year",
      "Price": 399
  }
}
```

### InValid Input example

Error message may show for the below cases:

-   Not a Valid JSON format
-   Syntax of JSON may not right
-   the number of plan between 2 and 5
-   the first depth of JSON should all Object

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

-   The properies of each plan should not be Object

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
