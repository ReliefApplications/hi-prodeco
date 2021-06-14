import { Project } from '../model/project';
import { Gallery } from '../model/gallery';

export const Projects: Project[] = [
  new Project('deminage',
    'Déminage (MAG et HI) au nord du Tchad',
    'Description project 1',
    'assets/projects/1/1.jpg',
    new Date(),
    [
      new Gallery({
        url: 'assets/projects/deminage/deminage_HI_Fada-3.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in dui quis magna finibus dapibus. Aenean rhoncus urna in venenatis congue. Morbi sit amet lacus nec ligula ultrices ornare id ac neque. Integer eget accumsan turpis. Fusce sodales turpis nec diam volutpat, vel laoreet lacus elementum. Nullam finibus non tellus eu dignissim. Etiam lobortis purus at erat finibus, at condimentum nulla hendrerit. Pellentesque aliquam nisl ut lorem posuere, nec hendrerit risus fermentum. Aliquam pharetra dui felis, vitae finibus elit tempor et. Fusce ante lorem, ultricies nec euismod rutrum, blandit ornare lorem. Fusce eleifend neque neque, vitae consequat enim blandit id. Donec at imperdiet felis.'
      }),
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
