import React, {useState} from 'react';
import './App.css';
import {Heading, HeadingLevel} from 'baseui/heading';
import {ScreenLayout} from "./layouts/ScreenLayout/ScreenLayout";
import {ButtonItem} from "./components/ButtonItem/ButtonItem";
import {ButtonLayout} from "./layouts/ButtonLayout/ButtonLayout";

const App = () => {
	return (
		<div className="App">
			<ScreenLayout />
			<ButtonLayout />
		</div>
	);
}

export default App;
