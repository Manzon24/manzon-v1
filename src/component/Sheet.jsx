


const Sheet = ({ currency, type, name }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <p className="text-gray-700">Currency: {currency}</p>
        <p className="text-gray-700">Type: {type}</p>
      </div>
    );
  };

  export default Sheet;