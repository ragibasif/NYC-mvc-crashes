function Socials(url, name, icon, iconAlt) {
  return (
    <div>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={icon} alt={iconAlt} width={16} height={16} />
        {name}
      </a>
    </div>
  );
}
class Link {
  linkClassName = "";
  linkID = "";
  constructor(linkURL, linkName, linkID, linkClassName) {
    this.linkURL = linkURL;
    this.linkName = linkName;
    this.linkID = linkID;
    this.linkClassName = linkClassName;
  }
}

class Icon extends Link {
  constructor(
    linkURL,
    linkName,
    linkID,
    linkClassName,
    linkIconSrc,
    linkIconAlt
  ) {
    super(linkURL, linkName, linkID, linkClassName);
    this.linkIconSrc = linkIconSrc;
    this.linkIconAlt = linkIconAlt;
  }
}

function Footer() {
  const name = "Ragib Asif";
  const year = new Date().getFullYear();
  const linkedInLink = "https://www.linkedin.com/in/ragibasif/";
  const gitHubLink = "https://github.com/ragibasif";
  const nycOpenDataLink =
    "https://data.cityofnewyork.us/Public-Safety/Motor-Vehicle-Collisions-Crashes/h9gi-nx95/about_data";
  const emailLink = "mailto:ragib.asif30@myhunter.cuny.edu";
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
