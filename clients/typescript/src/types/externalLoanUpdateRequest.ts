import { ExternalLoanFields_2 } from "./externalLoanFields_2";

export interface ExternalLoanUpdateRequest {
    externalLoanLocatorValue: number;
    externalLoanLocatorValueSpecified: boolean;
    externalLoanLocator: number | null;
    externalLoanFields: ExternalLoanFields_2;
}