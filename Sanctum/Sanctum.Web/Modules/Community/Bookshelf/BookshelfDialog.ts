
namespace Sanctum.Community {

    @Serenity.Decorators.registerClass()
    export class BookshelfDialog extends Serenity.EntityDialog<BookshelfRow, any> {
        protected getFormKey() { return BookshelfForm.formKey; }
        protected getIdProperty() { return BookshelfRow.idProperty; }
        protected getLocalTextPrefix() { return BookshelfRow.localTextPrefix; }
        protected getNameProperty() { return BookshelfRow.nameProperty; }
        protected getService() { return BookshelfService.baseUrl; }

        protected form = new BookshelfForm(this.idPrefix);

    }
}