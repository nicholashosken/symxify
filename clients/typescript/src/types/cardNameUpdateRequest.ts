import { CardNameFields_2 } from "./cardNameFields_2";

export interface CardNameUpdateRequest {
    cardNameLocator: number | null;
    cardNameFields: CardNameFields_2;
}