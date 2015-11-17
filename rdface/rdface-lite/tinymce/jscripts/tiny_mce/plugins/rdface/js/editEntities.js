tinyMCEPopup.requireLangPack();
function mapTypeToSchema(p) {
	var output;
	switch (p) {
	case "Place":
		output = "http://schema.org/Place";
	break;
	case "Organization":
		output = "http://schema.org/Organization";
	break;
	case "Person":
		output = "http://schema.org/Person";
	break;	
	case "PostalAddress":
		output = "http://schema.org/PostalAddress";
	break;	
	default:
		output = null;
	}
	return output;
}
var EditEntities = {
	init : function() {
		var selected_txt=tinyMCEPopup.getWindowArg('selected_txt');
		var entity_type=tinyMCEPopup.getWindowArg('entity_type');
		var pointer=tinyMCEPopup.getWindowArg('pointer');
		var entity_title=document.getElementById("entity_title");
		var annotationF=tinyMCEPopup.getWindowArg('annotationF');
		entity_title.innerHTML="<b>"+selected_txt+"</b>";
		if(annotationF=="RDFa"){
			//set the URI
			document.getElementById("uri_open").href=pointer.attr('about');
			var f2 = document.getElementById('address_form');
			f2.countryName.value=pointer.find("span[property='rnews:addressCountry']").attr('content')?pointer.find("span[property='rnews:addressCountry']").attr('content'):'' ;
			f2.locality.value=pointer.find("span[property='rnews:addressLocality']").attr('content')?pointer.find("span[property='rnews:addressLocality']").attr('content'):'';
			f2.region.value=pointer.find("span[property='rnews:addressRegion']").attr('content')?pointer.find("span[property='rnews:addressRegion']").attr('content'):'';
			f2.streetAddress.value=pointer.find("span[property='rnews:streetAddress']").attr('content')?pointer.find("span[property='rnews:streetAddress']").attr('content'):'';
			f2.postalCode.value=pointer.find("span[property='rnews:postalCode']").attr('content')?pointer.find("span[property='rnews:postalCode']").attr('content'):'';
			f2.postalBox.value=pointer.find("span[property='rnews:postOfficeBoxNumber']").attr('content')?pointer.find("span[property='rnews:postOfficeBoxNumber']").attr('content'):'';
			f2.tel.value=pointer.find("span[property='rnews:telephone']").attr('content')?pointer.find("span[property='rnews:telephone']").attr('content'):'';
			f2.fax.value=pointer.find("span[property='rnews:faxNumber']").attr('content')?pointer.find("span[property='rnews:faxNumber']").attr('content'):'';
			f2.email.value=pointer.find("span[property='rnews:email']").attr('content')?pointer.find("span[property='rnews:email']").attr('content'):'';
			f2.url.value=pointer.find("span[property='rnews:url']").attr('content')?pointer.find("span[property='rnews:url']").attr('content'):'';			
			switch (entity_type){
			case "Place":
				var f = document.getElementById('place_form');
				f.uri.value=pointer.attr('about');
				f.featureCode.value=pointer.find("span[property='rnews:featureCode']").attr('content')?pointer.find("span[property='rnews:featureCode']").attr('content'):'';
				var f3 = document.getElementById('coordinate_form');
				var locType;
				if(pointer.find("span[property='rnews:point']").length){
					locType="point";
					f3.type.options[0].selected=true;
				}
				if(pointer.find("span[property='rnews:line']").length){
					locType="line";
					f3.type.options[1].selected=true;
				}
				if(pointer.find("span[property='rnews:polygon']").length){
					locType="polygon";
					f3.type.options[2].selected=true;
				}
				if(pointer.find("span[property='rnews:box']").length){
					locType="box";
					f3.type.options[3].selected=true;
				}
				if(pointer.find("span[property='rnews:circle']").length){
					locType="cirlce";
					f3.type.options[4].selected=true;
				}
				f3.coordinates.value=pointer.find("span[property='rnews:"+locType+"']").attr('content')?pointer.find("span[property='rnews:"+locType+"']").attr('content'):'';
				f3.elevation.value=pointer.find("span[property='rnews:elevation']").attr('content')?pointer.find("span[property='rnews:elevation']").attr('content'):'';			
				break;
			case "Person":
				var f = document.getElementById('person_form');
				f.uri.value=pointer.attr('about');
				f.honorificPrefix.value=pointer.find("span[property='rnews:honorificPrefix']").attr('content')?pointer.find("span[property='rnews:honorificPrefix']").attr('content'):'' ;
				f.givenName.value=pointer.find("span[property='rnews:givenName']").attr('content')?pointer.find("span[property='rnews:givenName']").attr('content'):'';
				f.additionalName.value=pointer.find("span[property='rnews:additionalName']").attr('content')?pointer.find("span[property='rnews:additionalName']").attr('content'):'';
				f.lastName.value=pointer.find("span[property='rnews:familyName']").attr('content')?pointer.find("span[property='rnews:familyName']").attr('content'):'';
				f.honorificSuffix.value=pointer.find("span[property='rnews:honorificSuffix']").attr('content')?pointer.find("span[property='rnews:honorificSuffix']").attr('content'):'';	
				break;
			case "Organization":
				var f = document.getElementById('org_form');
				f.uri.value=pointer.attr('about');
				f.tickerSymbol.value=pointer.find("span[property='rnews:tickerSymbol']").attr('content')?pointer.find("span[property='rnews:tickerSymbol']").attr('content'):'';
				break;
			}
		}else{
			//set the URI
			document.getElementById("uri_open").href=pointer.attr('itemid');
			var f2 = document.getElementById('address_form');
			f2.countryName.value=pointer.find("meta[itemprop='addressCountry']").attr('content')?pointer.find("meta[itemprop='addressCountry']").attr('content'):'' ;
			f2.locality.value=pointer.find("meta[itemprop='addressLocality']").attr('content')?pointer.find("meta[itemprop='addressLocality']").attr('content'):'';
			f2.region.value=pointer.find("meta[itemprop='addressRegion']").attr('content')?pointer.find("meta[itemprop='addressRegion']").attr('content'):'';
			f2.streetAddress.value=pointer.find("meta[itemprop='streetAddress']").attr('content')?pointer.find("meta[itemprop='streetAddress']").attr('content'):'';
			f2.postalCode.value=pointer.find("meta[itemprop='postalCode']").attr('content')?pointer.find("meta[itemprop='postalCode']").attr('content'):'';
			f2.postalBox.value=pointer.find("meta[itemprop='postOfficeBoxNumber']").attr('content')?pointer.find("meta[itemprop='postOfficeBoxNumber']").attr('content'):'';
			f2.tel.value=pointer.find("meta[itemprop='telephone']").attr('content')?pointer.find("meta[itemprop='telephone']").attr('content'):'';
			f2.fax.value=pointer.find("meta[itemprop='faxNumber']").attr('content')?pointer.find("meta[itemprop='faxNumber']").attr('content'):'';
			f2.email.value=pointer.find("meta[itemprop='email']").attr('content')?pointer.find("meta[itemprop='email']").attr('content'):'';
			f2.url.value=pointer.find("meta[itemprop='url']").attr('content')?pointer.find("meta[itemprop='url']").attr('content'):'';			
			switch (entity_type){
			case "Place":
				var f = document.getElementById('place_form');
				f.uri.value=pointer.attr('itemid');
				f.featureCode.value=pointer.find("meta[itemprop='featureCode']").attr('content')?pointer.find("meta[itemprop='featureCode']").attr('content'):'';
				var f3 = document.getElementById('coordinate_form');
				f3.coordinates.value='';
				if(pointer.find("span[itemtype='http://schema.org/GeoCoordinates']").length){
					locType="point";
					f3.type.options[0].selected=true;
					if(pointer.find("meta[itemprop='latitude']").length && pointer.find("meta[itemprop='longitude']").length){
						f3.coordinates.value=pointer.find("meta[itemprop='latitude']").attr('content') +' '+ pointer.find("meta[itemprop='longitude']").attr('content')
					}
				}
				if(pointer.find("meta[itemprop='line']").length){
					locType="line";
					f3.type.options[1].selected=true;
					f3.coordinates.value=pointer.find("meta[itemprop='line']").attr('content');
				}
				if(pointer.find("meta[itemprop='polygon']").length){
					locType="polygon";
					f3.type.options[2].selected=true;
					f3.coordinates.value=pointer.find("meta[itemprop='polygon']").attr('content');
				}
				if(pointer.find("meta[itemprop='box']").length){
					locType="box";
					f3.type.options[3].selected=true;
					f3.coordinates.value=pointer.find("meta[itemprop='box']").attr('content');
				}
				if(pointer.find("meta[itemprop='circle']").length){
					locType="cirlce";
					f3.type.options[4].selected=true;
					f3.coordinates.value=pointer.find("meta[itemprop='circle']").attr('content');
				}
				var locType;
				f3.elevation.value=pointer.find("meta[itemprop='elevation']").attr('content')?pointer.find("meta[itemprop='elevation']").attr('content'):'';
				break;
			case "Person":
				var f = document.getElementById('person_form');
				f.uri.value=pointer.attr('itemid');
				f.honorificPrefix.value=pointer.find("meta[itemprop='honorificPrefix']").attr('content')?pointer.find("meta[itemprop='honorificPrefix']").attr('content'):'' ;
				f.givenName.value=pointer.find("meta[itemprop='givenName']").attr('content')?pointer.find("meta[itemprop='givenName']").attr('content'):'';
				f.additionalName.value=pointer.find("meta[itemprop='additionalName']").attr('content')?pointer.find("meta[itemprop='additionalName']").attr('content'):'';
				f.lastName.value=pointer.find("meta[itemprop='familyName']").attr('content')?pointer.find("meta[itemprop='familyName']").attr('content'):'';
				f.honorificSuffix.value=pointer.find("meta[itemprop='honorificSuffix']").attr('content')?pointer.find("meta[itemprop='honorificSuffix']").attr('content'):'';	
				break;
			case "Organization":
				var f = document.getElementById('org_form');
				f.uri.value=pointer.attr('itemid');
				f.tickerSymbol.value=pointer.find("meta[itemprop='tickerSymbol']").attr('content')?pointer.find("meta[itemprop='tickerSymbol']").attr('content'):'';
				break;
			}		
		}		
	},
	update : function() {
		var selected_txt=tinyMCEPopup.getWindowArg('selected_txt');
		var entity_type=tinyMCEPopup.getWindowArg('entity_type');
		var pointer=tinyMCEPopup.getWindowArg('pointer');
		var annotationF=tinyMCEPopup.getWindowArg('annotationF');
		//change annotation to manuall
		pointer.removeClass("automatic");	
		if(annotationF=="RDFa"){
			switch (entity_type){
			case "Place":
				var f = document.getElementById('place_form');
				//update the URI
				pointer.attr('about',f.uri.value);
				pointer.find("span[property='rnews:featureCode']").remove();
				if(f.featureCode.value){
					pointer.append("<span property='rnews:featureCode' content='"+f.featureCode.value+"'></span>");
				}
				pointer.find("span[property='rnews:geoCoordinates']").remove();
				pointer.append("<span property='rnews:geoCoordinates' typeof='rnews:GeoCoordinates'></span>");
				var f3 = document.getElementById('coordinate_form');
				var locType=f3.type.value;
				if(f3.coordinates.value){
					pointer.find("span[property='rnews:geoCoordinates']").append("<span property='rnews:"+locType+"' content='"+f3.coordinates.value+"'></span>");
				}
				if(f3.elevation.value){
					pointer.find("span[property='rnews:geoCoordinates']").append("<span property='rnews:elevation' content='"+f3.elevation.value+"'></span>");
				}
				//remove the geoCoordinates property if it is empty
				if(!pointer.find("span[property='rnews:geoCoordinates']").html().trim()){
					pointer.find("span[property='rnews:geoCoordinates']").remove();
				}				
				break;
			case "Person":
				var f = document.getElementById('person_form');
				//update the URI
				pointer.attr('about',f.uri.value);			
				pointer.find("span[property='rnews:honorificPrefix']").remove();
				if(f.honorificPrefix.value){
					pointer.append("<span property='rnews:honorificPrefix' content='"+f.honorificPrefix.value+"'></span>");
				}
				pointer.find("span[property='rnews:givenName']").remove();
				if(f.givenName.value){
					pointer.append("<span property='rnews:givenName' content='"+f.givenName.value+"'></span>");
				}
				pointer.find("span[property='rnews:additionalName']").remove();
				if(f.additionalName.value){
					pointer.append("<span property='rnews:additionalName' content='"+f.additionalName.value+"'></span>");
				}
				pointer.find("span[property='rnews:familyName']").remove();
				if(f.lastName.value){
					pointer.append("<span property='rnews:familyName' content='"+f.lastName.value+"'></span>");
				}
				pointer.find("span[property='rnews:honorificSuffix']").remove();
				if(f.honorificSuffix.value){
					pointer.append("<span property='rnews:honorificSuffix' content='"+f.honorificSuffix.value+"'></span>");
				}
				break;
			case "Organization":
				var f = document.getElementById('org_form');
				//update the URI
				pointer.attr('about',f.uri.value);
				pointer.find("span[property='rnews:tickerSymbol']").remove();
				if(f.tickerSymbol.value){
					pointer.append("<span property='rnews:tickerSymbol' content='"+f.tickerSymbol.value+"'></span>");
				}
				break;
			}
			var f2 = document.getElementById('address_form');
			pointer.find("span[property='rnews:address']").remove();
			pointer.append("<span property='rnews:address' typeof='rnews:PostalAddress'></span>");			
			if(f2.countryName.value){
				pointer.find("span[property='rnews:address']").append("<span property='rnews:addressCountry' content='"+f2.countryName.value+"'></span>");
			}
			if(f2.locality.value){
				pointer.find("span[property='rnews:address']").append("<span property='rnews:addressLocality' content='"+f2.locality.value+"'></span>");
			}		
			if(f2.region.value){
				pointer.find("span[property='rnews:address']").append("<span property='rnews:addressRegion' content='"+f2.region.value+"'></span>");
			}
			if(f2.streetAddress.value){
				pointer.find("span[property='rnews:address']").append("<span property='rnews:streetAddress' content='"+f2.streetAddress.value+"'></span>");
			}
			if(f2.postalCode.value){
				pointer.find("span[property='rnews:address']").append("<span property='rnews:postalCode' content='"+f2.postalCode.value+"'></span>");
			}
			if(f2.postalBox.value){
				pointer.find("span[property='rnews:address']").append("<span property='rnews:postOfficeBoxNumber' content='"+f2.postalBox.value+"'></span>");
			}				
			if(f2.tel.value){
				pointer.find("span[property='rnews:address']").append("<span property='rnews:telephone' content='"+f2.tel.value+"'></span>");
			}
			if(f2.fax.value){
				pointer.find("span[property='rnews:address']").append("<span property='rnews:faxNumber' content='"+f2.fax.value+"'></span>");
			}
			if(f2.email.value){
				pointer.find("span[property='rnews:address']").append("<span property='rnews:email' content='"+f2.email.value+"'></span>");
			}
			if(f2.url.value){
				pointer.find("span[property='rnews:address']").append("<span property='rnews:url' content='"+f2.url.value+"'></span>");
			}	
			//remove the address property if it is empty
			if(!pointer.find("span[property='rnews:address']").html().trim()){
				pointer.find("span[property='rnews:address']").remove();
			}
		}else{
			switch (entity_type){
			case "Place":
				var f = document.getElementById('place_form');
				//update the URI
				pointer.attr('itemid',f.uri.value);
				pointer.find("meta[itemprop='featureCode']").remove();
				if(f.featureCode.value){
					pointer.append("<meta itemprop='featureCode' content='"+f.featureCode.value+"'></meta>");
				}			
				pointer.find("meta[itemprop='latitude']").remove();
				pointer.find("meta[itemprop='longitude']").remove();
				var f3 = document.getElementById('coordinate_form');
				var locType=f3.type.value;
				pointer.find("span[itemprop='geo']").remove();
				if(locType=='point'){
				//maps to Schema.org GeoCoordinates
					pointer.append("<span itemprop='geo' itemscope itemtype='http://schema.org/GeoCoordinates'></span>");
					if(f3.coordinates.value){
						pointer.find("span[itemprop='geo']").append("<meta itemprop='latitude' content='"+f3.coordinates.value.split(' ')[0]+"'></meta>");
						pointer.find("span[itemprop='geo']").append("<meta itemprop='longitude' content='"+f3.coordinates.value.split(' ')[1]+"'></meta>");
					}
				}else{
				//maps to Schema.org GeoShape
					pointer.append("<span itemprop='geo' itemscope itemtype='http://schema.org/GeoShape'></span>");
					if(f3.coordinates.value){
						pointer.find("span[itemprop='geo']").append("<meta itemprop='"+locType+"' content='"+f3.coordinates.value+"'></meta>");
					}					
				}
				if(f3.elevation.value){
						pointer.find("span[itemprop='geo']").append("<meta itemprop='elevation' content='"+f3.elevation.value+"'></meta>");
				}
				//remove the geo property if it is empty
				if(!pointer.find("span[itemprop='geo']").html().trim()){
					pointer.find("span[itemprop='geo']").remove();
				}				
				break;
			case "Person":
				var f = document.getElementById('person_form');
				//update the URI
				pointer.attr('itemid',f.uri.value);			
				pointer.find("meta[itemprop='honorificPrefix']").remove();
				if(f.honorificPrefix.value){
					pointer.append("<meta itemprop='honorificPrefix' content='"+f.honorificPrefix.value+"'></meta>");
				}
				pointer.find("meta[itemprop='givenName']").remove();
				if(f.givenName.value){
					pointer.append("<meta itemprop='givenName' content='"+f.givenName.value+"'></meta>");
				}
				pointer.find("meta[itemprop='additionalName']").remove();
				if(f.additionalName.value){
					pointer.append("<meta itemprop='additionalName' content='"+f.additionalName.value+"'></meta>");
				}
				pointer.find("meta[itemprop='familyName']").remove();
				if(f.lastName.value){
					pointer.append("<meta itemprop='familyName' content='"+f.lastName.value+"'></meta>");
				}
				pointer.find("meta[itemprop='honorificSuffix']").remove();
				if(f.honorificSuffix.value){
					pointer.append("<meta itemprop='honorificSuffix' content='"+f.honorificSuffix.value+"'></meta>");
				}
				break;
			case "Organization":
				var f = document.getElementById('org_form');
				//update the URI
				pointer.attr('itemid',f.uri.value);
				pointer.find("meta[itemprop='tickerSymbol']").remove();
				if(f.tickerSymbol.value){
					pointer.append("<meta itemprop='tickerSymbol' content='"+f.tickerSymbol.value+"'></meta>");
				}
				break;
			}
			var f2 = document.getElementById('address_form');	
			pointer.find("span[itemprop='address']").remove();
			pointer.append("<span itemprop='address' itemscope itemtype='"+mapTypeToSchema('PostalAddress')+"'></span>");
			if(f2.countryName.value){
				pointer.find("span[itemprop='address']").append("<meta itemprop='addressCountry' content='"+f2.countryName.value+"'></meta>");
			}
			if(f2.locality.value){
				pointer.find("span[itemprop='address']").append("<meta itemprop='addressLocality' content='"+f2.locality.value+"'></meta>");
			}		
			if(f2.region.value){
				pointer.find("span[itemprop='address']").append("<meta itemprop='addressRegion' content='"+f2.region.value+"'></meta>");
			}
			if(f2.streetAddress.value){
				pointer.find("span[itemprop='address']").append("<meta itemprop='streetAddress' content='"+f2.streetAddress.value+"'></meta>");
			}
			if(f2.postalCode.value){
				pointer.find("span[itemprop='address']").append("<meta itemprop='postalCode' content='"+f2.postalCode.value+"'></meta>");
			}
			if(f2.postalBox.value){
				pointer.find("span[itemprop='address']").append("<meta itemprop='postOfficeBoxNumber' content='"+f2.postalBox.value+"'></meta>");
			}				
			if(f2.tel.value){
				pointer.find("span[itemprop='address']").append("<meta itemprop='telephone' content='"+f2.tel.value+"'></meta>");
			}
			if(f2.fax.value){
				pointer.find("span[itemprop='address']").append("<meta itemprop='faxNumber' content='"+f2.fax.value+"'></meta>");
			}
			if(f2.email.value){
				pointer.find("span[itemprop='address']").append("<meta itemprop='email' content='"+f2.email.value+"'></meta>");
			}
			if(f2.url.value){
				pointer.find("span[itemprop='address']").append("<meta itemprop='url' content='"+f2.url.value+"'></meta>");
			}	
			//remove the address property if it is empty
			if(!pointer.find("span[itemprop='address']").html().trim()){
				pointer.find("span[itemprop='address']").remove();
			}			
		}
		tinyMCEPopup.editor.nodeChanged();
		tinyMCEPopup.close();
	},
	delete : function() {
		var selected_txt=tinyMCEPopup.getWindowArg('selected_txt');
		var pointer=tinyMCEPopup.getWindowArg('pointer');
		var annotationF=tinyMCEPopup.getWindowArg('annotationF');
		if(annotationF=="RDFa"){
			pointer.removeAttr("typeof").removeAttr("class").removeAttr("about");
		}else{
			pointer.removeAttr("itemtype").removeAttr("class").removeAttr("itemid");
		}
		pointer.html(selected_txt);
		pointer.css("background-color","");
		tinyMCEPopup.editor.nodeChanged();
		tinyMCEPopup.editor.setContent(tinyMCEPopup.editor.getContent());
		tinyMCEPopup.close();
	},
	changeType : function(type) {
		var pointer=tinyMCEPopup.getWindowArg('pointer');
		var annotationF=tinyMCEPopup.getWindowArg('annotationF');
		//change annotation to manuall
		pointer.removeClass("automatic");		
		var selected_txt=tinyMCEPopup.getWindowArg('selected_txt');
		pointer.attr('class','r_entity r_'+type.toLowerCase());
		if(annotationF=="RDFa"){
			pointer.attr('typeof','rnews:'+type);
			pointer.html("<span property='rnews:name'>"+selected_txt+"</span>");
		}else{
			pointer.attr('itemtype',mapTypeToSchema(type));
			pointer.html("<span itemprop='name'>"+selected_txt+"</span>");			
		}
		tinyMCEPopup.editor.nodeChanged();
		tinyMCEPopup.close();
	}
};

tinyMCEPopup.onInit.add(EditEntities.init, EditEntities);
