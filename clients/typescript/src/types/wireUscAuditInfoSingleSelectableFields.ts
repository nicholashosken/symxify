import { WireUscAuditInfoFields } from "./wireUscAuditInfoFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireUscAuditInfoSingleSelectableFields {
    includeAllWireUscAuditInfoFieldsValue: boolean;
    includeAllWireUscAuditInfoFieldsValueSpecified: boolean;
    includeAllWireUscAuditInfoFields: boolean | null;
    wireUscAuditInfoFields: WireUscAuditInfoFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}