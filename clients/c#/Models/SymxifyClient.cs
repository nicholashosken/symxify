public partial class SymxifyClient
{
    private readonly SymxifyClient _client;

    public SymxifyClient(Symxifylient client)
    {
        _client = client;
    }

public Task<ExcpItemSelectFieldsResponse> GetExcpItemSelectFields(ExcpItemSelectFieldsRequest payload) =>
    _client.RequestAsync<ExcpItemSelectFieldsRequest, ExcpItemSelectFieldsResponse>("getExcpItemSelectFields", payload, "exceptionitem");


public Task<ExcpItemSelectFieldsFilterChildrenResponse> GetExcpItemSelectFieldsFilterChildren(ExcpItemSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<ExcpItemSelectFieldsFilterChildrenRequest, ExcpItemSelectFieldsFilterChildrenResponse>("getExcpItemSelectFieldsFilterChildren", payload, "exceptionitem");


public Task<ExcpAddInfoSelectFieldsResponse> GetExcpAddInfoSelectFields(ExcpAddInfoSelectFieldsRequest payload) =>
    _client.RequestAsync<ExcpAddInfoSelectFieldsRequest, ExcpAddInfoSelectFieldsResponse>("getExcpAddInfoSelectFields", payload, "exceptionitem");


public Task<ExcpAddInfoPagedListSelectFieldsResponse> GetExcpAddInfoPagedListSelectFields(ExcpAddInfoPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ExcpAddInfoPagedListSelectFieldsRequest, ExcpAddInfoPagedListSelectFieldsResponse>("getExcpAddInfoPagedListSelectFields", payload, "exceptionitem");


public Task<ExcpAddInfoSearchPagedSelectFieldsResponse> SearchExcpAddInfoPagedSelectFields(ExcpAddInfoSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ExcpAddInfoSearchPagedSelectFieldsRequest, ExcpAddInfoSearchPagedSelectFieldsResponse>("searchExcpAddInfoPagedSelectFields", payload, "exceptionitem");


public Task<ExcpAddendaSelectFieldsResponse> GetExcpAddendaSelectFields(ExcpAddendaSelectFieldsRequest payload) =>
    _client.RequestAsync<ExcpAddendaSelectFieldsRequest, ExcpAddendaSelectFieldsResponse>("getExcpAddendaSelectFields", payload, "exceptionitem");


public Task<ExcpAddendaPagedListSelectFieldsResponse> GetExcpAddendaPagedListSelectFields(ExcpAddendaPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ExcpAddendaPagedListSelectFieldsRequest, ExcpAddendaPagedListSelectFieldsResponse>("getExcpAddendaPagedListSelectFields", payload, "exceptionitem");


public Task<ExcpAddendaSearchPagedSelectFieldsResponse> SearchExcpAddendaPagedSelectFields(ExcpAddendaSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ExcpAddendaSearchPagedSelectFieldsRequest, ExcpAddendaSearchPagedSelectFieldsResponse>("searchExcpAddendaPagedSelectFields", payload, "exceptionitem");


public Task<CtrSelectFieldsResponse> GetCtrSelectFields(CtrSelectFieldsRequest payload) =>
    _client.RequestAsync<CtrSelectFieldsRequest, CtrSelectFieldsResponse>("getCtrSelectFields", payload, "finrep");


public Task<CtrSelectFieldsFilterChildrenResponse> GetCtrSelectFieldsFilterChildren(CtrSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<CtrSelectFieldsFilterChildrenRequest, CtrSelectFieldsFilterChildrenResponse>("getCtrSelectFieldsFilterChildren", payload, "finrep");


public Task<CtrAccountSelectFieldsResponse> GetCtrAccountSelectFields(CtrAccountSelectFieldsRequest payload) =>
    _client.RequestAsync<CtrAccountSelectFieldsRequest, CtrAccountSelectFieldsResponse>("getCtrAccountSelectFields", payload, "finrep");


public Task<CtrAccountPagedListSelectFieldsResponse> GetCtrAccountPagedListSelectFields(CtrAccountPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CtrAccountPagedListSelectFieldsRequest, CtrAccountPagedListSelectFieldsResponse>("getCtrAccountPagedListSelectFields", payload, "finrep");


public Task<CtrAccountSearchPagedSelectFieldsResponse> SearchCtrAccountPagedSelectFields(CtrAccountSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CtrAccountSearchPagedSelectFieldsRequest, CtrAccountSearchPagedSelectFieldsResponse>("searchCtrAccountPagedSelectFields", payload, "finrep");


public Task<CtrBranchSelectFieldsResponse> GetCtrBranchSelectFields(CtrBranchSelectFieldsRequest payload) =>
    _client.RequestAsync<CtrBranchSelectFieldsRequest, CtrBranchSelectFieldsResponse>("getCtrBranchSelectFields", payload, "finrep");


public Task<CtrBranchPagedListSelectFieldsResponse> GetCtrBranchPagedListSelectFields(CtrBranchPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CtrBranchPagedListSelectFieldsRequest, CtrBranchPagedListSelectFieldsResponse>("getCtrBranchPagedListSelectFields", payload, "finrep");


public Task<CtrBranchSearchPagedSelectFieldsResponse> SearchCtrBranchPagedSelectFields(CtrBranchSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CtrBranchSearchPagedSelectFieldsRequest, CtrBranchSearchPagedSelectFieldsResponse>("searchCtrBranchPagedSelectFields", payload, "finrep");


public Task<CtrFmHistoryPagedListSelectFieldsResponse> GetCtrFmHistoryPagedListSelectFields(CtrFmHistoryPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CtrFmHistoryPagedListSelectFieldsRequest, CtrFmHistoryPagedListSelectFieldsResponse>("getCtrFmHistoryPagedListSelectFields", payload, "finrep");


public Task<CtrFmHistorySearchPagedSelectFieldsResponse> SearchCtrFmHistoryPagedSelectFields(CtrFmHistorySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CtrFmHistorySearchPagedSelectFieldsRequest, CtrFmHistorySearchPagedSelectFieldsResponse>("searchCtrFmHistoryPagedSelectFields", payload, "finrep");


public Task<CtrForeignSelectFieldsResponse> GetCtrForeignSelectFields(CtrForeignSelectFieldsRequest payload) =>
    _client.RequestAsync<CtrForeignSelectFieldsRequest, CtrForeignSelectFieldsResponse>("getCtrForeignSelectFields", payload, "finrep");


public Task<CtrForeignPagedListSelectFieldsResponse> GetCtrForeignPagedListSelectFields(CtrForeignPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CtrForeignPagedListSelectFieldsRequest, CtrForeignPagedListSelectFieldsResponse>("getCtrForeignPagedListSelectFields", payload, "finrep");


public Task<CtrForeignSearchPagedSelectFieldsResponse> SearchCtrForeignPagedSelectFields(CtrForeignSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CtrForeignSearchPagedSelectFieldsRequest, CtrForeignSearchPagedSelectFieldsResponse>("searchCtrForeignPagedSelectFields", payload, "finrep");


public Task<CtrNoteSelectFieldsResponse> GetCtrNoteSelectFields(CtrNoteSelectFieldsRequest payload) =>
    _client.RequestAsync<CtrNoteSelectFieldsRequest, CtrNoteSelectFieldsResponse>("getCtrNoteSelectFields", payload, "finrep");


public Task<CtrNotePagedListSelectFieldsResponse> GetCtrNotePagedListSelectFields(CtrNotePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CtrNotePagedListSelectFieldsRequest, CtrNotePagedListSelectFieldsResponse>("getCtrNotePagedListSelectFields", payload, "finrep");


public Task<CtrNoteSearchPagedSelectFieldsResponse> SearchCtrNotePagedSelectFields(CtrNoteSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CtrNoteSearchPagedSelectFieldsRequest, CtrNoteSearchPagedSelectFieldsResponse>("searchCtrNotePagedSelectFields", payload, "finrep");


public Task<CtrPersonSelectFieldsResponse> GetCtrPersonSelectFields(CtrPersonSelectFieldsRequest payload) =>
    _client.RequestAsync<CtrPersonSelectFieldsRequest, CtrPersonSelectFieldsResponse>("getCtrPersonSelectFields", payload, "finrep");


public Task<CtrPersonSelectFieldsFilterChildrenResponse> GetCtrPersonSelectFieldsFilterChildren(CtrPersonSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<CtrPersonSelectFieldsFilterChildrenRequest, CtrPersonSelectFieldsFilterChildrenResponse>("getCtrPersonSelectFieldsFilterChildren", payload, "finrep");


public Task<CtrPersonPagedListSelectFieldsResponse> GetCtrPersonPagedListSelectFields(CtrPersonPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CtrPersonPagedListSelectFieldsRequest, CtrPersonPagedListSelectFieldsResponse>("getCtrPersonPagedListSelectFields", payload, "finrep");


public Task<CtrPersonSearchPagedSelectFieldsResponse> SearchCtrPersonPagedSelectFields(CtrPersonSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CtrPersonSearchPagedSelectFieldsRequest, CtrPersonSearchPagedSelectFieldsResponse>("searchCtrPersonPagedSelectFields", payload, "finrep");


public Task<CtrPersonCtrTranInfoSelectFieldsResponse> GetCtrPersonCtrTranInfoSelectFields(CtrPersonCtrTranInfoSelectFieldsRequest payload) =>
    _client.RequestAsync<CtrPersonCtrTranInfoSelectFieldsRequest, CtrPersonCtrTranInfoSelectFieldsResponse>("getCtrPersonCtrTranInfoSelectFields", payload, "finrep");


public Task<CtrPersonCtrTranInfoPagedListSelectFieldsResponse> GetCtrPersonCtrTranInfoPagedListSelectFields(CtrPersonCtrTranInfoPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CtrPersonCtrTranInfoPagedListSelectFieldsRequest, CtrPersonCtrTranInfoPagedListSelectFieldsResponse>("getCtrPersonCtrTranInfoPagedListSelectFields", payload, "finrep");


public Task<CtrPersonCtrTranInfoSearchPagedSelectFieldsResponse> SearchCtrPersonCtrTranInfoPagedSelectFields(CtrPersonCtrTranInfoSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CtrPersonCtrTranInfoSearchPagedSelectFieldsRequest, CtrPersonCtrTranInfoSearchPagedSelectFieldsResponse>("searchCtrPersonCtrTranInfoPagedSelectFields", payload, "finrep");


public Task<CtrUpdateByIDResponse> UpdateCtrByID(UpdateCtrByIDRequest payload) =>
    _client.RequestAsync<UpdateCtrByIDRequest, CtrUpdateByIDResponse>("updateCtrByID", payload, "finrep");


public Task<CtrAccountUpdateByIDResponse> UpdateCtrAccountByID(UpdateCtrAccountByIDRequest payload) =>
    _client.RequestAsync<UpdateCtrAccountByIDRequest, CtrAccountUpdateByIDResponse>("updateCtrAccountByID", payload, "finrep");


public Task<CtrBranchUpdateByIDResponse> UpdateCtrBranchByID(UpdateCtrBranchByIDRequest payload) =>
    _client.RequestAsync<UpdateCtrBranchByIDRequest, CtrBranchUpdateByIDResponse>("updateCtrBranchByID", payload, "finrep");


public Task<CtrForeignUpdateByIDResponse> UpdateCtrForeignByID(UpdateCtrForeignByIDRequest payload) =>
    _client.RequestAsync<UpdateCtrForeignByIDRequest, CtrForeignUpdateByIDResponse>("updateCtrForeignByID", payload, "finrep");


public Task<CtrNoteUpdateByIDResponse> UpdateCtrNoteByID(UpdateCtrNoteByIDRequest payload) =>
    _client.RequestAsync<UpdateCtrNoteByIDRequest, CtrNoteUpdateByIDResponse>("updateCtrNoteByID", payload, "finrep");


public Task<CtrPersonUpdateByIDResponse> UpdateCtrPersonByID(UpdateCtrPersonByIDRequest payload) =>
    _client.RequestAsync<UpdateCtrPersonByIDRequest, CtrPersonUpdateByIDResponse>("updateCtrPersonByID", payload, "finrep");


public Task<CtrPersonCtrTranInfoUpdateByIDResponse> UpdateCtrPersonCtrTranInfoByID(UpdateCtrPersonCtrTranInfoByIDRequest payload) =>
    _client.RequestAsync<UpdateCtrPersonCtrTranInfoByIDRequest, CtrPersonCtrTranInfoUpdateByIDResponse>("updateCtrPersonCtrTranInfoByID", payload, "finrep");


public Task<CtrBranchCreateResponse> CreateCtrBranch(CreateCtrBranchRequest payload) =>
    _client.RequestAsync<CreateCtrBranchRequest, CtrBranchCreateResponse>("createCtrBranch", payload, "finrep");


public Task<CtrBranchDeleteResponse> DeleteCtrBranch(DeleteCtrBranchRequest payload) =>
    _client.RequestAsync<DeleteCtrBranchRequest, CtrBranchDeleteResponse>("deleteCtrBranch", payload, "finrep");


public Task<CalculatePaymentAmountResponse> CalculatePaymentAmount(CalculatePaymentAmountRequest payload) =>
    _client.RequestAsync<CalculatePaymentAmountRequest, CalculatePaymentAmountResponse>("calculatePaymentAmount", payload, "projection");


public Task<CalculateLoanAmountResponse> CalculateLoanAmount(CalculateLoanAmountRequest payload) =>
    _client.RequestAsync<CalculateLoanAmountRequest, CalculateLoanAmountResponse>("calculateLoanAmount", payload, "projection");


public Task<CalculateLoanTermResponse> CalculateLoanTerm(CalculateLoanTermRequest payload) =>
    _client.RequestAsync<CalculateLoanTermRequest, CalculateLoanTermResponse>("calculateLoanTerm", payload, "projection");


public Task<PowerOnExecutionReturnArrayResponse> ExecutePowerOnReturnArray(PowerOnExecutionRequest payload) =>
    _client.RequestAsync<PowerOnExecutionRequest, PowerOnExecutionReturnArrayResponse>("executePowerOnReturnArray", payload, "poweron");


public Task<PowerOnExecutionResponse> ExecutePowerOn(PowerOnExecutionRequest payload) =>
    _client.RequestAsync<PowerOnExecutionRequest, PowerOnExecutionResponse>("executePowerOn", payload, "poweron");


public Task<MCWPowerOnExecutionResponse> ExecuteMCWPowerOn(MCWPowerOnExecutionRequest payload) =>
    _client.RequestAsync<MCWPowerOnExecutionRequest, MCWPowerOnExecutionResponse>("executeMCWPowerOn", payload, "poweron");


public Task<MCWPowerOnExecutionReturnArrayResponse> ExecuteMCWPowerOnReturnArray(MCWPowerOnExecutionRequest payload) =>
    _client.RequestAsync<MCWPowerOnExecutionRequest, MCWPowerOnExecutionReturnArrayResponse>("executeMCWPowerOnReturnArray", payload, "poweron");


public Task<GetEventSummariesByAccountResponse> GetEventSummariesByAccount(GetEventSummariesByAccountRequest payload) =>
    _client.RequestAsync<GetEventSummariesByAccountRequest, GetEventSummariesByAccountResponse>("getEventSummariesByAccount", payload, "contacteventmgmt");


public Task<LookupByActiveCardResponse> FindByActiveCard(LookupByActiveCardRequest payload) =>
    _client.RequestAsync<LookupByActiveCardRequest, LookupByActiveCardResponse>("findByActiveCard", payload, "findby");


public Task<LookupByAnyCardResponse> FindByAnyCard(LookupByAnyCardRequest payload) =>
    _client.RequestAsync<LookupByAnyCardRequest, LookupByAnyCardResponse>("findByAnyCard", payload, "findby");


public Task<LookupByHomeUserResponse> FindByHomeUser(LookupByHomeUserRequest payload) =>
    _client.RequestAsync<LookupByHomeUserRequest, LookupByHomeUserResponse>("findByHomeUser", payload, "findby");


public Task<LookupByMICRResponse> FindByMICR(LookupByMICRRequest payload) =>
    _client.RequestAsync<LookupByMICRRequest, LookupByMICRResponse>("findByMICR", payload, "findby");


public Task<LookupByLookupResponse> FindByLookup(LookupByLookupRequest payload) =>
    _client.RequestAsync<LookupByLookupRequest, LookupByLookupResponse>("findByLookup", payload, "findby");


public Task<LookupBySSNResponse> FindBySSN(LookupBySSNRequest payload) =>
    _client.RequestAsync<LookupBySSNRequest, LookupBySSNResponse>("findBySSN", payload, "findby");


public Task<LookupByShortNameResponse> FindByShortName(LookupByShortNameRequest payload) =>
    _client.RequestAsync<LookupByShortNameRequest, LookupByShortNameResponse>("findByShortName", payload, "findby");


public Task<ReceivedItemSelectFieldsResponse> GetReceivedItemSelectFields(ReceivedItemSelectFieldsRequest payload) =>
    _client.RequestAsync<ReceivedItemSelectFieldsRequest, ReceivedItemSelectFieldsResponse>("getReceivedItemSelectFields", payload, "receiveditem");


public Task<ReceivedItemUpdateByIDResponse> UpdateReceivedItemByID(UpdateReceivedItemByIDRequest payload) =>
    _client.RequestAsync<UpdateReceivedItemByIDRequest, ReceivedItemUpdateByIDResponse>("updateReceivedItemByID", payload, "receiveditem");


public Task<ReceivedItemCreateResponse> CreateReceivedItem(CreateReceivedItemRequest payload) =>
    _client.RequestAsync<CreateReceivedItemRequest, ReceivedItemCreateResponse>("createReceivedItem", payload, "receiveditem");


public Task<ReceivedItemDeleteResponse> DeleteReceivedItem(DeleteReceivedItemRequest payload) =>
    _client.RequestAsync<DeleteReceivedItemRequest, ReceivedItemDeleteResponse>("deleteReceivedItem", payload, "receiveditem");


public Task<WireSelectFieldsResponse> GetWireSelectFields(WireSelectFieldsRequest payload) =>
    _client.RequestAsync<WireSelectFieldsRequest, WireSelectFieldsResponse>("getWireSelectFields", payload, "wire");


public Task<WireSelectFieldsFilterChildrenResponse> GetWireSelectFieldsFilterChildren(WireSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<WireSelectFieldsFilterChildrenRequest, WireSelectFieldsFilterChildrenResponse>("getWireSelectFieldsFilterChildren", payload, "wire");


public Task<WireBeneficiaryAdvSelectFieldsResponse> GetWireBeneficiaryAdvSelectFields(WireBeneficiaryAdvSelectFieldsRequest payload) =>
    _client.RequestAsync<WireBeneficiaryAdvSelectFieldsRequest, WireBeneficiaryAdvSelectFieldsResponse>("getWireBeneficiaryAdvSelectFields", payload, "wire");


public Task<WireBeneficiaryAdvPagedListSelectFieldsResponse> GetWireBeneficiaryAdvPagedListSelectFields(WireBeneficiaryAdvPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<WireBeneficiaryAdvPagedListSelectFieldsRequest, WireBeneficiaryAdvPagedListSelectFieldsResponse>("getWireBeneficiaryAdvPagedListSelectFields", payload, "wire");


public Task<WireBeneficiaryAdvSearchPagedSelectFieldsResponse> SearchWireBeneficiaryAdvPagedSelectFields(WireBeneficiaryAdvSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<WireBeneficiaryAdvSearchPagedSelectFieldsRequest, WireBeneficiaryAdvSearchPagedSelectFieldsResponse>("searchWireBeneficiaryAdvPagedSelectFields", payload, "wire");


public Task<WireBeneficiaryFiAdvSelectFieldsResponse> GetWireBeneficiaryFiAdvSelectFields(WireBeneficiaryFiAdvSelectFieldsRequest payload) =>
    _client.RequestAsync<WireBeneficiaryFiAdvSelectFieldsRequest, WireBeneficiaryFiAdvSelectFieldsResponse>("getWireBeneficiaryFiAdvSelectFields", payload, "wire");


public Task<WireBeneficiaryFiAdvPagedListSelectFieldsResponse> GetWireBeneficiaryFiAdvPagedListSelectFields(WireBeneficiaryFiAdvPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<WireBeneficiaryFiAdvPagedListSelectFieldsRequest, WireBeneficiaryFiAdvPagedListSelectFieldsResponse>("getWireBeneficiaryFiAdvPagedListSelectFields", payload, "wire");


public Task<WireBeneficiaryFiAdvSearchPagedSelectFieldsResponse> SearchWireBeneficiaryFiAdvPagedSelectFields(WireBeneficiaryFiAdvSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<WireBeneficiaryFiAdvSearchPagedSelectFieldsRequest, WireBeneficiaryFiAdvSearchPagedSelectFieldsResponse>("searchWireBeneficiaryFiAdvPagedSelectFields", payload, "wire");


public Task<WireBeneficiaryFiInfoSelectFieldsResponse> GetWireBeneficiaryFiInfoSelectFields(WireBeneficiaryFiInfoSelectFieldsRequest payload) =>
    _client.RequestAsync<WireBeneficiaryFiInfoSelectFieldsRequest, WireBeneficiaryFiInfoSelectFieldsResponse>("getWireBeneficiaryFiInfoSelectFields", payload, "wire");


public Task<WireBeneficiaryFiInfoPagedListSelectFieldsResponse> GetWireBeneficiaryFiInfoPagedListSelectFields(WireBeneficiaryFiInfoPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<WireBeneficiaryFiInfoPagedListSelectFieldsRequest, WireBeneficiaryFiInfoPagedListSelectFieldsResponse>("getWireBeneficiaryFiInfoPagedListSelectFields", payload, "wire");


public Task<WireBeneficiaryFiInfoSearchPagedSelectFieldsResponse> SearchWireBeneficiaryFiInfoPagedSelectFields(WireBeneficiaryFiInfoSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<WireBeneficiaryFiInfoSearchPagedSelectFieldsRequest, WireBeneficiaryFiInfoSearchPagedSelectFieldsResponse>("searchWireBeneficiaryFiInfoPagedSelectFields", payload, "wire");


public Task<WireBeneficiaryInfoSelectFieldsResponse> GetWireBeneficiaryInfoSelectFields(WireBeneficiaryInfoSelectFieldsRequest payload) =>
    _client.RequestAsync<WireBeneficiaryInfoSelectFieldsRequest, WireBeneficiaryInfoSelectFieldsResponse>("getWireBeneficiaryInfoSelectFields", payload, "wire");


public Task<WireBeneficiaryInfoPagedListSelectFieldsResponse> GetWireBeneficiaryInfoPagedListSelectFields(WireBeneficiaryInfoPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<WireBeneficiaryInfoPagedListSelectFieldsRequest, WireBeneficiaryInfoPagedListSelectFieldsResponse>("getWireBeneficiaryInfoPagedListSelectFields", payload, "wire");


public Task<WireBeneficiaryInfoSearchPagedSelectFieldsResponse> SearchWireBeneficiaryInfoPagedSelectFields(WireBeneficiaryInfoSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<WireBeneficiaryInfoSearchPagedSelectFieldsRequest, WireBeneficiaryInfoSearchPagedSelectFieldsResponse>("searchWireBeneficiaryInfoPagedSelectFields", payload, "wire");


public Task<WireDrawdownDebitAcctAdvSelectFieldsResponse> GetWireDrawdownDebitAcctAdvSelectFields(WireDrawdownDebitAcctAdvSelectFieldsRequest payload) =>
    _client.RequestAsync<WireDrawdownDebitAcctAdvSelectFieldsRequest, WireDrawdownDebitAcctAdvSelectFieldsResponse>("getWireDrawdownDebitAcctAdvSelectFields", payload, "wire");


public Task<WireDrawdownDebitAcctAdvPagedListSelectFieldsResponse> GetWireDrawdownDebitAcctAdvPagedListSelectFields(WireDrawdownDebitAcctAdvPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<WireDrawdownDebitAcctAdvPagedListSelectFieldsRequest, WireDrawdownDebitAcctAdvPagedListSelectFieldsResponse>("getWireDrawdownDebitAcctAdvPagedListSelectFields", payload, "wire");


public Task<WireDrawdownDebitAcctAdvSearchPagedSelectFieldsResponse> SearchWireDrawdownDebitAcctAdvPagedSelectFields(WireDrawdownDebitAcctAdvSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<WireDrawdownDebitAcctAdvSearchPagedSelectFieldsRequest, WireDrawdownDebitAcctAdvSearchPagedSelectFieldsResponse>("searchWireDrawdownDebitAcctAdvPagedSelectFields", payload, "wire");


public Task<WireFiToFiInfoSelectFieldsResponse> GetWireFiToFiInfoSelectFields(WireFiToFiInfoSelectFieldsRequest payload) =>
    _client.RequestAsync<WireFiToFiInfoSelectFieldsRequest, WireFiToFiInfoSelectFieldsResponse>("getWireFiToFiInfoSelectFields", payload, "wire");


public Task<WireFiToFiInfoPagedListSelectFieldsResponse> GetWireFiToFiInfoPagedListSelectFields(WireFiToFiInfoPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<WireFiToFiInfoPagedListSelectFieldsRequest, WireFiToFiInfoPagedListSelectFieldsResponse>("getWireFiToFiInfoPagedListSelectFields", payload, "wire");


public Task<WireFiToFiInfoSearchPagedSelectFieldsResponse> SearchWireFiToFiInfoPagedSelectFields(WireFiToFiInfoSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<WireFiToFiInfoSearchPagedSelectFieldsRequest, WireFiToFiInfoSearchPagedSelectFieldsResponse>("searchWireFiToFiInfoPagedSelectFields", payload, "wire");


public Task<WireFmHistoryPagedListSelectFieldsResponse> GetWireFmHistoryPagedListSelectFields(WireFmHistoryPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<WireFmHistoryPagedListSelectFieldsRequest, WireFmHistoryPagedListSelectFieldsResponse>("getWireFmHistoryPagedListSelectFields", payload, "wire");


public Task<WireFmHistorySearchPagedSelectFieldsResponse> SearchWireFmHistoryPagedSelectFields(WireFmHistorySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<WireFmHistorySearchPagedSelectFieldsRequest, WireFmHistorySearchPagedSelectFieldsResponse>("searchWireFmHistoryPagedSelectFields", payload, "wire");


public Task<WireIntermedFiAdvSelectFieldsResponse> GetWireIntermedFiAdvSelectFields(WireIntermedFiAdvSelectFieldsRequest payload) =>
    _client.RequestAsync<WireIntermedFiAdvSelectFieldsRequest, WireIntermedFiAdvSelectFieldsResponse>("getWireIntermedFiAdvSelectFields", payload, "wire");


public Task<WireIntermedFiAdvPagedListSelectFieldsResponse> GetWireIntermedFiAdvPagedListSelectFields(WireIntermedFiAdvPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<WireIntermedFiAdvPagedListSelectFieldsRequest, WireIntermedFiAdvPagedListSelectFieldsResponse>("getWireIntermedFiAdvPagedListSelectFields", payload, "wire");


public Task<WireIntermedFiAdvSearchPagedSelectFieldsResponse> SearchWireIntermedFiAdvPagedSelectFields(WireIntermedFiAdvSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<WireIntermedFiAdvSearchPagedSelectFieldsRequest, WireIntermedFiAdvSearchPagedSelectFieldsResponse>("searchWireIntermedFiAdvPagedSelectFields", payload, "wire");


public Task<WireIntermedFiInfoSelectFieldsResponse> GetWireIntermedFiInfoSelectFields(WireIntermedFiInfoSelectFieldsRequest payload) =>
    _client.RequestAsync<WireIntermedFiInfoSelectFieldsRequest, WireIntermedFiInfoSelectFieldsResponse>("getWireIntermedFiInfoSelectFields", payload, "wire");


public Task<WireIntermedFiInfoPagedListSelectFieldsResponse> GetWireIntermedFiInfoPagedListSelectFields(WireIntermedFiInfoPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<WireIntermedFiInfoPagedListSelectFieldsRequest, WireIntermedFiInfoPagedListSelectFieldsResponse>("getWireIntermedFiInfoPagedListSelectFields", payload, "wire");


public Task<WireIntermedFiInfoSearchPagedSelectFieldsResponse> SearchWireIntermedFiInfoPagedSelectFields(WireIntermedFiInfoSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<WireIntermedFiInfoSearchPagedSelectFieldsRequest, WireIntermedFiInfoSearchPagedSelectFieldsResponse>("searchWireIntermedFiInfoPagedSelectFields", payload, "wire");


public Task<WireOfacDetailsSelectFieldsResponse> GetWireOfacDetailsSelectFields(WireOfacDetailsSelectFieldsRequest payload) =>
    _client.RequestAsync<WireOfacDetailsSelectFieldsRequest, WireOfacDetailsSelectFieldsResponse>("getWireOfacDetailsSelectFields", payload, "wire");


public Task<WireOfacDetailsPagedListSelectFieldsResponse> GetWireOfacDetailsPagedListSelectFields(WireOfacDetailsPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<WireOfacDetailsPagedListSelectFieldsRequest, WireOfacDetailsPagedListSelectFieldsResponse>("getWireOfacDetailsPagedListSelectFields", payload, "wire");


public Task<WireOfacDetailsSearchPagedSelectFieldsResponse> SearchWireOfacDetailsPagedSelectFields(WireOfacDetailsSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<WireOfacDetailsSearchPagedSelectFieldsRequest, WireOfacDetailsSearchPagedSelectFieldsResponse>("searchWireOfacDetailsPagedSelectFields", payload, "wire");


public Task<WireReceiverFiInfoSelectFieldsResponse> GetWireReceiverFiInfoSelectFields(WireReceiverFiInfoSelectFieldsRequest payload) =>
    _client.RequestAsync<WireReceiverFiInfoSelectFieldsRequest, WireReceiverFiInfoSelectFieldsResponse>("getWireReceiverFiInfoSelectFields", payload, "wire");


public Task<WireReceiverFiInfoPagedListSelectFieldsResponse> GetWireReceiverFiInfoPagedListSelectFields(WireReceiverFiInfoPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<WireReceiverFiInfoPagedListSelectFieldsRequest, WireReceiverFiInfoPagedListSelectFieldsResponse>("getWireReceiverFiInfoPagedListSelectFields", payload, "wire");


public Task<WireReceiverFiInfoSearchPagedSelectFieldsResponse> SearchWireReceiverFiInfoPagedSelectFields(WireReceiverFiInfoSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<WireReceiverFiInfoSearchPagedSelectFieldsRequest, WireReceiverFiInfoSearchPagedSelectFieldsResponse>("searchWireReceiverFiInfoPagedSelectFields", payload, "wire");


public Task<WireServiceMessageSelectFieldsResponse> GetWireServiceMessageSelectFields(WireServiceMessageSelectFieldsRequest payload) =>
    _client.RequestAsync<WireServiceMessageSelectFieldsRequest, WireServiceMessageSelectFieldsResponse>("getWireServiceMessageSelectFields", payload, "wire");


public Task<WireServiceMessagePagedListSelectFieldsResponse> GetWireServiceMessagePagedListSelectFields(WireServiceMessagePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<WireServiceMessagePagedListSelectFieldsRequest, WireServiceMessagePagedListSelectFieldsResponse>("getWireServiceMessagePagedListSelectFields", payload, "wire");


public Task<WireServiceMessageSearchPagedSelectFieldsResponse> SearchWireServiceMessagePagedSelectFields(WireServiceMessageSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<WireServiceMessageSearchPagedSelectFieldsRequest, WireServiceMessageSearchPagedSelectFieldsResponse>("searchWireServiceMessagePagedSelectFields", payload, "wire");


public Task<WireUscAuditInfoSelectFieldsResponse> GetWireUscAuditInfoSelectFields(WireUscAuditInfoSelectFieldsRequest payload) =>
    _client.RequestAsync<WireUscAuditInfoSelectFieldsRequest, WireUscAuditInfoSelectFieldsResponse>("getWireUscAuditInfoSelectFields", payload, "wire");


public Task<WireUscAuditInfoPagedListSelectFieldsResponse> GetWireUscAuditInfoPagedListSelectFields(WireUscAuditInfoPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<WireUscAuditInfoPagedListSelectFieldsRequest, WireUscAuditInfoPagedListSelectFieldsResponse>("getWireUscAuditInfoPagedListSelectFields", payload, "wire");


public Task<WireUscAuditInfoSearchPagedSelectFieldsResponse> SearchWireUscAuditInfoPagedSelectFields(WireUscAuditInfoSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<WireUscAuditInfoSearchPagedSelectFieldsRequest, WireUscAuditInfoSearchPagedSelectFieldsResponse>("searchWireUscAuditInfoPagedSelectFields", payload, "wire");


public Task<WireUpdateByIDResponse> UpdateWireByID(UpdateWireByIDRequest payload) =>
    _client.RequestAsync<UpdateWireByIDRequest, WireUpdateByIDResponse>("updateWireByID", payload, "wire");


public Task<WireBeneficiaryAdvUpdateByIDResponse> UpdateWireBeneficiaryAdvByID(UpdateWireBeneficiaryAdvByIDRequest payload) =>
    _client.RequestAsync<UpdateWireBeneficiaryAdvByIDRequest, WireBeneficiaryAdvUpdateByIDResponse>("updateWireBeneficiaryAdvByID", payload, "wire");


public Task<WireBeneficiaryFiAdvUpdateByIDResponse> UpdateWireBeneficiaryFiAdvByID(UpdateWireBeneficiaryFiAdvByIDRequest payload) =>
    _client.RequestAsync<UpdateWireBeneficiaryFiAdvByIDRequest, WireBeneficiaryFiAdvUpdateByIDResponse>("updateWireBeneficiaryFiAdvByID", payload, "wire");


public Task<WireBeneficiaryFiInfoUpdateByIDResponse> UpdateWireBeneficiaryFiInfoByID(UpdateWireBeneficiaryFiInfoByIDRequest payload) =>
    _client.RequestAsync<UpdateWireBeneficiaryFiInfoByIDRequest, WireBeneficiaryFiInfoUpdateByIDResponse>("updateWireBeneficiaryFiInfoByID", payload, "wire");


public Task<WireBeneficiaryInfoUpdateByIDResponse> UpdateWireBeneficiaryInfoByID(UpdateWireBeneficiaryInfoByIDRequest payload) =>
    _client.RequestAsync<UpdateWireBeneficiaryInfoByIDRequest, WireBeneficiaryInfoUpdateByIDResponse>("updateWireBeneficiaryInfoByID", payload, "wire");


public Task<WireDrawdownDebitAcctAdvUpdateByIDResponse> UpdateWireDrawdownDebitAcctAdvByID(UpdateWireDrawdownDebitAcctAdvByIDRequest payload) =>
    _client.RequestAsync<UpdateWireDrawdownDebitAcctAdvByIDRequest, WireDrawdownDebitAcctAdvUpdateByIDResponse>("updateWireDrawdownDebitAcctAdvByID", payload, "wire");


public Task<WireFiToFiInfoUpdateByIDResponse> UpdateWireFiToFiInfoByID(UpdateWireFiToFiInfoByIDRequest payload) =>
    _client.RequestAsync<UpdateWireFiToFiInfoByIDRequest, WireFiToFiInfoUpdateByIDResponse>("updateWireFiToFiInfoByID", payload, "wire");


public Task<WireIntermedFiAdvUpdateByIDResponse> UpdateWireIntermedFiAdvByID(UpdateWireIntermedFiAdvByIDRequest payload) =>
    _client.RequestAsync<UpdateWireIntermedFiAdvByIDRequest, WireIntermedFiAdvUpdateByIDResponse>("updateWireIntermedFiAdvByID", payload, "wire");


public Task<WireIntermedFiInfoUpdateByIDResponse> UpdateWireIntermedFiInfoByID(UpdateWireIntermedFiInfoByIDRequest payload) =>
    _client.RequestAsync<UpdateWireIntermedFiInfoByIDRequest, WireIntermedFiInfoUpdateByIDResponse>("updateWireIntermedFiInfoByID", payload, "wire");


public Task<WireOfacDetailsUpdateByIDResponse> UpdateWireOfacDetailsByID(UpdateWireOfacDetailsByIDRequest payload) =>
    _client.RequestAsync<UpdateWireOfacDetailsByIDRequest, WireOfacDetailsUpdateByIDResponse>("updateWireOfacDetailsByID", payload, "wire");


public Task<WireReceiverFiInfoUpdateByIDResponse> UpdateWireReceiverFiInfoByID(UpdateWireReceiverFiInfoByIDRequest payload) =>
    _client.RequestAsync<UpdateWireReceiverFiInfoByIDRequest, WireReceiverFiInfoUpdateByIDResponse>("updateWireReceiverFiInfoByID", payload, "wire");


public Task<WireServiceMessageUpdateByIDResponse> UpdateWireServiceMessageByID(UpdateWireServiceMessageByIDRequest payload) =>
    _client.RequestAsync<UpdateWireServiceMessageByIDRequest, WireServiceMessageUpdateByIDResponse>("updateWireServiceMessageByID", payload, "wire");


public Task<WireUscAuditInfoUpdateByIDResponse> UpdateWireUscAuditInfoByID(UpdateWireUscAuditInfoByIDRequest payload) =>
    _client.RequestAsync<UpdateWireUscAuditInfoByIDRequest, WireUscAuditInfoUpdateByIDResponse>("updateWireUscAuditInfoByID", payload, "wire");


public Task<WireCreateResponse> CreateWire(CreateWireRequest payload) =>
    _client.RequestAsync<CreateWireRequest, WireCreateResponse>("createWire", payload, "wire");


public Task<CheckVerificationResponse> VerifyCheck(CheckVerificationRequest payload) =>
    _client.RequestAsync<CheckVerificationRequest, CheckVerificationResponse>("verifyCheck", payload, "checkverification");


public Task<MemberRecSelectFieldsResponse> GetMemberRecSelectFields(MemberRecSelectFieldsRequest payload) =>
    _client.RequestAsync<MemberRecSelectFieldsRequest, MemberRecSelectFieldsResponse>("getMemberRecSelectFields", payload, "member");


public Task<MemberRecSelectFieldsFilterChildrenResponse> GetMemberRecSelectFieldsFilterChildren(MemberRecSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<MemberRecSelectFieldsFilterChildrenRequest, MemberRecSelectFieldsFilterChildrenResponse>("getMemberRecSelectFieldsFilterChildren", payload, "member");


public Task<MemberRecFmHistoryPagedListSelectFieldsResponse> GetMemberRecFmHistoryPagedListSelectFields(MemberRecFmHistoryPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<MemberRecFmHistoryPagedListSelectFieldsRequest, MemberRecFmHistoryPagedListSelectFieldsResponse>("getMemberRecFmHistoryPagedListSelectFields", payload, "member");


public Task<MemberRecFmHistorySearchPagedSelectFieldsResponse> SearchMemberRecFmHistoryPagedSelectFields(MemberRecFmHistorySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<MemberRecFmHistorySearchPagedSelectFieldsRequest, MemberRecFmHistorySearchPagedSelectFieldsResponse>("searchMemberRecFmHistoryPagedSelectFields", payload, "member");


public Task<MemberRecUpdateByIDResponse> UpdateMemberRecByID(UpdateMemberRecByIDRequest payload) =>
    _client.RequestAsync<UpdateMemberRecByIDRequest, MemberRecUpdateByIDResponse>("updateMemberRecByID", payload, "member");


public Task<MemberRecCreateResponse> CreateMemberRec(CreateMemberRecRequest payload) =>
    _client.RequestAsync<CreateMemberRecRequest, MemberRecCreateResponse>("createMemberRec", payload, "member");


public Task<ListBatchJobsResponse> ListBatchJobs(ListBatchJobsRequest payload) =>
    _client.RequestAsync<ListBatchJobsRequest, ListBatchJobsResponse>("listBatchJobs", payload, "batchjobs");


public Task<ExecuteBatchJobResponse> ExecuteBatchJob(ExecuteBatchJobRequest payload) =>
    _client.RequestAsync<ExecuteBatchJobRequest, ExecuteBatchJobResponse>("executeBatchJob", payload, "batchjobs");


public Task<GetBatchJobStatusResponse> GetBatchJobStatus(GetBatchJobStatusRequest payload) =>
    _client.RequestAsync<GetBatchJobStatusRequest, GetBatchJobStatusResponse>("getBatchJobStatus", payload, "batchjobs");


public Task<CollateralSelectFieldsResponse> GetCollateralSelectFields(CollateralSelectFieldsRequest payload) =>
    _client.RequestAsync<CollateralSelectFieldsRequest, CollateralSelectFieldsResponse>("getCollateralSelectFields", payload, "collateral");


public Task<CollateralSelectFieldsFilterChildrenResponse> GetCollateralSelectFieldsFilterChildren(CollateralSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<CollateralSelectFieldsFilterChildrenRequest, CollateralSelectFieldsFilterChildrenResponse>("getCollateralSelectFieldsFilterChildren", payload, "collateral");


public Task<CollateralCollHoldSelectFieldsResponse> GetCollateralCollHoldSelectFields(CollateralCollHoldSelectFieldsRequest payload) =>
    _client.RequestAsync<CollateralCollHoldSelectFieldsRequest, CollateralCollHoldSelectFieldsResponse>("getCollateralCollHoldSelectFields", payload, "collateral");


public Task<CollateralCollHoldPagedListSelectFieldsResponse> GetCollateralCollHoldPagedListSelectFields(CollateralCollHoldPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CollateralCollHoldPagedListSelectFieldsRequest, CollateralCollHoldPagedListSelectFieldsResponse>("getCollateralCollHoldPagedListSelectFields", payload, "collateral");


public Task<CollateralCollHoldSearchPagedSelectFieldsResponse> SearchCollateralCollHoldPagedSelectFields(CollateralCollHoldSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CollateralCollHoldSearchPagedSelectFieldsRequest, CollateralCollHoldSearchPagedSelectFieldsResponse>("searchCollateralCollHoldPagedSelectFields", payload, "collateral");


public Task<CollateralDocumentSelectFieldsResponse> GetCollateralDocumentSelectFields(CollateralDocumentSelectFieldsRequest payload) =>
    _client.RequestAsync<CollateralDocumentSelectFieldsRequest, CollateralDocumentSelectFieldsResponse>("getCollateralDocumentSelectFields", payload, "collateral");


public Task<CollateralDocumentSelectFieldsFilterChildrenResponse> GetCollateralDocumentSelectFieldsFilterChildren(CollateralDocumentSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<CollateralDocumentSelectFieldsFilterChildrenRequest, CollateralDocumentSelectFieldsFilterChildrenResponse>("getCollateralDocumentSelectFieldsFilterChildren", payload, "collateral");


public Task<CollateralDocumentPagedListSelectFieldsResponse> GetCollateralDocumentPagedListSelectFields(CollateralDocumentPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CollateralDocumentPagedListSelectFieldsRequest, CollateralDocumentPagedListSelectFieldsResponse>("getCollateralDocumentPagedListSelectFields", payload, "collateral");


public Task<CollateralDocumentSearchPagedSelectFieldsResponse> SearchCollateralDocumentPagedSelectFields(CollateralDocumentSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CollateralDocumentSearchPagedSelectFieldsRequest, CollateralDocumentSearchPagedSelectFieldsResponse>("searchCollateralDocumentPagedSelectFields", payload, "collateral");


public Task<CollateralDocumentTrackingSelectFieldsResponse> GetCollateralDocumentTrackingSelectFields(CollateralDocumentTrackingSelectFieldsRequest payload) =>
    _client.RequestAsync<CollateralDocumentTrackingSelectFieldsRequest, CollateralDocumentTrackingSelectFieldsResponse>("getCollateralDocumentTrackingSelectFields", payload, "collateral");


public Task<CollateralDocumentTrackingPagedListSelectFieldsResponse> GetCollateralDocumentTrackingPagedListSelectFields(CollateralDocumentTrackingPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CollateralDocumentTrackingPagedListSelectFieldsRequest, CollateralDocumentTrackingPagedListSelectFieldsResponse>("getCollateralDocumentTrackingPagedListSelectFields", payload, "collateral");


public Task<CollateralDocumentTrackingSearchPagedSelectFieldsResponse> SearchCollateralDocumentTrackingPagedSelectFields(CollateralDocumentTrackingSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CollateralDocumentTrackingSearchPagedSelectFieldsRequest, CollateralDocumentTrackingSearchPagedSelectFieldsResponse>("searchCollateralDocumentTrackingPagedSelectFields", payload, "collateral");


public Task<CollateralFmHistoryPagedListSelectFieldsResponse> GetCollateralFmHistoryPagedListSelectFields(CollateralFmHistoryPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CollateralFmHistoryPagedListSelectFieldsRequest, CollateralFmHistoryPagedListSelectFieldsResponse>("getCollateralFmHistoryPagedListSelectFields", payload, "collateral");


public Task<CollateralFmHistorySearchPagedSelectFieldsResponse> SearchCollateralFmHistoryPagedSelectFields(CollateralFmHistorySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CollateralFmHistorySearchPagedSelectFieldsRequest, CollateralFmHistorySearchPagedSelectFieldsResponse>("searchCollateralFmHistoryPagedSelectFields", payload, "collateral");


public Task<CollateralTrackingSelectFieldsResponse> GetCollateralTrackingSelectFields(CollateralTrackingSelectFieldsRequest payload) =>
    _client.RequestAsync<CollateralTrackingSelectFieldsRequest, CollateralTrackingSelectFieldsResponse>("getCollateralTrackingSelectFields", payload, "collateral");


public Task<CollateralTrackingPagedListSelectFieldsResponse> GetCollateralTrackingPagedListSelectFields(CollateralTrackingPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CollateralTrackingPagedListSelectFieldsRequest, CollateralTrackingPagedListSelectFieldsResponse>("getCollateralTrackingPagedListSelectFields", payload, "collateral");


public Task<CollateralTrackingSearchPagedSelectFieldsResponse> SearchCollateralTrackingPagedSelectFields(CollateralTrackingSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CollateralTrackingSearchPagedSelectFieldsRequest, CollateralTrackingSearchPagedSelectFieldsResponse>("searchCollateralTrackingPagedSelectFields", payload, "collateral");


public Task<CollateralUpdateByIDResponse> UpdateCollateralByID(UpdateCollateralByIDRequest payload) =>
    _client.RequestAsync<UpdateCollateralByIDRequest, CollateralUpdateByIDResponse>("updateCollateralByID", payload, "collateral");


public Task<CollateralCollHoldUpdateByIDResponse> UpdateCollateralCollHoldByID(UpdateCollateralCollHoldByIDRequest payload) =>
    _client.RequestAsync<UpdateCollateralCollHoldByIDRequest, CollateralCollHoldUpdateByIDResponse>("updateCollateralCollHoldByID", payload, "collateral");


public Task<CollateralDocumentUpdateByIDResponse> UpdateCollateralDocumentByID(UpdateCollateralDocumentByIDRequest payload) =>
    _client.RequestAsync<UpdateCollateralDocumentByIDRequest, CollateralDocumentUpdateByIDResponse>("updateCollateralDocumentByID", payload, "collateral");


public Task<CollateralDocumentTrackingUpdateByIDResponse> UpdateCollateralDocumentTrackingByID(UpdateCollateralDocumentTrackingByIDRequest payload) =>
    _client.RequestAsync<UpdateCollateralDocumentTrackingByIDRequest, CollateralDocumentTrackingUpdateByIDResponse>("updateCollateralDocumentTrackingByID", payload, "collateral");


public Task<CollateralTrackingUpdateByIDResponse> UpdateCollateralTrackingByID(UpdateCollateralTrackingByIDRequest payload) =>
    _client.RequestAsync<UpdateCollateralTrackingByIDRequest, CollateralTrackingUpdateByIDResponse>("updateCollateralTrackingByID", payload, "collateral");


public Task<CollateralCreateResponse> CreateCollateral(CreateCollateralRequest payload) =>
    _client.RequestAsync<CreateCollateralRequest, CollateralCreateResponse>("createCollateral", payload, "collateral");


public Task<CollateralCollHoldCreateResponse> CreateCollateralCollHold(CreateCollateralCollHoldRequest payload) =>
    _client.RequestAsync<CreateCollateralCollHoldRequest, CollateralCollHoldCreateResponse>("createCollateralCollHold", payload, "collateral");


public Task<CollateralDocumentCreateResponse> CreateCollateralDocument(CreateCollateralDocumentRequest payload) =>
    _client.RequestAsync<CreateCollateralDocumentRequest, CollateralDocumentCreateResponse>("createCollateralDocument", payload, "collateral");


public Task<CollateralDocumentTrackingCreateResponse> CreateCollateralDocumentTracking(CreateCollateralDocumentTrackingRequest payload) =>
    _client.RequestAsync<CreateCollateralDocumentTrackingRequest, CollateralDocumentTrackingCreateResponse>("createCollateralDocumentTracking", payload, "collateral");


public Task<CollateralTrackingCreateResponse> CreateCollateralTracking(CreateCollateralTrackingRequest payload) =>
    _client.RequestAsync<CreateCollateralTrackingRequest, CollateralTrackingCreateResponse>("createCollateralTracking", payload, "collateral");


public Task<CollateralCollHoldDeleteResponse> DeleteCollateralCollHold(DeleteCollateralCollHoldRequest payload) =>
    _client.RequestAsync<DeleteCollateralCollHoldRequest, CollateralCollHoldDeleteResponse>("deleteCollateralCollHold", payload, "collateral");


public Task<CollateralDocumentDeleteResponse> DeleteCollateralDocument(DeleteCollateralDocumentRequest payload) =>
    _client.RequestAsync<DeleteCollateralDocumentRequest, CollateralDocumentDeleteResponse>("deleteCollateralDocument", payload, "collateral");


public Task<CollateralDocumentTrackingDeleteResponse> DeleteCollateralDocumentTracking(DeleteCollateralDocumentTrackingRequest payload) =>
    _client.RequestAsync<DeleteCollateralDocumentTrackingRequest, CollateralDocumentTrackingDeleteResponse>("deleteCollateralDocumentTracking", payload, "collateral");


public Task<CollateralTrackingDeleteResponse> DeleteCollateralTracking(DeleteCollateralTrackingRequest payload) =>
    _client.RequestAsync<DeleteCollateralTrackingRequest, CollateralTrackingDeleteResponse>("deleteCollateralTracking", payload, "collateral");


public Task<MbrAddressSelectFieldsResponse> GetMbrAddressSelectFields(MbrAddressSelectFieldsRequest payload) =>
    _client.RequestAsync<MbrAddressSelectFieldsRequest, MbrAddressSelectFieldsResponse>("getMbrAddressSelectFields", payload, "mbraddress");


public Task<MbrAddressSelectFieldsFilterChildrenResponse> GetMbrAddressSelectFieldsFilterChildren(MbrAddressSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<MbrAddressSelectFieldsFilterChildrenRequest, MbrAddressSelectFieldsFilterChildrenResponse>("getMbrAddressSelectFieldsFilterChildren", payload, "mbraddress");


public Task<MbrAddressFmHistoryPagedListSelectFieldsResponse> GetMbrAddressFmHistoryPagedListSelectFields(MbrAddressFmHistoryPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<MbrAddressFmHistoryPagedListSelectFieldsRequest, MbrAddressFmHistoryPagedListSelectFieldsResponse>("getMbrAddressFmHistoryPagedListSelectFields", payload, "mbraddress");


public Task<MbrAddressFmHistorySearchPagedSelectFieldsResponse> SearchMbrAddressFmHistoryPagedSelectFields(MbrAddressFmHistorySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<MbrAddressFmHistorySearchPagedSelectFieldsRequest, MbrAddressFmHistorySearchPagedSelectFieldsResponse>("searchMbrAddressFmHistoryPagedSelectFields", payload, "mbraddress");


public Task<MbrAddressUpdateByIDResponse> UpdateMbrAddressByID(UpdateMbrAddressByIDRequest payload) =>
    _client.RequestAsync<UpdateMbrAddressByIDRequest, MbrAddressUpdateByIDResponse>("updateMbrAddressByID", payload, "mbraddress");


public Task<MbrAddressCreateResponse> CreateMbrAddress(CreateMbrAddressRequest payload) =>
    _client.RequestAsync<CreateMbrAddressRequest, MbrAddressCreateResponse>("createMbrAddress", payload, "mbraddress");


public Task<CashLetterSelectFieldsResponse> GetCashLetterSelectFields(CashLetterSelectFieldsRequest payload) =>
    _client.RequestAsync<CashLetterSelectFieldsRequest, CashLetterSelectFieldsResponse>("getCashLetterSelectFields", payload, "cashletter");


public Task<ResetCashValueBalancesResponse> ResetCashValueBalances(ResetCashValueBalancesRequest payload) =>
    _client.RequestAsync<ResetCashValueBalancesRequest, ResetCashValueBalancesResponse>("resetCashValueBalances", payload, "balancing");


public Task<ResetDepositBalancesResponse> ResetDepositBalances(ResetDepositBalancesRequest payload) =>
    _client.RequestAsync<ResetDepositBalancesRequest, ResetDepositBalancesResponse>("resetDepositBalances", payload, "balancing");


public Task<ResetSecondPartyCheckBalancesResponse> ResetSecondPartyCheckBalances(ResetSecondPartyCheckBalancesRequest payload) =>
    _client.RequestAsync<ResetSecondPartyCheckBalancesRequest, ResetSecondPartyCheckBalancesResponse>("resetSecondPartyCheckBalances", payload, "balancing");


public Task<CashValueAdjustResponse> CashValueAdjust(CashValueAdjustRequest payload) =>
    _client.RequestAsync<CashValueAdjustRequest, CashValueAdjustResponse>("cashValueAdjust", payload, "balancing");


public Task<SecondPartyCheckAdjustResponse> SecondPartyCheckAdjust(SecondPartyCheckAdjustRequest payload) =>
    _client.RequestAsync<SecondPartyCheckAdjustRequest, SecondPartyCheckAdjustResponse>("secondPartyCheckAdjust", payload, "balancing");


public Task<CashValueReportResponse> CashValueReport(CashValueReportRequest payload) =>
    _client.RequestAsync<CashValueReportRequest, CashValueReportResponse>("cashValueReport", payload, "balancing");


public Task<VerifyDepositReportResponse> VerifyDepositReport(VerifyDepositReportRequest payload) =>
    _client.RequestAsync<VerifyDepositReportRequest, VerifyDepositReportResponse>("verifyDepositReport", payload, "balancing");


public Task<CheckDisbursedReportResponse> CheckDisbursedReport(CheckDisbursedReportRequest payload) =>
    _client.RequestAsync<CheckDisbursedReportRequest, CheckDisbursedReportResponse>("checkDisbursedReport", payload, "balancing");


public Task<DownloadResponse> DownloadLetterFile(DownloadRequest payload) =>
    _client.RequestAsync<DownloadRequest, DownloadResponse>("downloadLetterFile", payload, "filemanagement");


public Task<UploadResponse> UploadLetterFile(UploadRequest payload) =>
    _client.RequestAsync<UploadRequest, UploadResponse>("uploadLetterFile", payload, "filemanagement");


public Task<DeleteResponse> DeleteLetterFile(DeleteRequest payload) =>
    _client.RequestAsync<DeleteRequest, DeleteResponse>("deleteLetterFile", payload, "filemanagement");


public Task<UploadResponse> UploadDataFile(UploadRequest payload) =>
    _client.RequestAsync<UploadRequest, UploadResponse>("uploadDataFile", payload, "filemanagement");


public Task<DownloadResponse> DownloadDataFile(DownloadRequest payload) =>
    _client.RequestAsync<DownloadRequest, DownloadResponse>("downloadDataFile", payload, "filemanagement");


public Task<DeleteResponse> DeleteDataFile(DeleteRequest payload) =>
    _client.RequestAsync<DeleteRequest, DeleteResponse>("deleteDataFile", payload, "filemanagement");


public Task<CheckSelectFieldsResponse> GetCheckSelectFields(CheckSelectFieldsRequest payload) =>
    _client.RequestAsync<CheckSelectFieldsRequest, CheckSelectFieldsResponse>("getCheckSelectFields", payload, "check");


public Task<CheckSelectFieldsFilterChildrenResponse> GetCheckSelectFieldsFilterChildren(CheckSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<CheckSelectFieldsFilterChildrenRequest, CheckSelectFieldsFilterChildrenResponse>("getCheckSelectFieldsFilterChildren", payload, "check");


public Task<CheckFmHistoryPagedListSelectFieldsResponse> GetCheckFmHistoryPagedListSelectFields(CheckFmHistoryPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CheckFmHistoryPagedListSelectFieldsRequest, CheckFmHistoryPagedListSelectFieldsResponse>("getCheckFmHistoryPagedListSelectFields", payload, "check");


public Task<CheckFmHistorySearchPagedSelectFieldsResponse> SearchCheckFmHistoryPagedSelectFields(CheckFmHistorySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CheckFmHistorySearchPagedSelectFieldsRequest, CheckFmHistorySearchPagedSelectFieldsResponse>("searchCheckFmHistoryPagedSelectFields", payload, "check");


public Task<CheckUpdateByIDResponse> UpdateCheckByID(UpdateCheckByIDRequest payload) =>
    _client.RequestAsync<UpdateCheckByIDRequest, CheckUpdateByIDResponse>("updateCheckByID", payload, "check");


public Task<CheckCreateResponse> CreateCheck(CreateCheckRequest payload) =>
    _client.RequestAsync<CreateCheckRequest, CheckCreateResponse>("createCheck", payload, "check");


public Task<CheckDeleteResponse> DeleteCheck(DeleteCheckRequest payload) =>
    _client.RequestAsync<DeleteCheckRequest, CheckDeleteResponse>("deleteCheck", payload, "check");


public Task<ParameterSelectFieldsResponse> GetParameterSelectFields(ParameterSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterSelectFieldsRequest, ParameterSelectFieldsResponse>("getParameterSelectFields", payload, "parameter");


public Task<ParameterSelectFieldsFilterChildrenResponse> GetParameterSelectFieldsFilterChildren(ParameterSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<ParameterSelectFieldsFilterChildrenRequest, ParameterSelectFieldsFilterChildrenResponse>("getParameterSelectFieldsFilterChildren", payload, "parameter");


public Task<AccountDefaultSelectFieldsResponse> GetAccountDefaultSelectFields(AccountDefaultSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountDefaultSelectFieldsRequest, AccountDefaultSelectFieldsResponse>("getAccountDefaultSelectFields", payload, "parameter");


public Task<AccountDefaultPagedListSelectFieldsResponse> GetAccountDefaultPagedListSelectFields(AccountDefaultPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountDefaultPagedListSelectFieldsRequest, AccountDefaultPagedListSelectFieldsResponse>("getAccountDefaultPagedListSelectFields", payload, "parameter");


public Task<AccountDefaultSearchPagedSelectFieldsResponse> SearchAccountDefaultPagedSelectFields(AccountDefaultSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountDefaultSearchPagedSelectFieldsRequest, AccountDefaultSearchPagedSelectFieldsResponse>("searchAccountDefaultPagedSelectFields", payload, "parameter");


public Task<AccountFieldNameSelectFieldsResponse> GetAccountFieldNameSelectFields(AccountFieldNameSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountFieldNameSelectFieldsRequest, AccountFieldNameSelectFieldsResponse>("getAccountFieldNameSelectFields", payload, "parameter");


public Task<AccountFieldNamePagedListSelectFieldsResponse> GetAccountFieldNamePagedListSelectFields(AccountFieldNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountFieldNamePagedListSelectFieldsRequest, AccountFieldNamePagedListSelectFieldsResponse>("getAccountFieldNamePagedListSelectFields", payload, "parameter");


public Task<AccountFieldNameSearchPagedSelectFieldsResponse> SearchAccountFieldNamePagedSelectFields(AccountFieldNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountFieldNameSearchPagedSelectFieldsRequest, AccountFieldNameSearchPagedSelectFieldsResponse>("searchAccountFieldNamePagedSelectFields", payload, "parameter");


public Task<AcctLimitSelectFieldsResponse> GetAcctLimitSelectFields(AcctLimitSelectFieldsRequest payload) =>
    _client.RequestAsync<AcctLimitSelectFieldsRequest, AcctLimitSelectFieldsResponse>("getAcctLimitSelectFields", payload, "parameter");


public Task<AcctMembGrpDescSelectFieldsResponse> GetAcctMembGrpDescSelectFields(AcctMembGrpDescSelectFieldsRequest payload) =>
    _client.RequestAsync<AcctMembGrpDescSelectFieldsRequest, AcctMembGrpDescSelectFieldsResponse>("getAcctMembGrpDescSelectFields", payload, "parameter");


public Task<AcctMembGrpDescPagedListSelectFieldsResponse> GetAcctMembGrpDescPagedListSelectFields(AcctMembGrpDescPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AcctMembGrpDescPagedListSelectFieldsRequest, AcctMembGrpDescPagedListSelectFieldsResponse>("getAcctMembGrpDescPagedListSelectFields", payload, "parameter");


public Task<AcctMembGrpDescSearchPagedSelectFieldsResponse> SearchAcctMembGrpDescPagedSelectFields(AcctMembGrpDescSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AcctMembGrpDescSearchPagedSelectFieldsRequest, AcctMembGrpDescSearchPagedSelectFieldsResponse>("searchAcctMembGrpDescPagedSelectFields", payload, "parameter");


public Task<AcctRelCodeDescSelectFieldsResponse> GetAcctRelCodeDescSelectFields(AcctRelCodeDescSelectFieldsRequest payload) =>
    _client.RequestAsync<AcctRelCodeDescSelectFieldsRequest, AcctRelCodeDescSelectFieldsResponse>("getAcctRelCodeDescSelectFields", payload, "parameter");


public Task<AcctTrackingTypeSelectFieldsResponse> GetAcctTrackingTypeSelectFields(AcctTrackingTypeSelectFieldsRequest payload) =>
    _client.RequestAsync<AcctTrackingTypeSelectFieldsRequest, AcctTrackingTypeSelectFieldsResponse>("getAcctTrackingTypeSelectFields", payload, "parameter");


public Task<AcctTrackingTypePagedListSelectFieldsResponse> GetAcctTrackingTypePagedListSelectFields(AcctTrackingTypePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AcctTrackingTypePagedListSelectFieldsRequest, AcctTrackingTypePagedListSelectFieldsResponse>("getAcctTrackingTypePagedListSelectFields", payload, "parameter");


public Task<AcctTrackingTypeSearchPagedSelectFieldsResponse> SearchAcctTrackingTypePagedSelectFields(AcctTrackingTypeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AcctTrackingTypeSearchPagedSelectFieldsRequest, AcctTrackingTypeSearchPagedSelectFieldsResponse>("searchAcctTrackingTypePagedSelectFields", payload, "parameter");


public Task<AcctTypeNameSelectFieldsResponse> GetAcctTypeNameSelectFields(AcctTypeNameSelectFieldsRequest payload) =>
    _client.RequestAsync<AcctTypeNameSelectFieldsRequest, AcctTypeNameSelectFieldsResponse>("getAcctTypeNameSelectFields", payload, "parameter");


public Task<AcctTypeNamePagedListSelectFieldsResponse> GetAcctTypeNamePagedListSelectFields(AcctTypeNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AcctTypeNamePagedListSelectFieldsRequest, AcctTypeNamePagedListSelectFieldsResponse>("getAcctTypeNamePagedListSelectFields", payload, "parameter");


public Task<AcctTypeNameSearchPagedSelectFieldsResponse> SearchAcctTypeNamePagedSelectFields(AcctTypeNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AcctTypeNameSearchPagedSelectFieldsRequest, AcctTypeNameSearchPagedSelectFieldsResponse>("searchAcctTypeNamePagedSelectFields", payload, "parameter");


public Task<AcsGlobalSelectFieldsResponse> GetAcsGlobalSelectFields(AcsGlobalSelectFieldsRequest payload) =>
    _client.RequestAsync<AcsGlobalSelectFieldsRequest, AcsGlobalSelectFieldsResponse>("getAcsGlobalSelectFields", payload, "parameter");


public Task<AcsServiceSelectFieldsResponse> GetAcsServiceSelectFields(AcsServiceSelectFieldsRequest payload) =>
    _client.RequestAsync<AcsServiceSelectFieldsRequest, AcsServiceSelectFieldsResponse>("getAcsServiceSelectFields", payload, "parameter");


public Task<AcsServicePagedListSelectFieldsResponse> GetAcsServicePagedListSelectFields(AcsServicePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AcsServicePagedListSelectFieldsRequest, AcsServicePagedListSelectFieldsResponse>("getAcsServicePagedListSelectFields", payload, "parameter");


public Task<AcsServiceSearchPagedSelectFieldsResponse> SearchAcsServicePagedSelectFields(AcsServiceSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AcsServiceSearchPagedSelectFieldsRequest, AcsServiceSearchPagedSelectFieldsResponse>("searchAcsServicePagedSelectFields", payload, "parameter");


public Task<ActivityFmSelectFieldsResponse> GetActivityFmSelectFields(ActivityFmSelectFieldsRequest payload) =>
    _client.RequestAsync<ActivityFmSelectFieldsRequest, ActivityFmSelectFieldsResponse>("getActivityFmSelectFields", payload, "parameter");


public Task<AnalysisFloatSelectFieldsResponse> GetAnalysisFloatSelectFields(AnalysisFloatSelectFieldsRequest payload) =>
    _client.RequestAsync<AnalysisFloatSelectFieldsRequest, AnalysisFloatSelectFieldsResponse>("getAnalysisFloatSelectFields", payload, "parameter");


public Task<AnalysisFloatPagedListSelectFieldsResponse> GetAnalysisFloatPagedListSelectFields(AnalysisFloatPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AnalysisFloatPagedListSelectFieldsRequest, AnalysisFloatPagedListSelectFieldsResponse>("getAnalysisFloatPagedListSelectFields", payload, "parameter");


public Task<AnalysisFloatSearchPagedSelectFieldsResponse> SearchAnalysisFloatPagedSelectFields(AnalysisFloatSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AnalysisFloatSearchPagedSelectFieldsRequest, AnalysisFloatSearchPagedSelectFieldsResponse>("searchAnalysisFloatPagedSelectFields", payload, "parameter");


public Task<AnalysisGlobalSelectFieldsResponse> GetAnalysisGlobalSelectFields(AnalysisGlobalSelectFieldsRequest payload) =>
    _client.RequestAsync<AnalysisGlobalSelectFieldsRequest, AnalysisGlobalSelectFieldsResponse>("getAnalysisGlobalSelectFields", payload, "parameter");


public Task<AnalysisPlanSelectFieldsResponse> GetAnalysisPlanSelectFields(AnalysisPlanSelectFieldsRequest payload) =>
    _client.RequestAsync<AnalysisPlanSelectFieldsRequest, AnalysisPlanSelectFieldsResponse>("getAnalysisPlanSelectFields", payload, "parameter");


public Task<AnalysisPlanPagedListSelectFieldsResponse> GetAnalysisPlanPagedListSelectFields(AnalysisPlanPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AnalysisPlanPagedListSelectFieldsRequest, AnalysisPlanPagedListSelectFieldsResponse>("getAnalysisPlanPagedListSelectFields", payload, "parameter");


public Task<AnalysisPlanSearchPagedSelectFieldsResponse> SearchAnalysisPlanPagedSelectFields(AnalysisPlanSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AnalysisPlanSearchPagedSelectFieldsRequest, AnalysisPlanSearchPagedSelectFieldsResponse>("searchAnalysisPlanPagedSelectFields", payload, "parameter");


public Task<ApMiscSelectFieldsResponse> GetApMiscSelectFields(ApMiscSelectFieldsRequest payload) =>
    _client.RequestAsync<ApMiscSelectFieldsRequest, ApMiscSelectFieldsResponse>("getApMiscSelectFields", payload, "parameter");


public Task<ApPmtTermsTablePagedListSelectFieldsResponse> GetApPmtTermsTablePagedListSelectFields(ApPmtTermsTablePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ApPmtTermsTablePagedListSelectFieldsRequest, ApPmtTermsTablePagedListSelectFieldsResponse>("getApPmtTermsTablePagedListSelectFields", payload, "parameter");


public Task<ApPmtTermsTableSearchPagedSelectFieldsResponse> SearchApPmtTermsTablePagedSelectFields(ApPmtTermsTableSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ApPmtTermsTableSearchPagedSelectFieldsRequest, ApPmtTermsTableSearchPagedSelectFieldsResponse>("searchApPmtTermsTablePagedSelectFields", payload, "parameter");


public Task<ApWorkFlowSelectFieldsResponse> GetApWorkFlowSelectFields(ApWorkFlowSelectFieldsRequest payload) =>
    _client.RequestAsync<ApWorkFlowSelectFieldsRequest, ApWorkFlowSelectFieldsResponse>("getApWorkFlowSelectFields", payload, "parameter");


public Task<ApWorkFlowPagedListSelectFieldsResponse> GetApWorkFlowPagedListSelectFields(ApWorkFlowPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ApWorkFlowPagedListSelectFieldsRequest, ApWorkFlowPagedListSelectFieldsResponse>("getApWorkFlowPagedListSelectFields", payload, "parameter");


public Task<ApWorkFlowSearchPagedSelectFieldsResponse> SearchApWorkFlowPagedSelectFields(ApWorkFlowSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ApWorkFlowSearchPagedSelectFieldsRequest, ApWorkFlowSearchPagedSelectFieldsResponse>("searchApWorkFlowPagedSelectFields", payload, "parameter");


public Task<AtmSelectFieldsResponse> GetAtmSelectFields(AtmSelectFieldsRequest payload) =>
    _client.RequestAsync<AtmSelectFieldsRequest, AtmSelectFieldsResponse>("getAtmSelectFields", payload, "parameter");


public Task<BatchRcSelectFieldsResponse> GetBatchRcSelectFields(BatchRcSelectFieldsRequest payload) =>
    _client.RequestAsync<BatchRcSelectFieldsRequest, BatchRcSelectFieldsResponse>("getBatchRcSelectFields", payload, "parameter");


public Task<BatchRcPagedListSelectFieldsResponse> GetBatchRcPagedListSelectFields(BatchRcPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<BatchRcPagedListSelectFieldsRequest, BatchRcPagedListSelectFieldsResponse>("getBatchRcPagedListSelectFields", payload, "parameter");


public Task<BatchRcSearchPagedSelectFieldsResponse> SearchBatchRcPagedSelectFields(BatchRcSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<BatchRcSearchPagedSelectFieldsRequest, BatchRcSearchPagedSelectFieldsResponse>("searchBatchRcPagedSelectFields", payload, "parameter");


public Task<CardDefaultSelectFieldsResponse> GetCardDefaultSelectFields(CardDefaultSelectFieldsRequest payload) =>
    _client.RequestAsync<CardDefaultSelectFieldsRequest, CardDefaultSelectFieldsResponse>("getCardDefaultSelectFields", payload, "parameter");


public Task<CardDefaultPagedListSelectFieldsResponse> GetCardDefaultPagedListSelectFields(CardDefaultPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CardDefaultPagedListSelectFieldsRequest, CardDefaultPagedListSelectFieldsResponse>("getCardDefaultPagedListSelectFields", payload, "parameter");


public Task<CardDefaultSearchPagedSelectFieldsResponse> SearchCardDefaultPagedSelectFields(CardDefaultSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CardDefaultSearchPagedSelectFieldsRequest, CardDefaultSearchPagedSelectFieldsResponse>("searchCardDefaultPagedSelectFields", payload, "parameter");


public Task<CardWizSelectFieldsResponse> GetCardWizSelectFields(CardWizSelectFieldsRequest payload) =>
    _client.RequestAsync<CardWizSelectFieldsRequest, CardWizSelectFieldsResponse>("getCardWizSelectFields", payload, "parameter");


public Task<CardWizPagedListSelectFieldsResponse> GetCardWizPagedListSelectFields(CardWizPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CardWizPagedListSelectFieldsRequest, CardWizPagedListSelectFieldsResponse>("getCardWizPagedListSelectFields", payload, "parameter");


public Task<CardWizSearchPagedSelectFieldsResponse> SearchCardWizPagedSelectFields(CardWizSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CardWizSearchPagedSelectFieldsRequest, CardWizSearchPagedSelectFieldsResponse>("searchCardWizPagedSelectFields", payload, "parameter");


public Task<CdmSelectFieldsResponse> GetCdmSelectFields(CdmSelectFieldsRequest payload) =>
    _client.RequestAsync<CdmSelectFieldsRequest, CdmSelectFieldsResponse>("getCdmSelectFields", payload, "parameter");


public Task<CdmPagedListSelectFieldsResponse> GetCdmPagedListSelectFields(CdmPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CdmPagedListSelectFieldsRequest, CdmPagedListSelectFieldsResponse>("getCdmPagedListSelectFields", payload, "parameter");


public Task<CdmSearchPagedSelectFieldsResponse> SearchCdmPagedSelectFields(CdmSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CdmSearchPagedSelectFieldsRequest, CdmSearchPagedSelectFieldsResponse>("searchCdmPagedSelectFields", payload, "parameter");


public Task<CdmCommonSelectFieldsResponse> GetCdmCommonSelectFields(CdmCommonSelectFieldsRequest payload) =>
    _client.RequestAsync<CdmCommonSelectFieldsRequest, CdmCommonSelectFieldsResponse>("getCdmCommonSelectFields", payload, "parameter");


public Task<CheckOrderDefaultSelectFieldsResponse> GetCheckOrderDefaultSelectFields(CheckOrderDefaultSelectFieldsRequest payload) =>
    _client.RequestAsync<CheckOrderDefaultSelectFieldsRequest, CheckOrderDefaultSelectFieldsResponse>("getCheckOrderDefaultSelectFields", payload, "parameter");


public Task<CheckOrderDefaultPagedListSelectFieldsResponse> GetCheckOrderDefaultPagedListSelectFields(CheckOrderDefaultPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CheckOrderDefaultPagedListSelectFieldsRequest, CheckOrderDefaultPagedListSelectFieldsResponse>("getCheckOrderDefaultPagedListSelectFields", payload, "parameter");


public Task<CheckOrderDefaultSearchPagedSelectFieldsResponse> SearchCheckOrderDefaultPagedSelectFields(CheckOrderDefaultSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CheckOrderDefaultSearchPagedSelectFieldsRequest, CheckOrderDefaultSearchPagedSelectFieldsResponse>("searchCheckOrderDefaultPagedSelectFields", payload, "parameter");


public Task<CollateralTypeSelectFieldsResponse> GetCollateralTypeSelectFields(CollateralTypeSelectFieldsRequest payload) =>
    _client.RequestAsync<CollateralTypeSelectFieldsRequest, CollateralTypeSelectFieldsResponse>("getCollateralTypeSelectFields", payload, "parameter");


public Task<CollateralTypePagedListSelectFieldsResponse> GetCollateralTypePagedListSelectFields(CollateralTypePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CollateralTypePagedListSelectFieldsRequest, CollateralTypePagedListSelectFieldsResponse>("getCollateralTypePagedListSelectFields", payload, "parameter");


public Task<CollateralTypeSearchPagedSelectFieldsResponse> SearchCollateralTypePagedSelectFields(CollateralTypeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CollateralTypeSearchPagedSelectFieldsRequest, CollateralTypeSearchPagedSelectFieldsResponse>("searchCollateralTypePagedSelectFields", payload, "parameter");


public Task<CollatrlTrackingTypeSelectFieldsResponse> GetCollatrlTrackingTypeSelectFields(CollatrlTrackingTypeSelectFieldsRequest payload) =>
    _client.RequestAsync<CollatrlTrackingTypeSelectFieldsRequest, CollatrlTrackingTypeSelectFieldsResponse>("getCollatrlTrackingTypeSelectFields", payload, "parameter");


public Task<CollatrlTrackingTypePagedListSelectFieldsResponse> GetCollatrlTrackingTypePagedListSelectFields(CollatrlTrackingTypePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CollatrlTrackingTypePagedListSelectFieldsRequest, CollatrlTrackingTypePagedListSelectFieldsResponse>("getCollatrlTrackingTypePagedListSelectFields", payload, "parameter");


public Task<CollatrlTrackingTypeSearchPagedSelectFieldsResponse> SearchCollatrlTrackingTypePagedSelectFields(CollatrlTrackingTypeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CollatrlTrackingTypeSearchPagedSelectFieldsRequest, CollatrlTrackingTypeSearchPagedSelectFieldsResponse>("searchCollatrlTrackingTypePagedSelectFields", payload, "parameter");


public Task<CommentSelectFieldsResponse> GetCommentSelectFields(CommentSelectFieldsRequest payload) =>
    _client.RequestAsync<CommentSelectFieldsRequest, CommentSelectFieldsResponse>("getCommentSelectFields", payload, "parameter");


public Task<CommentPagedListSelectFieldsResponse> GetCommentPagedListSelectFields(CommentPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CommentPagedListSelectFieldsRequest, CommentPagedListSelectFieldsResponse>("getCommentPagedListSelectFields", payload, "parameter");


public Task<CommentSearchPagedSelectFieldsResponse> SearchCommentPagedSelectFields(CommentSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CommentSearchPagedSelectFieldsRequest, CommentSearchPagedSelectFieldsResponse>("searchCommentPagedSelectFields", payload, "parameter");


public Task<ConsoleFmSelectFieldsResponse> GetConsoleFmSelectFields(ConsoleFmSelectFieldsRequest payload) =>
    _client.RequestAsync<ConsoleFmSelectFieldsRequest, ConsoleFmSelectFieldsResponse>("getConsoleFmSelectFields", payload, "parameter");


public Task<CpLetterSelectFieldsResponse> GetCpLetterSelectFields(CpLetterSelectFieldsRequest payload) =>
    _client.RequestAsync<CpLetterSelectFieldsRequest, CpLetterSelectFieldsResponse>("getCpLetterSelectFields", payload, "parameter");


public Task<CpLetterPagedListSelectFieldsResponse> GetCpLetterPagedListSelectFields(CpLetterPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CpLetterPagedListSelectFieldsRequest, CpLetterPagedListSelectFieldsResponse>("getCpLetterPagedListSelectFields", payload, "parameter");


public Task<CpLetterSearchPagedSelectFieldsResponse> SearchCpLetterPagedSelectFields(CpLetterSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CpLetterSearchPagedSelectFieldsRequest, CpLetterSearchPagedSelectFieldsResponse>("searchCpLetterPagedSelectFields", payload, "parameter");


public Task<CpWorkCardSelectFieldsResponse> GetCpWorkCardSelectFields(CpWorkCardSelectFieldsRequest payload) =>
    _client.RequestAsync<CpWorkCardSelectFieldsRequest, CpWorkCardSelectFieldsResponse>("getCpWorkCardSelectFields", payload, "parameter");


public Task<CreditReportSelectFieldsResponse> GetCreditReportSelectFields(CreditReportSelectFieldsRequest payload) =>
    _client.RequestAsync<CreditReportSelectFieldsRequest, CreditReportSelectFieldsResponse>("getCreditReportSelectFields", payload, "parameter");


public Task<CrsSelectFieldsResponse> GetCrsSelectFields(CrsSelectFieldsRequest payload) =>
    _client.RequestAsync<CrsSelectFieldsRequest, CrsSelectFieldsResponse>("getCrsSelectFields", payload, "parameter");


public Task<CurrencyCtrlSelectFieldsResponse> GetCurrencyCtrlSelectFields(CurrencyCtrlSelectFieldsRequest payload) =>
    _client.RequestAsync<CurrencyCtrlSelectFieldsRequest, CurrencyCtrlSelectFieldsResponse>("getCurrencyCtrlSelectFields", payload, "parameter");


public Task<DailyPostSelectFieldsResponse> GetDailyPostSelectFields(DailyPostSelectFieldsRequest payload) =>
    _client.RequestAsync<DailyPostSelectFieldsRequest, DailyPostSelectFieldsResponse>("getDailyPostSelectFields", payload, "parameter");


public Task<DealerStatementSelectFieldsResponse> GetDealerStatementSelectFields(DealerStatementSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerStatementSelectFieldsRequest, DealerStatementSelectFieldsResponse>("getDealerStatementSelectFields", payload, "parameter");


public Task<DebtRatioSelectFieldsResponse> GetDebtRatioSelectFields(DebtRatioSelectFieldsRequest payload) =>
    _client.RequestAsync<DebtRatioSelectFieldsRequest, DebtRatioSelectFieldsResponse>("getDebtRatioSelectFields", payload, "parameter");


public Task<DebtRatioPagedListSelectFieldsResponse> GetDebtRatioPagedListSelectFields(DebtRatioPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<DebtRatioPagedListSelectFieldsRequest, DebtRatioPagedListSelectFieldsResponse>("getDebtRatioPagedListSelectFields", payload, "parameter");


public Task<DebtRatioSearchPagedSelectFieldsResponse> SearchDebtRatioPagedSelectFields(DebtRatioSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<DebtRatioSearchPagedSelectFieldsRequest, DebtRatioSearchPagedSelectFieldsResponse>("searchDebtRatioPagedSelectFields", payload, "parameter");


public Task<DisclosureSelectFieldsResponse> GetDisclosureSelectFields(DisclosureSelectFieldsRequest payload) =>
    _client.RequestAsync<DisclosureSelectFieldsRequest, DisclosureSelectFieldsResponse>("getDisclosureSelectFields", payload, "parameter");


public Task<DivIndexLocalSelectFieldsResponse> GetDivIndexLocalSelectFields(DivIndexLocalSelectFieldsRequest payload) =>
    _client.RequestAsync<DivIndexLocalSelectFieldsRequest, DivIndexLocalSelectFieldsResponse>("getDivIndexLocalSelectFields", payload, "parameter");


public Task<DivIndexLocalPagedListSelectFieldsResponse> GetDivIndexLocalPagedListSelectFields(DivIndexLocalPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<DivIndexLocalPagedListSelectFieldsRequest, DivIndexLocalPagedListSelectFieldsResponse>("getDivIndexLocalPagedListSelectFields", payload, "parameter");


public Task<DivIndexLocalSearchPagedSelectFieldsResponse> SearchDivIndexLocalPagedSelectFields(DivIndexLocalSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<DivIndexLocalSearchPagedSelectFieldsRequest, DivIndexLocalSearchPagedSelectFieldsResponse>("searchDivIndexLocalPagedSelectFields", payload, "parameter");


public Task<DivTableSelectFieldsResponse> GetDivTableSelectFields(DivTableSelectFieldsRequest payload) =>
    _client.RequestAsync<DivTableSelectFieldsRequest, DivTableSelectFieldsResponse>("getDivTableSelectFields", payload, "parameter");


public Task<DivTablePagedListSelectFieldsResponse> GetDivTablePagedListSelectFields(DivTablePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<DivTablePagedListSelectFieldsRequest, DivTablePagedListSelectFieldsResponse>("getDivTablePagedListSelectFields", payload, "parameter");


public Task<DivTableSearchPagedSelectFieldsResponse> SearchDivTablePagedSelectFields(DivTableSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<DivTableSearchPagedSelectFieldsRequest, DivTableSearchPagedSelectFieldsResponse>("searchDivTablePagedSelectFields", payload, "parameter");


public Task<DocExcpNoticeSelectFieldsResponse> GetDocExcpNoticeSelectFields(DocExcpNoticeSelectFieldsRequest payload) =>
    _client.RequestAsync<DocExcpNoticeSelectFieldsRequest, DocExcpNoticeSelectFieldsResponse>("getDocExcpNoticeSelectFields", payload, "parameter");


public Task<DocExcpNoticePagedListSelectFieldsResponse> GetDocExcpNoticePagedListSelectFields(DocExcpNoticePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<DocExcpNoticePagedListSelectFieldsRequest, DocExcpNoticePagedListSelectFieldsResponse>("getDocExcpNoticePagedListSelectFields", payload, "parameter");


public Task<DocExcpNoticeSearchPagedSelectFieldsResponse> SearchDocExcpNoticePagedSelectFields(DocExcpNoticeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<DocExcpNoticeSearchPagedSelectFieldsRequest, DocExcpNoticeSearchPagedSelectFieldsResponse>("searchDocExcpNoticePagedSelectFields", payload, "parameter");


public Task<DocTypeDefaultSelectFieldsResponse> GetDocTypeDefaultSelectFields(DocTypeDefaultSelectFieldsRequest payload) =>
    _client.RequestAsync<DocTypeDefaultSelectFieldsRequest, DocTypeDefaultSelectFieldsResponse>("getDocTypeDefaultSelectFields", payload, "parameter");


public Task<DocTypeDefaultPagedListSelectFieldsResponse> GetDocTypeDefaultPagedListSelectFields(DocTypeDefaultPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<DocTypeDefaultPagedListSelectFieldsRequest, DocTypeDefaultPagedListSelectFieldsResponse>("getDocTypeDefaultPagedListSelectFields", payload, "parameter");


public Task<DocTypeDefaultSearchPagedSelectFieldsResponse> SearchDocTypeDefaultPagedSelectFields(DocTypeDefaultSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<DocTypeDefaultSearchPagedSelectFieldsRequest, DocTypeDefaultSearchPagedSelectFieldsResponse>("searchDocTypeDefaultPagedSelectFields", payload, "parameter");


public Task<DocumentNumberSelectFieldsResponse> GetDocumentNumberSelectFields(DocumentNumberSelectFieldsRequest payload) =>
    _client.RequestAsync<DocumentNumberSelectFieldsRequest, DocumentNumberSelectFieldsResponse>("getDocumentNumberSelectFields", payload, "parameter");


public Task<EpisysDbExtractSelectFieldsResponse> GetEpisysDbExtractSelectFields(EpisysDbExtractSelectFieldsRequest payload) =>
    _client.RequestAsync<EpisysDbExtractSelectFieldsRequest, EpisysDbExtractSelectFieldsResponse>("getEpisysDbExtractSelectFields", payload, "parameter");


public Task<EscrowAnalysisSelectFieldsResponse> GetEscrowAnalysisSelectFields(EscrowAnalysisSelectFieldsRequest payload) =>
    _client.RequestAsync<EscrowAnalysisSelectFieldsRequest, EscrowAnalysisSelectFieldsResponse>("getEscrowAnalysisSelectFields", payload, "parameter");


public Task<EscrowTypeSelectFieldsResponse> GetEscrowTypeSelectFields(EscrowTypeSelectFieldsRequest payload) =>
    _client.RequestAsync<EscrowTypeSelectFieldsRequest, EscrowTypeSelectFieldsResponse>("getEscrowTypeSelectFields", payload, "parameter");


public Task<EscrowTypePagedListSelectFieldsResponse> GetEscrowTypePagedListSelectFields(EscrowTypePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<EscrowTypePagedListSelectFieldsRequest, EscrowTypePagedListSelectFieldsResponse>("getEscrowTypePagedListSelectFields", payload, "parameter");


public Task<EscrowTypeSearchPagedSelectFieldsResponse> SearchEscrowTypePagedSelectFields(EscrowTypeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<EscrowTypeSearchPagedSelectFieldsRequest, EscrowTypeSearchPagedSelectFieldsResponse>("searchEscrowTypePagedSelectFields", payload, "parameter");


public Task<ExtLoanSelectFieldsResponse> GetExtLoanSelectFields(ExtLoanSelectFieldsRequest payload) =>
    _client.RequestAsync<ExtLoanSelectFieldsRequest, ExtLoanSelectFieldsResponse>("getExtLoanSelectFields", payload, "parameter");


public Task<ExtLoanPagedListSelectFieldsResponse> GetExtLoanPagedListSelectFields(ExtLoanPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ExtLoanPagedListSelectFieldsRequest, ExtLoanPagedListSelectFieldsResponse>("getExtLoanPagedListSelectFields", payload, "parameter");


public Task<ExtLoanSearchPagedSelectFieldsResponse> SearchExtLoanPagedSelectFields(ExtLoanSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ExtLoanSearchPagedSelectFieldsRequest, ExtLoanSearchPagedSelectFieldsResponse>("searchExtLoanPagedSelectFields", payload, "parameter");


public Task<GlCategorySelectFieldsResponse> GetGlCategorySelectFields(GlCategorySelectFieldsRequest payload) =>
    _client.RequestAsync<GlCategorySelectFieldsRequest, GlCategorySelectFieldsResponse>("getGlCategorySelectFields", payload, "parameter");


public Task<GlCategoryPagedListSelectFieldsResponse> GetGlCategoryPagedListSelectFields(GlCategoryPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<GlCategoryPagedListSelectFieldsRequest, GlCategoryPagedListSelectFieldsResponse>("getGlCategoryPagedListSelectFields", payload, "parameter");


public Task<GlCategorySearchPagedSelectFieldsResponse> SearchGlCategoryPagedSelectFields(GlCategorySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<GlCategorySearchPagedSelectFieldsRequest, GlCategorySearchPagedSelectFieldsResponse>("searchGlCategoryPagedSelectFields", payload, "parameter");


public Task<GlCodeSelectFieldsResponse> GetGlCodeSelectFields(GlCodeSelectFieldsRequest payload) =>
    _client.RequestAsync<GlCodeSelectFieldsRequest, GlCodeSelectFieldsResponse>("getGlCodeSelectFields", payload, "parameter");


public Task<GlCodePagedListSelectFieldsResponse> GetGlCodePagedListSelectFields(GlCodePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<GlCodePagedListSelectFieldsRequest, GlCodePagedListSelectFieldsResponse>("getGlCodePagedListSelectFields", payload, "parameter");


public Task<GlCodeSearchPagedSelectFieldsResponse> SearchGlCodePagedSelectFields(GlCodeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<GlCodeSearchPagedSelectFieldsRequest, GlCodeSearchPagedSelectFieldsResponse>("searchGlCodePagedSelectFields", payload, "parameter");


public Task<GlTableSelectFieldsResponse> GetGlTableSelectFields(GlTableSelectFieldsRequest payload) =>
    _client.RequestAsync<GlTableSelectFieldsRequest, GlTableSelectFieldsResponse>("getGlTableSelectFields", payload, "parameter");


public Task<GlTablePagedListSelectFieldsResponse> GetGlTablePagedListSelectFields(GlTablePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<GlTablePagedListSelectFieldsRequest, GlTablePagedListSelectFieldsResponse>("getGlTablePagedListSelectFields", payload, "parameter");


public Task<GlTableSearchPagedSelectFieldsResponse> SearchGlTablePagedSelectFields(GlTableSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<GlTableSearchPagedSelectFieldsRequest, GlTableSearchPagedSelectFieldsResponse>("searchGlTablePagedSelectFields", payload, "parameter");


public Task<GlTrackingTypeSelectFieldsResponse> GetGlTrackingTypeSelectFields(GlTrackingTypeSelectFieldsRequest payload) =>
    _client.RequestAsync<GlTrackingTypeSelectFieldsRequest, GlTrackingTypeSelectFieldsResponse>("getGlTrackingTypeSelectFields", payload, "parameter");


public Task<GlTrackingTypePagedListSelectFieldsResponse> GetGlTrackingTypePagedListSelectFields(GlTrackingTypePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<GlTrackingTypePagedListSelectFieldsRequest, GlTrackingTypePagedListSelectFieldsResponse>("getGlTrackingTypePagedListSelectFields", payload, "parameter");


public Task<GlTrackingTypeSearchPagedSelectFieldsResponse> SearchGlTrackingTypePagedSelectFields(GlTrackingTypeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<GlTrackingTypeSearchPagedSelectFieldsRequest, GlTrackingTypeSearchPagedSelectFieldsResponse>("searchGlTrackingTypePagedSelectFields", payload, "parameter");


public Task<GlxLateSelectFieldsResponse> GetGlxLateSelectFields(GlxLateSelectFieldsRequest payload) =>
    _client.RequestAsync<GlxLateSelectFieldsRequest, GlxLateSelectFieldsResponse>("getGlxLateSelectFields", payload, "parameter");


public Task<GlxLatePagedListSelectFieldsResponse> GetGlxLatePagedListSelectFields(GlxLatePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<GlxLatePagedListSelectFieldsRequest, GlxLatePagedListSelectFieldsResponse>("getGlxLatePagedListSelectFields", payload, "parameter");


public Task<GlxLateSearchPagedSelectFieldsResponse> SearchGlxLatePagedSelectFields(GlxLateSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<GlxLateSearchPagedSelectFieldsRequest, GlxLateSearchPagedSelectFieldsResponse>("searchGlxLatePagedSelectFields", payload, "parameter");


public Task<IdentIdTypeDescSelectFieldsResponse> GetIdentIdTypeDescSelectFields(IdentIdTypeDescSelectFieldsRequest payload) =>
    _client.RequestAsync<IdentIdTypeDescSelectFieldsRequest, IdentIdTypeDescSelectFieldsResponse>("getIdentIdTypeDescSelectFields", payload, "parameter");


public Task<ImagingSelectFieldsResponse> GetImagingSelectFields(ImagingSelectFieldsRequest payload) =>
    _client.RequestAsync<ImagingSelectFieldsRequest, ImagingSelectFieldsResponse>("getImagingSelectFields", payload, "parameter");


public Task<InqDefinitionSelectFieldsResponse> GetInqDefinitionSelectFields(InqDefinitionSelectFieldsRequest payload) =>
    _client.RequestAsync<InqDefinitionSelectFieldsRequest, InqDefinitionSelectFieldsResponse>("getInqDefinitionSelectFields", payload, "parameter");


public Task<InqDefinitionPagedListSelectFieldsResponse> GetInqDefinitionPagedListSelectFields(InqDefinitionPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<InqDefinitionPagedListSelectFieldsRequest, InqDefinitionPagedListSelectFieldsResponse>("getInqDefinitionPagedListSelectFields", payload, "parameter");


public Task<InqDefinitionSearchPagedSelectFieldsResponse> SearchInqDefinitionPagedSelectFields(InqDefinitionSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<InqDefinitionSearchPagedSelectFieldsRequest, InqDefinitionSearchPagedSelectFieldsResponse>("searchInqDefinitionPagedSelectFields", payload, "parameter");


public Task<InsTableSelectFieldsResponse> GetInsTableSelectFields(InsTableSelectFieldsRequest payload) =>
    _client.RequestAsync<InsTableSelectFieldsRequest, InsTableSelectFieldsResponse>("getInsTableSelectFields", payload, "parameter");


public Task<InsTablePagedListSelectFieldsResponse> GetInsTablePagedListSelectFields(InsTablePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<InsTablePagedListSelectFieldsRequest, InsTablePagedListSelectFieldsResponse>("getInsTablePagedListSelectFields", payload, "parameter");


public Task<InsTableSearchPagedSelectFieldsResponse> SearchInsTablePagedSelectFields(InsTableSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<InsTableSearchPagedSelectFieldsRequest, InsTableSearchPagedSelectFieldsResponse>("searchInsTablePagedSelectFields", payload, "parameter");


public Task<InsTypeSelectFieldsResponse> GetInsTypeSelectFields(InsTypeSelectFieldsRequest payload) =>
    _client.RequestAsync<InsTypeSelectFieldsRequest, InsTypeSelectFieldsResponse>("getInsTypeSelectFields", payload, "parameter");


public Task<InsTypePagedListSelectFieldsResponse> GetInsTypePagedListSelectFields(InsTypePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<InsTypePagedListSelectFieldsRequest, InsTypePagedListSelectFieldsResponse>("getInsTypePagedListSelectFields", payload, "parameter");


public Task<InsTypeSearchPagedSelectFieldsResponse> SearchInsTypePagedSelectFields(InsTypeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<InsTypeSearchPagedSelectFieldsRequest, InsTypeSearchPagedSelectFieldsResponse>("searchInsTypePagedSelectFields", payload, "parameter");


public Task<InstitutionSelectFieldsResponse> GetInstitutionSelectFields(InstitutionSelectFieldsRequest payload) =>
    _client.RequestAsync<InstitutionSelectFieldsRequest, InstitutionSelectFieldsResponse>("getInstitutionSelectFields", payload, "parameter");


public Task<InstitutionPagedListSelectFieldsResponse> GetInstitutionPagedListSelectFields(InstitutionPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<InstitutionPagedListSelectFieldsRequest, InstitutionPagedListSelectFieldsResponse>("getInstitutionPagedListSelectFields", payload, "parameter");


public Task<InstitutionSearchPagedSelectFieldsResponse> SearchInstitutionPagedSelectFields(InstitutionSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<InstitutionSearchPagedSelectFieldsRequest, InstitutionSearchPagedSelectFieldsResponse>("searchInstitutionPagedSelectFields", payload, "parameter");


public Task<IntIndexSelectFieldsResponse> GetIntIndexSelectFields(IntIndexSelectFieldsRequest payload) =>
    _client.RequestAsync<IntIndexSelectFieldsRequest, IntIndexSelectFieldsResponse>("getIntIndexSelectFields", payload, "parameter");


public Task<IntIndexPagedListSelectFieldsResponse> GetIntIndexPagedListSelectFields(IntIndexPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<IntIndexPagedListSelectFieldsRequest, IntIndexPagedListSelectFieldsResponse>("getIntIndexPagedListSelectFields", payload, "parameter");


public Task<IntIndexSearchPagedSelectFieldsResponse> SearchIntIndexPagedSelectFields(IntIndexSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<IntIndexSearchPagedSelectFieldsRequest, IntIndexSearchPagedSelectFieldsResponse>("searchIntIndexPagedSelectFields", payload, "parameter");


public Task<IntTypeSelectFieldsResponse> GetIntTypeSelectFields(IntTypeSelectFieldsRequest payload) =>
    _client.RequestAsync<IntTypeSelectFieldsRequest, IntTypeSelectFieldsResponse>("getIntTypeSelectFields", payload, "parameter");


public Task<IntTypePagedListSelectFieldsResponse> GetIntTypePagedListSelectFields(IntTypePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<IntTypePagedListSelectFieldsRequest, IntTypePagedListSelectFieldsResponse>("getIntTypePagedListSelectFields", payload, "parameter");


public Task<IntTypeSearchPagedSelectFieldsResponse> SearchIntTypePagedSelectFields(IntTypeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<IntTypeSearchPagedSelectFieldsRequest, IntTypeSearchPagedSelectFieldsResponse>("searchIntTypePagedSelectFields", payload, "parameter");


public Task<InventoryCopiedFldsSelectFieldsResponse> GetInventoryCopiedFldsSelectFields(InventoryCopiedFldsSelectFieldsRequest payload) =>
    _client.RequestAsync<InventoryCopiedFldsSelectFieldsRequest, InventoryCopiedFldsSelectFieldsResponse>("getInventoryCopiedFldsSelectFields", payload, "parameter");


public Task<InventoryCopiedFldsPagedListSelectFieldsResponse> GetInventoryCopiedFldsPagedListSelectFields(InventoryCopiedFldsPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<InventoryCopiedFldsPagedListSelectFieldsRequest, InventoryCopiedFldsPagedListSelectFieldsResponse>("getInventoryCopiedFldsPagedListSelectFields", payload, "parameter");


public Task<InventoryCopiedFldsSearchPagedSelectFieldsResponse> SearchInventoryCopiedFldsPagedSelectFields(InventoryCopiedFldsSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<InventoryCopiedFldsSearchPagedSelectFieldsRequest, InventoryCopiedFldsSearchPagedSelectFieldsResponse>("searchInventoryCopiedFldsPagedSelectFields", payload, "parameter");


public Task<InventoryDefaultSelectFieldsResponse> GetInventoryDefaultSelectFields(InventoryDefaultSelectFieldsRequest payload) =>
    _client.RequestAsync<InventoryDefaultSelectFieldsRequest, InventoryDefaultSelectFieldsResponse>("getInventoryDefaultSelectFields", payload, "parameter");


public Task<InventoryDefaultPagedListSelectFieldsResponse> GetInventoryDefaultPagedListSelectFields(InventoryDefaultPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<InventoryDefaultPagedListSelectFieldsRequest, InventoryDefaultPagedListSelectFieldsResponse>("getInventoryDefaultPagedListSelectFields", payload, "parameter");


public Task<InventoryDefaultSearchPagedSelectFieldsResponse> SearchInventoryDefaultPagedSelectFields(InventoryDefaultSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<InventoryDefaultSearchPagedSelectFieldsRequest, InventoryDefaultSearchPagedSelectFieldsResponse>("searchInventoryDefaultPagedSelectFields", payload, "parameter");


public Task<InventoryFieldNameSelectFieldsResponse> GetInventoryFieldNameSelectFields(InventoryFieldNameSelectFieldsRequest payload) =>
    _client.RequestAsync<InventoryFieldNameSelectFieldsRequest, InventoryFieldNameSelectFieldsResponse>("getInventoryFieldNameSelectFields", payload, "parameter");


public Task<InventoryFieldNamePagedListSelectFieldsResponse> GetInventoryFieldNamePagedListSelectFields(InventoryFieldNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<InventoryFieldNamePagedListSelectFieldsRequest, InventoryFieldNamePagedListSelectFieldsResponse>("getInventoryFieldNamePagedListSelectFields", payload, "parameter");


public Task<InventoryFieldNameSearchPagedSelectFieldsResponse> SearchInventoryFieldNamePagedSelectFields(InventoryFieldNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<InventoryFieldNameSearchPagedSelectFieldsRequest, InventoryFieldNameSearchPagedSelectFieldsResponse>("searchInventoryFieldNamePagedSelectFields", payload, "parameter");


public Task<InventoryGeneralSelectFieldsResponse> GetInventoryGeneralSelectFields(InventoryGeneralSelectFieldsRequest payload) =>
    _client.RequestAsync<InventoryGeneralSelectFieldsRequest, InventoryGeneralSelectFieldsResponse>("getInventoryGeneralSelectFields", payload, "parameter");


public Task<InventoryTypeSelectFieldsResponse> GetInventoryTypeSelectFields(InventoryTypeSelectFieldsRequest payload) =>
    _client.RequestAsync<InventoryTypeSelectFieldsRequest, InventoryTypeSelectFieldsResponse>("getInventoryTypeSelectFields", payload, "parameter");


public Task<InventoryTypePagedListSelectFieldsResponse> GetInventoryTypePagedListSelectFields(InventoryTypePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<InventoryTypePagedListSelectFieldsRequest, InventoryTypePagedListSelectFieldsResponse>("getInventoryTypePagedListSelectFields", payload, "parameter");


public Task<InventoryTypeSearchPagedSelectFieldsResponse> SearchInventoryTypePagedSelectFields(InventoryTypeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<InventoryTypeSearchPagedSelectFieldsRequest, InventoryTypeSearchPagedSelectFieldsResponse>("searchInventoryTypePagedSelectFields", payload, "parameter");


public Task<IrsBkupWithholdSelectFieldsResponse> GetIrsBkupWithholdSelectFields(IrsBkupWithholdSelectFieldsRequest payload) =>
    _client.RequestAsync<IrsBkupWithholdSelectFieldsRequest, IrsBkupWithholdSelectFieldsResponse>("getIrsBkupWithholdSelectFields", payload, "parameter");


public Task<IrsContriLimitSelectFieldsResponse> GetIrsContriLimitSelectFields(IrsContriLimitSelectFieldsRequest payload) =>
    _client.RequestAsync<IrsContriLimitSelectFieldsRequest, IrsContriLimitSelectFieldsResponse>("getIrsContriLimitSelectFields", payload, "parameter");


public Task<ItcFraudSelectFieldsResponse> GetItcFraudSelectFields(ItcFraudSelectFieldsRequest payload) =>
    _client.RequestAsync<ItcFraudSelectFieldsRequest, ItcFraudSelectFieldsResponse>("getItcFraudSelectFields", payload, "parameter");


public Task<ItcFraudPagedListSelectFieldsResponse> GetItcFraudPagedListSelectFields(ItcFraudPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ItcFraudPagedListSelectFieldsRequest, ItcFraudPagedListSelectFieldsResponse>("getItcFraudPagedListSelectFields", payload, "parameter");


public Task<ItcFraudSearchPagedSelectFieldsResponse> SearchItcFraudPagedSelectFields(ItcFraudSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ItcFraudSearchPagedSelectFieldsRequest, ItcFraudSearchPagedSelectFieldsResponse>("searchItcFraudPagedSelectFields", payload, "parameter");


public Task<ItcInstallationSelectFieldsResponse> GetItcInstallationSelectFields(ItcInstallationSelectFieldsRequest payload) =>
    _client.RequestAsync<ItcInstallationSelectFieldsRequest, ItcInstallationSelectFieldsResponse>("getItcInstallationSelectFields", payload, "parameter");


public Task<ItcInstallationPagedListSelectFieldsResponse> GetItcInstallationPagedListSelectFields(ItcInstallationPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ItcInstallationPagedListSelectFieldsRequest, ItcInstallationPagedListSelectFieldsResponse>("getItcInstallationPagedListSelectFields", payload, "parameter");


public Task<ItcInstallationSearchPagedSelectFieldsResponse> SearchItcInstallationPagedSelectFields(ItcInstallationSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ItcInstallationSearchPagedSelectFieldsRequest, ItcInstallationSearchPagedSelectFieldsResponse>("searchItcInstallationPagedSelectFields", payload, "parameter");


public Task<LateChgSelectFieldsResponse> GetLateChgSelectFields(LateChgSelectFieldsRequest payload) =>
    _client.RequestAsync<LateChgSelectFieldsRequest, LateChgSelectFieldsResponse>("getLateChgSelectFields", payload, "parameter");


public Task<LateChgPagedListSelectFieldsResponse> GetLateChgPagedListSelectFields(LateChgPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LateChgPagedListSelectFieldsRequest, LateChgPagedListSelectFieldsResponse>("getLateChgPagedListSelectFields", payload, "parameter");


public Task<LateChgSearchPagedSelectFieldsResponse> SearchLateChgPagedSelectFields(LateChgSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LateChgSearchPagedSelectFieldsRequest, LateChgSearchPagedSelectFieldsResponse>("searchLateChgPagedSelectFields", payload, "parameter");


public Task<LnSegmentDefaultSelectFieldsResponse> GetLnSegmentDefaultSelectFields(LnSegmentDefaultSelectFieldsRequest payload) =>
    _client.RequestAsync<LnSegmentDefaultSelectFieldsRequest, LnSegmentDefaultSelectFieldsResponse>("getLnSegmentDefaultSelectFields", payload, "parameter");


public Task<LnSegmentDefaultPagedListSelectFieldsResponse> GetLnSegmentDefaultPagedListSelectFields(LnSegmentDefaultPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LnSegmentDefaultPagedListSelectFieldsRequest, LnSegmentDefaultPagedListSelectFieldsResponse>("getLnSegmentDefaultPagedListSelectFields", payload, "parameter");


public Task<LnSegmentDefaultSearchPagedSelectFieldsResponse> SearchLnSegmentDefaultPagedSelectFields(LnSegmentDefaultSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LnSegmentDefaultSearchPagedSelectFieldsRequest, LnSegmentDefaultSearchPagedSelectFieldsResponse>("searchLnSegmentDefaultPagedSelectFields", payload, "parameter");


public Task<LoanAppCopiedFldsSelectFieldsResponse> GetLoanAppCopiedFldsSelectFields(LoanAppCopiedFldsSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppCopiedFldsSelectFieldsRequest, LoanAppCopiedFldsSelectFieldsResponse>("getLoanAppCopiedFldsSelectFields", payload, "parameter");


public Task<LoanAppCopiedFldsPagedListSelectFieldsResponse> GetLoanAppCopiedFldsPagedListSelectFields(LoanAppCopiedFldsPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppCopiedFldsPagedListSelectFieldsRequest, LoanAppCopiedFldsPagedListSelectFieldsResponse>("getLoanAppCopiedFldsPagedListSelectFields", payload, "parameter");


public Task<LoanAppCopiedFldsSearchPagedSelectFieldsResponse> SearchLoanAppCopiedFldsPagedSelectFields(LoanAppCopiedFldsSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppCopiedFldsSearchPagedSelectFieldsRequest, LoanAppCopiedFldsSearchPagedSelectFieldsResponse>("searchLoanAppCopiedFldsPagedSelectFields", payload, "parameter");


public Task<LoanAppDefaultSelectFieldsResponse> GetLoanAppDefaultSelectFields(LoanAppDefaultSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppDefaultSelectFieldsRequest, LoanAppDefaultSelectFieldsResponse>("getLoanAppDefaultSelectFields", payload, "parameter");


public Task<LoanAppDefaultPagedListSelectFieldsResponse> GetLoanAppDefaultPagedListSelectFields(LoanAppDefaultPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppDefaultPagedListSelectFieldsRequest, LoanAppDefaultPagedListSelectFieldsResponse>("getLoanAppDefaultPagedListSelectFields", payload, "parameter");


public Task<LoanAppDefaultSearchPagedSelectFieldsResponse> SearchLoanAppDefaultPagedSelectFields(LoanAppDefaultSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppDefaultSearchPagedSelectFieldsRequest, LoanAppDefaultSearchPagedSelectFieldsResponse>("searchLoanAppDefaultPagedSelectFields", payload, "parameter");


public Task<LoanAppDenialSelectFieldsResponse> GetLoanAppDenialSelectFields(LoanAppDenialSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppDenialSelectFieldsRequest, LoanAppDenialSelectFieldsResponse>("getLoanAppDenialSelectFields", payload, "parameter");


public Task<LoanAppDenialPagedListSelectFieldsResponse> GetLoanAppDenialPagedListSelectFields(LoanAppDenialPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppDenialPagedListSelectFieldsRequest, LoanAppDenialPagedListSelectFieldsResponse>("getLoanAppDenialPagedListSelectFields", payload, "parameter");


public Task<LoanAppDenialSearchPagedSelectFieldsResponse> SearchLoanAppDenialPagedSelectFields(LoanAppDenialSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppDenialSearchPagedSelectFieldsRequest, LoanAppDenialSearchPagedSelectFieldsResponse>("searchLoanAppDenialPagedSelectFields", payload, "parameter");


public Task<LoanAppFieldNameSelectFieldsResponse> GetLoanAppFieldNameSelectFields(LoanAppFieldNameSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppFieldNameSelectFieldsRequest, LoanAppFieldNameSelectFieldsResponse>("getLoanAppFieldNameSelectFields", payload, "parameter");


public Task<LoanAppFieldNamePagedListSelectFieldsResponse> GetLoanAppFieldNamePagedListSelectFields(LoanAppFieldNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppFieldNamePagedListSelectFieldsRequest, LoanAppFieldNamePagedListSelectFieldsResponse>("getLoanAppFieldNamePagedListSelectFields", payload, "parameter");


public Task<LoanAppFieldNameSearchPagedSelectFieldsResponse> SearchLoanAppFieldNamePagedSelectFields(LoanAppFieldNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppFieldNameSearchPagedSelectFieldsRequest, LoanAppFieldNameSearchPagedSelectFieldsResponse>("searchLoanAppFieldNamePagedSelectFields", payload, "parameter");


public Task<LoanAppFormPktSelectFieldsResponse> GetLoanAppFormPktSelectFields(LoanAppFormPktSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppFormPktSelectFieldsRequest, LoanAppFormPktSelectFieldsResponse>("getLoanAppFormPktSelectFields", payload, "parameter");


public Task<LoanAppFormPktPagedListSelectFieldsResponse> GetLoanAppFormPktPagedListSelectFields(LoanAppFormPktPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppFormPktPagedListSelectFieldsRequest, LoanAppFormPktPagedListSelectFieldsResponse>("getLoanAppFormPktPagedListSelectFields", payload, "parameter");


public Task<LoanAppFormPktSearchPagedSelectFieldsResponse> SearchLoanAppFormPktPagedSelectFields(LoanAppFormPktSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppFormPktSearchPagedSelectFieldsRequest, LoanAppFormPktSearchPagedSelectFieldsResponse>("searchLoanAppFormPktPagedSelectFields", payload, "parameter");


public Task<LoanAppMiscSelectFieldsResponse> GetLoanAppMiscSelectFields(LoanAppMiscSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppMiscSelectFieldsRequest, LoanAppMiscSelectFieldsResponse>("getLoanAppMiscSelectFields", payload, "parameter");


public Task<LoanAppPrintAppSelectFieldsResponse> GetLoanAppPrintAppSelectFields(LoanAppPrintAppSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppPrintAppSelectFieldsRequest, LoanAppPrintAppSelectFieldsResponse>("getLoanAppPrintAppSelectFields", payload, "parameter");


public Task<LoanAppPrintAppPagedListSelectFieldsResponse> GetLoanAppPrintAppPagedListSelectFields(LoanAppPrintAppPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppPrintAppPagedListSelectFieldsRequest, LoanAppPrintAppPagedListSelectFieldsResponse>("getLoanAppPrintAppPagedListSelectFields", payload, "parameter");


public Task<LoanAppPrintAppSearchPagedSelectFieldsResponse> SearchLoanAppPrintAppPagedSelectFields(LoanAppPrintAppSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppPrintAppSearchPagedSelectFieldsRequest, LoanAppPrintAppSearchPagedSelectFieldsResponse>("searchLoanAppPrintAppPagedSelectFields", payload, "parameter");


public Task<LoanAppReusedFldsSelectFieldsResponse> GetLoanAppReusedFldsSelectFields(LoanAppReusedFldsSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppReusedFldsSelectFieldsRequest, LoanAppReusedFldsSelectFieldsResponse>("getLoanAppReusedFldsSelectFields", payload, "parameter");


public Task<LoanAppReusedFldsPagedListSelectFieldsResponse> GetLoanAppReusedFldsPagedListSelectFields(LoanAppReusedFldsPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppReusedFldsPagedListSelectFieldsRequest, LoanAppReusedFldsPagedListSelectFieldsResponse>("getLoanAppReusedFldsPagedListSelectFields", payload, "parameter");


public Task<LoanAppReusedFldsSearchPagedSelectFieldsResponse> SearchLoanAppReusedFldsPagedSelectFields(LoanAppReusedFldsSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppReusedFldsSearchPagedSelectFieldsRequest, LoanAppReusedFldsSearchPagedSelectFieldsResponse>("searchLoanAppReusedFldsPagedSelectFields", payload, "parameter");


public Task<LoanAppVerFormSelectFieldsResponse> GetLoanAppVerFormSelectFields(LoanAppVerFormSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppVerFormSelectFieldsRequest, LoanAppVerFormSelectFieldsResponse>("getLoanAppVerFormSelectFields", payload, "parameter");


public Task<LoanAppVerFormPagedListSelectFieldsResponse> GetLoanAppVerFormPagedListSelectFields(LoanAppVerFormPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppVerFormPagedListSelectFieldsRequest, LoanAppVerFormPagedListSelectFieldsResponse>("getLoanAppVerFormPagedListSelectFields", payload, "parameter");


public Task<LoanAppVerFormSearchPagedSelectFieldsResponse> SearchLoanAppVerFormPagedSelectFields(LoanAppVerFormSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppVerFormSearchPagedSelectFieldsRequest, LoanAppVerFormSearchPagedSelectFieldsResponse>("searchLoanAppVerFormPagedSelectFields", payload, "parameter");


public Task<LoanAppViewAppSelectFieldsResponse> GetLoanAppViewAppSelectFields(LoanAppViewAppSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppViewAppSelectFieldsRequest, LoanAppViewAppSelectFieldsResponse>("getLoanAppViewAppSelectFields", payload, "parameter");


public Task<LoanAppViewAppPagedListSelectFieldsResponse> GetLoanAppViewAppPagedListSelectFields(LoanAppViewAppPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppViewAppPagedListSelectFieldsRequest, LoanAppViewAppPagedListSelectFieldsResponse>("getLoanAppViewAppPagedListSelectFields", payload, "parameter");


public Task<LoanAppViewAppSearchPagedSelectFieldsResponse> SearchLoanAppViewAppPagedSelectFields(LoanAppViewAppSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppViewAppSearchPagedSelectFieldsRequest, LoanAppViewAppSearchPagedSelectFieldsResponse>("searchLoanAppViewAppPagedSelectFields", payload, "parameter");


public Task<LoanAppWorkFlowSelectFieldsResponse> GetLoanAppWorkFlowSelectFields(LoanAppWorkFlowSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppWorkFlowSelectFieldsRequest, LoanAppWorkFlowSelectFieldsResponse>("getLoanAppWorkFlowSelectFields", payload, "parameter");


public Task<LoanAppWorkFlowPagedListSelectFieldsResponse> GetLoanAppWorkFlowPagedListSelectFields(LoanAppWorkFlowPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppWorkFlowPagedListSelectFieldsRequest, LoanAppWorkFlowPagedListSelectFieldsResponse>("getLoanAppWorkFlowPagedListSelectFields", payload, "parameter");


public Task<LoanAppWorkFlowSearchPagedSelectFieldsResponse> SearchLoanAppWorkFlowPagedSelectFields(LoanAppWorkFlowSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppWorkFlowSearchPagedSelectFieldsRequest, LoanAppWorkFlowSearchPagedSelectFieldsResponse>("searchLoanAppWorkFlowPagedSelectFields", payload, "parameter");


public Task<LoanDefaultSelectFieldsResponse> GetLoanDefaultSelectFields(LoanDefaultSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanDefaultSelectFieldsRequest, LoanDefaultSelectFieldsResponse>("getLoanDefaultSelectFields", payload, "parameter");


public Task<LoanDefaultPagedListSelectFieldsResponse> GetLoanDefaultPagedListSelectFields(LoanDefaultPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanDefaultPagedListSelectFieldsRequest, LoanDefaultPagedListSelectFieldsResponse>("getLoanDefaultPagedListSelectFields", payload, "parameter");


public Task<LoanDefaultSearchPagedSelectFieldsResponse> SearchLoanDefaultPagedSelectFields(LoanDefaultSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanDefaultSearchPagedSelectFieldsRequest, LoanDefaultSearchPagedSelectFieldsResponse>("searchLoanDefaultPagedSelectFields", payload, "parameter");


public Task<LoanFieldNameSelectFieldsResponse> GetLoanFieldNameSelectFields(LoanFieldNameSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanFieldNameSelectFieldsRequest, LoanFieldNameSelectFieldsResponse>("getLoanFieldNameSelectFields", payload, "parameter");


public Task<LoanFieldNamePagedListSelectFieldsResponse> GetLoanFieldNamePagedListSelectFields(LoanFieldNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanFieldNamePagedListSelectFieldsRequest, LoanFieldNamePagedListSelectFieldsResponse>("getLoanFieldNamePagedListSelectFields", payload, "parameter");


public Task<LoanFieldNameSearchPagedSelectFieldsResponse> SearchLoanFieldNamePagedSelectFields(LoanFieldNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanFieldNameSearchPagedSelectFieldsRequest, LoanFieldNameSearchPagedSelectFieldsResponse>("searchLoanFieldNamePagedSelectFields", payload, "parameter");


public Task<LoanTypeIdRangeSelectFieldsResponse> GetLoanTypeIdRangeSelectFields(LoanTypeIdRangeSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanTypeIdRangeSelectFieldsRequest, LoanTypeIdRangeSelectFieldsResponse>("getLoanTypeIdRangeSelectFields", payload, "parameter");


public Task<LoanTypeIdRangePagedListSelectFieldsResponse> GetLoanTypeIdRangePagedListSelectFields(LoanTypeIdRangePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanTypeIdRangePagedListSelectFieldsRequest, LoanTypeIdRangePagedListSelectFieldsResponse>("getLoanTypeIdRangePagedListSelectFields", payload, "parameter");


public Task<LoanTypeIdRangeSearchPagedSelectFieldsResponse> SearchLoanTypeIdRangePagedSelectFields(LoanTypeIdRangeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanTypeIdRangeSearchPagedSelectFieldsRequest, LoanTypeIdRangeSearchPagedSelectFieldsResponse>("searchLoanTypeIdRangePagedSelectFields", payload, "parameter");


public Task<LookupTypeNameSelectFieldsResponse> GetLookupTypeNameSelectFields(LookupTypeNameSelectFieldsRequest payload) =>
    _client.RequestAsync<LookupTypeNameSelectFieldsRequest, LookupTypeNameSelectFieldsResponse>("getLookupTypeNameSelectFields", payload, "parameter");


public Task<LookupTypeNamePagedListSelectFieldsResponse> GetLookupTypeNamePagedListSelectFields(LookupTypeNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LookupTypeNamePagedListSelectFieldsRequest, LookupTypeNamePagedListSelectFieldsResponse>("getLookupTypeNamePagedListSelectFields", payload, "parameter");


public Task<LookupTypeNameSearchPagedSelectFieldsResponse> SearchLookupTypeNamePagedSelectFields(LookupTypeNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LookupTypeNameSearchPagedSelectFieldsRequest, LookupTypeNameSearchPagedSelectFieldsResponse>("searchLookupTypeNamePagedSelectFields", payload, "parameter");


public Task<MiscSelectFieldsResponse> GetMiscSelectFields(MiscSelectFieldsRequest payload) =>
    _client.RequestAsync<MiscSelectFieldsRequest, MiscSelectFieldsResponse>("getMiscSelectFields", payload, "parameter");


public Task<MiscPmtSelectFieldsResponse> GetMiscPmtSelectFields(MiscPmtSelectFieldsRequest payload) =>
    _client.RequestAsync<MiscPmtSelectFieldsRequest, MiscPmtSelectFieldsResponse>("getMiscPmtSelectFields", payload, "parameter");


public Task<MoProductSelectFieldsResponse> GetMoProductSelectFields(MoProductSelectFieldsRequest payload) =>
    _client.RequestAsync<MoProductSelectFieldsRequest, MoProductSelectFieldsResponse>("getMoProductSelectFields", payload, "parameter");


public Task<NameFieldNameSelectFieldsResponse> GetNameFieldNameSelectFields(NameFieldNameSelectFieldsRequest payload) =>
    _client.RequestAsync<NameFieldNameSelectFieldsRequest, NameFieldNameSelectFieldsResponse>("getNameFieldNameSelectFields", payload, "parameter");


public Task<NameFieldNamePagedListSelectFieldsResponse> GetNameFieldNamePagedListSelectFields(NameFieldNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<NameFieldNamePagedListSelectFieldsRequest, NameFieldNamePagedListSelectFieldsResponse>("getNameFieldNamePagedListSelectFields", payload, "parameter");


public Task<NameFieldNameSearchPagedSelectFieldsResponse> SearchNameFieldNamePagedSelectFields(NameFieldNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<NameFieldNameSearchPagedSelectFieldsRequest, NameFieldNameSearchPagedSelectFieldsResponse>("searchNameFieldNamePagedSelectFields", payload, "parameter");


public Task<Ncua5300SelectFieldsResponse> GetNcua5300SelectFields(Ncua5300SelectFieldsRequest payload) =>
    _client.RequestAsync<Ncua5300SelectFieldsRequest, Ncua5300SelectFieldsResponse>("getNcua5300SelectFields", payload, "parameter");


public Task<NonRegCcSelectFieldsResponse> GetNonRegCcSelectFields(NonRegCcSelectFieldsRequest payload) =>
    _client.RequestAsync<NonRegCcSelectFieldsRequest, NonRegCcSelectFieldsResponse>("getNonRegCcSelectFields", payload, "parameter");


public Task<NoticeSelectFieldsResponse> GetNoticeSelectFields(NoticeSelectFieldsRequest payload) =>
    _client.RequestAsync<NoticeSelectFieldsRequest, NoticeSelectFieldsResponse>("getNoticeSelectFields", payload, "parameter");


public Task<NoticePagedListSelectFieldsResponse> GetNoticePagedListSelectFields(NoticePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<NoticePagedListSelectFieldsRequest, NoticePagedListSelectFieldsResponse>("getNoticePagedListSelectFields", payload, "parameter");


public Task<NoticeSearchPagedSelectFieldsResponse> SearchNoticePagedSelectFields(NoticeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<NoticeSearchPagedSelectFieldsRequest, NoticeSearchPagedSelectFieldsResponse>("searchNoticePagedSelectFields", payload, "parameter");


public Task<OnlineBlockSelectFieldsResponse> GetOnlineBlockSelectFields(OnlineBlockSelectFieldsRequest payload) =>
    _client.RequestAsync<OnlineBlockSelectFieldsRequest, OnlineBlockSelectFieldsResponse>("getOnlineBlockSelectFields", payload, "parameter");


public Task<OnlineBlockPagedListSelectFieldsResponse> GetOnlineBlockPagedListSelectFields(OnlineBlockPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<OnlineBlockPagedListSelectFieldsRequest, OnlineBlockPagedListSelectFieldsResponse>("getOnlineBlockPagedListSelectFields", payload, "parameter");


public Task<OnlineBlockSearchPagedSelectFieldsResponse> SearchOnlineBlockPagedSelectFields(OnlineBlockSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<OnlineBlockSearchPagedSelectFieldsRequest, OnlineBlockSearchPagedSelectFieldsResponse>("searchOnlineBlockPagedSelectFields", payload, "parameter");


public Task<OnlineCardSelectFieldsResponse> GetOnlineCardSelectFields(OnlineCardSelectFieldsRequest payload) =>
    _client.RequestAsync<OnlineCardSelectFieldsRequest, OnlineCardSelectFieldsResponse>("getOnlineCardSelectFields", payload, "parameter");


public Task<OnlineCardPagedListSelectFieldsResponse> GetOnlineCardPagedListSelectFields(OnlineCardPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<OnlineCardPagedListSelectFieldsRequest, OnlineCardPagedListSelectFieldsResponse>("getOnlineCardPagedListSelectFields", payload, "parameter");


public Task<OnlineCardSearchPagedSelectFieldsResponse> SearchOnlineCardPagedSelectFields(OnlineCardSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<OnlineCardSearchPagedSelectFieldsRequest, OnlineCardSearchPagedSelectFieldsResponse>("searchOnlineCardPagedSelectFields", payload, "parameter");


public Task<OnlineFeeSelectFieldsResponse> GetOnlineFeeSelectFields(OnlineFeeSelectFieldsRequest payload) =>
    _client.RequestAsync<OnlineFeeSelectFieldsRequest, OnlineFeeSelectFieldsResponse>("getOnlineFeeSelectFields", payload, "parameter");


public Task<OnlineFeePagedListSelectFieldsResponse> GetOnlineFeePagedListSelectFields(OnlineFeePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<OnlineFeePagedListSelectFieldsRequest, OnlineFeePagedListSelectFieldsResponse>("getOnlineFeePagedListSelectFields", payload, "parameter");


public Task<OnlineFeeSearchPagedSelectFieldsResponse> SearchOnlineFeePagedSelectFields(OnlineFeeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<OnlineFeeSearchPagedSelectFieldsRequest, OnlineFeeSearchPagedSelectFieldsResponse>("searchOnlineFeePagedSelectFields", payload, "parameter");


public Task<OnlineFileSelectFieldsResponse> GetOnlineFileSelectFields(OnlineFileSelectFieldsRequest payload) =>
    _client.RequestAsync<OnlineFileSelectFieldsRequest, OnlineFileSelectFieldsResponse>("getOnlineFileSelectFields", payload, "parameter");


public Task<OnlineFilePagedListSelectFieldsResponse> GetOnlineFilePagedListSelectFields(OnlineFilePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<OnlineFilePagedListSelectFieldsRequest, OnlineFilePagedListSelectFieldsResponse>("getOnlineFilePagedListSelectFields", payload, "parameter");


public Task<OnlineFileSearchPagedSelectFieldsResponse> SearchOnlineFilePagedSelectFields(OnlineFileSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<OnlineFileSearchPagedSelectFieldsRequest, OnlineFileSearchPagedSelectFieldsResponse>("searchOnlineFilePagedSelectFields", payload, "parameter");


public Task<OnlineFileMgrSelectFieldsResponse> GetOnlineFileMgrSelectFields(OnlineFileMgrSelectFieldsRequest payload) =>
    _client.RequestAsync<OnlineFileMgrSelectFieldsRequest, OnlineFileMgrSelectFieldsResponse>("getOnlineFileMgrSelectFields", payload, "parameter");


public Task<OnlineMainSelectFieldsResponse> GetOnlineMainSelectFields(OnlineMainSelectFieldsRequest payload) =>
    _client.RequestAsync<OnlineMainSelectFieldsRequest, OnlineMainSelectFieldsResponse>("getOnlineMainSelectFields", payload, "parameter");


public Task<OnlineNetSelectFieldsResponse> GetOnlineNetSelectFields(OnlineNetSelectFieldsRequest payload) =>
    _client.RequestAsync<OnlineNetSelectFieldsRequest, OnlineNetSelectFieldsResponse>("getOnlineNetSelectFields", payload, "parameter");


public Task<OnlineNetPagedListSelectFieldsResponse> GetOnlineNetPagedListSelectFields(OnlineNetPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<OnlineNetPagedListSelectFieldsRequest, OnlineNetPagedListSelectFieldsResponse>("getOnlineNetPagedListSelectFields", payload, "parameter");


public Task<OnlineNetSearchPagedSelectFieldsResponse> SearchOnlineNetPagedSelectFields(OnlineNetSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<OnlineNetSearchPagedSelectFieldsRequest, OnlineNetSearchPagedSelectFieldsResponse>("searchOnlineNetPagedSelectFields", payload, "parameter");


public Task<OnlineOutletSelectFieldsResponse> GetOnlineOutletSelectFields(OnlineOutletSelectFieldsRequest payload) =>
    _client.RequestAsync<OnlineOutletSelectFieldsRequest, OnlineOutletSelectFieldsResponse>("getOnlineOutletSelectFields", payload, "parameter");


public Task<OnlineOutletPagedListSelectFieldsResponse> GetOnlineOutletPagedListSelectFields(OnlineOutletPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<OnlineOutletPagedListSelectFieldsRequest, OnlineOutletPagedListSelectFieldsResponse>("getOnlineOutletPagedListSelectFields", payload, "parameter");


public Task<OnlineOutletSearchPagedSelectFieldsResponse> SearchOnlineOutletPagedSelectFields(OnlineOutletSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<OnlineOutletSearchPagedSelectFieldsRequest, OnlineOutletSearchPagedSelectFieldsResponse>("searchOnlineOutletPagedSelectFields", payload, "parameter");


public Task<OnlineSbAddOnSelectFieldsResponse> GetOnlineSbAddOnSelectFields(OnlineSbAddOnSelectFieldsRequest payload) =>
    _client.RequestAsync<OnlineSbAddOnSelectFieldsRequest, OnlineSbAddOnSelectFieldsResponse>("getOnlineSbAddOnSelectFields", payload, "parameter");


public Task<OnlineSbAddOnPagedListSelectFieldsResponse> GetOnlineSbAddOnPagedListSelectFields(OnlineSbAddOnPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<OnlineSbAddOnPagedListSelectFieldsRequest, OnlineSbAddOnPagedListSelectFieldsResponse>("getOnlineSbAddOnPagedListSelectFields", payload, "parameter");


public Task<OnlineSbAddOnSearchPagedSelectFieldsResponse> SearchOnlineSbAddOnPagedSelectFields(OnlineSbAddOnSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<OnlineSbAddOnSearchPagedSelectFieldsRequest, OnlineSbAddOnSearchPagedSelectFieldsResponse>("searchOnlineSbAddOnPagedSelectFields", payload, "parameter");


public Task<OnlineSbaSelectFieldsResponse> GetOnlineSbaSelectFields(OnlineSbaSelectFieldsRequest payload) =>
    _client.RequestAsync<OnlineSbaSelectFieldsRequest, OnlineSbaSelectFieldsResponse>("getOnlineSbaSelectFields", payload, "parameter");


public Task<OnlineSbiSelectFieldsResponse> GetOnlineSbiSelectFields(OnlineSbiSelectFieldsRequest payload) =>
    _client.RequestAsync<OnlineSbiSelectFieldsRequest, OnlineSbiSelectFieldsResponse>("getOnlineSbiSelectFields", payload, "parameter");


public Task<Param360ViewSelectFieldsResponse> GetParam360ViewSelectFields(Param360ViewSelectFieldsRequest payload) =>
    _client.RequestAsync<Param360ViewSelectFieldsRequest, Param360ViewSelectFieldsResponse>("getParam360ViewSelectFields", payload, "parameter");


public Task<PartStatementSelectFieldsResponse> GetPartStatementSelectFields(PartStatementSelectFieldsRequest payload) =>
    _client.RequestAsync<PartStatementSelectFieldsRequest, PartStatementSelectFieldsResponse>("getPartStatementSelectFields", payload, "parameter");


public Task<PartTrackingTypeSelectFieldsResponse> GetPartTrackingTypeSelectFields(PartTrackingTypeSelectFieldsRequest payload) =>
    _client.RequestAsync<PartTrackingTypeSelectFieldsRequest, PartTrackingTypeSelectFieldsResponse>("getPartTrackingTypeSelectFields", payload, "parameter");


public Task<PartTrackingTypePagedListSelectFieldsResponse> GetPartTrackingTypePagedListSelectFields(PartTrackingTypePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<PartTrackingTypePagedListSelectFieldsRequest, PartTrackingTypePagedListSelectFieldsResponse>("getPartTrackingTypePagedListSelectFields", payload, "parameter");


public Task<PartTrackingTypeSearchPagedSelectFieldsResponse> SearchPartTrackingTypePagedSelectFields(PartTrackingTypeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<PartTrackingTypeSearchPagedSelectFieldsRequest, PartTrackingTypeSearchPagedSelectFieldsResponse>("searchPartTrackingTypePagedSelectFields", payload, "parameter");


public Task<ParticipantFieldNameSelectFieldsResponse> GetParticipantFieldNameSelectFields(ParticipantFieldNameSelectFieldsRequest payload) =>
    _client.RequestAsync<ParticipantFieldNameSelectFieldsRequest, ParticipantFieldNameSelectFieldsResponse>("getParticipantFieldNameSelectFields", payload, "parameter");


public Task<ParticipantFieldNamePagedListSelectFieldsResponse> GetParticipantFieldNamePagedListSelectFields(ParticipantFieldNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParticipantFieldNamePagedListSelectFieldsRequest, ParticipantFieldNamePagedListSelectFieldsResponse>("getParticipantFieldNamePagedListSelectFields", payload, "parameter");


public Task<ParticipantFieldNameSearchPagedSelectFieldsResponse> SearchParticipantFieldNamePagedSelectFields(ParticipantFieldNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParticipantFieldNameSearchPagedSelectFieldsRequest, ParticipantFieldNameSearchPagedSelectFieldsResponse>("searchParticipantFieldNamePagedSelectFields", payload, "parameter");


public Task<PayCalcSelectFieldsResponse> GetPayCalcSelectFields(PayCalcSelectFieldsRequest payload) =>
    _client.RequestAsync<PayCalcSelectFieldsRequest, PayCalcSelectFieldsResponse>("getPayCalcSelectFields", payload, "parameter");


public Task<PayCalcPagedListSelectFieldsResponse> GetPayCalcPagedListSelectFields(PayCalcPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<PayCalcPagedListSelectFieldsRequest, PayCalcPagedListSelectFieldsResponse>("getPayCalcPagedListSelectFields", payload, "parameter");


public Task<PayCalcSearchPagedSelectFieldsResponse> SearchPayCalcPagedSelectFields(PayCalcSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<PayCalcSearchPagedSelectFieldsRequest, PayCalcSearchPagedSelectFieldsResponse>("searchPayCalcPagedSelectFields", payload, "parameter");


public Task<PeriodicMtgSelectFieldsResponse> GetPeriodicMtgSelectFields(PeriodicMtgSelectFieldsRequest payload) =>
    _client.RequestAsync<PeriodicMtgSelectFieldsRequest, PeriodicMtgSelectFieldsResponse>("getPeriodicMtgSelectFields", payload, "parameter");


public Task<PlanDefaultSelectFieldsResponse> GetPlanDefaultSelectFields(PlanDefaultSelectFieldsRequest payload) =>
    _client.RequestAsync<PlanDefaultSelectFieldsRequest, PlanDefaultSelectFieldsResponse>("getPlanDefaultSelectFields", payload, "parameter");


public Task<PlanDefaultPagedListSelectFieldsResponse> GetPlanDefaultPagedListSelectFields(PlanDefaultPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<PlanDefaultPagedListSelectFieldsRequest, PlanDefaultPagedListSelectFieldsResponse>("getPlanDefaultPagedListSelectFields", payload, "parameter");


public Task<PlanDefaultSearchPagedSelectFieldsResponse> SearchPlanDefaultPagedSelectFields(PlanDefaultSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<PlanDefaultSearchPagedSelectFieldsRequest, PlanDefaultSearchPagedSelectFieldsResponse>("searchPlanDefaultPagedSelectFields", payload, "parameter");


public Task<PlanFieldNameSelectFieldsResponse> GetPlanFieldNameSelectFields(PlanFieldNameSelectFieldsRequest payload) =>
    _client.RequestAsync<PlanFieldNameSelectFieldsRequest, PlanFieldNameSelectFieldsResponse>("getPlanFieldNameSelectFields", payload, "parameter");


public Task<PlanFieldNamePagedListSelectFieldsResponse> GetPlanFieldNamePagedListSelectFields(PlanFieldNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<PlanFieldNamePagedListSelectFieldsRequest, PlanFieldNamePagedListSelectFieldsResponse>("getPlanFieldNamePagedListSelectFields", payload, "parameter");


public Task<PlanFieldNameSearchPagedSelectFieldsResponse> SearchPlanFieldNamePagedSelectFields(PlanFieldNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<PlanFieldNameSearchPagedSelectFieldsRequest, PlanFieldNameSearchPagedSelectFieldsResponse>("searchPlanFieldNamePagedSelectFields", payload, "parameter");


public Task<PmtAppMethodSelectFieldsResponse> GetPmtAppMethodSelectFields(PmtAppMethodSelectFieldsRequest payload) =>
    _client.RequestAsync<PmtAppMethodSelectFieldsRequest, PmtAppMethodSelectFieldsResponse>("getPmtAppMethodSelectFields", payload, "parameter");


public Task<PmtAppMethodPagedListSelectFieldsResponse> GetPmtAppMethodPagedListSelectFields(PmtAppMethodPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<PmtAppMethodPagedListSelectFieldsRequest, PmtAppMethodPagedListSelectFieldsResponse>("getPmtAppMethodPagedListSelectFields", payload, "parameter");


public Task<PmtAppMethodSearchPagedSelectFieldsResponse> SearchPmtAppMethodPagedSelectFields(PmtAppMethodSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<PmtAppMethodSearchPagedSelectFieldsRequest, PmtAppMethodSearchPagedSelectFieldsResponse>("searchPmtAppMethodPagedSelectFields", payload, "parameter");


public Task<PositivePaySelectFieldsResponse> GetPositivePaySelectFields(PositivePaySelectFieldsRequest payload) =>
    _client.RequestAsync<PositivePaySelectFieldsRequest, PositivePaySelectFieldsResponse>("getPositivePaySelectFields", payload, "parameter");


public Task<PositivePayPagedListSelectFieldsResponse> GetPositivePayPagedListSelectFields(PositivePayPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<PositivePayPagedListSelectFieldsRequest, PositivePayPagedListSelectFieldsResponse>("getPositivePayPagedListSelectFields", payload, "parameter");


public Task<PositivePaySearchPagedSelectFieldsResponse> SearchPositivePayPagedSelectFields(PositivePaySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<PositivePaySearchPagedSelectFieldsRequest, PositivePaySearchPagedSelectFieldsResponse>("searchPositivePayPagedSelectFields", payload, "parameter");


public Task<PreferenceDefaultSelectFieldsResponse> GetPreferenceDefaultSelectFields(PreferenceDefaultSelectFieldsRequest payload) =>
    _client.RequestAsync<PreferenceDefaultSelectFieldsRequest, PreferenceDefaultSelectFieldsResponse>("getPreferenceDefaultSelectFields", payload, "parameter");


public Task<PrivGroupSelectFieldsResponse> GetPrivGroupSelectFields(PrivGroupSelectFieldsRequest payload) =>
    _client.RequestAsync<PrivGroupSelectFieldsRequest, PrivGroupSelectFieldsResponse>("getPrivGroupSelectFields", payload, "parameter");


public Task<PrivGroupPagedListSelectFieldsResponse> GetPrivGroupPagedListSelectFields(PrivGroupPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<PrivGroupPagedListSelectFieldsRequest, PrivGroupPagedListSelectFieldsResponse>("getPrivGroupPagedListSelectFields", payload, "parameter");


public Task<PrivGroupSearchPagedSelectFieldsResponse> SearchPrivGroupPagedSelectFields(PrivGroupSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<PrivGroupSearchPagedSelectFieldsRequest, PrivGroupSearchPagedSelectFieldsResponse>("searchPrivGroupPagedSelectFields", payload, "parameter");


public Task<RegCcSelectFieldsResponse> GetRegCcSelectFields(RegCcSelectFieldsRequest payload) =>
    _client.RequestAsync<RegCcSelectFieldsRequest, RegCcSelectFieldsResponse>("getRegCcSelectFields", payload, "parameter");


public Task<RegCcPagedListSelectFieldsResponse> GetRegCcPagedListSelectFields(RegCcPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<RegCcPagedListSelectFieldsRequest, RegCcPagedListSelectFieldsResponse>("getRegCcPagedListSelectFields", payload, "parameter");


public Task<RegCcSearchPagedSelectFieldsResponse> SearchRegCcPagedSelectFields(RegCcSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<RegCcSearchPagedSelectFieldsRequest, RegCcSearchPagedSelectFieldsResponse>("searchRegCcPagedSelectFields", payload, "parameter");


public Task<ScreenDefinitionSelectFieldsResponse> GetScreenDefinitionSelectFields(ScreenDefinitionSelectFieldsRequest payload) =>
    _client.RequestAsync<ScreenDefinitionSelectFieldsRequest, ScreenDefinitionSelectFieldsResponse>("getScreenDefinitionSelectFields", payload, "parameter");


public Task<ScreenDefinitionPagedListSelectFieldsResponse> GetScreenDefinitionPagedListSelectFields(ScreenDefinitionPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ScreenDefinitionPagedListSelectFieldsRequest, ScreenDefinitionPagedListSelectFieldsResponse>("getScreenDefinitionPagedListSelectFields", payload, "parameter");


public Task<ScreenDefinitionSearchPagedSelectFieldsResponse> SearchScreenDefinitionPagedSelectFields(ScreenDefinitionSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ScreenDefinitionSearchPagedSelectFieldsRequest, ScreenDefinitionSearchPagedSelectFieldsResponse>("searchScreenDefinitionPagedSelectFields", payload, "parameter");


public Task<SecFieldSelectFieldsResponse> GetSecFieldSelectFields(SecFieldSelectFieldsRequest payload) =>
    _client.RequestAsync<SecFieldSelectFieldsRequest, SecFieldSelectFieldsResponse>("getSecFieldSelectFields", payload, "parameter");


public Task<SecFieldPagedListSelectFieldsResponse> GetSecFieldPagedListSelectFields(SecFieldPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<SecFieldPagedListSelectFieldsRequest, SecFieldPagedListSelectFieldsResponse>("getSecFieldPagedListSelectFields", payload, "parameter");


public Task<SecFieldSearchPagedSelectFieldsResponse> SearchSecFieldPagedSelectFields(SecFieldSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<SecFieldSearchPagedSelectFieldsRequest, SecFieldSearchPagedSelectFieldsResponse>("searchSecFieldPagedSelectFields", payload, "parameter");


public Task<SecuritySelectFieldsResponse> GetSecuritySelectFields(SecuritySelectFieldsRequest payload) =>
    _client.RequestAsync<SecuritySelectFieldsRequest, SecuritySelectFieldsResponse>("getSecuritySelectFields", payload, "parameter");


public Task<SecurityPagedListSelectFieldsResponse> GetSecurityPagedListSelectFields(SecurityPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<SecurityPagedListSelectFieldsRequest, SecurityPagedListSelectFieldsResponse>("getSecurityPagedListSelectFields", payload, "parameter");


public Task<SecuritySearchPagedSelectFieldsResponse> SearchSecurityPagedSelectFields(SecuritySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<SecuritySearchPagedSelectFieldsRequest, SecuritySearchPagedSelectFieldsResponse>("searchSecurityPagedSelectFields", payload, "parameter");


public Task<ShareDefaultSelectFieldsResponse> GetShareDefaultSelectFields(ShareDefaultSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareDefaultSelectFieldsRequest, ShareDefaultSelectFieldsResponse>("getShareDefaultSelectFields", payload, "parameter");


public Task<ShareDefaultPagedListSelectFieldsResponse> GetShareDefaultPagedListSelectFields(ShareDefaultPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareDefaultPagedListSelectFieldsRequest, ShareDefaultPagedListSelectFieldsResponse>("getShareDefaultPagedListSelectFields", payload, "parameter");


public Task<ShareDefaultSearchPagedSelectFieldsResponse> SearchShareDefaultPagedSelectFields(ShareDefaultSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareDefaultSearchPagedSelectFieldsRequest, ShareDefaultSearchPagedSelectFieldsResponse>("searchShareDefaultPagedSelectFields", payload, "parameter");


public Task<ShareFieldNameSelectFieldsResponse> GetShareFieldNameSelectFields(ShareFieldNameSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareFieldNameSelectFieldsRequest, ShareFieldNameSelectFieldsResponse>("getShareFieldNameSelectFields", payload, "parameter");


public Task<ShareFieldNamePagedListSelectFieldsResponse> GetShareFieldNamePagedListSelectFields(ShareFieldNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareFieldNamePagedListSelectFieldsRequest, ShareFieldNamePagedListSelectFieldsResponse>("getShareFieldNamePagedListSelectFields", payload, "parameter");


public Task<ShareFieldNameSearchPagedSelectFieldsResponse> SearchShareFieldNamePagedSelectFields(ShareFieldNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareFieldNameSearchPagedSelectFieldsRequest, ShareFieldNameSearchPagedSelectFieldsResponse>("searchShareFieldNamePagedSelectFields", payload, "parameter");


public Task<StatementSelectFieldsResponse> GetStatementSelectFields(StatementSelectFieldsRequest payload) =>
    _client.RequestAsync<StatementSelectFieldsRequest, StatementSelectFieldsResponse>("getStatementSelectFields", payload, "parameter");


public Task<StmtMailNameSelectFieldsResponse> GetStmtMailNameSelectFields(StmtMailNameSelectFieldsRequest payload) =>
    _client.RequestAsync<StmtMailNameSelectFieldsRequest, StmtMailNameSelectFieldsResponse>("getStmtMailNameSelectFields", payload, "parameter");


public Task<StmtMailNamePagedListSelectFieldsResponse> GetStmtMailNamePagedListSelectFields(StmtMailNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<StmtMailNamePagedListSelectFieldsRequest, StmtMailNamePagedListSelectFieldsResponse>("getStmtMailNamePagedListSelectFields", payload, "parameter");


public Task<StmtMailNameSearchPagedSelectFieldsResponse> SearchStmtMailNamePagedSelectFields(StmtMailNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<StmtMailNameSearchPagedSelectFieldsRequest, StmtMailNameSearchPagedSelectFieldsResponse>("searchStmtMailNamePagedSelectFields", payload, "parameter");


public Task<StmtMessagesSelectFieldsResponse> GetStmtMessagesSelectFields(StmtMessagesSelectFieldsRequest payload) =>
    _client.RequestAsync<StmtMessagesSelectFieldsRequest, StmtMessagesSelectFieldsResponse>("getStmtMessagesSelectFields", payload, "parameter");


public Task<StmtMessagesPagedListSelectFieldsResponse> GetStmtMessagesPagedListSelectFields(StmtMessagesPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<StmtMessagesPagedListSelectFieldsRequest, StmtMessagesPagedListSelectFieldsResponse>("getStmtMessagesPagedListSelectFields", payload, "parameter");


public Task<StmtMessagesSearchPagedSelectFieldsResponse> SearchStmtMessagesPagedSelectFields(StmtMessagesSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<StmtMessagesSearchPagedSelectFieldsRequest, StmtMessagesSearchPagedSelectFieldsResponse>("searchStmtMessagesPagedSelectFields", payload, "parameter");


public Task<StockSelectFieldsResponse> GetStockSelectFields(StockSelectFieldsRequest payload) =>
    _client.RequestAsync<StockSelectFieldsRequest, StockSelectFieldsResponse>("getStockSelectFields", payload, "parameter");


public Task<StockPagedListSelectFieldsResponse> GetStockPagedListSelectFields(StockPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<StockPagedListSelectFieldsRequest, StockPagedListSelectFieldsResponse>("getStockPagedListSelectFields", payload, "parameter");


public Task<StockSearchPagedSelectFieldsResponse> SearchStockPagedSelectFields(StockSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<StockSearchPagedSelectFieldsRequest, StockSearchPagedSelectFieldsResponse>("searchStockPagedSelectFields", payload, "parameter");


public Task<SymXClientSelectFieldsResponse> GetSymXClientSelectFields(SymXClientSelectFieldsRequest payload) =>
    _client.RequestAsync<SymXClientSelectFieldsRequest, SymXClientSelectFieldsResponse>("getSymXClientSelectFields", payload, "parameter");


public Task<SymXDeviceMapSelectFieldsResponse> GetSymXDeviceMapSelectFields(SymXDeviceMapSelectFieldsRequest payload) =>
    _client.RequestAsync<SymXDeviceMapSelectFieldsRequest, SymXDeviceMapSelectFieldsResponse>("getSymXDeviceMapSelectFields", payload, "parameter");


public Task<SymXDeviceMapPagedListSelectFieldsResponse> GetSymXDeviceMapPagedListSelectFields(SymXDeviceMapPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<SymXDeviceMapPagedListSelectFieldsRequest, SymXDeviceMapPagedListSelectFieldsResponse>("getSymXDeviceMapPagedListSelectFields", payload, "parameter");


public Task<SymXDeviceMapSearchPagedSelectFieldsResponse> SearchSymXDeviceMapPagedSelectFields(SymXDeviceMapSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<SymXDeviceMapSearchPagedSelectFieldsRequest, SymXDeviceMapSearchPagedSelectFieldsResponse>("searchSymXDeviceMapPagedSelectFields", payload, "parameter");


public Task<SymXGeneralSelectFieldsResponse> GetSymXGeneralSelectFields(SymXGeneralSelectFieldsRequest payload) =>
    _client.RequestAsync<SymXGeneralSelectFieldsRequest, SymXGeneralSelectFieldsResponse>("getSymXGeneralSelectFields", payload, "parameter");


public Task<SymXGeneralPagedListSelectFieldsResponse> GetSymXGeneralPagedListSelectFields(SymXGeneralPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<SymXGeneralPagedListSelectFieldsRequest, SymXGeneralPagedListSelectFieldsResponse>("getSymXGeneralPagedListSelectFields", payload, "parameter");


public Task<SymXGeneralSearchPagedSelectFieldsResponse> SearchSymXGeneralPagedSelectFields(SymXGeneralSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<SymXGeneralSearchPagedSelectFieldsRequest, SymXGeneralSearchPagedSelectFieldsResponse>("searchSymXGeneralPagedSelectFields", payload, "parameter");


public Task<SymXInstanceSelectFieldsResponse> GetSymXInstanceSelectFields(SymXInstanceSelectFieldsRequest payload) =>
    _client.RequestAsync<SymXInstanceSelectFieldsRequest, SymXInstanceSelectFieldsResponse>("getSymXInstanceSelectFields", payload, "parameter");


public Task<SymXInstancePagedListSelectFieldsResponse> GetSymXInstancePagedListSelectFields(SymXInstancePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<SymXInstancePagedListSelectFieldsRequest, SymXInstancePagedListSelectFieldsResponse>("getSymXInstancePagedListSelectFields", payload, "parameter");


public Task<SymXInstanceSearchPagedSelectFieldsResponse> SearchSymXInstancePagedSelectFields(SymXInstanceSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<SymXInstanceSearchPagedSelectFieldsRequest, SymXInstanceSearchPagedSelectFieldsResponse>("searchSymXInstancePagedSelectFields", payload, "parameter");


public Task<SynapsysMrmSelectFieldsResponse> GetSynapsysMrmSelectFields(SynapsysMrmSelectFieldsRequest payload) =>
    _client.RequestAsync<SynapsysMrmSelectFieldsRequest, SynapsysMrmSelectFieldsResponse>("getSynapsysMrmSelectFields", payload, "parameter");


public Task<TcProductSelectFieldsResponse> GetTcProductSelectFields(TcProductSelectFieldsRequest payload) =>
    _client.RequestAsync<TcProductSelectFieldsRequest, TcProductSelectFieldsResponse>("getTcProductSelectFields", payload, "parameter");


public Task<TellerFeeSelectFieldsResponse> GetTellerFeeSelectFields(TellerFeeSelectFieldsRequest payload) =>
    _client.RequestAsync<TellerFeeSelectFieldsRequest, TellerFeeSelectFieldsResponse>("getTellerFeeSelectFields", payload, "parameter");


public Task<TellerFeePagedListSelectFieldsResponse> GetTellerFeePagedListSelectFields(TellerFeePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<TellerFeePagedListSelectFieldsRequest, TellerFeePagedListSelectFieldsResponse>("getTellerFeePagedListSelectFields", payload, "parameter");


public Task<TellerFeeSearchPagedSelectFieldsResponse> SearchTellerFeePagedSelectFields(TellerFeeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<TellerFeeSearchPagedSelectFieldsRequest, TellerFeeSearchPagedSelectFieldsResponse>("searchTellerFeePagedSelectFields", payload, "parameter");


public Task<TellerTranFeeSelectFieldsResponse> GetTellerTranFeeSelectFields(TellerTranFeeSelectFieldsRequest payload) =>
    _client.RequestAsync<TellerTranFeeSelectFieldsRequest, TellerTranFeeSelectFieldsResponse>("getTellerTranFeeSelectFields", payload, "parameter");


public Task<TellerTranValidateSelectFieldsResponse> GetTellerTranValidateSelectFields(TellerTranValidateSelectFieldsRequest payload) =>
    _client.RequestAsync<TellerTranValidateSelectFieldsRequest, TellerTranValidateSelectFieldsResponse>("getTellerTranValidateSelectFields", payload, "parameter");


public Task<TptSelectFieldsResponse> GetTptSelectFields(TptSelectFieldsRequest payload) =>
    _client.RequestAsync<TptSelectFieldsRequest, TptSelectFieldsResponse>("getTptSelectFields", payload, "parameter");


public Task<TptPagedListSelectFieldsResponse> GetTptPagedListSelectFields(TptPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<TptPagedListSelectFieldsRequest, TptPagedListSelectFieldsResponse>("getTptPagedListSelectFields", payload, "parameter");


public Task<TptSearchPagedSelectFieldsResponse> SearchTptPagedSelectFields(TptSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<TptSearchPagedSelectFieldsRequest, TptSearchPagedSelectFieldsResponse>("searchTptPagedSelectFields", payload, "parameter");


public Task<TrackingCodeSelectFieldsResponse> GetTrackingCodeSelectFields(TrackingCodeSelectFieldsRequest payload) =>
    _client.RequestAsync<TrackingCodeSelectFieldsRequest, TrackingCodeSelectFieldsResponse>("getTrackingCodeSelectFields", payload, "parameter");


public Task<TrackingCodePagedListSelectFieldsResponse> GetTrackingCodePagedListSelectFields(TrackingCodePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<TrackingCodePagedListSelectFieldsRequest, TrackingCodePagedListSelectFieldsResponse>("getTrackingCodePagedListSelectFields", payload, "parameter");


public Task<TrackingCodeSearchPagedSelectFieldsResponse> SearchTrackingCodePagedSelectFields(TrackingCodeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<TrackingCodeSearchPagedSelectFieldsRequest, TrackingCodeSearchPagedSelectFieldsResponse>("searchTrackingCodePagedSelectFields", payload, "parameter");


public Task<UserFmSelectFieldsResponse> GetUserFmSelectFields(UserFmSelectFieldsRequest payload) =>
    _client.RequestAsync<UserFmSelectFieldsRequest, UserFmSelectFieldsResponse>("getUserFmSelectFields", payload, "parameter");


public Task<UserTrackingFmSelectFieldsResponse> GetUserTrackingFmSelectFields(UserTrackingFmSelectFieldsRequest payload) =>
    _client.RequestAsync<UserTrackingFmSelectFieldsRequest, UserTrackingFmSelectFieldsResponse>("getUserTrackingFmSelectFields", payload, "parameter");


public Task<UserTrackingTypeSelectFieldsResponse> GetUserTrackingTypeSelectFields(UserTrackingTypeSelectFieldsRequest payload) =>
    _client.RequestAsync<UserTrackingTypeSelectFieldsRequest, UserTrackingTypeSelectFieldsResponse>("getUserTrackingTypeSelectFields", payload, "parameter");


public Task<UserTrackingTypePagedListSelectFieldsResponse> GetUserTrackingTypePagedListSelectFields(UserTrackingTypePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<UserTrackingTypePagedListSelectFieldsRequest, UserTrackingTypePagedListSelectFieldsResponse>("getUserTrackingTypePagedListSelectFields", payload, "parameter");


public Task<UserTrackingTypeSearchPagedSelectFieldsResponse> SearchUserTrackingTypePagedSelectFields(UserTrackingTypeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<UserTrackingTypeSearchPagedSelectFieldsRequest, UserTrackingTypeSearchPagedSelectFieldsResponse>("searchUserTrackingTypePagedSelectFields", payload, "parameter");


public Task<WarningsSelectFieldsResponse> GetWarningsSelectFields(WarningsSelectFieldsRequest payload) =>
    _client.RequestAsync<WarningsSelectFieldsRequest, WarningsSelectFieldsResponse>("getWarningsSelectFields", payload, "parameter");


public Task<WarningsPagedListSelectFieldsResponse> GetWarningsPagedListSelectFields(WarningsPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<WarningsPagedListSelectFieldsRequest, WarningsPagedListSelectFieldsResponse>("getWarningsPagedListSelectFields", payload, "parameter");


public Task<WarningsSearchPagedSelectFieldsResponse> SearchWarningsPagedSelectFields(WarningsSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<WarningsSearchPagedSelectFieldsRequest, WarningsSearchPagedSelectFieldsResponse>("searchWarningsPagedSelectFields", payload, "parameter");


public Task<WdFeeSelectFieldsResponse> GetWdFeeSelectFields(WdFeeSelectFieldsRequest payload) =>
    _client.RequestAsync<WdFeeSelectFieldsRequest, WdFeeSelectFieldsResponse>("getWdFeeSelectFields", payload, "parameter");


public Task<WdFeePagedListSelectFieldsResponse> GetWdFeePagedListSelectFields(WdFeePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<WdFeePagedListSelectFieldsRequest, WdFeePagedListSelectFieldsResponse>("getWdFeePagedListSelectFields", payload, "parameter");


public Task<WdFeeSearchPagedSelectFieldsResponse> SearchWdFeePagedSelectFields(WdFeeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<WdFeeSearchPagedSelectFieldsRequest, WdFeeSearchPagedSelectFieldsResponse>("searchWdFeePagedSelectFields", payload, "parameter");


public Task<WireBfcSelectFieldsResponse> GetWireBfcSelectFields(WireBfcSelectFieldsRequest payload) =>
    _client.RequestAsync<WireBfcSelectFieldsRequest, WireBfcSelectFieldsResponse>("getWireBfcSelectFields", payload, "parameter");


public Task<WireCorpVerSelectFieldsResponse> GetWireCorpVerSelectFields(WireCorpVerSelectFieldsRequest payload) =>
    _client.RequestAsync<WireCorpVerSelectFieldsRequest, WireCorpVerSelectFieldsResponse>("getWireCorpVerSelectFields", payload, "parameter");


public Task<WireIdCodeSelectFieldsResponse> GetWireIdCodeSelectFields(WireIdCodeSelectFieldsRequest payload) =>
    _client.RequestAsync<WireIdCodeSelectFieldsRequest, WireIdCodeSelectFieldsResponse>("getWireIdCodeSelectFields", payload, "parameter");


public Task<WireInCmtCodeSelectFieldsResponse> GetWireInCmtCodeSelectFields(WireInCmtCodeSelectFieldsRequest payload) =>
    _client.RequestAsync<WireInCmtCodeSelectFieldsRequest, WireInCmtCodeSelectFieldsResponse>("getWireInCmtCodeSelectFields", payload, "parameter");


public Task<WireInCmtCodePagedListSelectFieldsResponse> GetWireInCmtCodePagedListSelectFields(WireInCmtCodePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<WireInCmtCodePagedListSelectFieldsRequest, WireInCmtCodePagedListSelectFieldsResponse>("getWireInCmtCodePagedListSelectFields", payload, "parameter");


public Task<WireInCmtCodeSearchPagedSelectFieldsResponse> SearchWireInCmtCodePagedSelectFields(WireInCmtCodeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<WireInCmtCodeSearchPagedSelectFieldsRequest, WireInCmtCodeSearchPagedSelectFieldsResponse>("searchWireInCmtCodePagedSelectFields", payload, "parameter");


public Task<WireMiscSelectFieldsResponse> GetWireMiscSelectFields(WireMiscSelectFieldsRequest payload) =>
    _client.RequestAsync<WireMiscSelectFieldsRequest, WireMiscSelectFieldsResponse>("getWireMiscSelectFields", payload, "parameter");


public Task<WireOutCmtCodeSelectFieldsResponse> GetWireOutCmtCodeSelectFields(WireOutCmtCodeSelectFieldsRequest payload) =>
    _client.RequestAsync<WireOutCmtCodeSelectFieldsRequest, WireOutCmtCodeSelectFieldsResponse>("getWireOutCmtCodeSelectFields", payload, "parameter");


public Task<WireOutCmtCodePagedListSelectFieldsResponse> GetWireOutCmtCodePagedListSelectFields(WireOutCmtCodePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<WireOutCmtCodePagedListSelectFieldsRequest, WireOutCmtCodePagedListSelectFieldsResponse>("getWireOutCmtCodePagedListSelectFields", payload, "parameter");


public Task<WireOutCmtCodeSearchPagedSelectFieldsResponse> SearchWireOutCmtCodePagedSelectFields(WireOutCmtCodeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<WireOutCmtCodeSearchPagedSelectFieldsRequest, WireOutCmtCodeSearchPagedSelectFieldsResponse>("searchWireOutCmtCodePagedSelectFields", payload, "parameter");


public Task<WireTypeCodeSelectFieldsResponse> GetWireTypeCodeSelectFields(WireTypeCodeSelectFieldsRequest payload) =>
    _client.RequestAsync<WireTypeCodeSelectFieldsRequest, WireTypeCodeSelectFieldsResponse>("getWireTypeCodeSelectFields", payload, "parameter");


public Task<WorkFlowRepGenSelectFieldsResponse> GetWorkFlowRepGenSelectFields(WorkFlowRepGenSelectFieldsRequest payload) =>
    _client.RequestAsync<WorkFlowRepGenSelectFieldsRequest, WorkFlowRepGenSelectFieldsResponse>("getWorkFlowRepGenSelectFields", payload, "parameter");


public Task<WorkFlowRepGenPagedListSelectFieldsResponse> GetWorkFlowRepGenPagedListSelectFields(WorkFlowRepGenPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<WorkFlowRepGenPagedListSelectFieldsRequest, WorkFlowRepGenPagedListSelectFieldsResponse>("getWorkFlowRepGenPagedListSelectFields", payload, "parameter");


public Task<WorkFlowRepGenSearchPagedSelectFieldsResponse> SearchWorkFlowRepGenPagedSelectFields(WorkFlowRepGenSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<WorkFlowRepGenSearchPagedSelectFieldsRequest, WorkFlowRepGenSearchPagedSelectFieldsResponse>("searchWorkFlowRepGenPagedSelectFields", payload, "parameter");


public Task<YellowHammerSelectFieldsResponse> GetYellowHammerSelectFields(YellowHammerSelectFieldsRequest payload) =>
    _client.RequestAsync<YellowHammerSelectFieldsRequest, YellowHammerSelectFieldsResponse>("getYellowHammerSelectFields", payload, "parameter");


public Task<AccountDefaultUpdateByIDResponse> UpdateAccountDefaultByID(UpdateAccountDefaultByIDRequest payload) =>
    _client.RequestAsync<UpdateAccountDefaultByIDRequest, AccountDefaultUpdateByIDResponse>("updateAccountDefaultByID", payload, "parameter");


public Task<AccountFieldNameUpdateByIDResponse> UpdateAccountFieldNameByID(UpdateAccountFieldNameByIDRequest payload) =>
    _client.RequestAsync<UpdateAccountFieldNameByIDRequest, AccountFieldNameUpdateByIDResponse>("updateAccountFieldNameByID", payload, "parameter");


public Task<AcctLimitUpdateByIDResponse> UpdateAcctLimitByID(UpdateAcctLimitByIDRequest payload) =>
    _client.RequestAsync<UpdateAcctLimitByIDRequest, AcctLimitUpdateByIDResponse>("updateAcctLimitByID", payload, "parameter");


public Task<AcctMembGrpDescUpdateByIDResponse> UpdateAcctMembGrpDescByID(UpdateAcctMembGrpDescByIDRequest payload) =>
    _client.RequestAsync<UpdateAcctMembGrpDescByIDRequest, AcctMembGrpDescUpdateByIDResponse>("updateAcctMembGrpDescByID", payload, "parameter");


public Task<AcctRelCodeDescUpdateByIDResponse> UpdateAcctRelCodeDescByID(UpdateAcctRelCodeDescByIDRequest payload) =>
    _client.RequestAsync<UpdateAcctRelCodeDescByIDRequest, AcctRelCodeDescUpdateByIDResponse>("updateAcctRelCodeDescByID", payload, "parameter");


public Task<AcctTrackingTypeUpdateByIDResponse> UpdateAcctTrackingTypeByID(UpdateAcctTrackingTypeByIDRequest payload) =>
    _client.RequestAsync<UpdateAcctTrackingTypeByIDRequest, AcctTrackingTypeUpdateByIDResponse>("updateAcctTrackingTypeByID", payload, "parameter");


public Task<AcctTypeNameUpdateByIDResponse> UpdateAcctTypeNameByID(UpdateAcctTypeNameByIDRequest payload) =>
    _client.RequestAsync<UpdateAcctTypeNameByIDRequest, AcctTypeNameUpdateByIDResponse>("updateAcctTypeNameByID", payload, "parameter");


public Task<AcsGlobalUpdateByIDResponse> UpdateAcsGlobalByID(UpdateAcsGlobalByIDRequest payload) =>
    _client.RequestAsync<UpdateAcsGlobalByIDRequest, AcsGlobalUpdateByIDResponse>("updateAcsGlobalByID", payload, "parameter");


public Task<AcsServiceUpdateByIDResponse> UpdateAcsServiceByID(UpdateAcsServiceByIDRequest payload) =>
    _client.RequestAsync<UpdateAcsServiceByIDRequest, AcsServiceUpdateByIDResponse>("updateAcsServiceByID", payload, "parameter");


public Task<AnalysisFloatUpdateByIDResponse> UpdateAnalysisFloatByID(UpdateAnalysisFloatByIDRequest payload) =>
    _client.RequestAsync<UpdateAnalysisFloatByIDRequest, AnalysisFloatUpdateByIDResponse>("updateAnalysisFloatByID", payload, "parameter");


public Task<AnalysisGlobalUpdateByIDResponse> UpdateAnalysisGlobalByID(UpdateAnalysisGlobalByIDRequest payload) =>
    _client.RequestAsync<UpdateAnalysisGlobalByIDRequest, AnalysisGlobalUpdateByIDResponse>("updateAnalysisGlobalByID", payload, "parameter");


public Task<AnalysisPlanUpdateByIDResponse> UpdateAnalysisPlanByID(UpdateAnalysisPlanByIDRequest payload) =>
    _client.RequestAsync<UpdateAnalysisPlanByIDRequest, AnalysisPlanUpdateByIDResponse>("updateAnalysisPlanByID", payload, "parameter");


public Task<ApMiscUpdateByIDResponse> UpdateApMiscByID(UpdateApMiscByIDRequest payload) =>
    _client.RequestAsync<UpdateApMiscByIDRequest, ApMiscUpdateByIDResponse>("updateApMiscByID", payload, "parameter");


public Task<ApWorkFlowUpdateByIDResponse> UpdateApWorkFlowByID(UpdateApWorkFlowByIDRequest payload) =>
    _client.RequestAsync<UpdateApWorkFlowByIDRequest, ApWorkFlowUpdateByIDResponse>("updateApWorkFlowByID", payload, "parameter");


public Task<BatchRcUpdateByIDResponse> UpdateBatchRcByID(UpdateBatchRcByIDRequest payload) =>
    _client.RequestAsync<UpdateBatchRcByIDRequest, BatchRcUpdateByIDResponse>("updateBatchRcByID", payload, "parameter");


public Task<CardDefaultUpdateByIDResponse> UpdateCardDefaultByID(UpdateCardDefaultByIDRequest payload) =>
    _client.RequestAsync<UpdateCardDefaultByIDRequest, CardDefaultUpdateByIDResponse>("updateCardDefaultByID", payload, "parameter");


public Task<CardWizUpdateByIDResponse> UpdateCardWizByID(UpdateCardWizByIDRequest payload) =>
    _client.RequestAsync<UpdateCardWizByIDRequest, CardWizUpdateByIDResponse>("updateCardWizByID", payload, "parameter");


public Task<CdmUpdateByIDResponse> UpdateCdmByID(UpdateCdmByIDRequest payload) =>
    _client.RequestAsync<UpdateCdmByIDRequest, CdmUpdateByIDResponse>("updateCdmByID", payload, "parameter");


public Task<CdmCommonUpdateByIDResponse> UpdateCdmCommonByID(UpdateCdmCommonByIDRequest payload) =>
    _client.RequestAsync<UpdateCdmCommonByIDRequest, CdmCommonUpdateByIDResponse>("updateCdmCommonByID", payload, "parameter");


public Task<CheckOrderDefaultUpdateByIDResponse> UpdateCheckOrderDefaultByID(UpdateCheckOrderDefaultByIDRequest payload) =>
    _client.RequestAsync<UpdateCheckOrderDefaultByIDRequest, CheckOrderDefaultUpdateByIDResponse>("updateCheckOrderDefaultByID", payload, "parameter");


public Task<CollateralTypeUpdateByIDResponse> UpdateCollateralTypeByID(UpdateCollateralTypeByIDRequest payload) =>
    _client.RequestAsync<UpdateCollateralTypeByIDRequest, CollateralTypeUpdateByIDResponse>("updateCollateralTypeByID", payload, "parameter");


public Task<CollatrlTrackingTypeUpdateByIDResponse> UpdateCollatrlTrackingTypeByID(UpdateCollatrlTrackingTypeByIDRequest payload) =>
    _client.RequestAsync<UpdateCollatrlTrackingTypeByIDRequest, CollatrlTrackingTypeUpdateByIDResponse>("updateCollatrlTrackingTypeByID", payload, "parameter");


public Task<CommentUpdateByIDResponse> UpdateCommentByID(UpdateCommentByIDRequest payload) =>
    _client.RequestAsync<UpdateCommentByIDRequest, CommentUpdateByIDResponse>("updateCommentByID", payload, "parameter");


public Task<CpLetterUpdateByIDResponse> UpdateCpLetterByID(UpdateCpLetterByIDRequest payload) =>
    _client.RequestAsync<UpdateCpLetterByIDRequest, CpLetterUpdateByIDResponse>("updateCpLetterByID", payload, "parameter");


public Task<CpWorkCardUpdateByIDResponse> UpdateCpWorkCardByID(UpdateCpWorkCardByIDRequest payload) =>
    _client.RequestAsync<UpdateCpWorkCardByIDRequest, CpWorkCardUpdateByIDResponse>("updateCpWorkCardByID", payload, "parameter");


public Task<CrsUpdateByIDResponse> UpdateCrsByID(UpdateCrsByIDRequest payload) =>
    _client.RequestAsync<UpdateCrsByIDRequest, CrsUpdateByIDResponse>("updateCrsByID", payload, "parameter");


public Task<CurrencyCtrlUpdateByIDResponse> UpdateCurrencyCtrlByID(UpdateCurrencyCtrlByIDRequest payload) =>
    _client.RequestAsync<UpdateCurrencyCtrlByIDRequest, CurrencyCtrlUpdateByIDResponse>("updateCurrencyCtrlByID", payload, "parameter");


public Task<DealerStatementUpdateByIDResponse> UpdateDealerStatementByID(UpdateDealerStatementByIDRequest payload) =>
    _client.RequestAsync<UpdateDealerStatementByIDRequest, DealerStatementUpdateByIDResponse>("updateDealerStatementByID", payload, "parameter");


public Task<DebtRatioUpdateByIDResponse> UpdateDebtRatioByID(UpdateDebtRatioByIDRequest payload) =>
    _client.RequestAsync<UpdateDebtRatioByIDRequest, DebtRatioUpdateByIDResponse>("updateDebtRatioByID", payload, "parameter");


public Task<DisclosureUpdateByIDResponse> UpdateDisclosureByID(UpdateDisclosureByIDRequest payload) =>
    _client.RequestAsync<UpdateDisclosureByIDRequest, DisclosureUpdateByIDResponse>("updateDisclosureByID", payload, "parameter");


public Task<DivIndexLocalUpdateByIDResponse> UpdateDivIndexLocalByID(UpdateDivIndexLocalByIDRequest payload) =>
    _client.RequestAsync<UpdateDivIndexLocalByIDRequest, DivIndexLocalUpdateByIDResponse>("updateDivIndexLocalByID", payload, "parameter");


public Task<DivTableUpdateByIDResponse> UpdateDivTableByID(UpdateDivTableByIDRequest payload) =>
    _client.RequestAsync<UpdateDivTableByIDRequest, DivTableUpdateByIDResponse>("updateDivTableByID", payload, "parameter");


public Task<DocExcpNoticeUpdateByIDResponse> UpdateDocExcpNoticeByID(UpdateDocExcpNoticeByIDRequest payload) =>
    _client.RequestAsync<UpdateDocExcpNoticeByIDRequest, DocExcpNoticeUpdateByIDResponse>("updateDocExcpNoticeByID", payload, "parameter");


public Task<DocTypeDefaultUpdateByIDResponse> UpdateDocTypeDefaultByID(UpdateDocTypeDefaultByIDRequest payload) =>
    _client.RequestAsync<UpdateDocTypeDefaultByIDRequest, DocTypeDefaultUpdateByIDResponse>("updateDocTypeDefaultByID", payload, "parameter");


public Task<DocumentNumberUpdateByIDResponse> UpdateDocumentNumberByID(UpdateDocumentNumberByIDRequest payload) =>
    _client.RequestAsync<UpdateDocumentNumberByIDRequest, DocumentNumberUpdateByIDResponse>("updateDocumentNumberByID", payload, "parameter");


public Task<EpisysDbExtractUpdateByIDResponse> UpdateEpisysDbExtractByID(UpdateEpisysDbExtractByIDRequest payload) =>
    _client.RequestAsync<UpdateEpisysDbExtractByIDRequest, EpisysDbExtractUpdateByIDResponse>("updateEpisysDbExtractByID", payload, "parameter");


public Task<EscrowAnalysisUpdateByIDResponse> UpdateEscrowAnalysisByID(UpdateEscrowAnalysisByIDRequest payload) =>
    _client.RequestAsync<UpdateEscrowAnalysisByIDRequest, EscrowAnalysisUpdateByIDResponse>("updateEscrowAnalysisByID", payload, "parameter");


public Task<EscrowTypeUpdateByIDResponse> UpdateEscrowTypeByID(UpdateEscrowTypeByIDRequest payload) =>
    _client.RequestAsync<UpdateEscrowTypeByIDRequest, EscrowTypeUpdateByIDResponse>("updateEscrowTypeByID", payload, "parameter");


public Task<ExtLoanUpdateByIDResponse> UpdateExtLoanByID(UpdateExtLoanByIDRequest payload) =>
    _client.RequestAsync<UpdateExtLoanByIDRequest, ExtLoanUpdateByIDResponse>("updateExtLoanByID", payload, "parameter");


public Task<GlCategoryUpdateByIDResponse> UpdateGlCategoryByID(UpdateGlCategoryByIDRequest payload) =>
    _client.RequestAsync<UpdateGlCategoryByIDRequest, GlCategoryUpdateByIDResponse>("updateGlCategoryByID", payload, "parameter");


public Task<GlCodeUpdateByIDResponse> UpdateGlCodeByID(UpdateGlCodeByIDRequest payload) =>
    _client.RequestAsync<UpdateGlCodeByIDRequest, GlCodeUpdateByIDResponse>("updateGlCodeByID", payload, "parameter");


public Task<GlTableUpdateByIDResponse> UpdateGlTableByID(UpdateGlTableByIDRequest payload) =>
    _client.RequestAsync<UpdateGlTableByIDRequest, GlTableUpdateByIDResponse>("updateGlTableByID", payload, "parameter");


public Task<GlTrackingTypeUpdateByIDResponse> UpdateGlTrackingTypeByID(UpdateGlTrackingTypeByIDRequest payload) =>
    _client.RequestAsync<UpdateGlTrackingTypeByIDRequest, GlTrackingTypeUpdateByIDResponse>("updateGlTrackingTypeByID", payload, "parameter");


public Task<GlxLateUpdateByIDResponse> UpdateGlxLateByID(UpdateGlxLateByIDRequest payload) =>
    _client.RequestAsync<UpdateGlxLateByIDRequest, GlxLateUpdateByIDResponse>("updateGlxLateByID", payload, "parameter");


public Task<IdentIdTypeDescUpdateByIDResponse> UpdateIdentIdTypeDescByID(UpdateIdentIdTypeDescByIDRequest payload) =>
    _client.RequestAsync<UpdateIdentIdTypeDescByIDRequest, IdentIdTypeDescUpdateByIDResponse>("updateIdentIdTypeDescByID", payload, "parameter");


public Task<ImagingUpdateByIDResponse> UpdateImagingByID(UpdateImagingByIDRequest payload) =>
    _client.RequestAsync<UpdateImagingByIDRequest, ImagingUpdateByIDResponse>("updateImagingByID", payload, "parameter");


public Task<InqDefinitionUpdateByIDResponse> UpdateInqDefinitionByID(UpdateInqDefinitionByIDRequest payload) =>
    _client.RequestAsync<UpdateInqDefinitionByIDRequest, InqDefinitionUpdateByIDResponse>("updateInqDefinitionByID", payload, "parameter");


public Task<InsTableUpdateByIDResponse> UpdateInsTableByID(UpdateInsTableByIDRequest payload) =>
    _client.RequestAsync<UpdateInsTableByIDRequest, InsTableUpdateByIDResponse>("updateInsTableByID", payload, "parameter");


public Task<InsTypeUpdateByIDResponse> UpdateInsTypeByID(UpdateInsTypeByIDRequest payload) =>
    _client.RequestAsync<UpdateInsTypeByIDRequest, InsTypeUpdateByIDResponse>("updateInsTypeByID", payload, "parameter");


public Task<InstitutionUpdateByIDResponse> UpdateInstitutionByID(UpdateInstitutionByIDRequest payload) =>
    _client.RequestAsync<UpdateInstitutionByIDRequest, InstitutionUpdateByIDResponse>("updateInstitutionByID", payload, "parameter");


public Task<IntIndexUpdateByIDResponse> UpdateIntIndexByID(UpdateIntIndexByIDRequest payload) =>
    _client.RequestAsync<UpdateIntIndexByIDRequest, IntIndexUpdateByIDResponse>("updateIntIndexByID", payload, "parameter");


public Task<IntTypeUpdateByIDResponse> UpdateIntTypeByID(UpdateIntTypeByIDRequest payload) =>
    _client.RequestAsync<UpdateIntTypeByIDRequest, IntTypeUpdateByIDResponse>("updateIntTypeByID", payload, "parameter");


public Task<InventoryCopiedFldsUpdateByIDResponse> UpdateInventoryCopiedFldsByID(UpdateInventoryCopiedFldsByIDRequest payload) =>
    _client.RequestAsync<UpdateInventoryCopiedFldsByIDRequest, InventoryCopiedFldsUpdateByIDResponse>("updateInventoryCopiedFldsByID", payload, "parameter");


public Task<InventoryDefaultUpdateByIDResponse> UpdateInventoryDefaultByID(UpdateInventoryDefaultByIDRequest payload) =>
    _client.RequestAsync<UpdateInventoryDefaultByIDRequest, InventoryDefaultUpdateByIDResponse>("updateInventoryDefaultByID", payload, "parameter");


public Task<InventoryFieldNameUpdateByIDResponse> UpdateInventoryFieldNameByID(UpdateInventoryFieldNameByIDRequest payload) =>
    _client.RequestAsync<UpdateInventoryFieldNameByIDRequest, InventoryFieldNameUpdateByIDResponse>("updateInventoryFieldNameByID", payload, "parameter");


public Task<InventoryGeneralUpdateByIDResponse> UpdateInventoryGeneralByID(UpdateInventoryGeneralByIDRequest payload) =>
    _client.RequestAsync<UpdateInventoryGeneralByIDRequest, InventoryGeneralUpdateByIDResponse>("updateInventoryGeneralByID", payload, "parameter");


public Task<InventoryTypeUpdateByIDResponse> UpdateInventoryTypeByID(UpdateInventoryTypeByIDRequest payload) =>
    _client.RequestAsync<UpdateInventoryTypeByIDRequest, InventoryTypeUpdateByIDResponse>("updateInventoryTypeByID", payload, "parameter");


public Task<IrsBkupWithholdUpdateByIDResponse> UpdateIrsBkupWithholdByID(UpdateIrsBkupWithholdByIDRequest payload) =>
    _client.RequestAsync<UpdateIrsBkupWithholdByIDRequest, IrsBkupWithholdUpdateByIDResponse>("updateIrsBkupWithholdByID", payload, "parameter");


public Task<IrsContriLimitUpdateByIDResponse> UpdateIrsContriLimitByID(UpdateIrsContriLimitByIDRequest payload) =>
    _client.RequestAsync<UpdateIrsContriLimitByIDRequest, IrsContriLimitUpdateByIDResponse>("updateIrsContriLimitByID", payload, "parameter");


public Task<ItcFraudUpdateByIDResponse> UpdateItcFraudByID(UpdateItcFraudByIDRequest payload) =>
    _client.RequestAsync<UpdateItcFraudByIDRequest, ItcFraudUpdateByIDResponse>("updateItcFraudByID", payload, "parameter");


public Task<ItcInstallationUpdateByIDResponse> UpdateItcInstallationByID(UpdateItcInstallationByIDRequest payload) =>
    _client.RequestAsync<UpdateItcInstallationByIDRequest, ItcInstallationUpdateByIDResponse>("updateItcInstallationByID", payload, "parameter");


public Task<LateChgUpdateByIDResponse> UpdateLateChgByID(UpdateLateChgByIDRequest payload) =>
    _client.RequestAsync<UpdateLateChgByIDRequest, LateChgUpdateByIDResponse>("updateLateChgByID", payload, "parameter");


public Task<LnSegmentDefaultUpdateByIDResponse> UpdateLnSegmentDefaultByID(UpdateLnSegmentDefaultByIDRequest payload) =>
    _client.RequestAsync<UpdateLnSegmentDefaultByIDRequest, LnSegmentDefaultUpdateByIDResponse>("updateLnSegmentDefaultByID", payload, "parameter");


public Task<LoanAppCopiedFldsUpdateByIDResponse> UpdateLoanAppCopiedFldsByID(UpdateLoanAppCopiedFldsByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanAppCopiedFldsByIDRequest, LoanAppCopiedFldsUpdateByIDResponse>("updateLoanAppCopiedFldsByID", payload, "parameter");


public Task<LoanAppDefaultUpdateByIDResponse> UpdateLoanAppDefaultByID(UpdateLoanAppDefaultByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanAppDefaultByIDRequest, LoanAppDefaultUpdateByIDResponse>("updateLoanAppDefaultByID", payload, "parameter");


public Task<LoanAppDenialUpdateByIDResponse> UpdateLoanAppDenialByID(UpdateLoanAppDenialByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanAppDenialByIDRequest, LoanAppDenialUpdateByIDResponse>("updateLoanAppDenialByID", payload, "parameter");


public Task<LoanAppFieldNameUpdateByIDResponse> UpdateLoanAppFieldNameByID(UpdateLoanAppFieldNameByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanAppFieldNameByIDRequest, LoanAppFieldNameUpdateByIDResponse>("updateLoanAppFieldNameByID", payload, "parameter");


public Task<LoanAppFormPktUpdateByIDResponse> UpdateLoanAppFormPktByID(UpdateLoanAppFormPktByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanAppFormPktByIDRequest, LoanAppFormPktUpdateByIDResponse>("updateLoanAppFormPktByID", payload, "parameter");


public Task<LoanAppMiscUpdateByIDResponse> UpdateLoanAppMiscByID(UpdateLoanAppMiscByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanAppMiscByIDRequest, LoanAppMiscUpdateByIDResponse>("updateLoanAppMiscByID", payload, "parameter");


public Task<LoanAppPrintAppUpdateByIDResponse> UpdateLoanAppPrintAppByID(UpdateLoanAppPrintAppByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanAppPrintAppByIDRequest, LoanAppPrintAppUpdateByIDResponse>("updateLoanAppPrintAppByID", payload, "parameter");


public Task<LoanAppReusedFldsUpdateByIDResponse> UpdateLoanAppReusedFldsByID(UpdateLoanAppReusedFldsByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanAppReusedFldsByIDRequest, LoanAppReusedFldsUpdateByIDResponse>("updateLoanAppReusedFldsByID", payload, "parameter");


public Task<LoanAppVerFormUpdateByIDResponse> UpdateLoanAppVerFormByID(UpdateLoanAppVerFormByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanAppVerFormByIDRequest, LoanAppVerFormUpdateByIDResponse>("updateLoanAppVerFormByID", payload, "parameter");


public Task<LoanAppViewAppUpdateByIDResponse> UpdateLoanAppViewAppByID(UpdateLoanAppViewAppByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanAppViewAppByIDRequest, LoanAppViewAppUpdateByIDResponse>("updateLoanAppViewAppByID", payload, "parameter");


public Task<LoanAppWorkFlowUpdateByIDResponse> UpdateLoanAppWorkFlowByID(UpdateLoanAppWorkFlowByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanAppWorkFlowByIDRequest, LoanAppWorkFlowUpdateByIDResponse>("updateLoanAppWorkFlowByID", payload, "parameter");


public Task<LoanDefaultUpdateByIDResponse> UpdateLoanDefaultByID(UpdateLoanDefaultByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanDefaultByIDRequest, LoanDefaultUpdateByIDResponse>("updateLoanDefaultByID", payload, "parameter");


public Task<LoanFieldNameUpdateByIDResponse> UpdateLoanFieldNameByID(UpdateLoanFieldNameByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanFieldNameByIDRequest, LoanFieldNameUpdateByIDResponse>("updateLoanFieldNameByID", payload, "parameter");


public Task<LoanTypeIdRangeUpdateByIDResponse> UpdateLoanTypeIdRangeByID(UpdateLoanTypeIdRangeByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanTypeIdRangeByIDRequest, LoanTypeIdRangeUpdateByIDResponse>("updateLoanTypeIdRangeByID", payload, "parameter");


public Task<LookupTypeNameUpdateByIDResponse> UpdateLookupTypeNameByID(UpdateLookupTypeNameByIDRequest payload) =>
    _client.RequestAsync<UpdateLookupTypeNameByIDRequest, LookupTypeNameUpdateByIDResponse>("updateLookupTypeNameByID", payload, "parameter");


public Task<MiscUpdateByIDResponse> UpdateMiscByID(UpdateMiscByIDRequest payload) =>
    _client.RequestAsync<UpdateMiscByIDRequest, MiscUpdateByIDResponse>("updateMiscByID", payload, "parameter");


public Task<MiscPmtUpdateByIDResponse> UpdateMiscPmtByID(UpdateMiscPmtByIDRequest payload) =>
    _client.RequestAsync<UpdateMiscPmtByIDRequest, MiscPmtUpdateByIDResponse>("updateMiscPmtByID", payload, "parameter");


public Task<MoProductUpdateByIDResponse> UpdateMoProductByID(UpdateMoProductByIDRequest payload) =>
    _client.RequestAsync<UpdateMoProductByIDRequest, MoProductUpdateByIDResponse>("updateMoProductByID", payload, "parameter");


public Task<NameFieldNameUpdateByIDResponse> UpdateNameFieldNameByID(UpdateNameFieldNameByIDRequest payload) =>
    _client.RequestAsync<UpdateNameFieldNameByIDRequest, NameFieldNameUpdateByIDResponse>("updateNameFieldNameByID", payload, "parameter");


public Task<Ncua5300UpdateByIDResponse> UpdateNcua5300ByID(UpdateNcua5300ByIDRequest payload) =>
    _client.RequestAsync<UpdateNcua5300ByIDRequest, Ncua5300UpdateByIDResponse>("updateNcua5300ByID", payload, "parameter");


public Task<NonRegCcUpdateByIDResponse> UpdateNonRegCcByID(UpdateNonRegCcByIDRequest payload) =>
    _client.RequestAsync<UpdateNonRegCcByIDRequest, NonRegCcUpdateByIDResponse>("updateNonRegCcByID", payload, "parameter");


public Task<NoticeUpdateByIDResponse> UpdateNoticeByID(UpdateNoticeByIDRequest payload) =>
    _client.RequestAsync<UpdateNoticeByIDRequest, NoticeUpdateByIDResponse>("updateNoticeByID", payload, "parameter");


public Task<OnlineBlockUpdateByIDResponse> UpdateOnlineBlockByID(UpdateOnlineBlockByIDRequest payload) =>
    _client.RequestAsync<UpdateOnlineBlockByIDRequest, OnlineBlockUpdateByIDResponse>("updateOnlineBlockByID", payload, "parameter");


public Task<OnlineCardUpdateByIDResponse> UpdateOnlineCardByID(UpdateOnlineCardByIDRequest payload) =>
    _client.RequestAsync<UpdateOnlineCardByIDRequest, OnlineCardUpdateByIDResponse>("updateOnlineCardByID", payload, "parameter");


public Task<OnlineFeeUpdateByIDResponse> UpdateOnlineFeeByID(UpdateOnlineFeeByIDRequest payload) =>
    _client.RequestAsync<UpdateOnlineFeeByIDRequest, OnlineFeeUpdateByIDResponse>("updateOnlineFeeByID", payload, "parameter");


public Task<OnlineFileUpdateByIDResponse> UpdateOnlineFileByID(UpdateOnlineFileByIDRequest payload) =>
    _client.RequestAsync<UpdateOnlineFileByIDRequest, OnlineFileUpdateByIDResponse>("updateOnlineFileByID", payload, "parameter");


public Task<OnlineFileMgrUpdateByIDResponse> UpdateOnlineFileMgrByID(UpdateOnlineFileMgrByIDRequest payload) =>
    _client.RequestAsync<UpdateOnlineFileMgrByIDRequest, OnlineFileMgrUpdateByIDResponse>("updateOnlineFileMgrByID", payload, "parameter");


public Task<OnlineMainUpdateByIDResponse> UpdateOnlineMainByID(UpdateOnlineMainByIDRequest payload) =>
    _client.RequestAsync<UpdateOnlineMainByIDRequest, OnlineMainUpdateByIDResponse>("updateOnlineMainByID", payload, "parameter");


public Task<OnlineNetUpdateByIDResponse> UpdateOnlineNetByID(UpdateOnlineNetByIDRequest payload) =>
    _client.RequestAsync<UpdateOnlineNetByIDRequest, OnlineNetUpdateByIDResponse>("updateOnlineNetByID", payload, "parameter");


public Task<OnlineOutletUpdateByIDResponse> UpdateOnlineOutletByID(UpdateOnlineOutletByIDRequest payload) =>
    _client.RequestAsync<UpdateOnlineOutletByIDRequest, OnlineOutletUpdateByIDResponse>("updateOnlineOutletByID", payload, "parameter");


public Task<OnlineSbAddOnUpdateByIDResponse> UpdateOnlineSbAddOnByID(UpdateOnlineSbAddOnByIDRequest payload) =>
    _client.RequestAsync<UpdateOnlineSbAddOnByIDRequest, OnlineSbAddOnUpdateByIDResponse>("updateOnlineSbAddOnByID", payload, "parameter");


public Task<OnlineSbaUpdateByIDResponse> UpdateOnlineSbaByID(UpdateOnlineSbaByIDRequest payload) =>
    _client.RequestAsync<UpdateOnlineSbaByIDRequest, OnlineSbaUpdateByIDResponse>("updateOnlineSbaByID", payload, "parameter");


public Task<OnlineSbiUpdateByIDResponse> UpdateOnlineSbiByID(UpdateOnlineSbiByIDRequest payload) =>
    _client.RequestAsync<UpdateOnlineSbiByIDRequest, OnlineSbiUpdateByIDResponse>("updateOnlineSbiByID", payload, "parameter");


public Task<Param360ViewUpdateByIDResponse> UpdateParam360ViewByID(UpdateParam360ViewByIDRequest payload) =>
    _client.RequestAsync<UpdateParam360ViewByIDRequest, Param360ViewUpdateByIDResponse>("updateParam360ViewByID", payload, "parameter");


public Task<PartStatementUpdateByIDResponse> UpdatePartStatementByID(UpdatePartStatementByIDRequest payload) =>
    _client.RequestAsync<UpdatePartStatementByIDRequest, PartStatementUpdateByIDResponse>("updatePartStatementByID", payload, "parameter");


public Task<PartTrackingTypeUpdateByIDResponse> UpdatePartTrackingTypeByID(UpdatePartTrackingTypeByIDRequest payload) =>
    _client.RequestAsync<UpdatePartTrackingTypeByIDRequest, PartTrackingTypeUpdateByIDResponse>("updatePartTrackingTypeByID", payload, "parameter");


public Task<ParticipantFieldNameUpdateByIDResponse> UpdateParticipantFieldNameByID(UpdateParticipantFieldNameByIDRequest payload) =>
    _client.RequestAsync<UpdateParticipantFieldNameByIDRequest, ParticipantFieldNameUpdateByIDResponse>("updateParticipantFieldNameByID", payload, "parameter");


public Task<PayCalcUpdateByIDResponse> UpdatePayCalcByID(UpdatePayCalcByIDRequest payload) =>
    _client.RequestAsync<UpdatePayCalcByIDRequest, PayCalcUpdateByIDResponse>("updatePayCalcByID", payload, "parameter");


public Task<PeriodicMtgUpdateByIDResponse> UpdatePeriodicMtgByID(UpdatePeriodicMtgByIDRequest payload) =>
    _client.RequestAsync<UpdatePeriodicMtgByIDRequest, PeriodicMtgUpdateByIDResponse>("updatePeriodicMtgByID", payload, "parameter");


public Task<PlanDefaultUpdateByIDResponse> UpdatePlanDefaultByID(UpdatePlanDefaultByIDRequest payload) =>
    _client.RequestAsync<UpdatePlanDefaultByIDRequest, PlanDefaultUpdateByIDResponse>("updatePlanDefaultByID", payload, "parameter");


public Task<PlanFieldNameUpdateByIDResponse> UpdatePlanFieldNameByID(UpdatePlanFieldNameByIDRequest payload) =>
    _client.RequestAsync<UpdatePlanFieldNameByIDRequest, PlanFieldNameUpdateByIDResponse>("updatePlanFieldNameByID", payload, "parameter");


public Task<PmtAppMethodUpdateByIDResponse> UpdatePmtAppMethodByID(UpdatePmtAppMethodByIDRequest payload) =>
    _client.RequestAsync<UpdatePmtAppMethodByIDRequest, PmtAppMethodUpdateByIDResponse>("updatePmtAppMethodByID", payload, "parameter");


public Task<PositivePayUpdateByIDResponse> UpdatePositivePayByID(UpdatePositivePayByIDRequest payload) =>
    _client.RequestAsync<UpdatePositivePayByIDRequest, PositivePayUpdateByIDResponse>("updatePositivePayByID", payload, "parameter");


public Task<PreferenceDefaultUpdateByIDResponse> UpdatePreferenceDefaultByID(UpdatePreferenceDefaultByIDRequest payload) =>
    _client.RequestAsync<UpdatePreferenceDefaultByIDRequest, PreferenceDefaultUpdateByIDResponse>("updatePreferenceDefaultByID", payload, "parameter");


public Task<PrivGroupUpdateByIDResponse> UpdatePrivGroupByID(UpdatePrivGroupByIDRequest payload) =>
    _client.RequestAsync<UpdatePrivGroupByIDRequest, PrivGroupUpdateByIDResponse>("updatePrivGroupByID", payload, "parameter");


public Task<RegCcUpdateByIDResponse> UpdateRegCcByID(UpdateRegCcByIDRequest payload) =>
    _client.RequestAsync<UpdateRegCcByIDRequest, RegCcUpdateByIDResponse>("updateRegCcByID", payload, "parameter");


public Task<ScreenDefinitionUpdateByIDResponse> UpdateScreenDefinitionByID(UpdateScreenDefinitionByIDRequest payload) =>
    _client.RequestAsync<UpdateScreenDefinitionByIDRequest, ScreenDefinitionUpdateByIDResponse>("updateScreenDefinitionByID", payload, "parameter");


public Task<SecFieldUpdateByIDResponse> UpdateSecFieldByID(UpdateSecFieldByIDRequest payload) =>
    _client.RequestAsync<UpdateSecFieldByIDRequest, SecFieldUpdateByIDResponse>("updateSecFieldByID", payload, "parameter");


public Task<SecurityUpdateByIDResponse> UpdateSecurityByID(UpdateSecurityByIDRequest payload) =>
    _client.RequestAsync<UpdateSecurityByIDRequest, SecurityUpdateByIDResponse>("updateSecurityByID", payload, "parameter");


public Task<ShareDefaultUpdateByIDResponse> UpdateShareDefaultByID(UpdateShareDefaultByIDRequest payload) =>
    _client.RequestAsync<UpdateShareDefaultByIDRequest, ShareDefaultUpdateByIDResponse>("updateShareDefaultByID", payload, "parameter");


public Task<ShareFieldNameUpdateByIDResponse> UpdateShareFieldNameByID(UpdateShareFieldNameByIDRequest payload) =>
    _client.RequestAsync<UpdateShareFieldNameByIDRequest, ShareFieldNameUpdateByIDResponse>("updateShareFieldNameByID", payload, "parameter");


public Task<StatementUpdateByIDResponse> UpdateStatementByID(UpdateStatementByIDRequest payload) =>
    _client.RequestAsync<UpdateStatementByIDRequest, StatementUpdateByIDResponse>("updateStatementByID", payload, "parameter");


public Task<StmtMailNameUpdateByIDResponse> UpdateStmtMailNameByID(UpdateStmtMailNameByIDRequest payload) =>
    _client.RequestAsync<UpdateStmtMailNameByIDRequest, StmtMailNameUpdateByIDResponse>("updateStmtMailNameByID", payload, "parameter");


public Task<StmtMessagesUpdateByIDResponse> UpdateStmtMessagesByID(UpdateStmtMessagesByIDRequest payload) =>
    _client.RequestAsync<UpdateStmtMessagesByIDRequest, StmtMessagesUpdateByIDResponse>("updateStmtMessagesByID", payload, "parameter");


public Task<StockUpdateByIDResponse> UpdateStockByID(UpdateStockByIDRequest payload) =>
    _client.RequestAsync<UpdateStockByIDRequest, StockUpdateByIDResponse>("updateStockByID", payload, "parameter");


public Task<SymXClientUpdateByIDResponse> UpdateSymXClientByID(UpdateSymXClientByIDRequest payload) =>
    _client.RequestAsync<UpdateSymXClientByIDRequest, SymXClientUpdateByIDResponse>("updateSymXClientByID", payload, "parameter");


public Task<SymXGeneralUpdateByIDResponse> UpdateSymXGeneralByID(UpdateSymXGeneralByIDRequest payload) =>
    _client.RequestAsync<UpdateSymXGeneralByIDRequest, SymXGeneralUpdateByIDResponse>("updateSymXGeneralByID", payload, "parameter");


public Task<SynapsysMrmUpdateByIDResponse> UpdateSynapsysMrmByID(UpdateSynapsysMrmByIDRequest payload) =>
    _client.RequestAsync<UpdateSynapsysMrmByIDRequest, SynapsysMrmUpdateByIDResponse>("updateSynapsysMrmByID", payload, "parameter");


public Task<TcProductUpdateByIDResponse> UpdateTcProductByID(UpdateTcProductByIDRequest payload) =>
    _client.RequestAsync<UpdateTcProductByIDRequest, TcProductUpdateByIDResponse>("updateTcProductByID", payload, "parameter");


public Task<TellerFeeUpdateByIDResponse> UpdateTellerFeeByID(UpdateTellerFeeByIDRequest payload) =>
    _client.RequestAsync<UpdateTellerFeeByIDRequest, TellerFeeUpdateByIDResponse>("updateTellerFeeByID", payload, "parameter");


public Task<TellerTranFeeUpdateByIDResponse> UpdateTellerTranFeeByID(UpdateTellerTranFeeByIDRequest payload) =>
    _client.RequestAsync<UpdateTellerTranFeeByIDRequest, TellerTranFeeUpdateByIDResponse>("updateTellerTranFeeByID", payload, "parameter");


public Task<TellerTranValidateUpdateByIDResponse> UpdateTellerTranValidateByID(UpdateTellerTranValidateByIDRequest payload) =>
    _client.RequestAsync<UpdateTellerTranValidateByIDRequest, TellerTranValidateUpdateByIDResponse>("updateTellerTranValidateByID", payload, "parameter");


public Task<TrackingCodeUpdateByIDResponse> UpdateTrackingCodeByID(UpdateTrackingCodeByIDRequest payload) =>
    _client.RequestAsync<UpdateTrackingCodeByIDRequest, TrackingCodeUpdateByIDResponse>("updateTrackingCodeByID", payload, "parameter");


public Task<UserTrackingFmUpdateByIDResponse> UpdateUserTrackingFmByID(UpdateUserTrackingFmByIDRequest payload) =>
    _client.RequestAsync<UpdateUserTrackingFmByIDRequest, UserTrackingFmUpdateByIDResponse>("updateUserTrackingFmByID", payload, "parameter");


public Task<UserTrackingTypeUpdateByIDResponse> UpdateUserTrackingTypeByID(UpdateUserTrackingTypeByIDRequest payload) =>
    _client.RequestAsync<UpdateUserTrackingTypeByIDRequest, UserTrackingTypeUpdateByIDResponse>("updateUserTrackingTypeByID", payload, "parameter");


public Task<WarningsUpdateByIDResponse> UpdateWarningsByID(UpdateWarningsByIDRequest payload) =>
    _client.RequestAsync<UpdateWarningsByIDRequest, WarningsUpdateByIDResponse>("updateWarningsByID", payload, "parameter");


public Task<WdFeeUpdateByIDResponse> UpdateWdFeeByID(UpdateWdFeeByIDRequest payload) =>
    _client.RequestAsync<UpdateWdFeeByIDRequest, WdFeeUpdateByIDResponse>("updateWdFeeByID", payload, "parameter");


public Task<WireBfcUpdateByIDResponse> UpdateWireBfcByID(UpdateWireBfcByIDRequest payload) =>
    _client.RequestAsync<UpdateWireBfcByIDRequest, WireBfcUpdateByIDResponse>("updateWireBfcByID", payload, "parameter");


public Task<WireCorpVerUpdateByIDResponse> UpdateWireCorpVerByID(UpdateWireCorpVerByIDRequest payload) =>
    _client.RequestAsync<UpdateWireCorpVerByIDRequest, WireCorpVerUpdateByIDResponse>("updateWireCorpVerByID", payload, "parameter");


public Task<WireIdCodeUpdateByIDResponse> UpdateWireIdCodeByID(UpdateWireIdCodeByIDRequest payload) =>
    _client.RequestAsync<UpdateWireIdCodeByIDRequest, WireIdCodeUpdateByIDResponse>("updateWireIdCodeByID", payload, "parameter");


public Task<WireInCmtCodeUpdateByIDResponse> UpdateWireInCmtCodeByID(UpdateWireInCmtCodeByIDRequest payload) =>
    _client.RequestAsync<UpdateWireInCmtCodeByIDRequest, WireInCmtCodeUpdateByIDResponse>("updateWireInCmtCodeByID", payload, "parameter");


public Task<WireMiscUpdateByIDResponse> UpdateWireMiscByID(UpdateWireMiscByIDRequest payload) =>
    _client.RequestAsync<UpdateWireMiscByIDRequest, WireMiscUpdateByIDResponse>("updateWireMiscByID", payload, "parameter");


public Task<WireOutCmtCodeUpdateByIDResponse> UpdateWireOutCmtCodeByID(UpdateWireOutCmtCodeByIDRequest payload) =>
    _client.RequestAsync<UpdateWireOutCmtCodeByIDRequest, WireOutCmtCodeUpdateByIDResponse>("updateWireOutCmtCodeByID", payload, "parameter");


public Task<WireTypeCodeUpdateByIDResponse> UpdateWireTypeCodeByID(UpdateWireTypeCodeByIDRequest payload) =>
    _client.RequestAsync<UpdateWireTypeCodeByIDRequest, WireTypeCodeUpdateByIDResponse>("updateWireTypeCodeByID", payload, "parameter");


public Task<WorkFlowRepGenUpdateByIDResponse> UpdateWorkFlowRepGenByID(UpdateWorkFlowRepGenByIDRequest payload) =>
    _client.RequestAsync<UpdateWorkFlowRepGenByIDRequest, WorkFlowRepGenUpdateByIDResponse>("updateWorkFlowRepGenByID", payload, "parameter");


public Task<YellowHammerUpdateByIDResponse> UpdateYellowHammerByID(UpdateYellowHammerByIDRequest payload) =>
    _client.RequestAsync<UpdateYellowHammerByIDRequest, YellowHammerUpdateByIDResponse>("updateYellowHammerByID", payload, "parameter");


public Task<RemittanceSelectFieldsResponse> GetRemittanceSelectFields(RemittanceSelectFieldsRequest payload) =>
    _client.RequestAsync<RemittanceSelectFieldsRequest, RemittanceSelectFieldsResponse>("getRemittanceSelectFields", payload, "remittance");


public Task<RemittanceUpdateByIDResponse> UpdateRemittanceByID(UpdateRemittanceByIDRequest payload) =>
    _client.RequestAsync<UpdateRemittanceByIDRequest, RemittanceUpdateByIDResponse>("updateRemittanceByID", payload, "remittance");


public Task<RemittanceCreateResponse> CreateRemittance(CreateRemittanceRequest payload) =>
    _client.RequestAsync<CreateRemittanceRequest, RemittanceCreateResponse>("createRemittance", payload, "remittance");


public Task<RemittanceDeleteResponse> DeleteRemittance(DeleteRemittanceRequest payload) =>
    _client.RequestAsync<DeleteRemittanceRequest, RemittanceDeleteResponse>("deleteRemittance", payload, "remittance");


public Task<CreditReportResponse> OrderReport(OrderReportRequest payload) =>
    _client.RequestAsync<OrderReportRequest, CreditReportResponse>("orderReport", payload, "creditreport");


public Task<CreditReportResponse> ImportReport(ImportReportRequest payload) =>
    _client.RequestAsync<ImportReportRequest, CreditReportResponse>("importReport", payload, "creditreport");


public Task<CorpTransferSelectFieldsResponse> GetCorpTransferSelectFields(CorpTransferSelectFieldsRequest payload) =>
    _client.RequestAsync<CorpTransferSelectFieldsRequest, CorpTransferSelectFieldsResponse>("getCorpTransferSelectFields", payload, "corptransfer");


public Task<UserSelectFieldsResponse> GetUserSelectFields(UserSelectFieldsRequest payload) =>
    _client.RequestAsync<UserSelectFieldsRequest, UserSelectFieldsResponse>("getUserSelectFields", payload, "user");


public Task<UserSelectFieldsFilterChildrenResponse> GetUserSelectFieldsFilterChildren(UserSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<UserSelectFieldsFilterChildrenRequest, UserSelectFieldsFilterChildrenResponse>("getUserSelectFieldsFilterChildren", payload, "user");


public Task<ActivityPagedListSelectFieldsResponse> GetActivityPagedListSelectFields(ActivityPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ActivityPagedListSelectFieldsRequest, ActivityPagedListSelectFieldsResponse>("getActivityPagedListSelectFields", payload, "user");


public Task<ActivitySearchPagedSelectFieldsResponse> SearchActivityPagedSelectFields(ActivitySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ActivitySearchPagedSelectFieldsRequest, ActivitySearchPagedSelectFieldsResponse>("searchActivityPagedSelectFields", payload, "user");


public Task<UserTrackingSelectFieldsResponse> GetUserTrackingSelectFields(UserTrackingSelectFieldsRequest payload) =>
    _client.RequestAsync<UserTrackingSelectFieldsRequest, UserTrackingSelectFieldsResponse>("getUserTrackingSelectFields", payload, "user");


public Task<UserTrackingPagedListSelectFieldsResponse> GetUserTrackingPagedListSelectFields(UserTrackingPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<UserTrackingPagedListSelectFieldsRequest, UserTrackingPagedListSelectFieldsResponse>("getUserTrackingPagedListSelectFields", payload, "user");


public Task<UserTrackingSearchPagedSelectFieldsResponse> SearchUserTrackingPagedSelectFields(UserTrackingSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<UserTrackingSearchPagedSelectFieldsRequest, UserTrackingSearchPagedSelectFieldsResponse>("searchUserTrackingPagedSelectFields", payload, "user");


public Task<UserUpdateByIDResponse> UpdateUserByID(UpdateUserByIDRequest payload) =>
    _client.RequestAsync<UpdateUserByIDRequest, UserUpdateByIDResponse>("updateUserByID", payload, "user");


public Task<UserTrackingUpdateByIDResponse> UpdateUserTrackingByID(UpdateUserTrackingByIDRequest payload) =>
    _client.RequestAsync<UpdateUserTrackingByIDRequest, UserTrackingUpdateByIDResponse>("updateUserTrackingByID", payload, "user");


public Task<UserTrackingCreateResponse> CreateUserTracking(CreateUserTrackingRequest payload) =>
    _client.RequestAsync<CreateUserTrackingRequest, UserTrackingCreateResponse>("createUserTracking", payload, "user");


public Task<UserTrackingDeleteResponse> DeleteUserTracking(DeleteUserTrackingRequest payload) =>
    _client.RequestAsync<DeleteUserTrackingRequest, UserTrackingDeleteResponse>("deleteUserTracking", payload, "user");


public Task<GlAccountSelectFieldsResponse> GetGlAccountSelectFields(GlAccountSelectFieldsRequest payload) =>
    _client.RequestAsync<GlAccountSelectFieldsRequest, GlAccountSelectFieldsResponse>("getGlAccountSelectFields", payload, "generalledger");


public Task<GlAccountSelectFieldsFilterChildrenResponse> GetGlAccountSelectFieldsFilterChildren(GlAccountSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<GlAccountSelectFieldsFilterChildrenRequest, GlAccountSelectFieldsFilterChildrenResponse>("getGlAccountSelectFieldsFilterChildren", payload, "generalledger");


public Task<GlAccountFmHistoryPagedListSelectFieldsResponse> GetGlAccountFmHistoryPagedListSelectFields(GlAccountFmHistoryPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<GlAccountFmHistoryPagedListSelectFieldsRequest, GlAccountFmHistoryPagedListSelectFieldsResponse>("getGlAccountFmHistoryPagedListSelectFields", payload, "generalledger");


public Task<GlAccountFmHistorySearchPagedSelectFieldsResponse> SearchGlAccountFmHistoryPagedSelectFields(GlAccountFmHistorySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<GlAccountFmHistorySearchPagedSelectFieldsRequest, GlAccountFmHistorySearchPagedSelectFieldsResponse>("searchGlAccountFmHistoryPagedSelectFields", payload, "generalledger");


public Task<GlAccountTrackingSelectFieldsResponse> GetGlAccountTrackingSelectFields(GlAccountTrackingSelectFieldsRequest payload) =>
    _client.RequestAsync<GlAccountTrackingSelectFieldsRequest, GlAccountTrackingSelectFieldsResponse>("getGlAccountTrackingSelectFields", payload, "generalledger");


public Task<GlAccountTrackingPagedListSelectFieldsResponse> GetGlAccountTrackingPagedListSelectFields(GlAccountTrackingPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<GlAccountTrackingPagedListSelectFieldsRequest, GlAccountTrackingPagedListSelectFieldsResponse>("getGlAccountTrackingPagedListSelectFields", payload, "generalledger");


public Task<GlAccountTrackingSearchPagedSelectFieldsResponse> SearchGlAccountTrackingPagedSelectFields(GlAccountTrackingSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<GlAccountTrackingSearchPagedSelectFieldsRequest, GlAccountTrackingSearchPagedSelectFieldsResponse>("searchGlAccountTrackingPagedSelectFields", payload, "generalledger");


public Task<GlHistoryPagedListSelectFieldsResponse> GetGlHistoryPagedListSelectFields(GlHistoryPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<GlHistoryPagedListSelectFieldsRequest, GlHistoryPagedListSelectFieldsResponse>("getGlHistoryPagedListSelectFields", payload, "generalledger");


public Task<GlHistorySearchPagedSelectFieldsResponse> SearchGlHistoryPagedSelectFields(GlHistorySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<GlHistorySearchPagedSelectFieldsRequest, GlHistorySearchPagedSelectFieldsResponse>("searchGlHistoryPagedSelectFields", payload, "generalledger");


public Task<GlSubaccountSelectFieldsResponse> GetGlSubaccountSelectFields(GlSubaccountSelectFieldsRequest payload) =>
    _client.RequestAsync<GlSubaccountSelectFieldsRequest, GlSubaccountSelectFieldsResponse>("getGlSubaccountSelectFields", payload, "generalledger");


public Task<GlSubaccountPagedListSelectFieldsResponse> GetGlSubaccountPagedListSelectFields(GlSubaccountPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<GlSubaccountPagedListSelectFieldsRequest, GlSubaccountPagedListSelectFieldsResponse>("getGlSubaccountPagedListSelectFields", payload, "generalledger");


public Task<GlSubaccountSearchPagedSelectFieldsResponse> SearchGlSubaccountPagedSelectFields(GlSubaccountSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<GlSubaccountSearchPagedSelectFieldsRequest, GlSubaccountSearchPagedSelectFieldsResponse>("searchGlSubaccountPagedSelectFields", payload, "generalledger");


public Task<GlAccountUpdateByIDResponse> UpdateGlAccountByID(UpdateGlAccountByIDRequest payload) =>
    _client.RequestAsync<UpdateGlAccountByIDRequest, GlAccountUpdateByIDResponse>("updateGlAccountByID", payload, "generalledger");


public Task<GlAccountTrackingUpdateByIDResponse> UpdateGlAccountTrackingByID(UpdateGlAccountTrackingByIDRequest payload) =>
    _client.RequestAsync<UpdateGlAccountTrackingByIDRequest, GlAccountTrackingUpdateByIDResponse>("updateGlAccountTrackingByID", payload, "generalledger");


public Task<GlSubaccountUpdateByIDResponse> UpdateGlSubaccountByID(UpdateGlSubaccountByIDRequest payload) =>
    _client.RequestAsync<UpdateGlSubaccountByIDRequest, GlSubaccountUpdateByIDResponse>("updateGlSubaccountByID", payload, "generalledger");


public Task<GlAccountCreateResponse> CreateGlAccount(CreateGlAccountRequest payload) =>
    _client.RequestAsync<CreateGlAccountRequest, GlAccountCreateResponse>("createGlAccount", payload, "generalledger");


public Task<GlAccountTrackingCreateResponse> CreateGlAccountTracking(CreateGlAccountTrackingRequest payload) =>
    _client.RequestAsync<CreateGlAccountTrackingRequest, GlAccountTrackingCreateResponse>("createGlAccountTracking", payload, "generalledger");


public Task<GlSubaccountCreateResponse> CreateGlSubaccount(CreateGlSubaccountRequest payload) =>
    _client.RequestAsync<CreateGlSubaccountRequest, GlSubaccountCreateResponse>("createGlSubaccount", payload, "generalledger");


public Task<GlAccountTrackingDeleteResponse> DeleteGlAccountTracking(DeleteGlAccountTrackingRequest payload) =>
    _client.RequestAsync<DeleteGlAccountTrackingRequest, GlAccountTrackingDeleteResponse>("deleteGlAccountTracking", payload, "generalledger");


public Task<GlSubaccountDeleteResponse> DeleteGlSubaccount(DeleteGlSubaccountRequest payload) =>
    _client.RequestAsync<DeleteGlSubaccountRequest, GlSubaccountDeleteResponse>("deleteGlSubaccount", payload, "generalledger");


public Task<NonAcctNameSelectFieldsResponse> GetNonAcctNameSelectFields(NonAcctNameSelectFieldsRequest payload) =>
    _client.RequestAsync<NonAcctNameSelectFieldsRequest, NonAcctNameSelectFieldsResponse>("getNonAcctNameSelectFields", payload, "nonaccountname");


public Task<NonAcctNameSelectFieldsFilterChildrenResponse> GetNonAcctNameSelectFieldsFilterChildren(NonAcctNameSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<NonAcctNameSelectFieldsFilterChildrenRequest, NonAcctNameSelectFieldsFilterChildrenResponse>("getNonAcctNameSelectFieldsFilterChildren", payload, "nonaccountname");


public Task<NonAcctNameFmHistoryPagedListSelectFieldsResponse> GetNonAcctNameFmHistoryPagedListSelectFields(NonAcctNameFmHistoryPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<NonAcctNameFmHistoryPagedListSelectFieldsRequest, NonAcctNameFmHistoryPagedListSelectFieldsResponse>("getNonAcctNameFmHistoryPagedListSelectFields", payload, "nonaccountname");


public Task<NonAcctNameFmHistorySearchPagedSelectFieldsResponse> SearchNonAcctNameFmHistoryPagedSelectFields(NonAcctNameFmHistorySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<NonAcctNameFmHistorySearchPagedSelectFieldsRequest, NonAcctNameFmHistorySearchPagedSelectFieldsResponse>("searchNonAcctNameFmHistoryPagedSelectFields", payload, "nonaccountname");


public Task<NonAcctNameUpdateByIDResponse> UpdateNonAcctNameByID(UpdateNonAcctNameByIDRequest payload) =>
    _client.RequestAsync<UpdateNonAcctNameByIDRequest, NonAcctNameUpdateByIDResponse>("updateNonAcctNameByID", payload, "nonaccountname");


public Task<NonAcctNameCreateResponse> CreateNonAcctName(CreateNonAcctNameRequest payload) =>
    _client.RequestAsync<CreateNonAcctNameRequest, NonAcctNameCreateResponse>("createNonAcctName", payload, "nonaccountname");


public Task<NonAcctNameDeleteResponse> DeleteNonAcctName(DeleteNonAcctNameRequest payload) =>
    _client.RequestAsync<DeleteNonAcctNameRequest, NonAcctNameDeleteResponse>("deleteNonAcctName", payload, "nonaccountname");


public Task<DealerSelectFieldsResponse> GetDealerSelectFields(DealerSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerSelectFieldsRequest, DealerSelectFieldsResponse>("getDealerSelectFields", payload, "dealer");


public Task<DealerSelectFieldsFilterChildrenResponse> GetDealerSelectFieldsFilterChildren(DealerSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<DealerSelectFieldsFilterChildrenRequest, DealerSelectFieldsFilterChildrenResponse>("getDealerSelectFieldsFilterChildren", payload, "dealer");


public Task<DealerCommentSelectFieldsResponse> GetDealerCommentSelectFields(DealerCommentSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerCommentSelectFieldsRequest, DealerCommentSelectFieldsResponse>("getDealerCommentSelectFields", payload, "dealer");


public Task<DealerCommentPagedListSelectFieldsResponse> GetDealerCommentPagedListSelectFields(DealerCommentPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerCommentPagedListSelectFieldsRequest, DealerCommentPagedListSelectFieldsResponse>("getDealerCommentPagedListSelectFields", payload, "dealer");


public Task<DealerCommentSearchPagedSelectFieldsResponse> SearchDealerCommentPagedSelectFields(DealerCommentSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerCommentSearchPagedSelectFieldsRequest, DealerCommentSearchPagedSelectFieldsResponse>("searchDealerCommentPagedSelectFields", payload, "dealer");


public Task<DealerFmHistoryPagedListSelectFieldsResponse> GetDealerFmHistoryPagedListSelectFields(DealerFmHistoryPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerFmHistoryPagedListSelectFieldsRequest, DealerFmHistoryPagedListSelectFieldsResponse>("getDealerFmHistoryPagedListSelectFields", payload, "dealer");


public Task<DealerFmHistorySearchPagedSelectFieldsResponse> SearchDealerFmHistoryPagedSelectFields(DealerFmHistorySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerFmHistorySearchPagedSelectFieldsRequest, DealerFmHistorySearchPagedSelectFieldsResponse>("searchDealerFmHistoryPagedSelectFields", payload, "dealer");


public Task<DealerNoteSelectFieldsResponse> GetDealerNoteSelectFields(DealerNoteSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerNoteSelectFieldsRequest, DealerNoteSelectFieldsResponse>("getDealerNoteSelectFields", payload, "dealer");


public Task<DealerNotePagedListSelectFieldsResponse> GetDealerNotePagedListSelectFields(DealerNotePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerNotePagedListSelectFieldsRequest, DealerNotePagedListSelectFieldsResponse>("getDealerNotePagedListSelectFields", payload, "dealer");


public Task<DealerNoteSearchPagedSelectFieldsResponse> SearchDealerNotePagedSelectFields(DealerNoteSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerNoteSearchPagedSelectFieldsRequest, DealerNoteSearchPagedSelectFieldsResponse>("searchDealerNotePagedSelectFields", payload, "dealer");


public Task<DealerTrackingSelectFieldsResponse> GetDealerTrackingSelectFields(DealerTrackingSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerTrackingSelectFieldsRequest, DealerTrackingSelectFieldsResponse>("getDealerTrackingSelectFields", payload, "dealer");


public Task<DealerTrackingPagedListSelectFieldsResponse> GetDealerTrackingPagedListSelectFields(DealerTrackingPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerTrackingPagedListSelectFieldsRequest, DealerTrackingPagedListSelectFieldsResponse>("getDealerTrackingPagedListSelectFields", payload, "dealer");


public Task<DealerTrackingSearchPagedSelectFieldsResponse> SearchDealerTrackingPagedSelectFields(DealerTrackingSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerTrackingSearchPagedSelectFieldsRequest, DealerTrackingSearchPagedSelectFieldsResponse>("searchDealerTrackingPagedSelectFields", payload, "dealer");


public Task<ReservePlanSelectFieldsResponse> GetReservePlanSelectFields(ReservePlanSelectFieldsRequest payload) =>
    _client.RequestAsync<ReservePlanSelectFieldsRequest, ReservePlanSelectFieldsResponse>("getReservePlanSelectFields", payload, "dealer");


public Task<ReservePlanSelectFieldsFilterChildrenResponse> GetReservePlanSelectFieldsFilterChildren(ReservePlanSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<ReservePlanSelectFieldsFilterChildrenRequest, ReservePlanSelectFieldsFilterChildrenResponse>("getReservePlanSelectFieldsFilterChildren", payload, "dealer");


public Task<ReservePlanPagedListSelectFieldsResponse> GetReservePlanPagedListSelectFields(ReservePlanPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ReservePlanPagedListSelectFieldsRequest, ReservePlanPagedListSelectFieldsResponse>("getReservePlanPagedListSelectFields", payload, "dealer");


public Task<ReservePlanSearchPagedSelectFieldsResponse> SearchReservePlanPagedSelectFields(ReservePlanSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ReservePlanSearchPagedSelectFieldsRequest, ReservePlanSearchPagedSelectFieldsResponse>("searchReservePlanPagedSelectFields", payload, "dealer");


public Task<ReservePlanLoanSelectFieldsResponse> GetReservePlanLoanSelectFields(ReservePlanLoanSelectFieldsRequest payload) =>
    _client.RequestAsync<ReservePlanLoanSelectFieldsRequest, ReservePlanLoanSelectFieldsResponse>("getReservePlanLoanSelectFields", payload, "dealer");


public Task<ReservePlanLoanPagedListSelectFieldsResponse> GetReservePlanLoanPagedListSelectFields(ReservePlanLoanPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ReservePlanLoanPagedListSelectFieldsRequest, ReservePlanLoanPagedListSelectFieldsResponse>("getReservePlanLoanPagedListSelectFields", payload, "dealer");


public Task<ReservePlanLoanSearchPagedSelectFieldsResponse> SearchReservePlanLoanPagedSelectFields(ReservePlanLoanSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ReservePlanLoanSearchPagedSelectFieldsRequest, ReservePlanLoanSearchPagedSelectFieldsResponse>("searchReservePlanLoanPagedSelectFields", payload, "dealer");


public Task<ReservePlanTrackingSelectFieldsResponse> GetReservePlanTrackingSelectFields(ReservePlanTrackingSelectFieldsRequest payload) =>
    _client.RequestAsync<ReservePlanTrackingSelectFieldsRequest, ReservePlanTrackingSelectFieldsResponse>("getReservePlanTrackingSelectFields", payload, "dealer");


public Task<ReservePlanTrackingPagedListSelectFieldsResponse> GetReservePlanTrackingPagedListSelectFields(ReservePlanTrackingPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ReservePlanTrackingPagedListSelectFieldsRequest, ReservePlanTrackingPagedListSelectFieldsResponse>("getReservePlanTrackingPagedListSelectFields", payload, "dealer");


public Task<ReservePlanTrackingSearchPagedSelectFieldsResponse> SearchReservePlanTrackingPagedSelectFields(ReservePlanTrackingSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ReservePlanTrackingSearchPagedSelectFieldsRequest, ReservePlanTrackingSearchPagedSelectFieldsResponse>("searchReservePlanTrackingPagedSelectFields", payload, "dealer");


public Task<ReservePlanTransactionPagedListSelectFieldsResponse> GetReservePlanTransactionPagedListSelectFields(ReservePlanTransactionPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ReservePlanTransactionPagedListSelectFieldsRequest, ReservePlanTransactionPagedListSelectFieldsResponse>("getReservePlanTransactionPagedListSelectFields", payload, "dealer");


public Task<ReservePlanTransactionSearchPagedSelectFieldsResponse> SearchReservePlanTransactionPagedSelectFields(ReservePlanTransactionSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ReservePlanTransactionSearchPagedSelectFieldsRequest, ReservePlanTransactionSearchPagedSelectFieldsResponse>("searchReservePlanTransactionPagedSelectFields", payload, "dealer");


public Task<VendorSelectFieldsResponse> GetVendorSelectFields(VendorSelectFieldsRequest payload) =>
    _client.RequestAsync<VendorSelectFieldsRequest, VendorSelectFieldsResponse>("getVendorSelectFields", payload, "accountspayable");


public Task<VendorSelectFieldsFilterChildrenResponse> GetVendorSelectFieldsFilterChildren(VendorSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<VendorSelectFieldsFilterChildrenRequest, VendorSelectFieldsFilterChildrenResponse>("getVendorSelectFieldsFilterChildren", payload, "accountspayable");


public Task<InvoiceSelectFieldsResponse> GetInvoiceSelectFields(InvoiceSelectFieldsRequest payload) =>
    _client.RequestAsync<InvoiceSelectFieldsRequest, InvoiceSelectFieldsResponse>("getInvoiceSelectFields", payload, "accountspayable");


public Task<InvoiceSelectFieldsFilterChildrenResponse> GetInvoiceSelectFieldsFilterChildren(InvoiceSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<InvoiceSelectFieldsFilterChildrenRequest, InvoiceSelectFieldsFilterChildrenResponse>("getInvoiceSelectFieldsFilterChildren", payload, "accountspayable");


public Task<InvoicePagedListSelectFieldsResponse> GetInvoicePagedListSelectFields(InvoicePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<InvoicePagedListSelectFieldsRequest, InvoicePagedListSelectFieldsResponse>("getInvoicePagedListSelectFields", payload, "accountspayable");


public Task<InvoiceSearchPagedSelectFieldsResponse> SearchInvoicePagedSelectFields(InvoiceSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<InvoiceSearchPagedSelectFieldsRequest, InvoiceSearchPagedSelectFieldsResponse>("searchInvoicePagedSelectFields", payload, "accountspayable");


public Task<InvoiceNoteSelectFieldsResponse> GetInvoiceNoteSelectFields(InvoiceNoteSelectFieldsRequest payload) =>
    _client.RequestAsync<InvoiceNoteSelectFieldsRequest, InvoiceNoteSelectFieldsResponse>("getInvoiceNoteSelectFields", payload, "accountspayable");


public Task<InvoiceNotePagedListSelectFieldsResponse> GetInvoiceNotePagedListSelectFields(InvoiceNotePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<InvoiceNotePagedListSelectFieldsRequest, InvoiceNotePagedListSelectFieldsResponse>("getInvoiceNotePagedListSelectFields", payload, "accountspayable");


public Task<InvoiceNoteSearchPagedSelectFieldsResponse> SearchInvoiceNotePagedSelectFields(InvoiceNoteSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<InvoiceNoteSearchPagedSelectFieldsRequest, InvoiceNoteSearchPagedSelectFieldsResponse>("searchInvoiceNotePagedSelectFields", payload, "accountspayable");


public Task<VendorFmHistoryPagedListSelectFieldsResponse> GetVendorFmHistoryPagedListSelectFields(VendorFmHistoryPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<VendorFmHistoryPagedListSelectFieldsRequest, VendorFmHistoryPagedListSelectFieldsResponse>("getVendorFmHistoryPagedListSelectFields", payload, "accountspayable");


public Task<VendorFmHistorySearchPagedSelectFieldsResponse> SearchVendorFmHistoryPagedSelectFields(VendorFmHistorySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<VendorFmHistorySearchPagedSelectFieldsRequest, VendorFmHistorySearchPagedSelectFieldsResponse>("searchVendorFmHistoryPagedSelectFields", payload, "accountspayable");


public Task<VendorUpdateByIDResponse> UpdateVendorByID(UpdateVendorByIDRequest payload) =>
    _client.RequestAsync<UpdateVendorByIDRequest, VendorUpdateByIDResponse>("updateVendorByID", payload, "accountspayable");


public Task<InvoiceUpdateByIDResponse> UpdateInvoiceByID(UpdateInvoiceByIDRequest payload) =>
    _client.RequestAsync<UpdateInvoiceByIDRequest, InvoiceUpdateByIDResponse>("updateInvoiceByID", payload, "accountspayable");


public Task<InvoiceNoteUpdateByIDResponse> UpdateInvoiceNoteByID(UpdateInvoiceNoteByIDRequest payload) =>
    _client.RequestAsync<UpdateInvoiceNoteByIDRequest, InvoiceNoteUpdateByIDResponse>("updateInvoiceNoteByID", payload, "accountspayable");


public Task<VendorCreateResponse> CreateVendor(CreateVendorRequest payload) =>
    _client.RequestAsync<CreateVendorRequest, VendorCreateResponse>("createVendor", payload, "accountspayable");


public Task<InvoiceCreateResponse> CreateInvoice(CreateInvoiceRequest payload) =>
    _client.RequestAsync<CreateInvoiceRequest, InvoiceCreateResponse>("createInvoice", payload, "accountspayable");


public Task<InvoiceNoteCreateResponse> CreateInvoiceNote(CreateInvoiceNoteRequest payload) =>
    _client.RequestAsync<CreateInvoiceNoteRequest, InvoiceNoteCreateResponse>("createInvoiceNote", payload, "accountspayable");


public Task<VendorDeleteResponse> DeleteVendor(DeleteVendorRequest payload) =>
    _client.RequestAsync<DeleteVendorRequest, VendorDeleteResponse>("deleteVendor", payload, "accountspayable");


public Task<InvoiceDeleteResponse> DeleteInvoice(DeleteInvoiceRequest payload) =>
    _client.RequestAsync<DeleteInvoiceRequest, InvoiceDeleteResponse>("deleteInvoice", payload, "accountspayable");


public Task<InvoiceNoteDeleteResponse> DeleteInvoiceNote(DeleteInvoiceNoteRequest payload) =>
    _client.RequestAsync<DeleteInvoiceNoteRequest, InvoiceNoteDeleteResponse>("deleteInvoiceNote", payload, "accountspayable");


public Task<authenticateResponse> Authenticate(authenticateRequest payload) =>
    _client.RequestAsync<authenticateRequest, authenticateResponse>("authenticate", payload, "ecaa");


public Task<authenticateWithAuthorizationResponse> AuthenticateWithAuthorization(authenticateWithAuthorizationRequest payload) =>
    _client.RequestAsync<authenticateWithAuthorizationRequest, authenticateWithAuthorizationResponse>("authenticateWithAuthorization", payload, "ecaa");


public Task<getPrincipalsResponse> GetPrincipals(getPrincipalsRequest payload) =>
    _client.RequestAsync<getPrincipalsRequest, getPrincipalsResponse>("getPrincipals", payload, "ecaa");


public Task<initKerberosAuthenticationResponse> InitKerberosAuthentication(initKerberosAuthenticationRequest payload) =>
    _client.RequestAsync<initKerberosAuthenticationRequest, initKerberosAuthenticationResponse>("initKerberosAuthentication", payload, "ecaa");


public Task<authorizeSymResponse> AuthorizeSym(authorizeSymRequest payload) =>
    _client.RequestAsync<authorizeSymRequest, authorizeSymResponse>("authorizeSym", payload, "ecaa");


public Task<changeSymitarPasswordResponse> ChangeSymitarPassword(changeSymitarPasswordRequest payload) =>
    _client.RequestAsync<changeSymitarPasswordRequest, changeSymitarPasswordResponse>("changeSymitarPassword", payload, "ecaa");


public Task<authenticateMemberResponse> AuthenticateMember(authenticateMemberRequest payload) =>
    _client.RequestAsync<authenticateMemberRequest, authenticateMemberResponse>("authenticateMember", payload, "ecaa");


public Task<authenticateServiceResponse> AuthenticateService(authenticateServiceRequest payload) =>
    _client.RequestAsync<authenticateServiceRequest, authenticateServiceResponse>("authenticateService", payload, "ecaa");


public Task<changeMemberHBPasswordResponse> ChangeMemberHBPassword(changeMemberHBPasswordRequest payload) =>
    _client.RequestAsync<changeMemberHBPasswordRequest, changeMemberHBPasswordResponse>("changeMemberHBPassword", payload, "ecaa");


public Task<convertToJWTResponse> ConvertToJWT(convertToJWTRequest payload) =>
    _client.RequestAsync<convertToJWTRequest, convertToJWTResponse>("convertToJWT", payload, "ecaa");


public Task<convertToSAMLResponse> ConvertToSAML(convertToSAMLRequest payload) =>
    _client.RequestAsync<convertToSAMLRequest, convertToSAMLResponse>("convertToSAML", payload, "ecaa");


public Task<TransactionsResponse> Deposit(ShareDepositRequest payload) =>
    _client.RequestAsync<ShareDepositRequest, TransactionsResponse>("deposit", payload, "transactions");


public Task<TransactionsResponse> Withdraw(WithdrawalRequest payload) =>
    _client.RequestAsync<WithdrawalRequest, TransactionsResponse>("withdraw", payload, "transactions");


public Task<TransactionsResponse> NewLoan(NewLoanRequest payload) =>
    _client.RequestAsync<NewLoanRequest, TransactionsResponse>("newLoan", payload, "transactions");


public Task<TransactionsResponse> PayBill(BillPaymentRequest payload) =>
    _client.RequestAsync<BillPaymentRequest, TransactionsResponse>("payBill", payload, "transactions");


public Task<TransactionsResponse> WithdrawFee(WithdrawFeeRequest payload) =>
    _client.RequestAsync<WithdrawFeeRequest, TransactionsResponse>("withdrawFee", payload, "transactions");


public Task<TransactionsResponse> Transfer(TransferRequest payload) =>
    _client.RequestAsync<TransferRequest, TransactionsResponse>("transfer", payload, "transactions");


public Task<TransactionsResponse> StopCheckPayment(StopCheckPaymentRequest payload) =>
    _client.RequestAsync<StopCheckPaymentRequest, TransactionsResponse>("stopCheckPayment", payload, "transactions");


public Task<TransactionsResponse> LoanAddon(LoanAddonRequest payload) =>
    _client.RequestAsync<LoanAddonRequest, TransactionsResponse>("loanAddon", payload, "transactions");


public Task<TransactionsResponse> PayLoan(LoanPaymentRequest payload) =>
    _client.RequestAsync<LoanPaymentRequest, TransactionsResponse>("payLoan", payload, "transactions");


public Task<TransactionsResponse> GlToGlPost(GlToGlPostingRequest payload) =>
    _client.RequestAsync<GlToGlPostingRequest, TransactionsResponse>("glToGlPost", payload, "transactions");


public Task<GetDonorRecipientAccountsResponse> GetDonorRecipientAccounts(GetDonorRecipientAccountsRequest payload) =>
    _client.RequestAsync<GetDonorRecipientAccountsRequest, GetDonorRecipientAccountsResponse>("getDonorRecipientAccounts", payload, "transactions");


public Task<ParticipantSelectFieldsResponse> GetParticipantSelectFields(ParticipantSelectFieldsRequest payload) =>
    _client.RequestAsync<ParticipantSelectFieldsRequest, ParticipantSelectFieldsResponse>("getParticipantSelectFields", payload, "participant");


public Task<ParticipantSelectFieldsFilterChildrenResponse> GetParticipantSelectFieldsFilterChildren(ParticipantSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<ParticipantSelectFieldsFilterChildrenRequest, ParticipantSelectFieldsFilterChildrenResponse>("getParticipantSelectFieldsFilterChildren", payload, "participant");


public Task<ParticipantFmHistoryPagedListSelectFieldsResponse> GetParticipantFmHistoryPagedListSelectFields(ParticipantFmHistoryPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParticipantFmHistoryPagedListSelectFieldsRequest, ParticipantFmHistoryPagedListSelectFieldsResponse>("getParticipantFmHistoryPagedListSelectFields", payload, "participant");


public Task<ParticipantFmHistorySearchPagedSelectFieldsResponse> SearchParticipantFmHistoryPagedSelectFields(ParticipantFmHistorySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParticipantFmHistorySearchPagedSelectFieldsRequest, ParticipantFmHistorySearchPagedSelectFieldsResponse>("searchParticipantFmHistoryPagedSelectFields", payload, "participant");


public Task<ParticipantNoteSelectFieldsResponse> GetParticipantNoteSelectFields(ParticipantNoteSelectFieldsRequest payload) =>
    _client.RequestAsync<ParticipantNoteSelectFieldsRequest, ParticipantNoteSelectFieldsResponse>("getParticipantNoteSelectFields", payload, "participant");


public Task<ParticipantNotePagedListSelectFieldsResponse> GetParticipantNotePagedListSelectFields(ParticipantNotePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParticipantNotePagedListSelectFieldsRequest, ParticipantNotePagedListSelectFieldsResponse>("getParticipantNotePagedListSelectFields", payload, "participant");


public Task<ParticipantNoteSearchPagedSelectFieldsResponse> SearchParticipantNotePagedSelectFields(ParticipantNoteSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParticipantNoteSearchPagedSelectFieldsRequest, ParticipantNoteSearchPagedSelectFieldsResponse>("searchParticipantNotePagedSelectFields", payload, "participant");


public Task<ParticipantTransactionPagedListSelectFieldsResponse> GetParticipantTransactionPagedListSelectFields(ParticipantTransactionPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParticipantTransactionPagedListSelectFieldsRequest, ParticipantTransactionPagedListSelectFieldsResponse>("getParticipantTransactionPagedListSelectFields", payload, "participant");


public Task<ParticipantTransactionSearchPagedSelectFieldsResponse> SearchParticipantTransactionPagedSelectFields(ParticipantTransactionSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParticipantTransactionSearchPagedSelectFieldsRequest, ParticipantTransactionSearchPagedSelectFieldsResponse>("searchParticipantTransactionPagedSelectFields", payload, "participant");


public Task<AccountSelectFieldsResponse> GetAccountSelectFields(AccountSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountSelectFieldsRequest, AccountSelectFieldsResponse>("getAccountSelectFields", payload, "account");


public Task<AccountSelectFieldsFilterChildrenResponse> GetAccountSelectFieldsFilterChildren(AccountSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<AccountSelectFieldsFilterChildrenRequest, AccountSelectFieldsFilterChildrenResponse>("getAccountSelectFieldsFilterChildren", payload, "account");


public Task<BatchAchOrigSelectFieldsResponse> GetBatchAchOrigSelectFields(BatchAchOrigSelectFieldsRequest payload) =>
    _client.RequestAsync<BatchAchOrigSelectFieldsRequest, BatchAchOrigSelectFieldsResponse>("getBatchAchOrigSelectFields", payload, "account");


public Task<BatchAchOrigPagedListSelectFieldsResponse> GetBatchAchOrigPagedListSelectFields(BatchAchOrigPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<BatchAchOrigPagedListSelectFieldsRequest, BatchAchOrigPagedListSelectFieldsResponse>("getBatchAchOrigPagedListSelectFields", payload, "account");


public Task<BatchAchOrigSearchPagedSelectFieldsResponse> SearchBatchAchOrigPagedSelectFields(BatchAchOrigSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<BatchAchOrigSearchPagedSelectFieldsRequest, BatchAchOrigSearchPagedSelectFieldsResponse>("searchBatchAchOrigPagedSelectFields", payload, "account");


public Task<CardSelectFieldsResponse> GetCardSelectFields(CardSelectFieldsRequest payload) =>
    _client.RequestAsync<CardSelectFieldsRequest, CardSelectFieldsResponse>("getCardSelectFields", payload, "account");


public Task<CardSelectFieldsFilterChildrenResponse> GetCardSelectFieldsFilterChildren(CardSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<CardSelectFieldsFilterChildrenRequest, CardSelectFieldsFilterChildrenResponse>("getCardSelectFieldsFilterChildren", payload, "account");


public Task<CardPagedListSelectFieldsResponse> GetCardPagedListSelectFields(CardPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CardPagedListSelectFieldsRequest, CardPagedListSelectFieldsResponse>("getCardPagedListSelectFields", payload, "account");


public Task<CardSearchPagedSelectFieldsResponse> SearchCardPagedSelectFields(CardSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CardSearchPagedSelectFieldsRequest, CardSearchPagedSelectFieldsResponse>("searchCardPagedSelectFields", payload, "account");


public Task<CardAccessSelectFieldsResponse> GetCardAccessSelectFields(CardAccessSelectFieldsRequest payload) =>
    _client.RequestAsync<CardAccessSelectFieldsRequest, CardAccessSelectFieldsResponse>("getCardAccessSelectFields", payload, "account");


public Task<CardAccessPagedListSelectFieldsResponse> GetCardAccessPagedListSelectFields(CardAccessPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CardAccessPagedListSelectFieldsRequest, CardAccessPagedListSelectFieldsResponse>("getCardAccessPagedListSelectFields", payload, "account");


public Task<CardAccessSearchPagedSelectFieldsResponse> SearchCardAccessPagedSelectFields(CardAccessSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CardAccessSearchPagedSelectFieldsRequest, CardAccessSearchPagedSelectFieldsResponse>("searchCardAccessPagedSelectFields", payload, "account");


public Task<CardNameSelectFieldsResponse> GetCardNameSelectFields(CardNameSelectFieldsRequest payload) =>
    _client.RequestAsync<CardNameSelectFieldsRequest, CardNameSelectFieldsResponse>("getCardNameSelectFields", payload, "account");


public Task<CardNamePagedListSelectFieldsResponse> GetCardNamePagedListSelectFields(CardNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CardNamePagedListSelectFieldsRequest, CardNamePagedListSelectFieldsResponse>("getCardNamePagedListSelectFields", payload, "account");


public Task<CardNameSearchPagedSelectFieldsResponse> SearchCardNamePagedSelectFields(CardNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CardNameSearchPagedSelectFieldsRequest, CardNameSearchPagedSelectFieldsResponse>("searchCardNamePagedSelectFields", payload, "account");


public Task<CardNoteSelectFieldsResponse> GetCardNoteSelectFields(CardNoteSelectFieldsRequest payload) =>
    _client.RequestAsync<CardNoteSelectFieldsRequest, CardNoteSelectFieldsResponse>("getCardNoteSelectFields", payload, "account");


public Task<CardNotePagedListSelectFieldsResponse> GetCardNotePagedListSelectFields(CardNotePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CardNotePagedListSelectFieldsRequest, CardNotePagedListSelectFieldsResponse>("getCardNotePagedListSelectFields", payload, "account");


public Task<CardNoteSearchPagedSelectFieldsResponse> SearchCardNotePagedSelectFields(CardNoteSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CardNoteSearchPagedSelectFieldsRequest, CardNoteSearchPagedSelectFieldsResponse>("searchCardNotePagedSelectFields", payload, "account");


public Task<CpWorkCardSelectFieldsFilterChildrenResponse> GetCpWorkCardSelectFieldsFilterChildren(CpWorkCardSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<CpWorkCardSelectFieldsFilterChildrenRequest, CpWorkCardSelectFieldsFilterChildrenResponse>("getCpWorkCardSelectFieldsFilterChildren", payload, "account");


public Task<CpWorkCardPagedListSelectFieldsResponse> GetCpWorkCardPagedListSelectFields(CpWorkCardPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CpWorkCardPagedListSelectFieldsRequest, CpWorkCardPagedListSelectFieldsResponse>("getCpWorkCardPagedListSelectFields", payload, "account");


public Task<CpWorkCardSearchPagedSelectFieldsResponse> SearchCpWorkCardPagedSelectFields(CpWorkCardSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CpWorkCardSearchPagedSelectFieldsRequest, CpWorkCardSearchPagedSelectFieldsResponse>("searchCpWorkCardPagedSelectFields", payload, "account");


public Task<CpWorkCardNoteSelectFieldsResponse> GetCpWorkCardNoteSelectFields(CpWorkCardNoteSelectFieldsRequest payload) =>
    _client.RequestAsync<CpWorkCardNoteSelectFieldsRequest, CpWorkCardNoteSelectFieldsResponse>("getCpWorkCardNoteSelectFields", payload, "account");


public Task<CpWorkCardNotePagedListSelectFieldsResponse> GetCpWorkCardNotePagedListSelectFields(CpWorkCardNotePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CpWorkCardNotePagedListSelectFieldsRequest, CpWorkCardNotePagedListSelectFieldsResponse>("getCpWorkCardNotePagedListSelectFields", payload, "account");


public Task<CpWorkCardNoteSearchPagedSelectFieldsResponse> SearchCpWorkCardNotePagedSelectFields(CpWorkCardNoteSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CpWorkCardNoteSearchPagedSelectFieldsRequest, CpWorkCardNoteSearchPagedSelectFieldsResponse>("searchCpWorkCardNotePagedSelectFields", payload, "account");


public Task<CpWorkCardTrackingSelectFieldsResponse> GetCpWorkCardTrackingSelectFields(CpWorkCardTrackingSelectFieldsRequest payload) =>
    _client.RequestAsync<CpWorkCardTrackingSelectFieldsRequest, CpWorkCardTrackingSelectFieldsResponse>("getCpWorkCardTrackingSelectFields", payload, "account");


public Task<CpWorkCardTrackingPagedListSelectFieldsResponse> GetCpWorkCardTrackingPagedListSelectFields(CpWorkCardTrackingPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CpWorkCardTrackingPagedListSelectFieldsRequest, CpWorkCardTrackingPagedListSelectFieldsResponse>("getCpWorkCardTrackingPagedListSelectFields", payload, "account");


public Task<CpWorkCardTrackingSearchPagedSelectFieldsResponse> SearchCpWorkCardTrackingPagedSelectFields(CpWorkCardTrackingSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CpWorkCardTrackingSearchPagedSelectFieldsRequest, CpWorkCardTrackingSearchPagedSelectFieldsResponse>("searchCpWorkCardTrackingPagedSelectFields", payload, "account");


public Task<CredRepSelectFieldsResponse> GetCredRepSelectFields(CredRepSelectFieldsRequest payload) =>
    _client.RequestAsync<CredRepSelectFieldsRequest, CredRepSelectFieldsResponse>("getCredRepSelectFields", payload, "account");


public Task<CredRepSelectFieldsFilterChildrenResponse> GetCredRepSelectFieldsFilterChildren(CredRepSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<CredRepSelectFieldsFilterChildrenRequest, CredRepSelectFieldsFilterChildrenResponse>("getCredRepSelectFieldsFilterChildren", payload, "account");


public Task<CredRepPagedListSelectFieldsResponse> GetCredRepPagedListSelectFields(CredRepPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CredRepPagedListSelectFieldsRequest, CredRepPagedListSelectFieldsResponse>("getCredRepPagedListSelectFields", payload, "account");


public Task<CredRepSearchPagedSelectFieldsResponse> SearchCredRepPagedSelectFields(CredRepSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CredRepSearchPagedSelectFieldsRequest, CredRepSearchPagedSelectFieldsResponse>("searchCredRepPagedSelectFields", payload, "account");


public Task<CredRepItemPagedListSelectFieldsResponse> GetCredRepItemPagedListSelectFields(CredRepItemPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CredRepItemPagedListSelectFieldsRequest, CredRepItemPagedListSelectFieldsResponse>("getCredRepItemPagedListSelectFields", payload, "account");


public Task<CredRepItemSearchPagedSelectFieldsResponse> SearchCredRepItemPagedSelectFields(CredRepItemSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CredRepItemSearchPagedSelectFieldsRequest, CredRepItemSearchPagedSelectFieldsResponse>("searchCredRepItemPagedSelectFields", payload, "account");


public Task<EftSelectFieldsResponse> GetEftSelectFields(EftSelectFieldsRequest payload) =>
    _client.RequestAsync<EftSelectFieldsRequest, EftSelectFieldsResponse>("getEftSelectFields", payload, "account");


public Task<EftSelectFieldsFilterChildrenResponse> GetEftSelectFieldsFilterChildren(EftSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<EftSelectFieldsFilterChildrenRequest, EftSelectFieldsFilterChildrenResponse>("getEftSelectFieldsFilterChildren", payload, "account");


public Task<EftPagedListSelectFieldsResponse> GetEftPagedListSelectFields(EftPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<EftPagedListSelectFieldsRequest, EftPagedListSelectFieldsResponse>("getEftPagedListSelectFields", payload, "account");


public Task<EftSearchPagedSelectFieldsResponse> SearchEftPagedSelectFields(EftSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<EftSearchPagedSelectFieldsRequest, EftSearchPagedSelectFieldsResponse>("searchEftPagedSelectFields", payload, "account");


public Task<EftAddendaInfoSelectFieldsResponse> GetEftAddendaInfoSelectFields(EftAddendaInfoSelectFieldsRequest payload) =>
    _client.RequestAsync<EftAddendaInfoSelectFieldsRequest, EftAddendaInfoSelectFieldsResponse>("getEftAddendaInfoSelectFields", payload, "account");


public Task<EftAddendaInfoPagedListSelectFieldsResponse> GetEftAddendaInfoPagedListSelectFields(EftAddendaInfoPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<EftAddendaInfoPagedListSelectFieldsRequest, EftAddendaInfoPagedListSelectFieldsResponse>("getEftAddendaInfoPagedListSelectFields", payload, "account");


public Task<EftAddendaInfoSearchPagedSelectFieldsResponse> SearchEftAddendaInfoPagedSelectFields(EftAddendaInfoSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<EftAddendaInfoSearchPagedSelectFieldsRequest, EftAddendaInfoSearchPagedSelectFieldsResponse>("searchEftAddendaInfoPagedSelectFields", payload, "account");


public Task<EftNameSelectFieldsResponse> GetEftNameSelectFields(EftNameSelectFieldsRequest payload) =>
    _client.RequestAsync<EftNameSelectFieldsRequest, EftNameSelectFieldsResponse>("getEftNameSelectFields", payload, "account");


public Task<EftNamePagedListSelectFieldsResponse> GetEftNamePagedListSelectFields(EftNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<EftNamePagedListSelectFieldsRequest, EftNamePagedListSelectFieldsResponse>("getEftNamePagedListSelectFields", payload, "account");


public Task<EftNameSearchPagedSelectFieldsResponse> SearchEftNamePagedSelectFields(EftNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<EftNameSearchPagedSelectFieldsRequest, EftNameSearchPagedSelectFieldsResponse>("searchEftNamePagedSelectFields", payload, "account");


public Task<EftTransferSelectFieldsResponse> GetEftTransferSelectFields(EftTransferSelectFieldsRequest payload) =>
    _client.RequestAsync<EftTransferSelectFieldsRequest, EftTransferSelectFieldsResponse>("getEftTransferSelectFields", payload, "account");


public Task<EftTransferPagedListSelectFieldsResponse> GetEftTransferPagedListSelectFields(EftTransferPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<EftTransferPagedListSelectFieldsRequest, EftTransferPagedListSelectFieldsResponse>("getEftTransferPagedListSelectFields", payload, "account");


public Task<EftTransferSearchPagedSelectFieldsResponse> SearchEftTransferPagedSelectFields(EftTransferSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<EftTransferSearchPagedSelectFieldsRequest, EftTransferSearchPagedSelectFieldsResponse>("searchEftTransferPagedSelectFields", payload, "account");


public Task<ExternalAccountSelectFieldsResponse> GetExternalAccountSelectFields(ExternalAccountSelectFieldsRequest payload) =>
    _client.RequestAsync<ExternalAccountSelectFieldsRequest, ExternalAccountSelectFieldsResponse>("getExternalAccountSelectFields", payload, "account");


public Task<ExternalAccountPagedListSelectFieldsResponse> GetExternalAccountPagedListSelectFields(ExternalAccountPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ExternalAccountPagedListSelectFieldsRequest, ExternalAccountPagedListSelectFieldsResponse>("getExternalAccountPagedListSelectFields", payload, "account");


public Task<ExternalAccountSearchPagedSelectFieldsResponse> SearchExternalAccountPagedSelectFields(ExternalAccountSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ExternalAccountSearchPagedSelectFieldsRequest, ExternalAccountSearchPagedSelectFieldsResponse>("searchExternalAccountPagedSelectFields", payload, "account");


public Task<ExternalLoanSelectFieldsResponse> GetExternalLoanSelectFields(ExternalLoanSelectFieldsRequest payload) =>
    _client.RequestAsync<ExternalLoanSelectFieldsRequest, ExternalLoanSelectFieldsResponse>("getExternalLoanSelectFields", payload, "account");


public Task<ExternalLoanSelectFieldsFilterChildrenResponse> GetExternalLoanSelectFieldsFilterChildren(ExternalLoanSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<ExternalLoanSelectFieldsFilterChildrenRequest, ExternalLoanSelectFieldsFilterChildrenResponse>("getExternalLoanSelectFieldsFilterChildren", payload, "account");


public Task<ExternalLoanPagedListSelectFieldsResponse> GetExternalLoanPagedListSelectFields(ExternalLoanPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ExternalLoanPagedListSelectFieldsRequest, ExternalLoanPagedListSelectFieldsResponse>("getExternalLoanPagedListSelectFields", payload, "account");


public Task<ExternalLoanSearchPagedSelectFieldsResponse> SearchExternalLoanPagedSelectFields(ExternalLoanSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ExternalLoanSearchPagedSelectFieldsRequest, ExternalLoanSearchPagedSelectFieldsResponse>("searchExternalLoanPagedSelectFields", payload, "account");


public Task<ExternalLoanNameSelectFieldsResponse> GetExternalLoanNameSelectFields(ExternalLoanNameSelectFieldsRequest payload) =>
    _client.RequestAsync<ExternalLoanNameSelectFieldsRequest, ExternalLoanNameSelectFieldsResponse>("getExternalLoanNameSelectFields", payload, "account");


public Task<ExternalLoanNamePagedListSelectFieldsResponse> GetExternalLoanNamePagedListSelectFields(ExternalLoanNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ExternalLoanNamePagedListSelectFieldsRequest, ExternalLoanNamePagedListSelectFieldsResponse>("getExternalLoanNamePagedListSelectFields", payload, "account");


public Task<ExternalLoanNameSearchPagedSelectFieldsResponse> SearchExternalLoanNamePagedSelectFields(ExternalLoanNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ExternalLoanNameSearchPagedSelectFieldsRequest, ExternalLoanNameSearchPagedSelectFieldsResponse>("searchExternalLoanNamePagedSelectFields", payload, "account");


public Task<ExternalLoanNoteSelectFieldsResponse> GetExternalLoanNoteSelectFields(ExternalLoanNoteSelectFieldsRequest payload) =>
    _client.RequestAsync<ExternalLoanNoteSelectFieldsRequest, ExternalLoanNoteSelectFieldsResponse>("getExternalLoanNoteSelectFields", payload, "account");


public Task<ExternalLoanNotePagedListSelectFieldsResponse> GetExternalLoanNotePagedListSelectFields(ExternalLoanNotePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ExternalLoanNotePagedListSelectFieldsRequest, ExternalLoanNotePagedListSelectFieldsResponse>("getExternalLoanNotePagedListSelectFields", payload, "account");


public Task<ExternalLoanNoteSearchPagedSelectFieldsResponse> SearchExternalLoanNotePagedSelectFields(ExternalLoanNoteSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ExternalLoanNoteSearchPagedSelectFieldsRequest, ExternalLoanNoteSearchPagedSelectFieldsResponse>("searchExternalLoanNotePagedSelectFields", payload, "account");


public Task<ExternalLoanTrackingSelectFieldsResponse> GetExternalLoanTrackingSelectFields(ExternalLoanTrackingSelectFieldsRequest payload) =>
    _client.RequestAsync<ExternalLoanTrackingSelectFieldsRequest, ExternalLoanTrackingSelectFieldsResponse>("getExternalLoanTrackingSelectFields", payload, "account");


public Task<ExternalLoanTrackingPagedListSelectFieldsResponse> GetExternalLoanTrackingPagedListSelectFields(ExternalLoanTrackingPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ExternalLoanTrackingPagedListSelectFieldsRequest, ExternalLoanTrackingPagedListSelectFieldsResponse>("getExternalLoanTrackingPagedListSelectFields", payload, "account");


public Task<ExternalLoanTrackingSearchPagedSelectFieldsResponse> SearchExternalLoanTrackingPagedSelectFields(ExternalLoanTrackingSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ExternalLoanTrackingSearchPagedSelectFieldsRequest, ExternalLoanTrackingSearchPagedSelectFieldsResponse>("searchExternalLoanTrackingPagedSelectFields", payload, "account");


public Task<ExternalLoanTransferSelectFieldsResponse> GetExternalLoanTransferSelectFields(ExternalLoanTransferSelectFieldsRequest payload) =>
    _client.RequestAsync<ExternalLoanTransferSelectFieldsRequest, ExternalLoanTransferSelectFieldsResponse>("getExternalLoanTransferSelectFields", payload, "account");


public Task<ExternalLoanTransferPagedListSelectFieldsResponse> GetExternalLoanTransferPagedListSelectFields(ExternalLoanTransferPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ExternalLoanTransferPagedListSelectFieldsRequest, ExternalLoanTransferPagedListSelectFieldsResponse>("getExternalLoanTransferPagedListSelectFields", payload, "account");


public Task<ExternalLoanTransferSearchPagedSelectFieldsResponse> SearchExternalLoanTransferPagedSelectFields(ExternalLoanTransferSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ExternalLoanTransferSearchPagedSelectFieldsRequest, ExternalLoanTransferSearchPagedSelectFieldsResponse>("searchExternalLoanTransferPagedSelectFields", payload, "account");


public Task<FmHistoryPagedListSelectFieldsResponse> GetFmHistoryPagedListSelectFields(FmHistoryPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<FmHistoryPagedListSelectFieldsRequest, FmHistoryPagedListSelectFieldsResponse>("getFmHistoryPagedListSelectFields", payload, "account");


public Task<FmHistorySearchPagedSelectFieldsResponse> SearchFmHistoryPagedSelectFields(FmHistorySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<FmHistorySearchPagedSelectFieldsRequest, FmHistorySearchPagedSelectFieldsResponse>("searchFmHistoryPagedSelectFields", payload, "account");


public Task<HouseholdSelectFieldsResponse> GetHouseholdSelectFields(HouseholdSelectFieldsRequest payload) =>
    _client.RequestAsync<HouseholdSelectFieldsRequest, HouseholdSelectFieldsResponse>("getHouseholdSelectFields", payload, "account");


public Task<HouseholdPagedListSelectFieldsResponse> GetHouseholdPagedListSelectFields(HouseholdPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<HouseholdPagedListSelectFieldsRequest, HouseholdPagedListSelectFieldsResponse>("getHouseholdPagedListSelectFields", payload, "account");


public Task<HouseholdSearchPagedSelectFieldsResponse> SearchHouseholdPagedSelectFields(HouseholdSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<HouseholdSearchPagedSelectFieldsRequest, HouseholdSearchPagedSelectFieldsResponse>("searchHouseholdPagedSelectFields", payload, "account");


public Task<IrsSelectFieldsResponse> GetIrsSelectFields(IrsSelectFieldsRequest payload) =>
    _client.RequestAsync<IrsSelectFieldsRequest, IrsSelectFieldsResponse>("getIrsSelectFields", payload, "account");


public Task<IrsSelectFieldsFilterChildrenResponse> GetIrsSelectFieldsFilterChildren(IrsSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<IrsSelectFieldsFilterChildrenRequest, IrsSelectFieldsFilterChildrenResponse>("getIrsSelectFieldsFilterChildren", payload, "account");


public Task<IrsPagedListSelectFieldsResponse> GetIrsPagedListSelectFields(IrsPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<IrsPagedListSelectFieldsRequest, IrsPagedListSelectFieldsResponse>("getIrsPagedListSelectFields", payload, "account");


public Task<IrsSearchPagedSelectFieldsResponse> SearchIrsPagedSelectFields(IrsSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<IrsSearchPagedSelectFieldsRequest, IrsSearchPagedSelectFieldsResponse>("searchIrsPagedSelectFields", payload, "account");


public Task<IrsDistributionSelectFieldsResponse> GetIrsDistributionSelectFields(IrsDistributionSelectFieldsRequest payload) =>
    _client.RequestAsync<IrsDistributionSelectFieldsRequest, IrsDistributionSelectFieldsResponse>("getIrsDistributionSelectFields", payload, "account");


public Task<IrsDistributionPagedListSelectFieldsResponse> GetIrsDistributionPagedListSelectFields(IrsDistributionPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<IrsDistributionPagedListSelectFieldsRequest, IrsDistributionPagedListSelectFieldsResponse>("getIrsDistributionPagedListSelectFields", payload, "account");


public Task<IrsDistributionSearchPagedSelectFieldsResponse> SearchIrsDistributionPagedSelectFields(IrsDistributionSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<IrsDistributionSearchPagedSelectFieldsRequest, IrsDistributionSearchPagedSelectFieldsResponse>("searchIrsDistributionPagedSelectFields", payload, "account");


public Task<IrsNameSelectFieldsResponse> GetIrsNameSelectFields(IrsNameSelectFieldsRequest payload) =>
    _client.RequestAsync<IrsNameSelectFieldsRequest, IrsNameSelectFieldsResponse>("getIrsNameSelectFields", payload, "account");


public Task<IrsNamePagedListSelectFieldsResponse> GetIrsNamePagedListSelectFields(IrsNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<IrsNamePagedListSelectFieldsRequest, IrsNamePagedListSelectFieldsResponse>("getIrsNamePagedListSelectFields", payload, "account");


public Task<IrsNameSearchPagedSelectFieldsResponse> SearchIrsNamePagedSelectFields(IrsNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<IrsNameSearchPagedSelectFieldsRequest, IrsNameSearchPagedSelectFieldsResponse>("searchIrsNamePagedSelectFields", payload, "account");


public Task<LoanSelectFieldsResponse> GetLoanSelectFields(LoanSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanSelectFieldsRequest, LoanSelectFieldsResponse>("getLoanSelectFields", payload, "account");


public Task<LoanSelectFieldsFilterChildrenResponse> GetLoanSelectFieldsFilterChildren(LoanSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<LoanSelectFieldsFilterChildrenRequest, LoanSelectFieldsFilterChildrenResponse>("getLoanSelectFieldsFilterChildren", payload, "account");


public Task<LoanPagedListSelectFieldsResponse> GetLoanPagedListSelectFields(LoanPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanPagedListSelectFieldsRequest, LoanPagedListSelectFieldsResponse>("getLoanPagedListSelectFields", payload, "account");


public Task<LoanSearchPagedSelectFieldsResponse> SearchLoanPagedSelectFields(LoanSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanSearchPagedSelectFieldsRequest, LoanSearchPagedSelectFieldsResponse>("searchLoanPagedSelectFields", payload, "account");


public Task<LoanBankruptcySelectFieldsResponse> GetLoanBankruptcySelectFields(LoanBankruptcySelectFieldsRequest payload) =>
    _client.RequestAsync<LoanBankruptcySelectFieldsRequest, LoanBankruptcySelectFieldsResponse>("getLoanBankruptcySelectFields", payload, "account");


public Task<LoanBankruptcySelectFieldsFilterChildrenResponse> GetLoanBankruptcySelectFieldsFilterChildren(LoanBankruptcySelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<LoanBankruptcySelectFieldsFilterChildrenRequest, LoanBankruptcySelectFieldsFilterChildrenResponse>("getLoanBankruptcySelectFieldsFilterChildren", payload, "account");


public Task<LoanBankruptcyPagedListSelectFieldsResponse> GetLoanBankruptcyPagedListSelectFields(LoanBankruptcyPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanBankruptcyPagedListSelectFieldsRequest, LoanBankruptcyPagedListSelectFieldsResponse>("getLoanBankruptcyPagedListSelectFields", payload, "account");


public Task<LoanBankruptcySearchPagedSelectFieldsResponse> SearchLoanBankruptcyPagedSelectFields(LoanBankruptcySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanBankruptcySearchPagedSelectFieldsRequest, LoanBankruptcySearchPagedSelectFieldsResponse>("searchLoanBankruptcyPagedSelectFields", payload, "account");


public Task<LoanBankruptcyPrepetitionBalSelectFieldsResponse> GetLoanBankruptcyPrepetitionBalSelectFields(LoanBankruptcyPrepetitionBalSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanBankruptcyPrepetitionBalSelectFieldsRequest, LoanBankruptcyPrepetitionBalSelectFieldsResponse>("getLoanBankruptcyPrepetitionBalSelectFields", payload, "account");


public Task<LoanBankruptcyPrepetitionBalPagedListSelectFieldsResponse> GetLoanBankruptcyPrepetitionBalPagedListSelectFields(LoanBankruptcyPrepetitionBalPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanBankruptcyPrepetitionBalPagedListSelectFieldsRequest, LoanBankruptcyPrepetitionBalPagedListSelectFieldsResponse>("getLoanBankruptcyPrepetitionBalPagedListSelectFields", payload, "account");


public Task<LoanBankruptcyPrepetitionBalSearchPagedSelectFieldsResponse> SearchLoanBankruptcyPrepetitionBalPagedSelectFields(LoanBankruptcyPrepetitionBalSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanBankruptcyPrepetitionBalSearchPagedSelectFieldsRequest, LoanBankruptcyPrepetitionBalSearchPagedSelectFieldsResponse>("searchLoanBankruptcyPrepetitionBalPagedSelectFields", payload, "account");


public Task<LoanBillingSelectFieldsResponse> GetLoanBillingSelectFields(LoanBillingSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanBillingSelectFieldsRequest, LoanBillingSelectFieldsResponse>("getLoanBillingSelectFields", payload, "account");


public Task<LoanBillingPagedListSelectFieldsResponse> GetLoanBillingPagedListSelectFields(LoanBillingPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanBillingPagedListSelectFieldsRequest, LoanBillingPagedListSelectFieldsResponse>("getLoanBillingPagedListSelectFields", payload, "account");


public Task<LoanBillingSearchPagedSelectFieldsResponse> SearchLoanBillingPagedSelectFields(LoanBillingSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanBillingSearchPagedSelectFieldsRequest, LoanBillingSearchPagedSelectFieldsResponse>("searchLoanBillingPagedSelectFields", payload, "account");


public Task<LoanCheckOrderSelectFieldsResponse> GetLoanCheckOrderSelectFields(LoanCheckOrderSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanCheckOrderSelectFieldsRequest, LoanCheckOrderSelectFieldsResponse>("getLoanCheckOrderSelectFields", payload, "account");


public Task<LoanCheckOrderPagedListSelectFieldsResponse> GetLoanCheckOrderPagedListSelectFields(LoanCheckOrderPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanCheckOrderPagedListSelectFieldsRequest, LoanCheckOrderPagedListSelectFieldsResponse>("getLoanCheckOrderPagedListSelectFields", payload, "account");


public Task<LoanCheckOrderSearchPagedSelectFieldsResponse> SearchLoanCheckOrderPagedSelectFields(LoanCheckOrderSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanCheckOrderSearchPagedSelectFieldsRequest, LoanCheckOrderSearchPagedSelectFieldsResponse>("searchLoanCheckOrderPagedSelectFields", payload, "account");


public Task<LoanEscrowSelectFieldsResponse> GetLoanEscrowSelectFields(LoanEscrowSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanEscrowSelectFieldsRequest, LoanEscrowSelectFieldsResponse>("getLoanEscrowSelectFields", payload, "account");


public Task<LoanEscrowPagedListSelectFieldsResponse> GetLoanEscrowPagedListSelectFields(LoanEscrowPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanEscrowPagedListSelectFieldsRequest, LoanEscrowPagedListSelectFieldsResponse>("getLoanEscrowPagedListSelectFields", payload, "account");


public Task<LoanEscrowSearchPagedSelectFieldsResponse> SearchLoanEscrowPagedSelectFields(LoanEscrowSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanEscrowSearchPagedSelectFieldsRequest, LoanEscrowSearchPagedSelectFieldsResponse>("searchLoanEscrowPagedSelectFields", payload, "account");


public Task<LoanEscrowAnalysisSelectFieldsResponse> GetLoanEscrowAnalysisSelectFields(LoanEscrowAnalysisSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanEscrowAnalysisSelectFieldsRequest, LoanEscrowAnalysisSelectFieldsResponse>("getLoanEscrowAnalysisSelectFields", payload, "account");


public Task<LoanEscrowAnalysisPagedListSelectFieldsResponse> GetLoanEscrowAnalysisPagedListSelectFields(LoanEscrowAnalysisPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanEscrowAnalysisPagedListSelectFieldsRequest, LoanEscrowAnalysisPagedListSelectFieldsResponse>("getLoanEscrowAnalysisPagedListSelectFields", payload, "account");


public Task<LoanEscrowAnalysisSearchPagedSelectFieldsResponse> SearchLoanEscrowAnalysisPagedSelectFields(LoanEscrowAnalysisSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanEscrowAnalysisSearchPagedSelectFieldsRequest, LoanEscrowAnalysisSearchPagedSelectFieldsResponse>("searchLoanEscrowAnalysisPagedSelectFields", payload, "account");


public Task<LoanHoldSelectFieldsResponse> GetLoanHoldSelectFields(LoanHoldSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanHoldSelectFieldsRequest, LoanHoldSelectFieldsResponse>("getLoanHoldSelectFields", payload, "account");


public Task<LoanHoldPagedListSelectFieldsResponse> GetLoanHoldPagedListSelectFields(LoanHoldPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanHoldPagedListSelectFieldsRequest, LoanHoldPagedListSelectFieldsResponse>("getLoanHoldPagedListSelectFields", payload, "account");


public Task<LoanHoldSearchPagedSelectFieldsResponse> SearchLoanHoldPagedSelectFields(LoanHoldSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanHoldSearchPagedSelectFieldsRequest, LoanHoldSearchPagedSelectFieldsResponse>("searchLoanHoldPagedSelectFields", payload, "account");


public Task<LoanLnSegmentSelectFieldsResponse> GetLoanLnSegmentSelectFields(LoanLnSegmentSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanLnSegmentSelectFieldsRequest, LoanLnSegmentSelectFieldsResponse>("getLoanLnSegmentSelectFields", payload, "account");


public Task<LoanLnSegmentSelectFieldsFilterChildrenResponse> GetLoanLnSegmentSelectFieldsFilterChildren(LoanLnSegmentSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<LoanLnSegmentSelectFieldsFilterChildrenRequest, LoanLnSegmentSelectFieldsFilterChildrenResponse>("getLoanLnSegmentSelectFieldsFilterChildren", payload, "account");


public Task<LoanLnSegmentPagedListSelectFieldsResponse> GetLoanLnSegmentPagedListSelectFields(LoanLnSegmentPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanLnSegmentPagedListSelectFieldsRequest, LoanLnSegmentPagedListSelectFieldsResponse>("getLoanLnSegmentPagedListSelectFields", payload, "account");


public Task<LoanLnSegmentSearchPagedSelectFieldsResponse> SearchLoanLnSegmentPagedSelectFields(LoanLnSegmentSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanLnSegmentSearchPagedSelectFieldsRequest, LoanLnSegmentSearchPagedSelectFieldsResponse>("searchLoanLnSegmentPagedSelectFields", payload, "account");


public Task<LoanLnSegmentBillingSelectFieldsResponse> GetLoanLnSegmentBillingSelectFields(LoanLnSegmentBillingSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanLnSegmentBillingSelectFieldsRequest, LoanLnSegmentBillingSelectFieldsResponse>("getLoanLnSegmentBillingSelectFields", payload, "account");


public Task<LoanLnSegmentBillingPagedListSelectFieldsResponse> GetLoanLnSegmentBillingPagedListSelectFields(LoanLnSegmentBillingPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanLnSegmentBillingPagedListSelectFieldsRequest, LoanLnSegmentBillingPagedListSelectFieldsResponse>("getLoanLnSegmentBillingPagedListSelectFields", payload, "account");


public Task<LoanLnSegmentBillingSearchPagedSelectFieldsResponse> SearchLoanLnSegmentBillingPagedSelectFields(LoanLnSegmentBillingSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanLnSegmentBillingSearchPagedSelectFieldsRequest, LoanLnSegmentBillingSearchPagedSelectFieldsResponse>("searchLoanLnSegmentBillingPagedSelectFields", payload, "account");


public Task<LoanNameSelectFieldsResponse> GetLoanNameSelectFields(LoanNameSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanNameSelectFieldsRequest, LoanNameSelectFieldsResponse>("getLoanNameSelectFields", payload, "account");


public Task<LoanNamePagedListSelectFieldsResponse> GetLoanNamePagedListSelectFields(LoanNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanNamePagedListSelectFieldsRequest, LoanNamePagedListSelectFieldsResponse>("getLoanNamePagedListSelectFields", payload, "account");


public Task<LoanNameSearchPagedSelectFieldsResponse> SearchLoanNamePagedSelectFields(LoanNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanNameSearchPagedSelectFieldsRequest, LoanNameSearchPagedSelectFieldsResponse>("searchLoanNamePagedSelectFields", payload, "account");


public Task<LoanNoteSelectFieldsResponse> GetLoanNoteSelectFields(LoanNoteSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanNoteSelectFieldsRequest, LoanNoteSelectFieldsResponse>("getLoanNoteSelectFields", payload, "account");


public Task<LoanNotePagedListSelectFieldsResponse> GetLoanNotePagedListSelectFields(LoanNotePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanNotePagedListSelectFieldsRequest, LoanNotePagedListSelectFieldsResponse>("getLoanNotePagedListSelectFields", payload, "account");


public Task<LoanNoteSearchPagedSelectFieldsResponse> SearchLoanNotePagedSelectFields(LoanNoteSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanNoteSearchPagedSelectFieldsRequest, LoanNoteSearchPagedSelectFieldsResponse>("searchLoanNotePagedSelectFields", payload, "account");


public Task<LoanPledgeSelectFieldsResponse> GetLoanPledgeSelectFields(LoanPledgeSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanPledgeSelectFieldsRequest, LoanPledgeSelectFieldsResponse>("getLoanPledgeSelectFields", payload, "account");


public Task<LoanPledgeSelectFieldsFilterChildrenResponse> GetLoanPledgeSelectFieldsFilterChildren(LoanPledgeSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<LoanPledgeSelectFieldsFilterChildrenRequest, LoanPledgeSelectFieldsFilterChildrenResponse>("getLoanPledgeSelectFieldsFilterChildren", payload, "account");


public Task<LoanPledgePagedListSelectFieldsResponse> GetLoanPledgePagedListSelectFields(LoanPledgePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanPledgePagedListSelectFieldsRequest, LoanPledgePagedListSelectFieldsResponse>("getLoanPledgePagedListSelectFields", payload, "account");


public Task<LoanPledgeSearchPagedSelectFieldsResponse> SearchLoanPledgePagedSelectFields(LoanPledgeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanPledgeSearchPagedSelectFieldsRequest, LoanPledgeSearchPagedSelectFieldsResponse>("searchLoanPledgePagedSelectFields", payload, "account");


public Task<LoanPledgeNameSelectFieldsResponse> GetLoanPledgeNameSelectFields(LoanPledgeNameSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanPledgeNameSelectFieldsRequest, LoanPledgeNameSelectFieldsResponse>("getLoanPledgeNameSelectFields", payload, "account");


public Task<LoanPledgeNamePagedListSelectFieldsResponse> GetLoanPledgeNamePagedListSelectFields(LoanPledgeNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanPledgeNamePagedListSelectFieldsRequest, LoanPledgeNamePagedListSelectFieldsResponse>("getLoanPledgeNamePagedListSelectFields", payload, "account");


public Task<LoanPledgeNameSearchPagedSelectFieldsResponse> SearchLoanPledgeNamePagedSelectFields(LoanPledgeNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanPledgeNameSearchPagedSelectFieldsRequest, LoanPledgeNameSearchPagedSelectFieldsResponse>("searchLoanPledgeNamePagedSelectFields", payload, "account");


public Task<LoanRateChangeSelectFieldsResponse> GetLoanRateChangeSelectFields(LoanRateChangeSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanRateChangeSelectFieldsRequest, LoanRateChangeSelectFieldsResponse>("getLoanRateChangeSelectFields", payload, "account");


public Task<LoanRateChangePagedListSelectFieldsResponse> GetLoanRateChangePagedListSelectFields(LoanRateChangePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanRateChangePagedListSelectFieldsRequest, LoanRateChangePagedListSelectFieldsResponse>("getLoanRateChangePagedListSelectFields", payload, "account");


public Task<LoanRateChangeSearchPagedSelectFieldsResponse> SearchLoanRateChangePagedSelectFields(LoanRateChangeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanRateChangeSearchPagedSelectFieldsRequest, LoanRateChangeSearchPagedSelectFieldsResponse>("searchLoanRateChangePagedSelectFields", payload, "account");


public Task<LoanScheduleSelectFieldsResponse> GetLoanScheduleSelectFields(LoanScheduleSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanScheduleSelectFieldsRequest, LoanScheduleSelectFieldsResponse>("getLoanScheduleSelectFields", payload, "account");


public Task<LoanSchedulePagedListSelectFieldsResponse> GetLoanSchedulePagedListSelectFields(LoanSchedulePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanSchedulePagedListSelectFieldsRequest, LoanSchedulePagedListSelectFieldsResponse>("getLoanSchedulePagedListSelectFields", payload, "account");


public Task<LoanScheduleSearchPagedSelectFieldsResponse> SearchLoanSchedulePagedSelectFields(LoanScheduleSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanScheduleSearchPagedSelectFieldsRequest, LoanScheduleSearchPagedSelectFieldsResponse>("searchLoanSchedulePagedSelectFields", payload, "account");


public Task<LoanTrackingSelectFieldsResponse> GetLoanTrackingSelectFields(LoanTrackingSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanTrackingSelectFieldsRequest, LoanTrackingSelectFieldsResponse>("getLoanTrackingSelectFields", payload, "account");


public Task<LoanTrackingPagedListSelectFieldsResponse> GetLoanTrackingPagedListSelectFields(LoanTrackingPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanTrackingPagedListSelectFieldsRequest, LoanTrackingPagedListSelectFieldsResponse>("getLoanTrackingPagedListSelectFields", payload, "account");


public Task<LoanTrackingSearchPagedSelectFieldsResponse> SearchLoanTrackingPagedSelectFields(LoanTrackingSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanTrackingSearchPagedSelectFieldsRequest, LoanTrackingSearchPagedSelectFieldsResponse>("searchLoanTrackingPagedSelectFields", payload, "account");


public Task<LoanTransactionPagedListSelectFieldsResponse> GetLoanTransactionPagedListSelectFields(LoanTransactionPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanTransactionPagedListSelectFieldsRequest, LoanTransactionPagedListSelectFieldsResponse>("getLoanTransactionPagedListSelectFields", payload, "account");


public Task<LoanTransactionSearchPagedSelectFieldsResponse> SearchLoanTransactionPagedSelectFields(LoanTransactionSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanTransactionSearchPagedSelectFieldsRequest, LoanTransactionSearchPagedSelectFieldsResponse>("searchLoanTransactionPagedSelectFields", payload, "account");


public Task<LoanTransferSelectFieldsResponse> GetLoanTransferSelectFields(LoanTransferSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanTransferSelectFieldsRequest, LoanTransferSelectFieldsResponse>("getLoanTransferSelectFields", payload, "account");


public Task<LoanTransferPagedListSelectFieldsResponse> GetLoanTransferPagedListSelectFields(LoanTransferPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanTransferPagedListSelectFieldsRequest, LoanTransferPagedListSelectFieldsResponse>("getLoanTransferPagedListSelectFields", payload, "account");


public Task<LoanTransferSearchPagedSelectFieldsResponse> SearchLoanTransferPagedSelectFields(LoanTransferSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanTransferSearchPagedSelectFieldsRequest, LoanTransferSearchPagedSelectFieldsResponse>("searchLoanTransferPagedSelectFields", payload, "account");


public Task<LoanAppSelectFieldsResponse> GetLoanAppSelectFields(LoanAppSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppSelectFieldsRequest, LoanAppSelectFieldsResponse>("getLoanAppSelectFields", payload, "account");


public Task<LoanAppSelectFieldsFilterChildrenResponse> GetLoanAppSelectFieldsFilterChildren(LoanAppSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<LoanAppSelectFieldsFilterChildrenRequest, LoanAppSelectFieldsFilterChildrenResponse>("getLoanAppSelectFieldsFilterChildren", payload, "account");


public Task<LoanAppPagedListSelectFieldsResponse> GetLoanAppPagedListSelectFields(LoanAppPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppPagedListSelectFieldsRequest, LoanAppPagedListSelectFieldsResponse>("getLoanAppPagedListSelectFields", payload, "account");


public Task<LoanAppSearchPagedSelectFieldsResponse> SearchLoanAppPagedSelectFields(LoanAppSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppSearchPagedSelectFieldsRequest, LoanAppSearchPagedSelectFieldsResponse>("searchLoanAppPagedSelectFields", payload, "account");


public Task<LoanAppEscrowSelectFieldsResponse> GetLoanAppEscrowSelectFields(LoanAppEscrowSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppEscrowSelectFieldsRequest, LoanAppEscrowSelectFieldsResponse>("getLoanAppEscrowSelectFields", payload, "account");


public Task<LoanAppEscrowPagedListSelectFieldsResponse> GetLoanAppEscrowPagedListSelectFields(LoanAppEscrowPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppEscrowPagedListSelectFieldsRequest, LoanAppEscrowPagedListSelectFieldsResponse>("getLoanAppEscrowPagedListSelectFields", payload, "account");


public Task<LoanAppEscrowSearchPagedSelectFieldsResponse> SearchLoanAppEscrowPagedSelectFields(LoanAppEscrowSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppEscrowSearchPagedSelectFieldsRequest, LoanAppEscrowSearchPagedSelectFieldsResponse>("searchLoanAppEscrowPagedSelectFields", payload, "account");


public Task<LoanAppEscrowAnalysisSelectFieldsResponse> GetLoanAppEscrowAnalysisSelectFields(LoanAppEscrowAnalysisSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppEscrowAnalysisSelectFieldsRequest, LoanAppEscrowAnalysisSelectFieldsResponse>("getLoanAppEscrowAnalysisSelectFields", payload, "account");


public Task<LoanAppEscrowAnalysisPagedListSelectFieldsResponse> GetLoanAppEscrowAnalysisPagedListSelectFields(LoanAppEscrowAnalysisPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppEscrowAnalysisPagedListSelectFieldsRequest, LoanAppEscrowAnalysisPagedListSelectFieldsResponse>("getLoanAppEscrowAnalysisPagedListSelectFields", payload, "account");


public Task<LoanAppEscrowAnalysisSearchPagedSelectFieldsResponse> SearchLoanAppEscrowAnalysisPagedSelectFields(LoanAppEscrowAnalysisSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppEscrowAnalysisSearchPagedSelectFieldsRequest, LoanAppEscrowAnalysisSearchPagedSelectFieldsResponse>("searchLoanAppEscrowAnalysisPagedSelectFields", payload, "account");


public Task<LoanAppFinanceSelectFieldsResponse> GetLoanAppFinanceSelectFields(LoanAppFinanceSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppFinanceSelectFieldsRequest, LoanAppFinanceSelectFieldsResponse>("getLoanAppFinanceSelectFields", payload, "account");


public Task<LoanAppFinancePagedListSelectFieldsResponse> GetLoanAppFinancePagedListSelectFields(LoanAppFinancePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppFinancePagedListSelectFieldsRequest, LoanAppFinancePagedListSelectFieldsResponse>("getLoanAppFinancePagedListSelectFields", payload, "account");


public Task<LoanAppFinanceSearchPagedSelectFieldsResponse> SearchLoanAppFinancePagedSelectFields(LoanAppFinanceSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppFinanceSearchPagedSelectFieldsRequest, LoanAppFinanceSearchPagedSelectFieldsResponse>("searchLoanAppFinancePagedSelectFields", payload, "account");


public Task<LoanAppLnSegmentSelectFieldsResponse> GetLoanAppLnSegmentSelectFields(LoanAppLnSegmentSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppLnSegmentSelectFieldsRequest, LoanAppLnSegmentSelectFieldsResponse>("getLoanAppLnSegmentSelectFields", payload, "account");


public Task<LoanAppLnSegmentPagedListSelectFieldsResponse> GetLoanAppLnSegmentPagedListSelectFields(LoanAppLnSegmentPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppLnSegmentPagedListSelectFieldsRequest, LoanAppLnSegmentPagedListSelectFieldsResponse>("getLoanAppLnSegmentPagedListSelectFields", payload, "account");


public Task<LoanAppLnSegmentSearchPagedSelectFieldsResponse> SearchLoanAppLnSegmentPagedSelectFields(LoanAppLnSegmentSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppLnSegmentSearchPagedSelectFieldsRequest, LoanAppLnSegmentSearchPagedSelectFieldsResponse>("searchLoanAppLnSegmentPagedSelectFields", payload, "account");


public Task<LoanAppNoteSelectFieldsResponse> GetLoanAppNoteSelectFields(LoanAppNoteSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppNoteSelectFieldsRequest, LoanAppNoteSelectFieldsResponse>("getLoanAppNoteSelectFields", payload, "account");


public Task<LoanAppNotePagedListSelectFieldsResponse> GetLoanAppNotePagedListSelectFields(LoanAppNotePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppNotePagedListSelectFieldsRequest, LoanAppNotePagedListSelectFieldsResponse>("getLoanAppNotePagedListSelectFields", payload, "account");


public Task<LoanAppNoteSearchPagedSelectFieldsResponse> SearchLoanAppNotePagedSelectFields(LoanAppNoteSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppNoteSearchPagedSelectFieldsRequest, LoanAppNoteSearchPagedSelectFieldsResponse>("searchLoanAppNotePagedSelectFields", payload, "account");


public Task<LoanAppPersonSelectFieldsResponse> GetLoanAppPersonSelectFields(LoanAppPersonSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppPersonSelectFieldsRequest, LoanAppPersonSelectFieldsResponse>("getLoanAppPersonSelectFields", payload, "account");


public Task<LoanAppPersonPagedListSelectFieldsResponse> GetLoanAppPersonPagedListSelectFields(LoanAppPersonPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppPersonPagedListSelectFieldsRequest, LoanAppPersonPagedListSelectFieldsResponse>("getLoanAppPersonPagedListSelectFields", payload, "account");


public Task<LoanAppPersonSearchPagedSelectFieldsResponse> SearchLoanAppPersonPagedSelectFields(LoanAppPersonSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppPersonSearchPagedSelectFieldsRequest, LoanAppPersonSearchPagedSelectFieldsResponse>("searchLoanAppPersonPagedSelectFields", payload, "account");


public Task<LoanAppPledgeSelectFieldsResponse> GetLoanAppPledgeSelectFields(LoanAppPledgeSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppPledgeSelectFieldsRequest, LoanAppPledgeSelectFieldsResponse>("getLoanAppPledgeSelectFields", payload, "account");


public Task<LoanAppPledgePagedListSelectFieldsResponse> GetLoanAppPledgePagedListSelectFields(LoanAppPledgePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppPledgePagedListSelectFieldsRequest, LoanAppPledgePagedListSelectFieldsResponse>("getLoanAppPledgePagedListSelectFields", payload, "account");


public Task<LoanAppPledgeSearchPagedSelectFieldsResponse> SearchLoanAppPledgePagedSelectFields(LoanAppPledgeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppPledgeSearchPagedSelectFieldsRequest, LoanAppPledgeSearchPagedSelectFieldsResponse>("searchLoanAppPledgePagedSelectFields", payload, "account");


public Task<LoanAppScheduleSelectFieldsResponse> GetLoanAppScheduleSelectFields(LoanAppScheduleSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppScheduleSelectFieldsRequest, LoanAppScheduleSelectFieldsResponse>("getLoanAppScheduleSelectFields", payload, "account");


public Task<LoanAppSchedulePagedListSelectFieldsResponse> GetLoanAppSchedulePagedListSelectFields(LoanAppSchedulePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppSchedulePagedListSelectFieldsRequest, LoanAppSchedulePagedListSelectFieldsResponse>("getLoanAppSchedulePagedListSelectFields", payload, "account");


public Task<LoanAppScheduleSearchPagedSelectFieldsResponse> SearchLoanAppSchedulePagedSelectFields(LoanAppScheduleSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppScheduleSearchPagedSelectFieldsRequest, LoanAppScheduleSearchPagedSelectFieldsResponse>("searchLoanAppSchedulePagedSelectFields", payload, "account");


public Task<LoanAppTrackingSelectFieldsResponse> GetLoanAppTrackingSelectFields(LoanAppTrackingSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppTrackingSelectFieldsRequest, LoanAppTrackingSelectFieldsResponse>("getLoanAppTrackingSelectFields", payload, "account");


public Task<LoanAppTrackingPagedListSelectFieldsResponse> GetLoanAppTrackingPagedListSelectFields(LoanAppTrackingPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppTrackingPagedListSelectFieldsRequest, LoanAppTrackingPagedListSelectFieldsResponse>("getLoanAppTrackingPagedListSelectFields", payload, "account");


public Task<LoanAppTrackingSearchPagedSelectFieldsResponse> SearchLoanAppTrackingPagedSelectFields(LoanAppTrackingSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LoanAppTrackingSearchPagedSelectFieldsRequest, LoanAppTrackingSearchPagedSelectFieldsResponse>("searchLoanAppTrackingPagedSelectFields", payload, "account");


public Task<LookupSelectFieldsResponse> GetLookupSelectFields(LookupSelectFieldsRequest payload) =>
    _client.RequestAsync<LookupSelectFieldsRequest, LookupSelectFieldsResponse>("getLookupSelectFields", payload, "account");


public Task<LookupPagedListSelectFieldsResponse> GetLookupPagedListSelectFields(LookupPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<LookupPagedListSelectFieldsRequest, LookupPagedListSelectFieldsResponse>("getLookupPagedListSelectFields", payload, "account");


public Task<LookupSearchPagedSelectFieldsResponse> SearchLookupPagedSelectFields(LookupSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<LookupSearchPagedSelectFieldsRequest, LookupSearchPagedSelectFieldsResponse>("searchLookupPagedSelectFields", payload, "account");


public Task<NameSelectFieldsResponse> GetNameSelectFields(NameSelectFieldsRequest payload) =>
    _client.RequestAsync<NameSelectFieldsRequest, NameSelectFieldsResponse>("getNameSelectFields", payload, "account");


public Task<NamePagedListSelectFieldsResponse> GetNamePagedListSelectFields(NamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<NamePagedListSelectFieldsRequest, NamePagedListSelectFieldsResponse>("getNamePagedListSelectFields", payload, "account");


public Task<NameSearchPagedSelectFieldsResponse> SearchNamePagedSelectFields(NameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<NameSearchPagedSelectFieldsRequest, NameSearchPagedSelectFieldsResponse>("searchNamePagedSelectFields", payload, "account");


public Task<NoteSelectFieldsResponse> GetNoteSelectFields(NoteSelectFieldsRequest payload) =>
    _client.RequestAsync<NoteSelectFieldsRequest, NoteSelectFieldsResponse>("getNoteSelectFields", payload, "account");


public Task<NotePagedListSelectFieldsResponse> GetNotePagedListSelectFields(NotePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<NotePagedListSelectFieldsRequest, NotePagedListSelectFieldsResponse>("getNotePagedListSelectFields", payload, "account");


public Task<NoteSearchPagedSelectFieldsResponse> SearchNotePagedSelectFields(NoteSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<NoteSearchPagedSelectFieldsRequest, NoteSearchPagedSelectFieldsResponse>("searchNotePagedSelectFields", payload, "account");


public Task<PledgeSelectFieldsResponse> GetPledgeSelectFields(PledgeSelectFieldsRequest payload) =>
    _client.RequestAsync<PledgeSelectFieldsRequest, PledgeSelectFieldsResponse>("getPledgeSelectFields", payload, "account");


public Task<PledgePagedListSelectFieldsResponse> GetPledgePagedListSelectFields(PledgePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<PledgePagedListSelectFieldsRequest, PledgePagedListSelectFieldsResponse>("getPledgePagedListSelectFields", payload, "account");


public Task<PledgeSearchPagedSelectFieldsResponse> SearchPledgePagedSelectFields(PledgeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<PledgeSearchPagedSelectFieldsRequest, PledgeSearchPagedSelectFieldsResponse>("searchPledgePagedSelectFields", payload, "account");


public Task<PortfolioSelectFieldsResponse> GetPortfolioSelectFields(PortfolioSelectFieldsRequest payload) =>
    _client.RequestAsync<PortfolioSelectFieldsRequest, PortfolioSelectFieldsResponse>("getPortfolioSelectFields", payload, "account");


public Task<PortfolioSelectFieldsFilterChildrenResponse> GetPortfolioSelectFieldsFilterChildren(PortfolioSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<PortfolioSelectFieldsFilterChildrenRequest, PortfolioSelectFieldsFilterChildrenResponse>("getPortfolioSelectFieldsFilterChildren", payload, "account");


public Task<PortfolioPagedListSelectFieldsResponse> GetPortfolioPagedListSelectFields(PortfolioPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<PortfolioPagedListSelectFieldsRequest, PortfolioPagedListSelectFieldsResponse>("getPortfolioPagedListSelectFields", payload, "account");


public Task<PortfolioSearchPagedSelectFieldsResponse> SearchPortfolioPagedSelectFields(PortfolioSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<PortfolioSearchPagedSelectFieldsRequest, PortfolioSearchPagedSelectFieldsResponse>("searchPortfolioPagedSelectFields", payload, "account");


public Task<PortfolioHoldSelectFieldsResponse> GetPortfolioHoldSelectFields(PortfolioHoldSelectFieldsRequest payload) =>
    _client.RequestAsync<PortfolioHoldSelectFieldsRequest, PortfolioHoldSelectFieldsResponse>("getPortfolioHoldSelectFields", payload, "account");


public Task<PortfolioHoldPagedListSelectFieldsResponse> GetPortfolioHoldPagedListSelectFields(PortfolioHoldPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<PortfolioHoldPagedListSelectFieldsRequest, PortfolioHoldPagedListSelectFieldsResponse>("getPortfolioHoldPagedListSelectFields", payload, "account");


public Task<PortfolioHoldSearchPagedSelectFieldsResponse> SearchPortfolioHoldPagedSelectFields(PortfolioHoldSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<PortfolioHoldSearchPagedSelectFieldsRequest, PortfolioHoldSearchPagedSelectFieldsResponse>("searchPortfolioHoldPagedSelectFields", payload, "account");


public Task<PortfolioNoteSelectFieldsResponse> GetPortfolioNoteSelectFields(PortfolioNoteSelectFieldsRequest payload) =>
    _client.RequestAsync<PortfolioNoteSelectFieldsRequest, PortfolioNoteSelectFieldsResponse>("getPortfolioNoteSelectFields", payload, "account");


public Task<PortfolioNotePagedListSelectFieldsResponse> GetPortfolioNotePagedListSelectFields(PortfolioNotePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<PortfolioNotePagedListSelectFieldsRequest, PortfolioNotePagedListSelectFieldsResponse>("getPortfolioNotePagedListSelectFields", payload, "account");


public Task<PortfolioNoteSearchPagedSelectFieldsResponse> SearchPortfolioNotePagedSelectFields(PortfolioNoteSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<PortfolioNoteSearchPagedSelectFieldsRequest, PortfolioNoteSearchPagedSelectFieldsResponse>("searchPortfolioNotePagedSelectFields", payload, "account");


public Task<PortfolioTrackingSelectFieldsResponse> GetPortfolioTrackingSelectFields(PortfolioTrackingSelectFieldsRequest payload) =>
    _client.RequestAsync<PortfolioTrackingSelectFieldsRequest, PortfolioTrackingSelectFieldsResponse>("getPortfolioTrackingSelectFields", payload, "account");


public Task<PortfolioTrackingPagedListSelectFieldsResponse> GetPortfolioTrackingPagedListSelectFields(PortfolioTrackingPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<PortfolioTrackingPagedListSelectFieldsRequest, PortfolioTrackingPagedListSelectFieldsResponse>("getPortfolioTrackingPagedListSelectFields", payload, "account");


public Task<PortfolioTrackingSearchPagedSelectFieldsResponse> SearchPortfolioTrackingPagedSelectFields(PortfolioTrackingSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<PortfolioTrackingSearchPagedSelectFieldsRequest, PortfolioTrackingSearchPagedSelectFieldsResponse>("searchPortfolioTrackingPagedSelectFields", payload, "account");


public Task<PreferenceSelectFieldsResponse> GetPreferenceSelectFields(PreferenceSelectFieldsRequest payload) =>
    _client.RequestAsync<PreferenceSelectFieldsRequest, PreferenceSelectFieldsResponse>("getPreferenceSelectFields", payload, "account");


public Task<PreferenceSelectFieldsFilterChildrenResponse> GetPreferenceSelectFieldsFilterChildren(PreferenceSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<PreferenceSelectFieldsFilterChildrenRequest, PreferenceSelectFieldsFilterChildrenResponse>("getPreferenceSelectFieldsFilterChildren", payload, "account");


public Task<PreferencePagedListSelectFieldsResponse> GetPreferencePagedListSelectFields(PreferencePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<PreferencePagedListSelectFieldsRequest, PreferencePagedListSelectFieldsResponse>("getPreferencePagedListSelectFields", payload, "account");


public Task<PreferenceSearchPagedSelectFieldsResponse> SearchPreferencePagedSelectFields(PreferenceSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<PreferenceSearchPagedSelectFieldsRequest, PreferenceSearchPagedSelectFieldsResponse>("searchPreferencePagedSelectFields", payload, "account");


public Task<PreferenceAccessSelectFieldsResponse> GetPreferenceAccessSelectFields(PreferenceAccessSelectFieldsRequest payload) =>
    _client.RequestAsync<PreferenceAccessSelectFieldsRequest, PreferenceAccessSelectFieldsResponse>("getPreferenceAccessSelectFields", payload, "account");


public Task<PreferenceAccessPagedListSelectFieldsResponse> GetPreferenceAccessPagedListSelectFields(PreferenceAccessPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<PreferenceAccessPagedListSelectFieldsRequest, PreferenceAccessPagedListSelectFieldsResponse>("getPreferenceAccessPagedListSelectFields", payload, "account");


public Task<PreferenceAccessSearchPagedSelectFieldsResponse> SearchPreferenceAccessPagedSelectFields(PreferenceAccessSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<PreferenceAccessSearchPagedSelectFieldsRequest, PreferenceAccessSearchPagedSelectFieldsResponse>("searchPreferenceAccessPagedSelectFields", payload, "account");


public Task<ShareSelectFieldsResponse> GetShareSelectFields(ShareSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareSelectFieldsRequest, ShareSelectFieldsResponse>("getShareSelectFields", payload, "account");


public Task<ShareSelectFieldsFilterChildrenResponse> GetShareSelectFieldsFilterChildren(ShareSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<ShareSelectFieldsFilterChildrenRequest, ShareSelectFieldsFilterChildrenResponse>("getShareSelectFieldsFilterChildren", payload, "account");


public Task<SharePagedListSelectFieldsResponse> GetSharePagedListSelectFields(SharePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<SharePagedListSelectFieldsRequest, SharePagedListSelectFieldsResponse>("getSharePagedListSelectFields", payload, "account");


public Task<ShareSearchPagedSelectFieldsResponse> SearchSharePagedSelectFields(ShareSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareSearchPagedSelectFieldsRequest, ShareSearchPagedSelectFieldsResponse>("searchSharePagedSelectFields", payload, "account");


public Task<ShareAnalysisSelectFieldsResponse> GetShareAnalysisSelectFields(ShareAnalysisSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareAnalysisSelectFieldsRequest, ShareAnalysisSelectFieldsResponse>("getShareAnalysisSelectFields", payload, "account");


public Task<ShareAnalysisPagedListSelectFieldsResponse> GetShareAnalysisPagedListSelectFields(ShareAnalysisPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareAnalysisPagedListSelectFieldsRequest, ShareAnalysisPagedListSelectFieldsResponse>("getShareAnalysisPagedListSelectFields", payload, "account");


public Task<ShareAnalysisSearchPagedSelectFieldsResponse> SearchShareAnalysisPagedSelectFields(ShareAnalysisSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareAnalysisSearchPagedSelectFieldsRequest, ShareAnalysisSearchPagedSelectFieldsResponse>("searchShareAnalysisPagedSelectFields", payload, "account");


public Task<ShareAnalysisGroupSelectFieldsResponse> GetShareAnalysisGroupSelectFields(ShareAnalysisGroupSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareAnalysisGroupSelectFieldsRequest, ShareAnalysisGroupSelectFieldsResponse>("getShareAnalysisGroupSelectFields", payload, "account");


public Task<ShareAnalysisGroupPagedListSelectFieldsResponse> GetShareAnalysisGroupPagedListSelectFields(ShareAnalysisGroupPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareAnalysisGroupPagedListSelectFieldsRequest, ShareAnalysisGroupPagedListSelectFieldsResponse>("getShareAnalysisGroupPagedListSelectFields", payload, "account");


public Task<ShareAnalysisGroupSearchPagedSelectFieldsResponse> SearchShareAnalysisGroupPagedSelectFields(ShareAnalysisGroupSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareAnalysisGroupSearchPagedSelectFieldsRequest, ShareAnalysisGroupSearchPagedSelectFieldsResponse>("searchShareAnalysisGroupPagedSelectFields", payload, "account");


public Task<ShareAnalysisPlanSelectFieldsResponse> GetShareAnalysisPlanSelectFields(ShareAnalysisPlanSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareAnalysisPlanSelectFieldsRequest, ShareAnalysisPlanSelectFieldsResponse>("getShareAnalysisPlanSelectFields", payload, "account");


public Task<ShareAnalysisPlanPagedListSelectFieldsResponse> GetShareAnalysisPlanPagedListSelectFields(ShareAnalysisPlanPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareAnalysisPlanPagedListSelectFieldsRequest, ShareAnalysisPlanPagedListSelectFieldsResponse>("getShareAnalysisPlanPagedListSelectFields", payload, "account");


public Task<ShareAnalysisPlanSearchPagedSelectFieldsResponse> SearchShareAnalysisPlanPagedSelectFields(ShareAnalysisPlanSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareAnalysisPlanSearchPagedSelectFieldsRequest, ShareAnalysisPlanSearchPagedSelectFieldsResponse>("searchShareAnalysisPlanPagedSelectFields", payload, "account");


public Task<ShareCheckOrderSelectFieldsResponse> GetShareCheckOrderSelectFields(ShareCheckOrderSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareCheckOrderSelectFieldsRequest, ShareCheckOrderSelectFieldsResponse>("getShareCheckOrderSelectFields", payload, "account");


public Task<ShareCheckOrderPagedListSelectFieldsResponse> GetShareCheckOrderPagedListSelectFields(ShareCheckOrderPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareCheckOrderPagedListSelectFieldsRequest, ShareCheckOrderPagedListSelectFieldsResponse>("getShareCheckOrderPagedListSelectFields", payload, "account");


public Task<ShareCheckOrderSearchPagedSelectFieldsResponse> SearchShareCheckOrderPagedSelectFields(ShareCheckOrderSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareCheckOrderSearchPagedSelectFieldsRequest, ShareCheckOrderSearchPagedSelectFieldsResponse>("searchShareCheckOrderPagedSelectFields", payload, "account");


public Task<ShareHoldSelectFieldsResponse> GetShareHoldSelectFields(ShareHoldSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareHoldSelectFieldsRequest, ShareHoldSelectFieldsResponse>("getShareHoldSelectFields", payload, "account");


public Task<ShareHoldPagedListSelectFieldsResponse> GetShareHoldPagedListSelectFields(ShareHoldPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareHoldPagedListSelectFieldsRequest, ShareHoldPagedListSelectFieldsResponse>("getShareHoldPagedListSelectFields", payload, "account");


public Task<ShareHoldSearchPagedSelectFieldsResponse> SearchShareHoldPagedSelectFields(ShareHoldSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareHoldSearchPagedSelectFieldsRequest, ShareHoldSearchPagedSelectFieldsResponse>("searchShareHoldPagedSelectFields", payload, "account");


public Task<ShareNameSelectFieldsResponse> GetShareNameSelectFields(ShareNameSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareNameSelectFieldsRequest, ShareNameSelectFieldsResponse>("getShareNameSelectFields", payload, "account");


public Task<ShareNamePagedListSelectFieldsResponse> GetShareNamePagedListSelectFields(ShareNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareNamePagedListSelectFieldsRequest, ShareNamePagedListSelectFieldsResponse>("getShareNamePagedListSelectFields", payload, "account");


public Task<ShareNameSearchPagedSelectFieldsResponse> SearchShareNamePagedSelectFields(ShareNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareNameSearchPagedSelectFieldsRequest, ShareNameSearchPagedSelectFieldsResponse>("searchShareNamePagedSelectFields", payload, "account");


public Task<ShareNoteSelectFieldsResponse> GetShareNoteSelectFields(ShareNoteSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareNoteSelectFieldsRequest, ShareNoteSelectFieldsResponse>("getShareNoteSelectFields", payload, "account");


public Task<ShareNotePagedListSelectFieldsResponse> GetShareNotePagedListSelectFields(ShareNotePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareNotePagedListSelectFieldsRequest, ShareNotePagedListSelectFieldsResponse>("getShareNotePagedListSelectFields", payload, "account");


public Task<ShareNoteSearchPagedSelectFieldsResponse> SearchShareNotePagedSelectFields(ShareNoteSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareNoteSearchPagedSelectFieldsRequest, ShareNoteSearchPagedSelectFieldsResponse>("searchShareNotePagedSelectFields", payload, "account");


public Task<ShareTrackingSelectFieldsResponse> GetShareTrackingSelectFields(ShareTrackingSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareTrackingSelectFieldsRequest, ShareTrackingSelectFieldsResponse>("getShareTrackingSelectFields", payload, "account");


public Task<ShareTrackingPagedListSelectFieldsResponse> GetShareTrackingPagedListSelectFields(ShareTrackingPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareTrackingPagedListSelectFieldsRequest, ShareTrackingPagedListSelectFieldsResponse>("getShareTrackingPagedListSelectFields", payload, "account");


public Task<ShareTrackingSearchPagedSelectFieldsResponse> SearchShareTrackingPagedSelectFields(ShareTrackingSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareTrackingSearchPagedSelectFieldsRequest, ShareTrackingSearchPagedSelectFieldsResponse>("searchShareTrackingPagedSelectFields", payload, "account");


public Task<ShareTransactionPagedListSelectFieldsResponse> GetShareTransactionPagedListSelectFields(ShareTransactionPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareTransactionPagedListSelectFieldsRequest, ShareTransactionPagedListSelectFieldsResponse>("getShareTransactionPagedListSelectFields", payload, "account");


public Task<ShareTransactionSearchPagedSelectFieldsResponse> SearchShareTransactionPagedSelectFields(ShareTransactionSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareTransactionSearchPagedSelectFieldsRequest, ShareTransactionSearchPagedSelectFieldsResponse>("searchShareTransactionPagedSelectFields", payload, "account");


public Task<ShareTransferSelectFieldsResponse> GetShareTransferSelectFields(ShareTransferSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareTransferSelectFieldsRequest, ShareTransferSelectFieldsResponse>("getShareTransferSelectFields", payload, "account");


public Task<ShareTransferPagedListSelectFieldsResponse> GetShareTransferPagedListSelectFields(ShareTransferPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareTransferPagedListSelectFieldsRequest, ShareTransferPagedListSelectFieldsResponse>("getShareTransferPagedListSelectFields", payload, "account");


public Task<ShareTransferSearchPagedSelectFieldsResponse> SearchShareTransferPagedSelectFields(ShareTransferSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ShareTransferSearchPagedSelectFieldsRequest, ShareTransferSearchPagedSelectFieldsResponse>("searchShareTransferPagedSelectFields", payload, "account");


public Task<SiteSelectFieldsResponse> GetSiteSelectFields(SiteSelectFieldsRequest payload) =>
    _client.RequestAsync<SiteSelectFieldsRequest, SiteSelectFieldsResponse>("getSiteSelectFields", payload, "account");


public Task<SiteSelectFieldsFilterChildrenResponse> GetSiteSelectFieldsFilterChildren(SiteSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<SiteSelectFieldsFilterChildrenRequest, SiteSelectFieldsFilterChildrenResponse>("getSiteSelectFieldsFilterChildren", payload, "account");


public Task<SitePagedListSelectFieldsResponse> GetSitePagedListSelectFields(SitePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<SitePagedListSelectFieldsRequest, SitePagedListSelectFieldsResponse>("getSitePagedListSelectFields", payload, "account");


public Task<SiteSearchPagedSelectFieldsResponse> SearchSitePagedSelectFields(SiteSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<SiteSearchPagedSelectFieldsRequest, SiteSearchPagedSelectFieldsResponse>("searchSitePagedSelectFields", payload, "account");


public Task<SiteCashOrderTypeSelectFieldsResponse> GetSiteCashOrderTypeSelectFields(SiteCashOrderTypeSelectFieldsRequest payload) =>
    _client.RequestAsync<SiteCashOrderTypeSelectFieldsRequest, SiteCashOrderTypeSelectFieldsResponse>("getSiteCashOrderTypeSelectFields", payload, "account");


public Task<SiteCashOrderTypePagedListSelectFieldsResponse> GetSiteCashOrderTypePagedListSelectFields(SiteCashOrderTypePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<SiteCashOrderTypePagedListSelectFieldsRequest, SiteCashOrderTypePagedListSelectFieldsResponse>("getSiteCashOrderTypePagedListSelectFields", payload, "account");


public Task<SiteCashOrderTypeSearchPagedSelectFieldsResponse> SearchSiteCashOrderTypePagedSelectFields(SiteCashOrderTypeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<SiteCashOrderTypeSearchPagedSelectFieldsRequest, SiteCashOrderTypeSearchPagedSelectFieldsResponse>("searchSiteCashOrderTypePagedSelectFields", payload, "account");


public Task<TrackingSelectFieldsResponse> GetTrackingSelectFields(TrackingSelectFieldsRequest payload) =>
    _client.RequestAsync<TrackingSelectFieldsRequest, TrackingSelectFieldsResponse>("getTrackingSelectFields", payload, "account");


public Task<TrackingPagedListSelectFieldsResponse> GetTrackingPagedListSelectFields(TrackingPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<TrackingPagedListSelectFieldsRequest, TrackingPagedListSelectFieldsResponse>("getTrackingPagedListSelectFields", payload, "account");


public Task<TrackingSearchPagedSelectFieldsResponse> SearchTrackingPagedSelectFields(TrackingSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<TrackingSearchPagedSelectFieldsRequest, TrackingSearchPagedSelectFieldsResponse>("searchTrackingPagedSelectFields", payload, "account");


public Task<AccountUpdateByIDResponse> UpdateAccountByID(UpdateAccountByIDRequest payload) =>
    _client.RequestAsync<UpdateAccountByIDRequest, AccountUpdateByIDResponse>("updateAccountByID", payload, "account");


public Task<BatchAchOrigUpdateByIDResponse> UpdateBatchAchOrigByID(UpdateBatchAchOrigByIDRequest payload) =>
    _client.RequestAsync<UpdateBatchAchOrigByIDRequest, BatchAchOrigUpdateByIDResponse>("updateBatchAchOrigByID", payload, "account");


public Task<CardUpdateByIDResponse> UpdateCardByID(UpdateCardByIDRequest payload) =>
    _client.RequestAsync<UpdateCardByIDRequest, CardUpdateByIDResponse>("updateCardByID", payload, "account");


public Task<CardAccessUpdateByIDResponse> UpdateCardAccessByID(UpdateCardAccessByIDRequest payload) =>
    _client.RequestAsync<UpdateCardAccessByIDRequest, CardAccessUpdateByIDResponse>("updateCardAccessByID", payload, "account");


public Task<CardNameUpdateByIDResponse> UpdateCardNameByID(UpdateCardNameByIDRequest payload) =>
    _client.RequestAsync<UpdateCardNameByIDRequest, CardNameUpdateByIDResponse>("updateCardNameByID", payload, "account");


public Task<CardNoteUpdateByIDResponse> UpdateCardNoteByID(UpdateCardNoteByIDRequest payload) =>
    _client.RequestAsync<UpdateCardNoteByIDRequest, CardNoteUpdateByIDResponse>("updateCardNoteByID", payload, "account");


public Task<CpWorkCardTrackingUpdateByIDResponse> UpdateCpWorkCardTrackingByID(UpdateCpWorkCardTrackingByIDRequest payload) =>
    _client.RequestAsync<UpdateCpWorkCardTrackingByIDRequest, CpWorkCardTrackingUpdateByIDResponse>("updateCpWorkCardTrackingByID", payload, "account");


public Task<EftUpdateByIDResponse> UpdateEftByID(UpdateEftByIDRequest payload) =>
    _client.RequestAsync<UpdateEftByIDRequest, EftUpdateByIDResponse>("updateEftByID", payload, "account");


public Task<EftAddendaInfoUpdateByIDResponse> UpdateEftAddendaInfoByID(UpdateEftAddendaInfoByIDRequest payload) =>
    _client.RequestAsync<UpdateEftAddendaInfoByIDRequest, EftAddendaInfoUpdateByIDResponse>("updateEftAddendaInfoByID", payload, "account");


public Task<EftNameUpdateByIDResponse> UpdateEftNameByID(UpdateEftNameByIDRequest payload) =>
    _client.RequestAsync<UpdateEftNameByIDRequest, EftNameUpdateByIDResponse>("updateEftNameByID", payload, "account");


public Task<EftTransferUpdateByIDResponse> UpdateEftTransferByID(UpdateEftTransferByIDRequest payload) =>
    _client.RequestAsync<UpdateEftTransferByIDRequest, EftTransferUpdateByIDResponse>("updateEftTransferByID", payload, "account");


public Task<ExternalAccountUpdateByIDResponse> UpdateExternalAccountByID(UpdateExternalAccountByIDRequest payload) =>
    _client.RequestAsync<UpdateExternalAccountByIDRequest, ExternalAccountUpdateByIDResponse>("updateExternalAccountByID", payload, "account");


public Task<ExternalLoanUpdateByIDResponse> UpdateExternalLoanByID(UpdateExternalLoanByIDRequest payload) =>
    _client.RequestAsync<UpdateExternalLoanByIDRequest, ExternalLoanUpdateByIDResponse>("updateExternalLoanByID", payload, "account");


public Task<ExternalLoanNameUpdateByIDResponse> UpdateExternalLoanNameByID(UpdateExternalLoanNameByIDRequest payload) =>
    _client.RequestAsync<UpdateExternalLoanNameByIDRequest, ExternalLoanNameUpdateByIDResponse>("updateExternalLoanNameByID", payload, "account");


public Task<ExternalLoanNoteUpdateByIDResponse> UpdateExternalLoanNoteByID(UpdateExternalLoanNoteByIDRequest payload) =>
    _client.RequestAsync<UpdateExternalLoanNoteByIDRequest, ExternalLoanNoteUpdateByIDResponse>("updateExternalLoanNoteByID", payload, "account");


public Task<ExternalLoanTrackingUpdateByIDResponse> UpdateExternalLoanTrackingByID(UpdateExternalLoanTrackingByIDRequest payload) =>
    _client.RequestAsync<UpdateExternalLoanTrackingByIDRequest, ExternalLoanTrackingUpdateByIDResponse>("updateExternalLoanTrackingByID", payload, "account");


public Task<ExternalLoanTransferUpdateByIDResponse> UpdateExternalLoanTransferByID(UpdateExternalLoanTransferByIDRequest payload) =>
    _client.RequestAsync<UpdateExternalLoanTransferByIDRequest, ExternalLoanTransferUpdateByIDResponse>("updateExternalLoanTransferByID", payload, "account");


public Task<HouseholdUpdateByIDResponse> UpdateHouseholdByID(UpdateHouseholdByIDRequest payload) =>
    _client.RequestAsync<UpdateHouseholdByIDRequest, HouseholdUpdateByIDResponse>("updateHouseholdByID", payload, "account");


public Task<IrsUpdateByIDResponse> UpdateIrsByID(UpdateIrsByIDRequest payload) =>
    _client.RequestAsync<UpdateIrsByIDRequest, IrsUpdateByIDResponse>("updateIrsByID", payload, "account");


public Task<IrsDistributionUpdateByIDResponse> UpdateIrsDistributionByID(UpdateIrsDistributionByIDRequest payload) =>
    _client.RequestAsync<UpdateIrsDistributionByIDRequest, IrsDistributionUpdateByIDResponse>("updateIrsDistributionByID", payload, "account");


public Task<IrsNameUpdateByIDResponse> UpdateIrsNameByID(UpdateIrsNameByIDRequest payload) =>
    _client.RequestAsync<UpdateIrsNameByIDRequest, IrsNameUpdateByIDResponse>("updateIrsNameByID", payload, "account");


public Task<LoanUpdateByIDResponse> UpdateLoanByID(UpdateLoanByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanByIDRequest, LoanUpdateByIDResponse>("updateLoanByID", payload, "account");


public Task<LoanBankruptcyUpdateByIDResponse> UpdateLoanBankruptcyByID(UpdateLoanBankruptcyByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanBankruptcyByIDRequest, LoanBankruptcyUpdateByIDResponse>("updateLoanBankruptcyByID", payload, "account");


public Task<LoanBankruptcyPrepetitionBalUpdateByIDResponse> UpdateLoanBankruptcyPrepetitionBalByID(UpdateLoanBankruptcyPrepetitionBalByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanBankruptcyPrepetitionBalByIDRequest, LoanBankruptcyPrepetitionBalUpdateByIDResponse>("updateLoanBankruptcyPrepetitionBalByID", payload, "account");


public Task<LoanBillingUpdateByIDResponse> UpdateLoanBillingByID(UpdateLoanBillingByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanBillingByIDRequest, LoanBillingUpdateByIDResponse>("updateLoanBillingByID", payload, "account");


public Task<LoanCheckOrderUpdateByIDResponse> UpdateLoanCheckOrderByID(UpdateLoanCheckOrderByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanCheckOrderByIDRequest, LoanCheckOrderUpdateByIDResponse>("updateLoanCheckOrderByID", payload, "account");


public Task<LoanEscrowUpdateByIDResponse> UpdateLoanEscrowByID(UpdateLoanEscrowByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanEscrowByIDRequest, LoanEscrowUpdateByIDResponse>("updateLoanEscrowByID", payload, "account");


public Task<LoanEscrowAnalysisUpdateByIDResponse> UpdateLoanEscrowAnalysisByID(UpdateLoanEscrowAnalysisByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanEscrowAnalysisByIDRequest, LoanEscrowAnalysisUpdateByIDResponse>("updateLoanEscrowAnalysisByID", payload, "account");


public Task<LoanHoldUpdateByIDResponse> UpdateLoanHoldByID(UpdateLoanHoldByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanHoldByIDRequest, LoanHoldUpdateByIDResponse>("updateLoanHoldByID", payload, "account");


public Task<LoanLnSegmentUpdateByIDResponse> UpdateLoanLnSegmentByID(UpdateLoanLnSegmentByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanLnSegmentByIDRequest, LoanLnSegmentUpdateByIDResponse>("updateLoanLnSegmentByID", payload, "account");


public Task<LoanLnSegmentBillingUpdateByIDResponse> UpdateLoanLnSegmentBillingByID(UpdateLoanLnSegmentBillingByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanLnSegmentBillingByIDRequest, LoanLnSegmentBillingUpdateByIDResponse>("updateLoanLnSegmentBillingByID", payload, "account");


public Task<LoanNameUpdateByIDResponse> UpdateLoanNameByID(UpdateLoanNameByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanNameByIDRequest, LoanNameUpdateByIDResponse>("updateLoanNameByID", payload, "account");


public Task<LoanNoteUpdateByIDResponse> UpdateLoanNoteByID(UpdateLoanNoteByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanNoteByIDRequest, LoanNoteUpdateByIDResponse>("updateLoanNoteByID", payload, "account");


public Task<LoanPledgeUpdateByIDResponse> UpdateLoanPledgeByID(UpdateLoanPledgeByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanPledgeByIDRequest, LoanPledgeUpdateByIDResponse>("updateLoanPledgeByID", payload, "account");


public Task<LoanPledgeNameUpdateByIDResponse> UpdateLoanPledgeNameByID(UpdateLoanPledgeNameByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanPledgeNameByIDRequest, LoanPledgeNameUpdateByIDResponse>("updateLoanPledgeNameByID", payload, "account");


public Task<LoanRateChangeUpdateByIDResponse> UpdateLoanRateChangeByID(UpdateLoanRateChangeByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanRateChangeByIDRequest, LoanRateChangeUpdateByIDResponse>("updateLoanRateChangeByID", payload, "account");


public Task<LoanScheduleUpdateByIDResponse> UpdateLoanScheduleByID(UpdateLoanScheduleByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanScheduleByIDRequest, LoanScheduleUpdateByIDResponse>("updateLoanScheduleByID", payload, "account");


public Task<LoanTrackingUpdateByIDResponse> UpdateLoanTrackingByID(UpdateLoanTrackingByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanTrackingByIDRequest, LoanTrackingUpdateByIDResponse>("updateLoanTrackingByID", payload, "account");


public Task<LoanTransferUpdateByIDResponse> UpdateLoanTransferByID(UpdateLoanTransferByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanTransferByIDRequest, LoanTransferUpdateByIDResponse>("updateLoanTransferByID", payload, "account");


public Task<LoanAppUpdateByIDResponse> UpdateLoanAppByID(UpdateLoanAppByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanAppByIDRequest, LoanAppUpdateByIDResponse>("updateLoanAppByID", payload, "account");


public Task<LoanAppEscrowUpdateByIDResponse> UpdateLoanAppEscrowByID(UpdateLoanAppEscrowByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanAppEscrowByIDRequest, LoanAppEscrowUpdateByIDResponse>("updateLoanAppEscrowByID", payload, "account");


public Task<LoanAppEscrowAnalysisUpdateByIDResponse> UpdateLoanAppEscrowAnalysisByID(UpdateLoanAppEscrowAnalysisByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanAppEscrowAnalysisByIDRequest, LoanAppEscrowAnalysisUpdateByIDResponse>("updateLoanAppEscrowAnalysisByID", payload, "account");


public Task<LoanAppFinanceUpdateByIDResponse> UpdateLoanAppFinanceByID(UpdateLoanAppFinanceByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanAppFinanceByIDRequest, LoanAppFinanceUpdateByIDResponse>("updateLoanAppFinanceByID", payload, "account");


public Task<LoanAppLnSegmentUpdateByIDResponse> UpdateLoanAppLnSegmentByID(UpdateLoanAppLnSegmentByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanAppLnSegmentByIDRequest, LoanAppLnSegmentUpdateByIDResponse>("updateLoanAppLnSegmentByID", payload, "account");


public Task<LoanAppNoteUpdateByIDResponse> UpdateLoanAppNoteByID(UpdateLoanAppNoteByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanAppNoteByIDRequest, LoanAppNoteUpdateByIDResponse>("updateLoanAppNoteByID", payload, "account");


public Task<LoanAppPersonUpdateByIDResponse> UpdateLoanAppPersonByID(UpdateLoanAppPersonByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanAppPersonByIDRequest, LoanAppPersonUpdateByIDResponse>("updateLoanAppPersonByID", payload, "account");


public Task<LoanAppPledgeUpdateByIDResponse> UpdateLoanAppPledgeByID(UpdateLoanAppPledgeByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanAppPledgeByIDRequest, LoanAppPledgeUpdateByIDResponse>("updateLoanAppPledgeByID", payload, "account");


public Task<LoanAppScheduleUpdateByIDResponse> UpdateLoanAppScheduleByID(UpdateLoanAppScheduleByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanAppScheduleByIDRequest, LoanAppScheduleUpdateByIDResponse>("updateLoanAppScheduleByID", payload, "account");


public Task<LoanAppTrackingUpdateByIDResponse> UpdateLoanAppTrackingByID(UpdateLoanAppTrackingByIDRequest payload) =>
    _client.RequestAsync<UpdateLoanAppTrackingByIDRequest, LoanAppTrackingUpdateByIDResponse>("updateLoanAppTrackingByID", payload, "account");


public Task<LookupUpdateByIDResponse> UpdateLookupByID(UpdateLookupByIDRequest payload) =>
    _client.RequestAsync<UpdateLookupByIDRequest, LookupUpdateByIDResponse>("updateLookupByID", payload, "account");


public Task<NameUpdateByIDResponse> UpdateNameByID(UpdateNameByIDRequest payload) =>
    _client.RequestAsync<UpdateNameByIDRequest, NameUpdateByIDResponse>("updateNameByID", payload, "account");


public Task<NoteUpdateByIDResponse> UpdateNoteByID(UpdateNoteByIDRequest payload) =>
    _client.RequestAsync<UpdateNoteByIDRequest, NoteUpdateByIDResponse>("updateNoteByID", payload, "account");


public Task<PledgeUpdateByIDResponse> UpdatePledgeByID(UpdatePledgeByIDRequest payload) =>
    _client.RequestAsync<UpdatePledgeByIDRequest, PledgeUpdateByIDResponse>("updatePledgeByID", payload, "account");


public Task<PortfolioUpdateByIDResponse> UpdatePortfolioByID(UpdatePortfolioByIDRequest payload) =>
    _client.RequestAsync<UpdatePortfolioByIDRequest, PortfolioUpdateByIDResponse>("updatePortfolioByID", payload, "account");


public Task<PortfolioHoldUpdateByIDResponse> UpdatePortfolioHoldByID(UpdatePortfolioHoldByIDRequest payload) =>
    _client.RequestAsync<UpdatePortfolioHoldByIDRequest, PortfolioHoldUpdateByIDResponse>("updatePortfolioHoldByID", payload, "account");


public Task<PortfolioNoteUpdateByIDResponse> UpdatePortfolioNoteByID(UpdatePortfolioNoteByIDRequest payload) =>
    _client.RequestAsync<UpdatePortfolioNoteByIDRequest, PortfolioNoteUpdateByIDResponse>("updatePortfolioNoteByID", payload, "account");


public Task<PortfolioTrackingUpdateByIDResponse> UpdatePortfolioTrackingByID(UpdatePortfolioTrackingByIDRequest payload) =>
    _client.RequestAsync<UpdatePortfolioTrackingByIDRequest, PortfolioTrackingUpdateByIDResponse>("updatePortfolioTrackingByID", payload, "account");


public Task<PreferenceUpdateByIDResponse> UpdatePreferenceByID(UpdatePreferenceByIDRequest payload) =>
    _client.RequestAsync<UpdatePreferenceByIDRequest, PreferenceUpdateByIDResponse>("updatePreferenceByID", payload, "account");


public Task<PreferenceAccessUpdateByIDResponse> UpdatePreferenceAccessByID(UpdatePreferenceAccessByIDRequest payload) =>
    _client.RequestAsync<UpdatePreferenceAccessByIDRequest, PreferenceAccessUpdateByIDResponse>("updatePreferenceAccessByID", payload, "account");


public Task<ShareUpdateByIDResponse> UpdateShareByID(UpdateShareByIDRequest payload) =>
    _client.RequestAsync<UpdateShareByIDRequest, ShareUpdateByIDResponse>("updateShareByID", payload, "account");


public Task<ShareAnalysisUpdateByIDResponse> UpdateShareAnalysisByID(UpdateShareAnalysisByIDRequest payload) =>
    _client.RequestAsync<UpdateShareAnalysisByIDRequest, ShareAnalysisUpdateByIDResponse>("updateShareAnalysisByID", payload, "account");


public Task<ShareAnalysisGroupUpdateByIDResponse> UpdateShareAnalysisGroupByID(UpdateShareAnalysisGroupByIDRequest payload) =>
    _client.RequestAsync<UpdateShareAnalysisGroupByIDRequest, ShareAnalysisGroupUpdateByIDResponse>("updateShareAnalysisGroupByID", payload, "account");


public Task<ShareAnalysisPlanUpdateByIDResponse> UpdateShareAnalysisPlanByID(UpdateShareAnalysisPlanByIDRequest payload) =>
    _client.RequestAsync<UpdateShareAnalysisPlanByIDRequest, ShareAnalysisPlanUpdateByIDResponse>("updateShareAnalysisPlanByID", payload, "account");


public Task<ShareCheckOrderUpdateByIDResponse> UpdateShareCheckOrderByID(UpdateShareCheckOrderByIDRequest payload) =>
    _client.RequestAsync<UpdateShareCheckOrderByIDRequest, ShareCheckOrderUpdateByIDResponse>("updateShareCheckOrderByID", payload, "account");


public Task<ShareHoldUpdateByIDResponse> UpdateShareHoldByID(UpdateShareHoldByIDRequest payload) =>
    _client.RequestAsync<UpdateShareHoldByIDRequest, ShareHoldUpdateByIDResponse>("updateShareHoldByID", payload, "account");


public Task<ShareNameUpdateByIDResponse> UpdateShareNameByID(UpdateShareNameByIDRequest payload) =>
    _client.RequestAsync<UpdateShareNameByIDRequest, ShareNameUpdateByIDResponse>("updateShareNameByID", payload, "account");


public Task<ShareNoteUpdateByIDResponse> UpdateShareNoteByID(UpdateShareNoteByIDRequest payload) =>
    _client.RequestAsync<UpdateShareNoteByIDRequest, ShareNoteUpdateByIDResponse>("updateShareNoteByID", payload, "account");


public Task<ShareTrackingUpdateByIDResponse> UpdateShareTrackingByID(UpdateShareTrackingByIDRequest payload) =>
    _client.RequestAsync<UpdateShareTrackingByIDRequest, ShareTrackingUpdateByIDResponse>("updateShareTrackingByID", payload, "account");


public Task<ShareTransferUpdateByIDResponse> UpdateShareTransferByID(UpdateShareTransferByIDRequest payload) =>
    _client.RequestAsync<UpdateShareTransferByIDRequest, ShareTransferUpdateByIDResponse>("updateShareTransferByID", payload, "account");


public Task<SiteUpdateByIDResponse> UpdateSiteByID(UpdateSiteByIDRequest payload) =>
    _client.RequestAsync<UpdateSiteByIDRequest, SiteUpdateByIDResponse>("updateSiteByID", payload, "account");


public Task<SiteCashOrderTypeUpdateByIDResponse> UpdateSiteCashOrderTypeByID(UpdateSiteCashOrderTypeByIDRequest payload) =>
    _client.RequestAsync<UpdateSiteCashOrderTypeByIDRequest, SiteCashOrderTypeUpdateByIDResponse>("updateSiteCashOrderTypeByID", payload, "account");


public Task<TrackingUpdateByIDResponse> UpdateTrackingByID(UpdateTrackingByIDRequest payload) =>
    _client.RequestAsync<UpdateTrackingByIDRequest, TrackingUpdateByIDResponse>("updateTrackingByID", payload, "account");


public Task<AccountCreateResponse> CreateAccount(CreateAccountRequest payload) =>
    _client.RequestAsync<CreateAccountRequest, AccountCreateResponse>("createAccount", payload, "account");


public Task<BatchAchOrigCreateResponse> CreateBatchAchOrig(CreateBatchAchOrigRequest payload) =>
    _client.RequestAsync<CreateBatchAchOrigRequest, BatchAchOrigCreateResponse>("createBatchAchOrig", payload, "account");


public Task<CardCreateResponse> CreateCard(CreateCardRequest payload) =>
    _client.RequestAsync<CreateCardRequest, CardCreateResponse>("createCard", payload, "account");


public Task<CardAccessCreateResponse> CreateCardAccess(CreateCardAccessRequest payload) =>
    _client.RequestAsync<CreateCardAccessRequest, CardAccessCreateResponse>("createCardAccess", payload, "account");


public Task<CardNameCreateResponse> CreateCardName(CreateCardNameRequest payload) =>
    _client.RequestAsync<CreateCardNameRequest, CardNameCreateResponse>("createCardName", payload, "account");


public Task<CardNoteCreateResponse> CreateCardNote(CreateCardNoteRequest payload) =>
    _client.RequestAsync<CreateCardNoteRequest, CardNoteCreateResponse>("createCardNote", payload, "account");


public Task<CommentCreateResponse> CreateComment(CreateCommentRequest payload) =>
    _client.RequestAsync<CreateCommentRequest, CommentCreateResponse>("createComment", payload, "account");


public Task<CpWorkCardCreateResponse> CreateCpWorkCard(CreateCpWorkCardRequest payload) =>
    _client.RequestAsync<CreateCpWorkCardRequest, CpWorkCardCreateResponse>("createCpWorkCard", payload, "account");


public Task<CpWorkCardNoteCreateResponse> CreateCpWorkCardNote(CreateCpWorkCardNoteRequest payload) =>
    _client.RequestAsync<CreateCpWorkCardNoteRequest, CpWorkCardNoteCreateResponse>("createCpWorkCardNote", payload, "account");


public Task<CpWorkCardTrackingCreateResponse> CreateCpWorkCardTracking(CreateCpWorkCardTrackingRequest payload) =>
    _client.RequestAsync<CreateCpWorkCardTrackingRequest, CpWorkCardTrackingCreateResponse>("createCpWorkCardTracking", payload, "account");


public Task<EftCreateResponse> CreateEft(CreateEftRequest payload) =>
    _client.RequestAsync<CreateEftRequest, EftCreateResponse>("createEft", payload, "account");


public Task<EftAddendaInfoCreateResponse> CreateEftAddendaInfo(CreateEftAddendaInfoRequest payload) =>
    _client.RequestAsync<CreateEftAddendaInfoRequest, EftAddendaInfoCreateResponse>("createEftAddendaInfo", payload, "account");


public Task<EftNameCreateResponse> CreateEftName(CreateEftNameRequest payload) =>
    _client.RequestAsync<CreateEftNameRequest, EftNameCreateResponse>("createEftName", payload, "account");


public Task<EftTransferCreateResponse> CreateEftTransfer(CreateEftTransferRequest payload) =>
    _client.RequestAsync<CreateEftTransferRequest, EftTransferCreateResponse>("createEftTransfer", payload, "account");


public Task<ExternalAccountCreateResponse> CreateExternalAccount(CreateExternalAccountRequest payload) =>
    _client.RequestAsync<CreateExternalAccountRequest, ExternalAccountCreateResponse>("createExternalAccount", payload, "account");


public Task<ExternalLoanCreateResponse> CreateExternalLoan(CreateExternalLoanRequest payload) =>
    _client.RequestAsync<CreateExternalLoanRequest, ExternalLoanCreateResponse>("createExternalLoan", payload, "account");


public Task<ExternalLoanNameCreateResponse> CreateExternalLoanName(CreateExternalLoanNameRequest payload) =>
    _client.RequestAsync<CreateExternalLoanNameRequest, ExternalLoanNameCreateResponse>("createExternalLoanName", payload, "account");


public Task<ExternalLoanNoteCreateResponse> CreateExternalLoanNote(CreateExternalLoanNoteRequest payload) =>
    _client.RequestAsync<CreateExternalLoanNoteRequest, ExternalLoanNoteCreateResponse>("createExternalLoanNote", payload, "account");


public Task<ExternalLoanTrackingCreateResponse> CreateExternalLoanTracking(CreateExternalLoanTrackingRequest payload) =>
    _client.RequestAsync<CreateExternalLoanTrackingRequest, ExternalLoanTrackingCreateResponse>("createExternalLoanTracking", payload, "account");


public Task<ExternalLoanTransferCreateResponse> CreateExternalLoanTransfer(CreateExternalLoanTransferRequest payload) =>
    _client.RequestAsync<CreateExternalLoanTransferRequest, ExternalLoanTransferCreateResponse>("createExternalLoanTransfer", payload, "account");


public Task<HouseholdCreateResponse> CreateHousehold(CreateHouseholdRequest payload) =>
    _client.RequestAsync<CreateHouseholdRequest, HouseholdCreateResponse>("createHousehold", payload, "account");


public Task<IrsCreateResponse> CreateIrs(CreateIrsRequest payload) =>
    _client.RequestAsync<CreateIrsRequest, IrsCreateResponse>("createIrs", payload, "account");


public Task<IrsDistributionCreateResponse> CreateIrsDistribution(CreateIrsDistributionRequest payload) =>
    _client.RequestAsync<CreateIrsDistributionRequest, IrsDistributionCreateResponse>("createIrsDistribution", payload, "account");


public Task<IrsNameCreateResponse> CreateIrsName(CreateIrsNameRequest payload) =>
    _client.RequestAsync<CreateIrsNameRequest, IrsNameCreateResponse>("createIrsName", payload, "account");


public Task<LoanCreateResponse> CreateLoan(CreateLoanRequest payload) =>
    _client.RequestAsync<CreateLoanRequest, LoanCreateResponse>("createLoan", payload, "account");


public Task<LoanBankruptcyCreateResponse> CreateLoanBankruptcy(CreateLoanBankruptcyRequest payload) =>
    _client.RequestAsync<CreateLoanBankruptcyRequest, LoanBankruptcyCreateResponse>("createLoanBankruptcy", payload, "account");


public Task<LoanBankruptcyPrepetitionBalCreateResponse> CreateLoanBankruptcyPrepetitionBal(CreateLoanBankruptcyPrepetitionBalRequest payload) =>
    _client.RequestAsync<CreateLoanBankruptcyPrepetitionBalRequest, LoanBankruptcyPrepetitionBalCreateResponse>("createLoanBankruptcyPrepetitionBal", payload, "account");


public Task<LoanBillingCreateResponse> CreateLoanBilling(CreateLoanBillingRequest payload) =>
    _client.RequestAsync<CreateLoanBillingRequest, LoanBillingCreateResponse>("createLoanBilling", payload, "account");


public Task<LoanCheckOrderCreateResponse> CreateLoanCheckOrder(CreateLoanCheckOrderRequest payload) =>
    _client.RequestAsync<CreateLoanCheckOrderRequest, LoanCheckOrderCreateResponse>("createLoanCheckOrder", payload, "account");


public Task<LoanEscrowCreateResponse> CreateLoanEscrow(CreateLoanEscrowRequest payload) =>
    _client.RequestAsync<CreateLoanEscrowRequest, LoanEscrowCreateResponse>("createLoanEscrow", payload, "account");


public Task<LoanEscrowAnalysisCreateResponse> CreateLoanEscrowAnalysis(CreateLoanEscrowAnalysisRequest payload) =>
    _client.RequestAsync<CreateLoanEscrowAnalysisRequest, LoanEscrowAnalysisCreateResponse>("createLoanEscrowAnalysis", payload, "account");


public Task<LoanHoldCreateResponse> CreateLoanHold(CreateLoanHoldRequest payload) =>
    _client.RequestAsync<CreateLoanHoldRequest, LoanHoldCreateResponse>("createLoanHold", payload, "account");


public Task<LoanLnSegmentCreateResponse> CreateLoanLnSegment(CreateLoanLnSegmentRequest payload) =>
    _client.RequestAsync<CreateLoanLnSegmentRequest, LoanLnSegmentCreateResponse>("createLoanLnSegment", payload, "account");


public Task<LoanLnSegmentBillingCreateResponse> CreateLoanLnSegmentBilling(CreateLoanLnSegmentBillingRequest payload) =>
    _client.RequestAsync<CreateLoanLnSegmentBillingRequest, LoanLnSegmentBillingCreateResponse>("createLoanLnSegmentBilling", payload, "account");


public Task<LoanNameCreateResponse> CreateLoanName(CreateLoanNameRequest payload) =>
    _client.RequestAsync<CreateLoanNameRequest, LoanNameCreateResponse>("createLoanName", payload, "account");


public Task<LoanNoteCreateResponse> CreateLoanNote(CreateLoanNoteRequest payload) =>
    _client.RequestAsync<CreateLoanNoteRequest, LoanNoteCreateResponse>("createLoanNote", payload, "account");


public Task<LoanPledgeCreateResponse> CreateLoanPledge(CreateLoanPledgeRequest payload) =>
    _client.RequestAsync<CreateLoanPledgeRequest, LoanPledgeCreateResponse>("createLoanPledge", payload, "account");


public Task<LoanPledgeNameCreateResponse> CreateLoanPledgeName(CreateLoanPledgeNameRequest payload) =>
    _client.RequestAsync<CreateLoanPledgeNameRequest, LoanPledgeNameCreateResponse>("createLoanPledgeName", payload, "account");


public Task<LoanRateChangeCreateResponse> CreateLoanRateChange(CreateLoanRateChangeRequest payload) =>
    _client.RequestAsync<CreateLoanRateChangeRequest, LoanRateChangeCreateResponse>("createLoanRateChange", payload, "account");


public Task<LoanScheduleCreateResponse> CreateLoanSchedule(CreateLoanScheduleRequest payload) =>
    _client.RequestAsync<CreateLoanScheduleRequest, LoanScheduleCreateResponse>("createLoanSchedule", payload, "account");


public Task<LoanTrackingCreateResponse> CreateLoanTracking(CreateLoanTrackingRequest payload) =>
    _client.RequestAsync<CreateLoanTrackingRequest, LoanTrackingCreateResponse>("createLoanTracking", payload, "account");


public Task<LoanTransferCreateResponse> CreateLoanTransfer(CreateLoanTransferRequest payload) =>
    _client.RequestAsync<CreateLoanTransferRequest, LoanTransferCreateResponse>("createLoanTransfer", payload, "account");


public Task<LoanAppCreateResponse> CreateLoanApp(CreateLoanAppRequest payload) =>
    _client.RequestAsync<CreateLoanAppRequest, LoanAppCreateResponse>("createLoanApp", payload, "account");


public Task<LoanAppEscrowCreateResponse> CreateLoanAppEscrow(CreateLoanAppEscrowRequest payload) =>
    _client.RequestAsync<CreateLoanAppEscrowRequest, LoanAppEscrowCreateResponse>("createLoanAppEscrow", payload, "account");


public Task<LoanAppEscrowAnalysisCreateResponse> CreateLoanAppEscrowAnalysis(CreateLoanAppEscrowAnalysisRequest payload) =>
    _client.RequestAsync<CreateLoanAppEscrowAnalysisRequest, LoanAppEscrowAnalysisCreateResponse>("createLoanAppEscrowAnalysis", payload, "account");


public Task<LoanAppFinanceCreateResponse> CreateLoanAppFinance(CreateLoanAppFinanceRequest payload) =>
    _client.RequestAsync<CreateLoanAppFinanceRequest, LoanAppFinanceCreateResponse>("createLoanAppFinance", payload, "account");


public Task<LoanAppLnSegmentCreateResponse> CreateLoanAppLnSegment(CreateLoanAppLnSegmentRequest payload) =>
    _client.RequestAsync<CreateLoanAppLnSegmentRequest, LoanAppLnSegmentCreateResponse>("createLoanAppLnSegment", payload, "account");


public Task<LoanAppNoteCreateResponse> CreateLoanAppNote(CreateLoanAppNoteRequest payload) =>
    _client.RequestAsync<CreateLoanAppNoteRequest, LoanAppNoteCreateResponse>("createLoanAppNote", payload, "account");


public Task<LoanAppPersonCreateResponse> CreateLoanAppPerson(CreateLoanAppPersonRequest payload) =>
    _client.RequestAsync<CreateLoanAppPersonRequest, LoanAppPersonCreateResponse>("createLoanAppPerson", payload, "account");


public Task<LoanAppPledgeCreateResponse> CreateLoanAppPledge(CreateLoanAppPledgeRequest payload) =>
    _client.RequestAsync<CreateLoanAppPledgeRequest, LoanAppPledgeCreateResponse>("createLoanAppPledge", payload, "account");


public Task<LoanAppScheduleCreateResponse> CreateLoanAppSchedule(CreateLoanAppScheduleRequest payload) =>
    _client.RequestAsync<CreateLoanAppScheduleRequest, LoanAppScheduleCreateResponse>("createLoanAppSchedule", payload, "account");


public Task<LoanAppTrackingCreateResponse> CreateLoanAppTracking(CreateLoanAppTrackingRequest payload) =>
    _client.RequestAsync<CreateLoanAppTrackingRequest, LoanAppTrackingCreateResponse>("createLoanAppTracking", payload, "account");


public Task<LookupCreateResponse> CreateLookup(CreateLookupRequest payload) =>
    _client.RequestAsync<CreateLookupRequest, LookupCreateResponse>("createLookup", payload, "account");


public Task<NameCreateResponse> CreateName(CreateNameRequest payload) =>
    _client.RequestAsync<CreateNameRequest, NameCreateResponse>("createName", payload, "account");


public Task<NoteCreateResponse> CreateNote(CreateNoteRequest payload) =>
    _client.RequestAsync<CreateNoteRequest, NoteCreateResponse>("createNote", payload, "account");


public Task<PledgeCreateResponse> CreatePledge(CreatePledgeRequest payload) =>
    _client.RequestAsync<CreatePledgeRequest, PledgeCreateResponse>("createPledge", payload, "account");


public Task<PortfolioCreateResponse> CreatePortfolio(CreatePortfolioRequest payload) =>
    _client.RequestAsync<CreatePortfolioRequest, PortfolioCreateResponse>("createPortfolio", payload, "account");


public Task<PortfolioNoteCreateResponse> CreatePortfolioNote(CreatePortfolioNoteRequest payload) =>
    _client.RequestAsync<CreatePortfolioNoteRequest, PortfolioNoteCreateResponse>("createPortfolioNote", payload, "account");


public Task<PortfolioTrackingCreateResponse> CreatePortfolioTracking(CreatePortfolioTrackingRequest payload) =>
    _client.RequestAsync<CreatePortfolioTrackingRequest, PortfolioTrackingCreateResponse>("createPortfolioTracking", payload, "account");


public Task<PreferenceCreateResponse> CreatePreference(CreatePreferenceRequest payload) =>
    _client.RequestAsync<CreatePreferenceRequest, PreferenceCreateResponse>("createPreference", payload, "account");


public Task<PreferenceAccessCreateResponse> CreatePreferenceAccess(CreatePreferenceAccessRequest payload) =>
    _client.RequestAsync<CreatePreferenceAccessRequest, PreferenceAccessCreateResponse>("createPreferenceAccess", payload, "account");


public Task<ShareCreateResponse> CreateShare(CreateShareRequest payload) =>
    _client.RequestAsync<CreateShareRequest, ShareCreateResponse>("createShare", payload, "account");


public Task<ShareAnalysisCreateResponse> CreateShareAnalysis(CreateShareAnalysisRequest payload) =>
    _client.RequestAsync<CreateShareAnalysisRequest, ShareAnalysisCreateResponse>("createShareAnalysis", payload, "account");


public Task<ShareAnalysisGroupCreateResponse> CreateShareAnalysisGroup(CreateShareAnalysisGroupRequest payload) =>
    _client.RequestAsync<CreateShareAnalysisGroupRequest, ShareAnalysisGroupCreateResponse>("createShareAnalysisGroup", payload, "account");


public Task<ShareAnalysisPlanCreateResponse> CreateShareAnalysisPlan(CreateShareAnalysisPlanRequest payload) =>
    _client.RequestAsync<CreateShareAnalysisPlanRequest, ShareAnalysisPlanCreateResponse>("createShareAnalysisPlan", payload, "account");


public Task<ShareCheckOrderCreateResponse> CreateShareCheckOrder(CreateShareCheckOrderRequest payload) =>
    _client.RequestAsync<CreateShareCheckOrderRequest, ShareCheckOrderCreateResponse>("createShareCheckOrder", payload, "account");


public Task<ShareHoldCreateResponse> CreateShareHold(CreateShareHoldRequest payload) =>
    _client.RequestAsync<CreateShareHoldRequest, ShareHoldCreateResponse>("createShareHold", payload, "account");


public Task<ShareNameCreateResponse> CreateShareName(CreateShareNameRequest payload) =>
    _client.RequestAsync<CreateShareNameRequest, ShareNameCreateResponse>("createShareName", payload, "account");


public Task<ShareNoteCreateResponse> CreateShareNote(CreateShareNoteRequest payload) =>
    _client.RequestAsync<CreateShareNoteRequest, ShareNoteCreateResponse>("createShareNote", payload, "account");


public Task<ShareTrackingCreateResponse> CreateShareTracking(CreateShareTrackingRequest payload) =>
    _client.RequestAsync<CreateShareTrackingRequest, ShareTrackingCreateResponse>("createShareTracking", payload, "account");


public Task<ShareTransferCreateResponse> CreateShareTransfer(CreateShareTransferRequest payload) =>
    _client.RequestAsync<CreateShareTransferRequest, ShareTransferCreateResponse>("createShareTransfer", payload, "account");


public Task<SiteCreateResponse> CreateSite(CreateSiteRequest payload) =>
    _client.RequestAsync<CreateSiteRequest, SiteCreateResponse>("createSite", payload, "account");


public Task<SiteCashOrderTypeCreateResponse> CreateSiteCashOrderType(CreateSiteCashOrderTypeRequest payload) =>
    _client.RequestAsync<CreateSiteCashOrderTypeRequest, SiteCashOrderTypeCreateResponse>("createSiteCashOrderType", payload, "account");


public Task<TrackingCreateResponse> CreateTracking(CreateTrackingRequest payload) =>
    _client.RequestAsync<CreateTrackingRequest, TrackingCreateResponse>("createTracking", payload, "account");


public Task<BatchAchOrigDeleteResponse> DeleteBatchAchOrig(DeleteBatchAchOrigRequest payload) =>
    _client.RequestAsync<DeleteBatchAchOrigRequest, BatchAchOrigDeleteResponse>("deleteBatchAchOrig", payload, "account");


public Task<CardDeleteResponse> DeleteCard(DeleteCardRequest payload) =>
    _client.RequestAsync<DeleteCardRequest, CardDeleteResponse>("deleteCard", payload, "account");


public Task<CardAccessDeleteResponse> DeleteCardAccess(DeleteCardAccessRequest payload) =>
    _client.RequestAsync<DeleteCardAccessRequest, CardAccessDeleteResponse>("deleteCardAccess", payload, "account");


public Task<CardNameDeleteResponse> DeleteCardName(DeleteCardNameRequest payload) =>
    _client.RequestAsync<DeleteCardNameRequest, CardNameDeleteResponse>("deleteCardName", payload, "account");


public Task<CardNoteDeleteResponse> DeleteCardNote(DeleteCardNoteRequest payload) =>
    _client.RequestAsync<DeleteCardNoteRequest, CardNoteDeleteResponse>("deleteCardNote", payload, "account");


public Task<CommentDeleteResponse> DeleteComment(DeleteCommentRequest payload) =>
    _client.RequestAsync<DeleteCommentRequest, CommentDeleteResponse>("deleteComment", payload, "account");


public Task<CpWorkCardDeleteResponse> DeleteCpWorkCard(DeleteCpWorkCardRequest payload) =>
    _client.RequestAsync<DeleteCpWorkCardRequest, CpWorkCardDeleteResponse>("deleteCpWorkCard", payload, "account");


public Task<CpWorkCardTrackingDeleteResponse> DeleteCpWorkCardTracking(DeleteCpWorkCardTrackingRequest payload) =>
    _client.RequestAsync<DeleteCpWorkCardTrackingRequest, CpWorkCardTrackingDeleteResponse>("deleteCpWorkCardTracking", payload, "account");


public Task<EftDeleteResponse> DeleteEft(DeleteEftRequest payload) =>
    _client.RequestAsync<DeleteEftRequest, EftDeleteResponse>("deleteEft", payload, "account");


public Task<EftAddendaInfoDeleteResponse> DeleteEftAddendaInfo(DeleteEftAddendaInfoRequest payload) =>
    _client.RequestAsync<DeleteEftAddendaInfoRequest, EftAddendaInfoDeleteResponse>("deleteEftAddendaInfo", payload, "account");


public Task<EftNameDeleteResponse> DeleteEftName(DeleteEftNameRequest payload) =>
    _client.RequestAsync<DeleteEftNameRequest, EftNameDeleteResponse>("deleteEftName", payload, "account");


public Task<EftTransferDeleteResponse> DeleteEftTransfer(DeleteEftTransferRequest payload) =>
    _client.RequestAsync<DeleteEftTransferRequest, EftTransferDeleteResponse>("deleteEftTransfer", payload, "account");


public Task<ExternalAccountDeleteResponse> DeleteExternalAccount(DeleteExternalAccountRequest payload) =>
    _client.RequestAsync<DeleteExternalAccountRequest, ExternalAccountDeleteResponse>("deleteExternalAccount", payload, "account");


public Task<ExternalLoanDeleteResponse> DeleteExternalLoan(DeleteExternalLoanRequest payload) =>
    _client.RequestAsync<DeleteExternalLoanRequest, ExternalLoanDeleteResponse>("deleteExternalLoan", payload, "account");


public Task<ExternalLoanNameDeleteResponse> DeleteExternalLoanName(DeleteExternalLoanNameRequest payload) =>
    _client.RequestAsync<DeleteExternalLoanNameRequest, ExternalLoanNameDeleteResponse>("deleteExternalLoanName", payload, "account");


public Task<ExternalLoanNoteDeleteResponse> DeleteExternalLoanNote(DeleteExternalLoanNoteRequest payload) =>
    _client.RequestAsync<DeleteExternalLoanNoteRequest, ExternalLoanNoteDeleteResponse>("deleteExternalLoanNote", payload, "account");


public Task<ExternalLoanTrackingDeleteResponse> DeleteExternalLoanTracking(DeleteExternalLoanTrackingRequest payload) =>
    _client.RequestAsync<DeleteExternalLoanTrackingRequest, ExternalLoanTrackingDeleteResponse>("deleteExternalLoanTracking", payload, "account");


public Task<ExternalLoanTransferDeleteResponse> DeleteExternalLoanTransfer(DeleteExternalLoanTransferRequest payload) =>
    _client.RequestAsync<DeleteExternalLoanTransferRequest, ExternalLoanTransferDeleteResponse>("deleteExternalLoanTransfer", payload, "account");


public Task<HouseholdDeleteResponse> DeleteHousehold(DeleteHouseholdRequest payload) =>
    _client.RequestAsync<DeleteHouseholdRequest, HouseholdDeleteResponse>("deleteHousehold", payload, "account");


public Task<IrsDeleteResponse> DeleteIrs(DeleteIrsRequest payload) =>
    _client.RequestAsync<DeleteIrsRequest, IrsDeleteResponse>("deleteIrs", payload, "account");


public Task<IrsDistributionDeleteResponse> DeleteIrsDistribution(DeleteIrsDistributionRequest payload) =>
    _client.RequestAsync<DeleteIrsDistributionRequest, IrsDistributionDeleteResponse>("deleteIrsDistribution", payload, "account");


public Task<IrsNameDeleteResponse> DeleteIrsName(DeleteIrsNameRequest payload) =>
    _client.RequestAsync<DeleteIrsNameRequest, IrsNameDeleteResponse>("deleteIrsName", payload, "account");


public Task<LoanCheckOrderDeleteResponse> DeleteLoanCheckOrder(DeleteLoanCheckOrderRequest payload) =>
    _client.RequestAsync<DeleteLoanCheckOrderRequest, LoanCheckOrderDeleteResponse>("deleteLoanCheckOrder", payload, "account");


public Task<LoanEscrowDeleteResponse> DeleteLoanEscrow(DeleteLoanEscrowRequest payload) =>
    _client.RequestAsync<DeleteLoanEscrowRequest, LoanEscrowDeleteResponse>("deleteLoanEscrow", payload, "account");


public Task<LoanEscrowAnalysisDeleteResponse> DeleteLoanEscrowAnalysis(DeleteLoanEscrowAnalysisRequest payload) =>
    _client.RequestAsync<DeleteLoanEscrowAnalysisRequest, LoanEscrowAnalysisDeleteResponse>("deleteLoanEscrowAnalysis", payload, "account");


public Task<LoanHoldDeleteResponse> DeleteLoanHold(DeleteLoanHoldRequest payload) =>
    _client.RequestAsync<DeleteLoanHoldRequest, LoanHoldDeleteResponse>("deleteLoanHold", payload, "account");


public Task<LoanNameDeleteResponse> DeleteLoanName(DeleteLoanNameRequest payload) =>
    _client.RequestAsync<DeleteLoanNameRequest, LoanNameDeleteResponse>("deleteLoanName", payload, "account");


public Task<LoanNoteDeleteResponse> DeleteLoanNote(DeleteLoanNoteRequest payload) =>
    _client.RequestAsync<DeleteLoanNoteRequest, LoanNoteDeleteResponse>("deleteLoanNote", payload, "account");


public Task<LoanPledgeDeleteResponse> DeleteLoanPledge(DeleteLoanPledgeRequest payload) =>
    _client.RequestAsync<DeleteLoanPledgeRequest, LoanPledgeDeleteResponse>("deleteLoanPledge", payload, "account");


public Task<LoanPledgeNameDeleteResponse> DeleteLoanPledgeName(DeleteLoanPledgeNameRequest payload) =>
    _client.RequestAsync<DeleteLoanPledgeNameRequest, LoanPledgeNameDeleteResponse>("deleteLoanPledgeName", payload, "account");


public Task<LoanRateChangeDeleteResponse> DeleteLoanRateChange(DeleteLoanRateChangeRequest payload) =>
    _client.RequestAsync<DeleteLoanRateChangeRequest, LoanRateChangeDeleteResponse>("deleteLoanRateChange", payload, "account");


public Task<LoanScheduleDeleteResponse> DeleteLoanSchedule(DeleteLoanScheduleRequest payload) =>
    _client.RequestAsync<DeleteLoanScheduleRequest, LoanScheduleDeleteResponse>("deleteLoanSchedule", payload, "account");


public Task<LoanTrackingDeleteResponse> DeleteLoanTracking(DeleteLoanTrackingRequest payload) =>
    _client.RequestAsync<DeleteLoanTrackingRequest, LoanTrackingDeleteResponse>("deleteLoanTracking", payload, "account");


public Task<LoanTransferDeleteResponse> DeleteLoanTransfer(DeleteLoanTransferRequest payload) =>
    _client.RequestAsync<DeleteLoanTransferRequest, LoanTransferDeleteResponse>("deleteLoanTransfer", payload, "account");


public Task<LoanAppDeleteResponse> DeleteLoanApp(DeleteLoanAppRequest payload) =>
    _client.RequestAsync<DeleteLoanAppRequest, LoanAppDeleteResponse>("deleteLoanApp", payload, "account");


public Task<LoanAppEscrowDeleteResponse> DeleteLoanAppEscrow(DeleteLoanAppEscrowRequest payload) =>
    _client.RequestAsync<DeleteLoanAppEscrowRequest, LoanAppEscrowDeleteResponse>("deleteLoanAppEscrow", payload, "account");


public Task<LoanAppEscrowAnalysisDeleteResponse> DeleteLoanAppEscrowAnalysis(DeleteLoanAppEscrowAnalysisRequest payload) =>
    _client.RequestAsync<DeleteLoanAppEscrowAnalysisRequest, LoanAppEscrowAnalysisDeleteResponse>("deleteLoanAppEscrowAnalysis", payload, "account");


public Task<LoanAppFinanceDeleteResponse> DeleteLoanAppFinance(DeleteLoanAppFinanceRequest payload) =>
    _client.RequestAsync<DeleteLoanAppFinanceRequest, LoanAppFinanceDeleteResponse>("deleteLoanAppFinance", payload, "account");


public Task<LoanAppNoteDeleteResponse> DeleteLoanAppNote(DeleteLoanAppNoteRequest payload) =>
    _client.RequestAsync<DeleteLoanAppNoteRequest, LoanAppNoteDeleteResponse>("deleteLoanAppNote", payload, "account");


public Task<LoanAppPersonDeleteResponse> DeleteLoanAppPerson(DeleteLoanAppPersonRequest payload) =>
    _client.RequestAsync<DeleteLoanAppPersonRequest, LoanAppPersonDeleteResponse>("deleteLoanAppPerson", payload, "account");


public Task<LoanAppPledgeDeleteResponse> DeleteLoanAppPledge(DeleteLoanAppPledgeRequest payload) =>
    _client.RequestAsync<DeleteLoanAppPledgeRequest, LoanAppPledgeDeleteResponse>("deleteLoanAppPledge", payload, "account");


public Task<LoanAppScheduleDeleteResponse> DeleteLoanAppSchedule(DeleteLoanAppScheduleRequest payload) =>
    _client.RequestAsync<DeleteLoanAppScheduleRequest, LoanAppScheduleDeleteResponse>("deleteLoanAppSchedule", payload, "account");


public Task<LoanAppTrackingDeleteResponse> DeleteLoanAppTracking(DeleteLoanAppTrackingRequest payload) =>
    _client.RequestAsync<DeleteLoanAppTrackingRequest, LoanAppTrackingDeleteResponse>("deleteLoanAppTracking", payload, "account");


public Task<LookupDeleteResponse> DeleteLookup(DeleteLookupRequest payload) =>
    _client.RequestAsync<DeleteLookupRequest, LookupDeleteResponse>("deleteLookup", payload, "account");


public Task<NameDeleteResponse> DeleteName(DeleteNameRequest payload) =>
    _client.RequestAsync<DeleteNameRequest, NameDeleteResponse>("deleteName", payload, "account");


public Task<NoteDeleteResponse> DeleteNote(DeleteNoteRequest payload) =>
    _client.RequestAsync<DeleteNoteRequest, NoteDeleteResponse>("deleteNote", payload, "account");


public Task<PledgeDeleteResponse> DeletePledge(DeletePledgeRequest payload) =>
    _client.RequestAsync<DeletePledgeRequest, PledgeDeleteResponse>("deletePledge", payload, "account");


public Task<PortfolioDeleteResponse> DeletePortfolio(DeletePortfolioRequest payload) =>
    _client.RequestAsync<DeletePortfolioRequest, PortfolioDeleteResponse>("deletePortfolio", payload, "account");


public Task<PortfolioNoteDeleteResponse> DeletePortfolioNote(DeletePortfolioNoteRequest payload) =>
    _client.RequestAsync<DeletePortfolioNoteRequest, PortfolioNoteDeleteResponse>("deletePortfolioNote", payload, "account");


public Task<PortfolioTrackingDeleteResponse> DeletePortfolioTracking(DeletePortfolioTrackingRequest payload) =>
    _client.RequestAsync<DeletePortfolioTrackingRequest, PortfolioTrackingDeleteResponse>("deletePortfolioTracking", payload, "account");


public Task<PreferenceDeleteResponse> DeletePreference(DeletePreferenceRequest payload) =>
    _client.RequestAsync<DeletePreferenceRequest, PreferenceDeleteResponse>("deletePreference", payload, "account");


public Task<PreferenceAccessDeleteResponse> DeletePreferenceAccess(DeletePreferenceAccessRequest payload) =>
    _client.RequestAsync<DeletePreferenceAccessRequest, PreferenceAccessDeleteResponse>("deletePreferenceAccess", payload, "account");


public Task<ShareAnalysisDeleteResponse> DeleteShareAnalysis(DeleteShareAnalysisRequest payload) =>
    _client.RequestAsync<DeleteShareAnalysisRequest, ShareAnalysisDeleteResponse>("deleteShareAnalysis", payload, "account");


public Task<ShareAnalysisGroupDeleteResponse> DeleteShareAnalysisGroup(DeleteShareAnalysisGroupRequest payload) =>
    _client.RequestAsync<DeleteShareAnalysisGroupRequest, ShareAnalysisGroupDeleteResponse>("deleteShareAnalysisGroup", payload, "account");


public Task<ShareAnalysisPlanDeleteResponse> DeleteShareAnalysisPlan(DeleteShareAnalysisPlanRequest payload) =>
    _client.RequestAsync<DeleteShareAnalysisPlanRequest, ShareAnalysisPlanDeleteResponse>("deleteShareAnalysisPlan", payload, "account");


public Task<ShareCheckOrderDeleteResponse> DeleteShareCheckOrder(DeleteShareCheckOrderRequest payload) =>
    _client.RequestAsync<DeleteShareCheckOrderRequest, ShareCheckOrderDeleteResponse>("deleteShareCheckOrder", payload, "account");


public Task<ShareHoldDeleteResponse> DeleteShareHold(DeleteShareHoldRequest payload) =>
    _client.RequestAsync<DeleteShareHoldRequest, ShareHoldDeleteResponse>("deleteShareHold", payload, "account");


public Task<ShareNameDeleteResponse> DeleteShareName(DeleteShareNameRequest payload) =>
    _client.RequestAsync<DeleteShareNameRequest, ShareNameDeleteResponse>("deleteShareName", payload, "account");


public Task<ShareNoteDeleteResponse> DeleteShareNote(DeleteShareNoteRequest payload) =>
    _client.RequestAsync<DeleteShareNoteRequest, ShareNoteDeleteResponse>("deleteShareNote", payload, "account");


public Task<ShareTrackingDeleteResponse> DeleteShareTracking(DeleteShareTrackingRequest payload) =>
    _client.RequestAsync<DeleteShareTrackingRequest, ShareTrackingDeleteResponse>("deleteShareTracking", payload, "account");


public Task<ShareTransferDeleteResponse> DeleteShareTransfer(DeleteShareTransferRequest payload) =>
    _client.RequestAsync<DeleteShareTransferRequest, ShareTransferDeleteResponse>("deleteShareTransfer", payload, "account");


public Task<TrackingDeleteResponse> DeleteTracking(DeleteTrackingRequest payload) =>
    _client.RequestAsync<DeleteTrackingRequest, TrackingDeleteResponse>("deleteTracking", payload, "account");


public Task<ExcpItemSelectFieldsResponse> GetExcpItemSelectFields(ExcpItemSelectFieldsRequest payload) =>
    _client.RequestAsync<ExcpItemSelectFieldsRequest, ExcpItemSelectFieldsResponse>("getExcpItemSelectFields", payload, "exceptionitem");

}
