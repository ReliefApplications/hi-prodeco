import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mainStore } from '../../store/main-store';
import { Project } from '../../model/project';
import { Gallery } from '../../model/gallery';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { fadeInAnimation, fadeInOnEnterAnimation, fadeOutOnLeaveAnimation, pulseAnimation } from 'angular-animations';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
    fadeInAnimation()
  ]
})
export class ProjectDetailsComponent implements OnInit {

  public project: Project = null;

  public currentGalleryImage: Gallery;
  public shoGalleryInfo = false;

  public imagesLoaded: Map<string, boolean> = new Map<string, boolean>([]);

  private currentGalleryImageIndex: number;


  constructor(private route: ActivatedRoute, private router: Router,
              public modalService: NgbModal, public translate: TranslateService) {
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    const projectID = this.route.snapshot.paramMap.get('id');
    this.project = mainStore.projects.find(project => project.id === projectID);
    if (!this.project) {
      this.router.navigate(['/home']).then();
    }

    this.project.gallery.forEach((image) => this.imagesLoaded.set(image.url, false));

    document.addEventListener('keydown', (event) => {
      const keyName = event.key;
      if (this.currentGalleryImageIndex >= 0) {
        if (keyName === 'ArrowLeft') {
          this.displayPrev();
        } else if (keyName === 'ArrowRight') {
          this.displayNext();
        }
      }
    });
  }

  showInFullScreen(content: any, image: Gallery, index: number): void {
    this.currentGalleryImage = image;
    this.currentGalleryImageIndex = index;
    this.modalService.open(content, {centered: true, size: 'xl'});
  }

  onCloseModal(): void {
    this.modalService.dismissAll();
    this.currentGalleryImageIndex = null;
  }

  displayPrev(): void {
    this.currentGalleryImageIndex = this.currentGalleryImageIndex - 1 < 0
      ? this.project.gallery.length - 1 : this.currentGalleryImageIndex - 1;
    this.currentGalleryImage = this.project.gallery[this.currentGalleryImageIndex];
  }

  displayNext(): void {
    this.currentGalleryImageIndex = this.currentGalleryImageIndex + 1 > this.project.gallery.length - 1
      ? 0 : this.currentGalleryImageIndex + 1;
    this.currentGalleryImage = this.project.gallery[this.currentGalleryImageIndex];
  }

  imageLoaded(url: string): void {
    this.imagesLoaded.set(url, true);
  }
}
