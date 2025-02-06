import Image from "next/image";

// export default
function Socials({ url, name, icon, iconAlt }) {
  return (
    <>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image aria-hidden src={icon} alt={iconAlt} width={16} height={16} />
        {name}
      </a>
    </>
  );
}

export default function Footer() {
  const name: string = "Ragib Asif";
  const year: number = new Date().getFullYear();
  const linkedInLink: string = "https://www.linkedin.com/in/ragibasif/";
  const gitHubLink: string = "https://github.com/ragibasif";
  const nycOpenDataLink: string =
    "https://data.cityofnewyork.us/Public-Safety/Motor-Vehicle-Collisions-Crashes/h9gi-nx95/about_data";
  const emailLink: string = "mailto:ragib.asif30@myhunter.cuny.edu";
  return (
    <>
      <Socials
        name="LinkedIn"
        url={linkedInLink}
        icon="/linkedin.svg"
        iconAlt="LinkedIn logo"
      />
      <Socials
        name="GitHub"
        url={gitHubLink}
        icon="/github.svg"
        iconAlt="GitHub logo"
      />
      <Socials
        name="Email"
        url={emailLink}
        icon="/envelope.svg"
        iconAlt="Envelope icon"
      />
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href={nycOpenDataLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        Go to NYC Open Data →
      </a>
      <p>
        &copy; {year} {name}. All rights reserved.
      </p>
    </>
  );
}
