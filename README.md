# vuex save state
Vuex page refresh save state
### Get State localStorage

```
const loadState = name => {
  try {
    const serializedState = localStorage.getItem(name);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
```

### Set State localStorage

```
const saveState = (name, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(name, serializedState);
  } catch (err) {
    console.error(`Something went wrong: ${err}`);
  }
};
```
