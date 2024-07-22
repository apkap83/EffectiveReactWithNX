import { IBook } from '@acme/lib/shared-models';

export function booksDataAccess(): string {
  return 'books-data-access';
}

export async function getBooks(): Promise<IBook[]> {
  const data = await fetch('/api/books', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data.json();
}

export default getBooks;
