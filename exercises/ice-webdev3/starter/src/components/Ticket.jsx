import { Button, Card } from "react-bootstrap";

const Ticket = (props) => {
    function moveToTODO() {

    }
    function moveToInProgress() {

    }
    function moveToDone() {

    }

    return <Card style={{ margin: "0.25rem" }}>
        <h2 style={{ fontSize: "1.25rem" }}>{props.name}</h2>
        <sub>{props.author}</sub>
        <br />
        <p>{props.description}</p>
        <Button onClick={moveToTODO}>Move to TODO</Button>
        <Button onClick={moveToInProgress} variant={"secondary"}>Move to InProgress</Button>
        <Button onClick={moveToDone} variant={"success"}>Move to Done</Button>
    </Card>
}

export default Ticket;
