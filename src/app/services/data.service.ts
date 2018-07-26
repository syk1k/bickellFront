import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  server: string="http://localhost:8000";
  baseApi:string = this.server+"/api/v1/"

  constructor(private http: HttpClient) { 
    console.log("DataService initiated");
    console.log(this.baseApi+"offres/");
  }

  createArticle(Article, httpOptions){
    let article = new FormData();
    article.append("id", "");
    article.append("lib_article", Article.lib_article)
    article.append("type_activite", Article.type_activite)
    article.append("type_offre", Article.type_offre)
    article.append("description", Article.description)
    article.append("quantite", Article.quantite)
    article.append("prix", Article.prix)
    article.append("unite", Article.unite)
    article.append("categorie", Article.categorie)
    if(Article.images){
      if(Article.images[0]){
        article.append("image1", Article.images[0])
      }
      if(Article.images[1]){
        article.append("image2", Article.images[1])
      }
      if(Article.images[2]){
        article.append("image3", Article.images[2])
      }
      
    }

    console.log(article);
    return this.http.post(this.baseApi+"articles/", article, httpOptions);
  }

  getArticles(){
    return this.http.get(this.baseApi+"articles/");
  }
  getArticle(id){
    return this.http.get(this.baseApi+"articles/"+id);
  }

  getDemandeArticles(){
    return this.http.get(this.baseApi+"demandes/");
  }

  getOffreArticles(){
    console.log(this.baseApi+"offres");
    return this.http.get(this.baseApi+"offres/");
  }

  getCategories(){
    return this.http.get(this.baseApi+"categorie/");
  }

  getBlog(){
    return this.http.get(this.baseApi+"blog/");
  }

  getAccount(){
    return this.http.get(this.baseApi+"account/");
  }

  login(user){
    return this.http.post(this.baseApi+"api-token-auth/", user);
  }

  createUser(user, httpOptions){
    return this.http.post(this.baseApi+"users/",user, httpOptions);
  }

  getUsers(httpOptions){
    return this.http.get(this.baseApi+"users", httpOptions);
  }
}
