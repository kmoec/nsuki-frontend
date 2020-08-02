import React from 'react';
import { Container, Header } from 'semantic-ui-react'
import CalendarDropDown from './Calendar';
import AddService from './AddService';

//import '../styles/index.css';
const options = [
  {
    key: "Calendar_1",
    text: "Business",
    value: "Business"
  },
  {
    key: "Calendar_2",
    text: "Personal",
    value: "Personal"
  }
]

const loggedInEmail = "admin@gmail.com"


class App extends React.PureComponent {
	render() {
		return (
			<Container>
				<AddService/>
			</Container>
		);
	}
}

export default App;

//<CalendarDropDown calendarOptions={options} loggedInEmail={loggedInEmail}/>
