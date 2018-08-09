
namespace Sanctum.Community {

    @Serenity.Decorators.registerClass()
    export class PrivateBookDialog extends Serenity.EntityDialog<PrivateBookRow, any> {
        protected getFormKey() { return PrivateBookForm.formKey; }
        protected getIdProperty() { return PrivateBookRow.idProperty; }
        protected getLocalTextPrefix() { return PrivateBookRow.localTextPrefix; }
        protected getNameProperty() { return PrivateBookRow.nameProperty; }
        protected getService() { return PrivateBookService.baseUrl; }

        protected form = new PrivateBookForm(this.idPrefix);

    }
}