import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PhotoService} from '../../services/photo.service';
import {IPhoto} from '../../interfaces/photo.interface';
import {UnSubscriber} from '../../../utils/unsubscriber';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent extends UnSubscriber implements OnInit, OnDestroy {

  @Input()
  public limit = 10;

  @Input()
  showActive = false;

  public photos: IPhoto[] = [];

  constructor(private photoService: PhotoService) {
    super();
  }

  ngOnInit(): void {
    this.photoService.getPhotos(this.limit)
      .pipe(takeUntil(this.unSubscriber))
      .subscribe(photos => {
      this.photos = photos;
    });
  }

  updateStatus(userId: number, status: string): void {
    this.photoService.updatePhoto(userId, status)
      .pipe(takeUntil(this.unSubscriber))
      .subscribe(updatedPhoto => {
        this.photos = this.photos.map(photo => {

          if (photo.id === userId) {
            return updatedPhoto;
          }

          return photo;
        });
      });
  }
}
