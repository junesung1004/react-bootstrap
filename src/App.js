import logo from "./logo.svg";
import { Container, Button, Nav, Navbar, Row, Col } from "react-bootstrap";
import data from "./data";
import { num1, num2, num3 } from "./data.js";
import item1 from "./10.jpg";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [items, setItems] = useState(data);
  const [photo, setPhoto] = useState(["11.webp", "12.webp", "13.webp"]);
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={"/logo192.png"} width={"50px"} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">item1</Nav.Link>
            <Nav.Link href="#features">item2</Nav.Link>
            <Nav.Link href="#pricing">item3</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <Container>
        <Row>
          {/* data갯수와 image가 바뀔 수 있으니까 useState 처리 */}
          {/* map을 통해서 useState(data) 만큼 반복 */}
          {items.map((el, idx) => (
            <ItemCol data={el} img={photo[idx]} key={idx} />
          ))}

          {/* <ItemCol data={data[0]} img={"/11.webp"} />
          <ItemCol data={data[1]} img={"/12.webp"} />
          <ItemCol data={data[2]} img={"/13.webp"} /> */}
        </Row>

        {/* <Row>
          <Col>
            <img src={"/11.webp"} width={"300px"} height={"300px"} />
            <h4>{data[0].title}</h4>
            <p>{data[0].content}</p>
            <p>{data[0].price}원</p>
          </Col>

          <Col>
            <img src={"/12.webp"} width={"300px"} height={"300px"} />
            <h4>{data[1].title}</h4>
            <p>{data[1].content}</p>
            <p>{data[1].price}원</p>
          </Col>

          <Col>
            <img src={"/13.webp"} width={"300px"} height={"300px"} />
            <h4>{data[2].title}</h4>
            <p>{data[2].content}</p>
            <p>{data[2].price}원</p>
          </Col>
        </Row> */}
      </Container>
      <br />
      <Button variant="danger">Danger</Button>{" "}
    </div>
  );
}

export default App;

//컴포넌트는 맨 앞글자는 대문자
//retufn에 html(jsx) 코드 적용
//컴포넌트로 분리를 했으면 props로 받아와야 하는 부분을 변경
function ItemCol(props) {
  return (
    <>
      <Col>
        <img src={props.img} width={"300px"} height={"300px"} />
        <h4>{props.data.title}</h4>
        <p>{props.data.content}</p>
        <p>{props.data.price}원</p>
      </Col>
    </>
  );
}
