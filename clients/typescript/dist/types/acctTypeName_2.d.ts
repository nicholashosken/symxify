import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface AcctTypeName_2 {
    acctTypeValue: number;
    acctTypeValueSpecified: boolean;
    acctType: number | null;
    description: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
