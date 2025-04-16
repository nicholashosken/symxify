import { InsTypeFields_2 } from "./insTypeFields_2";

export interface InsTypeUpdateRequest {
    insTypeInsuranceTypeValue: number;
    insTypeInsuranceTypeValueSpecified: boolean;
    insTypeInsuranceType: number | null;
    insTypeFields: InsTypeFields_2;
}