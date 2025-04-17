import { DisclosureFields } from "./disclosureFields";
import { VersionType } from "./versionType";
export interface DisclosureSingleSelectableFields {
    includeAllDisclosureFields: boolean | null;
    disclosureFields: DisclosureFields;
    version1: VersionType;
}
