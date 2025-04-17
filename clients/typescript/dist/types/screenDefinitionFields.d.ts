import { VersionType } from "./versionType";
export interface ScreenDefinitionFields {
    field1: number[];
    field5: number[];
    lCol: number[];
    line: number[];
    rCol: number[];
    row: number[];
    screenSelection: boolean | null;
    side: number[];
    subField: number[];
    type: boolean | null;
    version1: VersionType;
}
