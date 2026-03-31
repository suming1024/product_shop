import {Link} from 'react-router-dom'
import {products} from '../data/products'

const ProductList = () => {

    return(
        <section className="product-list">
            <h2>상품목록</h2>

            <table>
                <thead>
                    <tr>
                        <th>상품 ID</th>
                        <th>상품명</th>
                        <th>가격</th>
                        <th>설명</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}원</td>
                            <td>{product.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <Link to="/add-product">
                    <button>등록하기</button>
                </Link>
            </div>
        </section>
    )
}

export default ProductList