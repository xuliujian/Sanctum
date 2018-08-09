
namespace Sanctum.Community {

    @Serenity.Decorators.registerClass()
    export class AreaGrid extends Serenity.EntityGrid<AreaRow, any> {
        protected getColumnsKey() { return 'Community.Area'; }
        protected getDialogType() { return AreaDialog; }
        protected getIdProperty() { return AreaRow.idProperty; }
        protected getLocalTextPrefix() { return AreaRow.localTextPrefix; }
        protected getService() { return AreaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}