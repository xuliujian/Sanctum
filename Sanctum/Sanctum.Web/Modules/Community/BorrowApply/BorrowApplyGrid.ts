
namespace Sanctum.Community {

    @Serenity.Decorators.registerClass()
    export class BorrowApplyGrid extends Serenity.EntityGrid<BorrowApplyRow, any> {
        protected getColumnsKey() { return 'Community.BorrowApply'; }
        protected getDialogType() { return BorrowApplyDialog; }
        protected getIdProperty() { return BorrowApplyRow.idProperty; }
        protected getLocalTextPrefix() { return BorrowApplyRow.localTextPrefix; }
        protected getService() { return BorrowApplyService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}