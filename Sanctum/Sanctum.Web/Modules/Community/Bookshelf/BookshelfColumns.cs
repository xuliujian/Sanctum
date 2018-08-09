
namespace Sanctum.Community.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Community.Bookshelf")]
    [BasedOnRow(typeof(Entities.BookshelfRow), CheckNames = true)]
    public class BookshelfColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String BookshelfName { get; set; }
        public String AdornBackground { get; set; }
        public String Introduction { get; set; }
        public Int32 Creator { get; set; }
        public DateTime CreatedTime { get; set; }
        public Int32 Modifier { get; set; }
        public DateTime ModifiedTime { get; set; }
    }
}