import { MyNavbar } from '@/components/shared/MyNavbar'
import React from 'react'

const layout = ({children}:{children: React.ReactNode}) => {
    return (
        <div>
            <MyNavbar>
                <div className="flex min-h-screen flex-col">
                    {children}
                </div>
            </MyNavbar>
        </div>
    )
}

export default layout