import { CashDeviceTypeDenominations } from "./cashDeviceTypeDenominations";
import { CoinType } from "./coinType";
import { CashDeviceTypeOrientation } from "./cashDeviceTypeOrientation";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CashDeviceType {
    denominations: CashDeviceTypeDenominations;
    coin: CoinType;
    orientationValue: CashDeviceTypeOrientation;
    orientationValueSpecified: boolean;
    orientation: CashDeviceTypeOrientation | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    name: string;
}
