import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanAppCopiedFldsFields {
    applicationTypeValue: boolean;
    applicationTypeValueSpecified: boolean;
    applicationType: boolean | null;
    copiedField: number[];
    copiedFieldSpecified: boolean;
    subField: number[];
    subFieldSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}