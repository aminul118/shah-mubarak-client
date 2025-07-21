import Navbar from '@/components/Navbar/Navbar';
import { IChildren } from '@/types';


const RootLayout = ({children}:IChildren) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
};

export default RootLayout;