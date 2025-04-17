import { WireOfacDetailsFields } from "./wireOfacDetailsFields";
import { VersionType } from "./versionType";
export interface WireOfacDetailsSelectableFields {
    includeAllWireOfacDetailsFields: boolean | null;
    wireOfacDetailsFields: WireOfacDetailsFields;
    version1: VersionType;
}
