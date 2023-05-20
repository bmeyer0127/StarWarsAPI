const CARD_STYLES =
  "card d-flex flex-row justify-content-between p-2 align-items-center";

function CharacterCard(props) {
  return (
    <div className={CARD_STYLES}>
      <ion-icon size="large" name="accessibility-outline"></ion-icon>
      <h2 className="m-0">{props.name}</h2>
      <table>
        <tr>
          <td>Gender: </td>
          <td className="ps-2">{props.gender}</td>
        </tr>
        <tr>
          <td>Height: </td>
          <td className="ps-2">{props.height}</td>
        </tr>
        <tr>
          <td>Weight: </td>
          <td className="ps-2">{props.weight}</td>
        </tr>
        <tr>
          <td>Birth Year: </td>
          <td className="ps-2">{props.birthYear}</td>
        </tr>
      </table>
    </div>
  );
}

export default CharacterCard;
