!function(){var r=astraBuilderPreview.tablet_break_point||768,t=astraBuilderPreview.mobile_break_point||544;wp.customize("astra-settings[hbb-header-height]",function(e){e.bind(function(e){var a;""==e.desktop&&""==e.tablet&&""==e.mobile||(a="",a+=".ast-below-header-bar .site-below-header-wrap, .ast-mobile-header-wrap .ast-below-header-bar {",a+="min-height: "+e.desktop+"px;",a+="} ",a+=".ast-desktop .ast-below-header-bar .main-header-menu > .menu-item {",a+="line-height: "+e.desktop+"px;",a+="} ",a+="@media (max-width: "+r+"px) {",a+=".ast-below-header-bar .site-below-header-wrap, .ast-mobile-header-wrap .ast-below-header-bar  {",a+="min-height: "+e.tablet+"px;",a+="} ",a+="} ",a+="@media (max-width: "+t+"px) {",a+=".ast-below-header-bar .site-below-header-wrap, .ast-mobile-header-wrap .ast-below-header-bar  {",a+="min-height: "+e.mobile+"px;",a+="} ",a+="} ",astra_add_dynamic_css("hbb-header-height",a))})}),wp.customize("astra-settings[hbb-header-separator]",function(e){e.bind(function(e){var a="";a+=".ast-header-break-point .ast-below-header-bar, .ast-below-header-bar {",a+="border-bottom-width: "+e+"px;",a+="border-bottom-style: solid;",a+="border-color:"+wp.customize("astra-settings[hbb-header-bottom-border-color]").get()+";",a+="}",astra_add_dynamic_css("hbb-header-separator",a)})}),astra_css("astra-settings[hbb-header-bottom-border-color]","border-color",".ast-header-break-point .ast-below-header-bar, .ast-below-header-bar"),astra_apply_responsive_background_css("astra-settings[hbb-header-bg-obj-responsive]",".ast-below-header.ast-below-header-bar","desktop"),astra_apply_responsive_background_css("astra-settings[hbb-header-bg-obj-responsive]",".ast-below-header.ast-below-header-bar","tablet"),astra_apply_responsive_background_css("astra-settings[hbb-header-bg-obj-responsive]",".ast-below-header.ast-below-header-bar","mobile"),astra_builder_advanced_css("section-below-header-builder",".ast-below-header.ast-below-header-bar"),astra_builder_visibility_css("section-below-header-builder",".ast-below-header-bar","grid")}(jQuery);