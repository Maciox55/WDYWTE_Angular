export class Result {
    id:number;
    name:string;
    vicinity:string;
    geometry:{
        location:{
            lat:number,
            lng:number
        },
    };
    openNow:boolean;
    place_id:string;
    rating:number;
    price_level:number;

}