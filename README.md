#  Simple Calculator (HTML, CSS & JavaScript)

A clean, responsive calculator built using **HTML**, **CSS**, and **Vanilla JavaScript**.
This project demonstrates basic front-end development concepts such as DOM manipulation, event handling, and UI styling.

---

##  Features

*  Basic arithmetic operations: Addition, Subtraction, Multiplication, Division
*  Percentage (%) calculation
*  Clear (`C`) and Delete (`DEL`) functionality
*  Decimal number support
*  Input length limit (max 16 characters)
*  Responsive and modern UI
*  Error handling for invalid expressions

---

## 🛠️ Technologies Used

* **HTML** – Structure of the calculator
* **CSS** – Styling and layout (Grid & Flexbox)
* **JavaScript** – Calculator logic and DOM interaction

---

## Project Structure

```
calculator/
│
├── index.html     # Calculator structure
├── calc.css       # Styling and layout
├── calc.js        # Calculator logic
└── README.md      # Project documentation
```

---

##  How It Works

### 1️ Display

* Uses an `<input>` field to show numbers and results.
* Input is set to `readonly` so users can only interact using buttons.

### 2️ Buttons

* Each button triggers a JavaScript function using `onclick`.
* Numbers and operators are appended to the display dynamically.

### 3️ JavaScript Logic

* User input is collected as a string.
* `%` is converted internally to multiplication by `0.01`.
* The expression is evaluated safely using JavaScript logic.
* Errors such as invalid expressions or division by zero are handled gracefully.

---

##  How to Run the Project

1. Download or clone the repository:

   ```bash
   git clone https://github.com/your-username/calculator.git
   ```
2. Open the folder
3. Double-click `index.html`
   **OR** open it in any web browser

 No installation required

---

##  Learning Outcomes

This project helped practice:

* DOM manipulation
* Event handling in JavaScript
* CSS Grid & Flexbox
* UI/UX design principles
* Input validation and error handling

---

##  Possible Improvements

* Keyboard input support
* Scientific calculator functions
* Dark mode
* Improved error messages
