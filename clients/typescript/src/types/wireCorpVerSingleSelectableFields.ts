import { WireCorpVerFields } from "./wireCorpVerFields";
import { VersionType } from "./versionType";

export interface WireCorpVerSingleSelectableFields {
    includeAllWireCorpVerFields: boolean | null;
    wireCorpVerFields: WireCorpVerFields;
    version1: VersionType;
}