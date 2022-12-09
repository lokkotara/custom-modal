# Important information about this package

This package is meant to be used for educational purpose. It is not intended to be maintained and could be deleted in the future.

## Installation

To install this package, type `npm install @lokkotara/custom-modal`.

## Usage

First, import the component with `import { Modal } from "@lokkotara/custom-modal";`.

Then, you can use this like this

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
        closeButton={false}
        closeButtonStyle={{color: purple}}
        icon="success"
        iconStyle={{color: purple}}
        isOpen={isModal}
        message={customModalBody}
        messageStyle={{fontSize: 1.2rem}}
        modalContainerStyle={{ backgroundColor: "rgba(164, 137, 178, 0.9)" }}
        modalStyle={{backgroundColor: #f1f2f3, maxWidth: 500px, minHeight: 250px}}
        onClose={() => setIsModal(false)}
        title="An awesome title"
        titleStyle={{color: grey, fontSize: 1.5rem}}
      />
    </div>
  )
};
```

## PropTypes

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
| modalContainerStyle       |      void or Object        |   no     | `modalContainerStyle={{backgroundColor: rgba(164, 137, 178, 0.9)}}` |
| onClose          |      Function      |   yes    | Should set the useState to `false` like this : `onClose={() => setIsModal(false)}` |
| title            |      void or String        |   no     | `title="An awesome title"`            |
| titleStyle       |     void or  Object        |   no     | `titleStyle={{color: grey, fontSize: 1.5rem}}`       |

## Examples

![Successful example](./src/assets/Screenshot%202022-12-05%20at%2022-33-47%20HRnet%20Employee%20management%20system.png)
![error example][def]

[def]: ./public/Screenshot%202022-12-05%20at%2022-36-07%20HRnet%20Employee%20management%20system.png