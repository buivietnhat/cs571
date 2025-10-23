import React, { useEffect, useState } from "react"
import BadgerMessage from "./BadgerMessage";
import { Col, Row } from "react-bootstrap"

export default function BadgerChatroom(props) {

  const [messages, setMessages] = useState([]);

  const loadMessages = () => {
    fetch(`https://cs571.org/rest/s25/hw6/messages?chatroom=${props.name}&page=1`, {
      headers: {
        "X-CS571-ID": CS571.getBadgerId()
      }
    }).then(res => res.json()).then(json => {
      setMessages(json.messages)
    })
  };


  // Why can't we just say []?
  // The BadgerChatroom doesn't unload/reload when switching
  // chatrooms, only its props change! Try it yourself.
  useEffect(loadMessages, [props]);

  return <>
    <h1>{props.name} Chatroom</h1>
    {
      /* TODO: Allow an authenticated user to create a post. */
    }
    <hr />
    {
      messages.length > 0 ?
        <>
          <Row>
            {
              /* TODO: Complete displaying of messages. */
              messages.map(m => {
                return <Col
                  xs={6}
                  md={4}
                  lg={3}
                  xxl={2}
                  key={m.id}>
                  <BadgerMessage
                    {...m}
                  />
                </Col>

              })
            }
          </Row>
        </>
        :
        <>
          <p>There are no messages on this page yet!</p>
        </>
    }
  </>
}
