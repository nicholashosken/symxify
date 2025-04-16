import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { DocTypeDefaultFields_2 } from "./docTypeDefaultFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateDocTypeDefaultByIdRequest {
    docTypeDefaultDocumentTypeValue: number;
    docTypeDefaultDocumentTypeValueSpecified: boolean;
    docTypeDefaultDocumentType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    docTypeDefaultFields: DocTypeDefaultFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}