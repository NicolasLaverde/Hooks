import Cart from "./Cart"
import ProductItem from "./ProductItem"
import MainShoppingContext from '../store/MainShoppingContext'

export const MockedListOfProducts = [
    {
        id: 'Ad-S',
        title: 'Addidas tennis',
        price: 150,
        description: 'These beauty pair of running shoes are the best option for you'
    },
    {
        id: 'Nk-S',
        title: 'Nike tennis',
        price: 250,
        description: 'These beauty pair of running Nike shoes are so confortable for your feet'
    },
    {
        id: 'Ad-T',
        title: 'Addidas',
        price: 50,
        description: ' This T shirt is the best '
    }
]

export default function MainPage() {
    return(
        <main>
            <MainShoppingContext>
                <Cart />
                {MockedListOfProducts.map(item => (
                    <ProductItem
                        {...item}
                        key={item.id}
                    />
                ))}
            </MainShoppingContext>  
        </main>
    )
}
