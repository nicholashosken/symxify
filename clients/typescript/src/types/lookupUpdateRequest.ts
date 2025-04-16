import { LookupFields_2 } from "./lookupFields_2";

export interface LookupUpdateRequest {
    lookupLocatorValue: number;
    lookupLocatorValueSpecified: boolean;
    lookupLocator: number | null;
    lookupFields: LookupFields_2;
}