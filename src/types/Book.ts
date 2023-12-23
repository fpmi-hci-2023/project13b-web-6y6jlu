export interface IBook {
  book_id: number;
  author: string;
  name: string;
  annotation: string;
  rate: number;
  path?: string;
}