import { useState } from "react";

export default function Player({ initialName, symbol}) {

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    let editTablePlayerName = <span className="player-name" >{playerName} </span>;
    //let btnCaption = 'Edit';

    if (isEditing) {
        editTablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
        // edittablePlayerName = <input type="text" required defaultValue={name} />; yukarıda farklı bir yaklaşım kullanacağı<
       // btnCaption = 'Save';
    }

    return(
        <li>
        <span className="player" >
            {editTablePlayerName}
          <span className="player-symbol" >{symbol} </span>
          </span>
          <button onClick={handleEditClick} className="edit">{isEditing ? 'Save' : 'Edit'} </button>
        </li>
    );
}