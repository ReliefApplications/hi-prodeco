import { Project } from '../model/project';
import { Gallery } from '../model/gallery';

export const Projects: Project[] = [
  new Project('1',
    'Project1',
    'Description project 1',
    'assets/projects/1/1.jpg',
    new Date(),
    [new Gallery({url: 'assets/projects/1/0.jpg'})]
  ),
  new Project('2',
    'Project2', 'Description project 2',
    'assets/projects/1/1.jpg',
    new Date(),
    [new Gallery({url: 'assets/projects/1/0.jpg'})]),
  new Project('1',
    'Project1',
    'Description project 1',
    'assets/projects/1/1.jpg',
    new Date(),
    [new Gallery({url: 'assets/projects/1/0.jpg'})]
  ),
  new Project('1',
    'Project1',
    'Description project 1',
    'assets/projects/1/1.jpg',
    new Date(),
    [new Gallery({url: 'assets/projects/1/0.jpg'})]
  ),
  new Project('1',
    'Project1',
    'Description project 1',
    'assets/projects/1/1.jpg',
    new Date(),
    [new Gallery({url: 'assets/projects/1/0.jpg'})]
  ),
];
