import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppVerForm_2 {
    verFormValue: number;
    verFormValueSpecified: boolean;
    verForm: number | null;
    verFormDescription: string;
    verFormSpecfile: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
