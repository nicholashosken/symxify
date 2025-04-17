import { WireReceiverFiInfo } from "./wireReceiverFiInfo";
import { VersionType } from "./versionType";
export interface WireReceiverFiInfoSearchPagedSelectFieldsResponse {
    wireReceiverFiInfo: WireReceiverFiInfo[];
    token: string;
    version1: VersionType;
    messageId: string;
}
