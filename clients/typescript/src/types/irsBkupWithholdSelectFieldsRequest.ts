import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { IrsBkupWithholdSingleSelectableFields } from "./irsBkupWithholdSingleSelectableFields";
import { VersionType } from "./versionType";

export interface IrsBkupWithholdSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: IrsBkupWithholdSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}