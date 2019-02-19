;(function () {
	
	'use strict';
	
	var invitations = JSON.parse(atob(`eyI2NzI5IjpbIlRhaXMiLCJGZXJuYW5kbyJdLCI3RU9TIjpbIkFkcmlhbmEgRmluY2sgZGUgT2xpdmVpcmEiLCJKb3PpIEVyaXRvbiBkZSBPbGl2ZWlyYSIsIkFydGh1ciBGaW5jayBkZSBPbGl2ZWlyIl0sIjdaTTciOlsiTWFyaWEgRnJhbmNpc2NhIGRlIE9saXZlaXJhIl0sIlQ2RDYiOlsiQW5pdGEgU291emEgRmluY2siLCJEaW9uaXNpdXMgRmluY2siXSwiV0FZVCI6WyJTaW5hcmEiLCJSb25pbGRvIiwiS2FtaWxhIiwiR3VzdGF2byJdLCJDTjZDIjpbIk1hZ2RhIiwiUmFmYWVsYSIsIkFnYXRoYSIsIlJhZmEiXSwiWE5TNyI6WyJBZm9uaW8gSm9z6SAoWmVxdWluaGEpIiwiRnJhbmNpZWxlIiwiR2FicmllbGEiLCJKb+NvIFJpY2FyZG8iLCJJYWdvIEdhYnJpZWwiLCJOaWNvbGxlIiwiQ2Fyb2wiXSwiTzdITCI6WyJZb27hIiwiQW5kcukiLCJGZWxpcGUiLCJJc2FiZWxhIl0sIk04UzEiOlsiQ2FybWVuIiwiTHVpcyIsIlJ1YmVucyJdLCJXRzkwIjpbIkp1bmlvciIsIkxhdXJhIiwiQXJ0aHVyIl0sIlU5UVAiOlsiSm/jbyIsIklzYWJlbCIsIkpvYW5hIiwiSXJpbmV1IiwiQ2xhdWRpYSIsIkVsb3MgUmVuYXRvIiwiSmVyb25pbW8iLCJHYWJyaWVsYSJdLCJFNTJCIjpbIlJlZ2luYSIsIkpvc+kgTGlubyIsIkZpbmNrIl0sIlVNUlkiOlsiUm9kb2xmbyIsIkVsaW7paWEiLCJMdWlzYSJdLCJYRjNRIjpbIlNvbmlhIiwiSnV2ZW5hbCIsIkJhcmJhcmEiLCJSb2RyaWdvIEdhbG8iLCJKYW5pY2UiXSwiVzJEVCI6WyJTYW5kcmEiLCJPZGFpciIsIlNhcmFoIl0sIlFWSDgiOlsiSnVzc2Fu4yBHdWl0YXJyYXJpIiwiQ2Vsc28gR3VpdGFycmFyaSIsIkx1Y2FzIEd1aXRhcnJhcmkiXSwiWkEyTiI6WyJBbGV4YW5kcmUgR3VpdGFycmFyaSIsIk5hdOFsaWEgQm9ub24iLCJMZW9uYXJkbyBHdWl0YXJyYXJpIl0sIlpBV1IiOlsiSmFzc2lyYSBNZWlyZWxlcyIsIkVy4WNsaXRvIE1laXJlbGVzIl0sIk5XSlQiOlsiSXJlbmUgR3VpdGFycmFyaSJdLCIxTlZYIjpbIkp1c3NhcmEiLCJQYXVsbyIsIkxldGljaWEiLCJMdWlzYSIsIlBhdWxvIFJvYmVydG8iLCJKdWxpYSJdLCJaMDZLIjpbIkVyYWNsaXRvIiwiRmVybmFuZGEiLCJSZWJlY2EiXSwiNzFGRyI6WyJKYXF1ZWxpbmUiLCJMZW9uYXJkbyIsIkhlbnJpcXVlIiwiQmV0aW5hIl0sIjNMOFEiOlsiQ2FybG9zIiwiRWRuYSIsIlJhZmFlbCJdLCJIWUY5IjpbIkNsZWJlciIsIkNsYXVkaWEiXSwiVUo2NSI6WyJDcmlzdGlhbiIsIkVsYWluZSIsIkp1bGlhIiwiR3VpbGhlcm1lIl0sIjM4RVEiOlsiUmVnaW5hIiwiQW5kcukiXSwiSjNDViI6WyJSb3NlbGkiLCJHYWJyaWVsIl0sIk43STIiOlsiQW50b25pbyBDYXJsb3MiLCJNYXJpYW5hIiwiTWF0ZXVzIiwiQW5hIENhcm9saW5hIiwiQW5hIEJlYXRyaXoiXSwiQzkzSiI6WyJT4Wx2aW8iLCJTdXppIl0sIkdERkgiOlsiQnJ1bm8iLCJSZWdpYW5lIiwiUWhpYXJhIl0sIjJCNU0iOlsiSHVnbyIsIlRoYXlhbmEiLCJWaWNlbnRlIiwiVmFsZW50aW5hIl0sIkpMWUUiOlsiSm/jbyBSb2RyaWd1ZXMiXSwiRTY0TCI6WyJL4XRpYSIsIkp1Y2EiLCJWaW5pY2l1cyIsIkthcml0YSJdLCIzTExDIjpbIlBhdHLtY2lhIiwiRnJhbmNpc2NvIl0sIk84WVYiOlsiQW5nZWxhIiwiUm9iZXJ0YSIsIkJldG8iLCJGYWJy7WNpbyJdLCJTMkpTIjpbIkpvc+lsaWEiLCJSdXkiLCJNYW51ZWxhIiwiUmVuYW4iLCJBbnRvbmVsbGEiLCJFbWlseSIsIkhlaXRvciJdLCJQVjQzIjpbIk5lY2kgZG9zIFNhbnRvcyJdLCI2UUU3IjpbIkLhcmJhcmEiLCJKdWxpYW5vIl0sIkI4SVIiOlsiUmVuYXRhIiwiTGVvbmFyZG8iXSwiRlFYQSI6WyJHYWJyaWVsZSJdLCJQRzExIjpbIkFuYSBDYXJvbGluYSIsIkx1Y2FzIl0sIk1HNkYiOlsiTWFyaWEgRWR1YXJkYSJdLCJZVU1MIjpbIk3hcmNpbyIsIk1haXJhIl0sIjNTWEUiOlsiTGHtcyJdLCJVMkdCIjpbIkJlYXRyaXoiXSwiTTM0NSI6WyJBbmEgQ2Fyb2xpbmEiXSwiT0FGUyI6WyJNYXJpbmEiLCJHYWJyaWVsIl0sIjZNRjEiOlsiSWdvciJdLCJLRVcwIjpbIkZlbGlwZSBTcGluYSJdLCIxVEZKIjpbIkZyYW5jbyIsIlNhcmFoIl0sIk9FN0MiOlsiRmVybmFuZG8iLCJGZXJuYW5kYSJdLCJSVTlUIjpbIkFkcmlhbiJdLCI0UEVRIjpbIlJlbmF0byBHb2RpbmhvIl0sIk1NWVAiOlsiUGVkcm8iXSwiQ01DOSI6WyJKb+NvIiwiTelyY2lhIiwiQmVhdHJpeiJdLCIySldSIjpbIkNsYXVkaWEiLCJEYXJjdG9uIl0sIkNNUDciOlsiQW5hIEx1aXNhIiwiRmFicu1jaW8iXSwiNVBUSyI6WyJBbmRyZSBMdWlzIiwiQWxpY2UiXSwiUlQzWCI6WyJBbGV4YW5kcmUiLCJBbmfpbGljYSJdLCIzRzRUIjpbIklu4WNpbyIsIkZhYmlhbmEiXSwiMkVITyI6WyJXaWxzb24iLCJBbmRy6WlhIl0sIlpaUzgiOlsiUOlyaWNsZXMiLCJTYW5kcmEiXSwiWkY0RCI6WyJSaWNhcmRvIiwiQXJpZW5lIl0sIlFTNkwiOlsiRXJpb3ZhbiIsIkFsZXNzYW5kcmEiXSwiT1RKQyI6WyJFcmlvbmVpIiwiSW9saXRhIl0sIlVHN0wiOlsiRWxzb24iLCJJdmV0ZSJdLCJQWTlXIjpbIkx1aXMgQ2zzdmlzIiwiQW5hIENsYXVkaWEiXSwiOVNKNiI6WyJKdWNhIl0sIjM5SzkiOlsiU2hpcmxleSJdLCI0TjIwIjpbIk1hbm9lbCBWaWxtYXIiLCJTYW5kcmEiXSwiNTNPMCI6WyJN4XJjaW8iLCJNYXJpc2EiXSwiTlZWUCI6WyJNb25pY2EiLCJGZXJuYW5kbyIsIlZhbGVudGluYSIsIkJlcm5hcmRvIl0sIjBQMlYiOlsiSXZvbiIsIkFuYSJdLCJOME4wIjpbIlZpbmljaXVzIl0sIlQwOVgiOlsiQ+Fzc2lvIl0sIlVEWloiOlsiTWF5YXJhIl0sIlhSWTgiOlsiQ2Fyb2xpbmUiXSwiR1BUNyI6WyJBbm5lbGlzZSJdLCAiR1BUNyI6WyJBbm5lbGlzZSJdLCAiVDZEMyI6WyJDYXJsb3MgQWxiZXJ0byBKciIsICJDYXJsYSJdfQ==`));

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
