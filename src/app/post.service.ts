import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [
    // tslint:disable-next-line:max-line-length
    new Post('Baby Cart : Le Sabre de la vengeance', 'Itto Ogami, seul homme autorisé à décapiter les seigneurs féodaux, voit sa position briguée par le clan Yagyu.', 'Maîtres d\'armes officiels du Shogun. Itto se retrouve accusé de complot contre le Seigneur du Shogun, il décide de fuir avec son fils Daigoro.', 'Lone Wolf and Cub', 'https://media.senscritique.com/media/000019260655/source_big/Baby_Cart_1_Le_Sabre_de_la_vengeance.jpg', new Date(1972, 3, 10), 0),
    new Post('Blade Runner', 'Dans les dernières années du 20e siècle, des milliers d\'hommes et de femmes partent à la conquête de l\'espace', 'Sur les colonies, une nouvelle race d\'esclaves voit le jour : les répliquants, des androïdes que rien ne peut distinguer de l\'être humain. Cependant, suite à une révolte, ces derniers sont peu à peu retirés.', 'Ridley Scott', 'https://fr.web.img4.acsta.net/pictures/15/09/23/11/37/330370.jpg', new Date(1982, 12, 30), 0),
    new Post('Joy Division : Control', 'Ian est un jeune homme solitaire, passionné de poésie et torturé par des crises d\'épilepsie. ', 'Après un concert des Sex Pistol, il propose à ses amis de fonder un groupe de musique: ce sera Joy Division, dont la pop triste révolutionne en un album l\'histoire de la musique', 'Anton Corbijn', 'https://images-na.ssl-images-amazon.com/images/I/71%2BvaWmT2bL._AC_SL1094_.jpg', new Date(2007, 11,  23), 0),
    new Post('Reservoir Dogs', 'Six truands désignés par des noms de code entreprennent de dévaliser une importante bijouterie.', 'L\'opération échoue malencontreusement et se solde par un bain de sang. ', 'Quentin Tarantino', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT3RrulkNF2moV82uya1er95c37CvJFxiNLQsqGyOCBJ4kEslRi', new Date(1992, 12, 1), 0)
  ];
  connection = true;
  constructor() { }

  // Get posts
  getPosts() {
    return this.posts;
  }

  // get post by indice
  getPost(i) {
    return this.posts[i];
  }

  // Add post
  addPost(post) {
    this.posts.push(post);
  }

  // delete post
  deletePost(i) {
    this.posts.splice(i, 1);
  }

  // edit post
  editPost(valeur, i) {
    this.posts[i] = valeur;
  }

  // add like
  addLike(i) {
    this.posts[i].like += 1;
  }

  // dislike
  disLike(i) {
    this.posts[i].like -= 1;
  }

  // Get connection
  getConnection() {
    return this.connection;
  }
}
