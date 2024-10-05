
import Image from "next/image"

export default function Resume({ size }:{size:string}) {
  const getContainerClasses = () => {
    switch (size) {
      case "small":
        return "w-1/4 text-xs p-2"; // Small size for template
      case "medium":
        return "h-screen w-3/4 text-sm p-4"; // Medium size for editor
      case "full":
      default:
        return "w-full p-6"; // Full size for download
    }
  };

  return (
    <div className={`flex mx-auto bg-white shadow-lg ${getContainerClasses()}`}>
      {/* <LeftColumn/> */}
      <div className="bg-slate-700 w-1/3 text-white p-4">
        <div className="mb-4">
          <Image
            src="/placeholder.svg?height=150&width=150"
            alt="Profile picture"
            width={size === 'small' ? 80 : 150} // Smaller image for the small version
            height={size === 'small' ? 80 : 150}
            className="rounded-full mx-auto bg-white"
          />
        </div>
        <h1 className={`text-2xl font-bold mb-2 ${size === 'small' ? 'text-lg' : ''}`}>KHALIL RICHARDSON</h1>
        <p className={`mb-4 ${size === 'small' ? 'text-xs' : 'text-sm'}`}>JOURNALIST</p>

        <h2 className={`text-xl font-semibold mb-2 ${size === 'small' ? 'text-sm' : 'text-lg'}`}>ABOUT ME</h2>
        <p className={`mb-6 ${size === 'small' ? 'text-xs' : 'text-sm'}`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum non enim ducimus ab voluptatum porro fugiat tempora iste, laborum ea vitae quod facere veritatis modi dicta ipsam, recusandae repellendus deserunt neque nemo libero, 
        </p>

        <h2 className={`text-xl font-semibold mb-2 ${size === 'small' ? 'text-sm' : 'text-lg'}`}>SKILLS</h2>
        <ul className={`list-none mb-6 ${size === 'small' ? 'text-xs' : 'text-sm'}`}>
          <li>- Teamwork</li>
          <li>- Communication</li>
          <li>- Data visualization</li>
          <li>- InDesign</li>
          <li>- Google Suite</li>
        </ul>

        <h2 className={`text-xl font-semibold mb-2 ${size === 'small' ? 'text-sm' : 'text-lg'}`}>CONTACT</h2>
        <p className={`text-sm mb-1 ${size === 'small' ? 'text-xs' : ''}`}>📞 +1 686 0202 020</p>
        <p className={`text-sm mb-1 ${size === 'small' ? 'text-xs' : ''}`}>✉️ name.lastname@email.com</p>
        <p className={`text-sm ${size === 'small' ? 'text-xs' : ''}`}>📍 Virginia, US</p>
      </div>

      {/* Right Column */}
      <div className="w-2/3 p-6 overflow-y-auto">
        <section className="mb-4">
          <h2 className={`text-xl font-semibold bg-yellow-100 p-1 mb-2 ${size === 'small' ? 'text-sm' : 'text-lg'}`}>
            WORK EXPERIENCE
          </h2>
          <div className="mb-4">
            <h3 className={`font-semibold ${size === 'small' ? 'text-sm' : ''}`}>THE VIRGINIAN PILOT | 20XX – 20XX</h3>
            <p className={`italic ${size === 'small' ? 'text-xs' : 'text-sm'}`}>Journalist, Norfolk</p>
            <ul className={`list-disc list-inside ${size === 'small' ? 'text-xs' : 'text-sm'}`}>
              <li>Pitch timely story ideas for investigative journalism.</li>
              <li>Write 15 stories monthly covering the latest in breaking news.</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className={`font-semibold ${size === 'small' ? 'text-sm' : ''}`}>THE VIRGINIAN PILOT | 20XX – 20XX</h3>
            <p className={`italic ${size === 'small' ? 'text-xs' : 'text-sm'}`}>Journalist, Norfolk</p>
            <ul className={`list-disc list-inside ${size === 'small' ? 'text-xs' : 'text-sm'}`}>
              <li>Pitch timely story ideas for investigative journalism.</li>
              <li>Write 15 stories monthly covering the latest in breaking news.</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className={`font-semibold ${size === 'small' ? 'text-sm' : ''}`}>DAILY PRESS | 20XX – 20XX</h3>
            <p className={`italic ${size === 'small' ? 'text-xs' : 'text-sm'}`}>Staff Editor, Newport News</p>
            <ul className={`list-disc list-inside ${size === 'small' ? 'text-xs' : 'text-sm'}`}>
              <li>Published a weekly blog covering the latest in tech innovations.</li>
              <li>Maintained a 3.5% engagement rate.</li>
            </ul>
          </div>
        </section>

        <section className="mb-4">
          <h2 className={`text-xl font-semibold bg-yellow-100 p-1 mb-2 ${size === 'small' ? 'text-sm' : 'text-lg'}`}>LANGUAGES</h2>
          <p className={`${size === 'small' ? 'text-xs' : 'text-sm'}`}>English: Native</p>
          <p className={`${size === 'small' ? 'text-xs' : 'text-sm'}`}>Spanish: Proficient</p>
        </section>

        <section>
          <h2 className={`text-xl font-semibold bg-yellow-100 p-1 mb-2 ${size === 'small' ? 'text-sm' : 'text-lg'}`}>EDUCATION</h2>
          <div className="mb-2">
            <p className={`font-semibold ${size === 'small' ? 'text-xs' : 'text-sm'}`}>20XX-20XX | Seattle - Washington</p>
            <p className={`font-semibold ${size === 'small' ? 'text-xs' : 'text-sm'}`}>Masters Digital Communication</p>
            <p className={`italic ${size === 'small' ? 'text-xs' : 'text-sm'}`}>University of Washington</p>
          </div>
          <div className="mb-2">
            <p className={`font-semibold ${size === 'small' ? 'text-xs' : 'text-sm'}`}>20XX-20XX | Seattle - Washington</p>
            <p className={`font-semibold ${size === 'small' ? 'text-xs' : 'text-sm'}`}>Masters Digital Communication</p>
            <p className={`italic ${size === 'small' ? 'text-xs' : 'text-sm'}`}>University of Washington</p>
          </div>
          <div className="mb-2">
            <p className={`font-semibold ${size === 'small' ? 'text-xs' : 'text-sm'}`}>20XX-20XX | Seattle - Washington</p>
            <p className={`font-semibold ${size === 'small' ? 'text-xs' : 'text-sm'}`}>Masters Digital Communication</p>
            <p className={`italic ${size === 'small' ? 'text-xs' : 'text-sm'}`}>University of Washington</p>
          </div>
        </section>
      </div>
    </div>
  );
}
