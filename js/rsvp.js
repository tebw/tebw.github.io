;(function () {
	
	'use strict';
	
	var invitations = JSON.parse(atob(`eyI2NzI5IjpbIlRhaXMiLCJGZXJuYW5kbyJdLCI3RU9TIjpbIkFkcmlhbmEiLCJKb3PpIMlyaXRvbiIsIkFydGh1ciJdLCI3Wk03IjpbIk1hcmlhIEZyYW5jaXNjYSJdLCJUNkQ2IjpbIkFuaXRhIiwiRGlvbmlzaXVzIl0sIldBWVQiOlsiU2luYXJhIiwiUm9uaWxkbyIsIkthbWlsYSIsIkd1c3Rhdm8iXSwiQ042QyI6WyJNYWdkYSIsIlJhZmFlbGEiLCJBZ2F0aGEiLCJSYWZhZWwiXSwiWE5TNyI6WyJBZm9uaW8gSm9z6SIsIkZyYW5jaWVsZSIsIklhZ28gR2FicmllbCIsIk5pY29sbGUiLCJDYXJvbCJdLCJQVzY2IjpbIkdhYnJpZWxhIiwiSm/jbyBSaWNhcmRvIl0sIk83SEwiOlsiWW9u4SIsIkFuZHLpIiwiRmVsaXBlIiwiSXNhYmVsYSJdLCJNOFMxIjpbIkNhcm1lbiIsIkx1aXMiLCJSdWJlbnMiXSwiV0c5MCI6WyJKdW5pb3IiLCJMYXVyYSIsIkFydGh1ciJdLCJVOVFQIjpbIkpv428iLCJJc2FiZWwiXSwiNDdZMyI6WyJKb2FuYSIsIklyaW5ldSJdLCI3MkdSIjpbIkNsYXVkaWEiLCJFbG9zIFJlbmF0byJdLCI0QjVWIjpbIkplcm9uaW1vIiwiR2FicmllbGEiXSwiRTUyQiI6WyJSZWdpbmEiLCJKb3PpIExpbm8iLCJMdWlzIEV2YWxkbyJdLCJVTVJZIjpbIlJvZG9sZm8iLCJFbGlu6WlhIiwiTHVpc2EiXSwiWEYzUSI6WyJTb25pYSIsIkp1dmVuYWwiXSwiVDdJUiI6WyJCYXJiYXJhIiwiUm9kcmlnbyBHYWxvIl0sIllLOTgiOlsiSmFuaWNlIl0sIlcyRFQiOlsiU2FuZHJhIiwiT2RhaXIiLCJTYXJhaCJdLCJRVkg4IjpbIkp1c3NhbuMgR3VpdGFycmFyaSIsIkNlbHNvIEd1aXRhcnJhcmkiLCJMdWNhcyBHdWl0YXJyYXJpIl0sIlpBMk4iOlsiQWxleGFuZHJlIiwiTmF04WxpYSIsIkxlb25hcmRvIl0sIlpBV1IiOlsiSmFzc2lyYSIsIkVy4WNsaXRvIl0sIk5XSlQiOlsiSXJlbmUiXSwiMU5WWCI6WyJKdXNzYXJhIiwiUGF1bG8iXSwiU1c0OCI6WyJMZXRpY2lhIl0sIlhGSjQiOlsiTHVpc2EiXSwiMDlUUiI6WyJQYXVsbyBSb2JlcnRvIiwiSnVsaWEiXSwiWjA2SyI6WyJFcmFjbGl0byIsIkZlcm5hbmRhIiwiUmViZWNhIl0sIjcxRkciOlsiSmFxdWVsaW5lIiwiTGVvbmFyZG8iLCJIZW5yaXF1ZSIsIkJldGluYSJdLCIzTDhRIjpbIkNhcmxvcyIsIkVkbmEiLCJSYWZhZWwiXSwiSFlGOSI6WyJDbGViZXIiLCJDbGF1ZGlhIl0sIlVKNjUiOlsiQ3Jpc3RpYW4iLCJFbGFpbmUiLCJKdWxpYSIsIkd1aWxoZXJtZSJdLCIzOEVRIjpbIlJlZ2luYSIsIkFuZHLpIl0sIkozQ1YiOlsiUm9zZWxpIiwiR2FicmllbCJdLCJON0kyIjpbIkFudG9uaW8gQ2FybG9zIiwiTWFyaWFuYSIsIk1hdGV1cyIsIkFuYSBCZWF0cml6IiwiQW5hIENhcm9saW5hIl0sIkM5M0oiOlsiU+FsdmlvIiwiU3V6aSJdLCJHREZIIjpbIkJydW5vIiwiUmVnaWFuZSIsIlFoaWFyYSJdLCJKTFlFIjpbIkpv428gUm9kcmlndWVzIl0sIkU2NEwiOlsiS+F0aWEiLCJKdWNhIl0sIjNMTEMiOlsiUGF0cu1jaWEiLCJGcmFuY2lzY28iXSwiTzhZViI6WyJSb2JlcnRhIl0sIlMySlMiOlsiSm9z6WxpYSIsIlJ1eSIsIk1hbnVlbGEiLCJSZW5hbiIsIkFudG9uZWxsYSIsIkVtaWx5IiwiSGVpdG9yIl0sIlBWNDMiOlsiTmVjaSJdLCI2UUU3IjpbIkLhcmJhcmEiLCJKdWxpYW5vIl0sIkI4SVIiOlsiUmVuYXRhIiwiTGVvbmFyZG8iXSwiRlFYQSI6WyJHYWJyaWVsZSJdLCJQRzExIjpbIkFuYSBDYXJvbGluYSIsIkx1Y2FzIl0sIk1HNkYiOlsiTWFyaWEgRWR1YXJkYSJdLCJZVU1MIjpbIk3hcmNpbyIsIk1h7XJhIl0sIjNTWEUiOlsiTGHtcyJdLCJVMkdCIjpbIkJlYXRyaXoiXSwiTTM0NSI6WyJBbmEgQ2Fyb2xpbmEiXSwiT0FGUyI6WyJNYXJpbmEiLCJHYWJyaWVsIl0sIjZNRjEiOlsiSWdvciJdLCJLRVcwIjpbIkZlbGlwZSBTcGluYSJdLCIxVEZKIjpbIkZyYW5jbyIsIlNhcmFoIl0sIk9FN0MiOlsiRmVybmFuZG8iLCJGZXJuYW5kYSJdLCJSVTlUIjpbIkFkcmlhbiJdLCI0UEVRIjpbIlJlbmF0byBHb2RpbmhvIl0sIk1NWVAiOlsiUGVkcm8iXSwiQ01DOSI6WyJKb+NvIiwiTelyY2lhIiwiQmVhdHJpeiJdLCIySldSIjpbIkNsYXVkaWEiLCJEYXJjdG9uIl0sIkNNUDciOlsiQW5hIEx1aXNhIiwiRmFicu1jaW8iXSwiNVBUSyI6WyJBbmRyZSBMdWlzIiwiQWxpY2UiXSwiUlQzWCI6WyJBbGV4YW5kcmUiLCJBbmfpbGljYSJdLCIzRzRUIjpbIklu4WNpbyIsIkZhYmlhbmEiXSwiMkVITyI6WyJXaWxzb24iLCJBbmRy6WlhIl0sIlpaUzgiOlsiUOlyaWNsZXMiLCJTYW5kcmEiXSwiWkY0RCI6WyJSaWNhcmRvIiwiQXJpZW5lIl0sIlFTNkwiOlsiRXJpb3ZhbiIsIkFsZXNzYW5kcmEiXSwiT1RKQyI6WyJFcmlvbmVpIiwiSW9saXRhIl0sIlVHN0wiOlsiRWxzb24iLCJJdmV0ZSJdLCJQWTlXIjpbIkx1aXMgQ2zzdmlzIiwiQW5hIENsYXVkaWEiXSwiOVNKNiI6WyJKdWNhIl0sIjM5SzkiOlsiU2hpcmxleSJdLCI0TjIwIjpbIk1hbm9lbCBWaWxtYXIiLCJTYW5kcmEiXSwiNTNPVCI6WyJN4XJjaW8iLCJNYXJpc2EiXSwiTlZWUCI6WyJNb25pY2EiLCJGZXJuYW5kbyJdLCIwUDJWIjpbIkl2b24iLCJBbmEiXSwiTjBOMCI6WyJWaW5pY2l1cyJdLCJUMDlYIjpbIkPhc3NpbyJdLCJVRFpaIjpbIk1heWFyYSJdLCJYUlk4IjpbIkNhcm9saW5lIl0sIkdQVDciOlsiQW5uZWxpc2UiXSwiVDZEMyI6WyJDYXJsb3MgQWxiZXJ0byIsIkNhcmxhIl19`));

	var add_invitee = function(n, invitee, is_new) {
 		
 		var read_only = is_new ? '' : 'readonly';
 		
 		var prechecked = is_new ? 'checked' : '';

		var html = `
		<div class="row invitee-row ">
			<div class="col-md-8 col-xs-7 invitee-name">
				<input type="text" id="invitee_${n}_name"" value="${invitee}" ${read_only}></input>
			</div>
			<div class="col-md-4 col-xs-5">
				<div class="toggle">
					<input type="checkbox" name="invitee_${n}" class="check-checkbox" ${prechecked} id="invitee_${n}">
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