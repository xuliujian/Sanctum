
namespace Sanctum.Community {

    @Serenity.Decorators.registerClass()
    export class RecommendBookGrid extends Serenity.EntityGrid<RecommendBookRow, any> {
        protected getColumnsKey() { return 'Community.RecommendBook'; }
        protected getDialogType() { return RecommendBookDialog; }
        protected getIdProperty() { return RecommendBookRow.idProperty; }
        protected getLocalTextPrefix() { return RecommendBookRow.localTextPrefix; }
        protected getService() { return RecommendBookService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}