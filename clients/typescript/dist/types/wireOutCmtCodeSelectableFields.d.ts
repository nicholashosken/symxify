import { WireOutCmtCodeFields } from "./wireOutCmtCodeFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireOutCmtCodeSelectableFields {
    includeAllWireOutCmtCodeFieldsValue: boolean;
    includeAllWireOutCmtCodeFieldsValueSpecified: boolean;
    includeAllWireOutCmtCodeFields: boolean | null;
    wireOutCmtCodeFields: WireOutCmtCodeFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
