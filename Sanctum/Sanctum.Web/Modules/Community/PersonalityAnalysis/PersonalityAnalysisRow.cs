
namespace Sanctum.Community.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Community"), TableName("[dbo].[PersonalityAnalysis]")]
    [DisplayName("个性分析"), InstanceName("个性分析")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PersonalityAnalysisRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), Column("ID"), Identity, PrimaryKey]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("个性特征"), Size(50), NotNull, QuickSearch]
        public String FeatureName
        {
            get { return Fields.FeatureName[this]; }
            set { Fields.FeatureName[this] = value; }
        }

        [DisplayName("特征描述"), Size(1073741823), NotNull]
        public String FeatureDecription
        {
            get { return Fields.FeatureDecription[this]; }
            set { Fields.FeatureDecription[this] = value; }
        }

        [DisplayName("匹配书籍类型")]
        public String MatchCategories
        {
            get { return Fields.MatchCategories[this]; }
            set { Fields.MatchCategories[this] = value; }
        }

        [DisplayName("Creator"), NotNull, Hidden]
        public Int32? Creator
        {
            get { return Fields.Creator[this]; }
            set { Fields.Creator[this] = value; }
        }

        [DisplayName("Created Time"), NotNull, Hidden]
        public DateTime? CreatedTime
        {
            get { return Fields.CreatedTime[this]; }
            set { Fields.CreatedTime[this] = value; }
        }

        [DisplayName("Modifier"), NotNull, Hidden]
        public Int32? Modifier
        {
            get { return Fields.Modifier[this]; }
            set { Fields.Modifier[this] = value; }
        }

        [DisplayName("Modified Time"), NotNull, Hidden]
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
            get { return Fields.FeatureName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PersonalityAnalysisRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public StringField FeatureName;

            public StringField FeatureDecription;

            public StringField MatchCategories;

            public Int32Field Creator;

            public DateTimeField CreatedTime;

            public Int32Field Modifier;

            public DateTimeField ModifiedTime;


		}
    }
}
