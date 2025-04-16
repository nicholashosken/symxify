import { EftNameFields_2 } from "./eftNameFields_2";
export interface EftNameUpdateRequest {
    eftNameLocatorValue: number;
    eftNameLocatorValueSpecified: boolean;
    eftNameLocator: number | null;
    eftNameFields: EftNameFields_2;
}
