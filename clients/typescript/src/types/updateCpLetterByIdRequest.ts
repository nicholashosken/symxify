import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CpLetterFields_2 } from "./cpLetterFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateCpLetterByIdRequest {
    cpLetterLetterCodeValue: number;
    cpLetterLetterCodeValueSpecified: boolean;
    cpLetterLetterCode: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    cpLetterFields: CpLetterFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}