
namespace Sanctum.Community.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Community.RecommendBook")]
    [BasedOnRow(typeof(Entities.RecommendBookRow), CheckNames = true)]
    public class RecommendBookColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String BookName { get; set; }
        public String BookCategory { get; set; }
        public String Author { get; set; }
        public Double Exponent { get; set; }
        public String BookRemark { get; set; }
        public String Instroduction { get; set; }
        public Int32 ViewCount { get; set; }
        public Double HeatLevel { get; set; }
        public Int32 Referrer { get; set; }
        public DateTime ReferTime { get; set; }
    }
}