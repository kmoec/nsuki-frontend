import React,{ useState } from 'react';
import { Dropdown, Form, Button, Grid, Container, Header, Input, Label } from 'semantic-ui-react'

interface FormFieldData {
    fieldName: string
    value: string
};

const onClickHandler = (props,clickedButton,enableFlag) => {

}

const DepositReact:React.FC<>= (props) => {
  const [inputBoxType, setInputBoxType] = useState(0);

  return <>
      <Form>
          <div className="ui grid">
              <div className="row left aligned">
                  <div className="fifteen wide column">
                      <Header as='h3' textAlign='left'>Does this service require a deposit?</Header>
                  </div>
              </div>
              <div className="row">
                  <div className="centered fifteen wide column">
                      <div className="fluid big ui buttons">
                          { inputBoxType == 0 &&
                              <button className="ui active button"
                                    onClick={e => {
                                        props.dataOnChange({fieldName: "Deposit", value: "NoDeposit"});
                                        setInputBoxType(0);
                                      }
                                    }>
                                    No Deposit</button>
                          }
                          { inputBoxType != 0 &&
                              <button className="ui button"
                                    onClick={e => {
                                        props.dataOnChange({fieldName: "Deposit", value: "NoDeposit"});
                                        setInputBoxType(0);
                                      }
                                    }>
                                    No Deposit</button>
                          }
                          { inputBoxType != 1 &&
                              <button className="ui button"
                                      onClick={e => {
                                          props.dataOnChange({fieldName: "Fixed", value: "Fixed"});
                                          setInputBoxType(1);
                                        }
                                      } >
                                      Fixed</button>
                          }
                          { inputBoxType == 1 &&
                              <button className="ui active button"
                                      onClick={e => {
                                          props.dataOnChange({fieldName: "Fixed", value: "Fixed"});
                                          setInputBoxType(1);
                                        }
                                      } >
                                      Fixed</button>
                          }
                          { inputBoxType != 2 &&
                              <button className="ui button"
                                    onClick={e => {
                                        props.dataOnChange({fieldName: "Percentage", value: "Percentage"});
                                        setInputBoxType(2);
                                      }
                                    } >
                                    Percentage</button>
                          }
                          { inputBoxType == 2 &&
                              <button className="ui active button"
                                    onClick={e => {
                                        props.dataOnChange({fieldName: "Percentage", value: "Percentage"});
                                        setInputBoxType(2);
                                      }
                                    } >
                                    Percentage</button>
                          }
                      </div>
                  </div>
              </div>
              <div className="row"></div>
              <div className="centered row">
                  <div className="seven wide column centered aligned">
                    {/* Based on curent group button selection, we are showing different type of inputbox */}
                    { inputBoxType == 0 &&
                      <Input placeholder='Not Applicable'
                             labelPosition='right'
                             onChange={ e => {
                                props.dataOnChange({fieldName: "Deposit", value: e.target.value})
                                e.target.value
                             }}
                             disabled={true}
                             >
                                <input />
                      </Input>
                    }
                    { inputBoxType == 1 &&
                      <Input focus
                             placeholder='Deposit Amount'
                             labelPosition='right'
                             validators={['required']}
                             errormessages={['this field is required']}
                             onChange={ e => props.dataOnChange({fieldName: "Deposit", value: e.target.value})}
                             >
                                <Label basic>$</Label>
                                <input />
                      </Input>
                    }
                    { inputBoxType == 2 &&
                      <Input focus
                             placeholder='Deposit Percentage'
                             labelPosition='right'
                             validators={['required']}
                             errormessages={['this field is required']}
                             onChange={ e => props.dataOnChange({fieldName: "Deposit", value: e.target.value})}
                             >
                                <input />
                                <Label basic>%</Label>
                      </Input>
                    }
                  </div>
              </div>
          </div>
      </Form>
    </>
  }


export default DepositReact
