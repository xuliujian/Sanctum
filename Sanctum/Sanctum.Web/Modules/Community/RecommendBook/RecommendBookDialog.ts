
namespace Sanctum.Community {

    @Serenity.Decorators.registerClass()
    export class RecommendBookDialog extends Serenity.EntityDialog<RecommendBookRow, any> {
        protected getFormKey() { return RecommendBookForm.formKey; }
        protected getIdProperty() { return RecommendBookRow.idProperty; }
        protected getLocalTextPrefix() { return RecommendBookRow.localTextPrefix; }
        protected getNameProperty() { return RecommendBookRow.nameProperty; }
        protected getService() { return RecommendBookService.baseUrl; }

        protected form = new RecommendBookForm(this.idPrefix);

    }
}