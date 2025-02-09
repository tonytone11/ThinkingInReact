import PropTypes from 'prop-types';
import '../styling/SearchBar.css';

function SearchBar({
    filterText,
    inStockOnly,
    onFilterTextChange,
    onInStockOnlyChange
}) {
    return (
        <form>
            <input
                type="text"
                value={filterText}
                placeholder="Search..."
                onChange={(e) => onFilterTextChange(e.target.value)} />
            <label>
                <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => onInStockOnlyChange(e.target.checked)} />
                {' '}
                Only show products in stock
            </label>
        </form>
    );
}

// Prop validation for SearchBar
SearchBar.propTypes = {
    filterText: PropTypes.string.isRequired,
    inStockOnly: PropTypes.bool.isRequired,
    onFilterTextChange: PropTypes.func.isRequired,
    onInStockOnlyChange: PropTypes.func.isRequired,
};

export default SearchBar;
