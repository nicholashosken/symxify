import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface AcsGlobal {
    acsAccountManagerEnableValue: boolean;
    acsAccountManagerEnableValueSpecified: boolean;
    acsAccountManagerEnable: boolean | null;
    acsTellerTranEnableValue: boolean;
    acsTellerTranEnableValueSpecified: boolean;
    acsTellerTranEnable: boolean | null;
    creditReportExpireDaysValue: number;
    creditReportExpireDaysValueSpecified: boolean;
    creditReportExpireDays: number | null;
    securedLoanTypeList: string;
    unsecuredLoanTypeList: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
