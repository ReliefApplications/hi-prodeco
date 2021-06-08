export class Gallery {
  url: string;
  isVideo: boolean;
  testimonials: string;

  constructor(data: {url: string, isVideo?: boolean, testimonials?: string}) {
    this.url = data.url;
    this.isVideo = data.isVideo ? data.isVideo : false;
    this.testimonials = data.testimonials;
  }
}
