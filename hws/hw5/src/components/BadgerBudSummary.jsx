import { useContext, useState } from "react";
import { Card, Button } from "react-bootstrap";
import BadgerBudsDataContext from "../contexts/BadgerBudsDataContext";

export default function BadgerBudSummary(props) {
    const [showMore, setShowMore] = useState(false)
    const { savedBudsChange } = useContext(BadgerBudsDataContext)
    function saveCat() {
        let savedItems = JSON.parse(sessionStorage.getItem("save_cat_ids")) || []
        if (!savedItems.includes(props.id)) {
            savedItems.push(props.id)
        }
        sessionStorage.setItem('save_cat_ids', JSON.stringify(savedItems))
        savedBudsChange(savedItems)
        alert(`${props.name} has been added to your basket`)
    }

    const imgPrefix = "https://raw.githubusercontent.com/CS571-S25/hw5-api-static-content/main/cats/"
    return <Card>
        <img src={imgPrefix + props.imgIds[0]} alt={"this is a iamge of " + props.name} />
        <h3> {props.name}</h3>
        {
            showMore && (
                <div>
                    <div> {props.gender}</div>
                    <div> {props.breed}</div>
                    <div> {props.age}</div>
                    <div> {props.description ?? ""}</div>
                </div>
            )
        }
        <div className="d-flex justify-content-center gap-2">
            <Button variant="primary" onClick={() => { setShowMore(!showMore) }}>{showMore ? "Show Less" : "Show More"}</Button>
            <Button variant="secondary" onClick={saveCat}>
                ❤️ Save
            </Button>
        </div>

    </Card>
}
