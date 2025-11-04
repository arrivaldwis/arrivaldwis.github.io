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

	// Handle CV Download
	$('#downloadCV').click(function(e) {
		e.preventDefault();
		generateCV();
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
		doc.text('GitHub: github.com/arrivaldwis', margin, yPosition);
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
		doc.text('(Hons) B.Sc. in Computer Science', margin, yPosition);
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
		doc.setTextColor(0, 0, 0);
		yPosition += 8;
		
		// IndoEduBERT Publication
		const pub2025a = 'A. D. Sentosa, A. S. Prihatmanto, N. Lestari, D. Tresnawati, and A. Zakiah, "IndoEduBERT: Tailored Multi-Lingual and Multi-Grained Sentence Embeddings for the Indonesian Education Domain," Accepted at International Conference on Electrical Engineering and Informatiocs (https://ftsm.ukm.my/iceei2025/) at November 2025. ';
		const pub2025aLines = addWrappedText(pub2025a, margin, yPosition, pageWidth - 2 * margin - 30);
		yPosition += pub2025aLines;
		doc.setTextColor(0, 0, 255);
		doc.textWithLink('[PDF]', pageWidth - margin - 25, yPosition - 4, {url: '/assets/documents/IndoEduBERT.pdf'});
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