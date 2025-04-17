import { AcctTrackingTypeField } from "./acctTrackingTypeField";
import { VersionType } from "./versionType";

export interface AcctTrackingType {
    description: string;
    field: AcctTrackingTypeField[];
    parentClosingOption: boolean | null;
    recordSelection: number | null;
    trackingType: number | null;
    version1: VersionType;
}