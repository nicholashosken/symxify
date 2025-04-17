import { TrackingFields_2 } from "./trackingFields_2";

export interface TrackingUpdateRequest {
    trackingLocator: number | null;
    trackingFields: TrackingFields_2;
}