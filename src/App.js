import "./App.css";
import Button from "./components/Button/Button";
import MuiTextField from "./components/TextField/TextField";

function App() {
	return (
		<div className='App'>
			<div className='wrapper'>
				<MuiTextField />
				<MuiTextField />

				<Button variant='outlined' color='primary' size={"small"}>
					Login
				</Button>
			</div>
		</div>
	);
}

export default App;
