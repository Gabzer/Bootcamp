export default function Select({ list, onSelectChange = null }) {
  function handleOnChange(evt) {
    if (onSelectChange) {
      onSelectChange(evt);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h3>Escolha o municipio:</h3>
      <select onChange={handleOnChange}>
        {list.map(item => {
          return (
            <option className="shadow-2xl" key={item.id} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
