import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanAppReusedFldsFields {
    applicationTypeValue: boolean;
    applicationTypeValueSpecified: boolean;
    applicationType: boolean | null;
    reusedField: number[];
    reusedFieldSpecified: boolean;
    subField: number[];
    subFieldSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}