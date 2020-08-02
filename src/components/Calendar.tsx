import React from 'react';
import { Dropdown, Form, Button, Grid, Container, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


interface DropDownItemProps {
    key: string
    text: string
    value: string
}

//let ItemTable = ({items}: {items: IItem[]}) => (
//let ItemTable = (props: {items: IItem[]}) => (
//  const {items} = props;
const CalendarDropDown: React.FC<[DropDownItemProps]> =
    (props) => (
      <div id="my-container" class="ui grid center middle aligned">
        <div class="row">
          <div class="column">
            <div class="ui text container segment">
              <Header as='h5' textAlign='center'>Which calendar should Nsunki use to schedule?</Header>
              <Dropdown
                placeholder='Select Calendar'
                fluid
                selection
                options={props.calendarOptions}
              />
              <Header as='h5' textAlign='center'>{props.loggedInEmail}</Header>
              <div class="ui center">
              <Button positive fluid type='continue'>Continue</Button>
              </div>
            </div>
          </div>
        </div>
      </div>


    )

export default CalendarDropDown

/*
Grid className="middle center aligned">
  <Form>
      <Form.Field>

        <Dropdown
          placeholder='Select Calendar'
          fluid
          selection
          options={props.calendarOptions}
        />
        <h5>Logged in as admin@gmail.com</h5>
        <Button type='continue'>Cancel</Button>
      </Form.Field>
  </Form>
</Grid>
*/
/*const CalendarDropDown = () => (
  <Grid className="center aligned">
  <Form>
    <Form.Field>
      <h5>Which calendar should Nsunki use to schedule?</h5>
      <Dropdown
        placeholder='Select Calendar'
        fluid
        selection
        options={calendarOptions}
      />
      <h5>Logged in as admin@gmail.com</h5>
      <Button type='continue'>Continue</Button>
  </Form.Field>
  </Form>
  </Grid>
)
*/

/*class Calendar extends React.PureComponent {
	render() {
		return (
      <CalendarDropDown/>
		);
	}
}*/

//export default CalendarDropDown;
