import { WireFmHistoryFields } from "./wireFmHistoryFields";
import { VersionType } from "./versionType";
export interface WireFmHistorySelectableFields {
    includeAllWireFmHistoryFields: boolean | null;
    wireFmHistoryFields: WireFmHistoryFields;
    version1: VersionType;
}
