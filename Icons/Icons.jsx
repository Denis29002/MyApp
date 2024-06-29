import React, { useState } from "react";
import IconsItem from "./IconsItem/IconsItem";
import style from "./icons.module.css";

const icons = Array.from({ length: 25 }).fill("😀");

function Icons() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div>
      <div className={style.icons}>
        {icons.map((el, index) => (
          <IconsItem
            index={index}
            setActiveItem={setActiveItem}
            activeItem={activeItem}
          />
        ))}
      </div>
    </div>
  );
}

export default Icons;
