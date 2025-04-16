import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireOutCmtCodeFields {
    corporateCommCodeValue: boolean;
    corporateCommCodeValueSpecified: boolean;
    corporateCommCode: boolean | null;
    matchBusFunctionCodeValue: boolean;
    matchBusFunctionCodeValueSpecified: boolean;
    matchBusFunctionCode: boolean | null;
    matchTypeCodeValue: boolean;
    matchTypeCodeValueSpecified: boolean;
    matchTypeCode: boolean | null;
    matchWireTypeValue: boolean;
    matchWireTypeValueSpecified: boolean;
    matchWireType: boolean | null;
    memberCommentCodeValue: boolean;
    memberCommentCodeValueSpecified: boolean;
    memberCommentCode: boolean | null;
    selectionValue: boolean;
    selectionValueSpecified: boolean;
    selection: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}