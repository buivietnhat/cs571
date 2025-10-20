import { useContext } from "react";
import { Col, Row } from "react-bootstrap"
import BadgerBudsDataContext from "../../../contexts/BadgerBudsDataContext";
import BadgerBudSummary from "../../BadgerBudSummary";

export default function BadgerBudsAdoptable(props) {
  const { buds } = useContext(BadgerBudsDataContext)
  let savedCatIds = JSON.parse(sessionStorage.getItem("save_cat_ids")) || []
  let adoptedBuds = JSON.parse(sessionStorage.getItem("adopt_cat_ids")) || []
  const availableBuds = buds.filter(b => !savedCatIds.includes(b.id) && !adoptedBuds.includes(b.id))
  return <div>
    <h1>Available Badger Buds</h1>
    <p>The following cats are looking for a loving home! Could you help?</p>
    <Row>
      {
        availableBuds.length === 0 ? <p> There is no bud available yet </p> :
          availableBuds.map(bud => {
            return <Col
              xs={6}
              md={4}
              lg={3}
              xxl={2}
              key={bud.id}>
              <BadgerBudSummary
                {...bud}
              />
            </Col>
          })
      }
    </Row>
  </div >
}
