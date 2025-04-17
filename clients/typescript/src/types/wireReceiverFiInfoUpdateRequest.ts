import { WireReceiverFiInfoFields_2 } from "./wireReceiverFiInfoFields_2";

export interface WireReceiverFiInfoUpdateRequest {
    wireReceiverFiInfoLocatorValue: number;
    wireReceiverFiInfoLocatorValueSpecified: boolean;
    wireReceiverFiInfoLocator: number | null;
    wireReceiverFiInfoFields: WireReceiverFiInfoFields_2;
}