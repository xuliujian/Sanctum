﻿
namespace Sanctum.Community.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Community.BookCategory")]
    [BasedOnRow(typeof(Entities.BookCategoryRow), CheckNames = true)]
    public class BookCategoryForm
    {
        public String CategoryName { get; set; }
        public Int32 ParentId { get; set; }
        public String Remark { get; set; }
        public Boolean IsEnable { get; set; }
        public Int32 Creator { get; set; }
        public DateTime CreatedTime { get; set; }
        public Int32 Modifier { get; set; }
        public DateTime ModifiedTime { get; set; }
    }
}