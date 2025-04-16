import { PmtAppMethodFields_2 } from "./pmtAppMethodFields_2";

export interface PmtAppMethodUpdateRequest {
    pmtAppMethodTypeValue: number;
    pmtAppMethodTypeValueSpecified: boolean;
    pmtAppMethodType: number | null;
    pmtAppMethodFields: PmtAppMethodFields_2;
}