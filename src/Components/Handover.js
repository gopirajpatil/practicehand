
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Handover() {

    const [Handover_Id, setHandover_Id] = useState("");
    const [Car_Id, setCar_Id] = useState("");
    const [Pickup_Hub, setPickup_Hub] = useState("");
    const [Drop_Hub, setDrop_Hub] = useState("");
    const [Start_date, setStart_date] = useState("");
    const [End_date, setEnd_date] = useState("");
    const [Car_Condition, setCar_Condition] = useState("");
    const [Fuel_Status, setFuel_Status] = useState("");
    const [Customer_Id, setCustomer_Id] = useState("");
    const [Staff_Id, setStaff_Id] = useState("");
    const [Status, setStatus] = useState("");
    const [Addon_Amt, setAddon_Amt] = useState("");
    const [Rental_Amt, setRental_Amt] = useState("");
    const [Total_Amt, setTotal_Amt] = useState("");
    const [Kms_Driven, setKms_Driven] = useState("");

    function saveData() {
        let data = { Car_Id, Pickup_Hub, Drop_Hub, Start_date, End_date, Car_Condition, Fuel_Status, Customer_Id, Staff_Id, Status, Addon_Amt, Rental_Amt, Total_Amt, Kms_Driven }
        // console.log(data);
        fetch("https://localhost:44318/api/handovers", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            //console.log("resp",resp);
            resp.json().then((result) => {
                //console.log("result", result)
            })
        })

    }
    


    return (
        <>

            <Form className="mb-3" >

                <Row className="justify-content-md-center" xs={2} md={4} lg={6}>
                    <Form.Group as={Col} controlId="formGridHandoverId">
                        <Form.Label>Booking Id</Form.Label>

                        <Form.Control type="text" placeholder="Enter handover id" value={Handover_Id} onChange={(e) => { setHandover_Id(e.target.value) }} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCarId">
                        <Form.Label>Car id</Form.Label>

                        <Form.Control type="text" placeholder="Enter car id" value={Car_Id} onChange={(e) => { setCar_Id(e.target.value) }} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPickupHub">
                        <Form.Label>Pickup Hub <i class="bi bi-car-front-fill"></i></Form.Label>
                        <Form.Control type="text" placeholder="Enter pickup hub" value={Pickup_Hub} onChange={(e) => { setPickup_Hub(e.target.value) }} />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridDropHub">
                        <Form.Label>Drop Hub  <i class="bi bi-car-front-fill"></i></Form.Label>
                        <Form.Control type="text" placeholder="Enter Drop hub" value={Drop_Hub} onChange={(e) => { setDrop_Hub(e.target.value) }} />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridStartDate">
                        <Form.Label>Start date</Form.Label>
                        <Form.Control type="date" placeholder="Enter start date" value={Start_date} onChange={(e) => { setStart_date(e.target.value) }} />
                    </Form.Group>
                </Row>
                <Row className="justify-content-md-center" xs={2} md={4} lg={6}>

                    <Form.Group as={Col} controlId="formGridEndDate">
                        <Form.Label>End date</Form.Label>
                        <Form.Control type="date" placeholder="Enter end date" value={End_date} onChange={(e) => { setEnd_date(e.target.value) }} />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridCarCondition">
                        <Form.Label>Car Condition</Form.Label>
                        <Form.Control type="text" placeholder="Enter car condition" value={Car_Condition} onChange={(e) => { setCar_Condition(e.target.value) }} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridFuelStatus">
                        <Form.Label>Fuel Status</Form.Label>
                        <Form.Control type="text" placeholder="Enter fuel staus" value={Fuel_Status} onChange={(e) => { setFuel_Status(e.target.value) }} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Customer id</Form.Label>
                        <Form.Control type="text" placeholder="Enter customer id" value={Customer_Id} onChange={(e) => { setCustomer_Id(e.target.value) }} />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Staff id</Form.Label>
                        <Form.Control type="text" placeholder="Enter staff id" value={Staff_Id} onChange={(e) => { setStaff_Id(e.target.value) }} />
                    </Form.Group>
                </Row>
                <Row className="justify-content-md-center" xs={2} md={4} lg={6}>
                    <Form.Group as={Col} controlId="formGridStatus">
                        <Form.Label>Status</Form.Label>
                        <Form.Control type="text" placeholder="Enter car status" value={Status} onChange={(e) => { setStatus(e.target.value) }} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Addon Amount</Form.Label>
                        <Form.Control type="text" placeholder="Enter add on amount" value={Addon_Amt} onChange={(e) => { setAddon_Amt(e.target.value) }} />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Rental Amount</Form.Label>
                        <Form.Control type="text" placeholder="Enter rental amount" value={Rental_Amt} onChange={(e) => { setRental_Amt(e.target.value) }} />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Total Amount</Form.Label>
                        <Form.Control type="text" placeholder="Enter total amount" value={Total_Amt} onChange={(e) => { setTotal_Amt(e.target.value) }} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Kms Driven</Form.Label>
                        <Form.Control type="text" placeholder="Enter km Driven" value={Kms_Driven} onChange={(e) => { setKms_Driven(e.target.value) }} />
                    </Form.Group>
                </Row>
            </Form>
            <Form class="ex1">
                <Button variant="success" onClick={saveData} >
                    Submit
                </Button>
            </Form>




        </>
    )
}
