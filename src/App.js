import { Container, Button, Nav, Navbar, Row, Col } from "react-bootstrap";
import data from "./data";

import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
//라우터는 창을 새로 불러오는게 아니라 재렌더링 방식을 사용

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DetailPage from "./pages/Detail.js";

function App() {
  const [items, setItems] = useState(data);
  const [photo, setPhoto] = useState(["11.webp", "12.webp", "13.webp"]);
  const navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">
            <img src={"/logo192.png"} width={"50px"} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              홈
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              상세페이지
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate(-1);
              }}
            >
              뒤로가기
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate(1);
              }}
            >
              앞으로가기
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <>
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
              </Container>
            </>
          }
        ></Route>
        <Route path="/detail" element={<DetailPage items={items} />}></Route>
      </Routes>
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
