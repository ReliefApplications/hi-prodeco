import { Article } from '../model/article';

export const Articles: Article[] = [
  new Article('1',
    'Article1',
    'Description article 1',
    'assets/projects/1/1.jpg',
    new Date(),
    'Colombia'
  ),
  new Article('2',
    'Article2', 'Description article 2',
    'assets/projects/1/0.jpg',
    new Date(),
    'Afghanistan')
];
