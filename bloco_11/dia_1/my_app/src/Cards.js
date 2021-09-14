import react from "react";
import './Card.css'
function Card(props) {
    return (
      <div className="card">
        <h1>Doguinhos</h1>
        <img className="card-img-top" src={props.featureImage} alt={props.title} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href={props.link} className="btn btn-primary">Veja mais</a>
        </div>
      </div>
    );
}

function CardList() {
  return (
    <div className="row">
      <div className="col-sm-4">
        <Card
          featureImage="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
          title="Dog 1"
          description="Baby dog"
          link="https://www.goodhousekeeping.com/life/pets/advice/g1921/large-dog-breeds/"
        />
      </div>
      <div className="col-sm-4">
        <Card
          featureImage='https://miro.medium.com/max/639/1*vg3kxX3H9eCNWKgBBeQHeA.jpeg'
          title="Aplicando criação de cards no React"
          description="Bffs."
          link="https://www.goodhousekeeping.com/life/pets/advice/g1921/large-dog-breeds/"
        />
      </div>
      <div className="col-sm-4">
        <Card
          featureImage="https://skycms.s3.amazonaws.com/images/5495100/cachorro-card-1.png"
          title="Dog smiling"
          description="Dog running"
          link="https://www.goodhousekeeping.com/life/pets/advice/g1921/large-dog-breeds/"
        />
      </div>
        <div className="col-sm-4">
        <Card
          featureImage="http://s2.glbimg.com/lCgKRgb9XrRUp48TMCaHiVRy0k4=/e.glbimg.com/og/ed/f/original/2017/05/30/thinkstockphotos-646108884.jpg"
          title="JavaScript Basics Before You Learn React"
          description="Dog smiling"
          link="https://www.goodhousekeeping.com/life/pets/advice/g1921/large-dog-breeds/"
        />
      </div>
        <div className="col-sm-4">
        <Card
          featureImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNApistyJsXEmYqkB7UBBH0ZzQKtRSSVUZjjohMb5HiqdaEQT0KOfl2l2HhuL0dvRfl2g&usqp=CAU"
          title="JavaScript Basics Before You Learn React"
          description="Cat and dog playing"
          link="https://www.goodhousekeeping.com/life/pets/advice/g1921/large-dog-breeds/"
        />
      </div>
    </div>
  );
}

export default CardList
