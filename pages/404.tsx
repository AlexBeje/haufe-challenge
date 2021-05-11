import styled from "styled-components";

// STYLE
import * as colors from "../styles/colors";
import * as typography from "../styles/typography";

function Custom404() {
  return <Message>404 - Page Not Found</Message>;
}

const Message = styled(typography.H1)`
  background: ${colors.background};
  display: grid;
  min-height: 100vh;
  place-items: center;
`;

export default Custom404;