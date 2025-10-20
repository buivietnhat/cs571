import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import BadgerBudsDataContext from "../contexts/BadgerBudsDataContext";

export default function MyBuds(props) {
    const { savedBudsChange } = useContext(BadgerBudsDataContext)
    const imgPrefix = "https://raw.githubusercontent.com/CS571-S25/hw5-api-static-content/main/cats/"
    function unselectBud() {
        let savedItems = JSON.parse(sessionStorage.getItem("save_cat_ids")) || []
        savedItems = savedItems.filter(id => id !== props.id)
        sessionStorage.setItem('save_cat_ids', JSON.stringify(savedItems))
        savedBudsChange(savedItems)
        alert(`${props.name} has been removed from your basket`)
    }
    return <Card>
        <img src={imgPrefix + props.imgIds[0]} alt={"this is a iamge of " + props.name} />
        <h3> {props.name}</h3>
        <div className="d-flex justify-content-center gap-2">
            <Button variant="primary" onClick={unselectBud}> Unselect</Button>
            <Button variant="secondary" >
                ❤️ Adopt
            </Button>
        </div>

    </Card >
}
