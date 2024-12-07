import { useState, useEffect } from 'react';
import { Container, CheckComponent, CenterComponent, MenuComponent, ProductComponent, Button, ButtonImg, 
    CartButton, Sidebar, BackgroundBlur} from './CashRegister.scss';
import CheckList from '../shared/ui/CheckList';
import ProductList from '../shared/ui/ProductList';

import Egais from '../assets/egais.png';
import Markirovka from '../assets/markirovka.png';
import Merkuri from '../assets/merkuri.png';

import EgaisMobile from '../assets/egais-mobile.png';
import MerkuriMobile from '../assets/merkuriMobile.png';
import MarkirovkaMobile from '../assets/icon-mark.png';
import HomeMobile from '../assets/home.svg';

import CartIcon from '../assets/shopping-cart.svg';

const CashRegister = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const toggleSidebar = () => {
        if (isSidebarOpen) {
            setIsClosing(true);
            setSidebarOpen(false);
        } else {
            setSidebarOpen(true);
        }
    }

    return (
        <Container>
            <BackgroundBlur isOpen={isSidebarOpen}>
                <CheckComponent>
                    <CheckList></CheckList>
                </CheckComponent>  
                <CenterComponent>
                    <MenuComponent>
                    {isMobile ? <ButtonImg style={{backgroundColor: 'white'}}> <img src={HomeMobile} /></ButtonImg> : <Button >Главная</Button>}
                        <ButtonImg style={{backgroundColor: 'white'}}> <img src={isMobile ? EgaisMobile : Egais} /></ButtonImg>
                        <ButtonImg style={{backgroundColor: '#FAFC2D'}}> <img src={isMobile ? MarkirovkaMobile : Markirovka} /></ButtonImg>
                        <ButtonImg style={{backgroundColor: 'white'}}> <img src={isMobile ? MerkuriMobile : Merkuri} /></ButtonImg>
                    </MenuComponent>
                    <ProductComponent>
                        <ProductList></ProductList>
                    </ProductComponent>
                </CenterComponent>
                <CheckComponent>
                    <h2>Чек 2</h2>
                    <p>Детали чека...</p>
                </CheckComponent>
            </BackgroundBlur>
            <Sidebar isOpen={isSidebarOpen} isClosing={isClosing}>
                <CheckList/>
                <button onClick={toggleSidebar}>Закрыть</button>
            </Sidebar>
            <CartButton onClick={toggleSidebar}>
                <img src={CartIcon} alt="Корзина" />
            </CartButton>
        </Container>
    );
};

export default CashRegister;