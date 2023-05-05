# @wainaat/react-bottom-sheet

## Description

A simple bottom sheet component made with React.    

## Install

```
npm install @wainaat/react-bottom-sheet
```

## Use

```javascript
import { useState } from "react";
import BottomSheet from "@wainaat/react-bottom-sheet";

const MyCoponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <BottomSheet
        open={open}
        setOpen={setOpen}
      >
        Opened!!
      </BottomSheet>
    </>
  );
};

export default MyComponent;
```
