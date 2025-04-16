import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface SecFieldFields {
    creSecField: number[];
    creSecFieldSpecified: boolean;
    recordSelectionValue: boolean;
    recordSelectionValueSpecified: boolean;
    recordSelection: boolean | null;
    reqSecField: number[];
    reqSecFieldSpecified: boolean;
    requireField: number[];
    requireFieldSpecified: boolean;
    revSecField: number[];
    revSecFieldSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}