import { SiteCashOrderTypeFields_2 } from "./siteCashOrderTypeFields_2";

export interface SiteCashOrderTypeUpdateRequest {
    siteCashOrderTypeLocatorValue: number;
    siteCashOrderTypeLocatorValueSpecified: boolean;
    siteCashOrderTypeLocator: number | null;
    siteCashOrderTypeFields: SiteCashOrderTypeFields_2;
}