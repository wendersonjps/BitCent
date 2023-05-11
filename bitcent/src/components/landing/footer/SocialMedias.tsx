import {
    IconBrandFacebook,
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandYoutube,
} from '@tabler/icons-react'
import SocialMedia from './SocialMedia'

export default function SocialMedias() {
    return (
        <div className='flex'>
            <SocialMedia
                icon={<IconBrandYoutube />}
                url='https://www.youtube.com/'
            />
            <SocialMedia
                icon={<IconBrandInstagram />}
                url='https://www.instagram.com/wenderson.jps/'
            />
            <SocialMedia
                icon={<IconBrandFacebook />}
                url='https://www.facebook.com/'
            />
            <SocialMedia
                icon={<IconBrandGithub />}
                url='https://github.com/wendersonjps/'
            />
        </div>
    )
}
