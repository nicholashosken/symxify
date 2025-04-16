import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AcsGlobalFields {
    acsAccountManagerEnableValue: boolean;
    acsAccountManagerEnableValueSpecified: boolean;
    acsAccountManagerEnable: boolean | null;
    acsTellerTranEnableValue: boolean;
    acsTellerTranEnableValueSpecified: boolean;
    acsTellerTranEnable: boolean | null;
    creditReportExpireDaysValue: boolean;
    creditReportExpireDaysValueSpecified: boolean;
    creditReportExpireDays: boolean | null;
    securedLoanTypeListValue: boolean;
    securedLoanTypeListValueSpecified: boolean;
    securedLoanTypeList: boolean | null;
    unsecuredLoanTypeListValue: boolean;
    unsecuredLoanTypeListValueSpecified: boolean;
    unsecuredLoanTypeList: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}