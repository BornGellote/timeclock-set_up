function createGraphic(graphData,grpahValues,wrapper,alert,active,maximum,height){

	var el_w = 41;

	var graphicWidth = grpahValues.length * el_w;

	var window_width = $(wrapper).find('.graph_content').width();
	if (window_width>graphicWidth) {
		$(wrapper).prev().find('.graph_arr').css('display','none');
	}
	var slider_end = graphicWidth-window_width;
	var slider_end = slider_end-slider_end-slider_end;
	var step = window_width/2;

	var slider_left = 0;
	$(wrapper).find('.graph_bars').width(graphicWidth);
	$(wrapper).find('.graph_lines').width(graphicWidth);
	$(wrapper).find('.graph_content').height(height+48);
	$(wrapper).find('.graph_bars_content').height(height);
	$(wrapper).find('.graph_lines_content').height(height);

	var canvas = $(wrapper).find('canvas');
	var ctx = canvas[0].getContext('2d');
	canvas[0].height = height;
	canvas[0].width = graphicWidth;
	ctx.beginPath();

	graphData.forEach(function(item, i, graphData) {
		var bottom = item.value/maximum*100;
		$(wrapper).find('.graph_data').append('<div class="graph_data_item" style="bottom:'+bottom+'%">'+item.name+'</div>');
		$(wrapper).find('.graph_bg').append('<div class="graph_bg_line" style="bottom:'+bottom+'%"></div>');
	});

	grpahValues.forEach(function(item, i, grpahValues) {
		var bottom = item.value/maximum*100;
		var top = 100-bottom;
		var alert_new = alert.replace("#",item.value);
		$(wrapper).find('.graph_bars_content').append('<div class="graph_bar"><div class="graph_bar_content" style="height:'+bottom+'%"><div class="alert_graph">'+alert_new+'</div></div></div>');
		$(wrapper).find('.graph_lines_content').append('<div class="graph_line"><div class="graph_line_content" style="bottom:'+bottom+'%"><div class="alert_graph">'+alert_new+'</div></div></div>');
		$(wrapper).find('.graph_values').append('<div class="graph_value">'+item.day+'</div>');
		var l_next = i*41;
		var l = el_w/2+l_next;
		var t = height/100*top;
		if (i===0) {
			ctx.moveTo(l,t);
		} else {
			ctx.lineTo(l,t);
		}
	});
	ctx.strokeStyle = "#37bdbd";
	ctx.stroke();
	if (active=='lines') {
		$(wrapper).find('.graph_lines').addClass('active');
		$(wrapper).prev().find('.graph_link_lines').addClass('active');
	} else if (active=='bars') {
		$(wrapper).find('.graph_bars').addClass('active');
		$(wrapper).prev().find('.graph_link_bars').addClass('active');
	}
	$(wrapper).prev().find('.graph_link_lines').click(function(){
		$(this).parents('.panel').find('.graph_bars').removeClass('active');
		$(this).parents('.panel').find('.graph_lines').css('left','0').addClass('active');
		$(this).parent().find('.active').removeClass('active');
		$(this).addClass('active');
		slider_left = 0;
	});
	$(wrapper).prev().find('.graph_link_bars').click(function(){
		$(this).parents('.panel').find('.graph_bars').css('left','0').addClass('active');
		$(this).parents('.panel').find('.graph_lines').removeClass('active');
		$(this).parent().find('.active').removeClass('active');
		$(this).addClass('active');
		slider_left = 0;
	});
	$(wrapper).prev().find('.graph_arr_right').click(function(){
		var window_width = $(wrapper).find('.graph_content').width();
		if (window_width>graphicWidth) {
			$(wrapper).prev().find('.graph_arr').css('display','none');
		}
		var slider_end = graphicWidth-window_width;
		var slider_end = slider_end-slider_end-slider_end;
		var step = window_width/2;

		var slider_left_next = slider_left-step;
		if (slider_left_next<slider_end) {
			slider_left = slider_end;
		} else {
			slider_left = slider_left_next;
		}
		$(wrapper).find('.active').css('left',slider_left);
	});
	$(wrapper).prev().find('.graph_arr_left').click(function(){
		var window_width = $(wrapper).find('.graph_content').width();
		if (window_width>graphicWidth) {
			$(wrapper).prev().find('.graph_arr').css('display','none');
		}
		var slider_end = graphicWidth-window_width;
		var slider_end = slider_end-slider_end-slider_end;
		var step = window_width/2;
		
		var slider_left_next = slider_left+step;
		if (slider_left_next>0) {
			slider_left = 0;
		} else {
			slider_left = slider_left_next;
		}
		$(wrapper).find('.active').css('left',slider_left);
	});
}