import { DisclosureFields } from "./disclosureFields";
import { VersionType } from "./versionType";
export interface DisclosureSelectableFields {
    includeAllDisclosureFields: boolean | null;
    disclosureFields: DisclosureFields;
    version1: VersionType;
}
