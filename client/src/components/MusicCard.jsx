import Card from "react-bootstrap/Card";
import "../stylesheets/MusicCard.css";
import { BsFillPlayCircleFill } from "react-icons/bs";

const MusicCard = ({ info }) => {
  const musicData = info;
  const imgSrc =
    "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_185cd21c388%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_185cd21c388%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.1328125%22%20y%3D%2296.6%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";
  return (
    <div className="card-container">
      <div className="music-img">
        <Card.Img
          variant="top"
          src={musicData.artworkUrl100 ? musicData.artworkUrl100 : imgSrc}
          className="card-img"
        />
      </div>
      <Card className="single-card">
        <Card.Body>
          <Card.Title className="title-text">{`${musicData.artistName}`}</Card.Title>
          <Card.Text className="card-text">
            {musicData.trackCensoredName}
          </Card.Text>
        </Card.Body>
        <div className="play-button">
          <a href={musicData.trackViewUrl} target="_blank">
            <BsFillPlayCircleFill className="play-button" size={28} />
          </a>
        </div>
      </Card>
    </div>
  );
};

export default MusicCard;
