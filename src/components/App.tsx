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
};

function App() {
  const [activeForm, setActiveForm] = useState(1);

 	return (
		<Container>
				 { activeForm == 1 ?
					 <div class="ui grid">
							 <div class="row">
									 <div class="centered sixteen wide column" >
									 			<CalendarDropDown calendarOptions={options}
																					loggedInEmail={loggedInEmail}
																					dropdownSelection={addServiceDataMap.has("calendar") ? addServiceDataMap.get("calendar") : ""}
																					dataOnChange={onChangeHandler}/>
									 </div>
							</div>
							<div class="row">
									<div class="centered seven wide column" >
											<Button className="fluid ui formlink" onClick={() => setActiveForm(activeForm + 1)}>Continue</Button>
									</div>
							</div>
					 </div> : null
				 }
				 { activeForm == 2 ?
					 <div class="ui grid formcontainer" >
					 				<div class="row white">
											<div class="sixteen wide left aligned column" >
													<div class="ui link items">
															<div class="item" onClick={() => setActiveForm(activeForm - 1)}>
      														<Header as='h3' textAlign='left'>← Choose Calendar</Header>
															</div>
													</div>
											</div>
									</div>
					 		 		<div class="row">
											<div class="centered sixteen wide column" >
							 						<AddService dataOnChange={onChangeHandler}/>
											</div>
									</div>
									<div class="row">
											<div class="ten wide column"></div>
		    							<div class="four wide column">
													<Button className="fluid ui formlink" onClick={() => setActiveForm(activeForm + 1)}>Continue</Button>
											</div>
									</div>
					 </div>	: null
				 }
				 { activeForm == 3 ?
					 <div class="ui grid formcontainer">
					 				<div class="row white">
											<div class="sixteen wide left aligned column" >
													<div class="ui link items">
															<div class="item" onClick={() => setActiveForm(activeForm - 1)}>
      														<Header as='h3' textAlign='left'>← Add Service</Header>
															</div>
													</div>
											</div>
									</div>
					 		 		<div class="row">
											<div class="centered sixteen wide column" >
							 						<Deposit dataOnChange={onChangeHandler}/>
											</div>
									</div>
									<div class="row"></div>
									<div class="row">
		    							<div class="four wide centered middle aligned column">
													<Button className="fluid ui formlink" onClick={() => setActiveForm(activeForm + 1)}>Continue</Button>
											</div>
									</div>
					 </div>	: null
				 }
	   </Container>
 	);
}

/*
<Button className="fluid ui tertiary" onClick={() => setActiveForm(activeForm + 1)}
				style={{backgroundColor: "#808080", color: "white"}}>Continue</Button>
*

/*
<a onClick={() => setActiveForm(activeForm - 1)} style={{backgroundColor: "white", border: "0px"}}>
	 Choose Calendar
</a>

<Container>
		{ activeForm != 1 ?
			 <Grid>
					 <Grid.Column textAlign="left">
							 <Button onClick={() => setActiveForm(activeForm - 1)} style={{backgroundColor: "white"}}>
									Previous Form
							 </Button>
					 </Grid.Column>
			 </Grid> : null
		}
		{ activeForm == 1 ?
			<Container>
					 <Grid>
							 <Grid.Column textAlign="center">
									 <CalendarDropDown calendarOptions={options} loggedInEmail={loggedInEmail}/>
							 </Grid.Column>
					 </Grid>
					 <Grid>
							 <Grid.Column textAlign="center">
									 <Button className="ui tertiary" onClick={() => setActiveForm(activeForm + 1)}
													 style={{backgroundColor: "#808080", color: "white"}}>Continue</Button>
							 </Grid.Column>
					 </Grid>
			 </Container> : null
		}
		{ activeForm == 2 ?
				 <div style={{backgroundColor: "grey"}}>
					 <AddService dataOnChange={childContinueClick}/>
				 </div> : null
		}

</Container>


*/

export default App;
//<AddService onClick={childContinueClick}/>
//<CalendarDropDown calendarOptions={options} loggedInEmail={loggedInEmail}/>
//<Button className="tertiary" onClick={() => props.callback("this is data")}>Previous Form</Button>
