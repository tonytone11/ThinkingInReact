import PropTypes from 'prop-types';
import '../styling/ProductCategoryRow.css';

function ProductCategoryRow({ category }) {
    return (
        <tr>
            <th colSpan="2">
                {category}
            </th>
        </tr>
    );
}

// Prop validation for ProductCategoryRow
ProductCategoryRow.propTypes = {
    category: PropTypes.string.isRequired,
};

export default ProductCategoryRow;
