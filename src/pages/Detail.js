import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

// Component
import { BackButton, DetailPage } from "../component";

function Detail() {
  const navigate = useNavigate();

  const title = "Detail";
  document.title = "Library Books | " + title;

  const { detailData } = useSelector((state) => state.books);

  return (
    <>
      <Container>
        <BackButton onClick={() => navigate("/home")} />
        <Row>
          <DetailPage
            image={detailData.volumeInfo.imageLinks.smallThumbnail}
            title={detailData.volumeInfo.title}
            publisher={"John Wiley & Sons"}
            description={detailData.volumeInfo.description}
          />
        </Row>
      </Container>
    </>
  );
}

export default Detail;
