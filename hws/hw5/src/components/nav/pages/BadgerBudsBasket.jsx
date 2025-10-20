import { useContext } from "react";
import { Col, Row } from "react-bootstrap"
import BadgerBudsDataContext from "../../../contexts/BadgerBudsDataContext";
import MyBuds from "../../MyBuds";

export default function BadgerBudsBasket(props) {
    const { buds } = useContext(BadgerBudsDataContext)
    let savedCatIds = JSON.parse(sessionStorage.getItem("save_cat_ids")) || []
    const savedBuds = buds.filter(b => savedCatIds.includes(b.id))
    console.log("saved buds", savedBuds)
    return <div>
        <h1>Badger Buds Basket</h1>
        <p>These cute cats could be all yours!</p>
        <Row>
            {
                savedBuds.length === 0 ? <p> There is no bud saved yet </p> :
                    savedBuds.map(bud => {
                        return <Col
                            xs={6}
                            md={4}
                            lg={3}
                            xxl={2}
                            key={bud.id}>
                            <MyBuds
                                {...bud}
                            />
                        </Col>
                    })
            }
        </Row>
    </div>
}
