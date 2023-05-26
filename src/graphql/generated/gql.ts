/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  'query Book($id: String!) {\n  getBook(id: $id) {\n    book {\n      id\n      author\n      publicationYear\n      title\n    }\n    error {\n      code\n    }\n    success\n  }\n}':
    types.BookDocument,
  'query Books {\n  getBooks {\n    books {\n      id\n      title\n      author\n      publicationYear\n    }\n    error {\n      code\n      message\n    }\n    success\n  }\n}':
    types.BooksDocument,
  'mutation CreateBook($input: BookInput!) {\n  createBook(input: $input) {\n    book {\n      author\n      id\n      publicationYear\n      title\n    }\n    error {\n      code\n      message\n    }\n    success\n  }\n}':
    types.CreateBookDocument,
  'mutation DeleteBook($id: String!) {\n  deleteBook(id: $id) {\n    book {\n      author\n      createdAt\n      id\n      publicationYear\n      title\n    }\n    error {\n      code\n      message\n    }\n    success\n  }\n}':
    types.DeleteBookDocument,
  'mutation UpdateBook($input: UpdateBookInput!) {\n  updateBook(input: $input) {\n    book {\n      title\n    }\n    error {\n      message\n      code\n    }\n    success\n  }\n}':
    types.UpdateBookDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query Book($id: String!) {\n  getBook(id: $id) {\n    book {\n      id\n      author\n      publicationYear\n      title\n    }\n    error {\n      code\n    }\n    success\n  }\n}'
): (typeof documents)['query Book($id: String!) {\n  getBook(id: $id) {\n    book {\n      id\n      author\n      publicationYear\n      title\n    }\n    error {\n      code\n    }\n    success\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query Books {\n  getBooks {\n    books {\n      id\n      title\n      author\n      publicationYear\n    }\n    error {\n      code\n      message\n    }\n    success\n  }\n}'
): (typeof documents)['query Books {\n  getBooks {\n    books {\n      id\n      title\n      author\n      publicationYear\n    }\n    error {\n      code\n      message\n    }\n    success\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation CreateBook($input: BookInput!) {\n  createBook(input: $input) {\n    book {\n      author\n      id\n      publicationYear\n      title\n    }\n    error {\n      code\n      message\n    }\n    success\n  }\n}'
): (typeof documents)['mutation CreateBook($input: BookInput!) {\n  createBook(input: $input) {\n    book {\n      author\n      id\n      publicationYear\n      title\n    }\n    error {\n      code\n      message\n    }\n    success\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation DeleteBook($id: String!) {\n  deleteBook(id: $id) {\n    book {\n      author\n      createdAt\n      id\n      publicationYear\n      title\n    }\n    error {\n      code\n      message\n    }\n    success\n  }\n}'
): (typeof documents)['mutation DeleteBook($id: String!) {\n  deleteBook(id: $id) {\n    book {\n      author\n      createdAt\n      id\n      publicationYear\n      title\n    }\n    error {\n      code\n      message\n    }\n    success\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation UpdateBook($input: UpdateBookInput!) {\n  updateBook(input: $input) {\n    book {\n      title\n    }\n    error {\n      message\n      code\n    }\n    success\n  }\n}'
): (typeof documents)['mutation UpdateBook($input: UpdateBookInput!) {\n  updateBook(input: $input) {\n    book {\n      title\n    }\n    error {\n      message\n      code\n    }\n    success\n  }\n}'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
