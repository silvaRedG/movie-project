import api from "../../services/api";
import { Background, Info, Poster, Container, Space } from "./styles";
import { useState, useEffect } from "react";
import Button from "../../components/Button/index";
import { getImages } from "../../utils/getImages";
import Slider from "../../components/Slider";

function Home() {
  const [movie, setMovie] = useState();
  const [topMovies, setMovies] = useState();
  const [topSeries, setSeries] = useState();
  const [topRated, setRated] = useState();
  const [topPeople, setPeople] = useState();

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
      } = await api.get("/movie/popular");

      setMovies(results);
      console.log(results);
    }

    async function getTopSeries() {
      const {
        data: { results },
      } = await api.get("/tv/popular");

      setSeries(results);
      console.log(results);
    }

    async function getTopRated() {
      const {
        data: { results },
      } = await api.get("/movie/top_rated");

      setRated(results);
      console.log(results);
    }

    async function getTopPeople() {
      const {
        data: { results },
      } = await api.get("/person/popular");

      setPeople(results);
      console.log(results);
    }

    getMovies();
    getTopMovies();
    getTopSeries();
    getTopRated();
    getTopPeople();
  }, []);

  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
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
              <img alt="movie" src={getImages(movie.poster_path)} />
            </Poster>
          </Container>
        </Background>
      )}

      {topMovies && <Slider info={topMovies} title={"Top Filmes"} />}
      {topSeries && <Slider info={topSeries} title={"Top Series"} />}
      {topRated && <Slider info={topRated} title={"Top Rated"} />}
      {topPeople && <Slider info={topPeople} title={"Top Artist"} />}
    </>
  );
}

export default Home;
