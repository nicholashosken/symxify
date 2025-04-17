import { InqDefinitionCardNameRecord_2 } from "./inqDefinitionCardNameRecord_2";
import { InqDefinitionInqField_2 } from "./inqDefinitionInqField_2";
import { InqDefinitionSubField_2 } from "./inqDefinitionSubField_2";
import { VersionType } from "./versionType";
export interface InqDefinition_2 {
    cardNameRecord: InqDefinitionCardNameRecord_2[];
    inqField: InqDefinitionInqField_2[];
    inquiryName: string;
    inquiryNumber: number | null;
    selection: number | null;
    subField: InqDefinitionSubField_2[];
    version1: VersionType;
}
