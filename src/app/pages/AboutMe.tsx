import { FormattedMessage } from "react-intl";
import TerminalIcon from "@mui/icons-material/Terminal";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Typewriter from "typewriter-effect";
import Squares from "@/app/blocks/Backgrounds/Squares/Squares";

export default function AboutMe() {
  return (
    <section id="about" className="pt-15">
      <div className="relative" style={{ height: "calc(100vh - 3.75rem)" }}>
        <div className="absolute inset-0 z-0">
          <Squares speed={0.5} squareSize={40} direction="diagonal" borderColor="#222222" hoverFillColor="#CB64B6" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center pointer-events-none">
          <div className="flex justify-center text-[48px] leading-none">
            <TerminalIcon
              className="text-pink-400 relative"
              sx={{ fontSize: 48, top: "1px" }}
            />
            <Typewriter
              options={{
                strings: ["Hello, I'm Nataly!", "Hola, soy Nataly!"],
                autoStart: true,
                delay: 80,
                loop: true,
              }}
            />
          </div>
          <div className="flex flex-col items-center justify-center w-150 max-w-full my-5">
            <FormattedMessage id="about_me.description" />
          </div>
          <div className="flex space-x-5 rtl:space-x-reverse items-center justify-center pointer-events-auto">
            <a href="mailto:natalysalazar646@gmail.com" className="hover:text-pink-400">
              <EmailIcon fontSize="large" />
            </a>
            <a href="https://linkedin.com/in/natalysalazar95/" target="_blank" className="hover:text-pink-400">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="https://github.com/np646" target="_blank" className="hover:text-pink-400">
              <GitHubIcon fontSize="large" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
