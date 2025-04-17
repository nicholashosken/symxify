import { WireIntermedFiAdv } from "./wireIntermedFiAdv";
import { VersionType } from "./versionType";

export interface WireIntermedFiAdvPagedListSelectFieldsResponse {
    wireIntermedFiAdv: WireIntermedFiAdv[];
    token: string;
    version1: VersionType;
    messageId: string;
}