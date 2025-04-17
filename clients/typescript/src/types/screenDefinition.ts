import { ScreenDefinitionField1 } from "./screenDefinitionField1";
import { ScreenDefinitionField5 } from "./screenDefinitionField5";
import { ScreenDefinitionLCol } from "./screenDefinitionLCol";
import { ScreenDefinitionLine } from "./screenDefinitionLine";
import { ScreenDefinitionRCol } from "./screenDefinitionRCol";
import { ScreenDefinitionRow } from "./screenDefinitionRow";
import { ScreenDefinitionSide } from "./screenDefinitionSide";
import { ScreenDefinitionSubField } from "./screenDefinitionSubField";
import { VersionType } from "./versionType";

export interface ScreenDefinition {
    field1: ScreenDefinitionField1[];
    field5: ScreenDefinitionField5[];
    lCol: ScreenDefinitionLCol[];
    line: ScreenDefinitionLine[];
    rCol: ScreenDefinitionRCol[];
    row: ScreenDefinitionRow[];
    screenSelection: number | null;
    side: ScreenDefinitionSide[];
    subField: ScreenDefinitionSubField[];
    type: number | null;
    version1: VersionType;
}