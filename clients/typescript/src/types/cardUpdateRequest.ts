import { CardFields_2 } from "./cardFields_2";

export interface CardUpdateRequest {
    cardLocatorValue: number;
    cardLocatorValueSpecified: boolean;
    cardLocator: number | null;
    cardFields: CardFields_2;
}