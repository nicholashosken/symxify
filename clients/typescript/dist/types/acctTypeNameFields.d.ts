import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface AcctTypeNameFields {
    acctTypeValue: boolean;
    acctTypeValueSpecified: boolean;
    acctType: boolean | null;
    descriptionValue: boolean;
    descriptionValueSpecified: boolean;
    description: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
