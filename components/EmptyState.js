import React from 'react'
import { Heading, Text, Button, VStack } from '@chakra-ui/react'

import DashboardShell from './DashboardShell'
import AddSiteModal from './AddSiteModal'

const EmptyState = () => (
    <DashboardShell>
        <VStack
            width="400px"
            br={8}
            backgroundColor="white"
            borderRadius="8px"
            p={8}
            textAlign="center"
        >
            <Heading size="md">You haven't added any plan</Heading>
            <Text>Welcome, Let's get started.</Text>
            <AddSiteModal />
        </VStack>
    </DashboardShell>
)

export default EmptyState
