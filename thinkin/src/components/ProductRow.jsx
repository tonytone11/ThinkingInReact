import PropTypes from 'prop-types';
import '../styling/ProductRow.css';

function ProductRow({ product }) {
    const name = product.stocked ? product.name :
        <span style={{ color: 'red' }}>
            {product.name}
        </span>;

    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
}

// Prop validation for ProductRow
ProductRow.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        stocked: PropTypes.bool.isRequired,
        category: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProductRow;
