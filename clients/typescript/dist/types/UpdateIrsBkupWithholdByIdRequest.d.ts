import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { IrsBkupWithholdFields_2 } from "./irsBkupWithholdFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateIrsBkupWithholdByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    irsBkupWithholdFields: IrsBkupWithholdFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
