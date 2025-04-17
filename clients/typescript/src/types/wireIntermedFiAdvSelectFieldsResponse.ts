import { WireIntermedFiAdv } from "./wireIntermedFiAdv";
import { VersionType } from "./versionType";

export interface WireIntermedFiAdvSelectFieldsResponse {
    wireIntermedFiAdv: WireIntermedFiAdv;
    version1: VersionType;
    messageId: string;
}