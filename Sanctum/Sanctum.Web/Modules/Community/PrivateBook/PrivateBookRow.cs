
namespace Sanctum.Community.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Community"), TableName("[dbo].[PrivateBook]")]
    [DisplayName("私人藏书"), InstanceName("私人藏书")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PrivateBookRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), Column("ID"), Identity, PrimaryKey,Hidden]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("书籍名称"), Size(50), NotNull, QuickSearch]
        public String BookName
        {
            get { return Fields.BookName[this]; }
            set { Fields.BookName[this] = value; }
        }

        [DisplayName("书籍分类"), NotNull]
        public String BookCategories
        {
            get { return Fields.BookCategories[this]; }
            set { Fields.BookCategories[this] = value; }
        }

        [DisplayName("作者"), Size(50)]
        public String Author
        {
            get { return Fields.Author[this]; }
            set { Fields.Author[this] = value; }
        }

        [DisplayName("价格")]
        public Double? Price
        {
            get { return Fields.Price[this]; }
            set { Fields.Price[this] = value; }
        }

        [DisplayName("出版社"), Size(100)]
        public String Publisher
        {
            get { return Fields.Publisher[this]; }
            set { Fields.Publisher[this] = value; }
        }

        [DisplayName("封面图片")]
        public String CoverImage
        {
            get { return Fields.CoverImage[this]; }
            set { Fields.CoverImage[this] = value; }
        }

        [DisplayName("推荐指数")]
        public Double? RecommendLevel
        {
            get { return Fields.RecommendLevel[this]; }
            set { Fields.RecommendLevel[this] = value; }
        }

        [DisplayName("个人书评")]
        public String Insight
        {
            get { return Fields.Insight[this]; }
            set { Fields.Insight[this] = value; }
        }

        [DisplayName("内容简介")]
        public String Summary
        {
            get { return Fields.Summary[this]; }
            set { Fields.Summary[this] = value; }
        }

        [DisplayName("是否有偿"), CheckboxFormatter]
        public Boolean? NeedPaid
        {
            get { return Fields.NeedPaid[this]; }
            set { Fields.NeedPaid[this] = value; }
        }

        [DisplayName("所在书架"), ForeignKey("Bookshelf", "ID"), LeftJoin("jBookshelf")]
        public Int32? BookshelfId
        {
            get { return Fields.BookshelfId[this]; }
            set { Fields.BookshelfId[this] = value; }
        }

        [DisplayName("书架名称"), Expression("jBookshelf.[BookshelfName]")]
        public String BookshelfName
        {
            get { return Fields.BookshelfName[this]; }
            set { Fields.BookshelfName[this] = value; }
        }

        [DisplayName("是否下架"), CheckboxFormatter]
        public Boolean? OffShelves
        {
            get { return Fields.OffShelves[this]; }
            set { Fields.OffShelves[this] = value; }
        }

        [DisplayName("状态"), NotNull]
        public Int32? Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("Uploader"), NotNull, ForeignKey("WeiXinUser", "ID"), LeftJoin("jWeiXinUser"), Hidden]
        public Int32? Uploader
        {
            get { return Fields.Uploader[this]; }
            set { Fields.Uploader[this] = value; }
        }

        [DisplayName("上传者"), Expression("jWeiXinUser.[NickName]")]
        public String UploaderNickName
        {
            get { return Fields.UploaderNickName[this]; }
            set { Fields.UploaderNickName[this] = value; }
        }

        [DisplayName("上传时间"), NotNull]
        public DateTime? UploadTime
        {
            get { return Fields.UploadTime[this]; }
            set { Fields.UploadTime[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.BookName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PrivateBookRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public StringField BookName;

            public StringField BookCategories;

            public StringField Author;

            public DoubleField Price;

            public StringField Publisher;

            public StringField CoverImage;

            public DoubleField RecommendLevel;

            public StringField Insight;

            public StringField Summary;

            public BooleanField NeedPaid;

            public Int32Field BookshelfId;

            public StringField BookshelfName;

            public BooleanField OffShelves;

            public Int32Field Status;

            public Int32Field Uploader;

            public StringField UploaderNickName;

            public DateTimeField UploadTime;


		}
    }
}
