import { Bureau } from "./bureau";
import { Name } from "./name";
import { Address } from "./address";
import { Experian } from "./experian";
import { ChexSystems } from "./chexSystems";
import { VersionType } from "./versionType";
import { CreditReportBaseRequest } from "./creditReportBaseRequest";
export interface OrderReportRequest extends CreditReportBaseRequest {
    bureau: Bureau | null;
    accountNumber: string;
    ssn: string;
    name: Name;
    address: Address;
    experian: Experian;
    chexSystems: ChexSystems;
    version1: VersionType;
}
