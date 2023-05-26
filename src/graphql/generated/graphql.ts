/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Book = {
  __typename?: 'Book';
  author: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  publicationYear: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type BookErrorResponse = {
  __typename?: 'BookErrorResponse';
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type BookInput = {
  author: Scalars['String']['input'];
  publicationYear: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type BookResponse = {
  __typename?: 'BookResponse';
  book?: Maybe<Book>;
  error?: Maybe<BookErrorResponse>;
  success: Scalars['Boolean']['output'];
};

export type BooksResponse = {
  __typename?: 'BooksResponse';
  books?: Maybe<Array<Maybe<Book>>>;
  error?: Maybe<BookErrorResponse>;
  success: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBook?: Maybe<BookResponse>;
  deleteBook?: Maybe<BookResponse>;
  updateBook?: Maybe<BookResponse>;
};

export type MutationCreateBookArgs = {
  input: BookInput;
};

export type MutationDeleteBookArgs = {
  id: Scalars['String']['input'];
};

export type MutationUpdateBookArgs = {
  input: UpdateBookInput;
};

export type Query = {
  __typename?: 'Query';
  getBook?: Maybe<BookResponse>;
  getBooks?: Maybe<BooksResponse>;
};

export type QueryGetBookArgs = {
  id: Scalars['String']['input'];
};

export type UpdateBookInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  publicationYear?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BookQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type BookQuery = {
  __typename?: 'Query';
  getBook?: {
    __typename?: 'BookResponse';
    success: boolean;
    book?: { __typename?: 'Book'; id: string; author: string; publicationYear: number; title: string } | null;
    error?: { __typename?: 'BookErrorResponse'; code: string } | null;
  } | null;
};

export type BooksQueryVariables = Exact<{ [key: string]: never }>;

export type BooksQuery = {
  __typename?: 'Query';
  getBooks?: {
    __typename?: 'BooksResponse';
    success: boolean;
    books?: Array<{ __typename?: 'Book'; id: string; title: string; author: string; publicationYear: number } | null> | null;
    error?: { __typename?: 'BookErrorResponse'; code: string; message: string } | null;
  } | null;
};

export type CreateBookMutationVariables = Exact<{
  input: BookInput;
}>;

export type CreateBookMutation = {
  __typename?: 'Mutation';
  createBook?: {
    __typename?: 'BookResponse';
    success: boolean;
    book?: { __typename?: 'Book'; author: string; id: string; publicationYear: number; title: string } | null;
    error?: { __typename?: 'BookErrorResponse'; code: string; message: string } | null;
  } | null;
};

export type DeleteBookMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type DeleteBookMutation = {
  __typename?: 'Mutation';
  deleteBook?: {
    __typename?: 'BookResponse';
    success: boolean;
    book?: { __typename?: 'Book'; author: string; createdAt: string; id: string; publicationYear: number; title: string } | null;
    error?: { __typename?: 'BookErrorResponse'; code: string; message: string } | null;
  } | null;
};

export type UpdateBookMutationVariables = Exact<{
  input: UpdateBookInput;
}>;

export type UpdateBookMutation = {
  __typename?: 'Mutation';
  updateBook?: {
    __typename?: 'BookResponse';
    success: boolean;
    book?: { __typename?: 'Book'; title: string } | null;
    error?: { __typename?: 'BookErrorResponse'; message: string; code: string } | null;
  } | null;
};

export const BookDocument = gql`
  query Book($id: String!) {
    getBook(id: $id) {
      book {
        id
        author
        publicationYear
        title
      }
      error {
        code
      }
      success
    }
  }
`;

/**
 * __useBookQuery__
 *
 * To run a query within a React component, call `useBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBookQuery(baseOptions: Apollo.QueryHookOptions<BookQuery, BookQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BookQuery, BookQueryVariables>(BookDocument, options);
}
export function useBookLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BookQuery, BookQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BookQuery, BookQueryVariables>(BookDocument, options);
}
export type BookQueryHookResult = ReturnType<typeof useBookQuery>;
export type BookLazyQueryHookResult = ReturnType<typeof useBookLazyQuery>;
export type BookQueryResult = Apollo.QueryResult<BookQuery, BookQueryVariables>;
export const BooksDocument = gql`
  query Books {
    getBooks {
      books {
        id
        title
        author
        publicationYear
      }
      error {
        code
        message
      }
      success
    }
  }
`;

/**
 * __useBooksQuery__
 *
 * To run a query within a React component, call `useBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useBooksQuery(baseOptions?: Apollo.QueryHookOptions<BooksQuery, BooksQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BooksQuery, BooksQueryVariables>(BooksDocument, options);
}
export function useBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BooksQuery, BooksQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BooksQuery, BooksQueryVariables>(BooksDocument, options);
}
export type BooksQueryHookResult = ReturnType<typeof useBooksQuery>;
export type BooksLazyQueryHookResult = ReturnType<typeof useBooksLazyQuery>;
export type BooksQueryResult = Apollo.QueryResult<BooksQuery, BooksQueryVariables>;
export const CreateBookDocument = gql`
  mutation CreateBook($input: BookInput!) {
    createBook(input: $input) {
      book {
        author
        id
        publicationYear
        title
      }
      error {
        code
        message
      }
      success
    }
  }
`;
export type CreateBookMutationFn = Apollo.MutationFunction<CreateBookMutation, CreateBookMutationVariables>;

/**
 * __useCreateBookMutation__
 *
 * To run a mutation, you first call `useCreateBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookMutation, { data, loading, error }] = useCreateBookMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBookMutation(baseOptions?: Apollo.MutationHookOptions<CreateBookMutation, CreateBookMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateBookMutation, CreateBookMutationVariables>(CreateBookDocument, options);
}
export type CreateBookMutationHookResult = ReturnType<typeof useCreateBookMutation>;
export type CreateBookMutationResult = Apollo.MutationResult<CreateBookMutation>;
export type CreateBookMutationOptions = Apollo.BaseMutationOptions<CreateBookMutation, CreateBookMutationVariables>;
export const DeleteBookDocument = gql`
  mutation DeleteBook($id: String!) {
    deleteBook(id: $id) {
      book {
        author
        createdAt
        id
        publicationYear
        title
      }
      error {
        code
        message
      }
      success
    }
  }
`;
export type DeleteBookMutationFn = Apollo.MutationFunction<DeleteBookMutation, DeleteBookMutationVariables>;

/**
 * __useDeleteBookMutation__
 *
 * To run a mutation, you first call `useDeleteBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBookMutation, { data, loading, error }] = useDeleteBookMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBookMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBookMutation, DeleteBookMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteBookMutation, DeleteBookMutationVariables>(DeleteBookDocument, options);
}
export type DeleteBookMutationHookResult = ReturnType<typeof useDeleteBookMutation>;
export type DeleteBookMutationResult = Apollo.MutationResult<DeleteBookMutation>;
export type DeleteBookMutationOptions = Apollo.BaseMutationOptions<DeleteBookMutation, DeleteBookMutationVariables>;
export const UpdateBookDocument = gql`
  mutation UpdateBook($input: UpdateBookInput!) {
    updateBook(input: $input) {
      book {
        title
      }
      error {
        message
        code
      }
      success
    }
  }
`;
export type UpdateBookMutationFn = Apollo.MutationFunction<UpdateBookMutation, UpdateBookMutationVariables>;

/**
 * __useUpdateBookMutation__
 *
 * To run a mutation, you first call `useUpdateBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBookMutation, { data, loading, error }] = useUpdateBookMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBookMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBookMutation, UpdateBookMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateBookMutation, UpdateBookMutationVariables>(UpdateBookDocument, options);
}
export type UpdateBookMutationHookResult = ReturnType<typeof useUpdateBookMutation>;
export type UpdateBookMutationResult = Apollo.MutationResult<UpdateBookMutation>;
export type UpdateBookMutationOptions = Apollo.BaseMutationOptions<UpdateBookMutation, UpdateBookMutationVariables>;
