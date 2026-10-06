import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../../models/Post';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postService: PostService) {}
  ngOnInit(): void {
    this.getposts();
  }
  getposts() {
    return this.postService.getPosts().subscribe((p) => (this.posts = p));
  }
  addPosts() {}
}
