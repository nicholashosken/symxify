import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LookupTypeName {
    lookupTypeValue: number;
    lookupTypeValueSpecified: boolean;
    lookupType: number | null;
    lookupTypeValue2: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
