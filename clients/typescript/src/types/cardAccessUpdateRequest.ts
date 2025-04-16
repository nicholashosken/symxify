import { CardAccessFields_2 } from "./cardAccessFields_2";

export interface CardAccessUpdateRequest {
    cardAccessLocatorValue: number;
    cardAccessLocatorValueSpecified: boolean;
    cardAccessLocator: number | null;
    cardAccessFields: CardAccessFields_2;
}