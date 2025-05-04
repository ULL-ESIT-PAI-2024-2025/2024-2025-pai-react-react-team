
interface Prop {
  title: string;
  items: string[];
}

function ListComponent({title, items}: Prop) {
  return (
    <>
      <h1>{title}</h1>
      <ul>
       {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListComponent;