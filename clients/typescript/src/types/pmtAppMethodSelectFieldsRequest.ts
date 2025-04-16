import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PmtAppMethodSingleSelectableFields } from "./pmtAppMethodSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PmtAppMethodSelectFieldsRequest {
    pmtAppMethodTypeValue: number;
    pmtAppMethodTypeValueSpecified: boolean;
    pmtAppMethodType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: PmtAppMethodSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}