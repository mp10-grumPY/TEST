import PropTypes from 'prop-types';
import propTypes from 'prop-types'

function Student(props){
    return(

        <div className="student">
            <p>Name: {props.username}</p>
            <p>Age: {props.age}</p>
            <p>Occupation: {props.isJobless ? "Yes he has a job" : "No he does not have a job" }</p>
        </div>
        
  



        
    );
}


// USEFUL FOR DEBUGGING
Student.propTypes={
    username: PropTypes.string,
    age: PropTypes.number,
    isJobless: propTypes.boolean,

}

Student.defaultProps ={
    username: "Guest",
    age: 0,
    isJobless: null,
}

export default Student