import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ScreenDefinitionFields {
    field1: number[];
    field1Specified: boolean;
    field5: number[];
    field5Specified: boolean;
    lCol: number[];
    lColSpecified: boolean;
    line: number[];
    lineSpecified: boolean;
    rCol: number[];
    rColSpecified: boolean;
    row: number[];
    rowSpecified: boolean;
    screenSelectionValue: boolean;
    screenSelectionValueSpecified: boolean;
    screenSelection: boolean | null;
    side: number[];
    sideSpecified: boolean;
    subField: number[];
    subFieldSpecified: boolean;
    typeValue: boolean;
    typeValueSpecified: boolean;
    type: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}