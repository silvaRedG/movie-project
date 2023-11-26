import api from "../../services/api";
import { Background, Info, Poster, Container } from "./styles";
import { useState, useEffect } from "react";
import Button from "../../components/Button/index";


function Home() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results },
      } = await api.get("/movie/popular");

      setMovie(results[1]);
    }

    getMovies();
  }, []);

  return (
    <>
      {movie && (
        <Background
          img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        >
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <div>
              <Button red={true}>Assista Agora</Button>
              <Button red={false}>Assista o Trailer</Button>
              </div>
            </Info>



            <Poster>
              <img
                alt="movie"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </Poster>
          </Container>
        </Background>
      )}
    </>
  );
}

export default Home;
