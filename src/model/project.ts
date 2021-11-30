import { Gallery } from './gallery';

export class Project {
  id: string;
  name: string;
  description: string;
  paragraph?: string[];
  coverPictureUrl: string;
  date: Date;
  gallery: Gallery[];


  constructor(
    id: string, name: string, description: string, coverPictureUrl: string, date: Date, gallery: Gallery[], paragraph?: string[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.paragraph = paragraph;
    this.coverPictureUrl = coverPictureUrl;
    this.date = date;
    this.gallery = gallery;
  }
}
