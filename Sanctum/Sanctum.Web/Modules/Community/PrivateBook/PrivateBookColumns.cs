
namespace Sanctum.Community.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Community.PrivateBook")]
    [BasedOnRow(typeof(Entities.PrivateBookRow), CheckNames = true)]
    public class PrivateBookColumns
    {
        [DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String BookName { get; set; }
        public String BookCategories { get; set; }
        public String Author { get; set; }
        public Double Price { get; set; }
        public String Publisher { get; set; }
        public String CoverImage { get; set; }
        public Double RecommendLevel { get; set; }
        public String Insight { get; set; }
        public String Summary { get; set; }
        public Boolean NeedPaid { get; set; }
        public Int32 BookshelfId { get; set; }
        public Boolean OffShelves { get; set; }
        public Int32 Status { get; set; }
        public Int32 Uploader { get; set; }
        public String UploaderNickName { get; set; }
        public DateTime UploadTime { get; set; }
    }
}