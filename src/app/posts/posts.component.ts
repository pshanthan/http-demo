import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../../models/Post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postService: PostService) {}
  #titleInput: string = '';
  #bodyInput: string = '';
  ngOnInit(): void {
    this.getposts();
  }
  getposts() {
    return this.postService.getPosts().subscribe((p) => (this.posts = p));
  }
  addPosts() {
    const newPost: Post = {
      id: this.getposts.length + 1,
      userId: this.getposts.length + 1,
      title: String(this.#titleInput),
      body: String(this.#bodyInput),
    };
    this.postService.addPost(newPost);
  }
}
