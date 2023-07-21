import { GitHubIcon } from "../icons/github-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";

import './social-btn.scss';


export function SocialBtn(){
    return(
        <div className="social">
            <a href="https://www.linkedin.com/in/luana-ap-cardoso/">
                <LinkedinIcon/>
            </a>
            <a href="https://github.com/luanaxcardoso">
                <GitHubIcon/>
            </a>
        </div>
    )

}