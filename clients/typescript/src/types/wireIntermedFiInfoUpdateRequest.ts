import { WireIntermedFiInfoFields_2 } from "./wireIntermedFiInfoFields_2";

export interface WireIntermedFiInfoUpdateRequest {
    wireIntermedFiInfoLocatorValue: number;
    wireIntermedFiInfoLocatorValueSpecified: boolean;
    wireIntermedFiInfoLocator: number | null;
    wireIntermedFiInfoFields: WireIntermedFiInfoFields_2;
}