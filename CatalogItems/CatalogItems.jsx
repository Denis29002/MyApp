import React from "react";

function CatalogItems() {
  const data = {
    goods: [
      { title: "iPhone", price: 39000, idOffice: "2" },
      { title: "Xiaomi", price: 34400, idOffice: "3" },
      { title: "LG", price: 19000, idOffice: "1" },
      { title: "Motorolla", price: 9800, idOffice: "6" },
    ],
    includes: [
      { id: "1", location: "ул. Минская" },
      { id: "2", location: "ул. Гоголя" },
      { id: "3", location: "ул. Пушкина" },
    ],
  };

  console.log(data[1]);
  return (
    <div>
      <h1>Товары:</h1>
      <ul>
        {data["goods"].map((el) => (
          <div>
            <li>{el.title}</li>
            <li>{el.price}</li>
            <li>
              {
                data["includes"].filter((item) => item.id === el.idOffice)[0]
                  ?.location
              }
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default CatalogItems;
