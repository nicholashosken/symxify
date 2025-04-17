import { WireServiceMessageFields } from "./wireServiceMessageFields";
import { VersionType } from "./versionType";

export interface WireServiceMessageSingleSelectableFields {
    includeAllWireServiceMessageFields: boolean | null;
    wireServiceMessageFields: WireServiceMessageFields;
    version1: VersionType;
}