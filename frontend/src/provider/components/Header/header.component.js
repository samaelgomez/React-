import Menu from '../Menu/menu.component'


const Header = ({menu}) => {
   return(
      <>
         <header>
            <Menu props={menu}/>
         </header>
      </>
   );
}

export default Header;