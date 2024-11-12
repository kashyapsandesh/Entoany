# **EntoanyTextField - React Component**

**EntoanyTextField** is a customizable React input component designed to handle text input with inline dropdowns, supporting multiple languages. It provides an easy-to-use interface for managing form fields and sending data to an API. This component is ideal for applications that require dynamic text fields with dropdowns and language support.

---

## **Table of Contents**

- [**EntoanyTextField - React Component**](#entoanytextfield---react-component)
  - [**Table of Contents**](#table-of-contents)
  - [**Installation**](#installation)
  - [**Usage**](#usage)
  - [**Handling Multiple Fields**](#handling-multiple-fields)
  - [**Sending Data to API**](#sending-data-to-api)
  - [**Props**](#props)
  - [**License**](#license)

---

## **Installation**

To install **EntoanyTextField**, use npm or yarn:

```bash
npm install entoany --save
# or
yarn add entoany
```

Make sure you have React 16.8+ installed as this component uses React hooks.

## **Usage**

Basic Example
Here is a simple example of how to use the EntoanyTextField component:

```bash
import React, { useState } from 'react';
import { EntoanyTextField } from 'entoany';

function App() {
  const [name, setName] = useState("");

  const handleSelectedTextChange = (text) => {
    setName(text);
  };

  return (
    <div className="text-field-container">
      <EntoanyTextField
        preferredLanguage="en"
        hintText="Enter your name"
        onSelectedTextChange={handleSelectedTextChange}
        width="40%"
        height="20px"
        dropdownWidth="40%"
      />
      <div>Your Name: {name}</div>
    </div>
  );
}

export default App;

```

In the above example:

- The component takes a hint text and allows users to input data.
- The onSelectedTextChange handler updates the name state when the input changes.
- The width,height and dropdownWidth props control the layout of the text field and dropdown.

## **Handling Multiple Fields**

You can use multiple instances of EntoanyTextField to handle different types of inputs in your form. Here's an example with multiple fields:

```bash
import React, { useState } from 'react';
import { EntoanyTextField } from 'entoany';

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const handleSelectedTextChange = (field, text) => {
    if (field === "name") {
      setName(text);
    } else if (field === "age") {
      setAge(text);
    } else if (field === "email") {
      setEmail(text);
    }
  };

  return (
    <div className="text-field-container">
      <EntoanyTextField
        preferredLanguage="en"
        hintText="Enter your name"
        onSelectedTextChange={(text) => handleSelectedTextChange("name", text)}
        width="40%"
        height="20px"
        dropdownWidth="40%"
      />
      <EntoanyTextField
        preferredLanguage="en"
        hintText="Enter your age"
        onSelectedTextChange={(text) => handleSelectedTextChange("age", text)}
        height="20px"
        width="40%"
      />
      <EntoanyTextField
        preferredLanguage="en"
        hintText="Enter your email"
        onSelectedTextChange={(text) => handleSelectedTextChange("email", text)}
        width="40%"
        height="20px"
        dropdownWidth="40%"
      />
    </div>
  );
}

export default App;
```

## **Sending Data to API**

After collecting data from multiple fields, you can send it to your backend API. Here’s an example that demonstrates how to do this:

```bash
import React, { useState } from 'react';
import { EntoanyTextField } from 'entoany';

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const handleSelectedTextChange = (field, text) => {
    if (field === "name") {
      setName(text);
    } else if (field === "age") {
      setAge(text);
    } else if (field === "email") {
      setEmail(text);
    }
  };

  const sendDataToApi = async () => {
    const data = {
      name: name,
      age: age,
      email: email,
    };

    try {
      const response = await fetch("https://your-api-endpoint.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Data submitted successfully!");
      } else {
        console.error("Error submitting data.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="text-field-container">
      <EntoanyTextField
        preferredLanguage="en"
        hintText="Enter your name"
        onSelectedTextChange={(text) => handleSelectedTextChange("name", text)}
        width="40%"
        height="20px"
        dropdownWidth="40%"
      />
      <EntoanyTextField
        preferredLanguage="en"
        hintText="Enter your age"
        onSelectedTextChange={(text) => handleSelectedTextChange("age", text)}
        height="20px"
        width="40%"
      />
      <EntoanyTextField
        preferredLanguage="en"
        hintText="Enter your email"
        onSelectedTextChange={(text) => handleSelectedTextChange("email", text)}
        width="40%"
        height="20px"
        dropdownWidth="40%"
      />
      <button onClick={sendDataToApi}>Submit</button>
    </div>
  );
}

export default App;
```

This will send the data collected from the input fields to your backend API.

## **Props**

The following table lists the props that can be passed to the `EntoanyTextField` component.

| Prop                   | Type       | Description                                                                                                                           | Default         |
| ---------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `preferredLanguage`    | `string`   | The language in which the text field should be displayed. Typically set to `"en"` for English or `"ne"` for Nepali.                   | `"en"`          |
| `hintText`             | `string`   | Placeholder text displayed inside the input field.                                                                                    | `"Enter value"` |
| `onSelectedTextChange` | `function` | Callback function that is triggered when the text selection changes in the input field. It receives the selected text as an argument. | `null`          |
| `width`                | `string`   | Defines the width of the input field, e.g., `"40%"` or `"100%"`.                                                                      | `"100%"`        |
| `dropdownWidth`        | `string`   | Defines the width of the dropdown next to the input field, e.g., `"40%"` or `"100%"`.                                                 | `"100%"`        |
| `height`               | `string`   | Defines the height of the input field, e.g., `"40px"` or `"50px"`.                                                                    | `"40px"`        |

## **License**

This project is licensed under the MIT License - see the LICENSE file for details.
