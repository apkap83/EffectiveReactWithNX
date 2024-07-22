export function booksDataAccess(): string {
  return 'books-data-access';
}

export async function getBooks() {
  const data = await fetch('/api/books', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data.json();
}

export default getBooks;
