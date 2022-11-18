const google_link = `https://google.com/abdullah al sazib`,
	html_link = `https://google.con/html`,
	css_link = `https://google.con/css`,
	js_link = `https://google.con/javascript`,
	other_link = `https://google.con/progrming language's`;

let get_start = document.querySelector(".get_start"),
	log_sign_box = document.querySelector(".log_sign_box"),
	sign_in = document.querySelector(".sign_in"),
	log_in = document.querySelector(".log_in"),
	log_b = document.querySelector(".log-b"),
	log_c = document.querySelector(".log-c"),
	chang_the_html = document.querySelector(".chang_the_html"),
	banner = document.querySelector(".banner"),
	submit_massage = document.querySelector(".submit_massage"),
	contact_massage = document.querySelector(".contact_massage"),
	contact_name = document.querySelector(".contact_name"),
	video_btn = document.querySelector(".video-btn"),
	banner_get_start = document.querySelector(".banner_get_start"),
	menu_btn = document.querySelector(".menu_btn"),
	menu_work = document.querySelector(".menu_work"),
	button_H = document.querySelector(".button_H"),
	button_C = document.querySelector(".button_C"),
	button_J = document.querySelector(".button_J"),
	button_O = document.querySelector(".button_O");




//	ger start button Work on this Coding.....
get_start.addEventListener('click', () => {
	log_sign_box.classList.toggle("log_in_active");
	banner.classList.toggle("banner_remove");
	menu_btn.classList.toggle("remov_menu_btn");

	if (get_start.textContent === 'Close') {
		get_start.textContent = "GET STARTED";
	} else {
		get_start.textContent = "Close";
	}

});
//	log in and sign up work in this Code...
sign_in.addEventListener('click', () => {
	log_b.classList.remove("log_remove");
	log_c.classList.remove("sing_active");

	chang_the_html.innerHTML = `<input type="text" placeholder="Full Name">
						<input type="number" placeholder="Phone Number">
						<input type="email" placeholder="Email Address">
						<input type="password" placeholder="Set Password">
						<input type="password" placeholder="Confirm Password">
						<span class="chack-boxs">
							<input class="inp-chak" type="checkbox"><p>I have reccepted the <span style="color: orangered;">terms and condition</span></p>
							<input class="inp-chak" type="checkbox"><p>I want to subscribe to the newssletter</p>
						</span>
						<div class="submit-button">
							<button>SignUp Now</button>
						</div> `;
});
//	log in and sign up work in this Code...
log_in.addEventListener('click', () => {
	log_c.classList.add("sing_active");
	log_b.classList.add("log_remove");

	chang_the_html.innerHTML = ` 
			<input type="email" placeholder="Email Address">
			<input type="password" placeholder="Enter Your E-mail Password">
			<input type="password" placeholder="Confirm Password">
				
			<div class="submit-button">
				<button>LogIn Now</button>
			</div> <a class="pas-forget" href="#">Forgot Password?</a> `;
});

//	Massages OutPut on the console..........
submit_massage.addEventListener('click', () => {
	let massageValue = contact_massage.value;
	let nameValue = contact_name.value;
	let desplayText = "Name : " + nameValue + "\n" + "\n" + "Massages : " + massageValue;

	if (massageValue === '') {
		alert('please write 📝 some massage and than click Enter');

		submit_massage.textContent = "Not Send Your Massages !😔! ";
		submit_massage.style.color = 'red';
		submit_massage.style.background = "#B8D7FF";
	} else if (nameValue === '') {
		alert("Please write your name than click Enter");


		submit_massage.textContent = "Not Send Your Massages !😔!";
		submit_massage.style.color = 'red';
		submit_massage.style.background = "#B8D7FF";
	} else {
		console.log(desplayText);

		submit_massage.textContent = "Successfully Send Your Massages 🥰 ";
		submit_massage.style.color = 'green';
		submit_massage.style.background = "#B8D7FF";
	}
});


video_btn.addEventListener('click', () => {
	console.log(video_btn)
})
video_btn.innerHTML = `<a style="text-decoration: none;color: #fff;" href="${google_link}">Watch Video</a>`;
banner_get_start.innerHTML = `<a style="text-decoration: none;color: #fff;" href="${google_link}">Get Started</a>`;


menu_btn.addEventListener('click', () => {
	menu_work.classList.toggle("ul_active");
	banner.classList.toggle("banner_remove");
	get_start.classList.toggle("remov_get_start");

	if (menu_btn.textContent === 'MENU') {
		menu_btn.textContent = "CLOSE";
		menu_btn.style.color = 'red';
	} else {
		menu_btn.textContent = "MENU";
		menu_btn.style.color = '#fff';
	}
});






button_H.innerHTML = `<a style="text-decoration: none;color: #fff;" href="${html_link}">LEARN HTML</a>`;
button_C.innerHTML = `<a style="text-decoration: none;color: #fff;" href="${css_link}">LEARN CSS</a>`;
button_J.innerHTML = `<a style="text-decoration: none;color: #fff;" href="${js_link}">LEARN JAVASCRIPT</a>`;
button_O.innerHTML = `<a style="text-decoration: none;color: #fff;" href="${other_link}">OTHER'S LANGUAGE</a>`;
