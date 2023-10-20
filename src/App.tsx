import ListGroup from "./components/ListGroup";


function App() {
	let items = [
		"Pangasinan",
		"La Union",
		"Ilocos Norte",
		"Ilocos Sur",
		"Benguet",
		"Ifugao",
		"Mountain Province",
	];

	return (
		<div>
			<ListGroup items={items} heading="citites"/>
		</div>
	);
}

export default App;
