import { InqDefinitionCardNameRecord_2 } from "./inqDefinitionCardNameRecord_2";
import { InqDefinitionInqField_2 } from "./inqDefinitionInqField_2";
import { InqDefinitionSubField_2 } from "./inqDefinitionSubField_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface InqDefinition_2 {
    cardNameRecord: InqDefinitionCardNameRecord_2[];
    cardNameRecordSpecified: boolean;
    inqField: InqDefinitionInqField_2[];
    inqFieldSpecified: boolean;
    inquiryName: string;
    inquiryNumberValue: number;
    inquiryNumberValueSpecified: boolean;
    inquiryNumber: number | null;
    selectionValue: number;
    selectionValueSpecified: boolean;
    selection: number | null;
    subField: InqDefinitionSubField_2[];
    subFieldSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}