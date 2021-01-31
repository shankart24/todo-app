import { useState, useEffect } from "react";
import TodoContainer from "./Components/TodoContainer";
import darkImg from "./assets/bg-desktop-dark.jpg";
import lightImg from "./assets/bg-desktop-light.jpg";
import darkIcon from "./assets/icon-moon.svg";
import lightIcon from "./assets/icon-sun.svg";
import darkCloseIcon from "./assets/darkClose.svg";
import lightCloseIcon from "./assets/lightClose.svg";
import "./App.css";

const App = () => {
	const dark = {
		bgColor: "#181824",
		txtColor: "#ffffff",
		todoBgColor: "#25273C",
		themeIcon: darkIcon,
		headerImg: darkImg,
		closeIcon: darkCloseIcon,
	};
	const light = {
		bgColor: "#ffffff",
		txtColor: "#212121",
		todoBgColor: "#ffffff",
		themeIcon: lightIcon,
		headerImg: lightImg,
		closeIcon: lightCloseIcon,
	};
	const [theme, setTheme] = useState(dark);
	const [bool, setBool] = useState(true);

	const handleTheme = () => {
		setBool((bool) => !bool);
		bool ? setTheme(dark) : setTheme(light);
	};

	useEffect(() => {
		handleTheme();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div>
			<div className="app" style={{ backgroundColor: `${theme.bgColor}` }}>
				<div className="hero" style={{ backgroundImage: `url(${theme.headerImg})` }}>
					<div className="hero-content">
						<h3>T O D O</h3>
						<button onClick={handleTheme}>
							<img src={theme.themeIcon} alt="icon" width="25" />
						</button>
					</div>
				</div>
				<div className="main-content">
					<TodoContainer txtColor={theme.txtColor} todoBgColor={theme.todoBgColor} closeIcon={theme.closeIcon} />
				</div>
			</div>
		</div>
	);
};

export default App;
