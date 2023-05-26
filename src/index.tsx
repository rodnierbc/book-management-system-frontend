import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './tailwind.css';
import App from './App';
import CreateBook from './components/book/CreateBook';
import UpdateBook from './components/book/UpdateBook';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const uri: string = 'http://localhost:8000/graphql';

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

root.render(
  <Router>
    <ApolloProvider client={client}>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/create-book" element={<CreateBook />} />
          <Route path="/update-book/:id" element={<UpdateBook />} />
        </Routes>
      </React.StrictMode>
    </ApolloProvider>
  </Router>
);
