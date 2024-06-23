import Button from '../atoms/Button';
import Text from '../atoms/Text';

const Sheet = ({ id, currency, name, onDelete, onEdit, onViewDetails }) => {
  return (
    <div
      className="bg-black p-4 rounded-lg shadow-md text-white mb-4 items-center"
      onClick={() => onViewDetails(id)}
    >
      <h3 className="text-purple-400">{name}</h3>
      <Text>Currency: {currency}</Text>
      <div className="flex justify-end">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(id);
          }}
          className="bg-red-600 hover:bg-red-800 mr-2"
        >
          Delete
        </Button>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onEdit(id);
          }}
          className="bg-blue-600 hover:bg-blue-800"
        >
          Edit
        </Button>
      </div>
    </div>
  );
};

export default Sheet;
