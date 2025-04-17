import { WireBfcSvcAvailability } from "./wireBfcSvcAvailability";
import { VersionType } from "./versionType";
export interface WireBfc {
    svcAvailability: WireBfcSvcAvailability[];
    version1: VersionType;
}
