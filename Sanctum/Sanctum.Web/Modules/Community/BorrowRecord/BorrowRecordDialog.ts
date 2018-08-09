
namespace Sanctum.Community {

    @Serenity.Decorators.registerClass()
    export class BorrowRecordDialog extends Serenity.EntityDialog<BorrowRecordRow, any> {
        protected getFormKey() { return BorrowRecordForm.formKey; }
        protected getIdProperty() { return BorrowRecordRow.idProperty; }
        protected getLocalTextPrefix() { return BorrowRecordRow.localTextPrefix; }
        protected getNameProperty() { return BorrowRecordRow.nameProperty; }
        protected getService() { return BorrowRecordService.baseUrl; }

        protected form = new BorrowRecordForm(this.idPrefix);

    }
}