import { Button, Card, Table } from "react-bootstrap"
import { useState } from "react";

export default function FeaturedItem(props) {
    const [state, setState] = useState(0)

    function toggleShowButton() {
        setState(state => (state + 1) % 2)
    }
    return <Card>
        <img src={props.img} alt={props.name} />
        <h2> ${props.price} per unit </h2>
        <p> {props.description} </p>
        {
            state === 1 && (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th> Calories </th>
                            <th> Fat </th>
                            <th> Carbohydrates Fat </th>
                            <th> Protein </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> {props.nutrition?.calories ?? "0g"} </td>
                            <td> {props.nutrition?.fat ?? "0g"} </td>
                            <td> {props.nutrition?.carbohydrates ?? "0g"} </td>
                            <td> {props.nutrition?.protein ?? "0g"} </td>
                        </tr>
                    </tbody>
                </Table>
            )
        }
        <Button onClick={toggleShowButton}> {state === 0 ? "Show Nutrition Facts" : "Hide Nutrition Facts"} </Button>
    </Card>
}
