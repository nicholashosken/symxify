import { EftFields_2 } from "./eftFields_2";

export interface EftUpdateRequest {
    eftLocatorValue: number;
    eftLocatorValueSpecified: boolean;
    eftLocator: number | null;
    eftFields: EftFields_2;
}