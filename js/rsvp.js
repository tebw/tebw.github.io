;(function () {
	
	'use strict';
	
	var invitations = JSON.parse(atob(`eyI2NzI5IjpbIlRhaXMiLCJGZXJuYW5kbyJdLCI3RU9TIjpbIkFkcmlhbmEiLCJKb3PpIMlyaXRvbiIsIkFydGh1ciJdLCI3Wk03IjpbIk1hcmlhIEZyYW5jaXNjYSJdLCJUNkQ2IjpbIkFuaXRhIiwiRGlvbmlzaXVzIl0sIldBWVQiOlsiU2luYXJhIiwiUm9uaWxkbyIsIkthbWlsYSIsIkd1c3Rhdm8iXSwiQ042QyI6WyJNYWdkYSIsIlJhZmFlbGEiLCJBZ2F0aGEiLCJSYWZhZWwiXSwiWE5TNyI6WyJBZm9uaW8gSm9z6SIsIkZyYW5jaWVsZSIsIklhZ28gR2FicmllbCIsIk5pY29sbGUiLCJDYXJvbCJdLCJQVzY2IjpbIkdhYnJpZWxhIiwiSm/jbyBSaWNhcmRvIl0sIk83SEwiOlsiWW9u4SIsIkFuZHLpIiwiRmVsaXBlIiwiSXNhYmVsYSJdLCJNOFMxIjpbIkNhcm1lbiIsIkx1aXMiLCJSdWJlbnMiXSwiV0c5MCI6WyJKdW5pb3IiLCJMYXVyYSIsIkFydGh1ciJdLCJVOVFQIjpbIkpv428iLCJJc2FiZWwiXSwiNDdZMyI6WyJKb2FuYSIsIklyaW5ldSJdLCI3MkdSIjpbIkNsYXVkaWEiLCJFbG9zIFJlbmF0byJdLCI0QjVWIjpbIkplcm9uaW1vIiwiR2FicmllbGEiXSwiRTUyQiI6WyJSZWdpbmEiLCJKb3PpIExpbm8iLCJMdWlzIEV2YWxkbyJdLCJVTVJZIjpbIlJvZG9sZm8iLCJFbGlu6WlhIiwiTHVpc2EiXSwiWEYzUSI6WyJTb25pYSIsIkp1dmVuYWwiXSwiVDdJUiI6WyJCYXJiYXJhIiwiUm9kcmlnbyBHYWxvIl0sIllLOTgiOlsiSmFuaWNlIl0sIlcyRFQiOlsiU2FuZHJhIiwiT2RhaXIiLCJTYXJhaCJdLCJRVkg4IjpbIkp1c3NhbuMgR3VpdGFycmFyaSIsIkNlbHNvIEd1aXRhcnJhcmkiLCJMdWNhcyBHdWl0YXJyYXJpIl0sIlpBMk4iOlsiQWxleGFuZHJlIiwiTmF04WxpYSIsIkxlb25hcmRvIl0sIlpBV1IiOlsiSmHnaXJhIiwiRXLhY2xpdG8iXSwiTldKVCI6WyJJcmVuZSJdLCIxTlZYIjpbIkp1c3NhcmEiLCJQYXVsbyJdLCJTVzQ4IjpbIkxldO1jaWEiXSwiWEZKNCI6WyJMdWl6YSJdLCIwOVRSIjpbIlBhdWxvIFJvYmVydG8iLCJK+mxpYSJdLCJaMDZLIjpbIkVy4WNsaXRvIiwiRmVybmFuZGEiLCJSZWJlY2EiXSwiNzFGRyI6WyJKYXF1ZWxpbmUiLCJMZW9uYXJkbyIsIkhlbnJpcXVlIiwiQmV0aW5hIl0sIjNMOFEiOlsiQ2FybG9zIiwiRWRuYSIsIlJhZmFlbCJdLCJIWUY5IjpbIkNsZWJlciIsIkNsYXVkaWEiXSwiVUo2NSI6WyJDcmlzdGlhbiIsIkVsYWluZSIsIkr6bGlhIiwiR3VpbGhlcm1lIl0sIjM4RVEiOlsiUmVnaW5hIiwiQW5kcukiXSwiSjNDViI6WyJSb3NlbGkiLCJHYWJyaWVsIl0sIk43STIiOlsiQW509G5pbyBDYXJsb3MiLCJNYXJpYW5hIiwiTWF0ZXVzIiwiQW5hIEJlYXRyaXoiLCJBbmEgQ2Fyb2xpbmEiXSwiQzkzSiI6WyJT4Wx2aW8iLCJTdXppIl0sIkdERkgiOlsiQnJ1bm8iLCJSZWdpYW5lIiwiUWhpYXJhIl0sIkpMWUUiOlsiSm/jbyBSb2RyaWd1ZXMiXSwiRTY0TCI6WyJL4XRpYSIsIkp1Y2EiXSwiM0xMQyI6WyJQYXRy7WNpYSIsIkZyYW5jaXNjbyJdLCJPOFlWIjpbIlJvYmVydGEiXSwiUzJKUyI6WyJKb3PpbGlhIiwiUnV5IiwiTWFudWVsYSIsIlJlbmFuIiwiQW50b25lbGxhIiwiRW1pbHkiLCJIZWl0b3IiXSwiUFY0MyI6WyJOZWNpIl0sIjZRRTciOlsiQuFyYmFyYSIsIkp1bGlhbm8iXSwiQjhJUiI6WyJSZW5hdGEiLCJMZW9uYXJkbyJdLCJGUVhBIjpbIkdhYnJpZWxlIl0sIlBHMTEiOlsiQW5hIENhcm9saW5hIiwiTHVjYXMiXSwiTUc2RiI6WyJNYXJpYSBFZHVhcmRhIl0sIllVTUwiOlsiTeFyY2lvIiwiTWHtcmEiXSwiM1NYRSI6WyJMYe1zIl0sIlUyR0IiOlsiQmVhdHJpeiJdLCJNMzQ1IjpbIkFuYSBDYXJvbGluYSJdLCJPQUZTIjpbIk1hcmluYSIsIkdhYnJpZWwiXSwiNk1GMSI6WyJJZ29yIl0sIktFVzAiOlsiRmVsaXBlIFNwaW5hIl0sIjFURkoiOlsiRnJhbmNvIiwiU2FyYWgiXSwiT0U3QyI6WyJGZXJuYW5kbyIsIkZlcm5hbmRhIl0sIlJVOVQiOlsiQWRyaWFuIl0sIjRQRVEiOlsiUmVuYXRvIEdvZGluaG8iXSwiTU1ZUCI6WyJQZWRybyJdLCJDTUM5IjpbIkpv428iLCJN6XJjaWEiLCJCZWF0cml6Il0sIjJKV1IiOlsiQ2xhdWRpYSIsIkRhcmN0b24iXSwiQ01QNyI6WyJBbmEgTHVpc2EiLCJGYWJy7WNpbyJdLCI1UFRLIjpbIkFuZHJlIEx1aXMiLCJBbGljZSJdLCJSVDNYIjpbIkFsZXhhbmRyZSIsIkFuZ+lsaWNhIl0sIjNHNFQiOlsiSW7hY2lvIiwiRmFiaWFuYSJdLCIyRUhPIjpbIldpbHNvbiIsIkFuZHLpaWEiXSwiWlpTOCI6WyJQ6XJpY2xlcyIsIlNhbmRyYSJdLCJaRjREIjpbIlJpY2FyZG8iLCJBcmllbmUiXSwiUVM2TCI6WyJFcmlvdmFuIiwiQWxlc3NhbmRyYSJdLCJPVEpDIjpbIkVyaW9uZWkiLCJJb2xpdGEiXSwiVUc3TCI6WyJFbHNvbiIsIkl2ZXRlIl0sIlBZOVciOlsiTHVpcyBDbPN2aXMiLCJBbmEgQ2xhdWRpYSJdLCI5U0o2IjpbIkp1Y2EiXSwiMzlLOSI6WyJTaGlybGV5Il0sIjROMjAiOlsiTWFub2VsIFZpbG1hciIsIlNhbmRyYSJdLCI1M09UIjpbIk3hcmNpbyIsIk1hcmlzYSJdLCJOVlZQIjpbIk1vbmljYSIsIkZlcm5hbmRvIl0sIjBQMlYiOlsiSXZvbiIsIkFuYSJdLCJOME4wIjpbIlZpbmljaXVzIl0sIlQwOVgiOlsiQ+Fzc2lvIl0sIlVEWloiOlsiTWF5YXJhIl0sIlhSWTgiOlsiQ2Fyb2xpbmUiXSwiR1BUNyI6WyJBbm5lbGlzZSJdLCJUNkQzIjpbIkNhcmxvcyBBbGJlcnRvIiwiQ2FybGEiXX0=`));

	var add_invitee = function(n, invitee, is_new) {
 		
 		var read_only = is_new ? '' : 'readonly';
 		
		var html = `
		<div class="row invitee-row ">
			<div class="col-md-8 col-xs-7 invitee-name">
				<input type="text" id="invitee_${n}_name"" value="${invitee}" ${read_only}></input>
			</div>
			<div class="col-md-4 col-xs-5">
				<div class="toggle">
					<input type="checkbox" name="invitee_${n}" class="check-checkbox" checked id="invitee_${n}">
					<label class="check-label" for="invitee_${n}">
						<div id="background"></div>
						<span class="face">
							<span class="face-container">
								<span class="eye left"></span>
								<span class="eye right"></span>
								<span class="mouth"></span>
							</span>
						</span>
					</label>
				</div>
			</div>
			
		</div>
		`;

		$('form .invitee-list').append(html)
	}

	var invitationValidator = function() {	

		var added = false;
		var invt_limit = 2;
		var invt_count = 1;
		$('#invt-id-btn').click(function(e) {
			var invt_id = $('#invt-id').val().toUpperCase()
			if (invt_id in invitations && !added) {
				
				$('.tebw-rsvp .second-step').show()

				for (var el in invitations[invt_id]){
					add_invitee(invt_count, invitations[invt_id][el], false)
					invt_count++;
				}

				added = true;
				invt_limit = invt_count + 2;
			}
		})

		$('#add-invt-btn').click(function(e) {
			if (invt_count < invt_limit) {
				add_invitee(invt_count, '', true)
				invt_count++;
			}else {
				$('.add-more-message').show();
			}
		})
	}

	var setupSubmit = function() {
		var Airtable = require('airtable');
		var base = new Airtable({apiKey: 'keyZncJ4VRsoKkmKn'}).base('app737JYUVmFkYR86');


		$('#invt-submit-btn').click(function(){
			// do some validations before
			var response = {
				invt_id: '',
				invitees: [],
				phone: '',
				music_request: '',
				food_restriction: ''
			}

			$.each($('#rsvp-form').serializeArray(), (i, input) =>{
				if (input.name.indexOf('invitee') == 0 ){
					response['invitees'].push($('#' + input.name + '_name').val());
				} else {
					response[input.name] = input.value;
				}
			});

			base('RSPV').create({
				"Invitation ID": response.invt_id,
				"Atendees": response.invitees.join('|'),
				"Number of Atendees": response.invitees.length,
				"Phone": response.phone,
				"Music Sugenstion": response.music_request,
				"Food Restriction": response.food_restriction
			}, function(err, record) {
			    if (err) { console.error(err); return; }
			    window.alert('Show de bola! Agradecemos sua resposta.')
			    window.location.href = '/';
			});
		})
		
	}

	$(function(){ invitationValidator(); setupSubmit(); });

}());
