# Step 4

```
git checkout step-4
```

[Changes introduced](https://github.com/szymonmichalak/react-forms-path/compare/step-3...step-4)

In fourth step [Redux](http://redux.js.org/docs/introduction/) library is added. It will be used to store the current form values in so-called **Reducers** instead of keeping them in the state of the component. With **Actions** we will be able to communicate between component and Reducer. Reducers are updated always on specific action. In this simple project, only one Reducer (for keeping form values) and one Action (for updating those values) will be enough.

#### The most important changes:
- Remember to run `npm install` (Redux library added),
- `updateValue` - [Redux action](https://github.com/szymonmichalak/react-forms-path/blob/step-4/src/actions/FormActions.js) that will trigger `FORM_UPDATE_VALUE` action, so that [`Form` reducer](https://github.com/szymonmichalak/react-forms-path/blob/step-4/src/reducers/form.js) can take care of the data (input name and value) and save it accordingly,
- [`initialState`](https://github.com/szymonmichalak/react-forms-path/blob/step-4/src/reducers/form.js#L3) looks familiar? It's exactly the same as `this.state` in the previous step. Here, we can define what default values should Reducer receive,
- Reducer knows when to update because of this [line](https://github.com/szymonmichalak/react-forms-path/blob/step-4/src/reducers/form.js#L15) - when `FORM_UPDATE_VALUE` is triggered in the app, Form reducer knows that it should update its values accordingly,
- [`mapDispatchToProps`](https://github.com/szymonmichalak/react-forms-path/blob/step-4/src/containers/App.js#L123) will bind `FormActions` to the component's props. This means that inside the component `this.props.updateValue` function is available,
- [`mapStateToProps`](https://github.com/szymonmichalak/react-forms-path/blob/step-4/src/containers/App.js#L117) - will bind Form Reducer values also to the component's props. This way, `value` of the name input will be available from [`this.props.value`](https://github.com/szymonmichalak/react-forms-path/blob/step-4/src/containers/App.js#L27),
- `this.setState` is no longer necessary [here](https://github.com/szymonmichalak/react-forms-path/blob/step-4/src/containers/App.js#L22), just call the updateValue action passed via props, as explained above.