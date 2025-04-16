import { AccountNumberCredentials } from "./accountNumberCredentials";
import { HomeBankingCredentials } from "./homeBankingCredentials";
import { CardCredentials } from "./cardCredentials";
import { MicrCredentials } from "./micrCredentials";
import { LookupCredentials } from "./lookupCredentials";
import { UserNumberCredentials } from "./userNumberCredentials";
import { AdministrativeCredentials } from "./administrativeCredentials";
import { TokenCredentials } from "./tokenCredentials";
export interface CredentialsChoice {
    accountNumberCredentials: AccountNumberCredentials;
    homeBankingCredentials: HomeBankingCredentials;
    cardCredentials: CardCredentials;
    micrCredentials: MicrCredentials;
    lookupCredentials: LookupCredentials;
    userNumberCredentials: UserNumberCredentials;
    administrativeCredentials: AdministrativeCredentials;
    tokenCredentials: TokenCredentials;
    processorUserValue: number;
    processorUserValueSpecified: boolean;
    processorUser: number | null;
}
