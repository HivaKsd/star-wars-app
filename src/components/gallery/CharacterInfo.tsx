import CloseIcon from "@mui/icons-material/Close";
import "./CharacterInfo.css";

function infoBox(props: any) {
  console.log("props.character: ", props.character);

  return (
    <div>
      <div className="infoBox">
        <div>
          <div id="close">
            <CloseIcon id="closeBtn" onClick={props.closeCharacterInfo} />
          </div>
          <p>Name: {props.character.name}</p>
          <p>Height: {props.character.height}</p>
          <p>Hair Color: {props.character.hair_color}</p>
          <p>Skin Color: {props.character.skin_color}</p>
          <p>Eye Color: {props.character.eye_color}</p>
          <p>Birth Year: {props.character.birth_year}</p>
          <p>Gender: {props.character.gender}</p>
        </div>
      </div>
    </div>
  );
}

export default infoBox;
