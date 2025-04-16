import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { DivIndexLocalFields_2 } from "./divIndexLocalFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateDivIndexLocalByIdRequest {
    divIndexLocalDividendIndexTableValue: number;
    divIndexLocalDividendIndexTableValueSpecified: boolean;
    divIndexLocalDividendIndexTable: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    divIndexLocalFields: DivIndexLocalFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}