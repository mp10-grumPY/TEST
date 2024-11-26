import profilePic from './assets/react.svg'

function Card(){
  
    return(

        <div className="card">
            <img alt="Profile Picture" className='card-image' src="https://via.placeholder.com/150"></img>
            <h2 className='card-name'>Adli Yazlani </h2>
            <p className='card-desc'>I love to mountain bike and play video games</p>
        </div>
    );

};

export default Card