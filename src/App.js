import "./App.css";
import React, { useReducer } from "react";
import DataFetchingTwo from "./components/DataFetchingTwo";

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
	switch (action) {
		case "increment":
			return state + 1;
		case "decrement":
			return state - 1;
		case "reset":
			return initialState;
		default:
			return state;
	}
};

function App() {
	const [count, dispatch] = useReducer(reducer, initialState);

	return (
		<div className="App">
			<DataFetchingTwo />
		</div>
	);
}

export default App;
