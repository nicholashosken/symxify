import { AcctTrackingTypeField_2 } from "./acctTrackingTypeField_2";
import { VersionType } from "./versionType";

export interface AcctTrackingType_2 {
    description: string;
    field: AcctTrackingTypeField_2[];
    parentClosingOption: boolean | null;
    recordSelection: number | null;
    trackingType: number | null;
    version1: VersionType;
}