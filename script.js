// Function to create a social link element
function createLink(url, name, icon, iconAlt) {
  const linkContainer = document.createElement("div");

  const linkIcon = document.createElement("img");
  linkIcon.src = icon;
  linkIcon.alt = iconAlt;
  linkIcon.width = 16;
  linkIcon.height = 16;

  const linkSrc = document.createElement("a");
  linkSrc.href = url;
  linkSrc.target = "_blank";
  linkSrc.rel = "noopener noreferrer";
  linkSrc.innerHTML = `${name}`;

  linkSrc.appendChild(linkIcon);
  linkContainer.appendChild(linkSrc);

  return linkContainer;
}

// Function to create the footer
function createFooter() {
  const name = "Ragib Asif";
  const year = new Date().getFullYear();
  const linkedInLink = "https://www.linkedin.com/in/ragibasif/";
  const gitHubLink = "https://github.com/ragibasif";
  const nycOpenDataLink =
    "https://data.cityofnewyork.us./assets-Safety/Motor-Vehicle-Collisions-Crashes/h9gi-nx95/about_data";
  const emailLink = "mailto:ragib.asif30@myhunter.cuny.edu";

  const footer = document.getElementById("footer-container");

  // Add LinkedIn social link
  footer.appendChild(
    createLink(linkedInLink, "LinkedIn", "assets/linkedin.svg", "LinkedIn logo")
  );

  // Add GitHub social link
  footer.appendChild(
    createLink(gitHubLink, "GitHub", "assets/github.svg", "GitHub logo")
  );

  // Add Email social link
  footer.appendChild(
    createLink(emailLink, "Email", "assets/envelope.svg", "Envelope icon")
  );

  footer.appendChild(
    createLink(
      nycOpenDataLink,
      "Go to NYC Open Data →",
      "assets/globe.svg",
      "Globe icon"
    )
  );
  const copyrightText = document.createElement("p");
  copyrightText.innerText = `© ${year} ${name}. All rights reserved.`;
  footer.appendChild(copyrightText);

  return footer;
}

// Append the footer to the body
document.body.appendChild(createFooter());
