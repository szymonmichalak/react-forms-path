# Step 2

```
git checkout step-2
```

[Changes introduced](https://github.com/szymonmichalak/react-forms-path/compare/step-2)

By checking the changes introduced in the second step, you may notice that the input value is saved in the component, so once you click "Say hi!" button, you will see name typed in the input.

#### The most important changes:
- the functional stateless component is now transformed into a [class component](https://github.com/szymonmichalak/react-forms-path/blob/step-2/src/containers/App.js#L11) and `this.state` will keep the current state (stored values) of this component,
- the [`input` element](https://github.com/szymonmichalak/react-forms-path/blob/step-2/src/containers/App.js#L41) now has `value` and `onChange` props. `value` will provide the current value displayed in the input and `onChange` will trigger a method on each "change" event on this input. This lets us take the current value from the input and [save it to state](https://github.com/szymonmichalak/react-forms-path/blob/step-2/src/containers/App.js#L23).
