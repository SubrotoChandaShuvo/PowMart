import React from 'react';

const MeetPetHeroes = () => {
    const heroes = [
        {
            name: "Ms. Sara",
            role: "Adopted Bella (Rescued Dog)",
            img: "https://i.pinimg.com/1200x/07/c8/86/07c886874ecfa2f23bc4c793ab3b6a2c.jpg",
            desc: "Sarah gave Bella a second chance at life. Today, Bella enjoys a safe and loving home."
        },
        {
            name: "Michael Lee",
            role: "Volunteer & Pet Caregiver",
            img: "https://i.pinimg.com/1200x/27/b5/7e/27b57ebc627c2b1642fc01d3c2fd2d82.jpg",
            desc: "Michael spends weekends caring for abandoned pets and preparing them for adoption."
        },
        {
            name: "Alicia Brown",
            role: "Adopted Coco (Street Cat)",
            img: "https://i.pinimg.com/736x/6f/3d/21/6f3d216e9dc0b27ffa5615b4b2cbf129.jpg",
            desc: "Alicia rescued Coco from the streets. Now Coco has a warm bed and a warm heart to cuddle with."
        },
        {
            name: "David Wilson",
            role: "Shelter Supporter & Feeder",
            img: "https://i.pinimg.com/1200x/a3/ab/68/a3ab68db4ad25917be3b9791c177aba1.jpg",
            desc: "David helps feed and support stray dogs around the city every week."
        },
    ];

    return (
        <div className="px-8 md:px-10 lg:px-[110px] mt-20">


            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 
                bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Meet Our Pet Heroes
            </h2>

            <p className="text-center max-w-2xl mx-auto text-gray-600 text-lg mb-10">
                These inspiring individuals helped give pets a new chapter in life — through adoption,
                volunteering, or compassionate care. Their kindness makes PawMart’s mission possible.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {heroes.map((hero, index) => (
                    <div 
                        key={index}
                        className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition text-center"
                    >
                
                        <div className="avatar mb-4">
                            <div className="w-24 h-24 rounded-full ring ring-red-300 ring-offset-base-100 ring-offset-2 overflow-hidden">
                                <img src={hero.img} alt="Pet Hero" className="object-cover w-full h-full" />
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold">{hero.name}</h3>
                        <p className="text-blue-600 font-medium">{hero.role}</p>

                        <p className="text-gray-600 mt-3 text-sm">
                            {hero.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MeetPetHeroes;
