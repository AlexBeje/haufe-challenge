import styled from "styled-components";

// INTERFACES
import { ICharacters, ICharacter } from "../Interfaces/ICharacters";

// COMPONENT
import Card from "../components/Molecules/Card";

// STYLE
import * as colors from "../styles/colors";

export default function Home({ characters }: { characters: ICharacters }) {

  const renderCharacters = () => {
    if (characters) {
      return characters.results.map((character: ICharacter) => (
        <StyledCard character={character} key={character.id} />
      ));
    } else {
      console.error("No characters found");
    }
  };
  renderCharacters();
  return <Container>{renderCharacters()}</Container>;
}

// STYLED COMPONENTS
const Container = styled.div`
  background: ${colors.background};
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledCard = styled(Card)`
  margin-bottom: 2rem;
  :first-of-type {
    margin-top: 2rem;
  }
`

// GET STATIC PROPS (API CALL)
export async function getStaticProps() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const characters = await res.json();

  return {
    props: {
      characters,
    },
  };
}
