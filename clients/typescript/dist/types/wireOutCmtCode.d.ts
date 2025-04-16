import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireOutCmtCode {
    corporateCommCodeValue: number;
    corporateCommCodeValueSpecified: boolean;
    corporateCommCode: number | null;
    matchBusFunctionCode: string;
    matchTypeCode: string;
    matchWireTypeValue: number;
    matchWireTypeValueSpecified: boolean;
    matchWireType: number | null;
    memberCommentCodeValue: number;
    memberCommentCodeValueSpecified: boolean;
    memberCommentCode: number | null;
    selectionValue: number;
    selectionValueSpecified: boolean;
    selection: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
