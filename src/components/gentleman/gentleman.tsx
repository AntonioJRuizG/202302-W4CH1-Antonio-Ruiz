import { dataCharacter } from "../../mocks/data";

export function Gentleman() {
  //const item = dataCharacter[0];
  return (
    <ul className="gentlemen">
      {dataCharacter.map((item, x) => (
        <li key={x} className="gentleman">
          <div className="gentleman__avatar-container">
            <img
              className="gentleman__avatar"
              src={"img/" + item.picture}
              alt={"The" + item.name + "pointing at you"}
            />
            <span className="gentleman__initial">{item.name.slice(0, 1)}</span>
          </div>
          <div className="gentleman__data-container">
            <h2 className="gentleman__name">{item.name}</h2>
            <ul className="gentleman__data-list">
              <li className="gentleman__data">
                <span className="gentleman__data-label">Profession:</span>
                {item.profession}
              </li>
              <li className="gentleman__data">
                <span className="gentleman__data-label">Status:</span>{" "}
                {item.status}
              </li>
              <li className="gentleman__data">
                <span className="gentleman__data-label">Twitter:</span>{" "}
                {item.twitter}
              </li>
            </ul>
          </div>
          <i className="icon gentleman__icon fas fa-check"></i>
          <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
        </li>
      ))}
    </ul>
  );
}
