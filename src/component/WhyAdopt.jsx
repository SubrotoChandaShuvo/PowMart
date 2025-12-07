import React from 'react';

const WhyAdopt = () => {
    return (
        // <div className="my-16 px-6 md:px-12 lg:px-20">
        <div className="px-8 md:px-10 lg:px-[110px] mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 
                bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Why Adopt from PawMart?
            </h2>

            <p className="text-center max-w-2xl mx-auto text-gray-600 text-lg mb-10">
                Every pet deserves a loving home — and at PawMart, we believe adoption can change lives.
                When you adopt, you’re not just bringing home a new friend…
                you’re saving a life.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
                
                <div className="p-6 rounded-2xl shadow-md hover:shadow-xl transition bg-white/70 backdrop-blur-sm">
                    <h3 className="text-xl font-semibold mb-3">❤️ Save a Life</h3>
                    <p className="text-gray-600">
                        Thousands of wonderful pets are waiting for a second chance. 
                        Your adoption gives them the loving family they deserve.
                    </p>
                </div>

               
                <div className="p-6 rounded-2xl shadow-md hover:shadow-xl transition bg-white/70 backdrop-blur-sm">
                    <h3 className="text-xl font-semibold mb-3">💸 Affordable & Responsible</h3>
                    <p className="text-gray-600">
                        Adopting is far more affordable than buying — and all pets come vaccinated,
                        health-checked, and ready for a new home.
                    </p>
                </div>

                
                <div className="p-6 rounded-2xl shadow-md hover:shadow-xl transition bg-white/70 backdrop-blur-sm">
                    <h3 className="text-xl font-semibold mb-3">🌍 Support a Good Cause</h3>
                    <p className="text-gray-600">
                        Every adoption helps us rescue more animals from danger, abandonment,
                        and neglect. Together, we make a difference.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyAdopt;
