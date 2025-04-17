import { ScreenDefinitionField1_2 } from "./screenDefinitionField1_2";
import { ScreenDefinitionField5_2 } from "./screenDefinitionField5_2";
import { ScreenDefinitionLCol_2 } from "./screenDefinitionLCol_2";
import { ScreenDefinitionLine_2 } from "./screenDefinitionLine_2";
import { ScreenDefinitionRCol_2 } from "./screenDefinitionRCol_2";
import { ScreenDefinitionRow_2 } from "./screenDefinitionRow_2";
import { ScreenDefinitionSide_2 } from "./screenDefinitionSide_2";
import { ScreenDefinitionSubField_2 } from "./screenDefinitionSubField_2";
import { VersionType } from "./versionType";

export interface ScreenDefinition_2 {
    field1: ScreenDefinitionField1_2[];
    field5: ScreenDefinitionField5_2[];
    lCol: ScreenDefinitionLCol_2[];
    line: ScreenDefinitionLine_2[];
    rCol: ScreenDefinitionRCol_2[];
    row: ScreenDefinitionRow_2[];
    screenSelection: number | null;
    side: ScreenDefinitionSide_2[];
    subField: ScreenDefinitionSubField_2[];
    type: number | null;
    version1: VersionType;
}