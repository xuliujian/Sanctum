
namespace Sanctum.Community.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Community.BorrowRecord")]
    [BasedOnRow(typeof(Entities.BorrowRecordRow), CheckNames = true)]
    public class BorrowRecordColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public Int32 DebitUserId { get; set; }
        public DateTime BorrowTime { get; set; }
        public Int32 BookId { get; set; }
        public Int32 BorrowRequirementId { get; set; }
        public Int32 BorrowApplyId { get; set; }
        public Int32 Status { get; set; }
        public DateTime AcceptTime { get; set; }
        public DateTime RevertTime { get; set; }
        [EditLink]
        public String DebitRemarkContent { get; set; }
        public DateTime DebitRemarkTime { get; set; }
        public String RenterRemarkContent { get; set; }
        public DateTime RenterRemarkTime { get; set; }
    }
}