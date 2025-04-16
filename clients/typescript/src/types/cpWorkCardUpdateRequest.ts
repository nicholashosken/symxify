import { CpWorkCardFields_2 } from "./cpWorkCardFields_2";

export interface CpWorkCardUpdateRequest {
    cpWorkCardLocatorValue: number;
    cpWorkCardLocatorValueSpecified: boolean;
    cpWorkCardLocator: number | null;
    cpWorkCardFields: CpWorkCardFields_2;
}