// About Me content is the one by default shown
$('#educationContent').hide();
$('#publicationsContent').hide();
$('#experienceContent').hide();
$('#conferencesContent').hide();
$('#projectsContent').hide();
	$('#experiencesContent').hide();
$('#tutorialsContent').hide();
$('#academicContent').hide();
$('#speakersContent').hide();
$('#persContent').hide();
$('#particularContent').hide();
/* Template
$('#nameContent').hide();
*/
$('#theme').hide();
$('#lan').hide();

// Hides all the divs in the particular, unless the first one
$('.particular-clickable').next().hide();
$('.particular-clickable').next()[0].style.display="block";

$(document).ready(function(){

	$.getJSON("https://api.countapi.xyz/hit/nicolasmeseguer.github.io/634c2142-b35d-430e-b51c-dad16880dd3a", function(response) {
		$("#contadorVisitas").text(response.value);
	});

	// First time, check the theme
	if(localStorage.getItem("theme") === null){
		localStorage.theme = "light";
		if (window.matchMedia('(prefers-color-scheme: dark)').matches)
			localStorage.theme = "dark";
	}
	
	// First time, check the locale
	let userLang = navigator.language || navigator.userLanguage;
	if(localStorage.getItem("lan") === null){
		localStorage.lan = "en";
		if (userLang.split('-')[0] == "es")
			localStorage.lan = "es";
	}

	// Maybe first time or not, so load the localStorage value
	$('<link>').appendTo('head').attr({
		type: 'text/css', 
		rel: 'stylesheet',
		href: 'assets/css/light.css'
	});
	// if (localStorage.theme == "dark") {
	// 	// Handle menu
	// 	$("link[href='assets/css/light.css']").remove();
	// 	$('<link>').appendTo('head').attr({
	// 		type: 'text/css', 
	// 		rel: 'stylesheet',
	// 		href: 'assets/css/dark.css'
	// 	});
	// 	$('#theme').empty().append("<i class='fa-duotone fa-lightbulb-slash'></i>");
	// }
	// Done because light is the one by default
	if(localStorage.lan == "es") {
		$('#lan img').attr("src","/assets/img/es_flag.webp");
		$('#lan').addClass("es");
	}
	updateLanguage();

	// Handle 'About Me' content
	$('#aboutme').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#aboutmeContent');
		}

	});

	// Handle 'Education' content
	$('#education').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#educationContent');
		}
	});

	// Handle 'Publications' content
	$('#publications').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#publicationsContent');
		}
	});

	// Handle 'Blog' content
	$('#tutorials').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#tutorialsContent');
		}
	});

	// Handle 'Academic' content
	$('#pers').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#persContent');
		}
	});

	// Handle 'Academic' content
	$('#speakers').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#speakersContent');
		}
	});

	// Handle 'Academic' content
	$('#academic').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#academicContent');
		}
	});

	// Handle 'Particular' content
	$('#particular').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#particularContent');
		}
	});

	// Handle 'Conferences' content
	// $('#conferences').click(function(e) {

	// 	// If the div has already the class active, no need to reload the divs...
	// 	if(!$(e.target).hasClass('active')) {
	// 		// Update navbar
	// 		clearActiveLinks();
	// 		activateLink(e);

	// 		// Hide other contents
	// 		clearActiveDivs();

	// 		// Show current content
	// 		activateDiv('#conferencesContent');
	// 	}
	// });

	// Handle 'Experience' content
	// $('#experience').click(function(e) {

	// 	// If the div has already the class active, no need to reload the divs...
	// 	if(!$(e.target).hasClass('active')) {
	// 		// Update navbar
	// 		clearActiveLinks();
	// 		activateLink(e);

	// 		// Hide other contents
	// 		clearActiveDivs();

	// 		// Show current content
	// 		activateDiv('#experienceContent');
	// 	}
	// });

	// Handle 'Projects' content
	$('#projects').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#projectsContent');
		}
	});

	// Handle 'Experiences' content
	$('#experiences').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#experiencesContent');
		}
	});

	/*
	// Handle 'Template' content
	$('#name').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#nameContent');
		}
	});
	*/

	// Whenever you clic on a blog post, you should be redirected to that post' html
	$('.clickable').click(function(e) {
		window.open($(e.currentTarget)[0].childNodes[1].innerText, '_blank').focus();
	});

	// Whenever you clic on a clases particulares heading, you should toggle
	$('.particular-clickable').click(function(e) {
		var e = $(e.currentTarget)[0].nextElementSibling;
		if (e.style.display === "none") {
			e.style.display = "block";
		}
		else {
			e.style.display = "none";
		}
	});

	// Copy the citation to the clipboard
	// THIS SHOULD BE THE SAME FOR ALL THE PAPERS
	$(document).on("click", "#citation", function(){
		var text = $(this).parent().parent().next()[0].innerHTML;

		navigator.clipboard.writeText(text);

		toastr.success('Citation copied');
	});

	// Handle CV Download - Show format selection modal
	$('#downloadCV').click(function(e) {
		e.preventDefault();
		var cvFormatModal = new bootstrap.Modal(document.getElementById('cvFormatModal'));
		cvFormatModal.show();
	});

	// Handle General CV Download
	$('#downloadGeneralCV').click(function(e) {
		e.preventDefault();
		var modal = bootstrap.Modal.getInstance(document.getElementById('cvFormatModal'));
		modal.hide();
		setTimeout(function() { generateCV(); }, 300);
	});

	// Handle Europass CV Download
	$('#downloadEuropassCV').click(function(e) {
		e.preventDefault();
		var modal = bootstrap.Modal.getInstance(document.getElementById('cvFormatModal'));
		modal.hide();
		setTimeout(function() { generateEuropassCV(); }, 300);
	});

	// Controls the URL; if it has '#blog'
	// then trigger the 'Blog' clic
	// if (((window.location).href).substring(((window.location).href).lastIndexOf('#') + 1) == 'tutorials') {
	// 	$('#tutorials').click();
	// 	$('#tutorialsContent').focus();
	// }

	if (((window.location).href).substring(((window.location).href).lastIndexOf('#') + 1) == 'clases-particulares') {
		$('#particular').click();
		$('#particularContent').focus();
	}

	// Controls the options menu
	$('#options-toggler').click(function(e) {
		if(!$(e.currentTarget).hasClass('active')) {
			$(e.currentTarget).addClass('active');
			$('#theme').show("fast");
			$('#lan').show("fast");
		}
		else {
			$(e.currentTarget).removeClass('active');
			$('#theme').hide("fast");
			$('#lan').hide("fast");
		}
	})

	// Animates the theme button + functionality
	$('#theme').click(function(e) {
		if(localStorage.theme != "dark"){

			$('#theme').empty().append("<i class='fa-duotone fa-lightbulb-slash'></i>");

			localStorage.theme = "dark"
			
			$("link[href='assets/css/light.css']").remove();
			$('<link>').appendTo('head').attr({
				type: 'text/css', 
				rel: 'stylesheet',
				href: 'assets/css/dark.css'
			});
		}
		else {

			$('#theme').empty().append("<i class='fa-duotone fa-lightbulb'></i>");

			localStorage.theme = "light"
			
			$("link[href='assets/css/dark.css']").remove();
			$('<link>').appendTo('head').attr({
				type: 'text/css', 
				rel: 'stylesheet',
				href: 'assets/css/light.css'
			});
		}
	})

	// Animates the lan button + functionality
	$('#lan').click(function(e) {
		if(!$(e.currentTarget).hasClass('es')){
			$(e.currentTarget).addClass('es');

			$('#lan img').attr("src","/assets/img/es_flag.webp");

			localStorage.lan = "es"
		}
		else {
			$(e.currentTarget).removeClass('es');

			$('#lan img').attr("src","/assets/img/en_flag.webp");

			localStorage.lan = "en"
		}

		updateLanguage();
	})

});

function updateLanguage() {
	let lang = localStorage.lan;
	$(".language *").each(function(){
		$(this).html( $(this).data(lang) );
	});
}

function clearActiveLinks() {
	$('#navbarList .nav-item .nav-link').each(function() {
		$(this).removeClass('active');
	});
}

function clearActiveDivs() {
	$('.container .content .active').each(function() {
		$(this).removeClass('active');
		$(this).hide();
	});
}

function activateLink(e) {
	$(e.target).addClass('active');
	
	// Hide left panel
	if(e.target.id == "particular")
		$('#leftPanel').hide();
	else
		$('#leftPanel').show();
}

function activateDiv(divId) {
	$(divId).addClass('active');
	$(divId).show();

	// Scrolls to the content
	scrollToContent(divId);
}

function scrollToContent(divId) {
	if ($(window).width() < 751) {
		$('html, body').animate({
			scrollTop: $(divId).offset().top
		}, 1);
	}
}

function resetViews() {
	$.getJSON("https://api.countapi.xyz/set/nicolasmeseguer.github.io/634c2142-b35d-430e-b51c-dad16880dd3a?value=0", function(response) {
		$("#contadorVisitas").text("0");
	});
}

// CV Generation Function
function generateCV() {
	toastr.info('Generating CV... Please wait.');
	
	try {
		const { jsPDF } = window.jspdf;
		const doc = new jsPDF('p', 'mm', 'a4'); // Set A4 page format
		
		// Page settings
		const pageWidth = doc.internal.pageSize.getWidth();
		const pageHeight = doc.internal.pageSize.getHeight();
		const margin = 15;
		const lineHeight = 5;
		let yPosition = margin;
		
		// Helper function to add new page if needed
		function checkPageBreak(requiredSpace = 20) {
			if (yPosition + requiredSpace > pageHeight - margin) {
				doc.addPage();
				yPosition = margin;
			}
		}
		
		// Helper function to add text with word wrapping
		function addWrappedText(text, x, y, maxWidth, fontSize = 10) {
			doc.setFontSize(fontSize);
			const lines = doc.splitTextToSize(text, maxWidth);
			doc.text(lines, x, y);
			return lines.length * lineHeight;
		}
		
		// Helper function to add section title with horizontal line
		function addSectionTitle(title) {
			doc.setFontSize(14);
			doc.setFont('helvetica', 'bold');
			doc.text(title, margin, yPosition);
			yPosition += 3;
			// Add horizontal line
			doc.setLineWidth(0.5);
			doc.line(margin, yPosition, pageWidth - margin, yPosition);
			yPosition += 8;
		}
		
		// Header
		doc.setFontSize(24);
		doc.setFont('helvetica', 'bold');
		doc.text('Arrival Dwi Sentosa', margin, yPosition);
		yPosition += 15;
		
		// Contact Information
		doc.setFontSize(11);
		doc.setFont('helvetica', 'normal');
		doc.text('Lecturer of Informatics at Bandung Institute of Technology', margin, yPosition);

		yPosition += lineHeight;
		doc.text('Email: arrivaldwi@itb.ac.id', margin, yPosition);
		yPosition += lineHeight;
		doc.text('Location: Bandung, Indonesia', margin, yPosition);
		yPosition += lineHeight;
		doc.text('LinkedIn: linkedin.com/in/arrivaldwisentosa', margin, yPosition);
		yPosition += lineHeight;
		doc.text('Personal Page: arrivaldwis.github.io', margin, yPosition);
		yPosition += 10;
		
		// Background Information
		checkPageBreak(40);
		addSectionTitle('Background');
		
		doc.setFontSize(10);
		doc.setFont('helvetica', 'normal');
		const backgroundText = 'Born in Bandung, Indonesia he is a computer scientist with a strong academic foundation and a growing research portfolio in AI. He earned his B.Sc. in Computer Science from Beijing Institute of Technology with top academic honors and a prestigious Extraordinary Award for the Best Academic Record. His undergraduate thesis featured a self-learning personal finance assistant that integrated mobile development with on-device machine learning. Pursuing deeper specialization, Arrival completed his M.Sc. in Intelligent Systems at Bandung Institute of Technology (ITB) under a full government scholarship (Beasiswa Unggulan). His master\'s work focused on computer vision, combining deep-learning models with expert knowledge to forecast disease outbreaks in shrimp farming earning national recognition for applied AI innovation. Currently a lecturer at ITB, he teaches artificial intelligence, machine learning, statistics, and discrete mathematics, while also mentoring student research and leading discussions on Explainable AI and LLMs.';
		yPosition += addWrappedText(backgroundText, margin, yPosition, pageWidth - 2 * margin);
		yPosition += 8;
		
		// Research Interests
		checkPageBreak(30);
		addSectionTitle('Research Interests');
		
		doc.setFontSize(10);
		doc.setFont('helvetica', 'normal');
		const researchText = 'Interested in building reliable, transparent AI systems for real-time decision-making in safety-critical environments. His research focuses on: [1] Spatio-Temporal Computer Vision: Developing models that can detect and predict events (e.g., accidents or threats) from video streams in real-time. [2] Explainable and Trustworthy AI: Embedding interpretable mechanisms (like counterfactual or concept-based explanations) into deep models to improve auditability. [3] Edge–Cloud AI Optimization: Designing efficient model-splitting strategies for running AI across resource-constrained edge devices and the cloud. His long-term goal is to advance practical and ethical AI for public safety and infrastructure, combining technical performance with transparency and human-centered design.';
		yPosition += addWrappedText(researchText, margin, yPosition, pageWidth - 2 * margin);
		yPosition += 8;
		
		// Education
		checkPageBreak(40);
		addSectionTitle('Education');
		
		// Master's Degree
		doc.setFontSize(12);
		doc.setFont('helvetica', 'bold');
		doc.text('M.Sc. in Intelligent Systems', margin, yPosition);
		yPosition += lineHeight;
		doc.setFontSize(10);
		doc.setFont('helvetica', 'normal');
		doc.text('Bandung Institute of Technology, 2019-2022', margin, yPosition);
		yPosition += lineHeight;
		const masterDesc = 'Developed diverse machine learning models for Computer Vision, optimizing algorithms and loss functions for neural networks such as FRCNN, TCNN, and MIST. Specialized in object detection methodologies, encompassing YOLO versions 3 to 8.';
		yPosition += addWrappedText(masterDesc, margin, yPosition, pageWidth - 2 * margin);
		doc.setFont('helvetica', 'italic');
		doc.setTextColor(0, 0, 255);
		doc.textWithLink('Thesis: Predicting the Risk of White Spot Syndrome Virus in Shrimp with a Machine Learning and Expert Knowledge\nApproach', margin, yPosition, {url: 'https://digilib.itb.ac.id/gdl/view/63071'});
		doc.setTextColor(0, 0, 0);
		yPosition += lineHeight + 8;
		
		// Bachelor's Degree
		doc.setFontSize(12);
		doc.setFont('helvetica', 'bold');
		doc.text('B.Sc. in Computer Science', margin, yPosition);
		yPosition += lineHeight;
		doc.setFontSize(10);
		doc.setFont('helvetica', 'normal');
		doc.text('Beijing Institute of Technology, 2015-2019', margin, yPosition);
		yPosition += lineHeight;
		const bachelorDesc = 'Comprehensive study in data structures, algorithms, databases, parallel programming, computer architecture, networks, operating systems, and mobile app development.';
		yPosition += addWrappedText(bachelorDesc, margin, yPosition, pageWidth - 2 * margin);
		doc.setFont('helvetica', 'italic');
		doc.setTextColor(0, 0, 255);
		doc.textWithLink('Thesis: Self-Learning Personal Financial Assistant Android Application using MVVM Architectural Pattern', margin, yPosition, {url: 'http://dx.doi.org/10.13140/RG.2.2.11845.81125'});
		doc.setTextColor(0, 0, 0);
		yPosition += lineHeight + 8;
		
		// High School Diploma
		checkPageBreak(25);
		doc.setFontSize(12);
		doc.setFont('helvetica', 'bold');
		doc.text('Software Engineering (Vocational High School)', margin, yPosition);
		yPosition += lineHeight;
		doc.setFontSize(10);
		doc.setFont('helvetica', 'normal');
		doc.text('Vocational High School 4 Bandung, 2012-2015', margin, yPosition);
		yPosition += lineHeight;
		const highSchoolDesc = 'Comprehensive vocational training in software engineering, covering programming fundamentals, database management, web development, networking, and system administration.';
		yPosition += addWrappedText(highSchoolDesc, margin, yPosition, pageWidth - 2 * margin);
		yPosition += 10;
		
		// Work Experience
		checkPageBreak(40);
		addSectionTitle('Work Experience');
		
		const workExperiences = [
			{
				title: 'Lecturer',
				company: 'Bandung Institute of Technology',
				period: 'July 2023 – Now',
				department: 'School of Electrical Engineering and Informatics',
				description: 'Being an Informatics lecturer at ITB, Research group Informatics. Lecturing for Informatics undergraduate students.'
			},
			{
				title: 'Coordinator of AI Development',
				company: 'PT Neuronworks Indonesia',
				period: 'April 2024 – Now',
				department: 'Research and Technology',
				description: 'Being an coordinator of AI Development, focusing on AI/ML research, development, and application.'
			},
			{
				title: 'National Jury Team for WorldSkills Indonesia',
				company: 'WorldSkills Indonesia',
				period: 'January 2023 – Now',
				department: 'Field: IT Software Solution for Business',
				description: 'Being an jury team for WorldSkills competition, focusing on IT solutions for business. Responsible for jury team including preparing competitor by creating a problem statement, developing a solution, and presenting the solution. Following WorldSkills International standard'
			},
			{
				title: 'Tech and AI Lead',
				company: 'Sustainable Living Lab',
				period: 'February 2024 – May 2024',
				department: 'AI Team',
				description: 'Led the research and development of two domain-specific Retrieval-Augmented Generation (RAG) systems focused on sustainability. I architected end-to-end RAG pipelines—integrating vector databases, and LLM orchestration using LangChain and FastAPI. To ensure transparency, I implemented explainability features such as source tracing, and conducted stakeholder workshops to structure domain knowledge efficiently. I also mentored junior engineers, contributing to team growth and knowledge transfer. The resulting helped establish SL2’s AI consulting capability.'
			},
			{
				title: 'Part-Time Lecturer',
				company: 'Universitas Multimedia Nusantara',
				period: 'April 2022 – May 2023',
				department: 'Fakultas Teknik dan Informatika',
				description: 'Being part-time lecturer at Multimedia Nusantara University, Faculty of Informatics and Engineering, Department Informatics. Lecturing 4 subjects including (Expert System, Artificial Intelligence, Algorithm and Data Structure and Deep Learning) for undergraduate students.'
			},
			{
				title: 'Manager of Data and Information Kampus Merdeka',
				company: 'Kementerian Pendidikan dan Kebudayaan',
				period: 'February 2022 – December 2022',
				department: '',
				description: 'As Product Manager of 4 different program in Ministry Education initiative (Praktisi Mengajar, Kampus Mengajar, Cerita Kampus Merdeka, IISMA). Managing relationships with stakeholders (program team) and the developer team to fulfilled the needs of system each program, starting from initial project, brainstorming, developing PRD, product prioritization, assign backlog items for developers and monitoring daily basis to ensure development still on track. Lastly, do analytics and exploring data metrics that generates from the platform using some analytics tools like Amplitude, Google Analytics and Umami to get an insight of next development/improvements.'
			},
			{
				title: 'Co-Founder and CTO',
				company: 'PT Transformasi Digital Laut',
				period: 'July 2017 – August 2022',
				department: '',
				description: 'Building the tech infrastructure from the scratch for an aquaculture startup focusing on Shrimp Farming called "Sgara", bridging the stakeholders needs to tech, designing the infrastructure, research and defining best technology, managing the tech team consists of 5 members, direct responsible to CEO. With very efficient team proudly we\'ve been built more than 5 platform (SgaraBook, SgaraHub, SgaraHatchery, SgaraSupply, SgaraERP, etc.)'
			},
			{
				title: 'Senior Mobile Developer',
				company: 'VE Capital Asia Pte Ltd',
				period: 'June 2020 – September 2020',
				department: '',
				description: 'As a mobile developer, build some of projects for android and ios with such of newest frameworks/technology like Flutter, React and Go and deliver it as soon as possible to the clients. Working with small team (3 member, including product manager) we\'ve been successfully built 3 apps for client in 3 months.'
			},
			{
				title: 'Co-Founder and Global Lead Technology',
				company: 'Indonesia Diaspora Connect',
				period: 'September 2017 – January 2020',
				department: '',
				description: 'As a Co-Founder and CTO at the beginning, I\'ve responsibility to building all tech from scratch. Indonesia Diaspora Connect (IDC) is a social apps for Indonesian abroad to communicate and sharing, we\'ve been built the platform for Web, Android and iOS in 4-month development with 3 members of tech teams. Also, we got some achievement for this innovation, one of the best as the 1st Winner Alcatel Lucent Hackathon 2018.'
			},
			{
				title: 'Deputy Director of Media and Technology',
				company: 'Perhimpunan Pelajar Indonesia Tiongkok',
				period: 'June 2018 – June 2019',
				department: '',
				description: 'Indonesian student community in China (PPIT) is a non-profit organization that gathers all Indonesian student that studying in China, we build the social channel and platform to giving any information needed by Indonesian students especially from the embassy. We successfully built "One data portal" for Indonesian students in China to help them find and share all information needed, the platform built with 2 members including me as Developer in 1 months.'
			},
			{
				title: 'Android Developer',
				company: 'MEKAR.ID',
				period: 'September 2017 – January 2018',
				department: '',
				description: 'Building the Peer-to-Peer Lending Apps called "MEKAR" an initiative program from Sampoerna. I was responsible to build the android apps that implementing such tools like Firebase, Firestore, MVVM, Dagger and Retrofit.'
			},
			{
				title: 'Android Developer',
				company: 'PT. Iman Teknologi Informasi',
				period: 'May 2015 – July 2015',
				department: '',
				description: 'Building android apps of secure end-to-end encryption chat apps called "PesanKita" now changed to "Palapa". Based on telegram and moved to Signal infrastructure with some addition such as user experience improvements.'
			},
			{
				title: 'Android & iOS Developer',
				company: 'PT. GITS Indonesia',
				period: 'July – September 2014',
				department: '',
				description: 'Building an iOS and Android apps with native technology, using Java for Android and Objective-C for iOS back then. Initiate to exploring Swift and Kotlin in beta, I\'ve been handling some projects for example registration part of Tiket.com.'
			},
			{
				title: 'Web Developer – Back End Laravel Framework',
				company: 'Yoqiza Interactive',
				period: 'October – November 2013',
				department: '',
				description: 'Building an Back-end for startup e-commerce using Laravel 4, focusing in part of transactions.'
			}
		];
		
		doc.setFontSize(10);
		doc.setFont('helvetica', 'normal');
		
		for (let experience of workExperiences) {
			checkPageBreak(25);
			
			// Job Title
			doc.setFont('helvetica', 'bold');
			doc.text(experience.title, margin, yPosition);
			yPosition += lineHeight;
			
			// Company and Period
			doc.setFont('helvetica', 'normal');
			doc.text(`${experience.company} | ${experience.period}`, margin, yPosition);
			yPosition += lineHeight;
			
			// Department (if exists)
			if (experience.department) {
				doc.setFont('helvetica', 'italic');
				doc.text(experience.department, margin, yPosition);
				yPosition += lineHeight;
			}
			
			// Description
			doc.setFont('helvetica', 'normal');
			yPosition += addWrappedText(experience.description, margin, yPosition, pageWidth - 2 * margin);
			yPosition += 8;
		}
		
		yPosition += 5;

		// Publications
		checkPageBreak(40);
		addSectionTitle('Publications');
		
		// 2026 Publications (In Review)
		checkPageBreak(50);
		doc.setFontSize(10);
		doc.setFont('helvetica', 'bold');
		doc.text('2026', margin, yPosition);
		yPosition += lineHeight;
		doc.setFont('helvetica', 'normal');

		// FuseRAG Publication
		const pub2026b = 'A. D. Sentosa, "FuseRAG: Parallel Multi-Source Knowledge Fusion for Hybrid Graph-Augmented Retrieval-Augmented Generation," May 2026.';
		const pub2026bLines = addWrappedText(pub2026b, margin, yPosition, pageWidth - 2 * margin);
		yPosition += pub2026bLines;
		doc.setTextColor(0, 0, 255);
		doc.textWithLink('[Abstract]', margin, yPosition, {url: 'https://arrivaldwis.github.io/assets/documents/FuseRAG__Parallel_Multi_Source_Knowledge_Fusion_for_Hybrid_Graph_Augmented_Retrieval_Augmented_Generation.pdf'});
		doc.setTextColor(150, 150, 150);
		doc.text('[In review]', margin + 28, yPosition);
		doc.setTextColor(0, 0, 0);
		yPosition += lineHeight + 4;

		// PRISM Publication
		const pub2026a = 'A. D. Sentosa, A. D. Kusumah, J. Widianto, and H. H. Putri, "PRISM: Personalized Retrieval via Implicit Subspace Mapping for Attribute-Aware Retrieval-Augmented Generation," January 2026.';
		const pub2026aLines = addWrappedText(pub2026a, margin, yPosition, pageWidth - 2 * margin);
		yPosition += pub2026aLines;
		doc.setTextColor(0, 0, 255);
		doc.textWithLink('[Abstract]', margin, yPosition, {url: 'https://arrivaldwis.github.io/assets/documents/PRISM__Personalized_Retrieval_via_Implicit_Subspace_Mapping_for_Attribute_Aware_Retrieval_Augmented_Generation.pdf'});
		doc.setTextColor(150, 150, 150);
		doc.text('[In review]', margin + 28, yPosition);
		doc.setTextColor(0, 0, 0);
		yPosition += lineHeight + 4;

		// 2025 Publications
		checkPageBreak(50);
		doc.setFontSize(10);
		doc.setFont('helvetica', 'bold');
		doc.text('2025', margin, yPosition);
		yPosition += lineHeight;
		doc.setFont('helvetica', 'normal');

		// LLM Publication
		const pub2025c = 'A. D. Sentosa, J. Widianto, "MACS: A Cognitive Diversity Multi-Agent Consensus Framework for Bias Mitigation in Automated Evaluation Systems," Accepted at International Conference on Electrical Engineering and Informatiocs (https://ftsm.ukm.my/iceei2025/) at November 2025. ';
		const pub2025cLines = addWrappedText(pub2025c, margin, yPosition, pageWidth - 2 * margin - 25);
		yPosition += pub2025cLines;
		doc.setTextColor(0, 0, 255);
		doc.textWithLink('[PDF]', pageWidth - margin - 25, yPosition - 4, {url: 'https://ieeexplore.ieee.org/document/11331239'});
		doc.setTextColor(0, 0, 0);
		yPosition += 8;
		
		// IndoEduBERT Publication
		const pub2025a = 'A. D. Sentosa, A. S. Prihatmanto, N. Lestari, D. Tresnawati, and A. Zakiah, "IndoEduBERT: Tailored Multi-Lingual and Multi-Grained Sentence Embeddings for the Indonesian Education Domain," Accepted at International Conference on Electrical Engineering and Informatiocs (https://ftsm.ukm.my/iceei2025/) at November 2025. ';
		const pub2025aLines = addWrappedText(pub2025a, margin, yPosition, pageWidth - 2 * margin - 30);
		yPosition += pub2025aLines;
		doc.setTextColor(0, 0, 255);
		doc.textWithLink('[PDF]', pageWidth - margin - 25, yPosition - 4, {url: 'https://ieeexplore.ieee.org/document/11330949'});
		doc.setTextColor(0, 0, 0);
		yPosition += 8;
		
		// Dental Caries Publication
		const pub2025b = 'Z. Iklima, T. M. Kadarina, K. S. Salamah, and A. D. Sentosa, "Real-time dental caries segmentation with an efficient Deformable U-Net (DU-Net) for teledentistry system," February 2025. ';
		const pub2025bLines = addWrappedText(pub2025b, margin, yPosition, pageWidth - 2 * margin - 35);
		yPosition += pub2025bLines;
		doc.setTextColor(0, 0, 255);
		doc.textWithLink('[Abstract]', pageWidth - margin - 30, yPosition - 4, {url: 'https://publikasi.mercubuana.ac.id/index.php/sinergi/article/view/30234'});
		doc.setTextColor(0, 0, 0);
		yPosition += 8;
		
		// 2022 Publication
		checkPageBreak(30);
		doc.setFont('helvetica', 'bold');
		doc.text('2022', margin, yPosition);
		yPosition += lineHeight;
		doc.setFont('helvetica', 'normal');
		const pub2022 = 'A. D. Sentosa and N. P. Utama, "Predicting the Risk of White Spot Syndrome Virus in Shrimp with a Machine Learning and Expert Knowledge Approach," Master\'s thesis, Bandung Institute of Technology, April 2022. ';
		const pub2022Lines = addWrappedText(pub2022, margin, yPosition, pageWidth - 2 * margin - 50);
		yPosition += pub2022Lines;
		doc.setTextColor(0, 0, 255);
		doc.textWithLink('[Abstract]', pageWidth - margin - 45, yPosition - 4, {url: 'https://digilib.itb.ac.id/gdl/download/242053'});
		doc.setTextColor(0, 0, 0);
		yPosition += 5;
		
		// 2019 Publication
		checkPageBreak(30);
		doc.setFont('helvetica', 'bold');
		doc.text('2019', margin, yPosition);
		yPosition += lineHeight;
		doc.setFont('helvetica', 'normal');
		const pub2019 = 'A. D. Sentosa, M. Sadikin, and Z. Hong, "Self-Learning Personal Financial Assistant Android Application using MVVM Architectural Pattern," Indonesian Journal of Electrical Engineering and Informatics (IJEEI), vol. 31, pp. 17-25, September 2019. ';
		const pub2019Lines = addWrappedText(pub2019, margin, yPosition, pageWidth - 2 * margin - 25);
		yPosition += pub2019Lines;
		doc.setTextColor(0, 0, 255);
		doc.textWithLink('[PDF]', pageWidth - margin - 20, yPosition - 4, {url: 'http://dx.doi.org/10.13140/RG.2.2.11845.81125'});
		doc.setTextColor(0, 0, 0);
		yPosition += 10;
		
		// Teaching Experience
		checkPageBreak(50);
		addSectionTitle('Teaching Experience');
		
		// 2025 Teaching
		doc.setFontSize(10);
		doc.setFont('helvetica', 'bold');
		doc.text('2025 - 1st Semester - Bandung Institute of Technology', margin, yPosition);
		yPosition += lineHeight;
		doc.setFont('helvetica', 'normal');
		doc.text('• IF1220 Discrete Mathematics', margin + 5, yPosition);
		yPosition += lineHeight;
		doc.text('• IF2120 Statistics and Probability', margin + 5, yPosition);
		yPosition += lineHeight;
		doc.text('• IF3141 Information System', margin + 5, yPosition);
		yPosition += 8;
		
		// 2024 Teaching
		doc.setFont('helvetica', 'bold');
		doc.text('2024 - 2nd Semester - Bandung Institute of Technology', margin, yPosition);
		yPosition += lineHeight;
		doc.setFont('helvetica', 'normal');
		doc.text('• IF1220 Discrete Mathematics', margin + 5, yPosition);
		yPosition += lineHeight;
		doc.text('• IF2123 Linear Algebra & Geometry', margin + 5, yPosition);
		yPosition += lineHeight;
		yPosition += addWrappedText('• IF3070 Fundamental of Artificial Intelligence', margin + 5, yPosition, pageWidth - 2 * margin - 10);
		yPosition += 2;
		doc.text('• WI1102 Computational Thinking', margin + 5, yPosition);
		yPosition += lineHeight;
		doc.text('• WI1116 Computer Interaction Lab', margin + 5, yPosition);
		yPosition += 8;
		
		checkPageBreak(50);
		doc.setFont('helvetica', 'bold');
		doc.text('2024 - 1st Semester - Bandung Institute of Technology', margin, yPosition);
		yPosition += lineHeight;
		doc.setFont('helvetica', 'normal');
		doc.text('• IF2220 Statistics and Probability', margin + 5, yPosition);
		yPosition += lineHeight;
		doc.text('• II1101 Computing and Society', margin + 5, yPosition);
		yPosition += lineHeight;
		yPosition += addWrappedText('• II2220 Resource Management for Information Technology System', margin + 5, yPosition, pageWidth - 2 * margin - 10);
		yPosition += 2;
		doc.text('• IF3270 Machine Learning', margin + 5, yPosition);
		yPosition += lineHeight;
		doc.text('• IF1210 Fundamental Programming', margin + 5, yPosition);
		yPosition += 8;
		
		// 2023 Teaching
		doc.setFont('helvetica', 'bold');
		doc.text('2023 - Bandung Institute of Technology', margin, yPosition);
		yPosition += lineHeight;
		doc.setFont('helvetica', 'normal');
		doc.text('• IF2123 Linear Algebra and Geometry', margin + 5, yPosition);
		yPosition += lineHeight;
		doc.text('• IF3141 Information Systems', margin + 5, yPosition);
		yPosition += lineHeight;
		doc.text('• IF3170 Artificial Intelligence', margin + 5, yPosition);
		yPosition += lineHeight;
		doc.text('• KU1102 Introduction to Computing', margin + 5, yPosition);
		yPosition += 8;
		
		// 2022 Teaching
		checkPageBreak(80);
		doc.setFont('helvetica', 'bold');
		doc.text('2022 - Multimedia Nusantara University', margin, yPosition);
		yPosition += lineHeight;
		doc.setFont('helvetica', 'normal');
		doc.text('• IF440 Artificial Intelligence', margin + 5, yPosition);
		yPosition += lineHeight;
		doc.text('• IF232 Algorithm and Data Structures', margin + 5, yPosition);
		yPosition += lineHeight;
		yPosition += addWrappedText('• IF541 Introduction to Expert Systems', margin + 5, yPosition, pageWidth - 2 * margin - 10);
		yPosition += 10;
		
		// Honors and Awards
		checkPageBreak(60);
		addSectionTitle('Honors and Awards');
		
		doc.setFontSize(10);
		doc.setFont('helvetica', 'normal');
		
		// Awards grouped by year (descending)
		const awardsByYear = {
			'2011': ['West Java ICT Awards - with an application of antivirus (Sep)'],
			'2012': [
				'Indonesia ICT Awards - with an application of antivirus (Sep)',
				'Asia Pacific Alliance ICT Awards - with an application of antivirus (Dec)',
				'Indosat Inspiring Youth and Women - with an application of antivirus (Dec)'
			],
			'2013': [
				'Indonesia ICT Awards - with an application of antivirus (Sep)',
				'Asia Pacific Alliance ICT Awards - with an application of antivirus (Nov)'
			],
			'2014': [
				'West Java Skills Competition - field IT Software applications (May)',
				'Indonesian Skills Competition - field IT Software applications (Aug)',
				'Anugerah Prakarsa Jawa Barat - field Education technology (Aug)',
				'Anugerah Motekar Unpad - with an application of parental control (Dec)'
			],
			'2015': [
				'WiFi Programming Contest - with java programming language (Jan)',
				'West Java Business Plan Competition - with an idea of software business (Feb)',
				'Regional Web Design Competition - field Sustainability technology for future (Mar)',
				'Indosat Ooredoo IWIC 9 - with an application of smart personal financial assistant (Oct)',
				'National Selection, ASEAN Skills Competition - field IT Software Solution for Business (Nov)'
			],
			'2016': [
				'Liga Digital Indonesia - with an application of smart personal financial assistant (Jan)',
				'XL Axiata Smartcity IoT Challenge - with an application of smart home called SavvyHome (Jun)',
				'ASEAN Skills Competition Kuala Lumpur - field IT Software Solution for Business (Oct)',
				'Indosat Ooredoo IWIC 10 - with an application of parental control (Nov)',
				'IBM Bluemix Challenge - category Mom with technology (Dec)'
			],
			'2017': [
				'WorldSkills Competition Abu Dhabi - field IT Software Solution for Business (Oct)',
				'Samsung Indonesia Next Apps 4.0 - category Samsung SDK Challenge (Oct)'
			],
			'2018': [
				'Alcatel Lucent Enterprise Hackathon - with an application of Indonesian Diaspora (Sep)'
			],
			'2019': [
				'Beasiswa Unggulan Awardee - for the master\'s degree (Aug)',
				'Extraordinary Award - for the Best Computer Science Academic Record (Nov)'
			],
			'2021': [
				'Battle of Minds - with an application of AI for shrimp disease detection (Sep)'
			],
			'2023': [
				'Tangsel ICT Awards - with an application of AI for shrimp disease detection (Nov)'
			],
			'2024': [
				'The Rising Star Contributors - as AI/ML Instructor at Bangkit Academy by Google, GoTo, Traveloka (Aug)'
			]
		};
		
		// Table headers
		doc.setFont('helvetica', 'bold');
		doc.setFontSize(10);
		doc.text('Year', margin, yPosition);
		doc.text('Award', margin + 30, yPosition);
		doc.text('Description', margin + 100, yPosition);
		yPosition += lineHeight;
		
		// Draw header line
		doc.line(margin, yPosition - 2, pageWidth - margin, yPosition - 2);
		yPosition += 3;
		
		doc.setFont('helvetica', 'normal');
		doc.setFontSize(9);
		
		for (const year of Object.keys(awardsByYear).sort().reverse()) {
			for (let i = 0; i < awardsByYear[year].length; i++) {
				checkPageBreak(12);
				const award = awardsByYear[year][i];
				const parts = award.split(' - ');
				const awardName = parts[0];
				const description = parts.length > 1 ? parts[1] : '';
				
				// Year column (only show for first award of each year)
				if (i === 0) {
					doc.setFont('helvetica', 'bold');
					doc.text(year, margin, yPosition);
					doc.setFont('helvetica', 'normal');
				}
				
				// Award name column
				const awardLines = doc.splitTextToSize(awardName, 65);
				doc.text(awardLines, margin + 30, yPosition);
				
				// Description column
				if (description) {
					const descLines = doc.splitTextToSize(description, 90);
					doc.text(descLines, margin + 100, yPosition);
				}
				
				yPosition += Math.max(awardLines.length, description ? doc.splitTextToSize(description, 90).length : 1) * 4 + 2;
			}
		}
		yPosition += 5;

		// Projects
		checkPageBreak(60);
		addSectionTitle('Projects');
		
		doc.setFontSize(10);
		doc.setFont('helvetica', 'normal');
		
		const projects = [
			{
				name: 'AI School Recommendation System',
				description: 'AI model including fine-tuning of embedding model and LLM specific for education domain in Indonesia, for create a recommendation system for school finding.',
				role: 'Research with Prototype',
				technologies: 'Python, OpenCV, Keras, Unsloth, QLoRa, Flask, Deep Learning, Transformers'
			},
			{
				name: 'Shrimp White Spot Syndrome Virus Detection',
				description: 'Computer Vision technology to detect a physical symptom of WSSV on shrimp to prevent the spreading of virus.',
				role: 'Research with Prototype',
				technologies: 'Python, OpenCV, Keras, Tensorflow, Pandas, Flask, Deep Learning, YOLO'
			},
			{
				name: 'Toxic Player Detection (NLP)',
				description: 'A machine learning model to detect whether a Dota 2 player is toxic or not, based on recorded conversations in one game.',
				role: 'Research with Prototype',
				technologies: 'Python, Named Entity Recognition, Keras, Tensorflow, Pandas, Word Embedding'
			},
			{
				name: 'Shrimp (Larvae) Hatcheries Counting',
				description: 'Computer Vision technology to counting a shrimp larva that have accuracy above 90% and capability to detect an overlap larvae.',
				role: 'Research with Prototype',
				technologies: 'Python, OpenCV, Keras, Tensorflow, Pandas, Flask'
			},
			{
				name: 'Indonesian Diaspora Connect',
				description: 'Social media platform that acts as a facilitator between the Government and the best Indonesian talents all around the world.',
				role: 'Global Technology Lead (Mobile Developer)',
				technologies: 'NoSQL, Android, Java, MVVM Pattern, Android Studio, Navicat, PHPStorm, Fabric'
			},
			{
				name: 'Custom C++ and Own Programming Language Compiler',
				description: 'Designing and build a C++ and own programming language with the compiler for research purpose.',
				role: 'Research',
				technologies: 'MARS, Java, C++, YAML, Assembly'
			},
			{
				name: 'IoT of Shrimp Autofeeder with Controller Apps',
				description: 'Designing and build an autofeeder for shrimp that integrated with mobile apps for monitoring and controlling amount of feed give to the pond.',
				role: 'Research',
				technologies: 'C++, Arduino, PostgreSQL, Android, Java, Firebase, Realm'
			},
			{
				name: 'Museek',
				description: 'Discover music around your location and suggest best music for you',
				role: 'Android Developer',
				technologies: 'NoSQL, Android, Java, MVC Pattern, Android Studio, Firebase, Fabric, Realm'
			},
			{
				name: 'UangKu',
				description: 'UangKu is personal finance management apps to help manage user cashflow',
				role: 'Android Developer',
				technologies: 'SQLite, Android, Java, MVC Pattern, Android Studio, Fabric'
			},
			{
				name: 'Mona',
				description: 'The best personal finance manager and expense tracker.',
				role: 'AI and Mobile Developer',
				technologies: 'NoSQL, Realm, Firebase, Android, Kotlin, MVVM Pattern, Android Studio, Intent Classification, Entity Extraction'
			},
			{
				name: 'PPI Tiongkok',
				description: 'PPIT Mobile Apps is an application for Indonesia Student or who will come and study in RRC, this apps include all about information and activities of Indonesian Student and also a community.',
				role: 'Project Manager',
				technologies: 'NoSQL, Flutter, Dart, Android Studio, Android, MVC Pattern'
			},
			{
				name: 'iWatchYou',
				description: 'iWatchYou is a Tools to Monitoring Children Activity when using a Computer',
				role: 'Android and Desktop Developer',
				technologies: 'NoSQL, SQLite, Android, Java, Android Studio, Javascript, Firebase, PHP, AngularJS, Socket.io'
			}
		];
		
		for (let project of projects) {
			checkPageBreak(25);
			
			// Project name
			doc.setFont('helvetica', 'bold');
			doc.text(project.name, margin, yPosition);
			yPosition += lineHeight;
			
			// Role
			doc.setFont('helvetica', 'italic');
			doc.text(`Role: ${project.role}`, margin, yPosition);
			yPosition += lineHeight;
			
			// Description
			doc.setFont('helvetica', 'normal');
			yPosition += addWrappedText(project.description, margin, yPosition, pageWidth - 2 * margin);
			
			// Technologies
			doc.setFont('helvetica', 'normal');
			doc.text(`Technologies: ${project.technologies}`, margin, yPosition);
			yPosition += lineHeight + 5;
		}
		

		// Speaking Engagements
		checkPageBreak(40);
		addSectionTitle('Speaking Engagements');
		
		doc.setFontSize(10);
		doc.setFont('helvetica', 'normal');
		
		// Table headers
		doc.setFont('helvetica', 'bold');
		doc.text('Year', margin, yPosition);
		doc.text('Event Title', margin + 30, yPosition);
		doc.text('Slides URL', margin + 130, yPosition);
		yPosition += 6;
		
		// Draw header line
		doc.line(margin, yPosition - 2, margin + 170, yPosition - 2);
		yPosition += 2;
		
		doc.setFont('helvetica', 'normal');
		
		const talksWithLinks = [
			{
				title: 'Dari Data ke Publikasi: Memaksimalkan AI dalam pembuatan Artikel Ilmiah Inovatif',
				organization: 'ISBI Bandung',
				date: 'Aug 14, 2025',
				url: 'https://www.canva.com/design/DAGv297w7yI/wtVg8RAs1OR1FYix8Zr43A/edit?utm_content=DAGv297w7yI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
			},
			{
				title: 'Hands-on Large Language Model, RAG and Agent with Deep Doc Analysis',
				organization: 'Solusi Intek Indonesia',
				date: 'Nov 23, 2024',
				url: 'https://docs.google.com/presentation/d/1hTZ4uiFffepAD0opjZ-N_OMwBs1m51gYd0bApaFiPmQ/edit?usp=sharing'
			},
			{
				title: 'Peran Intelegensi Buatan untuk mendukung kegiatan ekonomi kreatif',
				organization: 'Patrakomala Coffee Club',
				date: 'Jul 31, 2024',
				url: 'https://docs.google.com/presentation/d/1gLn1aBW9TvP12SDzMhUZwSPaeZrV-b0pzJjj8j5zzkk/edit?usp=sharing'
			},
			{
				title: 'ITCAMP 2024: What\'s behind the LLM: Introduction and Hands-on',
				organization: 'Onno Center International',
				date: 'Jun 30, 2024',
				url: 'https://docs.google.com/presentation/d/1QKFLXyjnW4KUX0Jds_Da44QAf5bXktenQbD6_lzI6qc/edit?usp=sharing'
			},
			{
				title: 'XAI for Deep Learning: Understanding how AI works and working with AI',
				organization: 'SMK.DEV',
				date: 'Jan 5, 2024',
				url: 'https://docs.google.com/presentation/d/1MSPxcn85g2Q-4Jh16TtSCT7p55-JOkQCNHyhiADDEO8/edit?usp=sharing'
			},
			{
				title: 'Internet of Things Now and Future: Sensors and Connectivity',
				organization: 'Universitas Mercu Buana',
				date: 'Dec 14, 2021',
				url: 'https://docs.google.com/presentation/d/192OkVxYdy2FfpqVm-o2SclCWG-9lkgEW2gVLs9YW7Tc/edit?usp=sharing'
			},
			{
				title: 'Artificial Intelligence: In Pandemic',
				organization: 'Universitas Mercu Buana',
				date: 'Nov 28, 2020',
				url: 'https://docs.google.com/presentation/d/1hTGGIgd0O2AtEi4wBJTe9hC7kGXXNd6G0B3I0vswV14/edit?usp=sharing'
			},
			{
				title: 'KKSI AI: Membangun Model Machine Learning',
				organization: 'Kemendikbud RI',
				date: 'Oct 13, 2020',
				url: 'https://docs.google.com/presentation/d/1iG54iK0EW6TM4pt5k7gCX7-WuR8rPIgcxTBZooXWh7o/edit'
			},
			{
				title: 'Smart Agriculture for Plant Pest & Disease Detection and Treatment Solutions Based on AI and IoT',
				organization: 'Fasilkom Universitas Mercu Buana',
				date: 'Oct 13, 2020',
				url: 'https://docs.google.com/presentation/d/192OkVxYdy2FfpqVm-o2SclCWG-9lkgEW2gVLs9YW7Tc/edit?usp=sharing/'
			},
			{
				title: 'Brighten Up Your Future with Startup Business',
				organization: 'STMIK AL MUSLIM',
				date: 'Sep 12, 2021',
				url: null
			},
			{
				title: 'Kamp Kreatif SMK Indonesia 2021',
				organization: 'Kemendikbud RI',
				date: 'Jul 2021',
				url: null
			},
			{
				title: 'Evolution of Engineering',
				organization: 'Universitas Langlangbuana',
				date: 'Dec 12, 2019',
				url: null
			},
			{
				title: 'Be Creative Millenials in Digital Era with UX Design and Software Development',
				organization: 'Politeknik Negeri Bengkalis',
				date: 'Sep 21, 2019',
				url: null
			}
		];
		
		for (let talk of talksWithLinks) {
			checkPageBreak(12);
			
			// Extract year from date
			const year = talk.date.includes('2024') ? '2024' : 
						 talk.date.includes('2021') ? '2021' : 
						 talk.date.includes('2020') ? '2020' : 
						 talk.date.includes('2019') ? '2019' : talk.date;
			
			// Year column
			doc.text(year, margin, yPosition);
			
			// Event Title column (with text wrapping)
			const titleLines = doc.splitTextToSize(talk.title, 95);
			doc.text(titleLines, margin + 30, yPosition);
			
			// Slides URL column
			if (talk.url) {
				doc.setTextColor(0, 0, 255);
				doc.textWithLink('[Slides]', margin + 130, yPosition, {url: talk.url});
				doc.setTextColor(0, 0, 0);
			} else {
				doc.text('N/A', margin + 130, yPosition);
			}
			
			yPosition += Math.max(titleLines.length * 4, 6) + 2;
		}
		
		// Footer
		const totalPages = doc.internal.getNumberOfPages();
		for (let i = 1; i <= totalPages; i++) {
			doc.setPage(i);
			doc.setFontSize(8);
			doc.setFont('helvetica', 'normal');
			doc.text(`Arrival Dwi Sentosa - CV | Page ${i} of ${totalPages}`, margin, pageHeight - 10);
			doc.text(`Generated on ${new Date().toLocaleDateString()}`, pageWidth - margin - 50, pageHeight - 10);
		}
		
		// Save the PDF
		doc.save('Arrival_Dwi_Sentosa_CV.pdf');
		toastr.success('CV downloaded successfully!');
		
	} catch (error) {
		console.error('Error generating CV:', error);
		toastr.error('Error generating CV. Please try again.');
	}
}

// Europass CV Generation Function
function generateEuropassCV() {
	toastr.info('Generating Europass CV... Please wait.');
	
	// Load the photo first, then generate the CV
	// Use fetch + FileReader to handle webp conversion reliably
	fetch('assets/img/ArrivalDwiSentosa.webp')
		.then(function(resp) { return resp.blob(); })
		.then(function(blob) {
			var reader = new FileReader();
			reader.onloadend = function() {
				// reader.result is a data: URL, convert to base64 JPEG via canvas
				var tmpImg = new Image();
				tmpImg.onload = function() {
					try {
						var canvas = document.createElement('canvas');
						var maxW = 400, maxH = 500;
						var w = tmpImg.naturalWidth, h = tmpImg.naturalHeight;
						if (w > maxW) { h = h * maxW / w; w = maxW; }
						if (h > maxH) { w = w * maxH / h; h = maxH; }
						canvas.width = Math.round(w);
						canvas.height = Math.round(h);
						var ctx = canvas.getContext('2d');
						ctx.drawImage(tmpImg, 0, 0, canvas.width, canvas.height);
						var photoData = canvas.toDataURL('image/png');
						buildEuropassPDF(photoData);
					} catch(e2) {
						console.error('Error processing photo:', e2);
						toastr.warning('Photo could not be loaded. Generating CV without photo...');
						buildEuropassPDF(null);
					}
				};
				tmpImg.onerror = function() {
					toastr.warning('Photo could not be loaded. Generating CV without photo...');
					buildEuropassPDF(null);
				};
				tmpImg.src = reader.result;
			};
			reader.readAsDataURL(blob);
		})
		.catch(function() {
			// Fallback: try direct Image loading
			var img = new Image();
			img.crossOrigin = 'anonymous';
			img.onload = function() {
				try {
					var canvas = document.createElement('canvas');
					canvas.width = img.naturalWidth;
					canvas.height = img.naturalHeight;
					var ctx = canvas.getContext('2d');
					ctx.drawImage(img, 0, 0);
					var photoData = canvas.toDataURL('image/png');
					buildEuropassPDF(photoData);
				} catch(e3) {
					buildEuropassPDF(null);
				}
			};
			img.onerror = function() { buildEuropassPDF(null); };
			img.src = 'assets/img/ArrivalDwiSentosa.webp';
		});
}

function buildEuropassPDF(photoData) {
	try {
		var { jsPDF } = window.jspdf;
		var doc = new jsPDF('p', 'mm', 'a4');
		
		// Page constants
		var PW = doc.internal.pageSize.getWidth();   // 210
		var PH = doc.internal.pageSize.getHeight();  // 297
		var ML = 18;  // left margin
		var MR = 18;  // right margin
		var CW = PW - ML - MR; // content width = 174
		var BOTTOM = PH - 18;  // bottom safe zone
		
		// Photo dimensions (passport-style, fits within header)
		var PHOTO_W = 36;
		var PHOTO_H = 36;
		
		// Europass brand colors
		var BLUE = [0, 74, 127];
		var DARK_BLUE = [0, 50, 85];
		var LIGHT_BLUE = [230, 242, 252];
		var GRAY = [90, 90, 90];
		var LIGHT_GRAY = [160, 160, 160];
		
		// Text size constants
		var FS_NAME = 20;
		var FS_SECTION = 10;
		var FS_SUBTITLE = 9;
		var FS_BODY = 9;
		var FS_SMALL = 8;
		var FS_TINY = 7;
		
		// Line height helper
		var LH = 4.2; // standard line height for body text
		
		var y = ML; // current y position
		
		// ---- HELPERS ----
		function remainingSpace() { return BOTTOM - y; }
		
		function needSpace(h) {
			if (y + h > BOTTOM) {
				doc.addPage();
				y = ML;
				return true;
			}
			return false;
		}
		
		function wrapText(text, x, maxWidth, fontSize, fontStyle) {
			doc.setFontSize(fontSize || FS_BODY);
			doc.setFont('helvetica', fontStyle || 'normal');
			var lines = doc.splitTextToSize(text, maxWidth);
			for (var i = 0; i < lines.length; i++) {
				needSpace(LH);
				doc.text(lines[i], x, y);
				y += LH;
			}
			return lines.length;
		}
		
		function wrapTextReturnLines(text, x, maxWidth, fontSize, fontStyle) {
			doc.setFontSize(fontSize || FS_BODY);
			doc.setFont('helvetica', fontStyle || 'normal');
			return doc.splitTextToSize(text, maxWidth);
		}
		
		function sectionHeader(title) {
			needSpace(14);
			y += 3;
			// Blue bar
			doc.setFillColor(BLUE[0], BLUE[1], BLUE[2]);
			doc.rect(ML, y - 4, CW, 8, 'F');
			doc.setFontSize(FS_SECTION);
			doc.setFont('helvetica', 'bold');
			doc.setTextColor(255, 255, 255);
			doc.text(title.toUpperCase(), ML + 4, y + 1);
			doc.setTextColor(0, 0, 0);
			y += 10;
		}
		
		function fieldPair(label, value, labelW) {
			labelW = labelW || 32;
			needSpace(5.5);
			doc.setFontSize(FS_SMALL);
			doc.setFont('helvetica', 'bold');
			doc.setTextColor(GRAY[0], GRAY[1], GRAY[2]);
			doc.text(label, ML + 4, y);
			doc.setFont('helvetica', 'normal');
			doc.setTextColor(0, 0, 0);
			// Handle long values with wrapping
			var valLines = doc.splitTextToSize(value, CW - labelW - 10);
			doc.text(valLines, ML + labelW, y);
			y += Math.max(valLines.length, 1) * 4.5 + 0.5;
		}
		
		function bulletItem(text, indent) {
			indent = indent || 6;
			doc.setFontSize(FS_BODY);
			doc.setFont('helvetica', 'normal');
			doc.setTextColor(0, 0, 0);
			var bulletX = ML + indent;
			var textX = ML + indent + 5;
			var maxW = CW - indent - 10;
			var lines = doc.splitTextToSize(text, maxW);
			for (var i = 0; i < lines.length; i++) {
				needSpace(LH);
				if (i === 0) {
					doc.setFontSize(FS_SMALL);
					doc.text('\u2022', bulletX, y);
				}
				doc.text(lines[i], textX, y);
				y += LH;
			}
		}
		
		function subheading(text) {
			needSpace(8);
			doc.setFontSize(FS_SUBTITLE);
			doc.setFont('helvetica', 'bold');
			doc.setTextColor(DARK_BLUE[0], DARK_BLUE[1], DARK_BLUE[2]);
			doc.text(text, ML + 4, y);
			doc.setTextColor(0, 0, 0);
			y += 5;
		}
		
		function thinLine() {
			doc.setDrawColor(LIGHT_GRAY[0], LIGHT_GRAY[1], LIGHT_GRAY[2]);
			doc.setLineWidth(0.3);
			doc.line(ML + 4, y, PW - MR - 4, y);
			y += 2;
		}
		
		// ============================
		// PAGE 1 - HEADER + PHOTO
		// ============================
		
		// Blue header background
		doc.setFillColor(BLUE[0], BLUE[1], BLUE[2]);
		doc.rect(0, 0, PW, 42, 'F');
		
		// Decorative lighter stripe
		doc.setFillColor(DARK_BLUE[0], DARK_BLUE[1], DARK_BLUE[2]);
		doc.rect(0, 39, PW, 3, 'F');
		
		// Name
		doc.setFontSize(FS_NAME);
		doc.setFont('helvetica', 'bold');
		doc.setTextColor(255, 255, 255);
		doc.text('Arrival Dwi Sentosa', ML, 20);
		
		// Subtitle
		doc.setFontSize(10);
		doc.setFont('helvetica', 'normal');
		doc.setTextColor(200, 220, 240);
		doc.text('Lecturer of Informatics  |  AI/ML Researcher', ML, 29);
		
		doc.setTextColor(0, 0, 0);
		
		// Photo (right side, top-right corner, passport style)
		if (photoData) {
			try {
				var photoX = PW - MR - PHOTO_W;
				var photoY = 3;
				doc.addImage(photoData, 'PNG', photoX, photoY, PHOTO_W, PHOTO_H);
			} catch(e) {
				console.error('Error adding photo:', e);
			}
		}
		
		y = 48;
		
		// ============================
		// PERSONAL INFORMATION
		// ============================
		sectionHeader('Personal Information');
		
		// Two-column layout
		var leftX = ML + 4;
		var rightX = ML + CW / 2 + 4;
		var savedY = y;
		
		// Left column
		doc.setFontSize(FS_SMALL);
		doc.setFont('helvetica', 'bold');
		doc.setTextColor(GRAY[0], GRAY[1], GRAY[2]);
		doc.text('First name / Surname', leftX, y);
		doc.setFont('helvetica', 'normal');
		doc.setTextColor(0, 0, 0);
		doc.setFontSize(FS_BODY);
		doc.text('Arrival Dwi Sentosa', leftX, y + 4.5);
		
		doc.setFontSize(FS_SMALL);
		doc.setFont('helvetica', 'bold');
		doc.setTextColor(GRAY[0], GRAY[1], GRAY[2]);
		doc.text('Address', leftX, y + 11);
		doc.setFont('helvetica', 'normal');
		doc.setTextColor(0, 0, 0);
		doc.setFontSize(FS_BODY);
		doc.text('Bandung, Indonesia', leftX, y + 15.5);
		
		doc.setFontSize(FS_SMALL);
		doc.setFont('helvetica', 'bold');
		doc.setTextColor(GRAY[0], GRAY[1], GRAY[2]);
		doc.text('Phone Number', leftX, y + 22);
		doc.setFont('helvetica', 'normal');
		doc.setTextColor(0, 0, 0);
		doc.setFontSize(FS_BODY);
		doc.text('+62 821 2660 3538', leftX, y + 26.5);
		
		doc.setFontSize(FS_SMALL);
		doc.setFont('helvetica', 'bold');
		doc.setTextColor(GRAY[0], GRAY[1], GRAY[2]);
		doc.text('Email', leftX, y + 33);
		doc.setFont('helvetica', 'normal');
		doc.setTextColor(0, 0, 0);
		doc.setFontSize(FS_BODY);
		doc.text('arrivaldwi@itb.ac.id', leftX, y + 37.5);
		
		// Right column
		doc.setFontSize(FS_SMALL);
		doc.setFont('helvetica', 'bold');
		doc.setTextColor(GRAY[0], GRAY[1], GRAY[2]);
		doc.text('Nationality', rightX, y);
		doc.setFont('helvetica', 'normal');
		doc.setTextColor(0, 0, 0);
		doc.setFontSize(FS_BODY);
		doc.text('Indonesian', rightX, y + 4.5);
		
		doc.setFontSize(FS_SMALL);
		doc.setFont('helvetica', 'bold');
		doc.setTextColor(GRAY[0], GRAY[1], GRAY[2]);
		doc.text('Date of birth', rightX, y + 11);
		doc.setFont('helvetica', 'normal');
		doc.setTextColor(0, 0, 0);
		doc.setFontSize(FS_BODY);
		doc.text('August 30, 1997', rightX, y + 15.5);
		
		doc.setFontSize(FS_SMALL);
		doc.setFont('helvetica', 'bold');
		doc.setTextColor(GRAY[0], GRAY[1], GRAY[2]);
		doc.text('Gender', rightX, y + 22);
		doc.setFont('helvetica', 'normal');
		doc.setTextColor(0, 0, 0);
		doc.setFontSize(FS_BODY);
		doc.text('Male', rightX, y + 26.5);
		
		doc.setFontSize(FS_SMALL);
		doc.setFont('helvetica', 'bold');
		doc.setTextColor(GRAY[0], GRAY[1], GRAY[2]);
		doc.text('Website', rightX, y + 33);
		doc.setTextColor(0, 90, 160);
		doc.setFont('helvetica', 'normal');
		doc.setFontSize(FS_BODY);
		doc.textWithLink('arrivaldwis.github.io', rightX, y + 37.5, {url: 'https://arrivaldwis.github.io'});
		
		doc.setFontSize(FS_SMALL);
		doc.setFont('helvetica', 'bold');
		doc.setTextColor(GRAY[0], GRAY[1], GRAY[2]);
		doc.text('LinkedIn', rightX, y + 44);
		doc.setTextColor(0, 90, 160);
		doc.setFont('helvetica', 'normal');
		doc.setFontSize(FS_BODY);
		doc.textWithLink('linkedin.com/in/arrivaldwisentosa', rightX, y + 48.5, {url: 'https://www.linkedin.com/in/arrivaldwisentosa/'});
		
		doc.setTextColor(0, 0, 0);
		y += 55;
		
		// ============================
		// WORK EXPERIENCE
		// ============================
		sectionHeader('Work Experience');
		
		var europassWork = [
			{ period: '07/2023 \u2013 present', title: 'Lecturer', employer: 'Bandung Institute of Technology, School of Electrical Engineering and Informatics', location: 'Bandung, Indonesia', desc: 'Informatics lecturer in the Research group Informatics. Teaching undergraduate students in AI, Machine Learning, Statistics, and Discrete Mathematics. Mentoring student research and leading discussions on Explainable AI and LLMs.' },
			{ period: '04/2024 \u2013 present', title: 'Coordinator of AI Development', employer: 'PT Neuronworks Indonesia', location: 'Bandung, Indonesia', desc: 'Leading AI/ML research, development, and application. Coordinating development teams and managing AI project lifecycles.' },
			{ period: '01/2023 \u2013 present', title: 'National Jury Team', employer: 'WorldSkills Indonesia', location: 'IT Software Solution for Business', desc: 'Preparing competitors, creating problem statements, developing solutions, and evaluating according to WorldSkills International standards.' },
			{ period: '02/2024 \u2013 05/2024', title: 'Tech and AI Lead', employer: 'Sustainable Living Lab', location: 'AI Team', desc: 'Led RAG system development for sustainability domain. Architected end-to-end pipelines integrating vector databases and LLM orchestration using LangChain and FastAPI.' },
			{ period: '04/2022 \u2013 05/2023', title: 'Part-Time Lecturer', employer: 'Universitas Multimedia Nusantara', location: 'Faculty of Informatics and Engineering', desc: 'Lecturing Expert System, Artificial Intelligence, Algorithm & Data Structure, and Deep Learning for undergraduate students.' },
			{ period: '02/2022 \u2013 12/2022', title: 'Manager of Data and Information', employer: 'Kementerian Pendidikan dan Kebudayaan', location: 'Kampus Merdeka', desc: 'Product Manager for 4 programs (Praktisi Mengajar, Kampus Mengajar, Cerita Kampus Merdeka, IISMA). Managing stakeholder relationships and analytics.' },
			{ period: '07/2017 \u2013 08/2022', title: 'Co-Founder and CTO', employer: 'PT Transformasi Digital Laut', location: '', desc: 'Built tech infrastructure for aquaculture startup "Sgara". Managed 5-member tech team. Developed 5+ platforms (SgaraBook, SgaraHub, SgaraHatchery, SgaraSupply, SgaraERP).' },
			{ period: '06/2020 \u2013 09/2020', title: 'Senior Mobile Developer', employer: 'VE Capital Asia Pte Ltd', location: '', desc: 'Built Android and iOS projects with Flutter, React, and Go. Delivered 3 client apps in 3 months with a 3-member team.' },
			{ period: '09/2017 \u2013 01/2020', title: 'Co-Founder & Global Lead Technology', employer: 'Indonesia Diaspora Connect', location: '', desc: 'Built social platform for Indonesian diaspora. 1st Winner Alcatel Lucent Enterprise Hackathon 2018.' },
			{ period: '06/2018 \u2013 06/2019', title: 'Deputy Director of Media & Technology', employer: 'Perhimpunan Pelajar Indonesia Tiongkok', location: '', desc: 'Built social channels and "One data portal" for Indonesian students in China.' },
			{ period: '09/2017 \u2013 01/2018', title: 'Android Developer', employer: 'MEKAR.ID', location: '', desc: 'Built Peer-to-Peer Lending Apps "MEKAR" using Firebase, Firestore, MVVM, Dagger, and Retrofit.' },
			{ period: '05/2015 \u2013 07/2015', title: 'Android Developer', employer: 'PT. Iman Teknologi Informasi', location: '', desc: 'Built secure end-to-end encryption chat app "PesanKita" (now "Palapa").' },
			{ period: '07/2014 \u2013 09/2014', title: 'Android & iOS Developer', employer: 'PT. GITS Indonesia', location: '', desc: 'Built iOS and Android apps with native technology. Handled projects for Tiket.com.' },
			{ period: '10/2013 \u2013 11/2013', title: 'Back-End Developer', employer: 'Yoqiza Interactive', location: '', desc: 'Built back-end for startup e-commerce using Laravel 4.' }
		];
		
		var periodColW = 28;
		var detailX = ML + periodColW + 4;
		var detailW = CW - periodColW - 8;
		
		for (var ei = 0; ei < europassWork.length; ei++) {
			var exp = europassWork[ei];
			// Estimate height needed
			var descLines = doc.splitTextToSize(exp.desc, detailW);
			var expH = 10 + descLines.length * LH + 3;
			needSpace(expH);
			
			// Period
			doc.setFontSize(FS_SMALL);
			doc.setFont('helvetica', 'bold');
			doc.setTextColor(GRAY[0], GRAY[1], GRAY[2]);
			doc.text(exp.period, ML + 4, y);
			
			// Title
			doc.setFont('helvetica', 'bold');
			doc.setTextColor(0, 0, 0);
			doc.text(exp.title, detailX, y);
			y += 4.2;
			
			// Employer + Location
			doc.setFontSize(FS_SMALL);
			doc.setFont('helvetica', 'italic');
			doc.setTextColor(GRAY[0], GRAY[1], GRAY[2]);
			var empLine = exp.employer + (exp.location ? ', ' + exp.location : '');
			var empLines = doc.splitTextToSize(empLine, detailW);
			doc.text(empLines, detailX, y);
			y += empLines.length * 3.8 + 1;
			
			// Description
			doc.setFont('helvetica', 'normal');
			doc.setFontSize(FS_BODY);
			doc.setTextColor(50, 50, 50);
			for (var li = 0; li < descLines.length; li++) {
				needSpace(LH);
				doc.text(descLines[li], detailX, y);
				y += LH;
			}
			doc.setTextColor(0, 0, 0);
			y += 3;
		}
		
		// ============================
		// EDUCATION AND TRAINING
		// ============================
		sectionHeader('Education and Training');
		
		// Master's
		needSpace(30);
		doc.setFontSize(FS_SMALL);
		doc.setFont('helvetica', 'bold');
		doc.setTextColor(GRAY[0], GRAY[1], GRAY[2]);
		doc.text('08/2019 \u2013 04/2022', ML + 4, y);
		doc.setTextColor(0, 0, 0);
		doc.setFont('helvetica', 'bold');
		doc.setFontSize(FS_SUBTITLE);
		doc.text('M.Sc. in Intelligent Systems', detailX, y);
		y += 4.5;
		doc.setFontSize(FS_SMALL);
		doc.setFont('helvetica', 'normal');
		doc.setTextColor(GRAY[0], GRAY[1], GRAY[2]);
		doc.text('Bandung Institute of Technology, Bandung, Indonesia', detailX, y);
		y += 4.5;
		doc.setTextColor(50, 50, 50);
		doc.setFont('helvetica', 'normal');
		doc.setFontSize(FS_BODY);
		var masterDesc = 'Developed diverse machine learning models for Computer Vision, specializing in optimizing algorithms and loss functions for neural networks (FRCNN, TCNN, MIST). Expertise in object detection (YOLO v3\u2013v8), applied to embedded systems using Keras, TensorFlow, and PyTorch.';
		var masterLines = doc.splitTextToSize(masterDesc, detailW);
		for (var mi = 0; mi < masterLines.length; mi++) { needSpace(LH); doc.text(masterLines[mi], detailX, y); y += LH; }
		doc.setFont('helvetica', 'italic');
		doc.setFontSize(FS_SMALL);
		doc.setTextColor(0, 90, 160);
		needSpace(4);
		doc.text('Thesis:', detailX, y);
		y += 3.8;
		var masterThesis = 'Predicting the Risk of White Spot Syndrome Virus in Shrimp with a Machine Learning and Expert Knowledge Approach';
		var thesisLines = doc.splitTextToSize(masterThesis, detailW - 2);
		for (var ti = 0; ti < thesisLines.length; ti++) { needSpace(4); doc.text(thesisLines[ti], detailX, y); y += 3.8; }
		doc.setTextColor(0, 0, 0);
		y += 5;
		
		// Bachelor's
		needSpace(30);
		doc.setFontSize(FS_SMALL);
		doc.setFont('helvetica', 'bold');
		doc.setTextColor(GRAY[0], GRAY[1], GRAY[2]);
		doc.text('09/2015 \u2013 07/2019', ML + 4, y);
		doc.setTextColor(0, 0, 0);
		doc.setFont('helvetica', 'bold');
		doc.setFontSize(FS_SUBTITLE);
		doc.text('B.Sc. in Computer Science', detailX, y);
		y += 4.5;
		doc.setFontSize(FS_SMALL);
		doc.setFont('helvetica', 'normal');
		doc.setTextColor(GRAY[0], GRAY[1], GRAY[2]);
		doc.text('Beijing Institute of Technology, Beijing, China', detailX, y);
		y += 4.5;
		doc.setTextColor(50, 50, 50);
		doc.setFont('helvetica', 'normal');
		doc.setFontSize(FS_BODY);
		var bachDesc = 'Comprehensive study in data structures, algorithms, databases, parallel programming, computer architecture, networks, and mobile app development. Recipient of the Extraordinary Award for Best Computer Science Academic Record.';
		var bachLines = doc.splitTextToSize(bachDesc, detailW);
		for (var bi = 0; bi < bachLines.length; bi++) { needSpace(LH); doc.text(bachLines[bi], detailX, y); y += LH; }
		doc.setFont('helvetica', 'italic');
		doc.setFontSize(FS_SMALL);
		doc.setTextColor(0, 90, 160);
		needSpace(5);
		doc.textWithLink('Thesis: Self-Learning Personal Financial Assistant Android Application using MVVM Architectural Pattern', detailX, y, {url: 'http://dx.doi.org/10.13140/RG.2.2.11845.81125'});
		doc.setTextColor(0, 0, 0);
		y += 8;
		
		// High School
		needSpace(20);
		doc.setFontSize(FS_SMALL);
		doc.setFont('helvetica', 'bold');
		doc.setTextColor(GRAY[0], GRAY[1], GRAY[2]);
		doc.text('07/2012 \u2013 05/2015', ML + 4, y);
		doc.setTextColor(0, 0, 0);
		doc.setFont('helvetica', 'bold');
		doc.setFontSize(FS_SUBTITLE);
		doc.text('Software Engineering', detailX, y);
		y += 4.5;
		doc.setFontSize(FS_SMALL);
		doc.setFont('helvetica', 'normal');
		doc.setTextColor(GRAY[0], GRAY[1], GRAY[2]);
		doc.text('Vocational High School 4 Bandung, Bandung, Indonesia', detailX, y);
		y += 4.5;
		doc.setTextColor(50, 50, 50);
		doc.setFont('helvetica', 'normal');
		doc.setFontSize(FS_BODY);
		var hsDesc = 'Vocational training in software engineering: programming fundamentals, database management, web development, networking, and system administration.';
		var hsLines = doc.splitTextToSize(hsDesc, detailW);
		for (var hi = 0; hi < hsLines.length; hi++) { needSpace(LH); doc.text(hsLines[hi], detailX, y); y += LH; }
		y += 6;
		
		// ============================
		// PERSONAL SKILLS (always on new page)
		// ============================
		doc.addPage();
		y = ML;
		sectionHeader('Personal Skills');
		
		// Languages
		subheading('Languages');
		
		// Language table header
		needSpace(20);
		doc.setFontSize(FS_SMALL);
		doc.setFont('helvetica', 'bold');
		doc.setTextColor(0, 0, 0);
		doc.text('Language', ML + 6, y);
		doc.text('Listening', ML + 52, y);
		doc.text('Speaking', ML + 87, y);
		doc.text('Reading', ML + 122, y);
		doc.text('Writing', ML + 152, y);
		y += 4;
		thinLine();
		y += 2;
		doc.setFont('helvetica', 'normal');
		
		var langs = [
			['Indonesian', 'Native', 'Native', 'Native', 'Native'],
			['English', 'B2', 'B2', 'B2', 'C1'],
			['Chinese (Mandarin)', 'B1', 'A2', 'A2', 'A1']
		];
		
		for (var li2 = 0; li2 < langs.length; li2++) {
			needSpace(6);
			doc.setTextColor(0, 0, 0);
			doc.text(langs[li2][0], ML + 6, y);
			doc.setTextColor(GRAY[0], GRAY[1], GRAY[2]);
			doc.text(langs[li2][1], ML + 54, y);
			doc.text(langs[li2][2], ML + 89, y);
			doc.text(langs[li2][3], ML + 124, y);
			doc.text(langs[li2][4], ML + 154, y);
			y += 5.5;
		}
		y += 3;
		
		// Communication
		subheading('Communication Skills');
		doc.setFont('helvetica', 'normal');
		doc.setFontSize(FS_BODY);
		doc.setTextColor(50, 50, 50);
		var commText = 'Experienced public speaker and educator. Conducted numerous workshops, guest lectures, and technical presentations at universities and industry conferences. Active YouTube content creator with a channel focused on AI and programming tutorials.';
		wrapText(commText, ML + 8, CW - 12, FS_BODY);
		doc.setTextColor(0, 0, 0);
		y += 3;
		
		// Organisational
		subheading('Organisational / Managerial Skills');
		doc.setFont('helvetica', 'normal');
		doc.setFontSize(FS_BODY);
		doc.setTextColor(50, 50, 50);
		var orgText = 'Co-Founder and CTO at PT Transformasi Digital Laut. Manager of Data and Information at Kementerian Pendidikan dan Kebudayaan. Coordinated AI development teams and managed stakeholder relationships across multiple national programs.';
		wrapText(orgText, ML + 8, CW - 12, FS_BODY);
		doc.setTextColor(0, 0, 0);
		y += 3;
		
		// Digital competence
		subheading('Digital Competence');
		bulletItem('AI/ML Frameworks: TensorFlow, PyTorch, Keras, Scikit-learn, LangChain, HuggingFace Transformers');
		bulletItem('Programming Languages: Python, Java, Kotlin, Dart, C++, JavaScript, TypeScript');
		bulletItem('Web Technologies: Flask, FastAPI, React, AngularJS, Node.js, HTML/CSS');
		bulletItem('Mobile Development: Android (Java/Kotlin), iOS (Swift), Flutter');
		bulletItem('Cloud & DevOps: Docker, Firebase, Google Cloud Platform, AWS');
		bulletItem('Databases: PostgreSQL, MongoDB, SQLite, Firebase Firestore, Redis');
		bulletItem('Tools: Git, Linux, Jupyter, LaTeX, VS Code');
		y += 3;
		
		// Other skills
		subheading('Other');
		bulletItem('WorldSkills Competition Judge (IT Software Solution for Business)');
		bulletItem('Google, GoTo, Traveloka Bangkit Academy \u2013 AI/ML Instructor');
		bulletItem('YouTube Content Creator \u2013 AI and programming tutorials');
		
		// ============================
		// ADDITIONAL INFORMATION
		// ============================
		sectionHeader('Additional Information');
		
		// Honours
		subheading('Honours and Awards');
		doc.setFont('helvetica', 'normal');
		doc.setFontSize(FS_BODY);
		doc.setTextColor(0, 0, 0);
		
		var awards = [
			'The Rising Star Contributors \u2013 AI/ML Instructor, Bangkit Academy (Aug 2024)',
			'Tangsel ICT Awards \u2013 AI for Shrimp Disease Detection (Nov 2023)',
			'Battle of Minds \u2013 AI for Shrimp Disease Detection (Sep 2021)',
			'Extraordinary Award \u2013 Best Computer Science Academic Record, B.Sc. (Nov 2019)',
			'Beasiswa Unggulan Awardee \u2013 Full Government Scholarship, M.Sc. (Aug 2019)',
			'Alcatel Lucent Enterprise Hackathon \u2013 1st Winner (Sep 2018)',
			'WorldSkills Competition Abu Dhabi \u2013 IT Software Solution for Business (Oct 2017)',
			'Samsung Indonesia Next Apps 4.0 \u2013 Samsung SDK Challenge Winner (Oct 2017)',
			'IBM Bluemix Challenge \u2013 Mom with Technology (Dec 2016)',
			'ASEAN Skills Competition Kuala Lumpur \u2013 IT Software (Oct 2016)',
			'Indonesian Skills Competition \u2013 IT Software Applications (Aug 2014)',
			'Indonesia ICT Awards \u2013 Antivirus Application (Sep 2013)',
			'Indosat Inspiring Youth & Women \u2013 Antivirus Application (Dec 2012)',
			'West Java ICT Awards \u2013 Antivirus Application (Sep 2011)'
		];
		
		for (var ai2 = 0; ai2 < awards.length; ai2++) {
			bulletItem(awards[ai2]);
		}
		y += 4;
		
		// Publications (all from general CV)
		subheading('Publications');
		doc.setFont('helvetica', 'normal');
		doc.setFontSize(FS_BODY);
		doc.setTextColor(0, 0, 0);
		
		// 2026
		doc.setFont('helvetica', 'bold');
		doc.setFontSize(FS_SUBTITLE);
		doc.setTextColor(DARK_BLUE[0], DARK_BLUE[1], DARK_BLUE[2]);
		doc.text('2026', ML + 8, y);
		doc.setFont('helvetica', 'normal');
		doc.setFontSize(FS_SMALL);
		doc.setTextColor(GRAY[0], GRAY[1], GRAY[2]);
		doc.text('(In review)', ML + 22, y);
		y += 5;
		doc.setTextColor(0, 0, 0);
		
		var pub2026 = [
			'A. D. Sentosa, "FuseRAG: Parallel Multi-Source Knowledge Fusion for Hybrid Graph-Augmented Retrieval-Augmented Generation," May 2026.',
			'A. D. Sentosa, A. D. Kusumah, J. Widianto, and H. H. Putri, "PRISM: Personalized Retrieval via Implicit Subspace Mapping for Attribute-Aware Retrieval-Augmented Generation," January 2026.'
		];
		for (var p26 = 0; p26 < pub2026.length; p26++) {
			bulletItem(pub2026[p26]);
		}
		y += 2;
		
		// 2025
		doc.setFont('helvetica', 'bold');
		doc.setFontSize(FS_SUBTITLE);
		doc.setTextColor(DARK_BLUE[0], DARK_BLUE[1], DARK_BLUE[2]);
		doc.text('2025', ML + 8, y);
		y += 5;
		doc.setFont('helvetica', 'normal');
		doc.setFontSize(FS_SMALL);
		doc.setTextColor(0, 0, 0);
		
		var pub2025 = [
			'A. D. Sentosa, J. Widianto, "MACS: A Cognitive Diversity Multi-Agent Consensus Framework for Bias Mitigation in Automated Evaluation Systems," Accepted at ICEEI 2025.',
			'A. D. Sentosa, A. S. Prihatmanto, N. Lestari, D. Tresnawati, and A. Zakiah, "IndoEduBERT: Tailored Multi-Lingual and Multi-Grained Sentence Embeddings for the Indonesian Education Domain," Accepted at ICEEI 2025.',
			'Z. Iklima, T. M. Kadarina, K. S. Salamah, and A. D. Sentosa, "Real-time dental caries segmentation with an efficient Deformable U-Net (DU-Net) for teledentistry system," February 2025.'
		];
		for (var p25 = 0; p25 < pub2025.length; p25++) {
			bulletItem(pub2025[p25]);
		}
		y += 2;
		
		// 2022
		doc.setFont('helvetica', 'bold');
		doc.setFontSize(FS_SUBTITLE);
		doc.setTextColor(DARK_BLUE[0], DARK_BLUE[1], DARK_BLUE[2]);
		doc.text('2022', ML + 8, y);
		y += 5;
		doc.setFont('helvetica', 'normal');
		doc.setFontSize(FS_SMALL);
		doc.setTextColor(0, 0, 0);
		
		var pub2022 = 'A. D. Sentosa and N. P. Utama, "Predicting the Risk of White Spot Syndrome Virus in Shrimp with a Machine Learning and Expert Knowledge Approach," Master\'s thesis, Bandung Institute of Technology, April 2022.';
		bulletItem(pub2022);
		y += 2;
		
		// 2019
		doc.setFont('helvetica', 'bold');
		doc.setFontSize(FS_SUBTITLE);
		doc.setTextColor(DARK_BLUE[0], DARK_BLUE[1], DARK_BLUE[2]);
		doc.text('2019', ML + 8, y);
		y += 5;
		doc.setFont('helvetica', 'normal');
		doc.setFontSize(FS_SMALL);
		doc.setTextColor(0, 0, 0);
		
		var pub2019 = 'A. D. Sentosa, M. Sadikin, and Z. Hong, "Self-Learning Personal Financial Assistant Android Application using MVVM Architectural Pattern," Indonesian Journal of Electrical Engineering and Informatics (IJEEI), vol. 31, pp. 17-25, September 2019.';
		bulletItem(pub2019);
		
		// ============================
		// FOOTER on all pages
		// ============================
		var totalPages = doc.internal.getNumberOfPages();
		for (var p = 1; p <= totalPages; p++) {
			doc.setPage(p);
			// Bottom line
			doc.setDrawColor(BLUE[0], BLUE[1], BLUE[2]);
			doc.setLineWidth(0.4);
			doc.line(ML, PH - 13, PW - MR, PH - 13);
			// Footer text
			doc.setFontSize(FS_TINY);
			doc.setFont('helvetica', 'normal');
			doc.setTextColor(GRAY[0], GRAY[1], GRAY[2]);
			doc.text('Europass CV \u2013 Arrival Dwi Sentosa', ML, PH - 9);
			doc.text('Page ' + p + ' of ' + totalPages, PW - MR - 18, PH - 9);
			doc.text('Created: ' + new Date().toLocaleDateString('en-GB'), PW / 2 - 12, PH - 9);
		}
		
		doc.save('Arrival_Dwi_Sentosa_Europass_CV.pdf');
		toastr.success('Europass CV downloaded successfully!');
		
	} catch (error) {
		console.error('Error generating Europass CV:', error);
		toastr.error('Error generating Europass CV. Please try again.');
	}
}