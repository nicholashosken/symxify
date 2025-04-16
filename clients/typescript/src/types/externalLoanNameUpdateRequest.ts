import { ExternalLoanNameFields_2 } from "./externalLoanNameFields_2";

export interface ExternalLoanNameUpdateRequest {
    externalLoanNameLocatorValue: number;
    externalLoanNameLocatorValueSpecified: boolean;
    externalLoanNameLocator: number | null;
    externalLoanNameFields: ExternalLoanNameFields_2;
}