import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ErrorCard from '../cards/ErrorCard';
import { useCreateBookMutation } from '../../graphql/generated/graphql';

const CreateBook = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publicationYear, setPublicationYear] = useState(currentYear);
  const [createError, setCreateError] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const [createBookMutation] = useCreateBookMutation();

  const onFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (title === '' || author === '') {
      setValidationError('Title and author are required');
      return;
    }
    try {
      await createBookMutation({
        variables: {
          input: {
            title,
            author,
            publicationYear,
          },
        },
        update: (cache) => {
          cache.evict({ fieldName: 'getBooks' });
        },
      });
      setCreateError(null);
      navigate('/');
    } catch (err: any) {
      setCreateError(err.message);
    }
  };

  return (
    <div>
      <div className="max-w-xl mx-auto mt-3">{createError && <ErrorCard message={createError} />}</div>
      <div className="max-w-xl mx-auto border-2 border-gray-300 rounded shadow mt-3">
        <div className="bg-gray-300 p-2 flex justify-between">
          <div>New Book</div>
          <Link to="/" className="float-right rounded text-white bg-indigo-600 px-3 py-1">
            Back
          </Link>
        </div>
        <form onSubmit={onFormSubmit} className="p-3">
          {validationError && <p className="text-red-500">{validationError}</p>}
          <div className="mb-2">
            <label htmlFor="title" className="block mb-1">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              className="w-full border rounded p-2"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="author" className="block mb-1">
              Author
            </label>
            <input
              id="author"
              type="text"
              value={author}
              className="w-full border rounded p-2"
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="publicationYear" className="block mb-1">
              Publication Year
            </label>
            <input
              id="publicationYear"
              type="number"
              min="1900"
              max={currentYear}
              step="1"
              value={publicationYear}
              className="w-full border rounded p-2"
              onChange={(e) => {
                setPublicationYear(Number(e.target.value));
              }}
            />
          </div>
          <button className="bg-green-500 text-white rounded px-3 py-1 mt-3">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateBook;
