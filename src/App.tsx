import { Link } from 'react-router-dom';
import { useBooksQuery } from './graphql/generated/graphql';
import { Book } from './types/book.type';
import Books from './components/book/Books';
import ErrorCard from './components/cards/ErrorCard';

function App() {
  const { data, error, loading } = useBooksQuery();

  if (loading) {
    return <h3 className="text-xl font-bold">Loading...</h3>;
  }

  if (error) {
    return (
      <div className="container mx-auto mt-2">
        <ErrorCard message={error.message} />
      </div>
    )
  }

  const renderBooks = () => {
    const books = (data?.getBooks?.books?.filter((book) => book !== null) as Book[]) || []
    if(books.length === 0){
      return (
        <div className="
          flex flex-col 
          items-center justify-center 
          h-64 
          text-gray-600
        ">
          <h2 className="
            text-3xl font-semibold 
            mb-4
          ">
            No books found.
          </h2>
          <p className="
            text-xl 
            text-center
          ">
            It looks like you don't have any books. Click on "New Book" to start adding some!
          </p>
        </div>
      );
    } else {
      return <Books books={books} />;
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between bg-gray-200 p-4">
        <h1 className="text-xl font-semibold">Book Management System</h1>
        <Link
          to="create-book"
          className="
            inline-flex items-center justify-center 
            px-5 py-2 border border-transparent 
            text-base font-medium rounded-md 
            text-white bg-green-500
          "
        >
          New Book
        </Link>
      </div>
      {renderBooks()}
    </div>
  );
}

export default App;
