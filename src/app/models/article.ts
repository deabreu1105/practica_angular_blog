//Me traigo los datos del modelo de articulos que tengo en el backend
export class Article{
    constructor(
        public _id:string,
        public title:string,
        public content:string,
        public image:string,
        public date: any
        
    ){}
}


//esto me lo traje del backend de nodejs
/**title:String,
    content:String,
    date:{ type:Date, default:Date.now },
    image:String*/