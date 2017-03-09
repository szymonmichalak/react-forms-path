# Step 6

```
git checkout step-6
```

[Changes introduced](https://github.com/szymonmichalak/react-forms-path/compare/step-5...step-6)

In step #6, basic form validation is introduced. Learn how to validate required fields or check if email input is correct in order to display appropriate errors.

#### The most important changes:
- The [`validateFields` function](https://github.com/szymonmichalak/react-forms-path/blob/step-6/src/components/Form.js#L29 ) that is triggered for each input on blur ([when focus is lost](https://github.com/szymonmichalak/react-forms-path/blob/step-6/src/components/Form.js#L89)) and for all inputs on form submit, so as to not allow the user to [submit an invalid form](https://github.com/szymonmichalak/react-forms-path/blob/step-6/src/components/Form.js#L62 ),
- Errors must be passed down to the input components and displayed [there](https://github.com/szymonmichalak/react-forms-path/blob/step-6/src/components/Form.js#L87).
