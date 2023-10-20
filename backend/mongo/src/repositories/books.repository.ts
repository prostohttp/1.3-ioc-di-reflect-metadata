// const Book = require("../model/Book");

export abstract class BooksRepository {
  abstract createBook(book: Book): void
  abstract getBook(id: number): Book
  abstract getBooks(): Book[]
  abstract updateBook(book: Book): void
  abstract deleteBook(id: number): void
}