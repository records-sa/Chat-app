import { SET_CURRENT_CHAT_ROOOM } from "../actions/types";

const initialChatRoomState = { currentChatRoom: null };

export default function (state = initialChatRoomState, action) {
  switch (action.type) {
    case SET_CURRENT_CHAT_ROOOM:
      return { ...state, currentChatRoom: action.payload };

    default:
      return state;
  }
}
