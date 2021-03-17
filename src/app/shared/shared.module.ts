import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './layout/header/header.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import {PostService} from './services/post.service';
import { PostComponent } from './components/post/post.component';
import {MatCardModule} from '@angular/material/card';
import {PhotoService} from './services/photo.service';
import {GalleryComponent} from './components/gallery/gallery.component';
import {RouterModule} from '@angular/router';
import {ShowActiveUsersPipe} from './components/users-table/show-active-users.pipe';
import {PostsComponent} from './components/posts/posts.component';
import { ActivatedItemsPipe } from './pipes/activated-items.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    UsersTableComponent,
    PostComponent,
    PostsComponent,
    GalleryComponent,
    ShowActiveUsersPipe,
    ActivatedItemsPipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    UsersTableComponent,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    PostComponent,
    PostsComponent,
    GalleryComponent,
  ],
  providers: [
    UserService,
    PostService,
    PhotoService
  ]
})
export class SharedModule { }
