
namespace Sanctum.Community {

    @Serenity.Decorators.registerClass()
    export class BookCommentDialog extends Serenity.EntityDialog<BookCommentRow, any> {
        protected getFormKey() { return BookCommentForm.formKey; }
        protected getIdProperty() { return BookCommentRow.idProperty; }
        protected getLocalTextPrefix() { return BookCommentRow.localTextPrefix; }
        protected getNameProperty() { return BookCommentRow.nameProperty; }
        protected getService() { return BookCommentService.baseUrl; }

        protected form = new BookCommentForm(this.idPrefix);

    }
}