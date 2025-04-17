import { VersionType } from "./versionType";
export interface BatchAchOrigFields {
    companyDiscretionaryData: boolean | null;
    companyEntryDescription: boolean | null;
    companyId: boolean | null;
    companyName: boolean | null;
    depositSettlementDate: boolean | null;
    effectiveEntryDate: boolean | null;
    expiration: boolean | null;
    groupNumber: boolean | null;
    id: boolean | null;
    idType: boolean | null;
    locator: boolean | null;
    origAmount: boolean | null;
    paySettlementDate: boolean | null;
    postMethod: boolean | null;
    recordChangeDate: boolean | null;
    standardEntryClassCode: boolean | null;
    status: boolean | null;
    totalOriginationCount: boolean | null;
    totalPostedCount: boolean | null;
    version1: VersionType;
}
