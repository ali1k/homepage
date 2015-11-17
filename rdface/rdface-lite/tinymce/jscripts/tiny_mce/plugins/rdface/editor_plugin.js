(function() {
	tinymce.PluginManager.requireLangPack("rdface");
	tinymce
			.create(
					"tinymce.plugins.RdfacePlugin",
					{
						init : function(a, b) {					
						// added rNews entities to context menu
						a.plugins.contextmenu.onContextMenu.add(function(th, menu, event) {
							menu.removeAll();
							var rnews = menu.addMenu({title : 'Add Entity'});
							rnews.add({title : "Place", onclick: function(){
								insert_entity(a,"Place",b);
								//showTooltips(a,b);
							}});
							rnews.add({title : "Organization", onclick: function(){
								insert_entity(a,"Organization",b);
								//showTooltips(a,b);
							}});
							rnews.add({title : "Person", onclick: function(){
								insert_entity(a,"Person",b);
								//showTooltips(a,b);
							}});
						});		
						// set the visible annotations
						a.plugins.contextmenu.onContextMenu.add(function(th, menu, event) {
							var rnews = menu.addMenu({title : 'Entities'});
							rnews.add({title : "Show all", onclick: function(){
								show_entities(a,'all');

							}});
							rnews.add({title : "Hide all", onclick: function(){
								show_entities(a,'none');
							}});
							rnews.add({title : "Remove all", onclick: function(){
								remove_annotations(a,0);
							}});							
						});						
							a.addButton("rdfaceRun", {
								title : "Automatic Content Annotation",
								cmd : "mceRdfaEnrich",
								image : b + "/img/connect.png"
							});	
							a.addButton("rdfaceSetting", {
								title : "Settings",
								cmd : "mceRdfaSetting",
								image : b + "/img/setting.png"
							});	
							a.addCommand("mceRdfaEnrich", function() {
								//first we need to remove automatically generated annotations
								remove_annotations(a,1);	
								activateAjaxIndicator(b);								
								handleAutomaticAnnotation(a);
							});	
							a.addCommand("mceRdfaSetting", function() {	
								a.windowManager.open({
									file : b + "/setting.htm",
									width : 400 + parseInt(a.getLang(
											"rdface.delta_width", 0)),
											height : 260 + parseInt(a.getLang(
													"rdface.delta_height", 0)),
													inline : 1
								}, {
									plugin_url : b,
								})		
							});		
					a.addCommand("editEntity", function(v1) {
					var entity_type,param;
					var aF=getCookie("annotationF");
						if(aF=="RDFa"){
							entity_type=v1.attr('typeof').split(':')[1];
							// send the content as parameter
							param= v1.find('span[property="rnews:name"]').text();
						}else{
							entity_type=mapToVocabulary(v1.attr('itemtype')).split(':')[1];
							// send the content as parameter
							param= v1.find('span[itemprop="name"]').text();
						}
						var file,height,width;
						switch (entity_type){
						case "Place":
							file=b + "/place.htm";
							height=295;
							width=340;
							break;
						case "Person":
							file=b + "/person.htm";
							height=295;
							width=340;
							break;
						case "Organization":
							file=b + "/organization.htm";
							height=295;
							width=340;
							break;
						}
						a.windowManager.open({
							file : file,
							width : width + parseInt(a.getLang(
									"rdfa.delta_width", 0)),
									height : height + parseInt(a.getLang(
											"rdfa.delta_height", 0)),
											inline : 1
						}, {
							plugin_url : b,
							entity_type : entity_type,
							selected_txt: param,
							annotationF: aF,
							pointer: v1
						})
					});		
					a.addCommand("mceRdfaHighlight", function() {
						//showTooltips(a,b);
					});					
							a.onSetContent.add(function(ed, o) {
								showTooltips(a,b);
							});
							a.onNodeChange.add(function(d, c, e) {
								// showTooltips(a,b);
							})
							a.onLoadContent.add(function(ed,o){
								//showTooltips(a,b);
							});
							a.onSubmit.add(function(ed, e) {
								//remove the classes added for visualization in the editor
							});
						},
						createControl : function(b, a) {
							return null
						},
						getInfo : function() {
							return {
								longname : "RDFaCE Lite",
								author : "Ali Khalili",
								authorurl : "http://aksw.org/AliKhalili",
								infourl : "http://aksw.org/Projects/RDFaCE",
								version : "0.5"
							}
						}
					});
	tinymce.PluginManager.add("rdface", tinymce.plugins.RdfacePlugin)
})();