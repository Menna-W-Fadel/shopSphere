import{createSlice, PayloadAction} from "@reduxjs/toolkit";

///step 1 define types and state for cart
export type CartItem={
    id:string,
    // title:string,
    // subtitle?:string,
    quantity:number,
    // price:number,
    // image:string,

}

type CartState={
    items:CartItem[]
}

const initialState:CartState={items:[]};

///step 2 create the cart slice

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action:PayloadAction<CartItem>)=>{
            const existingItem =state.items.find(item => item.id === action.payload.id);
            if(existingItem){
                existingItem.quantity+=action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
        },
        removeFromCart:(state,action:PayloadAction<string>) =>{
            state.items=state.items.filter(item=>item.id !== action.payload);
        },
        increaseQuantity:(state,action:PayloadAction<string>)=>{
            const item = state.items.find(item=> item.id === action.payload);

            if(item){
                item.quantity+=1;
            }
        },
        decreaseQuantity:(state,action:PayloadAction<string>)=>{
            const item = state.items.find(item=>item.id === action.payload);
            if(item && item.quantity>1){
                item.quantity-=1;
            }
        }
    }
})

export const {addToCart,removeFromCart,increaseQuantity,decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;