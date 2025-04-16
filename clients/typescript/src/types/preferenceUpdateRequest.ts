import { PreferenceFields_2 } from "./preferenceFields_2";

export interface PreferenceUpdateRequest {
    preferenceLocatorValue: number;
    preferenceLocatorValueSpecified: boolean;
    preferenceLocator: number | null;
    preferenceFields: PreferenceFields_2;
}