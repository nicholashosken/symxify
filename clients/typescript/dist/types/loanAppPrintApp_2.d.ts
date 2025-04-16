import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppPrintApp_2 {
    applicationTypeValue: number;
    applicationTypeValueSpecified: boolean;
    applicationType: number | null;
    specfile: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
