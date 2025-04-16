import { CdmFields_2 } from "./cdmFields_2";

export interface CdmUpdateRequest {
    cdmCdmValue: number;
    cdmCdmValueSpecified: boolean;
    cdmCdm: number | null;
    cdmFields: CdmFields_2;
}