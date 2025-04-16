import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { TellerTranFeeSingleSelectableFields } from "./tellerTranFeeSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface TellerTranFeeSelectFieldsRequest {
    tellerTranFeeFeeCodeValue: number;
    tellerTranFeeFeeCodeValueSpecified: boolean;
    tellerTranFeeFeeCode: number | null;
    tellerTranFeeTypeCodeValue: number;
    tellerTranFeeTypeCodeValueSpecified: boolean;
    tellerTranFeeTypeCode: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: TellerTranFeeSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}