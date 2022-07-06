import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react'
import Home from './Home'
import About from './About'
import Skills from './Skills'

export default function Link() {

  return (
    <Tabs width={'100vw'} variant={'solid-rounded'} height={'100vh'} colorScheme={'orange'} pl={3} pt={4} isLazy lazyBehavior={'keepMounted'}>
        <TabList>
            <Tab>Home</Tab>
            <Tab>Skills</Tab>
            <Tab>About</Tab>
        </TabList>
        <TabPanels pr={'3vw'}>
            <TabPanel>
                <Home />
            </TabPanel>
            <TabPanel>
                <Skills />
            </TabPanel>
            <TabPanel>
                <About />
            </TabPanel>
        </TabPanels>
    </Tabs>
  )
}