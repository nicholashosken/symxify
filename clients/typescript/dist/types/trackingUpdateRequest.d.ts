import { TrackingFields_2 } from "./trackingFields_2";
export interface TrackingUpdateRequest {
    trackingLocatorValue: number;
    trackingLocatorValueSpecified: boolean;
    trackingLocator: number | null;
    trackingFields: TrackingFields_2;
}
