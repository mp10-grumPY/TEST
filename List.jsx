
import PropTypes from 'prop-types'

function List (props) {

const itemList = props.items;
const category = props.category
//itemList.sort((a,b) => a.name.localeCompare(b.name)) // ALPHABETICAL
// itemList.sort((a,b) => b.name.localeCompare(a.name)) // REVERSE ALPHABETICAL
//itemList.sort((a,b)=> a.calories - b.calories) //NUMERIC (SMALL TO BIG)
//itemList.sort((a,b)=> b.calories - a.calories) // REVERSE NUMERIC (BIG TO SMALL)

const lowCalitemList =itemList.filter(item=>item.calories < 100 )
const highCalitemList =itemList.filter(item=>item.calories >=100 )

const listItems = itemList.map(item => <li key={item.id}> 
                                    {item.name}: &nbsp; 
                                    <b>{item.calories}</b>
                                    </li>);



return(
    <>
    <h3 className="list-category">{category}</h3>
    <ol className="list-items">{listItems}</ol>
    
    </>
);
}

List.propTypes={
    category:PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number, name:PropTypes.string, calories:PropTypes.number}))
}

List.defaultProps={
    category: "???",
    items:[],
}

export default List