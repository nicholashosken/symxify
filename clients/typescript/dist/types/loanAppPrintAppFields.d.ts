import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppPrintAppFields {
    applicationTypeValue: boolean;
    applicationTypeValueSpecified: boolean;
    applicationType: boolean | null;
    specfileValue: boolean;
    specfileValueSpecified: boolean;
    specfile: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
