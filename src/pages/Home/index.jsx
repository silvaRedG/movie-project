import api from "../../services/api";
import { Background, Info, Poster, Container,Space } from "./styles";
import { useState, useEffect } from "react";
import Button from "../../components/Button/index";
import { getImages } from "../../utils/getImages";
import Slider from "../../components/Slider"


function Home() {
  const [movie, setMovie] = useState();
  const [topMovies, setMovies] = useState()

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results },
      } = await api.get("/movie/popular");

      setMovie(results[0]);
    }

      async function getTopMovies() {
        const {
          data: { results },
        } = await api.get("/movie/top_rated");
  
        setMovies(results);
        console.log(results);
      }

    

      getMovies();
      getTopMovies()


  }, []);







  return (
    <>
      {movie && (
        <Background
          img={getImages(movie.backdrop_path)}
        >
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <Space>
              <Button red={true}>Assista Agora</Button>
              <Button red={false}>Assista o Trailer</Button>
              </Space>
            </Info>



            <Poster>
              <img
                alt="movie"
                src={getImages(movie.poster_path)}
              />
            </Poster>
          </Container>
        </Background>
      )}

      {topMovies && <Slider info={topMovies} title={"Top Filmes"}/>}
    </>
  );
}

export default Home;
