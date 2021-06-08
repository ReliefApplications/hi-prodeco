export class Article {
  id: string;
  name: string;
  description: string;
  coverPictureUrl: string;
  country: string;
  date: Date;


  constructor(id: string, name: string, description: string, coverPictureUrl: string, date: Date, country: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.coverPictureUrl = coverPictureUrl;
    this.date = date;
    this.country = country;
  }
}
