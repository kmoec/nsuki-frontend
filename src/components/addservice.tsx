import React from 'react';
import { Dropdown, Form, Button, Grid, Container, Header } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react-form-validator'

const serviceLocation = [
  { key: 'AtBusiness', text: 'Available at the specified address', value: 'atBusiness' },
  { key: 'AtClientPlace', text: 'Available at client\'s location', value: 'atClientLocation' }
]

const AddServiceReact:React.FC<>= (props) => (
  <div id="my-container" class="ui grid center middle aligned">
    <div class="row">
      <div class="column">
        <div class="ui text container segment">
          <Header as='h3' textAlign='left'>Add your first service</Header>
          <Form>
            <Form.Field>
              <input placeholder='Appointment Name' validators={['required']} errorMessages={['this field is required']}  />
            </Form.Field>
            <Form.Field>
              <input placeholder='Duration (Minutes)' validators={['required']} errorMessages={['this field is required']}  />
            </Form.Field>
            <Form.Field>
              <input placeholder='Price ($100.00)' validators={['required']} errorMessages={['this field is required']} />
            </Form.Field>
            <Form.Field>
              <input placeholder='Description (Optional)' />
            </Form.Field>
            <Form.Field>
              <input placeholder='Description (Optional)' />
            </Form.Field>
            <Form.Field>
              <Dropdown
                placeholder='Service Location' fluid multiple selection options={serviceLocation}
                validators={['required']} errorMessages={['this field is required']} />
            </Form.Field>
          </Form>
        </div>
      </div>
    </div>
  </div>
  )

export default AddServiceReact
