export class Post {

    id: number = -1;

    description: string = 'None';

    image: string = 'None';

    constructor(id?: number, descr?: string, img?: string){
        this.id = id !== undefined ? id: this.id;
        this.description = descr !== undefined ? descr: this.description;
        this.image = img !== undefined ? img: this.image;
    }
}
