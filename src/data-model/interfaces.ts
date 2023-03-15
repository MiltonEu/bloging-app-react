interface User {
    id : number;
    pseudo : string;
    dateOfPublication : string
}

interface Article {
    id : number; 
    title : string;
    body : string; 
    imgUrl : string;
    comments : Comments[]
}

interface Comments {
    id : number;
    articleId : number;
    fromUser : User;
    body : string
}