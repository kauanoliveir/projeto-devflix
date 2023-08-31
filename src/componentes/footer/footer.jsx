import { Children } from "react";
import "./footer.module.css";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
import SocialLinks from "../SocialLinks/socialLinks";

const Footer = ({children, link}) => {
  return (
    <footer>
      <p>
        Feito com <ion-icon name="heart" /> por{" "}
        <a href={link} target="_blank">
        {children} 
        </a>
      </p>
        <SocialLinks icon={"logo-github"} href={"https://github.com/kauanoliveir"} />
        <SocialLinks icon={"logo-instagram"} href={"https://www.instagram.com/k.oliveira_06/"} />
        <SocialLinks icon={"logo-twitter"} href={"https://twitter.com/KauanOl62006771"} />
        <SocialLinks icon={"logo-tiktok"} href={"https://www.tiktok.com/@k.oliveira06"} />
        <SocialLinks icon={"logo-linkedin"} href={""} />
    </footer>
  );
};

export default Footer;
