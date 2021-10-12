import * as actionTypes from './shopping-types'

export const addToBasket = (itemID) => {
  return {
    type: actionTypes.ADD_TO_BASKET,
    payload: {
      id: itemID,
    },
  }
}

export const removeFromBasket = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_BASKET,
    payload: {
      id: itemID,
    },
  }
}

export const adjustItemQty = (itemID, qty) => {
  return {
    type: actionTypes.ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty,
    },
  }
}

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  }
}
