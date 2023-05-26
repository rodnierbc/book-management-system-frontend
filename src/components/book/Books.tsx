import { Link } from 'react-router-dom';
import { Book } from '../../types/book.type';
import { useDeleteBookMutation } from '../../graphql/generated/graphql';

const BookRow = ({ id, title, author, publicationYear }: { id: string; title: string; author: string; publicationYear: number }) => {
  const [deleteBookMutation] = useDeleteBookMutation();

  const deleteBook = async () => {
    await deleteBookMutation({
      variables: { id },
      update: (cache) => {
        cache.evict({ id: 'Book:' + id });
      },
    });
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{title}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{author}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{publicationYear}</td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <Link to={`/update-book/${id}`} className="text-indigo-600 hover:text-indigo-900 mr-2">
          Edit
        </Link>
        <button onClick={deleteBook} className="text-red-600 hover:text-red-900">
          Delete
        </button>
      </td>
    </tr>
  );
};

const Books = ({ books }: { books: Book[] }) => (
  <table className="min-w-full divide-y divide-gray-200 shadow sm:rounded-lg mb-3 max-w-xl mx-auto">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pub/Year</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {books.map((book) => (
        <BookRow key={book.id} {...book} />
      ))}
    </tbody>
  </table>
);

export default Books;
