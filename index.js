tailwind.config = {
    theme: {
        fontFamily: {
            sans: ['TT Hoves', 'sans']
        },
        fontWeight: {
            thin: 100,
            extralight: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900
        }
    }
}


$(document).ready(function() {

    let facebookGroups = [
        {
            title: 'NHB Facebook Group',
            image: 'images/group1.png',
            members: '21,349',
            description: 'More than a job board. Hire talent. Built a team. Find a job. Get a gig. Work with the best.',
            url: 'https://facebook.com/group-name-1'
        },
        {
            title: 'NHB Job Board',
            image: 'images/group2.png',
            members: '21,349',
            description: 'More than a job board. Hire talent. Built a team. Find a job. Get a gig. Work with the best.',
            url: 'https://facebook.com/group-name-2'
        },
        {
            title: 'NHB Join Venture Network',
            image: 'images/group3.png',
            members: '21,349',
            description: 'More than a job board. Hire talent. Built a team. Find a job. Get a gig. Work with the best.',
            url: 'https://facebook.com/group-name-3'
        },
        {
            title: 'Some Other Facebook Group',
            image: 'images/group1.png',
            members: '21,349',
            description: 'More than a job board. Hire talent. Built a team. Find a job. Get a gig. Work with the best.',
            url: 'https://facebook.com/group-name-4'
        },
        {
            title: 'Another Facebook Group',
            image: 'images/group2.png',
            members: '21,349',
            description: 'More than a job board. Hire talent. Built a team. Find a job. Get a gig. Work with the best.',
            url: 'https://facebook.com/group-name-5'
        },
        {
            title: 'Additional Facebook Group',
            image: 'images/group3.png',
            members: '21,349',
            description: 'More than a job board. Hire talent. Built a team. Find a job. Get a gig. Work with the best.',
            url: 'https://facebook.com/group-name-6'
        },
        {
            title: 'Extra Facebook Group',
            image: 'images/group1.png',
            members: '21,349',
            description: 'More than a job board. Hire talent. Built a team. Find a job. Get a gig. Work with the best.',
            url: 'https://facebook.com/group-name-7'
        },
        {
            title: 'Small Facebook Group',
            image: 'images/group2.png',
            members: '21,349',
            description: 'More than a job board. Hire talent. Built a team. Find a job. Get a gig. Work with the best.',
            url: 'https://facebook.com/group-name-8'
        },
        {
            title: 'Final Facebook Group',
            image: 'images/group3.png',
            members: '21,349',
            description: 'More than a job board. Hire talent. Built a team. Find a job. Get a gig. Work with the best.',
            url: 'https://facebook.com/group-name-9'
        }
    ]
    
    let htmlContent = ``

    for (let group of facebookGroups) {
        htmlContent += `
        <div>
            <div class="bg-white shadow rounded-xl p-2 m-4">
                <img class="w-full" src="${group.image}" alt="">
                <div class="px-4 pt-1 pb-4">
                    <div class="py-3 flex items-center space-x-3 border-b border-gray-100">
                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.275635" width="40" height="40" rx="20" fill="#1254FF"/>
                            <path d="M22.1666 21.5256H24.25L25.0833 18.1923H22.1666V16.5256C22.1666 15.6673 22.1666 14.859 23.8333 14.859H25.0833V12.059C24.8116 12.0231 23.7858 11.9423 22.7025 11.9423C20.44 11.9423 18.8333 13.3231 18.8333 15.859V18.1923H16.3333V21.5256H18.8333V28.609H22.1666V21.5256Z" fill="white"/>
                        </svg>
                        <div>
                            <span class="block font-semibold">
                                ${group.title}
                            </span>
                            <span class="block text-xs text-gray-400">
                                ${group.members} members
                            </span>
                        </div>
                    </div>
                    <p class="text-lg leading-tight font-medium py-4">
                        ${group.description}
                    </p>
                    <a href="${group.url}" class="w-full p-3 bg-blue-600 text-white text-sm font-medium rounded-md flex items-center justify-center space-x-3 hover:bg-blue-500 transition-all duration-300">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.83331 0.775665C3.69106 0.775665 0.333313 4.13342 0.333313 8.27567C0.333313 12.0189 3.07606 15.1217 6.66181 15.6849V10.4432H4.75681V8.27567H6.66181V6.62341C6.66181 4.74392 7.78081 3.70592 9.49456 3.70592C10.3151 3.70592 11.1731 3.85217 11.1731 3.85217V5.69717H10.2281C9.29581 5.69717 9.00556 6.27541 9.00556 6.86866V8.27567H11.0853L10.7531 10.4432H9.00556V15.6849C12.5906 15.1224 15.3333 12.0182 15.3333 8.27567C15.3333 4.13342 11.9756 0.775665 7.83331 0.775665Z" fill="white"/>
                        </svg>
                        <span class="block">
                            Join Facebook Group
                        </span>
                    </a>
                </div>
            </div>
        </div>
        `;
    }
    
    const carouselContainer = document.getElementById('carousel_container');
    carouselContainer.innerHTML = htmlContent

    $('.carousel').slick({
        accessibility: true,
        adaptiveHeight: false,
        arrows: true,
        prevArrow:
        `<button type="button" data-role="none" class="bg-white p-4 shadow rounded-full flex items-center justify-center absolute -left-3 top-[50%] -translate-y-1/2 z-20">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5 text-blue-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
        </button>`,
        nextArrow:
        `<button type="button" data-role="none" class="bg-white p-4 shadow rounded-full flex items-center justify-center absolute -right-3 top-[50%] -translate-y-1/2 z-20">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5 text-blue-500 rotate-180">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
        </button>`,
        cssEase: 'ease',
        dots: true,
        dotsClass: 'slick-dots',
        easing: 'linear',
        slidesToShow: 3,
        responsive: [{
            breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                }
            }, {
            breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                }
            }]
    });

    $(".accordion").click(function(){
        $(this).next(".panel").slideToggle();
    });
});
    