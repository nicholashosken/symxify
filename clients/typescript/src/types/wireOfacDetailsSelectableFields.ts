import { WireOfacDetailsFields } from "./wireOfacDetailsFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireOfacDetailsSelectableFields {
    includeAllWireOfacDetailsFieldsValue: boolean;
    includeAllWireOfacDetailsFieldsValueSpecified: boolean;
    includeAllWireOfacDetailsFields: boolean | null;
    wireOfacDetailsFields: WireOfacDetailsFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}