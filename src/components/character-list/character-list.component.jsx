import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const StyledCharacterPhoto = styled.div`
  position: relative;
  width: 33%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border: 6px solid #ffffff;
  cursor: pointer;

  img {
    width: 140%;
    position: absolute;
    top: 0;
    left: 0;
    filter: grayscale(1);
  }
  &:hover {
    img {
      filter: grayscale(0);
    }
  }
`;

export const CharacterPhoto = ({ character, setCharacterSelectIndex }) => {
  const { imageUrl, id } = character;

  return (
    <StyledCharacterPhoto
      onMouseEnter={() => setCharacterSelectIndex(id)}
      onMouseLeave={() => setCharacterSelectIndex(0)}
    >
      <img src={imageUrl} />
    </StyledCharacterPhoto>
  );
};

const CharacterList = ({ characters, setCharacterSelectIndex }) => {
  return (
    <Container>
      {characters.map((character) => (
        <CharacterPhoto
          key={`${character.id}`}
          character={character}
          setCharacterSelectIndex={setCharacterSelectIndex}
        ></CharacterPhoto>
      ))}
    </Container>
  );
};

export default CharacterList;
