import styled from "styled-components";

// INTERFACES
import { ICharacter } from "../../Interfaces/ICharacters";

// PIPES
import * as stringPipes from "../../pipes/stringPipes";

// STYLE
import * as colors from "../../styles/colors";
import * as devices from "../../styles/devices";
import * as typography from "../../styles/typography";

function Card({
  character,
  className,
}: {
  character: ICharacter;
  className?: string;
}) {
  const getColor = (character: ICharacter) => {
    if (character.status === "Alive") {
      return colors.green;
    } else if (character.status === "Dead") {
      return colors.red;
    } else {
      return colors.gray;
    }
  };

  const renderCharacterDetails = () => {
    return (
      <>
        <Bullet color={getColor(character)} />
        {stringPipes.capitalize(character.status) + " - " + character.species}
      </>
    );
  };

  const renderLastKnownLocation = () => {
    if (character.location.name !== "unknown") {
      return (
        <Location>
          <LocationLabel>Last known location: </LocationLabel>
          <LocationName>{character.location.name}</LocationName>
        </Location>
      );
    }
  };

  const renderFirstSeenIn = () => {
    if (character.origin.name !== "unknown") {
      return (
        <Location>
          <LocationLabel>First seen in: </LocationLabel>
          <LocationName>{character.origin.name}</LocationName>
        </Location>
      );
    }
  };

  return (
    <Container className={className}>
      <Image src={character.image}></Image>
      <Content>
        <Header>
          <Title>{character.name}</Title>
          <Subtitle>{renderCharacterDetails()}</Subtitle>
        </Header>
        {renderLastKnownLocation()}
        {renderFirstSeenIn()}
      </Content>
    </Container>
  );
}

// STYLED COMPONENTS
const Container = styled.div`
  background: ${colors.secondaryBackground};
  border-radius: 10px;
  box-shadow: 0 8px 10px -10px black;
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 300px;
  transition: background 100ms;
  :hover {
    background: ${colors.secondaryBackgroundHover};
    cursor: pointer;
  }
  @media ${devices.desktop} {
    flex-direction: row;
    min-width: 600px;
  }
`;

const Image = styled.img`
  border-radius: 10px 10px 0 0;
  object-fit: cover;
  @media ${devices.desktop} {
    border-radius: 10px 0 0 10px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  @media ${devices.desktop} {
    justify-content: center;
  }
`;

const Header = styled.div``;

const Title = styled(typography.H1)`
  margin-bottom: 0.8rem;
`;

const Subtitle = styled(typography.H2)`
  align-items: center;
  display: flex;
  margin-bottom: 1rem;
  @media ${devices.desktop} {
    margin-bottom: 2rem;
  }
`;

const Bullet = styled.span`
  background: ${(props) => props.color};
  box-shadow: ${(props) => colors.shadow(props.color)};
  border-radius: 6px;
  display: inline-block;
  height: 12px;
  margin-right: 0.8rem;
  width: 12px;
`;

const LocationLabel = styled(typography.Normal)`
  color: ${colors.accentText};
`;

const Location = styled(typography.Normal)`
  :not(:last-child) {
    margin-bottom: 1rem;
  }
  @media ${devices.desktop} {
    :not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`;

const LocationName = styled(typography.Normal)`
  margin-top: 0.5rem;
`;

export default Card;
