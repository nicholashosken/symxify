import { CardAccessFields_2 } from "./cardAccessFields_2";

export interface CardAccessUpdateRequest {
    cardAccessLocator: number | null;
    cardAccessFields: CardAccessFields_2;
}