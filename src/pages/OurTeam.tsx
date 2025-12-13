import React from 'react';
import { Quote } from 'lucide-react';

interface TeamMember {
  name: string;
  bio: string;
  image: string;
  role?: string;
}

const TEAM: TeamMember[] = [
  {
    name: "DARLA",
    bio: "Hi everyone, I’m Darla, though most know me as “Mama Oz.” A decade ago, we started this adventure with a hope that it would grow into something meaningful, but I could never have imagined just how far we’d come. Every year, we set new goals, break records, and continue to grow as one of the leaders in pest control across Wisconsin. Although I’m technically retired, keeping track of my boys has become more of a full-time job than I ever expected! Ten years later, I’m still here, watching our family grow, helping everyone live their dreams both at work and beyond. I’m incredibly proud of the team we’ve built—truly the best around.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "CRAIG",
    bio: "I have over 20 years of experience in management and 10 years dedicated to running operations. I have helped play a key role in shaping our family-owned pest control company into a trusted name in the industry. We pride ourselves on not only delivering effective pest control solutions but also on fostering a workplace culture that values and empowers our exceptional team of employees. Our commitment to high standards, customer satisfaction, and innovation drives us to provide top-tier services.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "CORY",
    bio: "I’ve been in the pest control industry for 10 years, and I’m proud to say every one of them has been with 1st Choice Pest Control. I was one of the originals here with Darla, doing everything from the ground up—handling sales and running routes at the same time. Together, with guidance from Craig and Darla, we kept this train moving forward. Over time, I’ve transitioned into my true passion: Leading the sales side of the business. I take great pride in educating customers and helping them start their journey to a pest-free environment.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "ANDREW",
    bio: "I've been in the pest control industry for nearly a decade now, with over 3 years here at 1st Choice Pest Control. Like many, I started at the bottom and worked my way up. I went from knowing nothing about pest control to becoming one of the youngest master technicians in the state at the time. Over the years, I’ve earned my place as a leader in both the industry and among our outstanding crew. Pest control is an industry that hooks you, always presenting new challenges.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "JUSTIN",
    bio: "I’ve been in the pest control industry for 102 months (8 ½ years), with 4 of those years at 1st Choice Pest Control. The best part of my job is the incredible people I get to meet—from new friends in my neighborhood to political figures, and even quite a few Green Bay Packers. GO PACK GO! I’ve had many proud moments in this industry, but one that stands out was eradicating a severe bed bug infestation at a nursing home where multiple other companies had failed.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "BRENT",
    bio: "I have been in the pest control industry for 13 years and with 1st Choice Pest Control for over 2 years now. I wake up every morning eager to see what awaits me. I enjoy meeting everyone and getting to know their stories and their lives. The ability to help make their lives better is what drives me to be the best that I can be. Outside of work you will catch me enjoying God’s creation with my family.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "DYLAN",
    bio: "I have been in the Pest Control Industry for 4 and a half years now and with 1st Choice Pest Control for 2 of them. I go to work every day with the best attitude and biggest smile knowing that I get to make someone’s life happier today. I truly enjoy interacting with all my customers and ensuring they have a pest-free home. The best part of my daily job is getting to see every backroad and lake that Wisconsin has to offer.",
    image: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "MARK",
    bio: "I have been in the pest control industry since 2021 and with 1st Choice Pest Control for 2 years now. While I may be on the newer side of things, I have been able to build a knowledge base that far exceeds what I ever thought imaginable. I strive to make sure that everybody I meet and service is comfortable in their own home. Seeing the relief of knowing they are protected; is a feeling everyone should get to enjoy.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "BRANDON F",
    bio: "I have been in the pest control industry for just 2 years. In those two years, I have grown to love this industry more than I ever thought. Not many jobs give you the satisfaction of comforting people everyday. Whether it is keeping children safe from stings, or getting rid of unwanted guests after a long vacation, it makes me tick. Although I may do the same type of work every day, the people are always different.",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "STEFANIE",
    bio: "I have only been in pest control for 3 months. So, I am the newbie of the group. However, it didn’t take me long to fall in love with it. Customer service is my specialty, and I love getting you to laugh and smile. I will be with you for all of your concerns and all of your triumphs. I look forward to continuing to expand my knowledge and understanding of the industry while I help you take back your home from pesky bugs.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "BRANDON H",
    bio: "I began working in pest control in 2018, gaining experience in Colorado, North Carolina, and now Wisconsin. With a background in servicing both residential and commercial properties, I handle a wide range of pest issues effectively. What I love most about this industry is providing customers with peace of mind—helping them feel comfortable in their homes and workplaces. I take particular pride in eliminating roach and bed bug infestations, especially when they impact children.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "KYLE",
    bio: "My name is Kyle, and I have been working in this field for nearly four years. I got into this line of work because I want to advance my career toward becoming a state game warden. To reach that goal, I plan to re-enroll in school to earn an associate degree in Game and Wildlife, along with credits in Business Management. I’m passionate about wildlife conservation and dedicated to gaining the knowledge and experience needed to protect our state’s natural resources.",
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "ASHLEY",
    bio: "I joined the team as a Customer Service Representative and absolutely love what I do! While my career has included a variety of experiences, I’m learning more about pest control every day— no two customer calls are ever the same! I enjoy connecting with customers and being part of a supportive team. Outside of work, I stay busy cheering on my two daughters in competitive cheer and playing with our two dogs.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "RICK",
    bio: "With over 20 years of experience in the pest control industry, I have built a reputation for reliability, deep knowledge, and hands-on expertise. Known for tackling tough infestations with practical solutions, they’ve become a trusted name in their community. Outside of work, I enjoy DIY home improvement projects, always finding new ways to fix, build, or upgrade something around the house. A lifelong football fan, I take special joy in watching the Chicago Bears and Dallas Cowboys lose on game day.",
    image: "https://images.unsplash.com/photo-1508243529287-e2191471ba2d?auto=format&fit=crop&w=800&q=80"
  }
];

const OurTeam: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
       <div className="bg-slate-900 text-white pt-40 pb-20 relative overflow-hidden">
         <div className="absolute inset-0 bg-green-600/5"></div>
         <div className="container mx-auto px-6 relative z-10 text-center">
             <h1 className="text-4xl md:text-6xl font-heading font-black mb-6">Let's Meet Our Family</h1>
             <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Dedicated professionals committed to protecting your home.
             </p>
         </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
            {TEAM.map((member, idx) => (
                <div key={idx} className="flex flex-col md:flex-row gap-8 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow items-start">
                    <div className="flex-shrink-0 w-full md:w-64">
                        <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
                            <img 
                                src={member.image} 
                                alt={member.name} 
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                            <h2 className="text-3xl font-heading font-black text-slate-800 uppercase">{member.name}</h2>
                            <div className="h-1 flex-1 bg-slate-200 rounded-full"></div>
                        </div>
                        <div className="relative">
                            <Quote className="absolute -top-2 -left-2 text-green-200 w-10 h-10 opacity-50 transform -scale-x-100" />
                            <p className="text-slate-600 leading-relaxed text-lg relative z-10 pl-6">
                                {member.bio}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;