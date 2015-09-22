$(function() {
	// Handler for .ready() called.
	update_current_date();
	show_current_time();
	if(!$.cookie('fajr')){
		setCookie('fajr','http://www.youtube.com/embed/_BZcH9JdIo0',30);
	}
	if(!$.cookie('dhuhr')){
		setCookie('dhuhr','http://www.youtube.com/embed/tbS8CSALlmM',30);
	}
	if(!$.cookie('maghrib')){
		setCookie('maghrib','http://www.youtube.com/embed/_BZcH9JdIo0',30);
	}	
	$('#calc_method').on('change', function(e) {
		recalculate();
	});	
	if(!$.cookie('calc_method')){
		setCookie('calc_method','Tehran',30);
	}else{
		//$("option[value='"+$.cookie('calc_method')+"']").select();
		$("option[value='"+$.cookie('calc_method')+"']").attr('selected',true);
	}	
});
function show_current_time(){
	$("#current_time").MyDigitClock({
		fontSize:40, 
		fontFamily:"Century gothic", 
		fontColor: "#000", 
		fontWeight:"bold", 
		bAmPm:false,
		background:'#fff',
		bShowHeartBeat:true
		});	
}
function start_countdown(id,h,m,s) {
    var liftoff = new Date();
    liftoff = new Date(liftoff.getFullYear(), liftoff.getMonth(), liftoff.getDate(), h, m, s);
    $('#'+id+'_time_r').countdown({until: liftoff, compact: true, onExpiry: function() { expired_time(id)}});
	if($('#'+id+'_time_r').text()=='00:00:00'){
		$('#'+id+'_time_r').html('<span class="text-success glyphicon glyphicon-ok"></span>')
	}

}
function setTriggModal(event){
	$('#video_url_caption').html(event);
	if(!$.cookie(event)){
		$('#video_url').val('');
	}else{
		$('#video_url').val($.cookie(event));
	}
	$('#triggerModal').modal();
	$('#trigger_name').val(event);
}
function saveTrigger(){
	setCookie($('#trigger_name').val(),$('#video_url').val(),30);
	$('#triggerModal').modal('hide');
}
function expired_time(id){
	if($.cookie(id)){
		$('#video_play_caption').html(id);
		$('#triggerPlay').modal('show');
		//$('#video_frame').removeAttr('src');
		$('#video_frame').attr('src', $.cookie(id)+'?autoplay=1');
	}
	$('#'+id+'_time_r').html('<span class="text-success glyphicon glyphicon-ok"></span>');
}
function update_current_date(){
	var weekday=new Array(7);
	weekday[0]="Sunday";
	weekday[1]="Monday";
	weekday[2]="Tuesday";
	weekday[3]="Wednesday";
	weekday[4]="Thursday";
	weekday[5]="Friday";
	weekday[6]="Saturday";
	var date =new Date();
	var curr_day = date.getDay();
	var curr_date = date.getDate();
	var curr_month = date.getMonth() + 1; //Months are zero based
	var curr_year = date.getFullYear();
	var current_date=weekday[curr_day]+' '+curr_date + "/" + curr_month + "/" + curr_year;	
	$('#current_date').text(current_date);
}
function start_countdown_all(data) {
		var tmp;
		tmp=data.imsak.split(":");
		start_countdown("imsak",tmp[0],tmp[1],0);
		tmp=data.fajr.split(":");
		start_countdown("fajr",tmp[0],tmp[1],0);
		tmp=data.sunrise.split(":");
		start_countdown("sunrise",tmp[0],tmp[1],0);
		tmp=data.dhuhr.split(":");
		start_countdown("dhuhr",tmp[0],tmp[1],0);
		tmp=data.asr.split(":");
		start_countdown("asr",tmp[0],tmp[1],0);
		tmp=data.sunset.split(":");
		start_countdown("sunset",tmp[0],tmp[1],0);
		tmp=data.maghrib.split(":");
		start_countdown("maghrib",tmp[0],tmp[1],0);
		tmp=data.isha.split(":");
		start_countdown("isha",tmp[0],tmp[1],0);		
		tmp=data.midnight.split(":");
		start_countdown("midnight",tmp[0],tmp[1],0);
}
function setCookie(c_name,value,exdays)
{
	$.cookie(c_name, value, { expires: exdays, path: '/' });
}
function calculate(long,lat,method){
	prayTimes.setMethod(method); 
	var date =new Date();
	var tomorrow = new Date(date.getTime() + 24 * 60 * 60 * 1000);
	var p=prayTimes.getTimes(date, [lat , long]);
	var p2=prayTimes.getTimes(tomorrow, [lat , long]);
	p.lat=lat;
	p.long=long;
	p.sobhFarda=p2.fajr;
	return p;
}
function recalculate(){
	var method=$('#calc_method').val();
	var lat = $('#m_lat').val();
	var long = $('#m_long').val();
	p=calculate(long,lat,method);
	$( "#azan_times" ).html('');
	$( "#t_result" ).tmpl(p).appendTo( "#azan_times" );
	enableTooltips();
	start_countdown_all(p);
	$('.trigger').mouseover(function(e) {
			$(this).css('background-color','#dcfe89');
	});			
	$('.trigger').mouseout(function(e) {
			$(this).css('background-color','');
	});		
	setCookie('calc_method',method,30);
}
function enableTooltips(){
	$('#imsak_inf').tooltip({
		title: "imsak is the time you stop eating i.e. begin your fast.",
		placement:"right"
	});
	$('#fajr_inf').tooltip({
		title: "Dawn to sunrise, should be read at least 10-15 minutes before sunrise.",
		html: true,
		placement:"right"
	});
	$('#dhuhr_inf').tooltip({
		title: "After true noon until Asr.",
		placement:"right"
	});
	$('#asr_inf').tooltip({
		title: "Afternoon.",
		placement:"right"
	});
	$('#maghrib_inf').tooltip({
		title: "After sunset until dusk.",
		placement:"right"
	});
	$('#isha_inf').tooltip({
		title: "Dusk until dawn.",
		placement:"right"
	});
}