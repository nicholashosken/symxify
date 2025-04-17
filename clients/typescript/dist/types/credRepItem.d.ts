import { CredRepItemAmount } from "./credRepItemAmount";
import { CredRepItemCh1 } from "./credRepItemCh1";
import { CredRepItemCh10 } from "./credRepItemCh10";
import { CredRepItemCh15 } from "./credRepItemCh15";
import { CredRepItemCh2 } from "./credRepItemCh2";
import { CredRepItemCh26 } from "./credRepItemCh26";
import { CredRepItemCh4 } from "./credRepItemCh4";
import { CredRepItemChLong } from "./credRepItemChLong";
import { CredRepItemCode } from "./credRepItemCode";
import { CredRepItemDate } from "./credRepItemDate";
import { VersionType } from "./versionType";
export interface CredRepItem {
    amount: CredRepItemAmount[];
    ch1: CredRepItemCh1[];
    ch10: CredRepItemCh10[];
    ch15: CredRepItemCh15[];
    ch2: CredRepItemCh2[];
    ch26: CredRepItemCh26[];
    ch4: CredRepItemCh4[];
    chLong: CredRepItemChLong[];
    code: CredRepItemCode[];
    date: CredRepItemDate[];
    segExtended: number | null;
    segmentType: string;
    subsegmentType: string;
    version1: VersionType;
}
