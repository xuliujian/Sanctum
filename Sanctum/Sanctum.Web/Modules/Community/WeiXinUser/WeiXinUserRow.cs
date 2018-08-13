
namespace Sanctum.Community.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Community"), TableName("[dbo].[WeiXinUser]")]
    [DisplayName("微信用户"), InstanceName("微信用户")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class WeiXinUserRow : Row, IIdRow, INameRow
    {

        [DisplayName("ID"), PrimaryKey, Identity, Hidden]
        public Int32? ID
        {
            get { return Fields.ID[this]; }
            set { Fields.ID[this] = value; }
        }

        [DisplayName("OPENID"), Size(32), NotNull, Hidden]
        public String OpenId
        {
            get { return Fields.OpenId[this]; }
            set { Fields.OpenId[this] = value; }
        }

        [DisplayName("昵称"), Size(32), QuickSearch]
        public String NickName
        {
            get { return Fields.NickName[this]; }
            set { Fields.NickName[this] = value; }
        }

        [DisplayName("国家"), Size(50)]
        public String Country
        {
            get { return Fields.Country[this]; }
            set { Fields.Country[this] = value; }
        }

        [DisplayName("省份"), Size(50)]
        public String Province
        {
            get { return Fields.Province[this]; }
            set { Fields.Province[this] = value; }
        }

        [DisplayName("城市"), Size(50)]
        public String City
        {
            get { return Fields.City[this]; }
            set { Fields.City[this] = value; }
        }

        [DisplayName("头像"), NotNull, ImageUploadEditor]
        public String HeaderImage
        {
            get { return Fields.HeaderImage[this]; }
            set { Fields.HeaderImage[this] = value; }
        }

        [DisplayName("手机号"), Size(50)]
        public String Mobile
        {
            get { return Fields.Mobile[this]; }
            set { Fields.Mobile[this] = value; }
        }

        [DisplayName("通信地址")]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("荣誉等级"), NotNull]
        public Double? HonourRank
        {
            get { return Fields.HonourRank[this]; }
            set { Fields.HonourRank[this] = value; }
        }

        [DisplayName("财富等级"), NotNull]
        public Double? KnowledgeRank
        {
            get { return Fields.KnowledgeRank[this]; }
            set { Fields.KnowledgeRank[this] = value; }
        }

        [DisplayName("个性评判")]
        public String PersonalityEval
        {
            get { return Fields.PersonalityEval[this]; }
            set { Fields.PersonalityEval[this] = value; }
        }

        [DisplayName("喜好书籍类型")]
        public String HobbyCategory
        {
            get { return Fields.HobbyCategory[this]; }
            set { Fields.HobbyCategory[this] = value; }
        }

        [DisplayName("活动位置经度"), Size(18)]
        public Decimal? ActiveLongitude
        {
            get { return Fields.ActiveLongitude[this]; }
            set { Fields.ActiveLongitude[this] = value; }
        }

        [DisplayName("活动位置维度"), Size(18)]
        public Decimal? ActiveLatitude
        {
            get { return Fields.ActiveLatitude[this]; }
            set { Fields.ActiveLatitude[this] = value; }
        }

        [DisplayName("Last Active Time")]
        public DateTime? LastActiveTime
        {
            get { return Fields.LastActiveTime[this]; }
            set { Fields.LastActiveTime[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.ID; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.OpenId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public WeiXinUserRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field ID;

            public StringField OpenId;

            public StringField NickName;

            public StringField Country;

            public StringField Province;

            public StringField City;

            public StringField HeaderImage;

            public StringField Mobile;

            public StringField Address;

            public DoubleField HonourRank;

            public DoubleField KnowledgeRank;

            public StringField PersonalityEval;

            public StringField HobbyCategory;

            public DecimalField ActiveLongitude;

            public DecimalField ActiveLatitude;

            public DateTimeField LastActiveTime;


		}
    }
}
