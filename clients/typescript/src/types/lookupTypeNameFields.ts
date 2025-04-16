import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LookupTypeNameFields {
    lookupTypeValue: boolean;
    lookupTypeValueSpecified: boolean;
    lookupType: boolean | null;
    lookupTypeValueValue: boolean;
    lookupTypeValueValueSpecified: boolean;
    lookupTypeValue3: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}