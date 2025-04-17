import { CashDeviceTypeDenominations } from "./cashDeviceTypeDenominations";
import { CoinType } from "./coinType";
import { CashDeviceTypeOrientation } from "./cashDeviceTypeOrientation";
import { VersionType } from "./versionType";
export interface CashDeviceType {
    denominations: CashDeviceTypeDenominations;
    coin: CoinType;
    orientation: CashDeviceTypeOrientation | null;
    version1: VersionType;
    name: string;
}
