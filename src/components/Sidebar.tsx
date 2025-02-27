import { GithubIcon } from "lucide-react"
import Image from "next/image"

function Sidebar() {
  return (
    <div className='flex flex-col fixed left-1 bottom-1/3'>
      <div className="ml-1">
        <a href='https://github.com/Agutale-Arpit'>
          <Image
            src="/github.svg"
            width={25}
            height={25}
            alt="Github" />
        </a>
      </div>
      <a href="https://www.linkedin.com/in/arpit-agutale">
        <Image
          src="/linkedin.svg"
          width={32}
          height={32}
          alt="Linkedin"
        />
      </a>
      <div className="ml-0.5">
        <a href="https://x.com/Mount_Zzzzk">
          <Image
            src="/twitter.svg"
            width={28}
            height={28}
            alt="Twitter"
          />
        </a>
      </div>
    </div>
  )
}

export default Sidebar
