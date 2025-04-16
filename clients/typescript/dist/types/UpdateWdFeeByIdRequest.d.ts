import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WdFeeFields_2 } from "./wdFeeFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateWdFeeByIdRequest {
    wdFeeWithdrawalFeeTypeValue: number;
    wdFeeWithdrawalFeeTypeValueSpecified: boolean;
    wdFeeWithdrawalFeeType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    wdFeeFields: WdFeeFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
