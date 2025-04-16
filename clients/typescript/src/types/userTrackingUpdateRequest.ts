import { UserTrackingFields_2 } from "./userTrackingFields_2";

export interface UserTrackingUpdateRequest {
    userTrackingLocatorValue: number;
    userTrackingLocatorValueSpecified: boolean;
    userTrackingLocator: number | null;
    userTrackingFields: UserTrackingFields_2;
}