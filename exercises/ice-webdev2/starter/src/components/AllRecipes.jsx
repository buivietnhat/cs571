import { useEffect, useState } from "react";
import Recipe from "./Recipe";

import Stopwatch from "../utils/Stopwatch";
import { Container, Row, Col, Pagination } from "react-bootstrap"


Stopwatch.start();

export default function AllRecipes(props) {

    const [recies, setRecipes] = useState([])
    useEffect(() => {
        fetch("https://cs571.org/rest/s25/ice/all-recipes", {
            headers: {
                "X-CS571-ID": CS571.getBadgerId()
            }
        })
            .then(res => res.json())
            .then(data => {
                setRecipes(data)

            })

    }, []);

    const [page, setPage] = useState(1)

    return <div>
        <h1>Welcome to Badger Recipes!</h1>
        <Container>
            <Row>
                {
                    recies.length > 0 ? recies.map(r => {
                        return <Col xs={12} md={4} key={r.name} >
                            <Recipe {...r} />
                        </Col>
                    }) : <p> Still loading ... </p>
                }
            </Row>
        </Container>
        <Pagination>
            <Pagination.Item active={page === 1} onClick={() => setPage(1)}> 1 </Pagination.Item>
            <Pagination.Item active={page === 2} onClick={() => setPage(1)}> 2 </Pagination.Item>
        </Pagination>

    </div >
}
