import { Container, Button, Nav, Navbar, Row, Col } from "react-bootstrap";
import data from "./data";

import { useState } from "react";
import { Routes, Route, useNavigate, Outlet, Link } from "react-router-dom";
//라우터는 창을 새로 불러오는게 아니라 재렌더링 방식을 사용

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DetailPage from "./pages/Detail.js";
import Cart from "./pages/Cart.jsx";

function App() {
  const [items, setItems] = useState(data); // data는 변수니깐 state로 (data => items)
  const [photo, setPhoto] = useState(["/11.webp", "/12.webp", "/13.webp"]);
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
                navigate("/cart");
              }}
            >
              장바구니
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
        {/* 
        :id  => URL파라미터를 통해서 상세 아이템 변경
        */}
        <Route
          path="/detail/:id"
          element={<DetailPage items={items} img={photo} />}
        ></Route>

        {/*  */}

        <Route path="/about" element={<AboutPage />}>
          <Route path="address" element={<div>주소</div>}></Route>
          <Route path="location" element={<div>위치</div>}></Route>
        </Route>
        <Route
          path="/about/member"
          element={<div>어바웃 멤버페이지</div>}
        ></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<div>그 외의 페이지</div>}></Route>
      </Routes>
      {/* 리액트는 하나의 html을 다시 그리는 방식이기 때문에
      html을 이동하는 <a>태그 보다는 <Link>를 사용 */}
      {/* <Link to={"/about/address"}>
        <Button variant={"success"}>리액트 부트스트랩 버튼</Button>
      </Link> */}
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

//어바웃 페이지 컴포넌트
function AboutPage() {
  return (
    <>
      <p>
        <h4>어바웃 페이지</h4>
        <Outlet />
        {/* Outlet으로 중첩 Route의 위치를 결정 */}
      </p>
    </>
  );
}
