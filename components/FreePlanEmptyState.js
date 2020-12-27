import React from 'react'
import { Heading, Box, Text, Button } from '@chakra-ui/core'

import DashboardShell from './DashboardShell'

const FreePlanEmptyState = () => (
    <DashboardShell>
        <Box width="100%" backgroundColor="white" borderRadius="8px" p={8}>
            <Heading size="md">Get feedback from your site instantanly</Heading>
            <Text>start todat free</Text>
            <Button variant="solid" size="md">
                Upgrade to Starter
            </Button>
        </Box>
    </DashboardShell>
)

export default FreePlanEmptyState
