import { useContext, useState } from "react";
import { Card, Button } from "react-bootstrap";
import BadgerBudsDataContext from "../contexts/BadgerBudsDataContext";

export default function MyBuds(props) {
  const { savedBudsChange, saveAdoptedBudIds } = useContext(BadgerBudsDataContext)
  const imgPrefix = "https://raw.githubusercontent.com/CS571-S25/hw5-api-static-content/main/cats/"


  function unselectBud() {
    let savedItems = JSON.parse(sessionStorage.getItem("save_cat_ids")) || []
    savedItems = savedItems.filter(id => id !== props.id)
    sessionStorage.setItem('save_cat_ids', JSON.stringify(savedItems))
    savedBudsChange(savedItems)
    alert(`${props.name} has been removed from your basket`)
  }

  function adoptBud() {
    alert(`Thank you for adopting ${props.name}!`)
    let adoptedBuds = JSON.parse(sessionStorage.getItem("adopt_cat_ids")) || []
    if (!adoptedBuds.includes(props.id)) {
      adoptedBuds.push(props.id)
    }
    sessionStorage.setItem('adopt_cat_ids', JSON.stringify(adoptedBuds))
    saveAdoptedBudIds(adoptedBuds)
  }


  return <Card>
    <img src={imgPrefix + props.imgIds[0]} alt={"this is a image of " + props.name} />
    <h3> {props.name}</h3>
    <div className="d-flex justify-content-center gap-2">
      <Button variant="primary" onClick={unselectBud}> Unselect</Button>
      <Button variant="secondary" onClick={adoptBud}>
        ❤️ Adopt
      </Button>
    </div>

  </Card >
}
