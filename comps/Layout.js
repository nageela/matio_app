import Button from "./Buttons"

const Layout = ({children}) => {
    return ( 
        <div>
            <Button/>
            { children }

            
        </div>
     );
}
 
export default Layout;