import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CheckFields_2 } from "./checkFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateCheckByIdRequest {
    checkGlobalSequenceDateValue: string;
    checkGlobalSequenceDateValueSpecified: boolean;
    checkGlobalSequenceDate: string | null;
    checkGlobalSequenceValue: number;
    checkGlobalSequenceValueSpecified: boolean;
    checkGlobalSequence: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    checkFields: CheckFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
