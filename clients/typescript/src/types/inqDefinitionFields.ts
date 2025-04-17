import { VersionType } from "./versionType";

export interface InqDefinitionFields {
    cardNameRecord: number[];
    inqField: number[];
    inquiryName: boolean | null;
    inquiryNumber: boolean | null;
    selection: boolean | null;
    subField: number[];
    version1: VersionType;
}