import Fragment from "./Fragment";

export function DisplayFragment() {
  const showAlert = () => {
    alert("You have pressed the button");
  };

  const string = "Hello React";

  let Props = {
    showAlert: showAlert,
    string: "Hello React",
  };
  return (
    <div className="App">
      <Fragment {...Props} />
    </div>
  );
}
