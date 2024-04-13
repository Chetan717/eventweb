import gau from "./../../../public/img/gau.gif"

function HeroHome() {
    return (
        // https://static.vecteezy.com/system/resources/previews/007/407/980/mp4/the-crowd-at-the-concert-and-blurred-stage-lights-of-people-dancing-at-the-rock-n-roll-concert-free-video.mp4
        <section className="bg-cover bg-center" style={{backgroundImage: 'url(\'https://res.cloudinary.com/dutpoqbev/image/upload/v1712986278/7722295-uhd_3840_2160_25fps-ezgif.com-video-to-gif-converter_1_swn9la.gif\')'}}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                {/* Hero content */}
                <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h1 m-2">
                            <span className="text-[color:var(--darker-secondary-color)]">
                                EVENTO
                            </span>
                           
                            <p className="mt-3 text-5xl text-gray-500">
                                {"Event Management"}
                            </p>
                        </h1>
                        
                        <p className="text-2xl text-gray-500 mb-8">
                            "Bringing Your Events to Life: Simplified Registration, Seamless Management, and Easy Ticketing."
                        </p>
                        <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                            <div>
                                <a
                                    href="/users/signin"
                                    className="btn text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] w-full mb-4 sm:w-auto sm:mb-0"
                                >
                                    Signin
                                </a>
                            </div>
                            <div>
                                <a
                                    className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                                    href="/users/signup"
                                >
                                    Signup
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroHome;
