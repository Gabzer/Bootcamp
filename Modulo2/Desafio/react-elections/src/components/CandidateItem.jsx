import {
  AiOutlineEdit as EditIcon,
  AiOutlineDelete as DeleteIcon,
} from 'react-icons/ai';

export default function CandidateItem({ children: candidate }) {
  const { title, description } = candidate;

  return (
    <div className="border p-2 m-2">
      <ul className="flex flex-col space-y-4">
        <li>
          <strong>Titulo:</strong> <span>{title}</span>
        </li>
        <li>
          <strong>Descricao:</strong> <span>{description}</span>
        </li>
      </ul>
      <div className="mt-4 flex flex-row items-center justify-end space-x-4"></div>
    </div>
  );
}
