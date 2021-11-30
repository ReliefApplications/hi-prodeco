export class Gallery {
  url: string;
  author: string;
  isVideo: boolean;
  description: string;
  videoURL: string;

  constructor(data: { url: string, author: string, isVideo?: boolean, description?: string, videoURL?: string }) {
    this.url = data.url;
    this.author = data.author;
    this.isVideo = data.isVideo ? data.isVideo : false;
    this.description = data.description;
    this.videoURL = data.videoURL;
  }
}
