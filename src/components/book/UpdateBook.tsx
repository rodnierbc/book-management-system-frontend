import { FormEvent, useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ErrorCard from '../cards/ErrorCard';
import { useBookQuery, useUpdateBookMutation } from '../../graphql/generated/graphql';

const UpdateBook = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { data, loading, error } = useBookQuery({
    variables: { id: id! },
  });

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publicationYear, setPublicationYear] = useState(currentYear);
  const [updateError, setUpdateError] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const [updateBookMutation] = useUpdateBookMutation();

  useEffect(() => {
    if (data && data.getBook?.book) {
      setTitle(data.getBook.book.title);
      setAuthor(data.getBook.book.author);
      setPublicationYear(data.getBook.book.publicationYear);
    }
  }, [data]);

  if (loading) {
    return <h3 className="text-xl font-bold">Loading...</h3>;
  }

  if (error) {
    return <h3 className="text-xl font-bold">{error.message}</h3>;
  }

  const onFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (title === '' || author === '') {
      setValidationError('Title and author are required');
      return;
    }
    try {
      await updateBookMutation({
        variables: {
          input: {
            id: id!,
            title,
            author,
            publicationYear,
          },
        },
        update: (cache) => {
          cache.evict({ fieldName: 'getBooks' });
        },
      });
      setUpdateError(null);
      navigate('/');
    } catch (err: any) {
      setUpdateError(err.message);
    }
  };

  return (
    <div>
      <div className="max-w-xl mx-auto mt-3">{updateError && <ErrorCard message={updateError} />}</div>
      <div className="max-w-xl mx-auto border-2 border-gray-300 rounded shadow mt-3">
        <div className="bg-gray-300 p-2 flex justify-between">
          <div>Update Book</div>
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
          <button className="bg-green-500 text-white rounded px-3 py-1 mt-3">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;
