
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function Template1() {
  return (
    <div className="flex mx-auto bg-white shadow-lg w-full" >

     
   {/* <LeftColumn /> */}
   <div className="bg-slate-700 w-1/3 text-white p-6" >
        <div className="mb-6">
          <Image
            src="/placeholder.svg?height=150&width=150"
            alt="Profile picture"
            width={150}
            height={150}
            className="rounded-full mx-auto bg-white"
          />
        </div>
        <h1 className="text-2xl font-bold mb-2">KHALIL RICHARDSON</h1>
        <p className="mb-6">JOURNALIST</p>
        
        <h2 className="text-xl font-semibold mb-2">ABOUT ME</h2>
        <p className="mb-6 text-sm">
          As a seasoned journalist with over 7 years of experience in delivering impactful and thought-provoking stories, I am passionate about investigating and uncovering the truth. I am committed to producing high-quality, accurate, and engaging content that informs, educates, and inspires readers.
        </p>
        
        <h2 className="text-xl font-semibold mb-2">SKILLS</h2>
        <ul className="list-none mb-6 text-sm">
          <li>- Teamwork</li>
          <li>- Communication</li>
          <li>- Data visualization</li>
          <li>- InDesign</li>
          <li>- Google Suite</li>
        </ul>
        
        <h2 className="text-xl font-semibold mb-2">CONTACT</h2>
        <p className="text-sm mb-1">📞 +1 686 0202 020</p>
        <p className="text-sm mb-1">✉️ name.lastname@email.com</p>
        <p className="text-sm">📍 Virginia, US</p>
      </div>

      {/* Right Column */}
      <div className="w-2/3 p-6">
        <section className="mb-6">
          <h2 className="text-xl font-semibold bg-yellow-100 p-1 mb-2">WORK EXPERIENCE</h2>
          <div className="mb-4">
            <h3 className="font-semibold">THE VIRGINIAN PILOT | 20XX – 20XX</h3>
            <p className="italic">Journalist, Norfolk</p>
            <ul className="list-disc list-inside text-sm">
              <li>Pitch timely story ideas for investigative journalism.</li>
              <li>Write 15 stories monthly covering the latest in breaking news.</li>
              <li>In-depth analysis of relevant political events.</li>
              <li>Fact-checking for accuracy and data visualization purposes.</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">DAILY PRESS | 20XX – 20XX</h3>
            <p className="italic">Staff Editor, Newport News</p>
            <ul className="list-disc list-inside text-sm">
              <li>Published a weekly blog covering the latest in tech innovations.</li>
              <li>Maintained a 3.5% engagement rate.</li>
              <li>Interviewed digital entrepreneurs on a weekly basis.</li>
              <li>Aided in-house writers in editing and fact-checking for accuracy.</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">WASHINGTON POST | 20XX – 20XX</h3>
            <p className="italic">Washington D.C., Washington</p>
            <ul className="list-disc list-inside text-sm">
              <li>Created compelling pieces for online publications which included coordinating images and layout for best presentation standards.</li>
              <li>Developed key story ideas by evaluating and following up on news leads and tips.</li>
              <li>Aided contributors in editing and fact-checking for accuracy.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">THE GUARDIAN | 20XX – 20XX</h3>
            <p className="italic">Contributor, Remote</p>
            <ul className="list-disc list-inside text-sm">
              <li>Conducted interviews and covered key moments from the G20 Summit 2021 in Italy.</li>
              <li>Produced in-depth and engaging online content in accordance with house style.</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold bg-yellow-100 p-1 mb-2">LANGUAGES</h2>
          <p>English: Native</p>
          <p>Spanish: Proficient</p>
          <p>French: Advanced</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold bg-yellow-100 p-1 mb-2">EDUCATION</h2>
          <div className="mb-2">
            <p className="font-semibold">20XX-20XX | Seattle - Washington</p>
            <p className="font-semibold">Masters Digital Communication</p>
            <p className="italic">University of Washington</p>
          </div>
          <div>
            <p className="font-semibold">20XX | Blacksburg - Virginia</p>
            <p className="font-semibold">B.A. Multimedia Journalism</p>
            <p className="italic">Virginia Tech</p>
          </div>
        </section>
      </div>
    </div>
  )
}
