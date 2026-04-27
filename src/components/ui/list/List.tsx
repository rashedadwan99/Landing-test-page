import React from "react";
type PropType<T> = {
  items: T[];
};

function List<T extends string | number | { id: number; name?: string }>(
  props: PropType<T>,
) {
  return (
    <ul className="list-none list-outside space-y-2">
      {props.items.map((item, index) => {
        if (typeof item === "object") {
          return <li key={item.id}>{item.name ?? item.id}</li>;
        }

        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
}

export default List;
