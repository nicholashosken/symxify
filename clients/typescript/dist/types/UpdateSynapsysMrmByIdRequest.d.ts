import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { SynapsysMrmFields_2 } from "./synapsysMrmFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateSynapsysMrmByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    synapsysMrmFields: SynapsysMrmFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
