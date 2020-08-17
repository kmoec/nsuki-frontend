import "../styles/NewUserForm.css";
import React, { useState } from 'react';
import { Container, Header, Button, Grid } from 'semantic-ui-react'
import CalendarDropDown from './Calendar';
import AddService from './AddService';
import Deposit from './Deposit';

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
let addServiceDataMap = new Map();

const onChangeHandler = function (data:FormFieldData) {
  addServiceDataMap.set(data.fieldName,data.value);
	console.log(addServiceDataMap);
};

function App() {
  const [activeForm, setActiveForm] = useState(1);

 	return (
		<Container>
				 { activeForm == 1 ?
					 <div className="ui grid">
							 <div className="row">
									 <div className="centered sixteen wide column" >
									 			<CalendarDropDown calendarOptions={options}
																					loggedInEmail={loggedInEmail}
																					dropdownSelection={addServiceDataMap.has("calendar") ? addServiceDataMap.get("calendar") : ""}
																					dataOnChange={onChangeHandler}/>
									 </div>
							</div>
							<div className="row">
									<div className="centered seven wide column" >
											<Button className="fluid ui formlink" onClick={() => setActiveForm(activeForm + 1)}>Continue</Button>
									</div>
							</div>
					 </div> : null
				 }
				 { activeForm == 2 ?
					 <div className="ui grid formcontainer" >
					 				<div className="row white">
											<div className="sixteen wide left aligned column" >
													<div className="ui link items">
															<div className="item" onClick={() => setActiveForm(activeForm - 1)}>
      														<Header as='h3' textAlign='left'>← Choose Calendar</Header>
															</div>
													</div>
											</div>
									</div>
					 		 		<div className="row">
											<div className="centered sixteen wide column" >
							 						<AddService dataOnChange={onChangeHandler}/>
											</div>
									</div>
									<div className="row">
											<div className="ten wide column"></div>
		    							<div className="four wide column">
													<Button className="fluid ui formlink" onClick={() => setActiveForm(activeForm + 1)}>Continue</Button>
											</div>
									</div>
					 </div>	: null
				 }
				 { activeForm == 3 ?
					 <div className="ui grid formcontainer">
					 				<div className="row white">
											<div className="sixteen wide left aligned column" >
													<div className="ui link items">
															<div className="item" onClick={() => setActiveForm(activeForm - 1)}>
      														<Header as='h3' textAlign='left'>← Add Service</Header>
															</div>
													</div>
											</div>
									</div>
					 		 		<div className="row">
											<div className="centered sixteen wide column" >
							 						<Deposit dataOnChange={onChangeHandler}/>
											</div>
									</div>
									<div className="row"></div>
									<div className="row">
		    							<div className="four wide centered middle aligned column">
													<Button className="fluid ui formlink" onClick={() => setActiveForm(activeForm + 1)}>Continue</Button>
											</div>
									</div>
					 </div>	: null
				 }
	   </Container>
 	);
}


export default App;
