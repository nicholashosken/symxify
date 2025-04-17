import { MbrAddress } from "./mbrAddress";
import { VersionType } from "./versionType";

export interface MbrAddressSelectFieldsResponse {
    mbrAddress: MbrAddress;
    version1: VersionType;
    messageId: string;
}