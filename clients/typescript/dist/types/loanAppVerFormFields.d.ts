import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppVerFormFields {
    verFormValue: boolean;
    verFormValueSpecified: boolean;
    verForm: boolean | null;
    verFormDescriptionValue: boolean;
    verFormDescriptionValueSpecified: boolean;
    verFormDescription: boolean | null;
    verFormSpecfileValue: boolean;
    verFormSpecfileValueSpecified: boolean;
    verFormSpecfile: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
