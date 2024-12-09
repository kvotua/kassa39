import { useState, useEffect } from 'react';
import { ProductGrid, ProductCard, ProductName, ProductUnit, ProductPrice, CategoryList, CategoryButton, ModalOverlay, ModalContent} from './ProductList.scss';
import { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const ProductList = () => {

    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [quantity, setQuantity] = useState(0);

    const categories = ['Все', 'Молочные продукты', 'Овощи', 'Фрукты', 'Напитки', 'Все', 
        'Молочные продукты', 'Овощи', 'Фрукты', 'Напитки', ];


    const products = [
        { id: 1, name: 'Светлое', unit: 'кг', price: 332, mark: 'false'},
        { id: 2, name: 'Темное', unit: 'л', price: 123, mark: 'false'},
        { id: 3, name: 'Красное', unit: 'шт', price: 231, mark: 'false'},
        { id: 4, name: 'Красное н/ф', unit: 'уп', price: 323, mark: 'false'},
        { id: 5, name: 'Темное н/ф', unit: 'уп', price: 123, mark: 'false'},
        { id: 6, name: 'ИПА', unit: 'уп', price: 322, mark: 'false'},
        { id: 7, name: 'Молочный стаут', unit: 'уп', price: 23, mark: 'false'},
        { id: 8, name: 'Продукт 4', unit: 'уп', price: 134, mark: 'false'},
    ];

    const handleAddToCart = (product: { id: number, name: string, unit: string; price: number, mark: string}) => {
        
        setSelectedProduct(product);
        setModalIsOpen(true);
    };

    const handleConfirm = () => {
        const newProduct = {
            id: 0,
            id_product: selectedProduct.id,
            name: selectedProduct.name,
            unit: selectedProduct.unit,
            price: selectedProduct.price,
            mark: selectedProduct.mark,
            quantity: quantity
        };
        dispatch(addToCart(newProduct));
        closeModal();
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedProduct(null);
        setQuantity(0);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (modalIsOpen) {
            if (event.key === 'Enter') {
                handleConfirm();
            } else if (event.key >= '0' && event.key <= '9') {
                // Обновляем quantity при нажатии цифр
                setQuantity((prev) => Number(prev.toString() + event.key));
            } else if (event.key === 'Backspace') {
                // Удаляем последнюю цифру
                setQuantity((prev) => Math.floor(prev / 10));
            }
        }
    };

    useEffect(() => {
        if (modalIsOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [modalIsOpen]);

    return (
        <>
         <CategoryList>
            {categories.map((category, index) => (
                <CategoryButton key={index}>{category}</CategoryButton>
            ))}
        </CategoryList>
        <ProductGrid>
            {products.map(product => (
                <ProductCard key={product.id}  onClick={() => handleAddToCart(product)}>
                    <ProductName>{product.name}</ProductName>
                    <ProductUnit>{product.unit}</ProductUnit>
                    <ProductPrice>{product.price}</ProductPrice>
                </ProductCard>
            ))}
        </ProductGrid>
        {modalIsOpen && (
            <ModalOverlay>
                <ModalContent>
                    <h2>{selectedProduct ? selectedProduct.name : 'Выберите продукт'}</h2>
                    <label>
                        Количество:
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            min="0"
                        />
                    </label>
                    <div>
                        <CategoryButton onClick={handleConfirm}>Подтвердить</CategoryButton>
                        <CategoryButton onClick={closeModal}>Закрыть</CategoryButton>
                    </div>
                </ModalContent>
            </ModalOverlay>
        )}
        </>
    );
};

export default ProductList;