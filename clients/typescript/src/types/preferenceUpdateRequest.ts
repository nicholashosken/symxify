import { PreferenceFields_2 } from "./preferenceFields_2";

export interface PreferenceUpdateRequest {
    preferenceLocator: number | null;
    preferenceFields: PreferenceFields_2;
}