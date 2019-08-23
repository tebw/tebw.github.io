;(function () {
	
	'use strict';
	
	var invitations = JSON.parse(atob(`ewogICI2NzI5IjogWwogICAgIlRhaXMiLAogICAgIkZlcm5hbmRvIgogIF0sCiAgIjdFT1MiOiBbCiAgICAiQWRyaWFuYSIsCiAgICAiSm9z6SDJcml0b24iLAogICAgIkFydGh1ciIKICBdLAogICI3Wk03IjogWwogICAgIk1hcmlhIEZyYW5jaXNjYSIKICBdLAogICJUNkQ2IjogWwogICAgIkFuaXRhIiwKICAgICJEaW9uaXNpdXMiCiAgXSwKICAiV0FZVCI6IFsKICAgICJTaW5hcmEiLAogICAgIlJvbmlsZG8iLAogICAgIkthbWlsYSIsCiAgICAiR3VzdGF2byIKICBdLAogICJDTjZDIjogWwogICAgIk1hZ2RhIiwKICAgICJSYWZhZWxhIiwKICAgICJBZ2F0aGEiLAogICAgIlJhZmFlbCIKICBdLAogICJYTlM3IjogWwogICAgIkFmb25pbyBKb3PpIiwKICAgICJGcmFuY2llbGUiLAogICAgIklhZ28gR2FicmllbCIsCiAgICAiTmljb2xsZSIsCiAgICAiQ2Fyb2wiCiAgXSwKICAiUFc2NiI6IFsKICAgICJHYWJyaWVsYSIsCiAgICAiSm/jbyBSaWNhcmRvIgogIF0sCiAgIk83SEwiOiBbCiAgICAiWW9u4SIsCiAgICAiQW5kcukiLAogICAgIkZlbGlwZSIsCiAgICAiSXNhYmVsYSIKICBdLAogICJNOFMxIjogWwogICAgIkNhcm1lbiIsCiAgICAiTHVpcyIsCiAgICAiUnViZW5zIgogIF0sCiAgIldHOTAiOiBbCiAgICAiSnVuaW9yIiwKICAgICJMYXVyYSIsCiAgICAiQXJ0aHVyIgogIF0sCiAgIlU5UVAiOiBbCiAgICAiSm/jbyIsCiAgICAiSXNhYmVsIgogIF0sCiAgIjQ3WTMiOiBbCiAgICAiSm9hbmEiLAogICAgIklyaW5ldSIKICBdLAogICI3MkdSIjogWwogICAgIkNsYXVkaWEiLAogICAgIkVsb3MgUmVuYXRvIgogIF0sCiAgIjRCNVYiOiBbCiAgICAiSmVyb25pbW8iLAogICAgIkdhYnJpZWxhIgogIF0sCiAgIkU1MkIiOiBbCiAgICAiUmVnaW5hIiwKICAgICJKb3PpIExpbm8iLAogICAgIkx1aXMgRXZhbGRvIgogIF0sCiAgIlVNUlkiOiBbCiAgICAiUm9kb2xmbyIsCiAgICAiRWxpbulpYSIsCiAgICAiTHVpc2EiCiAgXSwKICAiWEYzUSI6IFsKICAgICJTb25pYSIsCiAgICAiSnV2ZW5hbCIKICBdLAogICJUN0lSIjogWwogICAgIkJhcmJhcmEiLAogICAgIlJvZHJpZ28gR2FsbyIKICBdLAogICJZSzk4IjogWwogICAgIkphbmljZSIKICBdLAogICJXMkRUIjogWwogICAgIlNhbmRyYSIsCiAgICAiT2RhaXIiLAogICAgIlNhcmFoIgogIF0sCiAgIlFWSDgiOiBbCiAgICAiSnVzc2Fu4yBHdWl0YXJyYXJpIiwKICAgICJDZWxzbyBHdWl0YXJyYXJpIiwKICAgICJMdWNhcyBHdWl0YXJyYXJpIgogIF0sCiAgIlpBMk4iOiBbCiAgICAiQWxleGFuZHJlIiwKICAgICJOYXThbGlhIiwKICAgICJMZW9uYXJkbyIKICBdLAogICJaQVdSIjogWwogICAgIkph52lyYSIsCiAgICAiRXLhY2xpdG8iCiAgXSwKICAiTldKVCI6IFsKICAgICJJcmVuZSIKICBdLAogICIxTlZYIjogWwogICAgIkp1c3NhcmEiLAogICAgIlBhdWxvIgogIF0sCiAgIlNXNDgiOiBbCiAgICAiTGV07WNpYSIKICBdLAogICJYRko0IjogWwogICAgIkx1aXphIgogIF0sCiAgIjA5VFIiOiBbCiAgICAiUGF1bG8gUm9iZXJ0byIsCiAgICAiSvpsaWEiCiAgXSwKICAiWjA2SyI6IFsKICAgICJFcuFjbGl0byIsCiAgICAiRmVybmFuZGEiLAogICAgIlJlYmVjYSIKICBdLAogICI3MUZHIjogWwogICAgIkphcXVlbGluZSIsCiAgICAiTGVvbmFyZG8iLAogICAgIkhlbnJpcXVlIiwKICAgICJCZXRpbmEiCiAgXSwKICAiM0w4USI6IFsKICAgICJDYXJsb3MiLAogICAgIkVkbmEiLAogICAgIlJhZmFlbCIKICBdLAogICJIWUY5IjogWwogICAgIkNsZWJlciIsCiAgICAiQ2xhdWRpYSIKICBdLAogICJVSjY1IjogWwogICAgIkNyaXN0aWFuIiwKICAgICJFbGFpbmUiLAogICAgIkr6bGlhIiwKICAgICJHdWlsaGVybWUiCiAgXSwKICAiMzhFUSI6IFsKICAgICJSZWdpbmEiLAogICAgIkFuZHLpIgogIF0sCiAgIkozQ1YiOiBbCiAgICAiUm9zZWxpIiwKICAgICJHYWJyaWVsIgogIF0sCiAgIk43STIiOiBbCiAgICAiQW509G5pbyBDYXJsb3MiLAogICAgIk1hcmlhbmEiLAogICAgIk1hdGV1cyIsCiAgICAiQW5hIEJlYXRyaXoiLAogICAgIkFuYSBDYXJvbGluYSIKICBdLAogICJDOTNKIjogWwogICAgIlPhbHZpbyIsCiAgICAiU3V6aSIKICBdLAogICJHREZIIjogWwogICAgIkJydW5vIiwKICAgICJSZWdpYW5lIiwKICAgICJRaGlhcmEiCiAgXSwKICAiSkxZRSI6IFsKICAgICJKb+NvIFJvZHJpZ3VlcyIKICBdLAogICJFNjRMIjogWwogICAgIkvhdGlhIiwKICAgICJKdWNhIgogIF0sCiAgIjNMTEMiOiBbCiAgICAiUGF0cu1jaWEiLAogICAgIkZyYW5jaXNjbyIKICBdLAogICJPOFlWIjogWwogICAgIlJvYmVydGEiCiAgXSwKICAiUzJKUyI6IFsKICAgICJKb3PpbGlhIiwKICAgICJSdXkiLAogICAgIk1hbnVlbGEiLAogICAgIlJlbmFuIiwKICAgICJBbnRvbmVsbGEiLAogICAgIkVtaWx5IiwKICAgICJIZWl0b3IiCiAgXSwKICAiUFY0MyI6IFsKICAgICJOZWNpIgogIF0sCiAgIjZRRTciOiBbCiAgICAiQuFyYmFyYSIsCiAgICAiSnVsaWFubyIKICBdLAogICJCOElSIjogWwogICAgIlJlbmF0YSIsCiAgICAiTGVvbmFyZG8iCiAgXSwKICAiRlFYQSI6IFsKICAgICJHYWJyaWVsZSIKICBdLAogICJQRzExIjogWwogICAgIkFuYSBDYXJvbGluYSIsCiAgICAiTHVjYXMiCiAgXSwKICAiTUc2RiI6IFsKICAgICJNYXJpYSBFZHVhcmRhIgogIF0sCiAgIllVTUwiOiBbCiAgICAiTeFyY2lvIiwKICAgICJNYe1yYSIKICBdLAogICIzU1hFIjogWwogICAgIkxh7XMiCiAgXSwKICAiVTJHQiI6IFsKICAgICJCZWF0cml6IgogIF0sCiAgIk0zNDUiOiBbCiAgICAiQW5hIENhcm9saW5hIgogIF0sCiAgIk9BRlMiOiBbCiAgICAiTWFyaW5hIiwKICAgICJHYWJyaWVsIgogIF0sCiAgIjZNRjEiOiBbCiAgICAiSWdvciIKICBdLAogICJLRVcwIjogWwogICAgIkZlbGlwZSBTcGluYSIKICBdLAogICIxVEZKIjogWwogICAgIkZyYW5jbyIsCiAgICAiU2FyYWgiCiAgXSwKICAiT0U3QyI6IFsKICAgICJGZXJuYW5kbyIsCiAgICAiRmVybmFuZGEiCiAgXSwKICAiUlU5VCI6IFsKICAgICJBZHJpYW4iCiAgXSwKICAiNFBFUSI6IFsKICAgICJSZW5hdG8gR29kaW5obyIKICBdLAogICJNTVlQIjogWwogICAgIlBlZHJvIgogIF0sCiAgIkNNQzkiOiBbCiAgICAiSm/jbyIsCiAgICAiTelyY2lhIiwKICAgICJCZWF0cml6IgogIF0sCiAgIjJKV1IiOiBbCiAgICAiQ2xhdWRpYSIsCiAgICAiRGFyY3RvbiIKICBdLAogICJDTVA3IjogWwogICAgIkFuYSBMdWlzYSIsCiAgICAiRmFicu1jaW8iCiAgXSwKICAiNVBUSyI6IFsKICAgICJBbmRyZSBMdWlzIiwKICAgICJBbGljZSIKICBdLAogICJSVDNYIjogWwogICAgIkFsZXhhbmRyZSIsCiAgICAiQW5n6WxpY2EiCiAgXSwKICAiM0c0VCI6IFsKICAgICJJbuFjaW8iLAogICAgIkZhYmlhbmEiCiAgXSwKICAiMkVITyI6IFsKICAgICJXaWxzb24iLAogICAgIkFuZHLpaWEiCiAgXSwKICAiWlpTOCI6IFsKICAgICJQ6XJpY2xlcyIsCiAgICAiU2FuZHJhIgogIF0sCiAgIlpGNEQiOiBbCiAgICAiUmljYXJkbyIsCiAgICAiQXJpZW5lIgogIF0sCiAgIlFTNkwiOiBbCiAgICAiRXJpb3ZhbiIsCiAgICAiQWxlc3NhbmRyYSIKICBdLAogICJPVEpDIjogWwogICAgIkVyaW9uZWkiLAogICAgIklvbGl0YSIKICBdLAogICJVRzdMIjogWwogICAgIkVsc29uIiwKICAgICJJdmV0ZSIKICBdLAogICJQWTlXIjogWwogICAgIkx1aXMgQ2zzdmlzIiwKICAgICJBbmEgQ2xhdWRpYSIKICBdLAogICI5U0o2IjogWwogICAgIkp1Y2EiCiAgXSwKICAiMzlLOSI6IFsKICAgICJTaGlybGV5IgogIF0sCiAgIjROMjAiOiBbCiAgICAiTWFub2VsIFZpbG1hciIsCiAgICAiU2FuZHJhIgogIF0sCiAgIjUzT1QiOiBbCiAgICAiTeFyY2lvIiwKICAgICJNYXJpc2EiCiAgXSwKICAiTlZWUCI6IFsKICAgICJNb25pY2EiLAogICAgIkZlcm5hbmRvIgogIF0sCiAgIjBQMlYiOiBbCiAgICAiSXZvbiIsCiAgICAiQW5hIgogIF0sCiAgIk4wTjAiOiBbCiAgICAiVmluaWNpdXMiCiAgXSwKICAiVDA5WCI6IFsKICAgICJD4XNzaW8iCiAgXSwKICAiVURaWiI6IFsKICAgICJNYXlhcmEiCiAgXSwKICAiWFJZOCI6IFsKICAgICJDYXJvbGluZSIKICBdLAogICJHUFQ3IjogWwogICAgIkFubmVsaXNlIgogIF0sCiAgIlQ2RDMiOiBbCiAgICAiQ2FybG9zIEFsYmVydG8iLAogICAgIkNhcmxhIgogIF0sCiAgIkY0QzEiOlsKICAgICJBbnRvbmlvIiwKICAgICJOYWlhcmEiCiAgXSwKICAiRjM3QiI6WwogICAgIkNhaW8iLAogICAgIk1lbGlzc2EiCiAgXQp9`));

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
