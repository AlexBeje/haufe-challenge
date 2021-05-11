import styled from "styled-components";

// STYLE
import * as devices from "./devices";

export const H1 = styled.h1`
  font-size: 1.5rem;
  @media ${devices.desktop} {
    font-size: 2rem;
    line-height: 2rem;
  }
`;

export const H2 = styled.h2`
  font-size: 1rem;
  @media ${devices.desktop} {
    font-size: 1.3rem;
    line-height: 1.3rem;
  }
`;

export const Normal = styled.p`
  font-size: 1rem;
  line-height: 1rem;
  @media ${devices.desktop} {
    font-size: 1.1rem;
  }
`;