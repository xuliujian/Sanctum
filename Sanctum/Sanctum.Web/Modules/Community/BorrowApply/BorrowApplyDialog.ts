
namespace Sanctum.Community {

    @Serenity.Decorators.registerClass()
    export class BorrowApplyDialog extends Serenity.EntityDialog<BorrowApplyRow, any> {
        protected getFormKey() { return BorrowApplyForm.formKey; }
        protected getIdProperty() { return BorrowApplyRow.idProperty; }
        protected getLocalTextPrefix() { return BorrowApplyRow.localTextPrefix; }
        protected getService() { return BorrowApplyService.baseUrl; }

        protected form = new BorrowApplyForm(this.idPrefix);

    }
}