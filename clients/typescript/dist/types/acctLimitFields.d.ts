import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface AcctLimitFields {
    limitDescription: number[];
    limitDescriptionSpecified: boolean;
    limitSourceCodes: number[];
    limitSourceCodesSpecified: boolean;
    limitTransactionSubType: number[];
    limitTransactionSubTypeSpecified: boolean;
    limitTransactionType: number[];
    limitTransactionTypeSpecified: boolean;
    warningCodeList: number[];
    warningCodeListSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
