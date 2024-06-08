
# CoAchallenge

## Project Overview

This project is an interactive photo gallery created as part of a coding challenge to assess skills in HTML, CSS, and JavaScript. The gallery adapts seamlessly to different screen sizes, matches provided Figma designs, and includes hover interactions to display additional details about each photo. Additionally, the project includes solutions to two JavaScript coding challenges.

## Table of Contents
- [Project Overview](#project-overview)
- [Project Structure](#project-structure)
- [Image Gallery Features](#image-gallery-features)
- [How to Run the Gallery Locally](#how-to-run-the-gallery-locally)
- [How to Run the Coding Challenges](#how-to-run-the-coding-challenges)
  - [Array Manipulation](#array-manipulation)
  - [String Transformation](#string-transformation)
- [Gallery Deployment](#gallery-deployment)
- [Gallery Screenshots](#gallery-screenshots)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Project Structure

The project is structured as follows:
```bash 
CoAchallenge/
│
├── Image Gallery/
│ ├── images/
│ │ ├── fox.png
│ │ ├── whale.png
│ │ ├── baboon.png
│ │ └── image.png
│ │
│ ├── index.html
│ ├── gallery.css
│ └── gallery.js
│
├── Challenges/
│ ├── arrayMap.js
│ └── stringTransform.js
│
└── README.md
```

## Image Gallery Features

1. **Responsive Design**: Adapts to different screen sizes and devices.
2. **Figma Design Accuracy**: Matches the provided Figma designs pixel-perfectly.
3. **Hover Interaction**: Displays additional details when hovering over a photo.
4. **Cross-browser Compatibility**: Ensures consistent performance across modern web browsers (Chrome, Firefox, Safari, Edge).
5. **Code Quality**: Clean, readable, and well-structured code following best practices.

## How to Run the Gallery Locally

1. **Requirements**:
    - A web browser

2. **Clone the repository**:
    ```bash
    git clone https://github.com/innocentemutabazi/CoAchallenge.git
    ```

3. **Navigate to the project directory**:
    ```bash
    cd CoAchallenge/Image\ Gallery
    ```

4. **Open the HTML file**:
    - **Using File Explorer**: Navigate to the `CoAchallenge/Image Gallery` directory and double-click on `index.html` to open it in your default web browser.
    - **Using Right-click**: Right-click on `index.html` and select "Open with" to choose a specific web browser.
    - **Using Browser**: Open your web browser and drag the `index.html` file into the browser window.
    - **Using Command Line**:
        - For macOS/Linux:
            ```bash
            open index.html
            ```
        - For Windows:
            ```bash
            start index.html
            ```

5. **Ensure Proper Loading**:
    - **Note**: Wait for the webpage to finish loading to ensure the fonts and styles are displayed correctly.
6.  **Approach for Building the Gallery**
-   HTML: Structured with a container holding multiple article elements, each representing an image.
-   CSS: Used Flexbox for layout, defined hover effects to transform images and display additional information.
-   JavaScript: Implemented event delegation for performance whereby I added the event listener on the main container instead of adding it to all of the images, dynamically adding and removing an action button on hover.
    -  Approach
        -  Wait for Page Load: The code waits for the entire webpage to load before running. This makes sure all elements are ready to interact with.
        -  Select Gallery: It picks the parent element that has the class .gallery-1.
        -  Hover Event: When you move your mouse over an image in the gallery, the code checks if the image has an overlay with the class .image-interaction. If the overlay is there but doesn't have an action button, it adds one.
        -  Action Button Addition:  The action button is a simple paragraph with the text "Know More →".
        -  Leave Event: When you move your mouse away from the image, the code removes the action button from the overlay, keeping the interface clean.
        -  Event Delegation: Instead of adding event listeners to every single image, the code adds just two listeners to the whole gallery. This way, it listens for mouse movements on the entire gallery and decides what to do based on which image you are hovering over. This makes the code run faster and use less memory.
## Gallery Deployment

The gallery is deployed and can be accessed at the following URL: [Deployed Gallery](https://jolly-mandazi-a9fb43.netlify.app/)

## Gallery Screenshots

| View              | Screenshot                              | Screenshot with Hover Effect                      |
|-------------------|-----------------------------------------|---------------------------------------------------|
| Mobile            | ![Mobile View](https://github.com/innocentemutabazi/CoAchallenge/assets/159420918/d23f364c-a272-4b34-b361-372e121e18cc) | ![Mobile View with Hover Effect](https://github.com/innocentemutabazi/CoAchallenge/assets/159420918/0209cae2-d67c-49fa-b6e5-f61ef087bab6) |
| Tablet            | ![Tablet View](https://github.com/innocentemutabazi/CoAchallenge/assets/159420918/fb10f3e0-a1ce-4ec5-8d94-f83684dd179e) | ![Tablet View with Hover Effect](https://github.com/innocentemutabazi/CoAchallenge/assets/159420918/048211ea-21e6-4c09-9d52-32cb039bac79)|
| Laptop            | ![Laptop View](https://github.com/innocentemutabazi/CoAchallenge/assets/159420918/71f2c46d-6fe7-4335-83bb-1e3c7de35ee8) | ![Laptop View with Hover Effect](https://github.com/innocentemutabazi/CoAchallenge/assets/159420918/ea9b44f3-940c-4bd1-9c7a-9e7cf9e7a911) |


## How to Run the Coding Challenges

1. **Requirements**:
    - Node.js v22 (You can download it from [Node.js official website](https://nodejs.org/en/download/package-manager/current) if you haven't already.)

2. ### **Array Manipulation**:
    - **Problem Statement**: Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return true if such a subarray exists, otherwise, return false.

    - **Approach**:
      -  Initialization: The function starts by initializing two variables: ```left``` to mark the start of the potential subarray and ```currentSum``` to keep track of the sum of numbers from the start of the array to the current position.
      -  Checking Each Number: The function iterates through the array from the first number to the last, represented by right. This iteration represents moving a "window" of numbers being considered.
      -  Handling Special Case: Before proceeding, it checks if the target sum is 0 and any number in the array is greater than 0. If so, it immediately returns false since it's impossible to reach a sum of 0 with any positive numbers.
      -  Updating Current Sum: As it moves through the array, the function keeps updating ```currentSum``` by adding the current number to it.
      -  Adjusting the Window: If ```currentSum``` becomes larger than the target sum, the function adjusts the start of the window by moving the left marker forward. This process involves subtracting the number at the left position from ```currentSum``` and incrementing left, effectively discarding numbers that contribute to an excess sum.
      -  Finding a Match: Once ```currentSum``` equals the target sum, the function concludes that a valid subarray has been found and returns ```true```.
      -  Conclusion: If the function scans through the entire array without finding a matching subarray, it returns false.

    - **Solution**:
        ```javascript
        const hasSubarrayWithTargetSum = (arr, target) => {
            let left = 0;
            let currentSum = 0;
            for (let right = 0; right < arr.length; right++) {
                if (arr[right]>0 && target === 0) return false
                currentSum += arr[right];
                while (currentSum > target && left <= right) {
                    currentSum -= arr[left];
                    left++;
                }
                if (currentSum === target) return true;
            }
            return false;
        };

        console.log(hasSubarrayWithTargetSum([1, 2, 3, 4, 5, 6, 34], 0));
        ```

    - **How to Run**:
      -  Navigate to the directory where you cloned the project using the following command:
      ```bash
        cd CoAchallenge/Challenges
      ```
      -  Run the Array Manipulation script using Node.js by executing the following command:
        ```bash
        node arrayMap.js
        ```

3. ### **String Transformation**:
    - **Problem Statement**: Given a string, transform it based on the following rules:
        - If the length of the string is divisible by 3, reverse the entire string.
        - If the length of the string is divisible by 5, replace each character with its ASCII code.
        - If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform both operations in the order specified above.

    - **Approach**:
      -  Input Parameter: The function takes one parameter, inputString, which is the string to be transformed.
      -  Removing Spaces: Initially, all spaces within the inputString are removed using the replaceAll method. This ensures that the transformation logic focuses solely on the characters themselves, disregarding any whitespace.
      -  Character Array Creation: The modified string (without spaces) is then converted into an array of characters using the spread operator (...) inside square brackets. This array, named characters, holds individual characters of the string.
        <br> **Transformation Logic:** <br>
      -  Divisible by 15: If the length of the original inputString (before spaces were removed) is divisible by 15 this is because a number that is divisible by both 3 and 5 is also divisible by 15, the function performs two transformations sequentially:
          -  First, it reverses the order of the characters in the characters array using the .reverse() method.
Then, it converts each character to its ASCII code representation using the .charCodeAt(0) method, maps this conversion to every element in the array using the map() method, and joins them into a single string with spaces between each ASCII code using .join(' ').
      -  Divisible by 3: If the length is divisible by 3, the function simply reverses the order of the characters in the characters array using the reverse() method and joins them back into a string without any spaces using the join('') method.
      -  Divisible by 5: If the length is divisible by 5, the function converts each character to its ASCII code representation and joins them into a single string with spaces between each ASCII code, similar to the first condition but without reversing the order.
      -  No Divisibility Condition Met: If none of the divisibility conditions are met, the function returns the original inputString unchanged.
      -  Return Value: Depending on the conditions evaluated, the function either returns the transformed string or the original string if no transformation was applied.g.

    - **Solution**:
        ```javascript
        const stringTransform = inputString => {
            let characters = [...(inputString.replaceAll(' ', ''))];
            if (inputString.length % 15 === 0) { 
              return characters.reverse().map(char => char.charCodeAt(0).toString()).join(' ');
            } else if (inputString.length % 3 === 0) { 
              return characters.reverse().join('');
            } else if (inputString.length % 5 === 0) { 
              return characters.map(char => char.charCodeAt(0).toString()).join(' ');
            }
            return inputString;
        };
        ```

  - **How to Run**:
      -  Navigate to the directory where you cloned the project using the following command:
      ```bash
        cd CoAchallenge/Challenges
      ```
      -  Run the String Transformation script using Node.js by executing the following command:
       ```bash
       node stringTransform.js
      ```

## Acknowledgements

### Fonts
- [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins)
- [Online WebFonts - DIN Condensed](https://www.onlinewebfonts.com/download/954a505bdd1fd46577f8b93badf61c8c)

## Contact

For any questions or feedback, please contact [innocentemutabazi@gmail.com](mailto:innocentemutabazi@gmail.com).
