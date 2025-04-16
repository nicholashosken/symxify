import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { TellerTranFeeFields_2 } from "./tellerTranFeeFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateTellerTranFeeByIdRequest {
    tellerTranFeeFeeCodeValue: number;
    tellerTranFeeFeeCodeValueSpecified: boolean;
    tellerTranFeeFeeCode: number | null;
    tellerTranFeeTypeCodeValue: number;
    tellerTranFeeTypeCodeValueSpecified: boolean;
    tellerTranFeeTypeCode: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    tellerTranFeeFields: TellerTranFeeFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}