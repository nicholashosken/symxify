import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ChexSystems {
    includeNewAccountChexValue: boolean;
    includeNewAccountChexValueSpecified: boolean;
    includeNewAccountChex: boolean | null;
    includeQualiFileValue: boolean;
    includeQualiFileValueSpecified: boolean;
    includeQualiFile: boolean | null;
    includeIdVerificationValue: boolean;
    includeIdVerificationValueSpecified: boolean;
    includeIdVerification: boolean | null;
    includeOfacWatchValue: boolean;
    includeOfacWatchValueSpecified: boolean;
    includeOfacWatch: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}