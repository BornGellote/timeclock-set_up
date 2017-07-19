$(document).ready(function () {
    var $menu = $("#menu");

    $(window).scroll(function(){
        if ( $(this).scrollTop() > 100 && $menu.hasClass('default') ){
            $menu.removeClass('default').addClass('fixed');
        } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
            $menu.removeClass('fixed').addClass('default');
        }
    });

	$("#fast_messages_list, #livestream_content, #empl_list_content").slimscroll({
	  height: '100%',
	  alwaysVisible: true,
	});
    
	$('.open_fast_messages a').mouseover(function(){
		if (!$(this).parent().hasClass('active')) {
			$(this).parent().addClass('active').parents('.dropdown_window_content').addClass('show_fast_messages');
		}
	});

	$('#user_head').mouseleave(function(){
		if ($('.open_fast_messages').hasClass('active')) {
			$('.open_fast_messages').removeClass('active');
			$('.dropdown_window_content').removeClass('show_fast_messages');
		}
	});

	$.fx.interval = 1;

	$('#livestream_link, #livestream_close').click(function(){
		 if ($('#livestream_link').hasClass('active')) {
			$('.container_with_livestream').stop().animate( {'margin-left': '0'}, {
			    duration: 750, 
			    specialEasing: {
			      'margin-left': 'linear',
			    } 
			});
		} else {
			$('.container_with_livestream').stop().animate({'margin-left': '-390'}, {
			    duration: 750, 
			    specialEasing: {
			      'margin-left': 'linear',
			    }
			});
		} 
		$('#livestream_link').toggleClass('active');
	});

	$('.for_show_tabs a').click(function(){
	  $('.for_show_tabs .active').removeClass('active');
	  $(this).parent().addClass('active');
	  $('.tab_hide').css('display','none');
	  var show_tab = $(this).attr('href');
	  $(show_tab).css('display','block').find('.item').css('left',0);
	  return false;
	});    
	
	$('.title_date .left').click(function(){
	  var show_tab = $(this).attr('for');
	  $(show_tab).find('.it-active').removeClass('it-active').prev().addClass('it-active').css('left',0);
	});  
	$('.title_date .right').click(function(){
	  var show_tab = $(this).attr('for');
	  $(show_tab).find('.it-active').removeClass('it-active').next().addClass('it-active').css('left',0);
	});  	
	
    var allitem =  $('.myModalReport').find('.item').length;
    var step = 1;
    $('.title_report').find('#begin').text('1');
    $('.title_report').find('#end_begin').text(allitem);
        $('.title_report .left_one').click(function() {
            var show_tab = $(this).attr('for');
               if(step >= 1) {
                  step--;
                  $('.title_report').find('#begin').text(step);
                  $(show_tab).find('.it-active').removeClass('it-active').prev().addClass('it-active').css('left',0);
               }
        });
        $('.title_report .Lleft').click(function() {
            var show_tab = $(this).attr('for');
            $('.title_report').find('#begin').text('1');
            $(show_tab).find('.it-active').removeClass('it-active');
            $(show_tab).find('.item').first().addClass('it-active');
        });

        $('.title_report .right_one').click(function() {
            var show_tab = $(this).attr('for');
                if(step < allitem) {
                    step++;
                    $('.title_report').find('#begin').text(step);
                    $(show_tab).find('.it-active').removeClass('it-active').next().addClass('it-active').css('left',0);
                }
        });
        $('.title_report .Rright').click(function() {
            var show_tab = $(this).attr('for');
            $('.title_report').find('#begin').text(allitem);
              $(show_tab).find('.it-active').removeClass('it-active');
              $(show_tab).find('.item').last().addClass('it-active');
        });
    
	var slider_left = 0; 
	$('.right_tab_day').click(function(){
		var window_width = $('.alldays').width(); 
		var graphicWidth = $('.alldays .item.it-active').width(); 
		var slider_end = graphicWidth-window_width;
		var slider_end = slider_end-slider_end-slider_end; 
		var step = window_width/3; 

		var slider_left_next = slider_left-step; 

		if (slider_left_next<slider_end) {  
			slider_left = slider_end; 
		} else {
			slider_left = slider_left_next; 
		}
		$(wrapper).find('.it-active').css('left',slider_left); 
	});

	$('.left_tab_day').click(function(){
		var window_width = $('.alldays .item.it-active').width(); 
		var step = window_width/3; 
		
		var slider_left_next = slider_left+step; 
		if (slider_left_next>0) { 
			slider_left = 0; 
		} else {
			slider_left = slider_left_next;
		}
		$(wrapper).find('.it-active').css('left',slider_left);
	});	
	
	var slider_left = 0; 
	$('.right_tab_week').click(function(){
		var window_width = $('.allweek').width(); 
		var graphicWidth = $('.allweek .item.it-active').width(); 
		var slider_end = graphicWidth-window_width;
		var slider_end = slider_end-slider_end-slider_end; 
		var step = window_width/3; 

		var slider_left_next = slider_left-step; 

		if (slider_left_next<slider_end) {  
			slider_left = slider_end; 
		} else {
			slider_left = slider_left_next; 
		}
		$(wrapper).find('.it-active').css('left',slider_left); 
	});

	$('.left_tab_week').click(function(){
		var window_width = $('.allweek .item.it-active').width(); 
		var step = window_width/3; 
		
		var slider_left_next = slider_left+step; 
		if (slider_left_next>0) { 
			slider_left = 0; 
		} else {
			slider_left = slider_left_next;
		}
		$(wrapper).find('.it-active').css('left',slider_left);
	});
	
	$('.allweek .week_table .one_date_week, .mouth .one_date_mouth').click(function(){
		$('.d_br').trigger('click');
	});
	
	$('.one_row_day').each(function(){
		var start = parseInt($(this).attr('start'));
		var end = parseInt($(this).attr('end'));
		var way = end-start;
		var minutes = 1440;
		var leftpro = start/minutes*100;
		var widthpro = way/minutes*100;
		var tr_width = 1555;
		var left = tr_width/100*leftpro;
		var width = tr_width/100*widthpro;
		$(this).css('left',left).css('width',width).css('width', '+=9px').css('left', '-=1px');
		var maxw = tr_width-parseFloat($(this).css('left'));
		$(this).resizable({
			minWidth:170, 
			maxWidth:maxw, 
			handles: 'e, w', 
			distance: 10,
			resize: function( event, ui ) {
				if (ui.position.left<0) {
					ui.position.left=0;
					ui.size.width=ui.originalSize.width+ui.originalPosition.left;
				}
			},
			stop: function( event, ui ) {
				var maxw = tr_width-parseFloat($(this).css('left'));
				$(this).resizable("option", "maxWidth", maxw);
			},
		});
	});
	
});