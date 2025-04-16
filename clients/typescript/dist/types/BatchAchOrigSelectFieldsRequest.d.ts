import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { BatchAchOrigSingleSelectableFields } from "./batchAchOrigSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface BatchAchOrigSelectFieldsRequest {
    accountNumber: string;
    batchAchOrigLocatorValue: number;
    batchAchOrigLocatorValueSpecified: boolean;
    batchAchOrigLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: BatchAchOrigSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
