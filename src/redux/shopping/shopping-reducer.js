import * as actionTypes from './shopping-types'

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      name: 'Tork 1-ply',
      category: 'bathroom',
      price: 5,
      brand: '',
      stockCount: 1,
      productInformation: 'Something',
      itemDescription: 'To wipe your bum bum',
      image: 'https://m.media-amazon.com/images/I/41EyasefFqL._AC_SY355_.jpg',
      review: 'Something else',
    },
    {
      id: 2,
      name: 'Affluent 10-ply',
      category: 'bathroom',
      price: 50,
      brand: '',
      stockCount: 1,
      productInformation: 'Something',
      itemDescription: 'To wipe your bum bum',
      image:
        'http://affluenttoiletpaper.weebly.com/uploads/4/4/9/5/44950615/s801281753320042132_p1_i1_w550.jpeg',
      review: 'Something else',
    },
  ],
  basket: [],
  currentItem: null,
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_BASKET:
      const item = state.products.find(
        (product) => product.id === action.payload.id
      )

      const inBasket = state.basket.find((item) =>
        item.id === action.payload.id ? true : false
      )

      return {
        ...state,
        basket: inBasket
          ? state.basket.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.basket, { ...item, qty: 1 }],
      }
    case actionTypes.REMOVE_FROM_BASKET:
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.payload.id),
      }
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      }
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      }
    default:
      return state
  }
}

export default shopReducer

// MVP
// Get Item data from products array
// Check if Item is in basket already
