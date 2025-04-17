import { VersionType } from "./versionType";

export interface CredRepItemFields {
    amount: number[];
    ch1: number[];
    ch10: number[];
    ch15: number[];
    ch2: number[];
    ch26: number[];
    ch4: number[];
    chLong: number[];
    code: number[];
    date: number[];
    segExtended: boolean | null;
    segmentType: boolean | null;
    subsegmentType: boolean | null;
    version1: VersionType;
}