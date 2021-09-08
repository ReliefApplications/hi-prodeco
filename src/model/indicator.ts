export class Indicator {
  id: string;
  data: number;
  text: string;

  constructor(id: string, data: number, text: string) {
    this.id = id;
    this.data = data;
    this.text = text;
  }
}
