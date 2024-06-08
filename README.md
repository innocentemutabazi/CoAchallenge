
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
    - Node.js v22

2. **Array Manipulation**:
    - **Problem Statement**: Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return true if such a subarray exists, otherwise return false.

    - **Approach**:
        - Start with two pointers: `left` and `right` at the beginning of the array.
        - Keep a running sum by adding elements as we move the `right` pointer.
        - Adjust the sum by moving the `left` pointer if the sum is too big.
        - Check if the current sum matches the target.
        - Return true if a matching sum is found, otherwise return false.

    - **Solution**:
        ```javascript
        const hasSubarrayWithTargetSum = (arr, target) => {
            let left = 0;
            let currentSum = 0;
            for (let right = 0; right < arr.length; right++) {
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
        ```bash
        node CoAchallenge/Challenges/arrayMap.js
        ```

3. **String Transformation**:
    - **Problem Statement**: Given a string, transform it based on the following rules:
        - If the length of the string is divisible by 3, reverse the entire string.
        - If the length of the string is divisible by 5, replace each character with its ASCII code.
        - If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform both operations in the order specified above.

    - **Approach**:
        - Check if the string length is divisible by 15. If true, reverse the string and replace each character with its ASCII code.
        - If not, check if the string length is divisible by 3. If true, reverse the string.
        - If not, check if the string length is divisible by 5. If true, replace each character with its ASCII code.
        - If none of these conditions are met, return the original string.

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
        ```bash
        node CoAchallenge/Challenges/stringTransform.js
        ```


## Acknowledgements

### Fonts
- [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins)
- [Online WebFonts - DIN Condensed](https://www.onlinewebfonts.com/download/954a505bdd1fd46577f8b93badf61c8c)

## Contact

For any questions or feedback, please contact [innocentemutabazi@gmail.com](mailto:innocentemutabazi@gmail.com).
