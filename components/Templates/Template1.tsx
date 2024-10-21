import Image from "next/image";

export default function Template1() {
  return (
  <div className="flex mx-auto bg-white shadow-lg w-[80%]">
  <div className="bg-slate-700 w-1/3 text-white p-4">
    <div className="mb-4">
      <Image
        src="/placeholder.svg?height=100&width=100"
        alt="Profile picture"
        width={100}
        height={100}
        className="rounded-full mx-auto bg-white"
      />
    </div>
    <h1 className="text-xl font-bold mb-1">KHALIL RICHARDSON</h1>
    <p className="mb-4 text-xs">JOURNALIST</p>

    <h2 className="text-lg font-semibold mb-1">ABOUT ME</h2>
    <p className="mb-4 text-xs">
      Experienced journalist passionate about uncovering the truth and producing high-quality content.
    </p>

    <h2 className="text-lg font-semibold mb-1">SKILLS</h2>
    <ul className="list-none mb-4 text-xs">
      <li>- Teamwork</li>
      <li>- Communication</li>
      <li>- Data visualization</li>
      <li>- InDesign</li>
      <li>- Google Suite</li>
    </ul>

    <h2 className="text-lg font-semibold mb-1">CONTACT</h2>
    <p className="text-xs mb-1">📞 +1 686 0202 020</p>
    <p className="text-xs mb-1">✉️ name.lastname@email.com</p>
    <p className="text-xs">📍 Virginia, US</p>
  </div>

  <div className="w-2/3 px-4 py-2">
    <section className="mb-4">
      <h2 className="text-base font-semibold bg-yellow-100 p-1 mb-1">
        WORK EXPERIENCE
      </h2>
      <div className="mb-2">
        <h3 className="font-semibold text-sm">THE VIRGINIAN PILOT | 20XX – 20XX</h3>
        <p className="italic text-xs">Journalist, Norfolk</p>
        <ul className="list-disc list-inside text-xs">
          <li>Pitch timely story ideas for investigative journalism.</li>
          <li>Write 15 stories monthly covering breaking news.</li>
          <li>In-depth analysis of political events.</li>
          <li>Fact-checking for accuracy and data visualization.</li>
        </ul>
      </div>
      <div className="mb-2">
        <h3 className="font-semibold text-sm">DAILY PRESS | 20XX – 20XX</h3>
        <p className="italic text-xs">Staff Editor, Newport News</p>
        <ul className="list-disc list-inside text-xs">
          <li>Published a weekly blog on tech innovations.</li>
          <li>Maintained a 3.5% engagement rate.</li>
          <li>Interviewed digital entrepreneurs weekly.</li>
          <li>Aided writers in editing and fact-checking.</li>
        </ul>
      </div>
      <div className="mb-2">
        <h3 className="font-semibold text-sm">WASHINGTON POST | 20XX – 20XX</h3>
        <p className="italic text-xs">Washington D.C., Washington</p>
        <ul className="list-disc list-inside text-xs">
          <li>Created compelling pieces for online publications.</li>
          <li>Developed story ideas from news leads and tips.</li>
          <li>Aided contributors in editing and fact-checking.</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-sm">THE GUARDIAN | 20XX – 20XX</h3>
        <p className="italic text-xs">Contributor, Remote</p>
        <ul className="list-disc list-inside text-xs">
          <li>Covered key moments from the G20 Summit 2021.</li>
          <li>Produced engaging online content in house style.</li>
        </ul>
      </div>
    </section>

    <section className="mb-4">
      <h2 className="text-base font-semibold bg-yellow-100 p-1 mb-1">
        LANGUAGES
      </h2>
      <p className="text-xs">English: Native</p>
      <p className="text-xs">Spanish: Proficient</p>
      <p className="text-xs">French: Advanced</p>
    </section>

    <section>
      <h2 className="text-base font-semibold bg-yellow-100 p-1 mb-1">
        EDUCATION
      </h2>
      <div className="mb-1">
        <p className="font-semibold text-xs">20XX-20XX | Seattle - Washington</p>
        <p className="font-semibold text-xs">Masters Digital Communication</p>
        <p className="italic text-xs">University of Washington</p>
      </div>
      <div>
        <p className="font-semibold text-xs">20XX | Blacksburg - Virginia</p>
        <p className="font-semibold text-xs">B.A. Multimedia Journalism</p>
        <p className="italic text-xs">Virginia Tech</p>
      </div>
    </section>
  </div>
</div>
  );
}
