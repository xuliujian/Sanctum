
namespace Sanctum.Community {

    @Serenity.Decorators.registerClass()
    export class BorrowRequirementDialog extends Serenity.EntityDialog<BorrowRequirementRow, any> {
        protected getFormKey() { return BorrowRequirementForm.formKey; }
        protected getIdProperty() { return BorrowRequirementRow.idProperty; }
        protected getLocalTextPrefix() { return BorrowRequirementRow.localTextPrefix; }
        protected getNameProperty() { return BorrowRequirementRow.nameProperty; }
        protected getService() { return BorrowRequirementService.baseUrl; }

        protected form = new BorrowRequirementForm(this.idPrefix);

    }
}