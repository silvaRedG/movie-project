import api from "../../services/api";
import { Background } from "./styles";


function Home() {


    async function getMovies() {


        const data = await api.get("/movie/popular")
        console.log(data);


    }

    getMovies()

    return (

        <>  
            <Background img="https://image.tmdb.org/t/p/original/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg">

            <h1>Home</h1>

            </Background>
            

        </>

    )


}


export default Home;

