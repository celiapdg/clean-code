/**
 * Principio de Abierto y Cerrado - Open Close
 * nuestras entidades tienen que estar abiertas a la extensión pero
 * cerradas a la modificación
 */

import { HttpClient } from "./02-ocp-c";

/**
 * En este código, si queremos cambiar la url hay que editar el código 
 * de dentro de los métodos
 * Además, hay una fuerte dependencia de axios, código de terceros.
 * Desacoplaremos la dependencia.
 */


// import axios from 'axios';

export class TodoService {

    constructor(private http: HttpClient) { }

    async getTodoItems() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/todos/');
        return data;
    }
}


export class PostService {

    constructor(private http: HttpClient) { }

    async getPosts() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/posts');
        return data;
    }
}


export class PhotosService {

    constructor(private http: HttpClient) { }

    async getPhotos() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/photos');
        return data;
    }

}