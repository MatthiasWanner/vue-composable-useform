# useForm Vue Composable

This package is in development. It help to register a form inputs in a Vue component and catch the values only on submit event. It prevents unnecessary component rendering and the register function can be passed through the props in a child component to split easily your app.

### Example

1️⃣ In the script tag (Vue 3 script setup)

```js
import useForm from 'vue-composable-useform';

interface IFormData {
  firstInput: string;
  secondInput: string;
}

const message = ref < string > '';

const { handleSubmit, register } = useForm();

const submitForm = (data: IFormData) => {
  if (firstInput && secondInput) {
    return console.log('inputs', data);
  }
  return (message.value = `Please complete all fields 🤦‍♂️`);
};
```

In the template tag 👇

```js
    <form @submit.prevent="handleSubmit(submitForm)">
        <input
            type="text"
            placeholder="First Input"
            v-bind="register('firstInput')"
        />
        <label for="firstInput"">First Input</label>

        <input
            type="text"
            placeholder="Second Input"
            v-bind="register('secondInput')"
        />
        <label for="secondInput"">Second Input</label>

        <button type="submit" >Submit</button>
    </form>

    <p>{{ message }}</p>
```
