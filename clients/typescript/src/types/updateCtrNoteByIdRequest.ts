import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CtrNoteFields_2 } from "./ctrNoteFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateCtrNoteByIdRequest {
    ctrNumber: string;
    ctrNoteLocatorValue: number;
    ctrNoteLocatorValueSpecified: boolean;
    ctrNoteLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    ctrNoteFields: CtrNoteFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}