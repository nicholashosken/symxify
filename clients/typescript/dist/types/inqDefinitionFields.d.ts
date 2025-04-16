import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface InqDefinitionFields {
    cardNameRecord: number[];
    cardNameRecordSpecified: boolean;
    inqField: number[];
    inqFieldSpecified: boolean;
    inquiryNameValue: boolean;
    inquiryNameValueSpecified: boolean;
    inquiryName: boolean | null;
    inquiryNumberValue: boolean;
    inquiryNumberValueSpecified: boolean;
    inquiryNumber: boolean | null;
    selectionValue: boolean;
    selectionValueSpecified: boolean;
    selection: boolean | null;
    subField: number[];
    subFieldSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
