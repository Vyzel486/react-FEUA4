import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Button />
      <Card color="primary" title="Primary card title" />
      <Card color="secondary" title="Secondary card title" />
      <Card color="success" title="Success card title" />
      <Card color="danger" title="Danger card title" />
      <Card color="warning" title="Warning card title" />
      <Card color="info" title="Info card title" />
      <Card color="light" title="Light card title" />
      <Card color="dark" title="Dark card title" />
    </>
  );
}

export default App;
