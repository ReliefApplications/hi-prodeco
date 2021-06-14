import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mainStore } from '../../store/main-store';
import { Project } from '../../model/project';
import { Gallery } from '../../model/gallery';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  public project: Project = null;

  public currentGalleryImage: Gallery;
  public shoGalleryInfo = false;

  private currentGalleryImageIndex: number;

  constructor(private route: ActivatedRoute, private router: Router, public modalService: NgbModal) {
  }

  ngOnInit(): void {
    const projectID = this.route.snapshot.paramMap.get('id');
    this.project = mainStore.projects.find(project => project.id === projectID);
    if (!this.project) {
      this.router.navigate(['/home']).then();
    }
  }

  showInFullScreen(content: any, image: Gallery, index: number): void {
    this.currentGalleryImage = image;
    this.currentGalleryImageIndex = index;
    this.modalService.open(content, {centered: true, size: 'xl'});
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

}
