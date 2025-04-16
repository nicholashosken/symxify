import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { TellerFeeFields_2 } from "./tellerFeeFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateTellerFeeByIdRequest {
    tellerFeeTellerTransactionFeeTypeValue: number;
    tellerFeeTellerTransactionFeeTypeValueSpecified: boolean;
    tellerFeeTellerTransactionFeeType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    tellerFeeFields: TellerFeeFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}