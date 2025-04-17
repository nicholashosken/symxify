import { WireServiceMessageFields } from "./wireServiceMessageFields";
import { VersionType } from "./versionType";

export interface WireServiceMessageSelectableFields {
    includeAllWireServiceMessageFields: boolean | null;
    wireServiceMessageFields: WireServiceMessageFields;
    version1: VersionType;
}