import React from 'react';
import { Dropdown, Form, Button, Grid, Container, Header } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react-form-validator'

const serviceLocation = [
  { key: 'AtBusiness', text: 'Available at the specified address', value: 'atBusiness' },
  { key: 'AtClientPlace', text: 'Available at client\'s location', value: 'atClientLocation' }
]

interface FormFieldData {
    fieldName: string
    value: string
};

const AddServiceReact:React.FC<>= (props) => (
      <Form>
          <div className="ui grid">
              <div className="row left aligned">
                  <div className="fifteen wide column">
                      <Header as='h3' textAlign='left'>Add your first service</Header>
                  </div>
              </div>
              <div className="row">
                  <div className="eight wide column">
                      <input placeholder='Appointment Name'
                             validators={['required']}
                             errormessages={['this field is required']}
                             onChange={ e => props.dataOnChange({fieldName: "AppointmentName", value: e.target.value})}/>
                  </div>
              </div>
              <div className="row">
                  <div className="eight wide column">
                      <input placeholder='Duration (Minutes)'
                             validators={['required']}
                             errormessages={['this field is required']}
                             onChange={ e => props.dataOnChange({fieldName: "Duration", value: e.target.value})}/>
                  </div>
              </div>
              <div className="row">
                  <div className="eight wide column">
                      <input placeholder='Price ($100.00)'
                             validators={['required']}
                             errormessages={['this field is required']}
                             onChange={ e => props.dataOnChange({fieldName: "Price", value: e.target.value})}/>
                  </div>
              </div>
              <div className="row">
                  <div className="eight wide column">
                      <input placeholder='Description (Optional)'
                             onChange={ e => props.dataOnChange({fieldName: "Description", value: e.target.value})}/>
                  </div>
              </div>
              <div className="row">
                  <div className="eight wide column">
                      <Dropdown
                        placeholder='Service Location' fluid multiple selection options={serviceLocation}
                        validators={['required']} errormessages={['this field is required']}
                        onChange={(event, result) => props.dataOnChange(
                                      {fieldName: "serviceLocation", value: result.value})}/>
                  </div>
              </div>
          </div>
      </Form>

  )

export default AddServiceReact
