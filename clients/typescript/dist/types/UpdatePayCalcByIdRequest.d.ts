import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PayCalcFields_2 } from "./payCalcFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdatePayCalcByIdRequest {
    payCalcPaymentCalculationTypeValue: number;
    payCalcPaymentCalculationTypeValueSpecified: boolean;
    payCalcPaymentCalculationType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    payCalcFields: PayCalcFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
