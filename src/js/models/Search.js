import axios from "axios";

export default class searchclass{
    constructor(query)
    {
        this.query_datamem = query;
        console.log(query);
    }

    //methods of the class
    async search_method()
    {
        try{
            const result = await axios(`https://forkify-api.herokuapp.com/api/search&q=${this.query_datamem}`);
            console.log(result);
        }
        catch(err){
            console.log(error);
            alert(error);
        }
    }
} 