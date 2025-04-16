import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { DocumentNumberFields_2 } from "./documentNumberFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateDocumentNumberByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    documentNumberFields: DocumentNumberFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}