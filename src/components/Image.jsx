import pic from '../irene.jpg';

function Image(props) {
  return(
    <div className="image">
      <img src={pic} alt="Irene" />

    </div>  
      );
}

export default Image;