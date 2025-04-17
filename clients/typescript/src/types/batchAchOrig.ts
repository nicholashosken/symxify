import { VersionType } from "./versionType";

export interface BatchAchOrig {
    companyDiscretionaryData: string;
    companyEntryDescription: string;
    companyId: string;
    companyName: string;
    depositSettlementDate: string | null;
    effectiveEntryDate: string | null;
    expiration: string | null;
    groupNumber: string;
    id: string;
    idType: number | null;
    locator: number | null;
    origAmount: number | null;
    paySettlementDate: string | null;
    postMethod: number | null;
    recordChangeDate: string | null;
    standardEntryClassCode: string;
    status: number | null;
    totalOriginationCount: number | null;
    totalPostedCount: number | null;
    version1: VersionType;
}