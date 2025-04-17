import { VersionType } from "./versionType";

export interface CollateralDocument_2 {
    accountNumber: string;
    branch: number | null;
    description: string;
    documentDate: string | null;
    excpDays: number | null;
    excpNoticeCount: number | null;
    excpNoticeCountCpWork: number | null;
    excpNoticeDate: string | null;
    excpNoticeOption: number | null;
    expireDate: string | null;
    lastFmDate: string | null;
    location: string;
    locator: number | null;
    number: string;
    officerCode: number | null;
    receivedDate: string | null;
    recordChangeDate: string | null;
    slId: string;
    slIdType: number | null;
    status: number | null;
    statusDate: string | null;
    type: number | null;
    userChar1: string;
    userChar2: string;
    userChar3: string;
    userChar4: string;
    userChar5: string;
    userChar6: string;
    version1: VersionType;
}