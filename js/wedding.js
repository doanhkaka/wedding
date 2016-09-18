var info = new Vue({
	el : '#body-wedding',
	data : {
		groom : 'Ngọc Tuấn',
		bride : 'Mỹ Hương',
		time : 'October 20, 2016',
		groom_des : "Ahihi",
		bride_des : "ihaha",
		groom_talk : "ihaha",
		bride_talk : "ihaha",
		love_story_title : "Love you and love me",
		love_story_content : "Tình chỉ đẹp khi còn dang dở - Đời mất vui khi vẹn câu thề !",
		slides : [
			'24.jpg',
			'24.jpg',
			'24.jpg',
			'19.jpg',
			'17.jpg',
			'17.jpg',
			'11.jpg',
		],
		events : [
			{title : 'Welcome', date : 'October 20th, 2016', schedule : 'From 9:00 AM', venue : 'Welcome guests'},
			{title : 'Party', date : 'October 20th, 2016', schedule : 'From 10:00 AM', venue : 'Wedding'},
			{title : 'Enjoy', date : 'October 20th, 2016', schedule : 'From 11:00 AM', venue : 'Enjoy'},
		]
	}
});