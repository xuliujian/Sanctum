
namespace Sanctum.Community {

    @Serenity.Decorators.registerClass()
    export class BookCategoryDialog extends Serenity.EntityDialog<BookCategoryRow, any> {
        protected getFormKey() { return BookCategoryForm.formKey; }
        protected getIdProperty() { return BookCategoryRow.idProperty; }
        protected getLocalTextPrefix() { return BookCategoryRow.localTextPrefix; }
        protected getNameProperty() { return BookCategoryRow.nameProperty; }
        protected getService() { return BookCategoryService.baseUrl; }

        protected form = new BookCategoryForm(this.idPrefix);

    }
}