## React Global State Management with namespaces 😆 and hooks 🎣

![alt text](https://media1.giphy.com/media/QfMErvIH7r60M/giphy.gif?cid=790b7611f36851bd35fb51bf72d0716fd7addd14e2e7c9a7&rid=giphy.gif "HOOK")

> For a full example, check out [this code sandbox](https://codesandbox.io/embed/patient-wildflower-kujt1)!

> This package allows the use of global state management with ease.
> It affords the ability to define global state with namespaces.

### Example (TypeScript):
```
interface IPerson {
	name: string;
	age: number;
}

const [person, setPerson] = useGlobalState<IPerson>("person", {
	name: "The cool guy",
	age: 36
});
```

### Example (JavaScript):
```
const [person, setPerson] = useGlobalState("person", {
	name: "The cool guy",
	age: 36
});
```
These examples will define `the cool guy` in the namespace `person`.

### If no namespace is provided, the namespace will default to `default`
```
const [account, setAccount] = useGlobalState<IAccount>(); // namespace defaults to "default"
```

### To use the hook, you need to specify the provider at the app level:
```
const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStateProvider>
        {/* content ... */}
      </GlobalStateProvider>
    </div>
  );
}
```
