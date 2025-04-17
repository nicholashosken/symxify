import { WireCorpVer } from "./wireCorpVer";
import { VersionType } from "./versionType";
export interface WireCorpVerSelectFieldsResponse {
    wireCorpVer: WireCorpVer;
    version1: VersionType;
    messageId: string;
}
