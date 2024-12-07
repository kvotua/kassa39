import {ProductGrid, ProductCard, ProductName, ProductUnit, ProductPrice, CategoryList, CategoryButton} from './ProductList.scss';

const ProductList = () => {

    const categories = ['Все', 'Молочные продукты', 'Овощи', 'Фрукты', 'Напитки','Все', 'Молочные продукты', 'Овощи', 'Фрукты', 'Напитки', ];

    const products = [
        { id: 1, name: 'Светлое', unit: 'кг', price: '100 ₽' },
        { id: 2, name: 'Темное', unit: 'л', price: '200 ₽' },
        { id: 3, name: 'Красное', unit: 'шт', price: '50 ₽' },
        { id: 4, name: 'Продукт 4', unit: 'уп', price: '150 ₽' },
        { id: 4, name: 'Продукт 4', unit: 'уп', price: '150 ₽' },
        { id: 4, name: 'Продукт 4', unit: 'уп', price: '150 ₽' },
        { id: 4, name: 'Продукт 4', unit: 'уп', price: '150 ₽' },
        { id: 4, name: 'Продукт 4', unit: 'уп', price: '150 ₽' },
        { id: 4, name: 'Продукт 4', unit: 'уп', price: '150 ₽' },
        { id: 4, name: 'Продукт 4', unit: 'уп', price: '150 ₽' },
        { id: 4, name: 'Продукт 5', unit: 'уп', price: '150 ₽' },
    ];

    return (
        <>
         <CategoryList>
            {categories.map((category, index) => (
                <CategoryButton key={index}>{category}</CategoryButton>
            ))}
        </CategoryList>
        <ProductGrid>
            {products.map(product => (
                <ProductCard key={product.id}>
                    <ProductName>{product.name}</ProductName>
                    <ProductUnit>{product.unit}</ProductUnit>
                    <ProductPrice>{product.price}</ProductPrice>
                </ProductCard>
            ))}
        </ProductGrid>
        </>
    );
};

export default ProductList;