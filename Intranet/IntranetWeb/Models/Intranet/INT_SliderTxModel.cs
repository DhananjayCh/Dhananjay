using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetWeb.Models.Intranet
{
    public class INT_SliderTxModel
    {
        public int ID { get; set; }
        public string Slider_Title { get; set; }
        public string Slider_Subject { get; set; }
        public string Slider_Image_Url { get; set; }
        public string Description { get; set; }
        public bool Active { get; set; }
    }
}