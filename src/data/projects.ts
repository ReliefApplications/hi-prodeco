import { Project } from '../model/project';
import { Gallery } from '../model/gallery';

export const Projects: Project[] = [
  new Project('deminage',
    'Déminage (MAG et HI) au nord du Tchad',
    'Description project 1',
    'assets/projects/1/1.jpg',
    new Date(),
    [
      new Gallery({url: 'assets/projects/deminage/deminage_HI_Fada-3.jpg', author: 'Gwenn Dubourthoumieu'}),
      new Gallery({url: 'assets/projects/deminage/deminage_HI_Fada-4.jpg', author: 'Gwenn Dubourthoumieu'}),
      new Gallery({url: 'assets/projects/deminage/deminage_HI_Fada-5.jpg', author: 'Gwenn Dubourthoumieu'}),
      new Gallery({url: 'assets/projects/deminage/deminage_HI_Fada-7.jpg', author: 'Gwenn Dubourthoumieu'}),
      new Gallery({url: 'assets/projects/deminage/deminage_liaison communautaire_MAG_Fada-3.jpg', author: 'Gwenn Dubourthoumieu'}),
      new Gallery({url: 'assets/projects/deminage/deminage_liaison communautaire_MAG_Fada-6.jpg', author: 'Gwenn Dubourthoumieu'}),
      new Gallery({url: 'assets/projects/deminage/deminage_MAG_Fada-1.jpg', author: 'Gwenn Dubourthoumieu'}),
      new Gallery({url: 'assets/projects/deminage/deminage_MAG_Fada-3.jpg', author: 'Gwenn Dubourthoumieu'}),
      new Gallery({url: 'assets/projects/deminage/deminage_MAG_Fada-13.jpg', author: 'Gwenn Dubourthoumieu'}),
      new Gallery({url: 'assets/projects/deminage/portrait beneficiaire_Fada-1.jpg', author: 'Gwenn Dubourthoumieu'}),
    ]
  ),
  new Project('2',
    'Project2', 'Description project 2',
    'assets/projects/1/1.jpg',
    new Date(),
    []),
  new Project('1',
    'Project1',
    'Description project 1',
    'assets/projects/1/1.jpg',
    new Date(),
    []
  ),
  new Project('1',
    'Project1',
    'Description project 1',
    'assets/projects/1/1.jpg',
    new Date(),
    []
  ),
  new Project('1',
    'Project1',
    'Description project 1',
    'assets/projects/1/1.jpg',
    new Date(),
    []
  ),
];
