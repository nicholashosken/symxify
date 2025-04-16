import { SynapsysMrmFields } from "./synapsysMrmFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface SynapsysMrmSingleSelectableFields {
    includeAllSynapsysMrmFieldsValue: boolean;
    includeAllSynapsysMrmFieldsValueSpecified: boolean;
    includeAllSynapsysMrmFields: boolean | null;
    synapsysMrmFields: SynapsysMrmFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}