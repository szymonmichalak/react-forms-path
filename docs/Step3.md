# Step 3

```
git checkout step-3
```

[Changes introduced](https://github.com/szymonmichalak/react-forms-path/compare/step-2...step-3)

In this step, more inputs are added. Apart from the previous text input, you may also find the **checkbox**, **radio buttons**, **email** and **date** inputs.

#### The most important changes:
- a universal `handleInputChange` method that will take care of [updating all inputs on change](https://github.com/szymonmichalak/react-forms-path/blob/step-3/src/containers/App.js#L46). The input name is now passed as an argument to this function. Because, in this way, when the function is being invoked, we need to change `handleInputChange` method to [return another function](https://github.com/szymonmichalak/react-forms-path/blob/step-3/src/containers/App.js#L23), which will be triggered on the change event, while passing the `event` object as an argument,
- radio buttons do not store their current state in `value` as other inputs do. `value` is here the specific option name, while `checked` [defines the current state](https://github.com/szymonmichalak/react-forms-path/blob/step-3/src/containers/App.js#L70) of such radio button.
