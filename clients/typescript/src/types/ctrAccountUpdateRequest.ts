import { CtrAccountFields_2 } from "./ctrAccountFields_2";

export interface CtrAccountUpdateRequest {
    ctrAccountLocatorValue: number;
    ctrAccountLocatorValueSpecified: boolean;
    ctrAccountLocator: number | null;
    ctrAccountFields: CtrAccountFields_2;
}