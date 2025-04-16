import { CardNameFields_2 } from "./cardNameFields_2";

export interface CardNameUpdateRequest {
    cardNameLocatorValue: number;
    cardNameLocatorValueSpecified: boolean;
    cardNameLocator: number | null;
    cardNameFields: CardNameFields_2;
}