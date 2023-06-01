import { PostProvider } from './05-dependency-c';

export interface Post {
    body: string;
    id: number;
    title: string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    // principio de inyección de dependencias con clase abstracta
    constructor(private postProvider: PostProvider) { }

    async getPosts() {
        // const jsonDB = new LocalDataBaseService(); // dependencia oculta
        const jsonDB = this.postProvider;
        this.posts = await jsonDB.getPosts();

        return this.posts;
    }
}
