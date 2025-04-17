import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface DeleteCheckRequest {
    checkGlobalSequenceDateValue: string;
    checkGlobalSequenceDateValueSpecified: boolean;
    checkGlobalSequenceDate: string | null;
    checkGlobalSequenceValue: number;
    checkGlobalSequenceValueSpecified: boolean;
    checkGlobalSequence: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
