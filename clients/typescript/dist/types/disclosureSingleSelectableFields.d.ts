import { DisclosureFields } from "./disclosureFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface DisclosureSingleSelectableFields {
    includeAllDisclosureFieldsValue: boolean;
    includeAllDisclosureFieldsValueSpecified: boolean;
    includeAllDisclosureFields: boolean | null;
    disclosureFields: DisclosureFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
