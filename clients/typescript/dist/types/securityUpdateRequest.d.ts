import { SecurityFields_2 } from "./securityFields_2";
export interface SecurityUpdateRequest {
    securitySecurityCategoryValue: number;
    securitySecurityCategoryValueSpecified: boolean;
    securitySecurityCategory: number | null;
    securityRecordSelectionValue: number;
    securityRecordSelectionValueSpecified: boolean;
    securityRecordSelection: number | null;
    securityFields: SecurityFields_2;
}
