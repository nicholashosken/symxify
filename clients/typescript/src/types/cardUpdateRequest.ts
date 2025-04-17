import { CardFields_2 } from "./cardFields_2";

export interface CardUpdateRequest {
    cardLocator: number | null;
    cardFields: CardFields_2;
}