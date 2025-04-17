import { WireReceiverFiInfo } from "./wireReceiverFiInfo";
import { VersionType } from "./versionType";
export interface WireReceiverFiInfoSelectFieldsResponse {
    wireReceiverFiInfo: WireReceiverFiInfo;
    version1: VersionType;
    messageId: string;
}
