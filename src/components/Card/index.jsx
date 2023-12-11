/* eslint-disable react/prop-types */

import { Container } from "../Card/styles";
import {getImages} from "../../utils/getImages"

function Card({item}) {

  return (
    <Container>
      <img src={getImages(item.poster_path || item.profile_path || "")} alt="foto-movie" />
      <h3>{item.title || item.name}</h3>
    </Container>
  );
}

export default Card