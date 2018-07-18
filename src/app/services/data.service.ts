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

  getCategoryArticles(){
    return this.http.get(this.baseApi+"articles/");
  }

  getBlog(){
    return this.http.get(this.baseApi+"blog/");
  }

  getAccount(){
    return this.http.get(this.baseApi+"account/");
  }
}
