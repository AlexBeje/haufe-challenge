import styled from "styled-components";

export default function Home() {
  return (
    <Layout>
      <Title>Welcome!</Title>
      <Subtitle>To Bia's Website.</Subtitle>
    </Layout>
  );
}

const Layout = styled.div`
  background: #222222;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Title = styled.div`
  color: gold;
  font-family: Mandatory;
  font-size: 5rem;
  font-weight: 700;
  margin: auto;
  margin-bottom: 1rem;
`;

const Subtitle = styled.div`
  font-size: 2rem;
  margin: auto;
  margin-top: 0;
`;
