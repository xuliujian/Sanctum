
namespace Sanctum.Community.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Community"), TableName("[dbo].[BookCategory]")]
    [DisplayName("书籍分类"), InstanceName("书籍分类")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class BookCategoryRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), Column("ID"),PrimaryKey, Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("类别名称"), Size(10), NotNull, QuickSearch]
        public String CategoryName
        {
            get { return Fields.CategoryName[this]; }
            set { Fields.CategoryName[this] = value; }
        }

        [DisplayName("所属类别"), Column("ParentID"),Hidden]
        public Int32? ParentId
        {
            get { return Fields.ParentId[this]; }
            set { Fields.ParentId[this] = value; }
        }

        [DisplayName("类别说明")]
        public String Remark
        {
            get { return Fields.Remark[this]; }
            set { Fields.Remark[this] = value; }
        }

        [DisplayName("是否下架"), NotNull, CheckboxFormatter]
        public Boolean? IsEnable
        {
            get { return Fields.IsEnable[this]; }
            set { Fields.IsEnable[this] = value; }
        }

        [DisplayName("创建者"),Hidden]
        public Int32? Creator
        {
            get { return Fields.Creator[this]; }
            set { Fields.Creator[this] = value; }
        }

        [DisplayName("创建时间"), Hidden]
        public DateTime? CreatedTime
        {
            get { return Fields.CreatedTime[this]; }
            set { Fields.CreatedTime[this] = value; }
        }

        [DisplayName("更新者"), Hidden]
        public Int32? Modifier
        {
            get { return Fields.Modifier[this]; }
            set { Fields.Modifier[this] = value; }
        }

        [DisplayName("更新时间"), Hidden]
        public DateTime? ModifiedTime
        {
            get { return Fields.ModifiedTime[this]; }
            set { Fields.ModifiedTime[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CategoryName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BookCategoryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public StringField CategoryName;

            public Int32Field ParentId;

            public StringField Remark;

            public BooleanField IsEnable;

            public Int32Field Creator;

            public DateTimeField CreatedTime;

            public Int32Field Modifier;

            public DateTimeField ModifiedTime;


		}
    }
}
