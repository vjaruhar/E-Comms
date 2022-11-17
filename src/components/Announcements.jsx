import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcements = () => {
  return (
    <Container>
      Big Sale!!! Free shipping on Orders above &#8377;1500!!
    </Container>
  );
};

export default Announcements;
