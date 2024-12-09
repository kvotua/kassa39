import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
    id: number;
    id_product: number
    name: string;
    quantity: number;
    price: number;
    mark: string;
    unit: string;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>) {
            const existingItem = state.items.find(item => item.name === action.payload.name);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity; 
                existingItem.price += action.payload.price; 
            } else {
                const newId = state.items.length > 0 ? Math.max(...state.items.map(item => item.id)) + 1 : 1;
                const newItem = {
                    ...action.payload,
                    id: newId,
                };
                state.items.push(newItem);
            }
        },
        removeFromCart(state, action: PayloadAction<number>) {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearCart(state) {
            state.items = [];
        },
        reorderCartItems(state, action: PayloadAction<CartItem[]>) {
            state.items = action.payload; 
        },
    },
});

export const { addToCart, removeFromCart, clearCart, reorderCartItems } = cartSlice.actions;

export default cartSlice.reducer;