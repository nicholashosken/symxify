import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LookupTypeNameSingleSelectableFields } from "./lookupTypeNameSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LookupTypeNameSelectFieldsRequest {
    lookupTypeNameLookupTypeValue: number;
    lookupTypeNameLookupTypeValueSpecified: boolean;
    lookupTypeNameLookupType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LookupTypeNameSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}