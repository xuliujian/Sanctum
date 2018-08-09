
namespace Sanctum.Community {

    @Serenity.Decorators.registerClass()
    export class BorrowRecordGrid extends Serenity.EntityGrid<BorrowRecordRow, any> {
        protected getColumnsKey() { return 'Community.BorrowRecord'; }
        protected getDialogType() { return BorrowRecordDialog; }
        protected getIdProperty() { return BorrowRecordRow.idProperty; }
        protected getLocalTextPrefix() { return BorrowRecordRow.localTextPrefix; }
        protected getService() { return BorrowRecordService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}