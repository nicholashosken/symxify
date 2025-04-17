import { WireReceiverFiInfo } from "./wireReceiverFiInfo";
import { VersionType } from "./versionType";
export interface WireReceiverFiInfoPagedListSelectFieldsResponse {
    wireReceiverFiInfo: WireReceiverFiInfo[];
    token: string;
    version1: VersionType;
    messageId: string;
}
