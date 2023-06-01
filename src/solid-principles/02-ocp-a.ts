/**
 * Principio de Abierto y Cerrado - Open Close
 * nuestras entidades tienen que estar abiertas a la extensión pero
 * cerradas a la modificación
 */

import { PhotosService, PostService, TodoService } from './02-ocp-b';
import { HttpClient } from './02-ocp-c';

(async () => {

    const httpClient = new HttpClient();


    const todoService = new TodoService(httpClient);
    const postService = new PostService(httpClient);
    const photosService = new PhotosService(httpClient);

    const todos = await todoService.getTodoItems();
    const posts = await postService.getPosts();
    const photos = await photosService.getPhotos();


    console.log({ todos, posts, photos });


})();