import Area from '../common/Area'
import Advantage from './Advantage'
import advantage1 from '../../../../public/advantage1.jpg'
import advantage2 from '../../../../public/advantage2.jpg'
import advantage3 from '../../../../public/advantage3.jpg'

export default function Perks() {
    return (
        <Area id='perks' className='bg-black py-16 sm:py-36'>
            <div className='flex flex-col items-center gap-y-16 sm:gap-y-36'>
                <Advantage
                    image={advantage1}
                    title='Gerenciador financeiro completo e simples de usar'
                    subtitle='Aqui você consegue ter controle completo das suas finanças e uma visualização fácil de entender. O caminho da economia começa aqui!'
                />

                <Advantage
                    image={advantage2}
                    title='Organizado para você nunca mais esquecer uma conta'
                    subtitle='Visualize e acompanhe as suas finanças dia a dia. A organização mensal vai te ajudar a ter um controle claro das receitas e despesas!'
                    reverse
                />
                <Advantage
                    image={advantage3}
                    title='Ideal para planejamento financeiro'
                    subtitle='Nosso princípio número 1 é ser uma plataforma que torne o controle financeiro simples, então o planejamento se torna algo natural!'
                />
            </div>
        </Area>
    )
}
