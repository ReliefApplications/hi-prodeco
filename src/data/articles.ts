import { Article } from '../model/article';

export const Articles: Article[] = [
  new Article(
    '1',
    '',
    '',
    'assets/projects/1/1.jpg',
    new Date(),
    '',
    'PDF',
    '../../assets/articles/BROCHURE.pdf'),
  new Article('3',
    'Article1',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
