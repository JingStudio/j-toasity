# Vue Toastification (for Vue 3.x)

Here is a beautiful and light toastification for Vue 3.x .

## Installation 
```
npm install j-toastify
```


## Usage

1. Base Usage: base usage will auto close and display on the top-right corner of the screen
```
import { JToastify } from 'j-toastify'

JToastify.alert({
    message: "Here is a notification.",
}, () => {
    // Here is the callback function that will be called if needed
})
```

2. Full Config Usage
```
import { JToastify } from 'j-toastify'

JToastify.alert({
    position: "center",      // ["top-right", "top-left", "top", "center", "bottom-left", "bottom-right", "bottom"]
    icon: true,              // Booleans: Show the icon before message or not.
    message: "Hello! I love coding.", //  The message you wanna show and only String type allowed.
    type: "primary",         // ['primary', 'success', 'warning', 'danger'] 
    autoClose: true,         // The notification will be automatically closed
    timeout: 5000,           // The auto close timeout, default is 5000
    confirmText: "Confirm",  // The confirm Button Text
    cancelText: "Cancel",    // The cancel Button Text
    confirmEvent: () => { }, // The confirm button Event
    cancelEvent: () => { },  // The cancel button Event
    closeEvent: () => { }    // The close icon event
}, () => {
    // Here is the callback function that will be called if needed
})
```

## APIs

|  Key  | Type  | Required | Default | Selections | Description |
|  ----  | ----  | ----  | ----  | ----  | ----  |
| message  | String | true | ---- | ---- | The message will show  |
| position | String | false | "top-right" | ["top-right", "top-left", "top", "center", "bottom-left", "bottom-right", "bottom"] | The place where the component will show  |
| icon  | Boolean | false | true  | ----  | The icon before message |
| type  | String | false | "primary"  | ["primary", "success", "warning", "danger"] | Different type means different color  |
| autoClose  | Boolean | false | true  | ----  | When true, the component will be auto closed after timeout value  |
| timeout  | Number | false | 5000  | ----  | When autoClose is true, it is the display time  |
| confirmText  | String | false | ----  | ----  | The autoClose key need be false, and if confirmText has value, the confirm button will be shown  |
| cancelText  | String | false | ----  | ----  | The autoClose key need be false, and if cancelText has value, the cancel button will be shown  |
| confirmEvent  | Function | false | ----  | ----  | When the confirm button is clicked, the confirmEvent function will be called  |
| cancelEvent  | Function | false | ----  | ----  | When the cancel button is clicked, the cancelEvent function will be called |
| closeEvent  | Function | false | ----  | ----  | When the close icon is clicked, the closeEvent function will be called |

## Features

## Demo