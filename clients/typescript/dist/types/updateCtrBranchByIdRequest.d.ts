import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CtrBranchFields_2 } from "./ctrBranchFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateCtrBranchByIdRequest {
    ctrNumber: string;
    ctrBranchLocatorValue: number;
    ctrBranchLocatorValueSpecified: boolean;
    ctrBranchLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    ctrBranchFields: CtrBranchFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
