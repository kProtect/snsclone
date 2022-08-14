import { Link } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import "../css/NavStyle.css"

const Nav = () => {
    
    return (
        <nav>
          <Tabs size='md' variant='enclosed'>
           <TabList >
              <Tab className="list"><Link to="/">Home</Link></Tab>
              <Tab className="list"><Link to="add">New Comment</Link></Tab>
            </TabList>
            </Tabs>     
            
        </nav>
    );
};

export default Nav;

