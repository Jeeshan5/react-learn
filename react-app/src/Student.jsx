 import PropTypes from 'prop-types'
 
 function Student(props){
    return(
<div className="student">
    <p>Name:{props.name}</p>
    <p>Age:{props.age}</p>
    <p>Is Student:{props.isStudent}</p>
</div>
    );

}
Student.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    isStudent:PropTypes.string,
}
export default Student