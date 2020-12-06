import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  posts: Post[];
  connection: boolean;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
    this.getConnection();
  }

  //get Posts
  getPosts(){
    this.posts = this.postService.getPosts();
  }

  //delete post
  deletePost(i){
    this.postService.deletePost(i);
  }

  //add like
  addLike(i){
    this.postService.addLike(i);
  }
  //dislike like
  disLike(i){
    this.postService.disLike(i);
  }

  //get connection
  getConnection(){
    this.connection = this.postService.getConnection();
  }
}
