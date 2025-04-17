import { WireIntermedFiInfo } from "./wireIntermedFiInfo";
import { VersionType } from "./versionType";

export interface WireIntermedFiInfoPagedListSelectFieldsResponse {
    wireIntermedFiInfo: WireIntermedFiInfo[];
    token: string;
    version1: VersionType;
    messageId: string;
}