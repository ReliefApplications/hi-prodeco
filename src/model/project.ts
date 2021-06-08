import { Gallery } from './gallery';

export class Project {
  id: string;
  name: string;
  description: string;
  coverPictureUrl: string;
  date: Date;
  gallery: Gallery[];


  constructor(id: string, name: string, description: string, coverPictureUrl: string, date: Date, gallery: Gallery[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.coverPictureUrl = coverPictureUrl;
    this.date = date;
    this.gallery = gallery;
  }
}
