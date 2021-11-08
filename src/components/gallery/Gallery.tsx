import { useEffect, useState } from "react";
import { Pagination } from "semantic-ui-react";
import CharacterInfo from "./CharacterInfo";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import "./Gallery.css";

const Gallery = () => {
  const [characters, setCharacters] = useState([]);
  const [foundCharacters, setFoundCharacters] = useState([]);
  const [name, setName] = useState("");
  const [activePage, setActivePage] = useState(1);
  const [apiUrl, setApiUrl] = useState("https://swapi.dev/api/people/");
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    async function get() {
      const response = await fetch(apiUrl).then((res) => res.json());
      setCharacters(response.results);
      console.log(apiUrl);
    }
    get();
  }, [apiUrl]);

  function onChange(e: any, pageInfo: any) {
    setActivePage(pageInfo.activePage);
    setApiUrl(
      "https://swapi.dev/api/people/?page=" + pageInfo.activePage.toString()
    );
  }

  function openCharacterInfo(character: any) {
    setSelectedCharacter(character);
  }

  function closeCharacterInfo() {
    setSelectedCharacter(null);
  }

  function filter(e: any) {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = characters.filter((character: any) => {
        return character.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundCharacters(results);
    } else {
      setFoundCharacters(characters);
    }
    setName(keyword);
  }
  const clearInput = () => {
    setFoundCharacters([]);
    setName("");
  };

  return (
    <section>
      <div className="header">STAR WARS CHARACTERS</div>
      <div className="main">
        <div
          className="characterImageLeft"
          style={{ backgroundImage: `url(img/star-war3.png)` }}
        ></div>
        <div className="middle">
          <div className="search">
            <div className="searchInputs">
              <input
                type="text"
                placeholder="Search a Character"
                value={name}
                onChange={filter}
              />
              <div className="searchIcon">
                {foundCharacters.length === 0 ? (
                  <SearchIcon />
                ) : (
                  <CloseIcon id="clearBtn" onClick={clearInput} />
                )}
              </div>
            </div>
          </div>

          {selectedCharacter ? (
            <div>
              <div
                className="darkBackground"
                onClick={() => closeCharacterInfo()}
              ></div>

              <CharacterInfo
                character={selectedCharacter}
                closeCharacterInfo={closeCharacterInfo}
              />
            </div>
          ) : (
            ""
          )}

          <div className="container">
            {foundCharacters && foundCharacters.length > 0
              ? foundCharacters.map((character) => {
                  return (
                    <div
                      key={character["name"]}
                      onClick={() => openCharacterInfo(character)}
                      className="galleryItem"
                    >
                      {character["name"]}
                    </div>
                  );
                })
              : characters.map((character) => {
                  return (
                    <div
                      key={character["name"]}
                      onClick={() => openCharacterInfo(character)}
                      className="galleryItem"
                    >
                      {character["name"]}
                    </div>
                  );
                })}
          </div>

          <Pagination
            activePage={activePage}
            onPageChange={onChange}
            totalPages={8}
            ellipsisItem={null}
          />
        </div>
        <div
          className="characterImageRight"
          style={{
            backgroundImage: `url(img/the-last-jedi-captain-phasma.png)`,
          }}
        ></div>
      </div>
    </section>
  );
};

export default Gallery;
