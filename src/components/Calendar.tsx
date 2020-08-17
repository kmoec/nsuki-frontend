import React from 'react';
import { Dropdown, Form, Button, Grid, Container, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

interface DropDownItemProps {
    key: string
    text: string
    value: string
}

const onChangeHandler = (event, result, p) => {
    p.dataOnChange({fieldName: "calendar", value: result.value});
    console.log(p);
    p.dropdownSelection =  result.value;
    console.log(p);
  };

const CalendarDropDown: React.FC<[DropDownItemProps]> =
    (props) => (
      <div className='ui container'>
        <Header as='h5' textAlign='center'>Which calendar should Nsunki use to schedule?</Header>
        <Form className='ui form'>
          <div className='field'>
            <div className='fields'>
              <div className='three wide field'></div>
              <div className="ten wide field">
                  <Dropdown
                    placeholder='Select Calendar'
                    fluid
                    selection
                    options={props.calendarOptions}
                    defaultValue={props.dropdownSelection !== "" ? props.dropdownSelection : ""}
                    onChange={(event, result) => props.dataOnChange(
                                  {fieldName: "calendar", value: result.value})}
                  />
              </div>
              <div className='three wide field'></div>
            </div>
          </div>
        </Form>
        <div>
            <Header as='h5' textAlign='center'>Logged in as {props.loggedInEmail}</Header>
        </div>
      </div>


    )

export default CalendarDropDown
