export class Article {
  id: string;
  name: string;
  description: string;
  coverPictureUrl: string;
  country: string;
  date: Date;
  type: 'PDF' | 'TEXT';
  sourceURL: string;


  constructor(id: string, name: string, description: string,
              coverPictureUrl: string, date: Date, country: string, type?: 'PDF' | 'TEXT', sourceURL?: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.coverPictureUrl = coverPictureUrl;
    this.date = date;
    this.country = country;
    this.type = !!type ? type : 'TEXT';
    this.sourceURL = sourceURL;
  }
}
