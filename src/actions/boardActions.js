import { Draw_X, Draw_Y } from '../helpers/actionsTypes';

export function drawXAction(cell){
    return {
        type : Draw_X,
        cell
    }
}

export function drawYAction(cell){
    return {
        type : Draw_Y,
        cell
    }
}