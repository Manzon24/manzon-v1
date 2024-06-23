const Select = ({ id, name, value, onChange, options, ...props }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block font-bold mb-2 text-white">{name}:</label>
      <div className="flex">
        <select
          id={id}
          name={name}
          className="border rounded-md p-2 w-full text-black"
          value={value}
          onChange={onChange}
          {...props}
        >
          <option value="">Select an option</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
