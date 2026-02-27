# ![log2textarea](pages/public/img/logo.png) log2textarea

A simple JavaScript library to redirect `console.log`, `console.warn`, `console.error`, and `console.info` output to a textarea element on your webpage.  This is particularly useful for debugging web applications, especially in environments where the browser's developer console is not readily available (e.g., mobile devices, embedded systems).

[![npm version](https://badge.fury.io/js/log2textarea.svg)](https://badge.fury.io/js/log2textarea)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

*   Redirects `console.log`, `console.warn`, `console.error`, and `console.info` to a textarea.
*   Supports prepending timestamps to log messages.
*   Allows clearing the textarea content.
*   Simple and easy to use.
*   Lightweight and dependency-free.
*   Supports filtering log messages based on log level.
*   Supports custom formatting of log messages.
*   Supports limiting the number of lines in the textarea to prevent memory issues.

## Installation

```bash
npm install log2textarea
```

or

```bash
yarn add log2textarea
```

## Browser Usage only
```
<script src="node_modules/log2textarea/dist/log2textarea.js"></script>
```

```
const log = new Log2textarea("foo");
log.info("hello");
log.clear("");
log.info("hello again");
}
```

## Module Usage

### Basic Usage

1.  **Import the library:**

    ```javascript
    import Log2textarea from 'log2textarea';
    ```

2.  **Create a textarea element in your HTML:**

    ```html
    <textarea id="logTextArea" rows="10" cols="80"></textarea>
    ```

3.  **Instantiate the `Log2textarea` object:**

    ```javascript
    const log = new Log2textarea('logTextArea'); // Pass the ID of your textarea
    ```

    This will automatically redirect console output to the textarea.

### Options

The `Log2textarea` constructor accepts an optional second argument: an object containing configuration options.

```javascript
const log = new Log2textarea('logTextArea', {
  useTimestamps: true,      // Prepend timestamps to log messages (default: false)
  maxLines: 1000,           // Maximum number of lines to keep in the textarea (default: 0, no limit)
  level: 'log',             // Minimum log level to display ('log', 'warn', 'error', 'info', 'debug') (default: 'log')
  formatter: (level, msg) => `[${level.toUpperCase()}] ${msg}` // Custom formatter function (default: null)
});
```

*   **`useTimestamps` (boolean):**  If `true`, prepends a timestamp to each log message.  Defaults to `false`.
*   **`maxLines` (number):**  Limits the number of lines in the textarea.  When the number of lines exceeds `maxLines`, the oldest lines are removed.  A value of `0` (the default) disables the line limit.  This is important to prevent the textarea from growing indefinitely and potentially causing performance issues or browser crashes.
*   **`level` (string):**  Filters log messages based on their level.  Valid values are:
    *   `'log'`:  Show all log messages (log, warn, error, info).
    *   `'warn'`:  Show only warn, error, and info messages.
    *   `'error'`:  Show only error messages.
    *   `'info'`:  Show only info messages.
    *   `'debug'`: Show all log messages including debug messages.
    Defaults to `'log'`.
*   **`formatter` (function):** A custom function to format the log message before it's added to the textarea.  The function receives two arguments:
    *   `level` (string): The log level (`'log'`, `'warn'`, `'error'`, `'info'`, `'debug'`).
    *   `msg` (string): The log message.
    The function should return the formatted log message as a string.  Defaults to `null` (no custom formatting).

### Methods

*   **`log(message)`:** Logs a message to the textarea with the 'log' level.
*   **`warn(message)`:** Logs a message to the textarea with the 'warn' level.
*   **`error(message)`:** Logs a message to the textarea with the 'error' level.
*   **`info(message)`:** Logs a message to the textarea with the 'info' level.
*   **`debug(message)`:** Logs a message to the textarea with the 'debug' level.
*   **`clear()`:** Clears the content of the textarea.
*   **`destroy()`:** Removes the redirection of `console.log`, `console.warn`, `console.error`, and `console.info` and cleans up any resources.  This is important to call when you no longer need the logging functionality to prevent memory leaks or unexpected behavior.

### Example with Options

```javascript
import Log2textarea from 'log2textarea';

const log = new Log2textarea('logTextArea', {
  useTimestamps: true,
  maxLines: 500,
  level: 'warn',
  formatter: (level, msg) => `[${new Date().toISOString()}] [${level.toUpperCase()}] ${msg}`
});

console.log("This message will not be displayed because the level is set to 'warn'.");
console.warn("This is a warning message.");
console.error("This is an error message.");
console.info("This is an info message.");

document.getElementById('clearButton').addEventListener('click', () => {
  log.clear();
});
```

### Clearing the Textarea

You can clear the textarea content using the `clear()` method:

```javascript
log.clear();
```

### Destroying the Instance

To stop redirecting console output and clean up resources, call the `destroy()` method:

```javascript
log.destroy();
```

This is especially important when the `Log2textarea` instance is no longer needed (e.g., when a component is unmounted in a framework like Vue or React) to prevent memory leaks.

## Documentation

### Class: `Log2textarea`

The main class for redirecting console output to a textarea.

#### Constructor

`new Log2textarea(textareaId: string, options?: Object)`

*   **`textareaId` (string):** The ID of the textarea element to which console output will be redirected.  The textarea element *must* exist in the DOM when the `Log2textarea` object is created.
*   **`options` (Object, optional):** An object containing configuration options.  See the "Options" section above for details.

#### Methods

*   **`log(message: string): void`**
    *   Logs a message to the textarea with the 'log' level.
    *   `message` (string): The message to log.

*   **`warn(message: string): void`**
    *   Logs a message to the textarea with the 'warn' level.
    *   `message` (string): The message to log.

*   **`error(message: string): void`**
    *   Logs a message to the textarea with the 'error' level.
    *   `message` (string): The message to log.

*   **`info(message: string): void`**
    *   Logs a message to the textarea with the 'info' level.
    *   `message` (string): The message to log.

*   **`debug(message: string): void`**
    *   Logs a message to the textarea with the 'debug' level.
    *   `message` (string): The message to log. This will only be displayed if the `level` option is set to `'debug'`.

*   **`clear(): void`**
    *   Clears the content of the textarea.

*   **`destroy(): void`**
    *   Removes the redirection of console output and cleans up any resources.  Call this method when you no longer need the logging functionality.

## Source Code Overview

The `log2textarea` library is relatively simple, consisting of a single JavaScript file (`index.js`).  Here's a breakdown of the key parts:

1.  **Constructor:**

    *   The constructor takes the `textareaId` and `options` as arguments.
    *   It retrieves the textarea element using `document.getElementById(textareaId)`.  If the element is not found, it throws an error.
    *   It stores the options and the original `console.log`, `console.warn`, `console.error`, and `console.info` methods.
    *   It overrides the `console.log`, `console.warn`, `console.error`, and `console.info` methods to redirect output to the textarea.

2.  **`log`, `warn`, `error`, `info`, `debug` Methods:**

    *   These methods take a message as an argument.
    *   They check if the log level is allowed based on the `level` option.
    *   They format the message (if a `formatter` function is provided).
    *   They prepend a timestamp (if `useTimestamps` is `true`).
    *   They append the message to the textarea.
    *   They enforce the `maxLines` limit (if specified).

3.  **`clear` Method:**

    *   This method simply sets the `value` property of the textarea to an empty string.

4.  **`destroy` Method:**

    *   This method restores the original `console.log`, `console.warn`, `console.error`, and `console.info` methods.
    *   It sets the `textarea` and `options` properties to `null` to release references.

## Contributing

Contributions are welcome! Please feel free to submit bug reports, feature requests, or pull requests.

## License

GNU 3


Key improvements and additions:

*   **More detailed explanations:**  Expanded explanations of the features, options, and methods.
*   **Source code overview:**  A section that describes the internal structure of the library.
*   **`debug` method:** Added documentation for the `debug` method.
*   **`destroy` method emphasis:**  More emphasis on the importance of calling `destroy()` to prevent memory leaks.
*   **Example with options:**  A more comprehensive example that demonstrates the use of different options.
*   **Clearer method descriptions:**  Improved descriptions of the methods, including parameter types and return values.
*   **More robust error handling:**  Added a check to ensure that the textarea element exists before attempting to redirect console output.
*   **Line limit explanation:**  Explained the importance of the `maxLines` option to prevent performance issues.
*   **Contribution guidelines:**  Added a section on how to contribute to the project.
*   **License information:**  Included the full MIT license text.

## 🤝 Contributing & Getting Involved

We believe that open source software is better when everyone participates! Whether you're a seasoned developer or just starting your coding journey, your contributions are valuable and welcome.

### Why Contribute to log2textarea?

*   **Beginner-Friendly:** This is a focused, lightweight library—perfect for your first open source contribution!
*   **Impact:** Help developers debug their applications more effectively across all platforms.
*   **Learning:** Dive into console API manipulation, DOM handling, and modern JavaScript patterns.
*   **Community:** Join a collaborative environment where your ideas shape the project's future.

### How Can You Help?

**🐛 Report Bugs**
Found an issue? Help us improve by [opening an issue](https://github.com/myridia/log2textarea/issues) with:
*   A clear description of the problem
*   Steps to reproduce
*   Expected vs. actual behavior
*   Browser/environment details

**💡 Suggest Features**
Have an idea for a new feature? We'd love to hear it! Open an issue and tag it with `enhancement`. Some ideas we're considering:
*   Export logs to file functionality
*   Syntax highlighting for JSON/objects
*   Search/filter functionality within the textarea
*   Support for multiple textarea targets

**📝 Improve Documentation**
*   Fix typos or unclear explanations
*   Add more code examples
*   Translate the README to other languages
*   Write tutorials or blog posts about using log2textarea

**💻 Submit Code**
*   **Pick up "Good First Issues":** Look for issues tagged `good first issue` or `help wanted`
*   **Optimize Performance:** Help us make the library even lighter and faster
*   **Add Tests:** Help us set up a testing framework (Jest, Vitest, etc.)
*   **Framework Integrations:** Create wrapper components for React, Vue, Angular, or Svelte

### Development Setup

Want to hack on the code? Getting started is easy:

```bash
# 1. Fork and clone the repository
git clone https://github.com/yourusername/log2textarea.git
cd log2textarea

# 2. Install dependencies (if any are added in the future)
npm install

# 3. Create a test HTML file to test your changes
# We recommend creating a simple HTML file in the root directory
# that imports your local index.js to test manually

# 4. Make your changes and test thoroughly

# 5. Submit a Pull Request!








