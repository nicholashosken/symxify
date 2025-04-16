import { ShareHoldFields_2 } from "./shareHoldFields_2";

export interface ShareHoldUpdateRequest {
    shareHoldLocatorValue: number;
    shareHoldLocatorValueSpecified: boolean;
    shareHoldLocator: number | null;
    shareHoldFields: ShareHoldFields_2;
}