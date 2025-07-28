const TextField = ({ id, label, type, value, name }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} name={name} value={value} />
    </>
  );
};

export default TextField;
