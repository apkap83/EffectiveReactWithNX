export function libSharedModels(): string {
  return 'lib-shared-models';
}

export interface IBook {
  id: number;
  title: string;
  author: string;
  rating: number;
  price: number;
}
