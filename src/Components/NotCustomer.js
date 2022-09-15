import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import React, {useState } from 'react'

import Form from 'react-bootstrap/Form';


import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



export default function BasicExample() {

    //const [Customer_Id, setCustomer_Id] = useState("");
    const [FName, setFName] = useState("");
    const [LName, setLName] = useState("");
    const [Email, setEmail] = useState("");
    const [Contact, setContact] = useState("");
    const [AddressLine1, setAddressLine1] = useState("");
    const [AddressLine2, setAddressLine2] = useState("");
    const [DL_No, setDL_No] = useState("");
    const [DL_Valid_Till, setDl_Valid_Till] = useState("");
    const [DOB, setDOB] = useState("");
    const [IsMember, setIsMember] = useState("");
    const [Pincode, setPincode] = useState("");
    const [City, setCity] = useState("");
    const [State, setState] = useState("");
    const [Passport_No, setPassport_No] = useState("");
     const [Nationality, setNationality] = useState("")



    function saveDataCustomer() {
        let data = { FName, LName, Email, Contact, AddressLine1, AddressLine2, DL_No, DL_Valid_Till, DOB, IsMember, Pincode, City, State, Passport_No, Nationality }
        console.log(data);
        fetch("https://localhost:44318/api/Customers", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            console.warn("resp", resp);
            resp.json().then((result) => {
                console.log("result", result)
            })
        })
    }



    return (
        <Accordion xs={2} md={3} lg={4} >
            <Accordion.Item eventKey="0">
                <Accordion.Header><Button>Not a Customer <i class="bi bi-person-lines-fill"></i></Button></Accordion.Header>
                <Accordion.Body>
                    <Form className="mb-3">

                        <Row className="justify-content-md-center" xs={2} md={4} lg={6}>

                            <Form.Group as={Col} controlId="formGridHandoverId">
                                <Form.Label>First Name</Form.Label>

                                <Form.Control type="text" placeholder="Enter First Name" value={FName} onChange={(e) => { setFName(e.target.value) }}  />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridCarId">
                                <Form.Label>Last Name</Form.Label>

                                <Form.Control type="text" placeholder="Enter Last Name" value={LName} onChange={(e) => { setLName(e.target.value) }} 
                               
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPickupHub">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="Enter Email" value={Email} onChange={(e) => { setEmail(e.target.value) }}/> 
                        
                            </Form.Group>


                            <Form.Group as={Col} controlId="formGridDropHub">
                                <Form.Label>Contact</Form.Label>
                                <Form.Control type="text" placeholder="Enter Contact no." value={Contact} onChange={(e) => { setContact(e.target.value) }}/>
                             
                            </Form.Group>


                            <Form.Group as={Col} controlId="formGridStartDate">
                                <Form.Label>Address line 1</Form.Label>
                                <Form.Control type="text" placeholder="Enter house no.,street" value={AddressLine1} onChange={(e) => { setAddressLine1(e.target.value) }}/>
                              
                            </Form.Group>
                        </Row>
                        <Row className="justify-content-md-center" xs={2} md={4} lg={6}>

                            <Form.Group as={Col} controlId="formGridEndDate">
                                <Form.Label>Address Line 2</Form.Label>
                                <Form.Control type="text" placeholder="Enter area" value={AddressLine2} onChange={(e) => { setAddressLine2(e.target.value) }}/>
                              
                            </Form.Group>


                            <Form.Group as={Col} controlId="formGridCarCondition">
                                <Form.Label>Driving License</Form.Label>
                                <Form.Control type="text" placeholder="Enterdriving license" value={DL_No} onChange={(e) => { setDL_No(e.target.value) }}/>
                                
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridFuelStatus">
                                <Form.Label>DL valid date</Form.Label>
                                <Form.Control type="date" placeholder="Enter DL valid date" value={DL_Valid_Till} onChange={(e) => { setDl_Valid_Till(e.target.value) }}/>
                                 
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>DOB</Form.Label>
                                <Form.Control type="date" placeholder="Enter DOB" value={DOB} onChange={(e) => { setDOB(e.target.value) }}/>
                             
                            </Form.Group>


                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Is Member</Form.Label>
                                <Form.Control type="text" placeholder="Enter Is Member"value={IsMember} onChange={(e) => { setIsMember(e.target.value) }} />
                              
                            </Form.Group>
                        </Row>
                        <Row className="justify-content-md-center" xs={2} md={4} lg={6}>
                            <Form.Group as={Col} controlId="formGridStatus">
                                <Form.Label>Pincode</Form.Label>
                                <Form.Control type="text" placeholder="Enter Pincode" value={Pincode} onChange={(e) => { setPincode(e.target.value) }}/>
                               
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="Enter city" value={City} onChange={(e) => { setCity(e.target.value) }}/>
                                
                            </Form.Group>


                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" placeholder="Enter State" value={State} onChange={(e) => { setState(e.target.value) }}/>
                          
                            </Form.Group>


                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Passport No</Form.Label>
                                <Form.Control type="text" placeholder="Enter Passport No"value={Passport_No} onChange={(e) => { setPassport_No(e.target.value) }}/>
                               
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Nationality</Form.Label>
                                <Form.Control type="text" placeholder="Enter Nationality" value={Nationality} onChange={(e) => { setNationality(e.target.value) }}/>

                            </Form.Group>
                        </Row>

                    </Form>

                    <Form class="ex1">
                        <Button variant="success" onClick={saveDataCustomer} >
                            Submit
                        </Button>
                    </Form>

                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
    );
}

