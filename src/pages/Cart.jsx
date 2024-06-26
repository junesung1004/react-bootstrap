import React from "react";
import "./Cart.css";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeData } from "../store";

//   - >  /cart로 이동하면 보여줄 컴포넌트
export default function Cart() {
  //등록된 슬라이스를 store에서 갖다쓴다 (리덕스)
  //useSelector로 슬라이스 가져옴
  let slice1 = useSelector((state) => {
    return state;
  });
  console.log(slice1);

  let data = useSelector((state) => {
    return state.slice2;
  });
  console.log("slice2 :", data);

  //리덕스 슬라이스 변경기능 변수화
  let dispatch = useDispatch();
  console.log("slice1 :", slice1);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>설명</th>
            <th>갯수</th>
            <th>추가</th>
          </tr>
        </thead>
        <tbody>
          {/* tr~/tr 반복문을 기반으로 */}
          {data.map((el, idx) => {
            return (
              <tr key={idx}>
                <td>{el.id}</td>
                <td>{el.title}</td>
                <td>{el.content}</td>
                <td>1</td>
                <td>
                  <Button>+</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
