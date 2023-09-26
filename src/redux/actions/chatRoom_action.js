import { SET_CURRENT_CHAT_ROOOM } from "./types";

export function setCurrentChatRoom(currentChatRoom) {
  return {
    type: SET_CURRENT_CHAT_ROOOM,
    payload: currentChatRoom,
  };
}
