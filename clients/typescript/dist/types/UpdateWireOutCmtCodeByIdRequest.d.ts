import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireOutCmtCodeFields_2 } from "./wireOutCmtCodeFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateWireOutCmtCodeByIdRequest {
    wireOutCmtCodeSelectionValue: number;
    wireOutCmtCodeSelectionValueSpecified: boolean;
    wireOutCmtCodeSelection: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    wireOutCmtCodeFields: WireOutCmtCodeFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
