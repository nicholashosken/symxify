import { WireIntermedFiInfo } from "./wireIntermedFiInfo";
import { VersionType } from "./versionType";

export interface WireIntermedFiInfoSearchPagedSelectFieldsResponse {
    wireIntermedFiInfo: WireIntermedFiInfo[];
    token: string;
    version1: VersionType;
    messageId: string;
}