# Step 7

```
git checkout step-7
```

[Changes introduced](https://github.com/szymonmichalak/react-forms-path/compare/step-6...step-7)

You probably noticed in step #6 that validating each input can be quite a lot of work! In the last step, we would like to make it a little bit easier - instead of reinventing the wheel, let’s use some readily available validation methods. As an example, this tutorial uses the [`react-validation-mixin`](https://github.com/jurassix/react-validation-mixin) with the [`joi-validation-strategy`](https://github.com/jurassix/joi-validation-strategy).

#### The most important changes:

- In order to understand what has changed, please check the "Getting started" tutorial at [`react-validation-mixin`](https://jurassix.gitbooks.io/docs-react-validation-mixin/content/overview/getting-started.html),
- The single error prop is changed to an [array of props Errors](https://github.com/szymonmichalak/react-forms-path/blob/step-7/src/components/Input.js#L16) (there can be multiple errors per one field - required, wrong format, etc.).
