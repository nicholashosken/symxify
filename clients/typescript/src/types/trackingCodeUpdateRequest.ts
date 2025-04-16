import { TrackingCodeFields_2 } from "./trackingCodeFields_2";

export interface TrackingCodeUpdateRequest {
    trackingCodeCodeValue: number;
    trackingCodeCodeValueSpecified: boolean;
    trackingCodeCode: number | null;
    trackingCodeFields: TrackingCodeFields_2;
}