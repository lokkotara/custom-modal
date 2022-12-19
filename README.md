# Important information about this package

<p>
  <a href="https://www.npmjs.com/package/@lokkotara/custom-modal" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@lokkotara/custom-modal.svg">
<img alt="GitHub package.json dependency version (prod)" src="https://img.shields.io/github/package-json/dependency-version/lokkotara/custom-modal/react?color=green">
  </a>
<img alt="GitHub package.json dependency version (dev dep on branch)" src="https://img.shields.io/github/package-json/dependency-version/lokkotara/custom-modal/dev/@storybook/react?color=orange">
<img alt="GitHub package.json dependency version (prod)" src="https://img.shields.io/github/package-json/dependency-version/lokkotara/custom-modal/@fortawesome/free-solid-svg-icons?color=yellow">
  <a href="https://github.com/lokkotara/custom-modal#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/lokkotara/custom-modal/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-no-red.svg" />
  </a>
<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/lokkotara/custom-modal?color=yellowgreen">
</p>


This package is meant to be used for educational purpose. It is not intended to be maintained and could be deleted in the future.


## About this package

It's a simple, lightweight, and customizable modal component for React. It is built using Storybook and fortawesome as dependencies.

-> Storybook allows us to isolate the package from the business logic and context of our application.

-> Fortawesome is a package developed by Font Awesome and provides an easy way to use icons in our component.

## Installation

To install this package, type 
```sh
 npm install @lokkotara/custom-modal
 ```

## Usage

First, import the component with 
```sh
import { Modal } from "@lokkotara/custom-modal";
```

Then, you can use it like this :

```jsx
import React,{ useState } from "react";
import { Modal } from "@lokkotara/custom-modal";

const SomeComponent = () => {

  const [isModal, setIsModal] = useState(false);

  const customModalBody = (
    <span>An interesting text</span>
  );

  return (
    <div>
      <Modal
        closeButton={false} // Display the close button
        closeButtonStyle={{color: purple}} // Style for the close button
        icon="success" // The icon to display
        iconStyle={{color: purple}} // Style for the icon
        isOpen={isModal} // Whether the modal is open or closed
        message={customModalBody} //The content inside the body of the modal
        messageStyle={{fontSize: 1.2rem}} //Style applied to the message
        modalContainerStyle={{ backgroundColor: "rgba(164, 137, 178, 0.9)" }} // Style applied to the container behind the modal
        modalStyle={{backgroundColor: #f1f2f3, maxWidth: 500px, minHeight: 250px}} // Style for the modal window
        modalMode={true} // If true, it can't be closed by clicking on the background behind the modal
        onClose={() => setIsModal(false)} // Called when the modal is closed
        title="An awesome title" // The title of the modal
        titleStyle={{color: grey, fontSize: 1.5rem}} // Style applied to the title
      />
    </div>
  )
};
```

## PropTypes

There is a couple of props that we can pass to our component to customise its appearance. Below is an explanation of what we can do :



| Name             |        Type        | Required | Example          |
| :--------------: | :----------------: | :------: | :--------------: |
| closeButton      |  void or Boolean   |   no     | Nothing if you want the close button and `closeButton={false}` if you want to remove it |
| closeButtonStyle |      void or Object        |   no     | `closeButtonStyle={{color: purple, fontSize: 1.5rem}}` |
| icon             |      void or String        |   no     | Nothing if you don't want any icon. Else, one of these : `success`, `error`, `info`, `danger` |
| iconStyle        |      void or Object        |   no     | Icons have a size and their own color by default. However, you can change it by passing an object of properties `iconStyle={{color: purple, fontSize: 1.5rem}}` |
| isOpen           |      Boolean       |   yes    | isOpen should be linked to a useState with `false` as default value ans set to `true` to open the modal |
| message          | String/JSX.element |   yes    | `message="My first message"` or an element like `message={<span>My first message in a span</span>}`          |
| messageStyle     |      void or Object        |   no     | `messageStyle={{fontSize: 1.2rem, color:grey, fontWeight: bold}}` |     |
| modalStyle       |      void or Object        |   no     | `modalStyle={{backgroundColor: #f1f2f3, maxWidth: 500px, minHeight: 250px}}` |
| modalMode       |      void or Boolean        |   no     | Nothing if you want to close by clicking outside. Else `modalMode={true}` |
| onClose          |      Function      |   yes    | Should set the useState to `false` like this : `onClose={() => setIsModal(false)}` |
| title            |      void or String        |   no     | `title="An awesome title"`            |
| titleStyle       |     void or  Object        |   no     | `titleStyle={{color: grey, fontSize: 1.5rem}}`       |

## Examples

Here are a few screenshots of what we can do with customisation :

| Type | Example |
| :--------------: | :----------------: |
| Success message | ![Successful example](https://github.com/lokkotara/custom-modal/blob/2e55c8baddd1957ec88432a4ee44db1d85c26d6d/img/success.png) |
| Error message | ![error example](https://github.com/lokkotara/custom-modal/blob/3250ce2715c84e6e901040698c03f0b9c5cf7504/public/Screenshot%202022-12-05%20at%2022-36-07%20HRnet%20Employee%20management%20system.png) |
| Info message | ![info example](https://github.com/lokkotara/custom-modal/blob/a6ca54aac712bb3a8ae53a6f8dd34457a3450b60/img/info.png) |
| Danger message | ![danger example](https://github.com/lokkotara/custom-modal/blob/a6ca54aac712bb3a8ae53a6f8dd34457a3450b60/img/danger.png) |
| Long message | ![long example](https://github.com/lokkotara/custom-modal/blob/a6ca54aac712bb3a8ae53a6f8dd34457a3450b60/img/long-text.png) |
| Custom modal colors | ![custom colors example](https://github.com/lokkotara/custom-modal/blob/a6ca54aac712bb3a8ae53a6f8dd34457a3450b60/img/custom-modal-color.png) |
| Custom background color | ![custom background example](https://github.com/lokkotara/custom-modal/blob/a6ca54aac712bb3a8ae53a6f8dd34457a3450b60/img/custom-background-color.png) |