
namespace Sanctum.Community.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Community.Area")]
    [BasedOnRow(typeof(Entities.AreaRow), CheckNames = true)]
    public class AreaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String Id { get; set; }
        public String Pid { get; set; }
        public String ShortName { get; set; }
        public String Name { get; set; }
        public String FullName { get; set; }
        public Int32 Level { get; set; }
        public String PinYin { get; set; }
        public String Code { get; set; }
        public String ZipCode { get; set; }
        public String FirstChar { get; set; }
        public Decimal Longitude { get; set; }
        public Decimal Latitude { get; set; }
    }
}