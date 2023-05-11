import Area from '../common/Area'
import Slogan from './Slogan'
import main from '../../../../public/main.jpg'
import ResponsiveImage from '../common/ResponsiveImage'

export default function Highlight() {
    return (
        <Area id='home' className='pt-20'>
            <div
                className={`
                    flex justify-around items-center
                    h-[500px]
                `}
            >
                <Slogan />
                <ResponsiveImage
                    image={main}
                    className='rotate-3 hidden md:inline'
                />
            </div>
        </Area>
    )
}
