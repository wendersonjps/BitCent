import Page from '../template/Page'
import Header from './header'
import Highlight from './highlight'
import Perks from './perks'
import Testimony from './testimony'
import Footer from './footer'

export default function Landing() {
    return (
        <Page>
            <Header />
            <Highlight />
            <Perks />
            <Testimony />
            <Footer />
        </Page>
    )
}
