import PropTypes from 'prop-types'
import { useContextShoppingApi } from '../store/MainShoppingContext'
export default function ProductItem({title, price, description, id }){
    
    const { addSomeShoppingItem } = useContextShoppingApi()
    function addToShoppingChart() {
        addSomeShoppingItem(id)
    }

    return(
        <section style={{marginBottom: 50, backgroundColor: 'yellow'}}>
            <p> Title: {title}</p>
            <p> Price: {price}</p>
            <p> Description: {description}</p>
            <button onClick={addToShoppingChart}> Add To Cart</button>
        </section>
    )
}

ProductItem.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    id: PropTypes.id
}