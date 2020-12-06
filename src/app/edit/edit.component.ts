import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id:number;
  post: Post;

  constructor(private route: ActivatedRoute, private postService: PostService, private router: Router) {
    this.route.params
    .subscribe( params => {
                  this.id = params.id;
      })
   }

  ngOnInit() {
    this.getPost(this.id);
  }

  getPost(i){
    this.post = this.postService.getPost(i);
    console.log(this.post.date)
  }

  onSubmit(form){
    this.postService.editPost(form.form.value, this.id);
    this.router.navigate(['/list']);
  }

}
