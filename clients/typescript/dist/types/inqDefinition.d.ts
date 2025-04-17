import { InqDefinitionCardNameRecord } from "./inqDefinitionCardNameRecord";
import { InqDefinitionInqField } from "./inqDefinitionInqField";
import { InqDefinitionSubField } from "./inqDefinitionSubField";
import { VersionType } from "./versionType";
export interface InqDefinition {
    cardNameRecord: InqDefinitionCardNameRecord[];
    inqField: InqDefinitionInqField[];
    inquiryName: string;
    inquiryNumber: number | null;
    selection: number | null;
    subField: InqDefinitionSubField[];
    version1: VersionType;
}
