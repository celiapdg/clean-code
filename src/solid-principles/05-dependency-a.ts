import { PostService } from './05-dependency-b';
import { JsonDataBaseService, LocalDataBaseService } from './05-dependency-c';


// Main
(async () => {

    // si cambiamos esto, es mucho más sencillo habiendo aplicando estos principios
    const provider = new LocalDataBaseService();

    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();