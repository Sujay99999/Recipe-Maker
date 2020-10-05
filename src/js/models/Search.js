import axios from "axios";

export default class Searchclass{
    constructor(query)
    {
        this.query_datamem = query;
        console.log(this.query_datamem);
    }

    //methods of the class
    async search_method()
    {
        try{
            this.result_datamem = await axios(`https://forkify-api.herokuapp.com/api/search?q=${this.query_datamem}`);
            console.log(this.result_datamem);
        }
        catch(err){
            console.log(err);
            alert(err);
        }
    }
} 