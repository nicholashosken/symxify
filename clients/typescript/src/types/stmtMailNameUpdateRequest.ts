import { StmtMailNameFields_2 } from "./stmtMailNameFields_2";

export interface StmtMailNameUpdateRequest {
    stmtMailNameStatementMailCodeValue: number;
    stmtMailNameStatementMailCodeValueSpecified: boolean;
    stmtMailNameStatementMailCode: number | null;
    stmtMailNameFields: StmtMailNameFields_2;
}