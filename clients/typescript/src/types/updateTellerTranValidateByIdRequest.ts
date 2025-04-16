import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { TellerTranValidateFields_2 } from "./tellerTranValidateFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateTellerTranValidateByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    tellerTranValidateFields: TellerTranValidateFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}