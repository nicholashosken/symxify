import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ShareFieldName {
    fieldValue: number;
    fieldValueSpecified: boolean;
    field: number | null;
    fieldName: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}