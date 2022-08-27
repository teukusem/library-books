import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";
// Data
import { fetchUserById, addDetailData } from "../store/dataSlice/dataSlice";
// Component
import { Search, CardComponent, Logout } from "../component";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const title = "Home";
  document.title = "Library Books | " + title;

  const [search, setSearch] = useState("");
  const { data, isLoading } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchUserById());
  }, []);

  const onClickDetail = (item) => {
    dispatch(addDetailData(item));
    navigate("/detail-book");
  };

  const onClickLogOut = () => {
    navigate("/");
  };

  return (
    <>
      <Container>
        <Row className="pt-3">
          <Col>
            <Logout onClick={onClickLogOut} />
          </Col>
          <Col>
            <div className="d-flex justify-content-end flex-end pt-1">
              <Search
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          {isLoading ? (
            <Spin />
          ) : (
            data
              ?.filter((item) => {
                if (search === "") {
                  return item;
                } else if (
                  item.volumeInfo.title
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item, index) => {
                return (
                  <Col key={item.id} lg={2} className="mt-3">
                    <CardComponent
                      onClick={() => onClickDetail(item)}
                      image={item.volumeInfo.imageLinks.smallThumbnail}
                      title={item.volumeInfo.title.slice(0, 31)}
                    />
                  </Col>
                );
              })
          )}
        </Row>
      </Container>
    </>
  );
}

export default Home;
