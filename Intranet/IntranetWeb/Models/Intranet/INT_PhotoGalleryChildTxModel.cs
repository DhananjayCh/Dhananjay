using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetWeb.Models.Intranet
{
    public class INT_PhotoGalleryChildTxModel
    {
        public int ID { get; set; }
        public int Parent_Id { get; set; }
        public string Photo_Title { get; set; }
        public string Image_Url { get; set; }
        public bool Active { get; set; }
        
    }
}