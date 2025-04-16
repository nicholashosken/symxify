import { UserTrackingFmFields_2 } from "./userTrackingFmFields_2";

export interface UserTrackingFmUpdateRequest {
    userTrackingFmLocatorValue: number;
    userTrackingFmLocatorValueSpecified: boolean;
    userTrackingFmLocator: number | null;
    userTrackingFmFields: UserTrackingFmFields_2;
}