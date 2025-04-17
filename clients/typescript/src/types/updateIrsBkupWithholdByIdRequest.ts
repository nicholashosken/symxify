import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { IrsBkupWithholdFields_2 } from "./irsBkupWithholdFields_2";
import { VersionType } from "./versionType";

export interface UpdateIrsBkupWithholdByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    irsBkupWithholdFields: IrsBkupWithholdFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}