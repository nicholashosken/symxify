import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ShareFieldName_2 {
    fieldValue: number;
    fieldValueSpecified: boolean;
    field: number | null;
    fieldName: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}