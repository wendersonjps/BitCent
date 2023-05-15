import Image from 'next/image'
import Page from './Page'
import loading from '../../../public/loading.gif'

export default function Loading() {
    return (
        <Page external className='justify-center items-center'>
            <Image
                priority
                src={loading}
                alt='loading'
                width={40}
                height={40}
            />
        </Page>
    )
}
