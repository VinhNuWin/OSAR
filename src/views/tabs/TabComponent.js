import { useState } from 'react';
import { useSelector } from 'react-redux';
import AssailantSummary from '../drawer/AssailantSummary';
import { motion } from 'framer-motion';
import IncidentSummary from '../drawer/IncidentSummary';
import UserSummary from '../drawer/UserSummary';
import { Tab, Tabs, TabList, TabPanel, TabPanels } from '@chakra-ui/react';

// const Tab = ({ label, activeTab, onClick }) => {
//     return (
//         <button style={activeTab === label ? { color: 'red' } : {}} onClick={onClick}>{label}</button>
//     )
// };

const TabContent = ({ label, activeTab, children }) => {
    return activeTab === label ? 
    <motion.div>{children}</motion.div> : null;

};




export default function TabComponent(){
    const [ activeTab, setActiveTab ] = useState('User');
    const { incident } = useSelector((state) => {
        return {
            incident: state.index.registry.incident
        }
      });

      const incidentArrayList = Object.values(incident);

    const handleTabClick = tab => {
        setActiveTab(tab);
    };
    
    console.log(activeTab);
    return (
        <div>
            <Tabs isFitted size='md' variant='line' colorScheme='alphaWhite'>
                <TabList>
            <Tab label="User" activeTab={activeTab} onClick={() => handleTabClick('User')}>User</Tab>
            <Tab label="Incident" activeTab={activeTab} onClick={() => handleTabClick('Incident')}>Incident</Tab>
            <Tab label="Assailant" activeTab={activeTab} onClick={() => handleTabClick('Assailant')}>Assailant</Tab>
            </TabList>
            </Tabs>

  
        <motion.div
            className='summary-container'
            animate={activeTab ? "open" : "closed"}
            transition={{ duration: 0.5 }}
            >
        
        <TabContent label='User' activeTab={activeTab} >
            <UserSummary />
        </TabContent>
        <TabContent label='Incident' activeTab={activeTab}>
            <IncidentSummary />
        </TabContent>
        <TabContent label='Assailant' activeTab={activeTab}>
            <AssailantSummary />
        </TabContent>

        </motion.div>

        </div>
    )
}