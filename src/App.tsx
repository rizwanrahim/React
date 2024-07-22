import ListGroup from "./components/ListGroup";

function App() {
  const cities = ["Mumbai", "Bangluru", "Hyderabad"];
  return (
    <div>
      <ListGroup
        heading="Cities"
        items={cities}
        onSelectItem={() => console.log(cities)}
      />
    </div>
  );
}

export default App;
