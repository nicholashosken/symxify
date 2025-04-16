import { AccountDefaultFields_2 } from "./accountDefaultFields_2";

export interface AccountDefaultUpdateRequest {
    accountDefaultAcctTypeValue: number;
    accountDefaultAcctTypeValueSpecified: boolean;
    accountDefaultAcctType: number | null;
    accountDefaultFields: AccountDefaultFields_2;
}