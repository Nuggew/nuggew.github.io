const projects = [
    {
        name: "CSubRip",
        description: "A SubRip (captions language) decoder made for CSharp .NET Framework",
        url: "https://github.com/Nuggew/CSubRip"
    },
    {
        name: "Simple Spinning Wheel",
        description: "A simple open-source cool spinning bar for your python Windows Terminal programs :)",
        url: "https://github.com/Nuggew/Simple-Spinning-Wheel"
    },
    {
        name: "StrawJS",
        description: "A simple lightweight notification library for JavaScript",
        url: "https://github.com/Nuggew/StrawJS"
    },
    {
        name: "Portfolio",
        description: "This portfolio website",
        url: "https://github.com/Nuggew/nuggew.github.io"
    },
    {
        name: "README",
        description: "My Github profile README",
        url: "https://github.com/Nuggew/Nuggew"
    }
]

projects.forEach(project => {
    $("li").append(`
    <a href="${project.url}" target="_parent"><ul class="project">\
        <h1>${project.name}</h1>\
        <p>${project.description}</p>\
    </ul></a>
    `);
});