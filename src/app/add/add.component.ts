import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onSubmit(form){
    this.postService.addPost(form.form.value);
    form.reset();
  }
}
