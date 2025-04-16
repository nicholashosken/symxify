import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { DivIndexLocalSingleSelectableFields } from "./divIndexLocalSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface DivIndexLocalSelectFieldsRequest {
    divIndexLocalDividendIndexTableValue: number;
    divIndexLocalDividendIndexTableValueSpecified: boolean;
    divIndexLocalDividendIndexTable: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: DivIndexLocalSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}