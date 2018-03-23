import React from "react";

const ListItem = props => (
  <tr>
    <td>{props.rank}</td>
    <td>
      <div className="user">
        <img src={props.img} alt={props.username} />
        <a
          href={`https://www.freecodecamp.org/${props.username}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.username}
        </a>
      </div>
    </td>
    <td>{props.recent}</td>
    <td>{props.alltime}</td>
  </tr>
);

export default ListItem;
