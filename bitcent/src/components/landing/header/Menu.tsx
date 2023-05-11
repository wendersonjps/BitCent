import { IconBrandGoogle } from '@tabler/icons-react'
import MenuItem from './MenuItem'

export default function Menu() {
    function loginGoogle() {}

    return (
        <div className='flex gap-2'>
            <MenuItem url='#home' className='hidden sm:flex'>
                Início
            </MenuItem>
            <MenuItem url='#perks' className='hidden sm:flex'>
                Vantagens
            </MenuItem>
            <MenuItem url='#testimonials' className='hidden sm:flex'>
                Depoimentos
            </MenuItem>
            <MenuItem
                onClick={loginGoogle}
                className='bg-gradient-to-r from-violet-600 to-blue-500'
            >
                <div className='flex items-center gap-2'>
                    <IconBrandGoogle size={15} />
                    <span>Login</span>
                </div>
            </MenuItem>
        </div>
    )
}
