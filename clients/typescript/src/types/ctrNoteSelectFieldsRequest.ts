import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CtrNoteSingleSelectableFields } from "./ctrNoteSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CtrNoteSelectFieldsRequest {
    ctrNumber: string;
    ctrNoteLocatorValue: number;
    ctrNoteLocatorValueSpecified: boolean;
    ctrNoteLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CtrNoteSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}