import { useState } from "react";
import MenuItem from "./MenuItem";
import data from "./dataMenu";

function Menu() {
  const [menuItems] = useState(data);

  return (
    <>
      <h1>Dessert</h1>
      <div id="restaurante">
        {menuItems.map((item) => (
          <MenuItem
            key={item.name}
            name={item.name}
            category={item.category}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
}

export default Menu;
