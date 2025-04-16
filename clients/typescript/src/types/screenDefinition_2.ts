import { ScreenDefinitionField1_2 } from "./screenDefinitionField1_2";
import { ScreenDefinitionField5_2 } from "./screenDefinitionField5_2";
import { ScreenDefinitionLCol_2 } from "./screenDefinitionLCol_2";
import { ScreenDefinitionLine_2 } from "./screenDefinitionLine_2";
import { ScreenDefinitionRCol_2 } from "./screenDefinitionRCol_2";
import { ScreenDefinitionRow_2 } from "./screenDefinitionRow_2";
import { ScreenDefinitionSide_2 } from "./screenDefinitionSide_2";
import { ScreenDefinitionSubField_2 } from "./screenDefinitionSubField_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ScreenDefinition_2 {
    field1: ScreenDefinitionField1_2[];
    field1Specified: boolean;
    field5: ScreenDefinitionField5_2[];
    field5Specified: boolean;
    lCol: ScreenDefinitionLCol_2[];
    lColSpecified: boolean;
    line: ScreenDefinitionLine_2[];
    lineSpecified: boolean;
    rCol: ScreenDefinitionRCol_2[];
    rColSpecified: boolean;
    row: ScreenDefinitionRow_2[];
    rowSpecified: boolean;
    screenSelectionValue: number;
    screenSelectionValueSpecified: boolean;
    screenSelection: number | null;
    side: ScreenDefinitionSide_2[];
    sideSpecified: boolean;
    subField: ScreenDefinitionSubField_2[];
    subFieldSpecified: boolean;
    typeValue: number;
    typeValueSpecified: boolean;
    type: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}