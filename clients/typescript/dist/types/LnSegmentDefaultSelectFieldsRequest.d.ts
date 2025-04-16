import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LnSegmentDefaultSingleSelectableFields } from "./lnSegmentDefaultSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LnSegmentDefaultSelectFieldsRequest {
    lnSegmentDefaultSegmentTypeValue: number;
    lnSegmentDefaultSegmentTypeValueSpecified: boolean;
    lnSegmentDefaultSegmentType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LnSegmentDefaultSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
