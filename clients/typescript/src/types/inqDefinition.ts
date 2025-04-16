import { InqDefinitionCardNameRecord } from "./inqDefinitionCardNameRecord";
import { InqDefinitionInqField } from "./inqDefinitionInqField";
import { InqDefinitionSubField } from "./inqDefinitionSubField";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface InqDefinition {
    cardNameRecord: InqDefinitionCardNameRecord[];
    cardNameRecordSpecified: boolean;
    inqField: InqDefinitionInqField[];
    inqFieldSpecified: boolean;
    inquiryName: string;
    inquiryNumberValue: number;
    inquiryNumberValueSpecified: boolean;
    inquiryNumber: number | null;
    selectionValue: number;
    selectionValueSpecified: boolean;
    selection: number | null;
    subField: InqDefinitionSubField[];
    subFieldSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}