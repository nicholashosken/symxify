import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireInCmtCodeFields_2 } from "./wireInCmtCodeFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateWireInCmtCodeByIdRequest {
    wireInCmtCodeSelectionValue: number;
    wireInCmtCodeSelectionValueSpecified: boolean;
    wireInCmtCodeSelection: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    wireInCmtCodeFields: WireInCmtCodeFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}