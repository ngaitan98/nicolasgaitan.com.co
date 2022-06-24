import { faSpotify, faGitlab, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPersonSkating as faResume} from "@fortawesome/free-solid-svg-icons";
import resume from "../../assets/files/resume.pdf";

const links = [{
    link: "https://www.linkedin.com/in/ngaitan98",
    component: faLinkedin
}, {
    link: "https://www.github.com/ngaitan98",
    component: faGithub
}, {
    link: "https://www.gitlab.com/ngaitan98",
    component: faGitlab
}, {
    link: resume,
    component: faResume
}, {
    link: "https://www.instagram.com/untalgaitan",
    component: faInstagram
}, {
    link: "https://open.spotify.com/user/thenicogaitan",
    component: faSpotify
}]

export default links