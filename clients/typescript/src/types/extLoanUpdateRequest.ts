import { ExtLoanFields_2 } from "./extLoanFields_2";

export interface ExtLoanUpdateRequest {
    extLoanProcessorValue: number;
    extLoanProcessorValueSpecified: boolean;
    extLoanProcessor: number | null;
    extLoanFields: ExtLoanFields_2;
}