function CharacterCard(props) {
  return (
    <div className="card p-2 m-2">
      <div className="row align-items-center">
        <div className="col-auto">
          <ion-icon size="large" name="accessibility-outline"></ion-icon>
        </div>
        <div className="col-auto">
          <h2 className="m-0">{props.name}</h2>
        </div>
        <div className="col-auto">
          <table>
            <tbody>
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
