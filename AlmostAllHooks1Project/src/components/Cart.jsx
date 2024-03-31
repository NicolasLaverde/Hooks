
import { useContextShoppingApi } from "../store/MainShoppingContext";
export default function Cart(){
    const {
        items
    } =  useContextShoppingApi()
    return (<div style={{
        backgroundColor: 'green',
        width: 500,
        height: 200,
        margin: '0 auto',
        color: 'white'
    }}>
        <header>
            <h2> This are the products you are gonna buy </h2>
        </header>
        <main>
            {items.map(item => (
                <>
                    <p> {item.title} - {item.quantity}</p>
                </>
            ))}
        </main>
    </div>)
}
