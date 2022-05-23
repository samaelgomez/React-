import React from "react";
import { Menubar } from "primereact/menubar";

const MenubarDemo = ({props}) => {
const items = props;

  const start = (
    <img
      alt="logo"
      src="showcase/images/logo.png"
      onError={(e) =>
        (e.target.src =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfi2bCYjJcJYL4Jc5RmDKdCWH_qwOTXnqNLA&usqp=CAU")
      }
      height="40"
      className="mr-2"
    ></img>
  );

  return (
    <div>
      <div className="card">
        <Menubar model={items} start={start} />
      </div>
    </div>
  );
};

export default MenubarDemo;
